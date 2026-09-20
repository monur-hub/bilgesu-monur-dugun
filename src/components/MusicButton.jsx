export function MusicButton({ musicOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 52, height: 52, borderRadius: '50%',
        background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(140,115,85,0.3)',
        boxShadow: '0 8px 24px rgba(90,70,40,0.2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      aria-label={musicOn ? 'Müziği durdur' : 'Müziği başlat'}
    >
      <span
        style={{
          width: 14, height: 14, borderRadius: '50%',
          background: musicOn ? '#4a5d3a' : '#a08b6f',
          boxShadow: musicOn ? '0 0 0 6px rgba(74,93,58,0.15)' : 'none',
          transition: 'all 0.3s',
        }}
      />
    </button>
  );
}

export default MusicButton;
