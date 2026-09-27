import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const reports = [
  {
    title: "Weekly Machine Health Report",
    summary: "Storage pressure increased slightly, but archive opportunity improved after recent project inactivity.",
  },
  {
    title: "AI Workflow Pressure Report",
    summary: "Checkpoint and output growth remain the highest single category of storage expansion.",
  },
  {
    title: "Duplicate Output Summary",
    summary: "Repeated exports and stale generated media continue to represent a large reclaim opportunity.",
  },
  {
    title: "Project Sprawl Review",
    summary: "The machine shows strong signs of inactive startup and experiment accumulation.",
  },
];

export default function ReportsPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/reports" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Reports"
            title="System intelligence and recurring summaries"
            description="Reports make it easier to understand machine state over time instead of treating cleanup as a one-off event."
            primaryAction={{ label: "Generate New Report" }}
          />

          <div className="grid gap-4">
            {reports.map((report) => (
              <div key={report.title} className="glass-panel p-6">
                <div className="text-xl font-semibold text-white">{report.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/60">{report.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
