/* Report — periodic retrospective. Week/month synthesis + comparison. */
function ReportScreen() {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, SegmentedControl, Card, InterpretationCard, Badge, SeedBadge, WeekStrip, Divider, FlourishBalance } = D;
  const [period, setPeriod] = React.useState('week');

  const Delta = ({ now, prev, unit, inverse }) => {
    const diff = now - prev;
    const good = inverse ? diff < 0 : diff > 0;
    const flat = diff === 0;
    const color = flat ? 'var(--text-faint)' : good ? 'var(--positive-600)' : 'var(--attention-600)';
    return (
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, color: 'var(--text-strong)', fontFeatureSettings: "'tnum' 1" }}>{now}<span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{unit}</span></span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontFamily: 'var(--font-mono)', fontSize: 11, color }}>
          <Icon name={flat ? 'minus' : diff > 0 ? 'arrow-up' : 'arrow-down'} size={12} color={color} />
          {Math.abs(diff)}
        </span>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AppHeader large eyebrow="2026년 7월 1주차" title="리포트" />
      <SegmentedControl value={period} onChange={setPeriod} fullWidth options={[
        { label: '주간', value: 'week' }, { label: '월간', value: 'month' },
      ]} />

      {/* Keyword */}
      <Card padding="md">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{period === 'week' ? '이번 주' : '이번 달'} 키워드</span>
        <div style={{ fontSize: 25, fontWeight: 620, letterSpacing: '-0.02em', color: 'var(--text-strong)', marginTop: 6 }}>생활 기반 회복</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          <Badge tone="positive" dot>공간 3회</Badge>
          <Badge tone="neutral">식사 2회</Badge>
          <Badge tone="neutral">관계 1회</Badge>
        </div>
      </Card>

      {/* Flourish balance — 행복의 세 축 */}
      <Card padding="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>행복의 세 축</span>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>성장 · 즐거움 · 의미</span>
        </div>
        <FlourishBalance values={{ growth: 7, enjoyment: 3, meaning: 5 }} />
        <Divider spacing={14} />
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>
          이번 주는 <strong style={{ fontWeight: 600, color: 'var(--pine-600)' }}>성장</strong>과 <strong style={{ fontWeight: 600, color: 'var(--domain-mind)' }}>의미</strong>가 단단했던 주입니다. <strong style={{ fontWeight: 600, color: 'var(--ochre-600)' }}>즐거움</strong>은 조금 조용했어요 — 충분히 달렸으니, 다음 주엔 쉼과 놀이도 하나의 성취입니다.
        </p>
      </Card>

      {/* Recording rhythm */}
      <Card padding="md">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>기록 리듬</div>
        <WeekStrip days={window.WEEK_DAYS} max={4} height={50} />
      </Card>

      {/* Week-over-week comparison */}
      <Card padding="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>지난주 대비</span>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>vs 6월 4주차</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 14px' }}>
          {window.WEEK_COMPARE.map((c) => (
            <div key={c.label}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>{c.label}</div>
              <Delta {...c} />
            </div>
          ))}
        </div>
      </Card>

      {/* Retrospective narrative */}
      <InterpretationCard eyebrow={period === 'week' ? '이번 주의 해석' : '이번 달의 해석'} tone="tint">
        큰 성취보다 삶을 다시 정돈하는 행동이 많았던 주입니다. 지난주보다 기록이 5개 늘었고,
        회복이 필요한 영역은 4개에서 2개로 줄었습니다. 조용히, 그러나 분명히 나아지고 있어요.
      </InterpretationCard>

      {/* Seeds earned */}
      <Card padding="md">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{period === 'week' ? '이번 주' : '이번 달'} 획득</span>
            <div style={{ fontSize: 15, color: 'var(--text-body)', marginTop: 4 }}>Dash Grove에 반영됨</div>
          </div>
          <SeedBadge count={5} label="Seed" />
        </div>
        <Divider spacing={14} />
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55 }}>
          이 Seed는 이번 달 Community Grove의 생태 복원 기여 풀에 합산됩니다.
        </p>
      </Card>

      {/* Next suggestion */}
      <div style={{ padding: 16, background: 'var(--ochre-50)', border: '1px solid var(--ochre-100)', borderRadius: 'var(--radius-md)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <Icon name="compass" size={18} color="var(--ochre-600)" style={{ marginTop: 1, flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ochre-700)', marginBottom: 4 }}>다음 {period === 'week' ? '주' : '달'}의 작은 제안</div>
          <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.5 }}>수면 루틴을 한 가지만 정해보세요. Body 영역이 회복을 시작할 수 있어요.</div>
        </div>
      </div>
    </div>
  );
}
window.ReportScreen = ReportScreen;
