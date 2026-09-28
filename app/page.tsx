import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CleanStack OS — workstation health as a catalogued system",
  description:
    "CleanStack OS is a workstation-health concept: workflow-aware cleanup, archive-first recommendations, and project-aware storage. Separate from the CleanStack Mac disk tool.",
};

const catalog = [
  { bucket: "Live", item: "Active project trees", note: "Leave these alone" },
  { bucket: "Dormant", item: "Parked repos and renders", note: "Archive candidate" },
  { bucket: "Cache", item: "Derived data and checkpoints", note: "Safe to review" },
  { bucket: "Archive", item: "Compressed older work", note: "Recommended first" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-slate-100">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
          CleanStack OS
        </Link>
        <a
          href="mailto:?subject=CleanStack%20OS%20catalog%20briefing&body=I%20want%20a%20briefing%20on%20the%20CleanStack%20OS%20workstation-health%20concept."
          className="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Request a catalog briefing
        </a>
      </header>

      <section className="mx-auto grid max-w-5xl items-start gap-10 px-4 pb-10 pt-8 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            Catalogued workstation system
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
            A system map for overloaded workstations — not a one-click cleaner.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            CleanStack OS is the catalogued concept for workstation health: it
            treats builds, renders, caches, checkpoints, and dormant projects as
            a system, then recommends archive before delete. It is not the Mac
            menu-bar disk tool. That lives in a separate project, CleanStack for
            macOS.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/waitlist"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-300 px-6 text-sm font-semibold text-slate-950"
            >
              Join the waitlist
            </Link>
            <Link
              href="/product"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm"
            >
              Read the product map
            </Link>
          </div>
        </div>

        <aside
          aria-label="Workstation catalog"
          className="rounded-[28px] border border-white/10 bg-white/5 p-5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-sky-200/70">
            Workstation catalog — concept map
          </p>
          <ul className="mt-4 space-y-3">
            {catalog.map((row) => (
              <li
                key={row.bucket}
                className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl border border-white/10 px-4 py-3"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-sky-300">
                  {row.bucket}
                </span>
                <span>
                  <div className="text-sm font-semibold">{row.item}</div>
                  <div className="mt-1 text-xs text-slate-400">{row.note}</div>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-3">
        {[
          [
            "Workflow-aware cleanup",
            "Separates live project data from the clutter modern dev, studio, and local-AI workflows leave behind.",
          ],
          [
            "Archive first",
            "Recommends compress and archive paths before risky deletion so active work stays protected.",
          ],
          [
            "Project health",
            "Looks at active load, dormant project weight, and duplicate density as one surface — a concept catalog, not a shipped OS.",
          ],
        ].map(([title, body]) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-sky-300/20 bg-sky-300/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Not the Mac disk tool</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            CleanStack for macOS is a separate menu-bar scanner that lists
            DerivedData, caches, old downloads, and large stale files, then
            moves safe items to Trash. This page is the broader OS concept:
            workstation health as a catalogued product, still early.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500">
        CleanStack OS · workstation-health concept · no invented reclaim stats
      </footer>
    </main>
  );
}
