/** Preserve the complete field while bounding GPU memory and per-frame pixel work. */
export function getRenderSize(width: number, height: number, ratio: number, maxDimension: number) {
  const requestedWidth = Math.max(1, width * ratio);
  const requestedHeight = Math.max(1, height * ratio);
  const scale = Math.min(1, Math.sqrt(1_500_000 / (requestedWidth * requestedHeight)), maxDimension / requestedWidth, maxDimension / requestedHeight);
  return { width: Math.max(1, Math.floor(requestedWidth * scale)), height: Math.max(1, Math.floor(requestedHeight * scale)) };
}