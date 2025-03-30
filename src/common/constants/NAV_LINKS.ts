import { NavItem } from '../models/Navigation';

// ### Liens pages ### //
export const navLinks: Record<string, NavItem> = {
  home: {
    label: 'Home',
    href: '/',
  },
};

// ### Liens authentification ### //
export const authLinks: Record<string, NavItem> = {
  login: {
    label: 'login',
    href: '/login',
  },
  register: {
    label: 'register',
    href: '/register',
  },
};
