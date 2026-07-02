import React from 'react';

/**
 * A row in the Evidence Log: date, the user's evidence, Dash's domain read,
 * and the Impact Seed it earned. The core "오늘의 증거" artifact.
 */
export function EvidenceItem({
  date,
  evidence,
  interpretation = null,
  domainColor = 'var(--domain-space)',
  domainLabel = null,
  seed = null,
  style = {},
}) {
  return (
    <div style={{ display: 'flex', gap: 12, padding: '14px 4px', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 2 }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: domainColor, boxShadow: `0 0 0 4px color-mix(in oklch, ${domainColor} 16%, transparent)` }} />
        <span style={{ flex: 1, width: 1, background: 'var(--line)', marginTop: 6, minHeight: 8 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 2 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)' }}>{date}</span>
          {seed != null && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--ochre-600)', fontWeight: 'var(--weight-semibold)' }}>Seed {seed}</span>
          )}
        </div>
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
  );
}
