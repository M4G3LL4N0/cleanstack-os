"use client";

import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { useEffect, useMemo, useState } from "react";

type Lead = {
  id: string;
  name: string;
  email: string;
  role: string;
  interest: string;
  source: string;
  submittedAt: string;
};

function formatDate(value: string) {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default function AdminLeadsPage() {
  const [entries, setEntries] = useState<Lead[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/waitlist");
        const data = (await response.json()) as { entries?: Lead[] };
        setEntries(data.entries || []);
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;

    return entries.filter((entry) =>
      [entry.name, entry.email, entry.role, entry.source, entry.interest]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [entries, query]);

  const demoLeads = filtered.filter((entry) =>
    entry.interest.toLowerCase().includes("demo request:")
  );
  const waitlistLeads = filtered.filter(
    (entry) => !entry.interest.toLowerCase().includes("demo request:")
  );

  return (
    <main className="container-shell page-stack">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="subtle-kicker">Admin</div>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Lead inbox
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Search and review saved waitlist and demo request submissions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/admin/summary" className="secondary-button">
              Admin Summary
            </Link>
            <Link href="/api/admin/export-leads" className="primary-button">
              Export CSV
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section grid gap-6 md:grid-cols-3">
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Visible Leads</div>
          <div className="mt-3 text-4xl font-semibold text-white">{filtered.length}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Waitlist Leads</div>
          <div className="mt-3 text-4xl font-semibold text-white">{waitlistLeads.length}</div>
        </div>
        <div className="glass-panel p-6">
          <div className="text-sm text-white/40">Demo Requests</div>
          <div className="mt-3 text-4xl font-semibold text-white">{demoLeads.length}</div>
        </div>
      </section>

      <section className="page-section">
        <div className="glass-panel p-6">
          <label className="grid gap-2">
            <span className="text-sm text-white/70">Search leads</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, email, role, source, or interest..."
              className="form-input"
            />
          </label>
        </div>
      </section>

      <section className="page-section">
        <div className="glass-panel overflow-hidden">
          <div className="border-b border-white/10 px-6 py-5">
            <div className="text-2xl font-semibold text-white">All submissions</div>
          </div>

          <div className="data-table-wrap">
            <div className="data-table min-w-[1120px]">
              <div className="data-table-header grid grid-cols-[1fr,1.2fr,0.9fr,0.9fr,1.5fr,1fr] px-6 py-4">
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div>Source</div>
                <div>Interest</div>
                <div>Submitted</div>
              </div>

              {loading ? (
                <div className="px-6 py-12 text-sm text-white/55">Loading leads...</div>
              ) : filtered.length === 0 ? (
                <div className="px-6 py-12">
                  <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
                    <div className="text-lg font-semibold text-white">No matching leads</div>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      Try a different search query or collect a few test submissions first.
                    </p>
                  </div>
                </div>
              ) : (
                filtered.map((entry) => (
                  <div
                    key={entry.id}
                    className="data-table-row grid grid-cols-[1fr,1.2fr,0.9fr,0.9fr,1.5fr,1fr] px-6 py-4"
                  >
                    <div>
                      <Link
                        href={`/admin/leads/${entry.id}`}
                        className="font-medium text-white transition hover:text-white/80"
                      >
                        {entry.name}
                      </Link>
                    </div>
                    <div>{entry.email}</div>
                    <div>{entry.role || "—"}</div>
                    <div>{entry.source || "—"}</div>
                    <div className="pr-4">{entry.interest || "—"}</div>
                    <div>{formatDate(entry.submittedAt)}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
