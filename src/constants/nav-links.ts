import { NavItem } from "../models/nav/nav";

// ### Lien page d'accueil ### //
export const homeLink: NavItem = {
  label: "home",
  href: "/",
  iconPath: "/assets/images/others/logo.ico",
};

// ### Liens pages ### //
export const navLinks: NavItem[] = [
  homeLink,
  {
    label: "about",
    href: "/about",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

// ### Liens authentification ### //
export const authLinks: NavItem[] = [
  {
    label: "login",
    href: "/login",
  },
  {
    label: "register",
    href: "/register",
  },
];
