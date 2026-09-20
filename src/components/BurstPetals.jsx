import { Flower } from './Flower';

export function BurstPetals({ seeds }) {
  return (
    <>
      {seeds.map((b, i) => (
        <Flower
          key={i}
          size={b.size}
          hue={b.hue}
          rot={0}
          opacity={0.9}
          style={{
            position: 'absolute',
            left: '50%',
            top: '55%',
            '--bx': `${b.bx}px`,
            '--by': `${b.by}px`,
            '--brot': `${b.brot}deg`,
            animation: `burstUp ${b.dur}ms cubic-bezier(.2,.7,.3,1) ${b.delay}ms both`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

export default BurstPetals;
