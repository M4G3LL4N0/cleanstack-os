import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const commands = [
  { label: "Run full system scan", hint: "scan" },
  { label: "Open archive recommendations", hint: "archive" },
  { label: "Generate weekly report", hint: "report" },
  { label: "Review notifications", hint: "alerts" },
  { label: "Open builder laptop detail", hint: "machine" },
  { label: "Jump to settings", hint: "settings" },
];

export default function CommandPalettePage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar
          items={[...APP_NAV_ITEMS, { label: "Command Palette", href: "/app/command-palette" }]}
          activeHref="/app/command-palette"
        />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Command Palette"
            title="Fast navigation and action surface"
            description="A real product should allow fast movement between pages, machines, scans, and system actions."
            primaryAction={{ label: "Open Palette" }}
          />

          <div className="mx-auto w-full max-w-3xl">
            <div className="glass-panel overflow-hidden">
              <div className="border-b border-white/10 px-5 py-4 text-sm text-white/50">
                ⌘K — Search commands, pages, machines, reports
              </div>

              <div className="px-4 py-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/35">
                  Start typing to search the workspace...
                </div>

                <div className="mt-4 grid gap-2">
                  {commands.map((command) => (
                    <div
                      key={command.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="text-sm text-white/75">{command.label}</span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                        {command.hint}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
