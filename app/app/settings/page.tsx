import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const toggles = [
  {
    title: "Conservative Cleanup Mode",
    description: "Require review before aggressive delete actions.",
    enabled: true,
  },
  {
    title: "Protect Recently Active Projects",
    description: "Automatically preserve directories with recent usage signals.",
    enabled: true,
  },
  {
    title: "Weekly Scan Automation",
    description: "Run scheduled scans and surface machine-health changes automatically.",
    enabled: true,
  },
  {
    title: "Archive Suggestions",
    description: "Recommend cold-project archive actions when inactivity thresholds are met.",
    enabled: true,
  },
  {
    title: "Duplicate Output Detection",
    description: "Track repeated renders, exports, and stale generated files.",
    enabled: false,
  },
  {
    title: "Team Machine Visibility",
    description: "Prepare device-level insights for future team dashboards.",
    enabled: false,
  },
];

export default function SettingsPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/settings" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Settings"
            title="Control how CleanStack OS behaves"
            description="Choose how cautious the system is, which workflows are prioritized, and how aggressively automation acts across the machine."
            primaryAction={{ label: "Save Preferences" }}
          />

          <div className="grid gap-4">
            {toggles.map((item) => (
              <div key={item.title} className="glass-panel p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <div className="text-xl font-semibold text-white">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
                  </div>

                  <div
                    className={`flex min-w-[112px] items-center justify-between rounded-full border px-3 py-2 text-sm ${
                      item.enabled
                        ? "border-[#b9ddff]/20 bg-[#dff5ff] text-[#071018]"
                        : "border-white/10 bg-white/[0.04] text-white/65"
                    }`}
                  >
                    <span>{item.enabled ? "On" : "Off"}</span>
                    <div
                      className={`h-5 w-5 rounded-full ${
                        item.enabled ? "bg-[#071018]" : "bg-white/30"
                      }`}
                    />
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
