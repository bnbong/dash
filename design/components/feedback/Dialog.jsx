import React from 'react';

/**
 * Centered modal dialog with scrim. Calm fade-in.
 */
export function Dialog({
  open = true,
  title,
  description,
  children,
  onClose,
  primaryAction,
  secondaryAction,
  width = 380,
}) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
        background: 'rgba(20, 38, 30, 0.34)', backdropFilter: 'blur(2px)',
        animation: 'dashFade var(--dur-base) var(--ease-out)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface)',
          border: '1px solid var(--line)', borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-pop)', padding: 24,
          animation: 'dashPop var(--dur-base) var(--ease-out)',
        }}
      >
        {title && <h3 style={{ fontSize: 'var(--text-title-3)', marginBottom: 8 }}>{title}</h3>}
        {description && (
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', marginBottom: children ? 16 : 20 }}>{description}</p>
        )}
        {children}
        {(primaryAction || secondaryAction) && (
          <div style={{ display: 'flex', gap: 10, marginTop: 20, justifyContent: 'flex-end' }}>
            {secondaryAction}
            {primaryAction}
          </div>
        )}
      </div>
      <style>{`
        @keyframes dashFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes dashPop { from { opacity: 0; transform: translateY(8px) scale(0.98) } to { opacity: 1; transform: none } }
      `}</style>
    </div>
  );
}
