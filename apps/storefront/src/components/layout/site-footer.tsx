import { getAppName } from '@/services/api';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="tracking-[0.24em] text-zinc-900">{getAppName()}</p>
        <p>Storefront scaffold. Product catalog is not connected yet.</p>
      </div>
    </footer>
  );
}
