import { Flower } from './Flower';

export function FloatingPetals({ seeds }) {
  return (
    <>
      {seeds.map((p, i) => (
        <Flower
          key={i}
          size={p.size}
          hue={p.hue}
          rot={p.rot}
          opacity={0.8}
          style={{
            position: 'absolute',
            top: '-8vh',
            left: `${p.left}%`,
            animation: `petalFall ${p.dur}s linear ${p.delay}s infinite`,
            '--drift': `${p.drift}px`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

export default FloatingPetals;
