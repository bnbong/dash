---
name: dash-design
description: Use this skill to generate well-branded interfaces and assets for Dash — a calm "Life Operations & Impact Dashboard" mobile app for adults — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Dash is a calm, mature life-operations app (Korean UI + English product nouns) with a nature/grove restoration angle. The brand anchors on **pine evergreen** (primary, the Grove), **warm ochre** (momentum, the Impact Seed), warm paper neutrals, 8 muted earthen life-domain colors, and three type roles: **Pretendard** (UI), **Newsreader** (the interpretive serif voice), **IBM Plex Mono** (data). Voice is calm and specific, never pressuring — read the CONTENT FUNDAMENTALS section before writing any copy.

Key files:
- `README.md` — full design guide: product context, content fundamentals, visual foundations, iconography, manifest.
- `styles.css` — single CSS entry point (link this). Imports all tokens + fonts in `tokens/`.
- `components/` — React UI primitives (`forms/`, `display/`, `feedback/`, `navigation/`, and the brand-defining `dash/` group: DomainCard, SeedBadge, EvidenceItem, GroveMeter, InterpretationCard). Each has a `.prompt.md` with usage.
- `ui_kits/app/` — interactive recreation of the full app (Today, Dashboard, Evidence, Grove, Report).
- `assets/` — logo (wordmark, mark, app icon).
- `guidelines/` — foundation specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view: link `styles.css`, load components via `_ds_bundle.js` and `window.DashDesignSystem_<id>.*`, and use Lucide for icons. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
