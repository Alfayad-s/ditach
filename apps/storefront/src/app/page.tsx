export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
          Clothing brand storefront
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">DETACH</h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">
          The customer-facing storefront is running. Catalog, checkout, and account flows will be
          added after the approved product requirements are in place.
        </p>
      </section>

      <section
        id="shop"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Placeholder collections"
      >
        {['Essentials', 'New drop', 'Archive'].map((label) => (
          <article
            key={label}
            className="flex min-h-48 flex-col justify-between rounded-2xl border border-black/10 bg-white p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Coming soon</p>
            <h2 className="text-2xl font-medium tracking-tight">{label}</h2>
          </article>
        ))}
      </section>

      <section id="stories" className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-medium tracking-tight">Stories</h2>
        <p className="leading-7 text-zinc-600">
          Editorial stories will appear here. This page is a layout placeholder only.
        </p>
      </section>

      <section id="about" className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-medium tracking-tight">About</h2>
        <p className="leading-7 text-zinc-600">
          Brand narrative, lookbooks, and campaign content are intentionally omitted until the
          original requirements document is restored.
        </p>
      </section>
    </div>
  );
}
