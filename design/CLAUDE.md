# Dash Design System — working notes

## Product
Dash is a calm, mature **Life Operations & Impact Dashboard** mobile app for adults. Korean-first UI; English product nouns (Today Dash, Life Dashboard, Evidence Log, Dash Grove, Impact Seed). Source of truth: `dash/Dash_Impact_Proposal_KO.md`. Brand was defined from scratch (greenfield). Keep the app **Korean-first**.

## Purpose lens: 행복의 세 축 (Three Axes of Happiness)
Beyond productivity, Dash serves **flourishing** (Seligman, adapted): users becoming people who **grow (성장)**, **enjoy (즐거움)**, and **make meaning (의미)**. This is a second interpretive lens orthogonal to the 8 life domains. The 즐거움 axis legitimizes rest/hobbies — the healing lever for working professionals, not just productivity for students/jobseekers. `FlourishBalance` shows the *mix* over a period; an empty axis is a gentle permission-giving prompt, never a score to maximize. Maps to the 3 ascending dashes of the mark. Colors: Growth=pine, Enjoyment=ochre, Meaning=plum(`--domain-mind`).

## Brand quick reference
- Primary **pine** `--pine-700 #1F4D3D` (the Grove); accent **ochre** `--ochre-500 #C97F33` (momentum, Impact Seed). Warm paper neutrals. 8 muted earthen domain colors.
- Type: **Pretendard** (UI **and** the calm interpretive "voice" — the app is gothic/sans-first), **IBM Plex Mono** (data/numbers). Newsreader + Noto Serif KR are an optional editorial serif for landing/deck display headlines only, never in the product UI.
- Voice: calm, specific, never pressuring. No streak guilt, no comparison, no emoji. See README CONTENT FUNDAMENTALS.
- Icons: **Lucide** via CDN.
- Namespace for components in card/kit HTML: `window.DashDesignSystem_ae03e4`.

## Gotcha: centered Korean headlines
In a flex column with `align-items: center`, a text child WITHOUT an explicit width can collapse toward min-content for certain Korean strings, causing extra line breaks and visual overlap with the next element. **Always give centered headings/paragraphs `width: '100%'`** (with a `maxWidth` if needed). Also keep `word-break: keep-all` (set globally in `tokens/base.css`) so Korean wraps on word boundaries, and use serif line-heights ≥ 1.5 at large sizes. Do NOT add a global `overflow-wrap: break-word` — it breaks Latin words and mono digit runs (e.g. "142"→"14/2", "Jiwon"→"Jiwo/n") inside tight flex children.
