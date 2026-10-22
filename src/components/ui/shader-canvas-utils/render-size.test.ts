import { describe, expect, it } from "vitest";
import { getRenderSize } from "./render-size";

describe("background render budget", () => {
  it("preserves normal viewport dimensions", () => {
    expect(getRenderSize(1280, 900, 1, 4096)).toEqual({ width: 1280, height: 900 });
  });
  it("bounds a long high-density page without cropping", () => {
    const size = getRenderSize(1450, 6000, 1.3, 4096);
    expect(size.width * size.height).toBeLessThanOrEqual(1_500_000);
    expect(size.height).toBeLessThanOrEqual(4096);
    expect(size.width / size.height).toBeCloseTo(1450 / 6000, 2);
  });
  it("stays within the graphics driver limit", () => {
    expect(getRenderSize(100, 20000, 1, 1024).height).toBeLessThanOrEqual(1024);
  });
});