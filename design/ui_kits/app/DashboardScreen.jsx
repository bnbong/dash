/* Life Dashboard — visual operating-state hub. */
function DashboardScreen({ go }) {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, IconButton, DomainCard, Tag, Card, RingGauge, ActivityChart, WeekStrip, Stat, FlourishBalance } = D;
  const [filter, setFilter] = React.useState('all');
  const shown = filter === 'all' ? window.TODAY_DOMAINS : window.TODAY_DOMAINS.filter((d) => d.domain === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AppHeader large eyebrow="이번 주 현황" title="대시보드"
        trailing={<IconButton icon={<Icon name="calendar" />} label="기간" />} />

      {/* Hero — operating balance gauge */}
      <div style={{ padding: 18, background: 'var(--surface-inverse)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 18 }}>
        <RingGauge value={72} max={100} size={116} centerValue={72} centerColor="#EFF5F0" label="운영 균형" color="var(--pine-300)" track="rgba(255,255,255,0.10)" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 15, lineHeight: 1.55, color: '#EFF5F0' }}>
            생활 전반이 안정적으로 운영되고 있어요.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: '#fff', fontFeatureSettings: "'tnum' 1" }}>7<span style={{ fontSize: 12, color: 'var(--pine-200)' }}> / 8</span></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--pine-300)', marginTop: 2 }}>관리 영역</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: 'var(--ochre-300)', fontFeatureSettings: "'tnum' 1" }}>2</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--pine-300)', marginTop: 2 }}>회복 필요</div>
            </div>
          </div>
        </div>
      </div>

      {/* 행복의 세 축 */}
      <Card padding="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>행복의 세 축</span>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>이번 주의 결</span>
        </div>
        <FlourishBalance values={{ growth: 7, enjoyment: 3, meaning: 5 }} />
      </Card>

      {/* 7-day recording strip */}
      <Card padding="md">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>최근 7일 기록</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-body)', fontFeatureSettings: "'tnum' 1" }}>16개</span>
        </div>
        <WeekStrip days={window.WEEK_DAYS} max={4} height={54} />
      </Card>

      {/* Per-domain activity */}
      <Card padding="md">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>영역별 활동</div>
        <ActivityChart items={window.DOMAIN_ACTIVITY} max={5} />
      </Card>

      {/* Detail — domain status */}
      <div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 6, margin: '0 -2px' }}>
          <Tag selected={filter === 'all'} onClick={() => setFilter('all')}>전체</Tag>
          {window.TODAY_DOMAINS.map((d) => (
            <Tag key={d.domain} selected={filter === d.domain} swatch={`var(--domain-${d.domain})`} onClick={() => setFilter(d.domain)}>
              {D.DOMAINS[d.domain].en}
            </Tag>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
          {shown.map((d) => (
            <DomainCard key={d.domain} domain={d.domain} status={d.status} note={d.note} count={d.count}
              icon={<Icon name={window.DOMAIN_ICONS[d.domain]} size={16} />} onClick={() => go('evidence', { filter: d.domain })} />
          ))}
        </div>
      </div>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;
