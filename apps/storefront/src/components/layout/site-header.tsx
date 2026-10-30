'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getAppName } from '@/services/api';
import type { StorefrontNavItem } from '@/types';
import { cn } from '@/utils/cn';

const navigation: StorefrontNavItem[] = [
  { href: '#shop', label: 'Shop' },
  { href: '#stories', label: 'Stories' },
  { href: '#about', label: 'About' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const appName = getAppName();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.28em]">
          {appName}
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-zinc-700 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-black">
              {item.label}
            </Link>
          ))}
          <Link href="#cart" className="border-b border-black pb-0.5 text-black">
            Cart (0)
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-black/15 px-3 py-1.5 text-xs uppercase tracking-widest md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className={cn('border-t border-black/10 md:hidden', open ? 'block' : 'hidden')}>
        <nav className="flex flex-col gap-4 px-4 py-4 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="#cart" onClick={() => setOpen(false)}>
            Cart (0)
          </Link>
        </nav>
      </div>
    </header>
  );
}
