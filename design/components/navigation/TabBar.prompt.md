**TabBar** — bottom navigation for the app. Five-to-six tabs: Today · Dashboard · Evidence · Grove · Report · Profile.

```jsx
<TabBar active="today" onChange={setTab} items={[
  { key:'today', label:'Today', icon:({active})=><i data-lucide="pen-line" /> },
  { key:'grove', label:'Grove', icon:<i data-lucide="trees" /> },
]} />
```
