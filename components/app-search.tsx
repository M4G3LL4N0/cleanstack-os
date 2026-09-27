"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SearchItem = {
  label: string;
  href: string;
  keywords: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  { label: "Overview", href: "/app", keywords: "overview home dashboard health" },
  { label: "Command Center", href: "/app/command-center", keywords: "command actions operator" },
  { label: "Scan Results", href: "/app/scan", keywords: "scan storage cleanup results" },
  { label: "Archive", href: "/app/archive", keywords: "archive cold projects compress move" },
  { label: "Notifications", href: "/app/notifications", keywords: "events alerts activity" },
  { label: "Reports", href: "/app/reports", keywords: "reports intelligence weekly" },
  { label: "Team", href: "/app/team", keywords: "team machines devices" },
  { label: "Settings", href: "/app/settings", keywords: "settings preferences toggles" },
  { label: "Machine Detail", href: "/app/machines/builder-laptop", keywords: "machine detail risk laptop" },
  { label: "Project Detail", href: "/app/projects/local-model-lab", keywords: "project local model lab checkpoints" },
  { label: "Command Palette", href: "/app/command-palette", keywords: "palette command fast search" },
];

export default function AppSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_ITEMS.filter((item) =>
      `${item.label} ${item.keywords}`.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <div className="glass-panel p-4">
      <label className="grid gap-3">
        <span className="text-xs uppercase tracking-[0.22em] text-white/35">
          In-App Search
        </span>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search pages, flows, machines, or reports..."
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/25"
        />
      </label>

      {query ? (
        <div className="mt-4 grid gap-2">
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-white/50">
              No matching destinations.
            </div>
          ) : (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </Link>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
