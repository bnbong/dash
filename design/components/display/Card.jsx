import React from 'react';

const PADS = { none: 0, sm: 14, md: 18, lg: 24 };

/**
 * Surface container. The default Dash card: warm paper, soft shadow, 14px radius.
 */
export function Card({
  children,
  padding = 'md',
  interactive = false,
  tone = 'default',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { bg: 'var(--surface)', border: '1px solid var(--line)' },
    sunken: { bg: 'var(--surface-sunken)', border: '1px solid var(--line)' },
    tint: { bg: 'var(--brand-tint)', border: '1px solid var(--pine-100)' },
    inverse: { bg: 'var(--surface-inverse)', border: '1px solid var(--pine-800)' },
    accent: { bg: 'var(--accent-soft)', border: '1px solid var(--ochre-200)' },
  };
  const t = tones[tone] || tones.default;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: t.bg, border: t.border, borderRadius: 'var(--radius-md)',
        padding: PADS[padding] ?? PADS.md,
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-1px)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        color: tone === 'inverse' ? 'var(--text-on-brand)' : 'var(--text-body)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
