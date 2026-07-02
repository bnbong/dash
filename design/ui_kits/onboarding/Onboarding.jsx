/* Dash — Onboarding & signup flow (interactive click-through). */
const D = window.DashDesignSystem_ae03e4;

function OIcon({ name, size = 20, color = 'currentColor', style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex', ...style }} />;
}

const EXAMPLES = ['방 청소함', '친구 생일 챙김', '20분 걸음', '밀린 공과금 납부', '새 레시피 시도'];

/* ---- step bodies ---- */

function Welcome({ next }) {
  const { Button } = D;
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 8px', gap: 0 }}>
      <img src="../../assets/logo-mark.svg" height="52" style={{ marginBottom: 24 }} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 28 }}>
        <span style={{ fontSize: 34, fontWeight: 620, letterSpacing: '-0.03em', color: 'var(--text-strong)' }}>Dash</span>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 26, fontWeight: 620, lineHeight: 1.45, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: '0 0 16px', maxWidth: 300 }}>
        당신의 삶은 이미 운영되고 있습니다.
      </p>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 290, marginBottom: 40 }}>
        어른을 위한 생활 운영 Dashboard.<br />청소, 요리, 관계, 회복도 생산성입니다.
      </p>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
        <Button variant="primary" size="lg" fullWidth onClick={next}>시작하기</Button>
        <Button variant="ghost" fullWidth>이미 계정이 있어요</Button>
      </div>
    </div>
  );
}

function ValueProblem() {
  const { Badge } = D;
  return (
    <ValueLayout step="01" headline={<>오늘도 아무것도 안 한 것 같나요?</>}
      body="밥을 해 먹고, 방을 치우고, 친구에게 답장한 것도 삶을 운영한 행동입니다. Dash는 그 행동을 발견합니다.">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 320 }}>
        {['방 청소', '설거지', '내일 옷 준비', '친구 답장', '20분 걸음'].map((t) => (
          <Badge key={t} tone="neutral">{t}</Badge>
        ))}
      </div>
    </ValueLayout>
  );
}

function ValueDashboard() {
  const { DomainCard } = D;
  const ds = [
    { domain: 'space', status: 'stable' }, { domain: 'body', status: 'recover' },
    { domain: 'hobby', status: 'active' }, { domain: 'relation', status: 'holding' },
  ];
  return (
    <ValueLayout step="02" headline={<>생활 운영 상태를 영역별로 보여줍니다</>}
      body="Body, Space, Relation, Hobby… 8개의 삶의 영역으로 나눠, 무엇이 쌓이고 무엇에 회복이 필요한지 비춰줍니다.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%', maxWidth: 320 }}>
        {ds.map((d) => (
          <DomainCard key={d.domain} domain={d.domain} status={d.status} compact
            icon={<OIcon name={window.DOMAIN_ICONS_OB[d.domain]} size={16} />} />
        ))}
      </div>
    </ValueLayout>
  );
}

function ValueGrove() {
  const { GroveMeter, Card } = D;
  return (
    <ValueLayout step="04" headline={<>당신의 달리기가 세상의 숲이 됩니다</>}
      body="의미 있는 생활 운영이 Impact Seed로 쌓이고, 매월 검증 가능한 생태 복원 기여로 이어집니다.">
      <Card tone="inverse" padding="md" style={{ width: '100%', maxWidth: 320 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--pine-300)', marginBottom: 12 }}>Dash Grove</div>
        <GroveMeter grown={3} total={8} pct={74} seedCount={18} caption="Community Grove 전환까지 74%" />
      </Card>
    </ValueLayout>
  );
}

function ValueFlourish() {
  const { Card, FlourishBalance } = D;
  return (
    <ValueLayout step="03" headline={<>성장하고, 즐기고, 의미를 만드는 사람</>}
      body="Dash는 생산성만이 아니라 당신의 번영을 봅니다. 성장·즐거움·의미 — 세 축이 고루 채워질 때 우리는 더 행복해집니다. 쉼과 놀이도 그 자체로 소중합니다.">
      <Card padding="md" style={{ width: '100%', maxWidth: 320 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>행복의 세 축</div>
        <FlourishBalance values={{ growth: 5, enjoyment: 4, meaning: 5 }} />
      </Card>
    </ValueLayout>
  );
}

function ValueLayout({ step, headline, body, children }) {
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 8px', gap: 22 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.24em', color: 'var(--ochre-500)' }}>{step}</span>
      <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 26, lineHeight: 1.45, letterSpacing: '-0.025em', color: 'var(--text-strong)', fontWeight: 620, width: '100%' }}>{headline}</h2>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.65, width: '100%', maxWidth: 300 }}>{body}</p>
      <div style={{ marginTop: 6, display: 'flex', justifyContent: 'center', width: '100%' }}>{children}</div>
    </div>
  );
}

function FirstRecord({ value, setValue }) {
  const { Textarea, Tag } = D;
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', gap: 18, padding: '0 2px' }}>
      <div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ochre-500)' }}>첫 기록</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 23, lineHeight: 1.45, letterSpacing: '-0.02em', color: 'var(--text-strong)', fontWeight: 620, marginTop: 10 }}>지금, 오늘 한 일을 한 줄로 적어보세요.</h2>
      </div>
      <Textarea rows={3} placeholder="예: 방 청소하고 밀린 공과금 냈다" value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {EXAMPLES.map((t) => (
          <Tag key={t} onClick={() => setValue(t)}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function Interpretation({ entry }) {
  const { InterpretationCard, SeedBadge } = D;
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', gap: 20, padding: '0 2px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <SeedBadge count="+1" variant="solid" />
        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>첫 Impact Seed를 받았어요</span>
      </div>
      <InterpretationCard seed={1}>
        {entry ? `"${entry}" — ` : ''}당장 눈에 띄는 성취는 아니지만, 앞으로의 생활 마찰을 줄이는 운영 행동입니다. 오늘은 삶을 다시 정돈하기 시작한 날입니다.
      </InterpretationCard>
      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6, padding: '0 2px' }}>
        Dash는 매일 당신의 기록을 이렇게 삶의 운영 언어로 번역합니다. 평가하지 않고, 강요하지 않습니다.
      </p>
    </div>
  );
}

function Account({ nickname, setNickname, realName, setRealName, agree, setAgree, marketing, setMarketing }) {
  const { Input, Switch, Checkbox } = D;
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', gap: 18, padding: '0 2px' }}>
      <div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ochre-500)' }}>계정</span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 23, lineHeight: 1.45, letterSpacing: '-0.02em', color: 'var(--text-strong)', fontWeight: 620, marginTop: 10 }}>당신을 어떻게 불러드릴까요?</h2>
      </div>
      <Input label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} hint="Dash Grove 인증서에 표시됩니다. 언제든 바꿀 수 있어요." />
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>인증서에 실명 표기</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>기본은 닉네임. 명시적 동의 시에만 실명 사용</div>
          </div>
          <Switch checked={realName} onChange={setRealName} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 2px' }}>
        <Checkbox checked={agree} onChange={setAgree} label={<span style={{ fontSize: 14 }}>(필수) 개인정보 처리방침에 동의합니다</span>} />
        <Checkbox checked={marketing} onChange={setMarketing} label={<span style={{ fontSize: 14 }}>(선택) 월간 임팩트 리포트 알림을 받습니다</span>} />
      </div>
    </div>
  );
}

function Done({ nickname }) {
  const { Card, Stat } = D;
  return (
    <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22, padding: '0 8px' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 'var(--radius-xl)', background: 'var(--brand-tint)', color: 'var(--pine-600)' }}>
        <OIcon name="check" size={30} />
      </span>
      <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 25, lineHeight: 1.45, letterSpacing: '-0.02em', color: 'var(--text-strong)', fontWeight: 620, width: '100%' }}>준비됐습니다, {nickname || 'Jiwon'}님.</h2>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: 300 }}>
        오늘부터 당신의 생활 운영이 기록되고, 그 궤적이 세상 어딘가의 작은 숲으로 이어집니다.
      </p>
      <Card tone="tint" padding="md" style={{ width: '100%', maxWidth: 300 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Stat value="8" unit="영역" label="생활 운영" align="center" color="var(--pine-700)" />
          <Stat value="1" unit="개" label="첫 Seed" align="center" color="var(--ochre-600)" />
        </div>
      </Card>
    </div>
  );
}

window.OB = { OIcon, Welcome, ValueProblem, ValueDashboard, ValueFlourish, ValueGrove, FirstRecord, Interpretation, Account, Done };
window.DOMAIN_ICONS_OB = { body: 'heart-pulse', space: 'home', relation: 'users', work: 'graduation-cap', hobby: 'music', mind: 'brain', admin: 'receipt', impact: 'sprout' };
