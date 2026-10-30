export interface AdminNavItem {
  href: string;
  label: string;
}

export interface AdminNavSection {
  title: string;
  items: AdminNavItem[];
}
