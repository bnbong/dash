import React from 'react';

/** Canonical Dash life domains: color + bilingual label. */
export const DOMAINS = {
  body:     { en: 'Body',             ko: '몸',        color: 'var(--domain-body)',     soft: 'var(--domain-body-soft)' },
  space:    { en: 'Space',            ko: '공간',      color: 'var(--domain-space)',    soft: 'var(--domain-space-soft)' },
  relation: { en: 'Relation',         ko: '관계',      color: 'var(--domain-relation)', soft: 'var(--domain-relation-soft)' },
  work:     { en: 'Work & Learning',  ko: '일과 학습', color: 'var(--domain-work)',     soft: 'var(--domain-work-soft)' },
  hobby:    { en: 'Hobby & Creation', ko: '취미와 창작',color: 'var(--domain-hobby)',    soft: 'var(--domain-hobby-soft)' },
  mind:     { en: 'Mind',             ko: '마음',      color: 'var(--domain-mind)',     soft: 'var(--domain-mind-soft)' },
  admin:    { en: 'Life Admin',       ko: '생활 행정', color: 'var(--domain-admin)',    soft: 'var(--domain-admin-soft)' },
  impact:   { en: 'Impact',           ko: '임팩트',    color: 'var(--domain-impact)',   soft: 'var(--domain-impact-soft)' },
};

const STATUS = {
  stable:    { label: '안정적',     tone: 'var(--positive-600)' },
  growing:   { label: '성장 중',    tone: 'var(--positive-500)' },
  active:    { label: '활성',       tone: 'var(--positive-600)' },
  holding:   { label: '유지 중',    tone: 'var(--calm-600)' },
  recover:   { label: '회복 필요',  tone: 'var(--attention-600)' },
  overload:  { label: '과부하 주의',tone: 'var(--caution-600)' },
  tidy:      { label: '정리됨',     tone: 'var(--calm-600)' },
};

/**
 * Life-domain card for the Life Dashboard. Color-coded by domain,
 * with a calm status word and optional activity meter / note.
 */
export function DomainCard({
  domain = 'body',
  status = 'holding',
  note = null,
  count = null,
  icon = null,
  compact = false,
  onClick,
  style = {},
}) {
  const d = DOMAINS[domain] || DOMAINS.body;
  const st = STATUS[status] || STATUS.holding;
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10,
        padding: compact ? 14 : 16, background: 'var(--surface)',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-md)',
        boxShadow: hover && onClick ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover && onClick ? 'translateY(-1px)' : 'none',
        cursor: onClick ? 'pointer' : 'default', overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...style,
      }}
    >
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: d.color }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 30, height: 30, borderRadius: 'var(--radius-sm)',
          background: d.soft, color: d.color, flexShrink: 0,
        }}>
          {icon || <span style={{ width: 9, height: 9, borderRadius: '50%', background: d.color }} />}
        </span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', lineHeight: 1.2 }}>{d.en}</div>
          <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-faint)' }}>{d.ko}</div>
        </div>
        {count != null && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontFeatureSettings: "'tnum' 1" }}>{count}</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: st.tone }} />
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: st.tone }}>{st.label}</span>
      </div>
      {note && !compact && <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{note}</p>}
    </div>
  );
}
