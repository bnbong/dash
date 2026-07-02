/* Shared mock data + helpers for the Dash app UI kit. */

const DOMAIN_ICONS = {
  body: 'heart-pulse',
  space: 'home',
  relation: 'users',
  work: 'graduation-cap',
  hobby: 'music',
  mind: 'brain',
  admin: 'receipt',
  impact: 'sprout',
};

// Lightweight icon — relies on lucide.createIcons() being re-run after renders.
function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex', ...style }} />;
}

const TODAY_DOMAINS = [
  { domain: 'body', status: 'recover', note: '수면·운동 기록이 부족해요' },
  { domain: 'space', status: 'stable', note: '최근 1주일간 공간 관리 행동이 있어요' },
  { domain: 'relation', status: 'holding', note: '접점은 적지만 끊기지 않았어요' },
  { domain: 'work', status: 'growing', note: '학습 기록이 누적되고 있어요' },
  { domain: 'hobby', status: 'active', note: '취미 활동이 반복적으로 나타나요', count: 3 },
  { domain: 'mind', status: 'overload', note: '피로·무기력 관련 기록이 많아요' },
  { domain: 'admin', status: 'tidy', note: '생활 행정이 정리됐어요' },
  { domain: 'impact', status: 'growing', note: '이번 달 Seed가 쌓이고 있어요', count: 18 },
];

const EVIDENCE = [
  { date: '7월 11일', evidence: '병원 예약', domain: 'body', interpretation: '몸 관리', seed: 1 },
  { date: '7월 10일', evidence: '새 김치볶음밥 레시피 시도', domain: 'hobby', interpretation: '생활 역량 확장', seed: 1 },
  { date: '7월 8일', evidence: '친구에게 먼저 연락', domain: 'relation', interpretation: '관계 유지', seed: 1 },
  { date: '7월 5일', evidence: '밴드 합주 2시간', domain: 'hobby', interpretation: '취미 성장과 커뮤니티 유지', seed: 1 },
  { date: '7월 3일', evidence: '빨래 2번 돌림', domain: 'space', interpretation: '생활 기반 회복', seed: 1 },
  { date: '7월 1일', evidence: '밀린 공과금 납부', domain: 'admin', interpretation: '생활 마찰 감소', seed: 1 },
];

const SUGGESTIONS = [
  '책상 위 한 구역만 정리해보세요.',
  '오늘은 운동보다 잠들 준비를 먼저 해도 좋습니다.',
  '친구 한 명에게 짧은 답장을 보내보세요.',
];

// Today's logged actions (only today) — primary + optional secondary + axes
const TODAY_LOG = [
  { time: '08:20', text: '아침 챙겨 먹음', domain: 'body', secondary: [], axes: ['enjoyment'] },
  { time: '13:05', text: '점심 후 책상 정리', domain: 'space', secondary: ['admin'], axes: [] },
  { time: '21:40', text: '내일 회의 자료 검토', domain: 'work', secondary: [], axes: ['growth'] },
];

// Tier-1 on-device instant estimate (keyword heuristic) — see classification spec.
// The real product replaces this with an LLM call; this stands in for the mock.
function classifyGuess(raw) {
  const t = (raw || '').toLowerCase();
  const has = (...ws) => ws.some((w) => t.includes(w));
  let primary = 'space', secondary = [], axes = [], confidence = 0.86;
  if (has('운동', '걷', '산책', '헬스', '병원', '잠', '수면', '밥', '식사', '요리')) { primary = 'body'; axes = ['enjoyment']; }
  else if (has('청소', '정리', '빨래', '설거지', '방')) { primary = 'space'; axes = []; }
  else if (has('친구', '가족', '엄마', '어머니', '연락', '통화', '만나')) { primary = 'relation'; axes = ['meaning']; }
  else if (has('공부', '일', '이력서', '회의', '업무', '학습', '자료')) { primary = 'work'; axes = ['growth']; }
  else if (has('합주', '밴드', '기타', '그림', '취미', '게임', '드라마', '독서', '책')) { primary = 'hobby'; axes = ['enjoyment']; }
  else if (has('명상', '쉬', '휴식', '멍', '산책', '마음')) { primary = 'mind'; axes = ['enjoyment']; }
  else if (has('공과금', '납부', '은행', '서류', '예약', '정산', '장보')) { primary = 'admin'; axes = []; }
  else { confidence = 0.48; }
  if (has('합주', '밴드') ) secondary = ['relation'];
  if (has('친구') && has('등산', '운동', '걷')) { primary = 'body'; secondary = ['relation']; axes = ['enjoyment']; }
  return { primary, secondary, axes, confidence };
}

// Per-domain activity levels this week (0..5) for the Dashboard ActivityChart
const DOMAIN_ACTIVITY = [
  { domain: 'space', value: 5 },
  { domain: 'hobby', value: 4 },
  { domain: 'work', value: 3 },
  { domain: 'admin', value: 3 },
  { domain: 'relation', value: 2 },
  { domain: 'impact', value: 2 },
  { domain: 'body', value: 1 },
  { domain: 'mind', value: 1 },
];

// 7-day recording intensity (0..4) for WeekStrip
const WEEK_DAYS = [
  { label: '월', level: 2 },
  { label: '화', level: 3 },
  { label: '수', level: 1 },
  { label: '목', level: 4 },
  { label: '금', level: 3 },
  { label: '토', level: 1 },
  { label: '일', level: 2, today: true },
];

// Week-over-week comparison for the Report
const WEEK_COMPARE = [
  { label: '기록 수', now: 16, prev: 11, unit: '개' },
  { label: '관리한 영역', now: 7, prev: 5, unit: '개' },
  { label: '회복 필요', now: 2, prev: 4, unit: '개', inverse: true },
  { label: 'Impact Seed', now: 5, prev: 3, unit: '개' },
];

// Evidence grouped by month for the archive
const EVIDENCE_MONTHS = [
  {
    month: '2026년 7월', count: 16, seed: 16, items: [
      { date: '11일', evidence: '병원 예약', domain: 'body', interpretation: '몸 관리', seed: 1 },
      { date: '10일', evidence: '새 김치볶음밥 레시피 시도', domain: 'hobby', interpretation: '생활 역량 확장', seed: 1 },
      { date: '08일', evidence: '친구에게 먼저 연락', domain: 'relation', interpretation: '관계 유지', seed: 1 },
      { date: '05일', evidence: '밴드 합주 2시간', domain: 'hobby', interpretation: '취미 성장과 커뮤니티 유지', seed: 1 },
      { date: '03일', evidence: '빨래 2번 돌림', domain: 'space', interpretation: '생활 기반 회복', seed: 1 },
      { date: '01일', evidence: '밀린 공과금 납부', domain: 'admin', interpretation: '생활 마찰 감소', seed: 1 },
    ],
  },
  {
    month: '2026년 6월', count: 22, seed: 22, items: [
      { date: '28일', evidence: '이력서 한 문단 수정', domain: 'work', interpretation: '커리어 유지', seed: 1 },
      { date: '24일', evidence: '어머니와 통화 40분', domain: 'relation', interpretation: '관계 유지', seed: 1 },
      { date: '19일', evidence: '주간 장보기 + 식단 정리', domain: 'admin', interpretation: '생활 운영', seed: 1 },
    ],
  },
];

Object.assign(window, {
  Icon, DOMAIN_ICONS, TODAY_DOMAINS, EVIDENCE, SUGGESTIONS,
  TODAY_LOG, DOMAIN_ACTIVITY, WEEK_DAYS, WEEK_COMPARE, EVIDENCE_MONTHS, classifyGuess,
});
