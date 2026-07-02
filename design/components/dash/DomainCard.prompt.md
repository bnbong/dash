**DomainCard** — the building block of the Life Dashboard. One of 8 canonical life domains, color-coded, with a calm status word. Import the `DOMAINS` map for colors/labels elsewhere.

```jsx
<DomainCard domain="space" status="stable" note="최근 1주일간 공간 관리 행동이 있었어요" />
<DomainCard domain="body" status="recover" count={2} compact />
```

Domains: `body · space · relation · work · hobby · mind · admin · impact`.
Statuses: `stable · growing · active · holding · recover · overload · tidy`. "회복 필요" uses warm attention color, never red.
