import React from 'react';

export interface PhotoViewerProps {
  /** Image URL. If absent, a domain-tinted placeholder is shown. */
  src?: string;
  /** Vision caption Dash generated for the photo. */
  caption?: string;
  domainColor?: string;
  domainLabel?: string;
  /** What the AI detected (scene/objects), shown in the fullscreen viewer. */
  detected?: string[];
  /** Thumbnail size in px. */
  size?: number;
  radius?: string;
  style?: React.CSSProperties;
}

/**
 * Photo record thumbnail → fullscreen viewer with caption + AI detection.
 * @startingPoint section="Dash" subtitle="Photo thumbnail with fullscreen viewer" viewport="700x260"
 */
export function PhotoViewer(props: PhotoViewerProps): JSX.Element;
