import React from 'react';

/**
 * Text field with optional label, leading icon, hint and error.
 */
export function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  iconLeft = null,
  suffix = null,
  size = 'md',
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const heights = { md: 44, lg: 52 };
  const h = heights[size] || heights.md;
  const borderColor = error
    ? 'var(--caution-500)'
    : focus ? 'var(--pine-500)' : 'var(--field-border)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
          color: 'var(--text-body)', letterSpacing: 'var(--tracking-snug)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: h, padding: '0 14px',
        background: disabled ? 'var(--surface-sunken)' : 'var(--field-bg)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? `0 0 0 3px var(--focus-ring)` : 'var(--shadow-xs)',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        opacity: disabled ? 0.6 : 1,
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--text-muted)', width: 18, height: 18 }}>{iconLeft}</span>}
        <input
          id={fieldId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
            color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)',
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{
          fontSize: 'var(--text-xs)',
          color: error ? 'var(--caution-600)' : 'var(--text-muted)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
