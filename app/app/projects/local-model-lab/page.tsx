import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const projectStats = [
  { label: "Project Size", value: "48 GB" },
  { label: "Checkpoints", value: "12" },
  { label: "Generated Outputs", value: "3,481" },
  { label: "Cleanup Safety", value: "Moderate" },
];

const recommendations = [
  "Protect active model versions before cleanup.",
  "Archive stale checkpoints older than 45 days.",
  "Deduplicate repeated generated output clusters.",
  "Separate current experiment outputs from legacy result folders.",
];

export default function LocalModelLabPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/projects/local-model-lab" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Project Detail"
            title="Local Model Lab"
            description="A local AI-heavy project with checkpoint growth, generated output sprawl, and medium cleanup sensitivity."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectStats.map((stat) => (
              <div key={stat.label} className="glass-panel p-5">
                <div className="text-sm text-white/40">{stat.label}</div>
                <div className="mt-4 text-3xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-6">
            <div className="text-xl font-semibold text-white">Recommended sequence</div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/60">
              {recommendations.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
