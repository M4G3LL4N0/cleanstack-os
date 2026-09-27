import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

const useCases = [
  {
    title: "Developers",
    problem:
      "Build artifacts, logs, local containers, package caches, duplicate repos, and stale environments slowly overwhelm the machine.",
    solution:
      "CleanStack OS identifies inactive dev sprawl, separates active work from waste, and helps reclaim storage without breaking critical projects.",
    bullets: [
      "Build cache cleanup",
      "Dependency sprawl visibility",
      "Local environment review",
      "Inactive repo detection",
    ],
  },
  {
    title: "Video Editors",
    problem:
      "Previews, proxies, render caches, duplicate exports, and media libraries consume huge amounts of storage and drag down workstation performance.",
    solution:
      "CleanStack OS helps editors understand what can be removed, archived, moved, or compressed while keeping current projects protected.",
    bullets: [
      "Preview cache mapping",
      "Scratch disk relief",
      "Duplicate export review",
      "Dormant project archive suggestions",
    ],
  },
  {
    title: "Audio Producers",
    problem:
      "Large sample libraries, temp exports, duplicate stems, bounce folders, and plugin-related artifacts create hidden storage and system pressure.",
    solution:
      "CleanStack OS gives producers a clean view into what is valuable, what is repeated, and what is safe to offload or remove.",
    bullets: [
      "Sample duplication visibility",
      "Export clutter review",
      "Project archive guidance",
      "Storage prioritization",
    ],
  },
  {
    title: "AI Builders",
    problem:
      "Model checkpoints, datasets, old outputs, experiments, embeddings, and local training artifacts can explode beyond what a laptop or workstation handles gracefully.",
    solution:
      "CleanStack OS helps normalize the local AI environment by identifying stale versions, duplicate assets, and cleanup opportunities.",
    bullets: [
      "Checkpoint review",
      "Dataset footprint visibility",
      "Experiment clutter cleanup",
      "Local AI storage normalization",
    ],
  },
  {
    title: "Founders and Startup Operators",
    problem:
      "Running many ventures, prototypes, media assets, repos, decks, and AI experiments on one machine creates ongoing chaos and slows everything down.",
    solution:
      "CleanStack OS acts as a control layer for project sprawl, inactive work, and system overload across all active startup efforts.",
    bullets: [
      "Project health overview",
      "Dormant work detection",
      "Cross-workflow storage clarity",
      "Ongoing system hygiene",
    ],
  },
  {
    title: "Teams and Studios",
    problem:
      "Multiple machines drift into inconsistent states, with no clear way to standardize cleanup, storage hygiene, or workstation health.",
    solution:
      "CleanStack OS lays the groundwork for future team-level visibility, policies, and machine health standards.",
    bullets: [
      "Team workstation visibility",
      "Cleanup policy future path",
      "Shared machine standards",
      "Ops-friendly expansion path",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Use Cases
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Built for overloaded modern work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          CleanStack OS starts with a universal pain point, but it becomes much more
          powerful when it understands the specific ways different workflows generate
          clutter, pressure, and risk.
        </p>
      </section>

      <section className="mt-16 grid gap-6">
        {useCases.map((item) => (
          <div key={item.title} className="glass-panel p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr,1fr,0.9fr]">
              <div>
                <div className="text-2xl font-semibold text-white">{item.title}</div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/35">
                  The problem
                </div>
                <p className="mt-3 text-base leading-7 text-white/60">{item.problem}</p>

                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-white/35">
                  The CleanStack OS answer
                </div>
                <p className="mt-3 text-base leading-7 text-white/60">{item.solution}</p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/35">
                  Key needs
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-white/60">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div className="glass-panel p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            See where your workflow fits.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Join the waitlist and tell us what kind of machine overload you deal with most.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/waitlist" className="primary-button min-w-[220px]">
              Join Early Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
