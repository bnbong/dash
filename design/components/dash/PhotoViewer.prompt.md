**PhotoViewer** — a photo record's thumbnail that opens a fullscreen viewer showing the vision caption, domain tag, and what the AI detected (scene/objects). Transparent AI provenance builds trust. Falls back to a domain-tinted placeholder when no image is present.

```jsx
<PhotoViewer
  caption="정돈된 책상과 노트북 — 정리된 작업 공간"
  domainColor="var(--domain-space)" domainLabel="Space"
  detected={['책상', '노트북', '실내', '정돈']}
/>
```
