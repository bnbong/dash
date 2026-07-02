**Button** — the core action control for Dash. Use `primary` (pine) for the main action on a screen, `accent` (ochre) sparingly for momentum moments, `secondary`/`ghost`/`quiet` for everything else.

```jsx
<Button variant="primary" size="md" onClick={save}>기록 저장</Button>
<Button variant="accent" iconLeft={<i data-lucide="plus" />}>오늘 기록하기</Button>
<Button variant="ghost">나중에</Button>
```

Variants: `primary` · `accent` · `secondary` · `ghost` · `quiet`. Sizes: `sm` · `md` · `lg`. Press state shrinks slightly (no bounce); hover darkens the fill. Pair with Lucide icons via `iconLeft` / `iconRight`.
