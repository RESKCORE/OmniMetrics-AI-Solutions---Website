"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "./shader-canvas-utils/cn";
import { usePrefersReducedMotion } from "./shader-canvas-utils/motion";
import { getRenderSize } from "./shader-canvas-utils/render-size";

export type ShaderCanvasStatus =
  "starting" | "running" | "unsupported" | "error";

export interface ShaderCanvasProps {
  /**
   * GLSL ES 1.0 fragment shader with a `void main()`. Do not declare the uniforms —
   * they are prepended: `u_time` (seconds), `u_resolution` (pixels), `u_pointer`
   * (0–1 canvas space, y up), `u_viewport` (x, y, width, height of the visible
   * window in 0–1 canvas space, y up) and one `vec3` per entry in `colors`.
   */
  fragment?: string;
  /** Uniform name → CSS colour. Tokens are resolved and re-read when the theme changes. */
  colors?: Record<string, string>;
  /** Render resolution as a fraction of the device pixels. Lower is cheaper. */
  resolution?: number;
  /** Seconds into the animation to draw when motion is reduced, so the still frame is a good one. */
  stillTime?: number;
  /** Show compile errors over the canvas. Useful while writing a shader; errors always reach `onError`. */
  showErrors?: boolean;
  /** Called with the compile or link log when the shader fails. */
  onError?: (message: string) => void;
  /** Called when rendering starts, or when it falls back. */
  onStatusChange?: (status: ShaderCanvasStatus) => void;
  /** Describe the image for assistive tech. Without it the canvas is decorative and hidden. */
  label?: string;
  /** Content drawn on top of the shader. */
  children?: ReactNode;
  /** Merged last, so it wins. Give the component a size here. */
  className?: string;
}

/**
 * A slow drifting field of light: pale green water with a lime current running
 * through it, brightening where the pointer travels. Deliberately quiet — it is a
 * background, not a statement.
 */
const DEFAULT_FRAGMENT = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;
  vec2 m = (u_pointer * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
  float t = u_time * 0.20;
  float wave = sin(p.x * 1.8 + t * 1.5 + sin(p.y * 2.4 - t) * 0.85) * 0.5 + 0.5;
  float d = length(p - m);
  float glow = 1.1 / (0.55 + d * d * 0.9);
  float bloom = 1.0 - exp(-glow * 0.8);
  float ambient = 0.22 * (1.0 - smoothstep(0.0, 2.6, d));
  float band = smoothstep(0.08, 0.88, wave * 0.5 + bloom * 0.7 - uv.y * 0.18);
  float wash = clamp(band * 0.35 + bloom * 0.62 + ambient, 0.0, 0.82);
  vec3 colour = mix(u_surface, u_accent, wash);
  colour = mix(colour, u_ink, smoothstep(0.94, 1.0, band) * 0.06);
  gl_FragColor = vec4(colour, 1.0);
}
`;

const DEFAULT_COLORS = {
  u_accent: "var(--color-lime)",
  u_ink: "var(--color-navy)",
  u_surface: "var(--color-panel)",
};

const VERTEX = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

/** Resolve any CSS colour — a token, oklab, color-mix — to 0–1 RGB by painting one pixel. */
function toRgb(
  value: string,
  host: HTMLElement,
  probe: CanvasRenderingContext2D | null,
): [number, number, number] {
  host.style.color = value;
  const computed = getComputedStyle(host).color;
  host.style.color = "";
  if (!probe) return [0.5, 0.5, 0.5];
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = computed;
  probe.fillRect(0, 0, 1, 1);
  const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
  return [(r ?? 0) / 255, (g ?? 0) / 255, (b ?? 0) / 255];
}

/**
 * A WebGL fragment shader as a background, fed the theme.
 *
 * The shader gets the design tokens as uniforms — lime, navy and panel by default —
 * resolved by painting each one onto a one-pixel canvas and reading it back, which
 * handles tokens that are `oklab()` or `color-mix()` as well as hex. They are re-read
 * whenever the root element's class, style or theme attribute changes.
 *
 * It behaves like a background should: the loop stops off screen and in a hidden tab,
 * the resolution is capped, and under reduced motion a single frame is drawn at
 * `stillTime`. When WebGL is missing, the context is lost or the shader does not
 * compile, a CSS gradient in the same colours stays in place.
 */
export function ShaderCanvas({
  fragment = DEFAULT_FRAGMENT,
  colors = DEFAULT_COLORS,
  resolution = 1,
  stillTime = 4,
  showErrors = false,
  onError,
  onStatusChange,
  label,
  children,
  className,
}: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [status, setStatus] = useState<ShaderCanvasStatus>("starting");
  const [error, setError] = useState<string | null>(null);
  const callbacks = useRef({ onError, onStatusChange });
  callbacks.current = { onError, onStatusChange };
  const colourKey = JSON.stringify(colors);

  useEffect(() => {
    callbacks.current.onStatusChange?.(status);
  }, [status]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) {
      setStatus("unsupported");
      return;
    }

    const palette = JSON.parse(colourKey) as Record<string, string>;
    const names = Object.keys(palette);
    const header = [
      "precision mediump float;",
      "uniform float u_time;",
      "uniform vec2 u_resolution;",
      "uniform vec2 u_pointer;",
      "uniform vec4 u_viewport;",
      ...names.map((name) => `uniform vec3 ${name};`),
    ].join("\n");

    const fail = (message: string) => {
      setError(message);
      setStatus("error");
      callbacks.current.onError?.(message);
    };

    // Line numbers in the log count the prepended header; shift them so they point into the source you wrote.
    const headerLines = names.length + 5;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        // Drivers pad the log with NUL characters; keep printable text and line breaks only.
        const log = (gl.getShaderInfoLog(shader) ?? "")
          .replace(/[^\x20-\x7e\n]/g, "")
          .trim();
        const shifted =
          type === gl.FRAGMENT_SHADER
            ? log.replace(
                /(\d+):(\d+)/g,
                (_match, file, line) =>
                  `${file}:${Math.max(1, Number(line) - headerLines)}`,
              )
            : log;
        fail(shifted || "The shader did not compile.");
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERTEX);
    const pixel =
      vertex && compile(gl.FRAGMENT_SHADER, `${header}\n${fragment}`);
    if (!vertex || !pixel) return;
    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertex);
      gl.deleteShader(pixel);
      fail("Unable to allocate a shader program.");
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, pixel);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      fail(gl.getProgramInfoLog(program)?.trim() || "The shader did not link.");
      return;
    }
    gl.useProgram(program);
    setError(null);

    // One triangle that covers the viewport; the fragment shader does all the work.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uTime = uniform("u_time");
    const uResolution = uniform("u_resolution");
    const uPointer = uniform("u_pointer");
    const uViewport = uniform("u_viewport");
    const colourUniforms = names.map(
      (name) => [name, uniform(name)] as const,
    );

    const probeCanvas = document.createElement("canvas");
    probeCanvas.width = 1;
    probeCanvas.height = 1;
    const probe = probeCanvas.getContext("2d", { willReadFrequently: true });
    const applyColours = () => {
      for (const [name, location] of colourUniforms) {
        const color = palette[name];
        if (location && color)
          gl.uniform3fv(
            location,
            toRgb(color, canvas, probe),
          );
      }
    };

    const pointer = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    let frame = 0;
    let visible = true;
    let elapsed = 0;
    let last = 0;
    let lost = false;
    let rect = canvas.getBoundingClientRect();
    const maxDimension = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE) as number, gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) as number);

    // The slice of the canvas the visitor can actually see, in 0–1 canvas space
    // (y up). A page-long canvas needs it: the pointer alone would only ever
    // nudge the field, because most of the canvas is off screen.
    const viewport = { x: 0, y: 0, width: 1, height: 1 };
    const updateViewport = () => {
      const width = rect.width || 1;
      const height = rect.height || 1;
      const docTop = rect.top + window.scrollY;
      const top = Math.max(docTop, window.scrollY);
      const bottom = Math.min(docTop + height, window.scrollY + window.innerHeight);
      const left = Math.max(rect.left, 0);
      const right = Math.min(rect.right, window.innerWidth);
      viewport.x = (left - rect.left) / width;
      viewport.y = 1 - (bottom - docTop) / height;
      viewport.width = Math.max(0.001, (right - left) / width);
      viewport.height = Math.max(0.001, (bottom - top) / height);
    };

    const resize = () => {
      rect = canvas.getBoundingClientRect();
      const ratio = Math.min(2, window.devicePixelRatio || 1) * resolution;
      const size = getRenderSize(rect.width, rect.height, ratio, maxDimension);
      if (canvas.width !== size.width) canvas.width = size.width;
      if (canvas.height !== size.height) canvas.height = size.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
      updateViewport();
    };

    const render = (time: number) => {
      if (lost) return;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.uniform4f(uViewport, viewport.x, viewport.y, viewport.width, viewport.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      // This slow decorative field needs only 30 draws per second, even on 120Hz displays.
      if (last && now - last < 1000 / 30 - 1) {
        frame = requestAnimationFrame(loop);
        return;
      }
      if (last) elapsed += Math.min(0.1, (now - last) / 1000);
      last = now;
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;
      render(elapsed);
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      last = 0;
    };
    const start = () => {
      stop();
      if (reducedMotion) render(stillTime);
      else if (visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    resize();
    // Start the pointer at the middle of the visible window, not the middle of
    // a page-long canvas, so the first frame is the neutral one.
    pointer.x = pointer.targetX = viewport.x + viewport.width / 2;
    pointer.y = pointer.targetY = viewport.y + viewport.height / 2;
    applyColours();
    render(reducedMotion ? stillTime : 0);
    setStatus("running");
    start();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(reducedMotion ? stillTime : elapsed);
    });
    resizeObserver.observe(canvas);

    const intersection =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(([entry]) => {
            visible = Boolean(entry?.isIntersecting);
            if (visible) start();
            else stop();
          });
    intersection?.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === "touch") return;
      if (!rect.width || !rect.height) return;
      pointer.targetX = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width),
      );
      pointer.targetY = Math.min(
        1,
        Math.max(0, 1 - (event.clientY - rect.top) / rect.height),
      );
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    const onScroll = () => {
      rect = canvas.getBoundingClientRect();
      updateViewport();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const themeObserver = new MutationObserver(() => {
      applyColours();
      render(reducedMotion ? stillTime : elapsed);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "style"],
    });

    const onLost = (event: Event) => {
      event.preventDefault();
      lost = true;
      stop();
      setStatus("unsupported");
    };
    canvas.addEventListener("webglcontextlost", onLost);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersection?.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("webglcontextlost", onLost);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(pixel);
      gl.deleteBuffer(buffer);
    };
  }, [fragment, colourKey, resolution, stillTime, reducedMotion]);

  const drawing = status === "running";

  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      {/* The fallback is always underneath, so there is never a blank frame before the first draw. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_20%_110%,var(--color-lime)_0%,color-mix(in_oklab,var(--color-lime)_35%,var(--color-panel))_45%,var(--color-panel)_100%)]"
      />
      <canvas
        ref={canvasRef}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={cn(
          "absolute inset-0 -z-10 block size-full transition-opacity duration-700 ease-out",
          drawing ? "opacity-100" : "opacity-0",
        )}
      />
      {showErrors && error && (
        <pre
          role="alert"
          tabIndex={0}
          className="absolute inset-x-3 top-3 z-10 max-h-[60%] overflow-auto whitespace-pre-wrap rounded-[var(--radius)] border border-destructive bg-card p-3 font-mono text-[11px] leading-relaxed text-destructive"
        >
          {error}
        </pre>
      )}
      {children}
    </div>
  );
}

export default ShaderCanvas;
