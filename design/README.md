# Dash — Design System

> **어른을 위한 Life Operations & Impact Dashboard**
> 당신은 이미 달리고 있다. Dash는 그 달리기의 방향과 속도, 균형, 그리고 세상에 남긴 작은 흔적을 보여준다.

This is the brand + product design system for **Dash**, a mobile app that records the everyday "operating" actions adults already perform — growth, maintenance, recovery, relationships, hobbies, life-admin — interprets them into meaning, and connects that trajectory to real ecological-restoration impact through **Dash Grove**.

Dash is at the **MVP design stage**. There was no prior product UI, brand, or color system — every visual decision in this repo was defined here from the product proposal. Treat this as the canonical source of truth; it is meant to be iterated on with the team.

---

## Sources used

- **Product proposal** (Korean): `dash/Dash_Impact_Proposal_KO.md` — "Dash 서비스 기획 제안서 v2.0" (2026-06-29). The single source of truth for product concept, IA, copy, feature set, tone, and the Dash Grove impact loop. Everything below is derived from it.
- **GitHub:** [`bnbong/dash`](https://github.com/bnbong/dash) — currently an empty repository (no code at the time of writing). Explore it again later if implementation lands there; the design system should track it. Other public work by the same author lives at [github.com/bnbong](https://github.com/bnbong).

> If you have access to the proposal doc, read sections 1 (brand), 7–10 (Dash Grove + features), 15 (IA), and 20 (positioning copy) before designing anything new.

---

## What Dash is (product context)

A **Life Operations & Impact Dashboard**. Not a to-do app, not a habit tracker, not a guilt machine. It does three things:

1. **Records** a day's actions (한 줄 기록 / voice / photo / quick check-in).
2. **Interprets** them — an AI translates raw actions into *operating meaning* across 8 life domains, and recognizes "maintenance productivity" (cleaning, cooking, replying to a friend) as real.
3. **Connects** the trajectory to impact — meaningful milestones earn **Impact Seeds**, which pool monthly and convert (via verified partners) into tree-planting / ecosystem-restoration contributions shown in **Dash Grove**.

**The 8 life domains** (color-coded throughout): Body 몸 · Space 공간 · Relation 관계 · Work & Learning 일과 학습 · Hobby & Creation 취미와 창작 · Mind 마음 · Life Admin 생활 행정 · Impact 임팩트.

**행복의 세 축 (Three Axes of Happiness).** A second interpretive lens, orthogonal to the 8 domains — where domains answer *"where in life?"*, the three axes answer *"how does this help me flourish?"* Adapted from Martin Seligman's work on well-being:
- **성장 Growth** — becoming more capable (pine)
- **즐거움 Enjoyment** — positive emotion, play, savoring, **rest** (ochre). This axis makes rest and hobbies legitimate — it is the healing lever for burned-out working professionals, not just a productivity metric for students/jobseekers.
- **의미 Meaning** — connection, contribution, purpose (plum / `--domain-mind`)

The goal Dash serves is not output but **flourishing**: that a user becomes someone who grows, enjoys, and makes meaning. `FlourishBalance` visualizes the *mix* over a period — an empty axis (e.g. 즐거움 ≈ 0 for an over-working user) is surfaced as a gentle, permission-giving prompt ("쉼도 번영입니다"), never a failure or a number to maximize. The three axes map to the three ascending dashes of the Dash mark.

**Bottom-tab IA & each tab's distinct role:**
- **Today 오늘** — *capture & now*: record (한 줄/음성/사진) + today's single interpretation + today's log only.
- **Dashboard 대시보드** — *visual operating state*: operating-balance ring gauge, 7-day strip, per-domain activity chart, domain detail. No input, no prose.
- **Evidence 증거** — *searchable long-term archive*: month-grouped history, search, cumulative stats. (Tapping a domain on Dashboard deep-links here pre-filtered.)
- **Grove** — *public impact*: My/Community Grove, certificate, contribution regions.
- **Report 리포트** — *periodic retrospective*: keyword, 행복의 세 축 balance, week-over-week comparison, narrative, next suggestion.

**Impact Seed is not money.** It is a non-monetary progress unit. Never render it as currency, points, or a reward you can spend.

---

## CONTENT FUNDAMENTALS — how Dash writes

Dash's copy is **bilingual**: Korean prose for everything the user reads, with **English product nouns** kept in English (Today Dash, Life Dashboard, Evidence Log, Dash Grove, Impact Seed, Community Grove, Weekly Operation Report). Feature names are proper nouns; don't translate them mid-sentence.

**Voice:** a calm, observant operations partner — not a coach, not a therapist, not a cheerleader.

- **Person:** addresses the user as **당신 / 나** gently; mostly speaks *about the user's day* ("오늘은 …한 날입니다") rather than commanding. Korean uses the polite **-습니다 / -요** register, never 반말, never barking imperatives.
- **It states, it doesn't push.** "네 삶은 이렇게 운영되고 있다"가 핵심이지 "더 열심히 해라"가 아니다.
- **Specific over praising.** Always cite the concrete action ("방 청소와 공과금 납부"), then name the operating meaning ("생활 마찰을 줄이는 운영 행동"). Avoid inflated praise ("대단해요!", "완벽해요!").
- **Low energy is never failure.** No streak-break guilt, no "다시 시작하세요", no comparison to others.
- **Impact is meaning, not a bribe.** "내가 오늘 내 삶을 정리한 일이, 세상 어딘가의 숲을 조금 더 자라게 한다." Never overstate ("탄소중립 달성" ✗ → "생태 복원 기여" ✓); pre-verification say **기여 예정 / 기여 집행**, not "식재 완료".

**Examples — say this:**
- "오늘은 큰 성취보다 생활 기반을 지킨 날입니다."
- "이번 주의 운영이 Dash Grove에 3개의 Impact Seed를 더했습니다."
- "Space 영역이 회복을 시작했습니다."

**Never this:**
- "스트릭이 끊겼습니다. 다시 시작하세요."
- "오늘 목표를 실패해서 나무를 심지 못했어요."
- "친구보다 나무를 적게 심었습니다."

**Casing & punctuation:** English nouns in Title Case (Dash Grove, Impact Seed). Mono labels/eyebrows in UPPERCASE with wide tracking (`IMPACT SEED LEDGER`). No exclamation-heavy copy. **No emoji** — the maturity of the brand depends on its absence; status is shown with color dots and words, not emoji.

---

## VISUAL FOUNDATIONS

The feeling: **warm, grounded, quietly alive.** A mature operations surface — closer to a well-made paper journal + a calm dashboard than a candy-colored habit app. Editorial where it interprets; precise where it shows data.

**Color.** Three anchors:
- **Pine / Evergreen** (`--pine-700` #1F4D3D) — the primary brand and the Grove. Growth, restoration, calm.
- **Ochre / Amber** (`--ochre-500` #C97F33) — momentum, the literal "dash", and the Impact Seed token. Used sparingly, for energy and Seed moments only.
- **Warm paper neutrals** — canvas `#FAF7F1`, ink is a green-tinted near-black `#1E2620`. We avoid clinical pure-white SaaS surfaces; everything sits on warm paper.
- **8 muted earthen domain colors** — clay, sage, dusty rose, denim, gold, plum, taupe, pine. Desaturated so eight can coexist without shouting.
- **Status is calm:** positive = pine, "needs recovery" = **warm ochre (never red)**, overload = muted clay `#A8503C` (not a fire-alarm red), info = muted teal-slate.

**Type.** Three roles:
- **Pretendard** (`--font-sans`) — the UI workhorse AND the interpretive **voice**; handles Korean + Latin beautifully. Titles use 620 weight with tight tracking; the calm "voice" (Dash's interpretive sentences, `.dash-voice` / `InterpretationCard`) uses a lighter regular weight at a relaxed 1.66 line-height. The app is **gothic (sans) first** — the serif is reserved for optional editorial surfaces (landing/deck) only.
- **Newsreader + Noto Serif KR** (`--font-serif`) — an optional editorial serif for marketing/deck display headlines. Not used in the product UI.
- **IBM Plex Mono** (`--font-mono`) — the **data voice**. Every number (Seed counts, %, dates, ledgers) is tabular mono; section eyebrows are uppercase mono with `.14em` tracking.

**Backgrounds.** Flat warm paper. **No gradients** as decoration (the only "gradient" is the conceptual ochre→pine of the logo motif). No photographic hero washes inside the app; the Grove screen may use soft pine tint blocks. Texture is implied by warmth, not noise overlays.

**Shape & depth.** Radii are soft but grounded — 14px default card, never pill-rounded blobs. Elevation is **low and warm**: shadows use a green-tinted near-black at 5–10% (`--shadow-sm` on cards, `--shadow-md` on hover, `--shadow-pop` on modals). Borders are 1px warm hairlines (`--line` #E9E3D6). Cards = warm paper surface + hairline + soft shadow + 14px radius.

**Motion.** Gentle, no bounce. `--ease-standard` / `--ease-out`, 120–360ms. Press states **shrink slightly** (scale ~0.99 on buttons, 0.92 on icon buttons) — never grow. Hover **darkens fills** (primary→`--brand-strong`) or lifts a card 1px. Progress bars ease their width; **no infinite looping decoration**, no confetti. The Grove "grows" with calm width/opacity transitions.

**Transparency & blur.** Used only for the modal scrim (`rgba(20,38,30,.34)` + 2px blur). No frosted-glass everywhere.

**Layout.** Mobile-first, `--app-max-width: 440px`. Fixed bottom `TabBar` (64px) and screen `AppHeader` (56px). Generous vertical rhythm on the 4px grid; content breathes.

**Imagery vibe** (when real imagery is added later): warm, natural, earthy — forests, hands, light through leaves; never cold stock-blue or aggressive saturation. Prefer documentary warmth over polish.

---

## ICONOGRAPHY

Dash standardizes on **[Lucide](https://lucide.dev)** — calm, even-stroke (≈1.75px) outline icons that match the mature, grounded tone. They're loaded from CDN in the cards and UI kit:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="pen-line"></i>
<script>lucide.createIcons()</script>
```

> **Substitution flag:** there was no pre-existing Dash icon set (greenfield MVP). Lucide is a deliberate choice, not a copy of an existing kit — swap it if the team adopts a custom set. If so, keep the stroke weight even and the corners soft.

**Common glyphs:** `pen-line` (한 줄 기록), `mic`/`image` (voice·photo), `layout-grid` (Dashboard), `scroll-text` (Evidence), `trees`/`sprout` (Grove), `line-chart` (Report), `heart-pulse` (Body), `home` (Space), `users` (Relation), `graduation-cap` (Work), `music` (Hobby), `brain` (Mind), `receipt` (Life Admin).

**Custom brand glyph:** the **sprout** used in `SeedBadge` / `InterpretationCard` is drawn inline (a small two-leaf seedling) so the Impact Seed token is always exactly on-brand in ochre. The grove trees in `GroveMeter` are likewise inline SVG. **Emoji and unicode are never used as icons.**

**Logos** live in `assets/`: `logo-wordmark.svg`, `logo-mark.svg` (3 ascending dashes), `logo-app-icon.svg` (pine tile). The mark is the brand motif — ascending dashes rising ochre → pine.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css` (spacing·radius·elevation·motion), `base.css`.
- `assets/` — `logo-wordmark.svg`, `logo-mark.svg`, `logo-app-icon.svg`.
- `README.md` — this guide. `SKILL.md` — agent-skill entry point.

**Foundation cards** (Design System tab) — `guidelines/`
- Colors: Pine · Ochre · Neutrals · Semantic · Life Domains
- Type: Display & Titles · Body & UI · Mono · The Voice
- Spacing: Scale · Radius · Elevation
- Brand: Logo · Motif · Voice & Tone

**Components** (`window.DashDesignSystem_ae03e4.*`) — `components/`
- `forms/` — Button, IconButton, Input, Textarea, Switch, Checkbox, SegmentedControl
- `display/` — Card, Badge, Tag, Avatar, Stat, ProgressBar, Divider
- `feedback/` — Dialog, Toast, EmptyState
- `navigation/` — AppHeader, SectionTabs, TabBar
- `dash/` — **DomainCard, SeedBadge, EvidenceItem, GroveMeter, InterpretationCard, RingGauge, ActivityChart, WeekStrip, FlourishBalance, RecordReview, VoicePlayer, PhotoViewer** + the `DOMAINS` and `AXES` registries (product-specific, brand-defining)

**UI kits** — `ui_kits/`
- `app/` — interactive recreation of the Dash mobile app: Today, Life Dashboard, Evidence Log, Dash Grove (+ certificate, Impact Map, monthly report deep-dives), Weekly Report, Profile.
- `onboarding/` — 8-step signup/onboarding click-through: welcome → value props → first record → interpretation → account → done.
- `landing/` — Phase 0 pre-signup marketing site (responsive): hero, problem, how-it-works, Life Dashboard, Dash Grove, pricing, signup CTA.
- `deck/` — investor/partner pitch deck (9 slides, `deck-stage.js`; arrow keys to navigate, print → PDF).

Each component dir has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and one `*.card.html` thumbnail. Import a component in card/kit HTML via `const { Button } = window.DashDesignSystem_ae03e4`.
