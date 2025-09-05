export interface NavItem {
  title: string;
  desc: string;
  path: string;
}

export interface DropdownSection {
  label: string;
  navs: NavItem[];
}

export interface NavigationItem {
  title: string;
  path: string;
  isDrapdown: boolean;
  navs?: DropdownSection[];
}

export type NavigationNavs = DropdownSection[];
