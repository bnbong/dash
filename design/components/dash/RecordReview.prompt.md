**RecordReview** — shown right after a record: Dash presents how it classified the entry (primary domain + up to 2 secondary + up to 2 happiness axes) and lets the user correct it in one tap, then confirm. The design embodiment of `guidelines/classification-and-flourish-spec.md`.

```jsx
<RecordReview
  raw="밴드 합주 2시간"
  primary="hobby" secondary={['relation']} axes={['enjoyment','growth']}
  confidence={0.88}
  onConfirm={commit}
/>
```

Tone hands authority to the user (never "잘못 분류했어요"). When `confidence < 0.55`, the copy flips to ask first ("이 기록, 어떤 영역에 가까운가요?"). In 저에너지 모드, skip this entirely and save quietly.
