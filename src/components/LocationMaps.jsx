export function LocationMaps({ events }) {
  return (
    <section style={{ padding: '100px 24px', background: '#faf6ef', position: 'relative', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 44, position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Great Vibes',cursive", fontSize: 'clamp(30px,4.5vw,48px)', color: '#5b4327', margin: 0 }}>
          Konumlar<span style={{ marginLeft: 2, marginRight: 16 }}>/</span>Yol Tarifi
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {events.map((ev) => (
          <div
            key={ev.key}
            style={{
              flex: '1 1 320px', maxWidth: 360, borderRadius: 18, overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(90,70,40,0.14)', border: '1px solid rgba(140,115,85,0.15)',
            }}
          >
            <div style={{ padding: '16px 22px', background: '#fbf8f2', fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#4a5d3a' }}>
              {ev.title} — {ev.venue}
            </div>
            <iframe
              src={ev.mapEmbed}
              width="100%"
              height="280"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={ev.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationMaps;
