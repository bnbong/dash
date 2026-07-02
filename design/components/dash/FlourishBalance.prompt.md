**FlourishBalance** — visualizes the mix of the three axes of happiness (성장 Growth · 즐거움 Enjoyment · 의미 Meaning) over a period. A calm proportional bar + legend. Shows *balance*, never a score to maximize — an empty axis is a gentle prompt (e.g. a burned-out worker with 즐거움 near 0), not a failure. Import the `AXES` map for the colors/labels.

```jsx
<FlourishBalance values={{ growth: 6, enjoyment: 3, meaning: 4 }} />
```

Axes → colors: Growth = pine, Enjoyment = ochre, Meaning = plum (`--domain-mind`). Maps to the three ascending dashes of the Dash mark.
