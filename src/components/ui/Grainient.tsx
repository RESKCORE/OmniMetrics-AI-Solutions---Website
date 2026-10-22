import { useMemo } from "react";
import { ShaderCanvas } from "./shader-canvas";
import { cn } from "@/lib/utils";

interface GrainientProps {
  colors?: readonly [string, string, string, string, string];
  angle?: number;
  flow?: number;
  silk?: number;
  grainAmount?: number;
  lightMode?: boolean;
  className?: string;
}

const DEFAULT_COLORS = [
  "var(--grainient-white)",
  "var(--grainient-green)",
  "var(--grainient-lime)",
  "var(--grainient-neon)",
  "var(--grainient-peach)",
] as const;

/** Five-color flowing silk and film grain, sharing the accessible WebGL lifecycle. */
export default function Grainient({
  colors = DEFAULT_COLORS,
  angle = 55,
  flow = 0.8,
  silk = 0.35,
  grainAmount = 0.08,
  lightMode = true,
  className,
}: GrainientProps) {
  const palette = useMemo(() => Object.fromEntries(
    colors.map((color, index) => [`u_color${index}`, color]),
  ), [colors]);

  const fragment = useMemo(() => `
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float a = ${(angle * Math.PI / 180).toFixed(5)};
  // Where the cursor sits in the visible window (0-1, y up).
  vec2 local = clamp((u_pointer - u_viewport.xy) / max(u_viewport.zw, vec2(0.001)), -0.5, 1.5);
  // The field leans towards the cursor: the colour ramp slides under it and the
  // ribbons drift after it. Scaled by the window, so the response is the same
  // on a long page as on a short one.
  float lean = (local.y - 0.5) * 0.34 + (local.x - 0.5) * 0.18;
  vec2 shift = (local - 0.5) * u_viewport.zw * 0.8;
  vec2 p = mat2(cos(a), -sin(a), sin(a), cos(a)) * (uv - 0.5 - shift);
  float t = u_time * ${(Math.max(0, flow) * 0.16).toFixed(5)};
  float silk = ${Math.max(0, Math.min(1, silk)).toFixed(5)};
  p += vec2(sin(p.y * 5.0 + t), cos(p.x * 4.0 - t * 0.8)) * silk * 0.35;
  float ribbon = sin(p.x * 5.5 + p.y * 2.0 + t +
    sin(p.y * 5.0 - t * 0.7) * (0.4 + silk));
  float field = clamp(0.5 + ribbon * 0.36 + p.y * 0.16 + lean, 0.0, 1.0);
  vec3 color = mix(u_color0, u_color1, smoothstep(0.0, 0.25, field));
  color = mix(color, u_color2, smoothstep(0.25, 0.5, field));
  color = mix(color, u_color3, smoothstep(0.5, 0.75, field));
  color = mix(color, u_color4, smoothstep(0.75, 1.0, field));
  float highlight = 0.5 + 0.5 * cos(p.y * 4.0 - p.x * 2.0 - t * 0.6);
  ${lightMode ? "color = mix(color, u_color0, 0.45 + highlight * 0.28);" : "color *= 0.65 + highlight * 0.35;"}
  // A soft spot that stays under the cursor. Aspect corrected, so it is a
  // circle on screen and not an ellipse.
  float pd = length((uv - u_pointer) * vec2(u_resolution.x / u_resolution.y, 1.0));
  float pg = 1.0 / (1.0 + pd * pd * 14.0);
  ${lightMode
    ? "color = mix(color, u_color3, pg * 0.30);\n  color = mix(color, u_color0, pg * 0.18);"
    : "color *= 1.0 + pg * 0.5;"}
  float grain = noise(gl_FragCoord.xy) - 0.5;
  color += grain * ${Math.max(0, Math.min(1, grainAmount)).toFixed(5)};
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`, [angle, flow, silk, grainAmount, lightMode]);

  return <ShaderCanvas
    className={cn("grainient", className)}
    fragment={fragment}
    colors={palette}
    resolution={0.65}
    stillTime={4}
  />;
}