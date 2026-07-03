/* Evidence — searchable long-term archive of interpreted actions. */
function EvidenceScreen({ filter = 'all', setFilter }) {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, IconButton, EvidenceItem, Tag, Input, Card, Stat, VoicePlayer, PhotoViewer } = D;
  const [q, setQ] = React.useState('');
  const [localFilter, setLocalFilter] = React.useState('all');
  const activeFilter = setFilter ? filter : localFilter;
  const applyFilter = setFilter || setLocalFilter;

  const allDomains = Array.from(new Set(
    window.EVIDENCE_MONTHS.flatMap((m) => m.items.map((i) => i.domain))
  ));

  const months = window.EVIDENCE_MONTHS.map((m) => ({
    ...m,
    items: m.items.filter((i) =>
      (activeFilter === 'all' || i.domain === activeFilter) &&
      (!q.trim() || i.evidence.includes(q.trim()))
    ),
  })).filter((m) => m.items.length > 0);

  const totalRecords = window.EVIDENCE_MONTHS.reduce((s, m) => s + m.count, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AppHeader large eyebrow="전체 아카이브" title="증거"
        trailing={<IconButton icon={<Icon name="arrow-down-up" />} label="정렬" />} />

      {/* Stats */}
      <Card tone="tint" padding="md">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Stat value={totalRecords} unit="개" label="누적 기록" align="center" color="var(--pine-700)" />
          <Stat value={totalRecords} unit="개" label="Seed" align="center" color="var(--ochre-600)" />
          <Stat value="2" unit="개월" label="운영 기간" align="center" color="var(--pine-700)" />
        </div>
      </Card>

      {/* Search */}
      <Input iconLeft={<Icon name="search" size={18} />} placeholder="기록 검색 (예: 청소, 연락)" value={q} onChange={(e) => setQ(e.target.value)} />

      {/* Domain filter */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2, margin: '0 -2px' }}>
        <Tag selected={activeFilter === 'all'} onClick={() => applyFilter('all')}>전체</Tag>
        {allDomains.map((d) => (
          <Tag key={d} selected={activeFilter === d} swatch={`var(--domain-${d})`} onClick={() => applyFilter(d)}>{D.DOMAINS[d].en}</Tag>
        ))}
      </div>

      {/* Month-grouped archive */}
      {months.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-faint)', fontSize: 14 }}>검색 결과가 없어요.</div>
      ) : months.map((m) => (
        <div key={m.month}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '0 2px 8px' }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>{m.month}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '.04em' }}>{m.count}개 · Seed {m.seed}</span>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '4px 16px', boxShadow: 'var(--shadow-sm)' }}>
            {m.items.map((e, i) => (
              <div key={i} style={{ borderBottom: i < m.items.length - 1 ? 'none' : 'none' }}>
                {e.source === 'photo' ? (
                  <div style={{ display: 'flex', gap: 12, padding: '14px 4px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 2 }}>
                      <span style={{ width: 9, height: 9, borderRadius: '50%', background: `var(--domain-${e.domain})`, boxShadow: `0 0 0 4px color-mix(in oklch, var(--domain-${e.domain}) 16%, transparent)` }} />
                    </span>
                    <PhotoViewer size={54} caption={e.caption} domainColor={`var(--domain-${e.domain})`} domainLabel={D.DOMAINS[e.domain].en} detected={e.detected || []} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 3 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.06em', color: 'var(--text-faint)' }}>{e.date}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.04em', color: 'var(--text-muted)', padding: '1px 6px', borderRadius: 999, background: 'var(--surface-sunken)' }}>사진</span>
                        </span>
                        {e.seed != null && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ochre-600)', fontWeight: 600 }}>Seed {e.seed}</span>}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.35 }}>{e.evidence}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: `var(--domain-${e.domain})` }}>{D.DOMAINS[e.domain].en}</span>
                        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{e.interpretation}</span>
                      </div>
                    </div>
                  </div>
                ) : e.source === 'voice' ? (
                  <div style={{ padding: '14px 4px' }}>
                    <EvidenceItem date={e.date} evidence={e.evidence}
                      domainColor={`var(--domain-${e.domain})`} domainLabel={D.DOMAINS[e.domain].en}
                      interpretation={e.interpretation} seed={e.seed}
                      source={e.source} voiceLength={e.voiceLength} style={{ padding: 0 }} />
                    <div style={{ paddingLeft: 21, marginTop: 4 }}>
                      <VoicePlayer seed={e.evidence} duration={parseInt((e.voiceLength || '0:20').split(':')[1]) + parseInt((e.voiceLength || '0:20').split(':')[0]) * 60} transcript={e.transcript} />
                    </div>
                  </div>
                ) : (
                  <EvidenceItem date={e.date} evidence={e.evidence}
                    domainColor={`var(--domain-${e.domain})`} domainLabel={D.DOMAINS[e.domain].en}
                    interpretation={e.interpretation} seed={e.seed} source={e.source} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
window.EvidenceScreen = EvidenceScreen;
