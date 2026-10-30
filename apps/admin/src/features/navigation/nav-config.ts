import type { AdminNavSection } from '@/types';

export const adminNav: AdminNavSection[] = [
  {
    title: 'Overview',
    items: [
      { href: '/', label: 'Dashboard' },
      { href: '/analytics', label: 'Analytics' },
    ],
  },
  {
    title: 'Catalog',
    items: [
      { href: '/products', label: 'Products' },
      { href: '/stories', label: 'Stories' },
      { href: '/categories', label: 'Categories' },
      { href: '/collections', label: 'Collections' },
    ],
  },
  {
    title: 'Commerce',
    items: [
      { href: '/inventory', label: 'Inventory' },
      { href: '/preorders', label: 'Preorders' },
      { href: '/orders', label: 'Orders' },
      { href: '/payments', label: 'Payments' },
      { href: '/shipments', label: 'Shipments' },
      { href: '/returns', label: 'Returns' },
      { href: '/coupons', label: 'Coupons' },
    ],
  },
  {
    title: 'People',
    items: [
      { href: '/customers', label: 'Customers' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/questions', label: 'Questions' },
      { href: '/support', label: 'Support' },
    ],
  },
  {
    title: 'Workspace',
    items: [
      { href: '/staff', label: 'Staff' },
      { href: '/settings', label: 'Settings' },
    ],
  },
];

export function getPageTitle(pathname: string): string {
  const match = adminNav.flatMap((section) => section.items).find((item) => item.href === pathname);

  return match?.label ?? 'Dashboard';
}
