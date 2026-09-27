import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const archiveCandidates = [
  {
    name: "old-product-experiments",
    size: "18 GB",
    reason: "Inactive for 142 days with duplicated build outputs.",
  },
  {
    name: "render-exports-2025",
    size: "26 GB",
    reason: "Repeated exports and multiple preserved versions.",
  },
  {
    name: "local-model-tests",
    size: "37 GB",
    reason: "Stale checkpoints and generated output folders.",
  },
  {
    name: "unused-startup-shells",
    size: "21 GB",
    reason: "Dormant venture prototypes with low recent activity.",
  },
];

export default function ArchivePage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/archive" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Archive"
            title="Archive-first recommendations"
            description="These are the strongest candidates for reclaiming space without increasing cleanup risk."
            primaryAction={{ label: "Approve Archive Set" }}
            secondaryAction={{ label: "Back to Scan", href: "/app/scan" }}
          />

          <div className="grid gap-4">
            {archiveCandidates.map((item) => (
              <div key={item.name} className="glass-panel p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-xl font-semibold text-white">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.reason}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                      {item.size}
                    </div>
                    <button type="button" className="secondary-button">
                      Review
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
