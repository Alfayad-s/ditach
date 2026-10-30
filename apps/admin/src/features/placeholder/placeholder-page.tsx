export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">{description}</p>
      </div>
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-sm text-zinc-500">
        This module is a placeholder. Business logic has not been implemented yet.
      </div>
    </div>
  );
}
