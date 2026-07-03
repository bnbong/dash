import React from 'react';

const MicGlyph = ({ c = 'currentColor' }) => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
    <rect x="6" y="1.5" width="4" height="8" rx="2" fill={c} />
    <path d="M4 7.5C4 9.7 5.8 11.5 8 11.5C10.2 11.5 12 9.7 12 7.5" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M8 11.5V14M6 14h4" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const CamGlyph = ({ c = 'currentColor' }) => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
    <path d="M2 5.5C2 4.7 2.7 4 3.5 4H5l.8-1.3A1 1 0 0 1 6.7 2.2h2.6a1 1 0 0 1 .9.5L11 4h1.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-9C2.7 13 2 12.3 2 11.5v-6Z" stroke={c} strokeWidth="1.2" fill="none" />
    <circle cx="8" cy="8.2" r="2.2" stroke={c} strokeWidth="1.2" fill="none" />
  </svg>
);

const SOURCES = {
  voice: { Glyph: MicGlyph, label: '음성' },
  photo: { Glyph: CamGlyph, label: '사진' },
};

/**
 * A row in the Evidence Log: date, source (text/voice/photo), the user's
 * evidence, Dash's domain read, and the Impact Seed it earned.
 */
export function EvidenceItem({
  date,
  evidence,
  interpretation = null,
  domainColor = 'var(--domain-space)',
  domainLabel = null,
  seed = null,
  source = 'text',
  voiceLength = null,
  photoSrc = null,
  style = {},
}) {
  const src = SOURCES[source];
  return (
    <div style={{ display: 'flex', gap: 12, padding: '14px 4px', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 2 }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: domainColor, boxShadow: `0 0 0 4px color-mix(in oklch, ${domainColor} 16%, transparent)` }} />
        <span style={{ flex: 1, width: 1, background: 'var(--line)', marginTop: 6, minHeight: 8 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 3 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)' }}>{date}</span>
            {src && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 17, padding: '0 6px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', color: 'var(--text-muted)' }}>
                <src.Glyph c="var(--text-muted)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.04em' }}>{source === 'voice' && voiceLength ? voiceLength : src.label}</span>
              </span>
            )}
          </div>
          {seed != null && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--ochre-600)', fontWeight: 'var(--weight-semibold)', flexShrink: 0 }}>Seed {seed}</span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {source === 'photo' && (
            <span style={{
              width: 46, height: 46, flexShrink: 0, borderRadius: 'var(--radius-sm)', overflow: 'hidden',
              background: photoSrc ? `center/cover no-repeat url(${photoSrc})` : `color-mix(in oklch, ${domainColor} 16%, var(--surface-sunken))`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line)',
            }}>
              {!photoSrc && <CamGlyph c={domainColor} />}
            </span>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', lineHeight: 'var(--leading-snug)' }}>{evidence}</div>
            {interpretation && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                {domainLabel && (
                  <span style={{ fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)', color: domainColor }}>{domainLabel}</span>
                )}
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{interpretation}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
