**SegmentedControl** — 2–4 exclusive options in a pill track. Used for record mode (한 줄·음성·사진) and report period (주간·월간).

```jsx
<SegmentedControl
  defaultValue="week"
  options={[{label:'주간', value:'week'}, {label:'월간', value:'month'}]}
/>
```
Each option supports an `icon`. Use `fullWidth` to stretch across a row.
