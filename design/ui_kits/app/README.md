# Dash App — UI Kit

An interactive, high-fidelity recreation of the **Dash** mobile app (MVP scope), composed entirely from this design system's components.

**Open `index.html`.** It renders inside a 402×800 phone frame with a working bottom tab bar.

## Screens
- **Today** (`TodayScreen.jsx`) — state line, quick record (한 줄/음성/사진), AI interpretation on save, life-domain cards, small suggestion, Grove status. Type a record and tap **오늘 기록하기** → an Impact Seed is awarded (toast) and the interpretation appears.
- **Dashboard** (`DashboardScreen.jsx`) — Life Dashboard: 8 domain status cards with filter tags and a week summary.
- **Evidence** (`EvidenceScreen.jsx`) — Evidence Log timeline; filter by domain.
- **Grove** (`GroveScreen.jsx`) — Dash Grove with My Grove / Community Grove tabs, GroveMeter, Tree Certificate, partner project, legal disclaimer.
- **Report** (`ReportScreen.jsx`) — Weekly/Monthly Operation Report: keyword, interpretation, domains, Seeds earned, next small suggestion.

## Notes
- `data.jsx` holds mock content + the `Icon` helper (Lucide) + the domain→icon map.
- Screens read components from `window.DashDesignSystem_ae03e4` and are exposed on `window.*` for the inline shell in `index.html`.
- This is a cosmetic recreation derived from the product proposal (`dash/Dash_Impact_Proposal_KO.md`), not production code. Content is illustrative.
