import bg from '../assets/bg.png';

export function MeadowBand({ src = bg, height = 'clamp(80px, 20vw, 160px)', style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

export default MeadowBand;
