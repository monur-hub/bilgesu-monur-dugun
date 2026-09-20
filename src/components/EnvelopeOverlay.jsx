import { FloatingPetals } from './FloatingPetals';
import { BurstPetals } from './BurstPetals';
import kalp from '../assets/kalp.png';
import mix from '../assets/mix.png';

export function EnvelopeOverlay({ stage, onOpen, petalSeeds, burstSeeds }) {
  const lifting = stage === 'lifting';
  const flapOpen = stage !== 'closed' && stage !== 'lifting';
  const letterOut = stage === 'letter' || stage === 'reveal' || stage === 'done';
  const overlayFading = stage === 'reveal' || stage === 'done';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 40%,#faf6ee,#ece1cb)',
        overflow: 'hidden',
        opacity: overlayFading ? 0 : 1,
        transition: 'opacity 1.3s ease',
        pointerEvents: overlayFading ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <FloatingPetals seeds={petalSeeds} />
        <BurstPetals seeds={burstSeeds} />
      </div>

      <div style={{ position: 'relative', perspective: 1200 }}>
        <div
          onClick={onOpen}
          style={{ position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}
        >
          <div
            style={{
              position: 'absolute', inset: -70, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,162,75,0.5), rgba(201,162,75,0.15) 45%, transparent 72%)',
              filter: 'blur(4px)', pointerEvents: 'none', zIndex: 0,
              opacity: (lifting || flapOpen) && !letterOut ? 1 : letterOut ? 0.4 : 0,
              transition: 'opacity 1.2s ease',
            }}
          />
          <div
            style={{
              position: 'relative', width: 360, height: 250, transformStyle: 'preserve-3d',
              transform: lifting
                ? 'scale(1.07) translateY(-16px) rotateZ(-1.2deg)'
                : flapOpen
                ? 'scale(1.05) translateY(-10px) rotateZ(0deg)'
                : 'scale(1) translateY(0) rotateZ(0deg)',
              transition: 'transform 0.85s cubic-bezier(.3,1.4,.4,1)',
            }}
          >
            <div
              style={{
                position: 'absolute', inset: 0, borderRadius: 8,
                backgroundImage: `linear-gradient(150deg, rgba(255,253,249,0.12), rgba(90,70,40,0.08)), url(${mix})`,
                backgroundSize: '360px 252px', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat',
                boxShadow: flapOpen ? '0 30px 70px rgba(90,70,40,0.32)' : '0 20px 50px rgba(90,70,40,0.25)',
                border: '1px solid rgba(140,115,85,0.25)',
                transform: flapOpen ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.7s ease, box-shadow 0.7s ease',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute', top: '28%', left: '50%', width: 130, height: 130, zIndex: 1,
                  transform: 'translate(-50%,-50%)', borderRadius: '50%', background: '#fffdf8',
                  boxShadow: '0 4px 16px rgba(90,70,40,0.28)',
                  opacity: flapOpen ? 0.5 : 0.95,
                  transition: 'opacity 0.6s ease',
                }}
              />
              <img
                src={kalp}
                style={{
                  position: 'absolute', top: '28%', left: '50%', width: 76, zIndex: 1,
                  transform: `translate(-50%,-50%) scale(${flapOpen ? 0.94 : 1})`,
                  opacity: flapOpen ? 0.55 : 0.95,
                  transition: 'transform 0.7s ease, opacity 0.6s ease',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 125,
                  backgroundImage: `linear-gradient(135deg, rgba(255,250,242,0.12), rgba(90,70,40,0.1)), url(${mix})`,
                  backgroundSize: '360px 252px', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transformOrigin: 'top center',
                  transform: `rotateX(${flapOpen ? -172 : 0}deg) scale(${flapOpen ? 1.02 : 1})`,
                  transition: 'transform 1.5s cubic-bezier(.45,.05,.15,1) 0.15s',
                  boxShadow: '0 2px 10px rgba(90,70,40,0.2)',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute', left: '10%', right: '10%', bottom: 10,
                background: '#fffdf8', borderRadius: 4, padding: '24px 22px 18px',
                textAlign: 'center', boxShadow: '0 -4px 18px rgba(90,70,40,0.1)',
                transform: letterOut ? 'translateY(-212px) scale(1) rotateX(0deg)' : 'translateY(0) scale(0.92) rotateX(-6deg)',
                opacity: letterOut ? 1 : 0,
                transition: 'transform 1.35s cubic-bezier(.2,.85,.15,1) 0.3s, opacity 0.8s ease 0.3s',
              }}
            >
              <img src={kalp} style={{ width: 110, display: 'block', margin: '0 auto' }} />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, letterSpacing: 2, color: '#a08b6f', marginTop: 4 }}>
                06 – 10.10.2026
              </div>
            </div>
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 18, letterSpacing: 3, textTransform: 'uppercase',
              color: '#4a5d3a', animation: 'softPulse 2.4s ease-in-out infinite',
              opacity: stage === 'closed' ? 1 : 0, transition: 'opacity 0.3s ease',
            }}
          >
            Davetiyeyi Açmak İçin Dokunun
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvelopeOverlay;
