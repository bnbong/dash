**ActivityChart** — labeled, color-coded horizontal bars, one per life domain. Reads domain colors from the `DOMAINS` registry. The at-a-glance "shape" of operating activity on the Dashboard.

```jsx
<ActivityChart max={5} items={[
  { domain: 'space', value: 4 },
  { domain: 'hobby', value: 3 },
  { domain: 'body', value: 1 },
]} />
```
