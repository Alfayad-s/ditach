const stats = [
  { label: 'Orders today', value: '—' },
  { label: 'Open preorders', value: '—' },
  { label: 'Low stock items', value: '—' },
  { label: 'Pending returns', value: '—' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">Dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
          Operations overview for the DETACH catalog, orders, and support queues. Metrics are
          placeholders until domain modules are implemented.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-zinc-950">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-sm text-zinc-500">
        Charts, live inventory, and staff activity will appear here after the original requirements
        document is restored and business logic is approved.
      </section>
    </div>
  );
}
