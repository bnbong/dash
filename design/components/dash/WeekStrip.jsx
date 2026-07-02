import React from 'react';

/**
 * Seven-day activity strip. Each day is a column whose fill height / opacity
 * reflects that day's recorded activity level (0..max). Calm, no axis chrome.
 */
export function WeekStrip({ days = [], max = 4, color = 'var(--brand)', height = 56, style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', ...style }}>
      {days.map((d, i) => {
        const lvl = Math.max(0, Math.min(max, d.level || 0));
        const ratio = max ? lvl / max : 0;
        const barH = Math.max(6, ratio * height);
        const empty = lvl === 0;
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: '100%', height, display: 'flex', alignItems: 'flex-end' }}>
              <div style={{
                width: '100%', height: barH, borderRadius: 'var(--radius-xs)',
                background: empty ? 'var(--surface-sunken)' : color,
                opacity: empty ? 1 : 0.35 + ratio * 0.65,
                border: d.today ? '1.5px solid var(--ochre-500)' : 'none',
                transition: 'height var(--dur-slow) var(--ease-out)',
              }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: d.today ? 'var(--ochre-600)' : 'var(--text-faint)', fontWeight: d.today ? 'var(--weight-semibold)' : 'var(--weight-regular)' }}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}
