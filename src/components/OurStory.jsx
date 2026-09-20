import bg2 from '../assets/bg2.png';

export function OurStory() {
  return (
    <section
      style={{
        padding: '120px 24px', position: 'relative', overflow: 'hidden',
        backgroundImage: `linear-gradient(180deg, rgba(250,246,239,0.72), rgba(250,246,239,0.94) 60%, #faf6ef), url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(19px,2.4vw,24px)', lineHeight: 1.85, color: '#5c4a3a' }}>
          Törenlerimizde siz saygıdeğer akraba ve dostlarımızı aramızda görmekten mutluluk duyarız. Yanımızda olan ve dualarıyla gönlü bizimle olan herkese şimdiden teşekkür ederiz.
        </p>
        <div style={{ width: 80, height: 1, background: '#c9a24b', margin: '36px auto', opacity: 0.49 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap', fontFamily: "'Cormorant Garamond',serif", color: '#6b5d4c' }}>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', color: '#a08b6f' }}>KASAPOĞLU Ailesi</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#4a5d3a', marginBottom: 4 }}>
              Funda - Şafak Kasapoğlu
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', color: '#a08b6f' }}>GEZGİN Ailesi</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#4a5d3a', marginBottom: 4 }}>
              Zeynep - Yaşar Gezgin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
