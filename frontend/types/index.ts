import { LucideIcon } from 'lucide-react';

export type ActiveView = 'landing' | 'dashboard';

export type NavItemKey =
  | 'ai'
  | 'calendar'
  | 'tasks'
  | 'notes'
  | 'whiteboard'
  | 'latex'
  | 'resume'
  | 'settings';

export interface NavItem {
  key: NavItemKey;
  label: string;
  icon: LucideIcon;
  description: string;
  badge?: string;
  accentColor: string;
}