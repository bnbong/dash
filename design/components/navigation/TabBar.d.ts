import React from 'react';

export interface TabBarItem {
  key: string;
  label: string;
  /** ReactNode, or a render-prop ({ active }) => ReactNode. */
  icon: React.ReactNode | ((s: { active: boolean }) => React.ReactNode);
}

export interface TabBarProps {
  items: TabBarItem[];
  active?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}

/** Bottom navigation for the Dash mobile app. */
export function TabBar(props: TabBarProps): JSX.Element;
