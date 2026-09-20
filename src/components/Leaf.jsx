const HUE_COLORS = ['#c9a24b', '#8a6a3f', '#7f8f66'];

function buildLeafPath(H, W, lobeDepth, lobeFreq, steps = 30) {
  const right = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI;
    const envelope = Math.sin(t);
    const x = W * envelope * (1 + lobeDepth * Math.cos(lobeFreq * t));
    const y = -H + (2 * H * i) / steps;
    right.push([x, y]);
  }
  const left = right.slice(1, -1).reverse().map(([x, y]) => [-x, y]);
  const points = [...right, ...left];
  return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ') + ' Z';
}

// meşe (oak) — elongated, gently lobed
const OAK_PATH = buildLeafPath(100, 32, 0.38, 6);
// çınar (plane/sycamore) — broad, sharply star-lobed
const PLANE_PATH = buildLeafPath(90, 52, 0.5, 10);
// ıhlamur (linden) — broad, smooth and rounded
const LINDEN_PATH = buildLeafPath(82, 46, 0.08, 3);

const LEAF_VARIANTS = [OAK_PATH, PLANE_PATH, LINDEN_PATH];

export function Leaf({ size, hue, variant = 0, rot = 0, opacity = 0.85, style = {} }) {
  const path = LEAF_VARIANTS[variant % LEAF_VARIANTS.length];
  return (
    <svg
      viewBox="-56 -104 112 216"
      width={size * 0.85}
      height={size}
      style={{ transform: `rotate(${rot}deg)`, display: 'block', ...style }}
    >
      <path d={path} fill={HUE_COLORS[hue]} opacity={opacity} />
      <line x1="0" y1="-92" x2="0" y2="98" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
      <line x1="0" y1="86" x2="0" y2="108" stroke={HUE_COLORS[hue]} strokeWidth="4" opacity={opacity} />
    </svg>
  );
}

export default Leaf;
