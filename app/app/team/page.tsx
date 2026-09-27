import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppSidebar from "@/components/app-sidebar";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const machines = [
  { name: "Studio Mac 01", health: "74", issue: "Render cache overload", href: "/app/machines/builder-laptop" },
  { name: "Builder Laptop", health: "82", issue: "AI project sprawl", href: "/app/machines/builder-laptop" },
  { name: "Edit Bay 02", health: "69", issue: "Duplicate export pressure", href: "/app/machines/builder-laptop" },
  { name: "Ops Workstation", health: "88", issue: "Healthy", href: "/app/machines/builder-laptop" },
];

export default function TeamPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/team" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Team"
            title="Team-wide workstation health"
            description="This is where CleanStack OS expands from personal utility into startup and studio infrastructure."
          />

          <div className="grid gap-4">
            {machines.map((machine) => (
              <div key={machine.name} className="glass-panel p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-xl font-semibold text-white">{machine.name}</div>
                    <p className="mt-2 text-sm text-white/60">{machine.issue}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                      Health {machine.health}
                    </div>
                    <Link href={machine.href} className="secondary-button">
                      View Machine
                    </Link>
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
