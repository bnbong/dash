import React from 'react';

export interface SectionTabsItem { key: string; label: string; }

export interface SectionTabsProps {
  items: SectionTabsItem[];
  active?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}

/** Underline tabs for in-screen switching (My Grove / Community Grove). */
export function SectionTabs(props: SectionTabsProps): JSX.Element;
