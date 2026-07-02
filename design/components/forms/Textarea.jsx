import React from 'react';

/**
 * Multi-line text field. Mirrors Input styling. Used for Today Dash entry.
 */
export function Textarea({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  rows = 3,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
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
      <textarea
        id={fieldId}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', resize: 'vertical', padding: '12px 14px',
          background: disabled ? 'var(--surface-sunken)' : 'var(--field-bg)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'var(--shadow-xs)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-normal)', color: 'var(--text-strong)',
          letterSpacing: 'var(--tracking-snug)', outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{
          fontSize: 'var(--text-xs)',
          color: error ? 'var(--caution-600)' : 'var(--text-muted)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
