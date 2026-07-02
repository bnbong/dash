import React from 'react';

const SIZES = { xs: 24, sm: 32, md: 40, lg: 56 };

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2);
  return (parts[0][0] + parts[parts.length - 1][0]);
}

/**
 * User avatar. Image, or initials on a calm pine tint.
 */
export function Avatar({ name = '', src = null, size = 'md', style = {} }) {
  const dim = SIZES[size] || SIZES.md;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      background: 'var(--pine-100)', color: 'var(--pine-700)',
      border: '1px solid var(--pine-200)',
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
      fontSize: dim * 0.38, letterSpacing: '-0.01em', textTransform: 'uppercase',
      ...style,
    }}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials(name)}
    </span>
  );
}
