/* Today — capture surface. Record today + today's interpretation + today's log. */
function TodayScreen({ seedTotal, onRecord, go }) {
  const D = window.DashDesignSystem_ae03e4;
  const { AppHeader, IconButton, Avatar, InterpretationCard, Textarea, SegmentedControl, Button, EmptyState, RecordReview } = D;
  const [text, setText] = React.useState('');
  const [mode, setMode] = React.useState('line');
  const [log, setLog] = React.useState(window.TODAY_LOG);
  const [justSaved, setJustSaved] = React.useState(false);
  const [pending, setPending] = React.useState(null); // { raw, time, guess }

  const save = () => {
    if (!text.trim()) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    setPending({ raw: text.trim(), time: `${hh}:${mm}`, guess: window.classifyGuess(text.trim()) });
    setText('');
    setJustSaved(false);
  };

  const commit = (result) => {
    setLog([...log, { time: pending.time, text: pending.raw, domain: result.primary, secondary: result.secondary || [], axes: result.axes || [] }]);
    onRecord(pending.raw);
    setPending(null);
    setJustSaved(true);
  };

  const touched = Array.from(new Set(log.map((l) => l.domain)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <AppHeader large eyebrow="7월 1일 수요일" title="오늘"
        trailing={<>
          <IconButton icon={<Icon name="bell" />} label="알림" />
          <span onClick={() => go('profile')} style={{ cursor: 'pointer', display: 'inline-flex' }}><Avatar name="Jiwon" size="sm" /></span>
        </>} />

      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-regular)', fontSize: 18, lineHeight: 1.6, letterSpacing: '-0.01em', color: 'var(--text-strong)', margin: '0 2px' }}>
        오늘은 생활 기반을 회복하기 좋은 날입니다.
      </p>

      {/* Quick record */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: 16, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <SegmentedControl value={mode} onChange={setMode} fullWidth options={[
          { label: '한 줄', value: 'line', icon: <Icon name="pen-line" size={16} /> },
          { label: '음성', value: 'voice', icon: <Icon name="mic" size={16} /> },
          { label: '사진', value: 'photo', icon: <Icon name="image" size={16} /> },
        ]} />
        {mode === 'line' && (
          <Textarea rows={2} placeholder="방 청소함 · 친구 생일 챙김 · 20분 걸음…" value={text}
            onChange={(e) => { setText(e.target.value); setJustSaved(false); }} />
        )}
        {mode === 'voice' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 4px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: '50%', background: 'var(--ochre-100)', color: 'var(--ochre-600)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="mic" size={20} /></span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>버튼을 누르고 오늘 있었던 일을 편하게 말해보세요.</span>
          </div>
        )}
        {mode === 'photo' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 4px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--ochre-100)', color: 'var(--ochre-600)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="image" size={20} /></span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>정리한 공간, 만든 음식… 사진 한 장이면 충분해요.</span>
          </div>
        )}
        <Button variant="accent" fullWidth iconLeft={<Icon name="plus" size={18} />} onClick={save} disabled={mode === 'line' && !text.trim()}>오늘 기록하기</Button>
      </div>

      {/* Classification review (right after recording) */}
      {pending && (
        <RecordReview
          raw={pending.raw}
          primary={pending.guess.primary}
          secondary={pending.guess.secondary}
          axes={pending.guess.axes}
          confidence={pending.guess.confidence}
          onConfirm={commit}
        />
      )}

      {/* Interpretation */}
      <InterpretationCard seed={justSaved ? 1 : null} axes={justSaved ? ['growth', 'meaning'] : ['growth', 'enjoyment']}>
        {justSaved
          ? '방금 기록한 행동은 당장 눈에 띄는 성취는 아니어도, 앞으로 생활이 덜 걸리게 해주는 운영 행동이에요. 오늘은 삶을 다시 정돈하기 시작한 날입니다.'
          : '오늘은 몸을 챙기고 공간을 정돈한 하루였습니다. 작은 행동들이 내일의 흐름을 만들어요.'}
      </InterpretationCard>

      {/* Today's log */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>오늘의 기록 · {log.length}</span>
          <div style={{ display: 'flex', gap: 5 }}>
            {touched.map((d) => <span key={d} style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--domain-${d})` }} />)}
          </div>
        </div>
        {log.length === 0 ? (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)' }}>
            <EmptyState icon={<Icon name="feather" />} title="아직 오늘의 기록이 없어요" description="밥을 해 먹고, 방을 치운 것도 삶을 운영한 행동이에요." />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {log.map((l, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xs)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', fontFeatureSettings: "'tnum' 1", flexShrink: 0, width: 34 }}>{l.time}</span>
                <span style={{ display: 'inline-flex', gap: 3, flexShrink: 0 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--domain-${l.domain})` }} />
                  {(l.secondary || []).map((s) => <span key={s} style={{ width: 6, height: 6, borderRadius: '50%', background: `var(--domain-${s})`, opacity: 0.55, alignSelf: 'center' }} />)}
                </span>
                <span style={{ flex: 1, fontSize: 14.5, color: 'var(--text-body)', minWidth: 0 }}>{l.text}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: `var(--domain-${l.domain})`, flexShrink: 0 }}>{D.DOMAINS[l.domain].en}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Small suggestion */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 16, background: 'var(--ochre-50)', border: '1px solid var(--ochre-100)', borderRadius: 'var(--radius-md)' }}>
        <Icon name="lightbulb" size={18} color="var(--ochre-600)" style={{ marginTop: 1, flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ochre-700)', marginBottom: 4 }}>오늘의 작은 제안</div>
          <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.5 }}>{window.SUGGESTIONS[1]}</div>
        </div>
      </div>
    </div>
  );
}
window.TodayScreen = TodayScreen;
