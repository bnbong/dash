/* Dash — Phase 0 pre-signup landing page (marketing web surface). */
const D = window.DashDesignSystem_ae03e4;

function LIcon({ name, size = 20, color = 'currentColor', style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex', ...style }} />;
}

function Nav() {
  const { Button } = D;
  return (
    <nav className="l-nav">
      <div className="l-container l-nav-inner">
        <img src="../../assets/logo-wordmark.svg" height="30" alt="Dash" />
        <div className="l-nav-links">
          <a href="#how">작동 방식</a>
          <a href="#grove">Dash Grove</a>
          <a href="#pricing">요금</a>
          <Button variant="primary" size="sm" onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>사전신청</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { Button, Badge } = D;
  return (
    <header className="l-hero">
      <div className="l-container l-hero-grid">
        <div className="l-hero-copy">
          <Badge tone="pine" dot>Phase 0 · 사전신청 오픈</Badge>
          <h1 className="l-h1">당신의 삶은 이미<br />운영되고 있습니다.</h1>
          <p className="l-lead">
            어른을 위한 생활 운영 Dashboard. 청소, 요리, 회복, 관계도 삶을 운영한 행동입니다.
            Dash는 그 행동을 발견해 의미로 번역하고, 당신의 궤적을 세상의 숲으로 잇습니다.
          </p>
          <form className="l-signup-inline" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="이메일 주소" aria-label="이메일" />
            <Button variant="accent" size="lg" type="submit">사전신청</Button>
          </form>
          <div className="l-hero-meta">
            <span><LIcon name="check" size={15} color="var(--pine-500)" /> 출시 시 우선 초대</span>
            <span><LIcon name="check" size={15} color="var(--pine-500)" /> 얼리 서포터 Dash Plus 혜택</span>
          </div>
        </div>
        <div className="l-hero-phone-wrap">
          <PhoneMock />
        </div>
      </div>
    </header>
  );
}

function PhoneMock() {
  const { InterpretationCard, DomainCard, GroveMeter, SeedBadge } = D;
  const ic = (n) => <LIcon name={n} size={15} />;
  return (
    <div className="l-phone">
      <div className="l-phone-notch" />
      <div className="l-phone-screen">
        <div className="l-phone-head">
          <div>
            <div className="l-phone-eyebrow">6월 30일 화요일</div>
            <div className="l-phone-title">오늘</div>
          </div>
          <SeedBadge count={18} label="Seed" size="sm" />
        </div>
        <InterpretationCard seed={1}>
          오늘은 공간과 생활 기반을 회복한 날입니다. 작은 행동이지만 내일의 마찰을 줄인 운영입니다.
        </InterpretationCard>
        <div className="l-phone-domains">
          <DomainCard domain="space" status="stable" icon={ic('home')} compact />
          <DomainCard domain="body" status="recover" icon={ic('heart-pulse')} compact />
        </div>
        <div className="l-phone-grove">
          <div className="l-phone-eyebrow" style={{ color: 'var(--pine-300)', marginBottom: 10 }}>DASH GROVE</div>
          <GroveMeter grown={3} total={8} pct={74} />
        </div>
      </div>
    </div>
  );
}

function Problem() {
  const items = [
    { t: '눈에 안 보이는 노력', b: '밥을 하고, 방을 치우고, 답장을 한다. 분명히 살아냈는데 아무 기록도 남지 않는다.' },
    { t: '평가하는 앱들', b: '스트릭이 끊기고, 목표를 못 지키면 죄책감만 남는다. 지친 날은 더 지치게 만든다.' },
    { t: '의미 없는 숫자', b: '완료한 할 일 개수는 내가 어떤 사람이 되어가는지 말해주지 않는다.' },
  ];
  return (
    <section className="l-section">
      <div className="l-container">
        <div className="l-eyebrow">왜 Dash인가</div>
        <h2 className="l-h2">생산성 앱은 많지만,<br />삶을 운영해주는 것은 없었습니다.</h2>
        <div className="l-problem-grid">
          {items.map((it) => (
            <div key={it.t} className="l-problem-card">
              <h3>{it.t}</h3>
              <p>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: '01', icon: 'pen-line', t: '기록', b: '한 줄, 음성, 사진. 오늘 한 일을 그냥 남깁니다. 잘 쓰려 애쓸 필요 없어요.' },
    { n: '02', icon: 'sparkles', t: '해석', b: 'AI가 그 행동을 8개 삶의 영역으로 번역합니다. 청소도, 회복도 운영입니다.' },
    { n: '03', icon: 'sprout', t: '임팩트', b: '의미 있는 운영이 Impact Seed가 되고, 매월 검증된 생태 복원 기여로 이어집니다.' },
  ];
  return (
    <section className="l-section l-section-tint" id="how">
      <div className="l-container">
        <div className="l-eyebrow">작동 방식</div>
        <h2 className="l-h2">기록에서 의미로,<br />의미에서 임팩트로.</h2>
        <div className="l-how-grid">
          {steps.map((s) => (
            <div key={s.n} className="l-how-card">
              <div className="l-how-top">
                <span className="l-how-icon"><LIcon name={s.icon} size={22} color="var(--pine-600)" /></span>
                <span className="l-how-num">{s.n}</span>
              </div>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const { DomainCard } = D;
  const ic = (n) => <LIcon name={n} size={15} />;
  const ds = [
    ['body', 'recover', 'heart-pulse'], ['space', 'stable', 'home'],
    ['relation', 'holding', 'users'], ['work', 'growing', 'graduation-cap'],
    ['hobby', 'active', 'music'], ['mind', 'overload', 'brain'],
    ['admin', 'tidy', 'receipt'], ['impact', 'growing', 'sprout'],
  ];
  return (
    <section className="l-section">
      <div className="l-container">
        <div className="l-eyebrow">Life Dashboard</div>
        <h2 className="l-h2">삶을 8개의 영역으로<br />비춰봅니다.</h2>
        <p className="l-section-lead">무엇이 쌓이고, 무엇이 회복이 필요한지. 평가가 아니라 균형의 언어로.</p>
        <div className="l-domain-grid">
          {ds.map(([d, s, i]) => (
            <DomainCard key={d} domain={d} status={s} icon={ic(i)} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function Grove() {
  const { GroveMeter, Stat, Button } = D;
  return (
    <section className="l-section l-section-dark" id="grove">
      <div className="l-container l-grove-grid">
        <div>
          <div className="l-eyebrow" style={{ color: 'var(--ochre-300)' }}>Dash Grove</div>
          <h2 className="l-h2" style={{ color: '#F1F7F2' }}>당신의 달리기가<br />세상의 숲이 됩니다.</h2>
          <p className="l-section-lead" style={{ color: 'var(--pine-200)' }}>
            의미 있는 생활 운영은 Impact Seed로 쌓이고, 매월 검증 가능한 생태 복원 기여로 전환됩니다.
            나무마다 당신의 이름으로 인증서가 발급됩니다.
          </p>
          <div className="l-grove-stats">
            <Stat value="84,200" label="커뮤니티 Seed" color="#fff" />
            <Stat value="420" unit="그루" label="식재 기여" color="var(--ochre-300)" />
          </div>
        </div>
        <div className="l-grove-card">
          <div className="l-phone-eyebrow" style={{ color: 'var(--pine-300)', marginBottom: 14 }}>나의 숲 · 이번 달</div>
          <GroveMeter grown={3} total={8} pct={74} seedCount={18} caption="Community Grove 전환까지 74%" />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { Button, Badge } = D;
  const plans = [
    { name: 'Free', price: '0원', desc: '핵심 운영 기록과 해석', feats: ['한 줄·음성·사진 기록', '기본 AI 해석', 'Life Dashboard', 'Dash Grove 참여'], cta: '무료로 시작', variant: 'secondary' },
    { name: 'Dash Plus', price: '4,900원', unit: '/월', desc: '더 깊은 리포트와 임팩트', feats: ['고급 AI 리포트·해석', '장기 Evidence 아카이브', 'Seed 적립 가중치', '월간 개인 임팩트 리포트'], cta: 'Plus 사전신청', variant: 'primary', featured: true },
    { name: 'Dash Duo', price: '7,900원', unit: '/월', desc: '함께 삶을 운영하는 2인', feats: ['2인 계정', '공유 Grove', '함께 보는 리포트', 'Plus 전체 기능'], cta: 'Duo 사전신청', variant: 'secondary' },
  ];
  return (
    <section className="l-section l-section-tint" id="pricing">
      <div className="l-container">
        <div className="l-eyebrow">요금</div>
        <h2 className="l-h2">지금은 사전신청 단계입니다.</h2>
        <p className="l-section-lead">출시 시 요금은 아래를 기준으로 하며, 얼리 서포터에게는 별도 혜택이 제공됩니다.</p>
        <div className="l-pricing-grid">
          {plans.map((p) => (
            <div key={p.name} className={'l-price-card' + (p.featured ? ' l-price-featured' : '')}>
              {p.featured && <div className="l-price-flag"><Badge tone="ochre" size="sm">가장 인기</Badge></div>}
              <div className="l-price-name">{p.name}</div>
              <div className="l-price-amount"><span className="l-price-num">{p.price}</span>{p.unit && <span className="l-price-unit">{p.unit}</span>}</div>
              <div className="l-price-desc">{p.desc}</div>
              <ul className="l-price-feats">
                {p.feats.map((f) => <li key={f}><LIcon name="check" size={15} color="var(--pine-500)" />{f}</li>)}
              </ul>
              <Button variant={p.variant} fullWidth onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>{p.cta}</Button>
            </div>
          ))}
        </div>
        <p className="l-fineprint">Impact Seed는 현금 가치가 없으며 교환·환불·양도되지 않습니다. 요금은 정식 출시 시 확정됩니다.</p>
      </div>
    </section>
  );
}

function Signup() {
  const { Button } = D;
  return (
    <section className="l-signup" id="signup">
      <div className="l-container l-signup-inner">
        <img src="../../assets/logo-mark.svg" height="44" alt="" />
        <h2 className="l-h2" style={{ color: '#F1F7F2' }}>먼저 삶을 운영해보세요.</h2>
        <p className="l-section-lead" style={{ color: 'var(--pine-200)', maxWidth: 460 }}>
          사전신청하면 출시 시 가장 먼저 초대하고, 얼리 서포터 혜택을 드립니다.
        </p>
        <form className="l-signup-inline l-signup-inline-dark" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="이메일 주소" aria-label="이메일" />
          <Button variant="accent" size="lg" type="submit">사전신청</Button>
        </form>
        <div className="l-social-proof">이미 <strong>1,240명</strong>이 사전신청했습니다</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-container l-footer-inner">
        <img src="../../assets/logo-wordmark.svg" height="24" alt="Dash" style={{ opacity: 0.9 }} />
        <div className="l-footer-links">
          <a href="#">개인정보 처리방침</a>
          <a href="#">이용약관</a>
          <a href="#">문의</a>
        </div>
        <div className="l-footer-copy">© 2026 Dash · 어른을 위한 생활 운영 Dashboard</div>
      </div>
    </footer>
  );
}

function LandingPage() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <How />
      <Dashboard />
      <Grove />
      <Pricing />
      <Signup />
      <Footer />
    </>
  );
}
window.LandingPage = LandingPage;
