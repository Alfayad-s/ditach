'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminNav } from '@/features/navigation/nav-config';
import { getAppName } from '@/services/api';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-zinc-950 text-zinc-300">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.28em] text-white"
          onClick={onNavigate}
        >
          {getAppName()}
        </Link>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto px-4 py-6">
        {adminNav.map((section) => (
          <div key={section.title}>
            <p className="px-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              {section.title}
            </p>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={`block rounded-lg px-2 py-2 text-sm transition-colors ${
                        active
                          ? 'bg-white/10 font-medium text-white'
                          : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
