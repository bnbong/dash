import React from 'react';

/**
 * Checkbox with optional label. Pine fill when checked.
 */
export function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  style = {},
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <button
        type="button" role="checkbox" aria-checked={on} onClick={toggle} disabled={disabled}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 22, height: 22, flexShrink: 0, padding: 0,
          background: on ? 'var(--brand)' : 'var(--field-bg)',
          border: `1.5px solid ${on ? 'var(--brand)' : 'var(--line-strong)'}`,
          borderRadius: 'var(--radius-xs)', cursor: 'inherit',
          transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        }}
      >
        {on && (
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#F4F9F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      {label && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-snug)' }}>{label}</span>}
    </label>
  );
}
