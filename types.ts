
import type { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  complementaryText?: string;
  icon: ReactNode;
}

export interface Differential {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}