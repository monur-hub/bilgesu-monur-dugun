import { useCardTilt } from '../hooks/useCardTilt';
import bg2 from '../assets/bg2.png';

function EventCard({ ev }) {
  const { tilt, onMove, onLeave } = useCardTilt();
  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} style={{ flex: '1 1 300px', maxWidth: 340, perspective: 900 }}>
      <div
        style={{
          background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(8px)', border: '1px solid rgba(140,115,85,0.18)',
          borderRadius: 22, padding: '40px 28px', textAlign: 'center', boxShadow: '0 24px 50px rgba(90,70,40,0.14)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d',
        }}
      >
        <div style={{ fontFamily: "'Great Vibes',cursive", fontSize: 44, color: '#5b4327', margin: '0 0 14px' }}>{ev.title}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 30, color: '#4a5d3a' }}>{ev.date}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 18, color: '#4a5d3a', marginBottom: 10 }}>
          {ev.weekday}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', margin: '4px 0 18px' }}>
          {ev.times.map((t) => (
            <div key={t.label}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: 22, letterSpacing: 1, color: '#a08b6f' }}>{t.time}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: '#8a7355' }}>{t.label}</div>
            </div>
          ))}
        </div>
        <div style={{ width: 56, height: 1, background: '#c9a24b', margin: '0 auto 20px', opacity: 0.5 }} />
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, lineHeight: 1.6, color: '#6b5d4c' }}>{ev.venue}</div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, lineHeight: 1.6, color: '#a08b6f', marginTop: 4 }}>
          {ev.address}
        </div>
        <a
          href={ev.mapLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, padding: '10px 22px',
            border: '1px solid #8a7355', borderRadius: 30, fontFamily: "'Cormorant Garamond',serif", fontSize: 15,
            letterSpacing: 1, color: '#5c4a3a', textDecoration: 'none',
          }}
        >
          Haritada Gör →
        </a>
      </div>
    </div>
  );
}

export function EventDetails({ events }) {
  return (
    <section
      style={{
        padding: '120px 24px', position: 'relative', overflow: 'hidden',
        backgroundImage: `linear-gradient(180deg, rgba(247,243,236,0.4), rgba(247,243,236,0.82) 65%, #f7f3ec), url(${bg2})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', color: '#c9a24b', marginBottom: 14 }}>
          Ne Zaman, Nerede
        </div>
        <h2 style={{ fontFamily: "'Great Vibes',cursive", fontSize: 'clamp(38px,5vw,56px)', color: '#5b4327', margin: 0 }}>Davet Detayları</h2>
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1140, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {events.map((ev) => (
          <EventCard key={ev.key} ev={ev} />
        ))}
      </div>
    </section>
  );
}

export default EventDetails;
