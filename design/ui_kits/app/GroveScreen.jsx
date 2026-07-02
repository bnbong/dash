/* Dash Grove — public-impact screen with deep-dive sub-views:
   main · certificate · regions (impact map) · monthly report. */
function GroveScreen({ seedTotal }) {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, IconButton, SectionTabs, GroveMeter, Stat, Card, Badge, SeedBadge, Divider, Button, ProgressBar } = D;
  const [sec, setSec] = React.useState('mine');
  const [view, setView] = React.useState('main');

  const REGIONS = [
    { name: '케냐 · 가지 만다 만그로브', trees: 2, status: 'verified', note: '식재 완료 · 증빙 수신' },
    { name: '인도네시아 · 술라웨시 해안', trees: 1, status: 'verified', note: '식재 완료 · 증빙 수신' },
    { name: '동아프리카 해안 (7월 배치)', trees: 0, status: 'pending', note: '전환 대기 중 · 파트너 집행 예정' },
  ];

  const eyebrowStyle = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' };

  /* ---------- Certificate detail ---------- */
  if (view === 'certificate') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <AppHeader title="Tree Certificate"
          leading={<IconButton icon={<Icon name="chevron-left" size={20} />} label="뒤로" onClick={() => setView('main')} />}
          trailing={<IconButton icon={<Icon name="share-2" />} label="공유" variant="soft" />} />

        {/* The shareable card */}
        <div style={{ position: 'relative', padding: 26, borderRadius: 'var(--radius-xl)', background: 'linear-gradient(180deg, var(--pine-800), var(--pine-950))', boxShadow: 'var(--shadow-pop)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 10, border: '1px solid rgba(173,207,189,0.28)', borderRadius: 'var(--radius-lg)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <img src="../../assets/logo-mark.svg" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em', color: 'var(--pine-300)' }}>DASH GROVE</span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', background: 'rgba(173,207,189,0.16)', marginBottom: 18 }}>
              <Icon name="trees" size={26} color="var(--pine-200)" />
            </span>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 21, lineHeight: 1.55, color: '#F1F7F2', margin: 0 }}>
              이 나무는 Dash 사용자 <strong style={{ fontWeight: 600, color: '#fff' }}>Jiwon</strong>님의 생활 운영 마일스톤으로 세상에 심어졌습니다.
            </p>
            <div style={{ height: 1, background: 'rgba(173,207,189,0.22)', margin: '22px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ ...eyebrowStyle, color: 'var(--pine-300)', marginBottom: 4 }}>발급일</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#EFF5F0' }}>2026.07.11</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ ...eyebrowStyle, color: 'var(--pine-300)', marginBottom: 4 }}>인증 번호</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#EFF5F0' }}>DG-2026-0142</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="secondary" fullWidth iconLeft={<Icon name="download" size={18} />}>이미지 저장</Button>
          <Button variant="primary" fullWidth iconLeft={<Icon name="share-2" size={18} />}>공유하기</Button>
        </div>

        <Card padding="md">
          <div style={{ ...eyebrowStyle, marginBottom: 10 }}>이 인증서에 대하여</div>
          <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            인증서는 당신의 누적 생활 운영이 만든 기여를 상징합니다. 실제 식재는 검증된 파트너를 통해 집행되며, 위치·수종·증빙은 전환 완료 후 반영됩니다. 기본은 닉네임 발급이며, 설정에서 실명 표기로 바꿀 수 있어요.
          </p>
        </Card>
      </div>
    );
  }

  /* ---------- Contribution regions (Impact Map) ---------- */
  if (view === 'regions') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <AppHeader title="Impact Map"
          leading={<IconButton icon={<Icon name="chevron-left" size={20} />} label="뒤로" onClick={() => setView('main')} />} />

        {/* Abstract region banner (no fake cartography) */}
        <div style={{ position: 'relative', height: 132, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'radial-gradient(120% 140% at 30% 20%, var(--pine-600), var(--pine-900))' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ position: 'relative', display: 'inline-flex' }}>
                <span style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: i < 2 ? 'rgba(233,183,120,0.22)' : 'rgba(173,207,189,0.16)' }} />
                <Icon name="map-pin" size={i < 2 ? 26 : 22} color={i < 2 ? 'var(--ochre-300)' : 'var(--pine-300)'} />
              </span>
            ))}
          </div>
          <span style={{ position: 'absolute', left: 16, bottom: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.16em', color: 'var(--pine-200)' }}>3 REGIONS · EAST AFRICA & SE ASIA</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {REGIONS.map((r, i) => (
            <Card key={i} padding="md">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: r.status === 'verified' ? 'var(--pine-100)' : 'var(--surface-sunken)', flexShrink: 0 }}>
                  <Icon name="map-pin" size={17} color={r.status === 'verified' ? 'var(--pine-600)' : 'var(--text-faint)'} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{r.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{r.note}</div>
                </div>
                {r.trees > 0
                  ? <SeedBadge count={r.trees} label="그루" size="sm" variant="soft" />
                  : <Badge tone="calm" size="sm" dot>대기</Badge>}
              </div>
            </Card>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-faint)', lineHeight: 1.5, padding: '0 2px' }}>
          위치는 파트너가 제공하는 식재 지역 기준이며, 정확한 좌표·수종·증빙은 집행 완료 후 갱신됩니다.
        </p>
      </div>
    );
  }

  /* ---------- Monthly impact report ---------- */
  if (view === 'monthly') {
    const breakdown = [
      { label: '생활 기반 회복', pct: 46, color: 'var(--domain-space)' },
      { label: '관계 유지', pct: 24, color: 'var(--domain-relation)' },
      { label: '취미·창작', pct: 18, color: 'var(--domain-hobby)' },
      { label: '몸 관리', pct: 12, color: 'var(--domain-body)' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <AppHeader title="월간 임팩트 리포트"
          leading={<IconButton icon={<Icon name="chevron-left" size={20} />} label="뒤로" onClick={() => setView('main')} />}
          trailing={<IconButton icon={<Icon name="share-2" />} label="공유" />} />

        <Card tone="inverse" padding="lg">
          <div style={{ ...eyebrowStyle, color: 'var(--pine-300)' }}>2026년 7월</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 20, lineHeight: 1.5, color: '#F1F7F2', margin: '10px 0 18px' }}>
            이번 달 당신의 운영은 5개의 Impact Seed가 되어, 3그루의 나무로 이어졌습니다.
          </p>
          <div style={{ display: 'flex', gap: 26 }}>
            <Stat value="5" unit="개" label="이번 달" color="#fff" />
            <Stat value="3" unit="그루" label="기여 나무" color="var(--ochre-300)" />
            <Stat value="142" unit="개" label="누적 기록" color="#fff" />
          </div>
        </Card>

        <Card padding="md">
          <div style={{ ...eyebrowStyle, marginBottom: 14 }}>Seed가 된 운영 행동</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {breakdown.map((b) => (
              <div key={b.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 13.5, color: 'var(--text-body)' }}>{b.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)' }}>{b.pct}%</span>
                </div>
                <ProgressBar value={b.pct} color={b.color} height={7} />
              </div>
            ))}
          </div>
        </Card>

        <Card tone="tint" padding="md">
          <div style={{ ...eyebrowStyle, color: 'var(--pine-600)', marginBottom: 8 }}>이번 달의 해석</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 460, fontSize: 16, lineHeight: 1.6, color: 'var(--pine-900)' }}>
            큰 성취보다 삶의 바탕을 지킨 달이었습니다. 그 꾸준함이 당신의 숲을 조용히 넓혔습니다.
          </p>
        </Card>
      </div>
    );
  }

  /* ---------- Main ---------- */
  const NavRow = ({ icon, title, sub, onClick }) => (
    <Card padding="md" interactive onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--brand-tint)', flexShrink: 0 }}>
          <Icon name={icon} size={18} color="var(--pine-600)" />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>{title}</div>
          <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 1 }}>{sub}</div>
        </div>
        <Icon name="chevron-right" size={18} color="var(--text-faint)" />
      </div>
    </Card>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AppHeader large eyebrow="공익 임팩트" title="Dash Grove"
        trailing={<IconButton icon={<Icon name="share-2" />} label="공유" onClick={() => setView('certificate')} />} />

      <SectionTabs active={sec} onChange={setSec} items={[
        { key: 'mine', label: 'My Grove' },
        { key: 'community', label: 'Community Grove' },
      ]} />

      {sec === 'mine' ? (
        <>
          <Card tone="inverse" padding="lg">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <span style={{ ...eyebrowStyle, color: 'var(--pine-300)' }}>나의 숲</span>
              <SeedBadge count={seedTotal} label="이번 달" variant="solid" size="sm" />
            </div>
            <GroveMeter grown={3} total={8} pct={74} />
            <div style={{ display: 'flex', gap: 26, marginTop: 18 }}>
              <Stat value="3" unit="그루" label="누적 기여" color="#fff" />
              <Stat value="74" unit="%" label="전환까지" color="var(--ochre-300)" />
            </div>
          </Card>

          <NavRow icon="award" title="Tree Certificate" sub="닉네임으로 발급 · 공유 가능" onClick={() => setView('certificate')} />
          <NavRow icon="map-pin" title="Impact Map" sub="기여가 향한 3개 지역 보기" onClick={() => setView('regions')} />
          <NavRow icon="calendar-range" title="월간 임팩트 리포트" sub="2026년 7월 · Seed가 된 운영" onClick={() => setView('monthly')} />
        </>
      ) : (
        <>
          <Card tone="tint" padding="lg">
            <span style={{ ...eyebrowStyle, color: 'var(--pine-600)' }}>2026년 7월 · 함께 모은 임팩트</span>
            <div style={{ display: 'flex', gap: 22, marginTop: 14 }}>
              <Stat value="84,200" label="Impact Seed" color="var(--pine-700)" />
              <Stat value="420" unit="그루" label="식재 기여 예정" color="var(--ochre-600)" />
            </div>
          </Card>

          <div style={{ padding: 16, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Icon name="map-pin" size={16} color="var(--domain-impact)" />
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>동아프리카 해안 맹그로브 복원</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 12 }}>
              파트너 식재 데이터 수신 후 위치·수종·증빙이 이 화면에 반영됩니다.
            </p>
            <Badge tone="calm" dot>파트너 증빙 대기 중</Badge>
          </div>

          <p style={{ fontSize: 12.5, color: 'var(--text-faint)', lineHeight: 1.5, padding: '0 2px' }}>
            Impact Seed는 현금 가치가 없으며 교환·환불·양도되지 않습니다. 기여는 Dash의 임팩트 예산과 파트너십을 통해 이루어집니다.
          </p>
        </>
      )}
    </div>
  );
}
window.GroveScreen = GroveScreen;
