import { SubpageVisual } from "@/components/SubpageVisual";
const healthCards = [
  { label: "Health Score", value: "82", sub: "Strong, but cleanup opportunities found" },
  { label: "Reclaimable Space", value: "187 GB", sub: "Across caches, builds, and dormant assets" },
  { label: "Inactive Projects", value: "14", sub: "Archive recommendations available" },
  { label: "Duplicate Load", value: "26 GB", sub: "Repeated exports and duplicate artifacts" },
];

const actionItems = [
  {
    title: "Node and build cleanup",
    impact: "42 GB recoverable",
    note: "Old builds, package caches, and dormant dependencies",
  },
  {
    title: "Media cache reduction",
    impact: "61 GB recoverable",
    note: "Preview files, temp renders, and duplicate exports",
  },
  {
    title: "AI storage normalization",
    impact: "53 GB recoverable",
    note: "Old checkpoints, stale outputs, and duplicated datasets",
  },
];

const projects = [
  {
    name: "startup-ui",
    status: "active",
    storage: "18.2 GB",
    risk: "Protected",
  },
  {
    name: "video-series-assets",
    status: "inactive",
    storage: "84.6 GB",
    risk: "Archive suggested",
  },
  {
    name: "local-model-lab",
    status: "mixed",
    storage: "126.3 GB",
    risk: "Review checkpoints",
  },
  {
    name: "old-client-exports",
    status: "inactive",
    storage: "39.8 GB",
    risk: "Compress or move",
  },
];

export default function DashboardPage() {
  return (
    <main className="container-shell py-14">
      <SubpageVisual variant="dashboard" />
      <section className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">
            Product Preview
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            CleanStack OS Dashboard
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
            A preview of how the product can surface system health, cleanup actions,
            project state, and workstation optimization opportunities.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="secondary-button">Run Scan</button>
          <button className="primary-button">Review Actions</button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {healthCards.map((card) => (
          <div key={card.label} className="glass-panel p-6">
            <div className="text-sm text-white/45">{card.label}</div>
            <div className="mt-4 text-4xl font-semibold text-white">{card.value}</div>
            <p className="mt-3 text-sm leading-6 text-white/55">{card.sub}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <div className="glass-panel p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/40">
                Recommended actions
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Highest-impact cleanup opportunities
              </h2>
            </div>
            <button className="secondary-button">See All</button>
          </div>

          <div className="mt-6 grid gap-4">
            {actionItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.note}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
                    {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6">
          <div className="text-sm uppercase tracking-[0.22em] text-white/40">
            Machine state
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Current pressure profile
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/55">Storage pressure</span>
                <span className="text-sm font-semibold text-white">High</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[82%] rounded-full bg-white" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/55">Background drag</span>
                <span className="text-sm font-semibold text-white">Moderate</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[58%] rounded-full bg-white" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/55">Project sprawl</span>
                <span className="text-sm font-semibold text-white">Elevated</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[71%] rounded-full bg-white" />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/55">Optimization readiness</span>
                <span className="text-sm font-semibold text-white">Excellent</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[89%] rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="glass-panel overflow-hidden">
          <div className="border-b border-white/10 px-6 py-5">
            <div className="text-sm uppercase tracking-[0.22em] text-white/40">
              Project inventory
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Projects driving storage and complexity
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[1.4fr,0.7fr,0.7fr,0.9fr] bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white">
                <div>Project</div>
                <div>Status</div>
                <div>Storage</div>
                <div>Recommended Action</div>
              </div>

              {projects.map((project) => (
                <div
                  key={project.name}
                  className="grid grid-cols-[1.4fr,0.7fr,0.7fr,0.9fr] border-t border-white/10 px-6 py-4 text-sm text-white/65"
                >
                  <div className="font-medium text-white">{project.name}</div>
                  <div className="capitalize">{project.status}</div>
                  <div>{project.storage}</div>
                  <div>{project.risk}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
