import { MeadowBand } from './MeadowBand';
import { HeartMark } from './HeartMark';

export function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#f2ece0', overflow: 'hidden' }}>
      <MeadowBand height={180} style={{ opacity: 0.9 }} />
      <div style={{ padding: '50px 20px 56px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 16, color: '#6b5d4c', maxWidth: 520, margin: '0 auto 30px', lineHeight: 1.8 }}>
          Başta Gazze halkı olmak üzere tüm Türk-İslam alemiyle barış ve huzur içinde kardeşlik sofralarında buluşmak duasıyla.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, fontFamily: "'Great Vibes',cursive", fontSize: 32, color: '#5b4327', marginBottom: 10 }}>
          <span>Bilgesu</span>
          <HeartMark size={22} />
          <span>Muhammed Onur</span>
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, letterSpacing: 2, color: '#a08b6f' }}>
          Sevgiyle bekliyoruz · 2026
        </div>
      </div>
    </footer>
  );
}

export default Footer;
