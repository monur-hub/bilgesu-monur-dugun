const HUE_COLORS = ['#f7f2e2', '#c9a24b', '#7f8f66'];

export function Flower({ size, hue, rot = 0, opacity = 0.85, style = {} }) {
  const petalW = size * 0.34;
  const petalH = size * 0.62;
  const angles = [0, 60, 120, 180, 240, 300];

  return (
    <div style={{ position: 'relative', width: size, height: size, transform: `rotate(${rot}deg)`, ...style }}>
      {angles.map((a) => (
        <div
          key={a}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: petalW,
            height: petalH,
            marginLeft: -(petalW / 2),
            marginTop: -petalH,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transformOrigin: '50% 100%',
            transform: `rotate(${a}deg)`,
            background: HUE_COLORS[hue],
            opacity,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: size * 0.16,
          height: size * 0.16,
          marginLeft: -(size * 0.08),
          marginTop: -(size * 0.08),
          borderRadius: '50%',
          background: '#e8cf8a',
          opacity: opacity + 0.1,
        }}
      />
    </div>
  );
}

export default Flower;
