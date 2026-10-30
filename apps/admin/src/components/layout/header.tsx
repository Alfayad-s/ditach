'use client';

import { usePageTitle } from '@/hooks/use-page-title';

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const title = usePageTitle();

  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 lg:hidden"
          aria-label="Open navigation"
        >
          ☰
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Admin</p>
          <h1 className="text-sm font-semibold text-zinc-950">{title}</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500 sm:block">
          Search is not connected
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-xs font-medium text-white">
          AD
        </div>
      </div>
    </header>
  );
}
