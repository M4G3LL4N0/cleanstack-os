import Image from "next/image";
import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link";
import AppSidebar from "@/components/app-sidebar";
import AppShellHeader from "@/components/app-shell-header";
import AppSearch from "@/components/app-search";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const topCards = [
  { label: "Health Score", value: "82", detail: "Stable, with cleanup opportunities" },
  { label: "Recoverable", value: "187 GB", detail: "Across caches, duplicates, and dormant assets" },
  { label: "Projects at Risk", value: "7", detail: "Require review before cleanup" },
  { label: "Automations Ready", value: "12", detail: "Rules available for scheduled maintenance" },
];

const activity = [
  "Detected large inactive media cache in /Volumes/Archive/projects",
  "Identified duplicate AI outputs across 3 experiment folders",
  "Marked protected active workspaces across the current machine",
  "Suggested archive path for 14 inactive project directories",
];

export default function AppPreviewPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar
          items={[...APP_NAV_ITEMS, { label: "Command Palette", href: "/app/command-palette" }]}
          activeHref="/app"
        />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Overview"
            title="Workstation health at a glance"
            description="This app preview shows how CleanStack OS surfaces machine health, storage pressure, project sprawl, and high-impact cleanup opportunities."
            primaryAction={{ label: "Run New Scan" }}
            secondaryAction={{ label: "Command Center", href: "/app/command-center" }}
          />

          <div className="visual-frame control-grid">
            <div className="visual-inner">
              <Image
                src="/graphics/dashboard-orbit.svg"
                alt="CleanStack OS dashboard systems graphic"
                width={1400}
                height={960}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr,0.9fr]">
            <AppSearch />

            <div className="glass-panel p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/35">
                Quick Jump
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/app/command-palette" className="secondary-button">
                  Open Command Palette
                </Link>
                <Link href="/app/machines/builder-laptop" className="secondary-button">
                  Machine Detail
                </Link>
                <Link href="/app/reports" className="secondary-button">
                  Weekly Reports
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topCards.map((card) => (
              <div key={card.label} className="glass-panel p-5">
                <div className="text-sm text-white/40">{card.label}</div>
                <div className="mt-4 text-3xl font-semibold text-white">{card.value}</div>
                <p className="mt-3 text-sm leading-6 text-white/55">{card.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/35">
                    Recent intelligence
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    What the system is seeing
                  </h2>
                </div>
                <Link href="/app/notifications" className="secondary-button">
                  Open Events
                </Link>
              </div>

              <div className="mt-6 grid gap-4">
                {activity.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-white/35">
                Machine pressure
              </div>
              <h2 className="mt-2 text-2xl font-semibold text-white">Current profile</h2>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/55">Storage pressure</span>
                    <span className="font-semibold text-white">High</span>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[81%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/55">Project sprawl</span>
                    <span className="font-semibold text-white">Elevated</span>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[72%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/55">Optimization opportunity</span>
                    <span className="font-semibold text-white">Excellent</span>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[90%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
