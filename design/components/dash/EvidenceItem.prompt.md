**EvidenceItem** — a timeline row in the Evidence Log. The user's action + Dash's domain interpretation + the Seed it earned. Set `source` to show how it was captured (voice clip length, photo thumbnail).

```jsx
<EvidenceItem date="7월 8일" evidence="친구에게 먼저 연락"
  domainColor="var(--domain-relation)" domainLabel="Relation"
  interpretation="관계 유지" seed={1} />

<EvidenceItem date="7월 10일" evidence="새 레시피로 저녁 준비" source="photo"
  domainColor="var(--domain-hobby)" domainLabel="Hobby" seed={1} />

<EvidenceItem date="7월 9일" evidence="산책하며 남긴 음성 메모" source="voice" voiceLength="0:24"
  domainColor="var(--domain-mind)" domainLabel="Mind" seed={1} />
```

`source`: `text` (default, no badge) · `voice` (mic badge + length) · `photo` (camera badge + thumbnail). The original voice/photo is the record; the text shown is Dash's transcription/caption.
