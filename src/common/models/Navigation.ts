// ### Modèle d'un lien ### //
export interface NavItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

export interface NavProps {
  user: Record<string, any> | null;
}

export interface SideNavProps extends NavProps {
  isMobile: boolean;
  isOpen: boolean;
}
