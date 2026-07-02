import React from 'react';

/**
 * Empty state. Calm, never guilt-inducing. Icon, message, optional action.
 */
export function EmptyState({ icon = null, title, description, action = null, style = {} }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      gap: 10, padding: '32px 24px', ...style,
    }}>
      {icon && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 52, height: 52, borderRadius: 'var(--radius-lg)',
          background: 'var(--brand-tint)', color: 'var(--pine-500)', marginBottom: 2,
        }}>{icon}</span>
      )}
      {title && <div style={{ fontSize: 'var(--text-body-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{title}</div>}
      {description && <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', maxWidth: 280 }}>{description}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}
