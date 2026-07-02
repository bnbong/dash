**Dialog** — centered modal, soft scrim, gentle pop-in. Pass `<Button>`s as actions.

```jsx
<Dialog
  open={open} onClose={close}
  title="실명으로 발급할까요?"
  description="인증서에 실명이 표시됩니다. 언제든 닉네임으로 되돌릴 수 있어요."
  primaryAction={<Button onClick={confirm}>발급</Button>}
  secondaryAction={<Button variant="ghost" onClick={close}>취소</Button>}
/>
```
