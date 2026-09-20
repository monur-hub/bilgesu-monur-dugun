import kalp from '../assets/kalp.png';

export function HeartMark({ size = 28, opacity = 1, style = {} }) {
  return <img src={kalp} alt="" style={{ width: size, height: 'auto', opacity, display: 'block', ...style }} />;
}

export default HeartMark;
