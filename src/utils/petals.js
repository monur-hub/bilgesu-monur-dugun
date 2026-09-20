export function generatePetalSeed(count = 14) {
  return Array.from({ length: count }, (_, i) => ({
    left: Math.round(Math.random() * 100),
    delay: Math.round(Math.random() * 12),
    dur: 10 + Math.round(Math.random() * 10),
    size: 11 + Math.round(Math.random() * 8),
    drift: Math.round((Math.random() - 0.5) * 160),
    rot: Math.round(Math.random() * 360),
    hue: i % 3,
    leaf: Math.floor(Math.random() * 3),
  }));
}

export function generateBurstSeed(count = 18) {
  return Array.from({ length: count }, () => ({
    bx: Math.round((Math.random() - 0.5) * 900),
    by: Math.round(-300 - Math.random() * 500),
    brot: Math.round((Math.random() - 0.5) * 540),
    size: 12 + Math.round(Math.random() * 13),
    delay: Math.round(Math.random() * 300),
    dur: 1400 + Math.round(Math.random() * 900),
    hue: Math.floor(Math.random() * 3),
    leaf: Math.floor(Math.random() * 3),
  }));
}
