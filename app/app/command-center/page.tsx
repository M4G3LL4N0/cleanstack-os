import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const actions = [
  {
    title: "Run full workstation scan",
    description: "Refresh storage pressure, duplication signals, and active project state.",
    button: "Start Scan",
  },
  {
    title: "Generate weekly report",
    description: "Compile cleanup, archive, and project health recommendations.",
    button: "Generate Report",
  },
  {
    title: "Review automation queue",
    description: "Inspect scheduled archive suggestions and maintenance routines.",
    button: "Open Queue",
  },
];

const signals = [
  { label: "Storage Risk", value: "High", width: "79%" },
  { label: "Project Sprawl", value: "Elevated", width: "72%" },
  { label: "Archive Opportunity", value: "Excellent", width: "91%" },
  { label: "Cleanup Safety", value: "Good", width: "66%" },
];

export default function CommandCenterPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/command-center" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Command Center"
            title="Operator view for machine health actions"
            description="This page makes CleanStack OS feel like a system control layer instead of a one-off cleanup screen."
            primaryAction={{ label: "Start Scan" }}
            secondaryAction={{ label: "Weekly Report" }}
          />

          <div className="grid gap-6 xl:grid-cols-[1fr,0.95fr]">
            <div className="glass-panel p-6">
              <div className="text-xl font-semibold text-white">Priority actions</div>
              <div className="mt-5 grid gap-4">
                {actions.map((action) => (
                  <div
                    key={action.title}
                    className="surface-elevated p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-lg font-semibold text-white">{action.title}</div>
                        <p className="mt-2 text-sm leading-6 text-white/60">{action.description}</p>
                      </div>
                      <button type="button" className="secondary-button">{action.button}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="text-xl font-semibold text-white">Risk signals</div>
              <div className="mt-5 grid gap-4">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="surface-elevated p-4"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/55">{signal.label}</span>
                      <span className="font-semibold text-white">{signal.value}</span>
                    </div>
                    <div className="mt-4 h-3 rounded-full bg-white/10">
                      <div className="h-3 rounded-full bg-white" style={{ width: signal.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
