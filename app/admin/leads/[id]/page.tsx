import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { readWaitlistEntries } from "@/lib/waitlist";

function formatDate(value: string) {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entries = await readWaitlistEntries();
  const lead = entries.find((entry) => entry.id === id);

  if (!lead) {
    return (
      <main className="container-shell py-24">
      <SubpageVisual variant="default" />
        <div className="glass-panel p-10 text-center">
          <div className="text-2xl font-semibold text-white">Lead not found</div>
          <p className="mt-4 text-white/55">
            This submission may have been removed or the ID may be invalid.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/admin/leads" className="secondary-button">
              Back to Lead Inbox
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container-shell py-24">
      <section className="max-w-4xl">
        <div className="subtle-kicker">Lead Detail</div>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              {lead.name}
            </h1>
            <p className="mt-4 text-lg text-white/60">{lead.email}</p>
          </div>

          <div className="flex gap-3">
            <Link href="/admin/leads" className="secondary-button">
              Back to Inbox
            </Link>
            <Link href="/api/admin/export-leads" className="primary-button">
              Export CSV
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-4">
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Role</div>
          <div className="mt-3 text-2xl font-semibold text-white">{lead.role || "—"}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Source</div>
          <div className="mt-3 text-2xl font-semibold text-white">{lead.source || "—"}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Type</div>
          <div className="mt-3 text-2xl font-semibold text-white">
            {lead.interest.toLowerCase().includes("demo request:") ? "Demo" : "Waitlist"}
          </div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Submitted</div>
          <div className="mt-3 text-base font-semibold text-white">
            {formatDate(lead.submittedAt)}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="glass-panel p-8 md:p-10">
          <div className="subtle-kicker">Interest / Notes</div>
          <p className="mt-5 max-w-4xl text-base leading-8 text-white/60">
            {lead.interest || "No notes provided."}
          </p>
        </div>
      </section>
    </main>
  );
}
