// Import React to resolve React namespace in TypeScript interface
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Differential {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}