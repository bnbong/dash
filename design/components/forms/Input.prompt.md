**Input** — single-line text field. Pine focus ring, warm field background, clay error state.

```jsx
<Input label="닉네임" placeholder="Grove 인증서에 표시됩니다" hint="언제든 변경할 수 있어요" />
<Input label="이메일" type="email" iconLeft={<i data-lucide="mail" />} error="올바른 형식이 아니에요" />
```

Sizes `md` · `lg`. Supports `iconLeft`, `suffix`, `disabled`. Sibling `Textarea` mirrors the styling for multi-line.
