export type NavKey = string;

export interface UseNavDropdownReturn {
  activeDropdown: Set<NavKey>;
  toggleDropdown: (key: NavKey) => void;
  closeAllDropdowns: () => void;
}

export interface UseMenuReturn {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export type { Subpage } from '@/types/navigation/Subpage';