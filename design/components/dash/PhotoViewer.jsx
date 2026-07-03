import React from 'react';

const CamGlyph = ({ c = 'currentColor', s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
    <path d="M2 5.5C2 4.7 2.7 4 3.5 4H5l.8-1.3A1 1 0 0 1 6.7 2.2h2.6a1 1 0 0 1 .9.5L11 4h1.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-9C2.7 13 2 12.3 2 11.5v-6Z" stroke={c} strokeWidth="1.2" />
    <circle cx="8" cy="8.2" r="2.2" stroke={c} strokeWidth="1.2" />
  </svg>
);

/**
 * Photo record — thumbnail that opens a fullscreen viewer with the vision
 * caption, domain tag, and (optionally) what the AI detected.
 */
export function PhotoViewer({
  src = null,
  caption = null,
  domainColor = 'var(--domain-space)',
  domainLabel = null,
  detected = [],
  size = 88,
  radius = 'var(--radius-md)',
  style = {},
}) {
  const [open, setOpen] = React.useState(false);
  const placeholder = `color-mix(in oklch, ${domainColor} 18%, var(--surface-sunken))`;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label="사진 보기" style={{
        position: 'relative', width: size, height: size, flexShrink: 0, padding: 0, cursor: 'pointer',
        border: '1px solid var(--line)', borderRadius: radius, overflow: 'hidden',
        background: src ? `center/cover no-repeat url(${src})` : placeholder,
        display: 'flex', alignItems: 'center', justifyContent: 'center', ...style,
      }}>
        {!src && <CamGlyph c={domainColor} s={26} />}
        <span style={{ position: 'absolute', right: 5, bottom: 5, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: 'rgba(20,38,30,0.55)', color: '#fff' }}>
          <CamGlyph c="#fff" s={11} />
        </span>
      </button>

      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 120, display: 'flex', flexDirection: 'column',
          background: 'rgba(15,26,22,0.86)', backdropFilter: 'blur(3px)', padding: 20,
          animation: 'dashFade var(--dur-base) var(--ease-out)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" onClick={() => setOpen(false)} aria-label="닫기" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.12)', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
            <div onClick={(e) => e.stopPropagation()} style={{
              maxWidth: '100%', maxHeight: '100%', aspectRatio: '4 / 5', width: 320,
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              background: src ? `center/cover no-repeat url(${src})` : placeholder,
              display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-pop)',
            }}>
              {!src && <CamGlyph c={domainColor} s={64} />}
            </div>
          </div>
          <div onClick={(e) => e.stopPropagation()} style={{ paddingTop: 16, color: '#EFF5F0' }}>
            {domainLabel && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: domainColor }} />
                <span style={{ fontSize: 13, fontWeight: 'var(--weight-semibold)', color: '#fff' }}>{domainLabel}</span>
              </span>
            )}
            {caption && <p style={{ fontSize: 15, lineHeight: 1.55, color: '#EFF5F0', marginBottom: detected.length ? 12 : 0 }}>{caption}</p>}
            {detected.length > 0 && (
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--pine-300)', marginBottom: 7 }}>Dash가 감지한 것</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {detected.map((d) => (
                    <span key={d} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.10)', color: '#EFF5F0' }}>{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <style>{`@keyframes dashFade { from { opacity: 0 } to { opacity: 1 } }`}</style>
        </div>
      )}
    </>
  );
}
