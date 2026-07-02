**Card** — the base surface. Warm paper, soft low shadow, 14px radius. Everything in Dash sits on a Card.

```jsx
<Card>오늘은 생활 기반을 회복한 날입니다.</Card>
<Card tone="tint" interactive onClick={open}>…</Card>
<Card tone="inverse">Community Grove</Card>
```

Tones: `default` · `sunken` · `tint` (pine) · `accent` (ochre) · `inverse` (dark pine). Set `interactive` for hover lift.
