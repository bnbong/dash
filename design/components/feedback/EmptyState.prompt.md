**EmptyState** — calm, supportive empty view. Never frame an empty log as failure (no "스트릭이 끊겼습니다").

```jsx
<EmptyState
  icon={<i data-lucide="feather" />}
  title="아직 오늘의 기록이 없어요"
  description="밥을 해 먹고, 방을 치운 것도 삶을 운영한 행동이에요."
  action={<Button variant="accent">한 줄 기록하기</Button>}
/>
```
