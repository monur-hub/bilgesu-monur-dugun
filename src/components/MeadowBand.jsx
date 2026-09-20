import bg from '../assets/bg.png';

export function MeadowBand({ height = 160, style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

export default MeadowBand;
