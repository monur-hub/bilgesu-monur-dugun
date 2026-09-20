import { useState } from 'react';
import { EnvelopeOverlay } from './components/EnvelopeOverlay';
import { FloatingPetals } from './components/FloatingPetals';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { MeadowBand } from './components/MeadowBand';
import { EventDetails } from './components/EventDetails';
import { LocationMaps } from './components/LocationMaps';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { MusicButton } from './components/MusicButton';
import { MusicElements } from './components/MusicElements';
import { useCountdown } from './hooks/useCountdown';
import { useScrollY } from './hooks/useScrollY';
import { useMusicPlayer } from './hooks/useMusicPlayer';
import { generatePetalSeed, generateBurstSeed } from './utils/petals';
import { EVENTS } from './data/events';
import { WEDDING_DATE, MUSIC_URL, MUSIC_ENABLED } from './data/config';

export default function App() {
  const [envelopeStage, setEnvelopeStage] = useState('closed');
  const [envelopeDone, setEnvelopeDone] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [petalSeed] = useState(() => generatePetalSeed());
  const [burstSeed, setBurstSeed] = useState([]);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const scrollY = useScrollY();
  const countdownParts = useCountdown(WEDDING_DATE);
  const { audioRef, ytRef, isYouTube, youTubeEmbedSrc, play, pause, handleIframeLoad } = useMusicPlayer(MUSIC_URL);

  const openEnvelope = () => {
    if (envelopeStage !== 'closed') return;
    setEnvelopeStage('lifting');
    if (MUSIC_ENABLED !== false) {
      setMusicOn(true);
      play();
    }
    setTimeout(() => setEnvelopeStage('opening'), 450);
    setTimeout(() => {
      setEnvelopeStage('letter');
      setBurstSeed(generateBurstSeed());
      setTimeout(() => setBurstSeed([]), 2600);
    }, 1750);
    setTimeout(() => setEnvelopeStage('reveal'), 3050);
    setTimeout(() => {
      setEnvelopeStage('done');
      setEnvelopeDone(true);
    }, 3900);
  };

  const onHeroMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({ x: px, y: py });
  };
  const onHeroLeave = () => setHeroTilt({ x: 0, y: 0 });

  const toggleMusic = () => {
    const next = !musicOn;
    setMusicOn(next);
    setTimeout(() => (next ? play() : pause()), 0);
  };

  const stopMusicForVideo = () => {
    setMusicOn(false);
    pause();
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", background: '#f7f3ec', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {!envelopeDone && (
        <EnvelopeOverlay stage={envelopeStage} onOpen={openEnvelope} petalSeeds={petalSeed} burstSeeds={burstSeed} />
      )}

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5, overflow: 'hidden' }}>
          <FloatingPetals seeds={petalSeed} />
        </div>

        <MusicButton musicOn={musicOn} onToggle={toggleMusic} />
        <MusicElements
          isYouTube={isYouTube}
          youTubeEmbedSrc={youTubeEmbedSrc}
          audioRef={audioRef}
          ytRef={ytRef}
          onIframeLoad={handleIframeLoad}
        />

        <Hero countdownParts={countdownParts} scrollY={scrollY} tilt={heroTilt} onMove={onHeroMove} onLeave={onHeroLeave} />
        <OurStory />
        <MeadowBand height="clamp(70px, 18vw, 130px)" />
        <EventDetails events={EVENTS} />
        <RSVPForm />
        <MeadowBand height="clamp(70px, 18vw, 130px)" />
        <LocationMaps events={EVENTS} />
        <Footer onVideoPlay={stopMusicForVideo} />
      </div>
    </div>
  );
}
