export function MusicElements({ isYouTube, youTubeEmbedSrc, audioRef, ytRef, onIframeLoad }) {
  return (
    <>
      {isYouTube && (
        <iframe
          ref={ytRef}
          src={youTubeEmbedSrc}
          allow="autoplay"
          title="music"
          onLoad={onIframeLoad}
          style={{ position: 'fixed', width: 1, height: 1, opacity: 0, pointerEvents: 'none', border: 0 }}
        />
      )}
      <audio ref={audioRef} loop preload="none" />
    </>
  );
}

export default MusicElements;
