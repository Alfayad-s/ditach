'use client';

import { usePathname } from 'next/navigation';
import { getPageTitle } from '@/features/navigation/nav-config';

export function usePageTitle(): string {
  const pathname = usePathname();
  return getPageTitle(pathname);
}
