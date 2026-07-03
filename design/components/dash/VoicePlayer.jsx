import React from 'react';

/* Deterministic pseudo-waveform bars from a seed string. */
function bars(seed = 'dash', n = 40) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) & 0xffff;
  const out = [];
  for (let i = 0; i < n; i++) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    out.push(0.28 + ((h >> 8) % 100) / 100 * 0.72);
  }
  return out;
}

/**
 * Voice memo player — waveform + play/pause + elapsed/total time.
 * Playback is simulated (design fidelity); wire to real audio in production.
 */
export function VoicePlayer({
  seed = 'dash',
  duration = 22,
  transcript = null,
  accent = 'var(--ochre-500)',
  onToggle,
  style = {},
}) {
  const [playing, setPlaying] = React.useState(false);
  const [t, setT] = React.useState(0);
  const wave = React.useMemo(() => bars(seed, 44), [seed]);
  const timer = React.useRef(null);

  React.useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setT((prev) => {
          if (prev >= duration) { setPlaying(false); return 0; }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(timer.current);
  }, [playing, duration]);

  const toggle = () => { setPlaying((p) => !p); onToggle && onToggle(!playing); };
  const progress = Math.min(1, t / duration);
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
        background: 'var(--surface-sunken)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)',
      }}>
        <button type="button" onClick={toggle} aria-label={playing ? '일시정지' : '재생'} style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, flexShrink: 0, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: accent, color: '#fff',
        }}>
          {playing
            ? <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2.5" y="2" width="3" height="10" rx="1" fill="currentColor" /><rect x="8.5" y="2" width="3" height="10" rx="1" fill="currentColor" /></svg>
            : <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3.5 2.2v9.6a.6.6 0 0 0 .9.5l7.2-4.8a.6.6 0 0 0 0-1L4.4 1.7a.6.6 0 0 0-.9.5Z" fill="currentColor" /></svg>}
        </button>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, height: 30 }}>
          {wave.map((v, i) => {
            const active = i / wave.length <= progress;
            return (
              <span key={i} style={{
                flex: 1, height: `${v * 100}%`, minWidth: 2, borderRadius: 2,
                background: active ? accent : 'var(--ink-200)',
                transition: 'background 80ms linear',
              }} />
            );
          })}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', fontFeatureSettings: "'tnum' 1", flexShrink: 0, width: 32, textAlign: 'right' }}>
          {fmt(playing || t > 0 ? t : duration)}
        </span>
      </div>
      {transcript && (
        <div style={{ display: 'flex', gap: 7, padding: '0 2px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.06em', color: 'var(--text-faint)', flexShrink: 0, marginTop: 2 }}>STT</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{transcript}</span>
        </div>
      )}
    </div>
  );
}
