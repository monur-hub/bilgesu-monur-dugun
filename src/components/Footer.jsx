import { useState } from 'react';
import { MeadowBand } from './MeadowBand';
import { HeartMark } from './HeartMark';

const GAZZE_VIDEO_EMBED = 'https://drive.google.com/file/d/1fWL66-Vlfkao5kfQ_jDLJ2zY6_Y3wCev/preview';

export function Footer({ onVideoPlay }) {
  const [videoArmed, setVideoArmed] = useState(false);

  const armVideo = () => {
    if (videoArmed) return;
    onVideoPlay?.();
    setVideoArmed(true);
  };

  return (
    <footer style={{ position: 'relative', background: '#f2ece0', overflow: 'hidden' }}>
      <MeadowBand height="clamp(90px, 24vw, 180px)" style={{ opacity: 0.9 }} />
      <div style={{ padding: '50px 20px 56px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 16, color: '#6b5d4c', maxWidth: 520, margin: '0 auto 18px', lineHeight: 1.8 }}>
          Başta Gazze halkı olmak üzere tüm Türk-İslam alemiyle barış ve huzur içinde kardeşlik sofralarında buluşmak duasıyla.
        </p>

        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 20, letterSpacing: 1, color: '#4a5d3a', marginBottom: 16 }}>
          Gazze Düğün Yemeğimiz
        </div>

        <div
          style={{
            position: 'relative', maxWidth: 480, margin: '0 auto 34px', borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(90,70,40,0.18)', border: '1px solid rgba(140,115,85,0.18)', aspectRatio: '16 / 9',
            background: '#000',
          }}
        >
          <iframe
            src={GAZZE_VIDEO_EMBED}
            title="Gazze düğün yemeğimiz"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allow="autoplay"
          />
          {!videoArmed && (
            <div
              onClick={armVideo}
              role="button"
              aria-label="Videoyu oynat"
              style={{
                position: 'absolute', inset: 0, cursor: 'pointer',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                background: 'rgba(0,0,0,0.02)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: 1, color: '#fff',
                  background: 'rgba(30,25,15,0.55)', padding: '5px 14px', borderRadius: 20, marginBottom: 10,
                }}
              >
                Oynatmak için tıklayın
              </span>
            </div>
          )}
        </div>

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
