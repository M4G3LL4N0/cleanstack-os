import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { readWaitlistEntries } from "@/lib/waitlist";

function groupCount(values: string[]) {
  return values.reduce<Record<string, number>>((acc, value) => {
    const key = value || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

export default async function AdminSummaryPage() {
  const entries = await readWaitlistEntries();

  const bySource = groupCount(entries.map((entry) => entry.source || "unknown"));
  const byRole = groupCount(entries.map((entry) => entry.role || "unknown"));

  const sourceRows = Object.entries(bySource).sort((a, b) => b[1] - a[1]);
  const roleRows = Object.entries(byRole).sort((a, b) => b[1] - a[1]);

  return (
    <main className="container-shell page-stack">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="subtle-kicker">Admin Summary</div>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Lead segmentation overview
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Summarize where inbound demand is coming from and which user types are responding most.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/admin/leads" className="secondary-button">
              Open Lead Inbox
            </Link>
            <Link href="/api/admin/export-leads" className="primary-button">
              Export CSV
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section grid gap-6 md:grid-cols-3">
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Total Leads</div>
          <div className="mt-3 text-4xl font-semibold text-white">{entries.length}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Unique Sources</div>
          <div className="mt-3 text-4xl font-semibold text-white">{sourceRows.length}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Unique Roles</div>
          <div className="mt-3 text-4xl font-semibold text-white">{roleRows.length}</div>
        </div>
      </section>

      <section className="page-section grid gap-6 xl:grid-cols-2">
        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">By Source</div>
          <div className="mt-6 grid gap-4">
            {sourceRows.length === 0 ? (
              <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.02] p-6 text-sm text-white/50">
                No source data yet.
              </div>
            ) : (
              sourceRows.map(([label, count]) => (
                <div
                  key={label}
                  className="surface-elevated p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/65">{label}</span>
                    <span className="text-xl font-semibold text-white">{count}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">By Role</div>
          <div className="mt-6 grid gap-4">
            {roleRows.length === 0 ? (
              <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.02] p-6 text-sm text-white/50">
                No role data yet.
              </div>
            ) : (
              roleRows.map(([label, count]) => (
                <div
                  key={label}
                  className="surface-elevated p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/65">{label}</span>
                    <span className="text-xl font-semibold text-white">{count}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
