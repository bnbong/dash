import React from 'react';

/**
 * On/off toggle. Pine when on. Gentle slide, no bounce.
 */
export function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  size = 'md',
  style = {},
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;

  const dims = size === 'sm'
    ? { w: 38, h: 22, knob: 16 }
    : { w: 46, h: 27, knob: 21 };

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  const control = (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={toggle}
      disabled={disabled}
      style={{
        position: 'relative', width: dims.w, height: dims.h, flexShrink: 0,
        borderRadius: 'var(--radius-pill)', border: 'none', padding: 0,
        background: on ? 'var(--brand)' : 'var(--ink-200)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-base) var(--ease-standard)',
      }}
    >
      <span style={{
        position: 'absolute', top: (dims.h - dims.knob) / 2,
        left: on ? dims.w - dims.knob - 3 : 3, width: dims.knob, height: dims.knob,
        borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)',
        transition: 'left var(--dur-base) var(--ease-out)',
      }} />
    </button>
  );

  if (!label) return control;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      {control}
      <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{label}</span>
    </label>
  );
}
