/* Profile — identity, subscription, modes, settings. */
function ProfileScreen({ seedTotal, go }) {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, IconButton, Avatar, Card, Stat, Badge, Switch, Button, InterpretationCard, SeedBadge, Divider } = D;
  const [lowEnergy, setLowEnergy] = React.useState(false);
  const [notify, setNotify] = React.useState(true);

  const Row = ({ icon, label, value, danger, last }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 2px', borderBottom: last ? 'none' : '1px solid var(--line)', cursor: 'pointer' }}>
      <span style={{ display: 'inline-flex', width: 18, height: 18, color: danger ? 'var(--caution-600)' : 'var(--text-muted)' }}>{icon}</span>
      <span style={{ flex: 1, fontSize: 15, color: danger ? 'var(--caution-600)' : 'var(--text-body)', fontWeight: 500 }}>{label}</span>
      {value && <span style={{ fontSize: 13.5, color: 'var(--text-faint)' }}>{value}</span>}
      {!danger && <window.Icon name="chevron-right" size={18} color="var(--text-faint)" />}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <AppHeader title="프로필"
        leading={<IconButton icon={<window.Icon name="chevron-left" size={20} />} label="뒤로" onClick={() => go('today')} />}
        trailing={<IconButton icon={<window.Icon name="settings" />} label="설정" />} />

      {/* Identity head */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 2px' }}>
        <Avatar name="Jiwon" size="lg" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 19, fontWeight: 620, color: 'var(--text-strong)' }}>Jiwon</span>
            <Badge tone="neutral" size="sm">Free</Badge>
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 2 }}>2026년 6월부터 운영 중 · 142일</div>
        </div>
      </div>

      <InterpretationCard eyebrow="당신이 되어가는 사람" tone="paper">
        당신은 생활 기반을 꾸준히 회복하고, 취미를 통해 자신의 언어를 넓혀가는 사람입니다.
      </InterpretationCard>

      <Card tone="tint" padding="md">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Stat value="142" unit="개" label="누적 기록" align="center" color="var(--pine-700)" />
          <Stat value={seedTotal} unit="개" label="Seed" align="center" color="var(--ochre-600)" />
          <Stat value="3" unit="그루" label="기여 나무" align="center" color="var(--pine-700)" />
        </div>
      </Card>

      {/* Modes */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10, padding: '0 2px' }}>모드</div>
        <Card padding="md">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>저에너지 모드</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.5 }}>지친 날엔 최소한의 운영 행동만 가볍게 기록해요.</div>
            </div>
            <Switch checked={lowEnergy} onChange={setLowEnergy} />
          </div>
          <Divider spacing={14} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-body)' }}>일일 기록 알림</div>
            <Switch checked={notify} onChange={setNotify} />
          </div>
        </Card>
      </div>

      {/* Settings */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6, padding: '0 2px' }}>설정</div>
        <Card padding="md">
          <Row icon={<window.Icon name="user-round" size={18} />} label="닉네임 · 실명 표기" value="Jiwon" />
          <Row icon={<window.Icon name="award" size={18} />} label="Dash Grove 인증서" />
          <Row icon={<window.Icon name="shield-check" size={18} />} label="개인정보 처리방침" />
          <Row icon={<window.Icon name="download" size={18} />} label="데이터 내보내기" />
          <Row icon={<window.Icon name="log-out" size={18} />} label="로그아웃" danger last />
        </Card>
      </div>

      {/* Subscription */}
      <div style={{ padding: 18, background: 'var(--surface-inverse)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ochre-300)' }}>Dash Plus</span>
          <Badge tone="ochre" size="sm" style={{ marginLeft: 'auto' }}>월 4,900원</Badge>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 17, lineHeight: 1.5, color: '#EFF5F0', marginBottom: 14 }}>
          더 깊은 리포트와 장기 아카이브, 개인 임팩트 리포트를 함께.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {['고급 AI 리포트와 해석', '장기 Evidence 아카이브', 'Seed 적립 가중치 + 월간 임팩트 리포트'].map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <window.Icon name="check" size={15} color="var(--pine-300)" />
              <span style={{ fontSize: 13.5, color: 'var(--pine-100)' }}>{t}</span>
            </div>
          ))}
        </div>
        <Button variant="accent" fullWidth>Dash Plus 시작하기</Button>
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center', lineHeight: 1.5 }}>Dash v0.1 MVP · Impact Seed는 현금 가치가 없습니다</p>
    </div>
  );
}
window.ProfileScreen = ProfileScreen;
