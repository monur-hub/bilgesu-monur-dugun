import { useCallback, useEffect, useRef } from 'react';
import { MUSIC_VOLUME } from '../data/config';

function getYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.slice(1);
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }
    const v = u.searchParams.get('v');
    if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
    const embedMatch = u.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    return embedMatch ? embedMatch[1] : null;
  } catch {
    return null;
  }
}

function getYouTubeStart(url) {
  if (!url) return 0;
  try {
    const u = new URL(url);
    const raw = u.searchParams.get('t') || u.searchParams.get('start');
    if (!raw) return 0;
    if (/^\d+$/.test(raw)) return parseInt(raw, 10);
    const m = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
    if (!m) return 0;
    const [, h, mnt, s] = m;
    return (parseInt(h || 0, 10) * 3600) + (parseInt(mnt || 0, 10) * 60) + parseInt(s || 0, 10);
  } catch {
    return 0;
  }
}

export function useMusicPlayer(musicUrl) {
  const audioRef = useRef(null);
  const ytRef = useRef(null);
  const youtubeId = getYouTubeId(musicUrl);
  const isYouTube = !!youtubeId;
  const startSeconds = getYouTubeStart(musicUrl);
  const youTubeEmbedSrc = isYouTube
    ? `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&playsinline=1&loop=1&playlist=${youtubeId}&start=${startSeconds}`
    : '';
  const musicSrc = isYouTube ? '' : musicUrl || '';

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = MUSIC_VOLUME;
    if (musicSrc && el.getAttribute('src') !== musicSrc) {
      el.src = musicSrc;
    } else if (!musicSrc && el.getAttribute('src')) {
      el.removeAttribute('src');
    }
  }, [musicSrc]);

  const postYT = useCallback((func, args = []) => {
    const win = ytRef.current && ytRef.current.contentWindow;
    if (win) win.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
  }, []);

  const handleIframeLoad = useCallback(() => {
    postYT('setVolume', [MUSIC_VOLUME * 100]);
  }, [postYT]);

  const play = useCallback(() => {
    if (isYouTube) {
      // Mobile autoplay policies reliably allow muted playback; unmute right
      // after so it still counts as user-initiated. Also retry playVideo in
      // case the player wasn't ready for the first command yet.
      postYT('mute');
      postYT('playVideo');
      setTimeout(() => {
        postYT('playVideo');
        postYT('setVolume', [MUSIC_VOLUME * 100]);
        postYT('unMute');
      }, 500);
    } else if (audioRef.current) {
      audioRef.current.volume = MUSIC_VOLUME;
      audioRef.current.play().catch(() => {});
    }
  }, [isYouTube, postYT]);

  const pause = useCallback(() => {
    if (isYouTube) postYT('pauseVideo');
    else if (audioRef.current) audioRef.current.pause();
  }, [isYouTube, postYT]);

  return { audioRef, ytRef, isYouTube, youTubeEmbedSrc, play, pause, handleIframeLoad };
}
