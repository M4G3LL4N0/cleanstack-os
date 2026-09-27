import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const riskFactors = [
  {
    title: "Storage Saturation",
    score: "84",
    detail: "Large accumulation of build artifacts, temp outputs, and dormant media folders.",
  },
  {
    title: "Project Complexity",
    score: "73",
    detail: "Many active and semi-active projects competing for local storage and workspace clarity.",
  },
  {
    title: "Cleanup Safety",
    score: "61",
    detail: "Machine contains active dev and AI directories that should be reviewed before action.",
  },
  {
    title: "Archive Opportunity",
    score: "91",
    detail: "Cold projects and duplicate exports create a strong candidate set for archive-first optimization.",
  },
];

export default function MachineDetailPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/team" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Machine Detail"
            title="Builder Laptop"
            description="Mixed founder workstation with development, media, and local AI workloads. High opportunity for structured cleanup and archive-first optimization."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {riskFactors.map((factor) => (
              <div key={factor.title} className="glass-panel p-5">
                <div className="text-sm text-white/40">{factor.title}</div>
                <div className="mt-4 text-4xl font-semibold text-white">{factor.score}</div>
                <p className="mt-3 text-sm leading-6 text-white/55">{factor.detail}</p>
              </div>
            ))}
          </div>

          <div className="glass-panel p-6">
            <div className="text-xl font-semibold text-white">Recommended operator sequence</div>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-white/60">
              <li>1. Protect active repos and current AI datasets</li>
              <li>2. Review duplicate media and temp export clusters</li>
              <li>3. Archive dormant startup and experiment folders</li>
              <li>4. Normalize checkpoints and stale outputs</li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
