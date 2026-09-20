import bg3 from '../assets/bg3.png';
import { HeartMark } from './HeartMark';

export function Hero({ countdownParts, scrollY, tilt, onMove, onLeave }) {
  const parallax1 = scrollY * 0.06;
  const ht = tilt;

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', perspective: 1400,
        backgroundImage: `linear-gradient(180deg, rgba(247,243,236,0.25) 0%, rgba(247,243,236,0.55) 55%, #f7f3ec 96%), url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: '-10%',
          background: 'radial-gradient(circle at 30% 20%, rgba(201,162,75,0.14), transparent 55%), radial-gradient(circle at 75% 80%, rgba(127,143,102,0.18), transparent 55%)',
          transform: `translateY(${parallax1}px)`,
        }}
      />

      <div
        style={{
          position: 'relative', textAlign: 'center', padding: '40px 20px',
          transform: `rotateX(${ht.y * 4}deg) rotateY(${ht.x * -4}deg)`, transition: 'transform 0.25s ease-out',
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: '#6b5236', marginBottom: 10, opacity: 0.85 }}>
          بسم الله الرحمن الرحيم
        </div>
        <h1 style={{ fontFamily: "'Great Vibes',cursive", fontSize: 'clamp(56px,10vw,108px)', lineHeight: 1.05, margin: 0, color: '#5b4327', textShadow: '0 2px 24px rgba(90,70,40,0.18)' }}>
          Bilgesu
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0' }}>
          <HeartMark size={34} opacity={0.9} />
        </div>
        <h1 style={{ fontFamily: "'Great Vibes',cursive", fontSize: 'clamp(56px,10vw,108px)', lineHeight: 1.05, margin: 0, color: '#5b4327', textShadow: '0 2px 24px rgba(90,70,40,0.18)' }}>
          Muhammed Onur
        </h1>

        <div style={{ width: 120, height: 1, background: 'linear-gradient(90deg,transparent,#c9a24b,transparent)', margin: '34px auto' }} />

        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 'bold', letterSpacing: 3, textTransform: 'uppercase', color: '#8a7355', maxWidth: 420, margin: '0 auto 30px', lineHeight: 1.6 }}>
          Tüm Akraba ve Dostlarımızı Mutluluğumuzu Paylaşmaya Davet Ediyoruz
        </div>

        <div style={{ display: 'flex', gap: 'clamp(6px,2vw,14px)', justifyContent: 'center', flexWrap: 'nowrap' }}>
          {countdownParts.map((part) => (
            <div
              key={part.label}
              style={{
                background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(6px)', border: '1px solid rgba(140,115,85,0.18)',
                borderRadius: 14, padding: 'clamp(10px,3vw,16px) clamp(6px,2.2vw,20px)', minWidth: 'clamp(58px,17vw,76px)',
                boxShadow: '0 8px 24px rgba(90,70,40,0.08)', flex: '0 1 auto',
              }}
            >
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 'clamp(19px,6vw,30px)', color: '#4a5d3a' }}>{part.value}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(9px,2.3vw,12px)', letterSpacing: 1, textTransform: 'uppercase', color: '#8a7355', marginTop: 2, whiteSpace: 'nowrap' }}>
                {part.label}
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => document.getElementById('katilim-formu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{
            marginTop: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer',
          }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: '#8a7355' }}>
            Aşağı Kaydırın
          </div>
          <svg width="26" height="16" viewBox="0 0 26 16" style={{ animation: 'scrollChevron 1.6s ease-in-out infinite' }}>
            <path d="M2 2 L13 12 L24 2" fill="none" stroke="#4a5d3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
