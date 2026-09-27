import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const findings = [
  {
    title: "Build artifact accumulation",
    size: "42 GB",
    detail: "Large amount of generated output across local project builds and inactive environments.",
  },
  {
    title: "Duplicate media exports",
    size: "31 GB",
    detail: "Multiple repeated export versions across archived and semi-active creative folders.",
  },
  {
    title: "AI output sprawl",
    size: "58 GB",
    detail: "Generated outputs, checkpoints, and stale experiment artifacts are consuming large capacity.",
  },
  {
    title: "Cold project directories",
    size: "56 GB",
    detail: "Inactive startup and test folders appear suitable for archive-first cleanup.",
  },
];

export default function ScanPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/scan" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Scan Results"
            title="Current machine findings"
            description="This scan summarizes the highest-impact sources of machine drag and reclaimable storage opportunity."
            primaryAction={{ label: "Run Fresh Scan" }}
            secondaryAction={{ label: "Open Archive", href: "/app/archive" }}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {findings.map((item) => (
              <div key={item.title} className="glass-panel p-6">
                <div className="text-sm text-white/40">{item.title}</div>
                <div className="mt-3 text-4xl font-semibold text-white">{item.size}</div>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
