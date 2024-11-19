import { NavItem } from "../models/nav/nav";

export const homeLink: NavItem = {
  label: "home",
  href: "/",
  iconPath: "/assets/images/others/logo.ico",
};

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

export const authLinks: NavItem[] = [
  {
    label: "login",
    href: "/signin",
  },
  {
    label: "register",
    href: "/signup",
  },
];
