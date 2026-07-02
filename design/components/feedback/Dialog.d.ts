import React from 'react';

export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  /** Render a <Button> here for the confirm action. */
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  width?: number;
}

/** Centered modal with scrim and gentle pop-in. */
export function Dialog(props: DialogProps): JSX.Element | null;
