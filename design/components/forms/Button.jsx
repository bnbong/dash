import React from 'react';

const SIZES = {
  sm: { height: 34, padding: '0 14px', font: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: 6 },
  md: { height: 42, padding: '0 18px', font: 'var(--text-base)', radius: 'var(--radius-md)', gap: 8 },
  lg: { height: 52, padding: '0 24px', font: 'var(--text-body-lg)', radius: 'var(--radius-md)', gap: 9 },
};

const VARIANTS = {
  primary: {
    background: 'var(--brand)', color: 'var(--text-on-brand)',
    border: '1px solid transparent', shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--brand-strong)',
  },
  accent: {
    background: 'var(--accent)', color: 'var(--text-on-accent)',
    border: '1px solid transparent', shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--accent-strong)',
  },
  secondary: {
    background: 'var(--surface)', color: 'var(--text-strong)',
    border: '1px solid var(--line-strong)', shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--surface-sunken)',
  },
  ghost: {
    background: 'transparent', color: 'var(--brand)',
    border: '1px solid transparent', shadow: 'none',
    hoverBg: 'var(--brand-tint)',
  },
  quiet: {
    background: 'var(--brand-tint)', color: 'var(--brand-strong)',
    border: '1px solid transparent', shadow: 'none',
    hoverBg: 'var(--brand-soft)',
  },
};

/**
 * Dash primary button. Calm, grounded, low-elevation.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={disabled}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding,
        fontFamily: 'var(--font-sans)', fontSize: s.font,
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-snug)',
        lineHeight: 1, whiteSpace: 'nowrap',
        background: hover && !disabled ? v.hoverBg : v.background,
        color: v.color, border: v.border, borderRadius: s.radius,
        boxShadow: active ? 'none' : v.shadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? 'translateY(0.5px) scale(0.99)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex', marginLeft: -2 }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex', marginRight: -2 }}>{iconRight}</span>}
    </button>
  );
}
