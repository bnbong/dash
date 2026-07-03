import React from 'react';
import { DOMAINS } from './DomainCard.jsx';
import { AXES } from './FlourishBalance.jsx';

const ALL_DOMAINS = ['body', 'space', 'relation', 'work', 'hobby', 'mind', 'admin', 'impact'];
const ALL_AXES = ['growth', 'enjoyment', 'meaning'];

/**
 * RecordReview — after a record, Dash shows how it understood it, editable.
 * Primary domain (one), secondary domains (0–2), three axes (0–2), confirm.
 * Embodiment of the classification spec. Tone hands authority to the user.
 */
export function RecordReview({
  raw,
  primary,
  secondary = [],
  axes = [],
  interpretation = null,
  confidence = 0.9,
  source = 'text',
  voiceLength = null,
  onConfirm,
  onChange,
  style = {},
}) {
  const [prim, setPrim] = React.useState(primary);
  const [sec, setSec] = React.useState(secondary);
  const [ax, setAx] = React.useState(axes);
  const [editing, setEditing] = React.useState(false);

  const lowConf = confidence < 0.55;

  const emit = (p, s, a) => onChange && onChange({ primary: p, secondary: s, axes: a });

  const pickPrimary = (d) => {
    let s = sec.filter((x) => x !== d);
    setPrim(d); setSec(s); emit(d, s, ax);
  };
  const toggleSecondary = (d) => {
    if (d === prim) return;
    let s = sec.includes(d) ? sec.filter((x) => x !== d) : (sec.length < 2 ? [...sec, d] : sec);
    setSec(s); emit(prim, s, ax);
  };
  const toggleAxis = (k) => {
    let a = ax.includes(k) ? ax.filter((x) => x !== k) : (ax.length < 2 ? [...ax, k] : ax);
    setAx(a); emit(prim, sec, a);
  };

  const P = DOMAINS[prim] || {};

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)', overflow: 'hidden', ...style,
    }}>
      {/* header */}
      <div style={{ padding: '14px 16px 12px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {lowConf ? '이 기록, 어떤 영역에 가까운가요?' : '이렇게 이해했어요'}
          </span>
          {source && source !== 'text' && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 20, padding: '0 8px', borderRadius: 'var(--radius-pill)', background: 'var(--ochre-100)', color: 'var(--ochre-700)', flexShrink: 0 }}>
              {source === 'voice'
                ? <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><rect x="6" y="1.5" width="4" height="8" rx="2" fill="currentColor" /><path d="M4 7.5C4 9.7 5.8 11.5 8 11.5C10.2 11.5 12 9.7 12 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M8 11.5V14M6 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                : <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M2 5.5C2 4.7 2.7 4 3.5 4H5l.8-1.3A1 1 0 0 1 6.7 2.2h2.6a1 1 0 0 1 .9.5L11 4h1.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-9C2.7 13 2 12.3 2 11.5v-6Z" stroke="currentColor" strokeWidth="1.2" /><circle cx="8" cy="8.2" r="2.2" stroke="currentColor" strokeWidth="1.2" /></svg>}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.06em' }}>{source === 'voice' ? (voiceLength || '음성') : '사진'}</span>
            </span>
          )}
        </div>
        {raw && <div style={{ fontSize: 15, fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', lineHeight: 1.45 }}>{raw}</div>}
        {source && source !== 'text' && (
          <div style={{ fontSize: 11.5, color: 'var(--text-faint)', marginTop: 4 }}>{source === 'voice' ? 'Dash가 음성을 이해해 적었어요' : 'Dash가 사진을 보고 적었어요'} · 원본은 그대로 남아있어요</div>
        )}
      </div>

      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* classified summary row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {/* primary chip */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, height: 30, padding: '0 12px', borderRadius: 'var(--radius-pill)', background: P.soft, border: `1px solid color-mix(in oklch, ${P.color} 32%, transparent)` }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: P.color }} />
            <span style={{ fontSize: 13, fontWeight: 'var(--weight-semibold)', color: P.color }}>{P.en}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.1em', color: P.color, opacity: 0.7, textTransform: 'uppercase' }}>주</span>
          </span>
          {/* secondary chips */}
          {sec.map((d) => {
            const S = DOMAINS[d];
            return (
              <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 30, padding: '0 11px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', border: '1px solid var(--line)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: S.color }} />
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{S.en}</span>
              </span>
            );
          })}
          {/* axis chips */}
          {ax.map((k) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 30, padding: '0 11px', borderRadius: 'var(--radius-pill)', background: AXES[k].soft, border: `1px solid color-mix(in oklch, ${AXES[k].color} 28%, transparent)` }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: AXES[k].color }} />
              <span style={{ fontSize: 12.5, fontWeight: 'var(--weight-medium)', color: AXES[k].color }}>{AXES[k].ko}</span>
            </span>
          ))}
          <button type="button" onClick={() => setEditing((v) => !v)} style={{ marginLeft: 'auto', border: 'none', background: 'none', color: 'var(--brand)', fontSize: 13, fontWeight: 'var(--weight-semibold)', cursor: 'pointer', fontFamily: 'var(--font-sans)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            {editing ? '완료' : '수정'}
          </button>
        </div>

        {/* editor */}
        {editing && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 4 }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 7 }}>주 영역 (탭하여 선택)</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ALL_DOMAINS.map((d) => {
                  const on = d === prim;
                  return (
                    <button key={d} type="button" onClick={() => pickPrimary(d)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 10px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                      background: on ? DOMAINS[d].color : 'var(--surface)', border: `1px solid ${on ? 'transparent' : 'var(--line-strong)'}`,
                    }}>
                      {!on && <span style={{ width: 7, height: 7, borderRadius: '50%', background: DOMAINS[d].color }} />}
                      <span style={{ fontSize: 12, fontWeight: 'var(--weight-medium)', color: on ? '#fff' : 'var(--text-body)' }}>{DOMAINS[d].en}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 7 }}>부 영역 · 최대 2개</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ALL_DOMAINS.filter((d) => d !== prim).map((d) => {
                  const on = sec.includes(d);
                  return (
                    <button key={d} type="button" onClick={() => toggleSecondary(d)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 10px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                      background: on ? DOMAINS[d].soft : 'var(--surface)', border: `1px solid ${on ? 'color-mix(in oklch, ' + DOMAINS[d].color + ' 30%, transparent)' : 'var(--line)'}`,
                      opacity: (!on && sec.length >= 2) ? 0.4 : 1,
                    }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: DOMAINS[d].color }} />
                      <span style={{ fontSize: 12, color: on ? DOMAINS[d].color : 'var(--text-muted)', fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)' }}>{DOMAINS[d].en}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 7 }}>행복의 세 축 · 최대 2개</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {ALL_AXES.map((k) => {
                  const on = ax.includes(k);
                  return (
                    <button key={k} type="button" onClick={() => toggleAxis(k)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 12px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                      background: on ? AXES[k].color : 'var(--surface)', border: `1px solid ${on ? 'transparent' : 'var(--line-strong)'}`,
                    }}>
                      <span style={{ fontSize: 12, fontWeight: 'var(--weight-medium)', color: on ? '#fff' : 'var(--text-body)' }}>{AXES[k].ko}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* confirm */}
        {!editing && (
          <button type="button" onClick={() => onConfirm && onConfirm({ primary: prim, secondary: sec, axes: ax })} style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7, height: 44, width: '100%',
            border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer',
            background: 'var(--brand)', color: 'var(--text-on-brand)', fontFamily: 'var(--font-sans)',
            fontSize: 15, fontWeight: 'var(--weight-semibold)',
          }}>
            {lowConf ? '이대로 저장' : '맞아요'}
          </button>
        )}
      </div>
    </div>
  );
}
