**WeekStrip** — seven columns whose height/opacity reflect each day's recording activity. Today's column gets an ochre outline. Used on Dashboard and Report.

```jsx
<WeekStrip max={4} days={[
  { label: '월', level: 2 }, { label: '화', level: 3 }, { label: '수', level: 1 },
  { label: '목', level: 4 }, { label: '금', level: 2 }, { label: '토', level: 0 },
  { label: '일', level: 1, today: true },
]} />
```
