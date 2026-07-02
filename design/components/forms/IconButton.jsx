import React from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };
const ICON = { sm: 16, md: 18, lg: 20 };

/**
 * Square/round icon-only button.
 */
export function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  round = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const variants = {
    ghost: { bg: 'transparent', color: 'var(--text-muted)', hoverBg: 'var(--surface-sunken)', hoverColor: 'var(--text-strong)' },
    soft: { bg: 'var(--brand-tint)', color: 'var(--brand)', hoverBg: 'var(--brand-soft)', hoverColor: 'var(--brand-strong)' },
    solid: { bg: 'var(--brand)', color: 'var(--text-on-brand)', hoverBg: 'var(--brand-strong)', hoverColor: 'var(--text-on-brand)' },
    outline: { bg: 'var(--surface)', color: 'var(--text-body)', hoverBg: 'var(--surface-sunken)', hoverColor: 'var(--text-strong)' },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim,
        background: hover && !disabled ? v.hoverBg : v.bg,
        color: hover && !disabled ? v.hoverColor : v.color,
        border: variant === 'outline' ? '1px solid var(--line-strong)' : '1px solid transparent',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transform: active && !disabled ? 'scale(0.92)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', width: ICON[size], height: ICON[size] }}>{icon}</span>
    </button>
  );
}
