import React from 'react';

/** The three axes of happiness (Seligman, adapted). */
export const AXES = {
  growth:     { ko: '성장',   en: 'Growth',     color: 'var(--pine-500)',  soft: 'var(--pine-100)' },
  enjoyment:  { ko: '즐거움', en: 'Enjoyment',  color: 'var(--ochre-500)', soft: 'var(--ochre-100)' },
  meaning:    { ko: '의미',   en: 'Meaning',    color: 'var(--domain-mind)', soft: 'var(--domain-mind-soft)' },
};
const ORDER = ['growth', 'enjoyment', 'meaning'];

/**
 * Flourish Balance — the mix of Growth / Enjoyment / Meaning ("행복의 세 축")
 * across a period. A calm proportional bar + three labeled legends.
 * Shows balance, never a score to maximize.
 */
export function FlourishBalance({ values = {}, showLegend = true, barHeight = 14, style = {} }) {
  const nums = ORDER.map((k) => Math.max(0, values[k] || 0));
  const total = nums.reduce((a, b) => a + b, 0) || 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, ...style }}>
      <div style={{ display: 'flex', width: '100%', height: barHeight, borderRadius: 'var(--radius-pill)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
        {ORDER.map((k, i) => {
          const pct = (nums[i] / total) * 100;
          if (pct === 0) return null;
          return (
            <div key={k} style={{
              width: `${pct}%`, height: '100%', background: AXES[k].color,
              transition: 'width var(--dur-slow) var(--ease-out)',
            }} />
          );
        })}
      </div>
      {showLegend && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          {ORDER.map((k, i) => {
            const pct = Math.round((nums[i] / total) * 100);
            return (
              <div key={k} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: AXES[k].color, flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{AXES[k].ko}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-lg)', fontWeight: 'var(--weight-medium)', color: AXES[k].color, fontFeatureSettings: "'tnum' 1", letterSpacing: '-0.01em' }}>{pct}<span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>%</span></span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
