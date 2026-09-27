import AppSidebar from "@/components/app-sidebar";
import { SubpageVisual } from "@/components/SubpageVisual";
import AppShellHeader from "@/components/app-shell-header";
import { APP_NAV_ITEMS } from "@/lib/app-nav";

const notifications = [
  "Duplicate media export cluster increased by 4.2 GB since last scan.",
  "Archive recommendation threshold reached for 3 inactive startup folders.",
  "AI output directory grew by 11.8 GB over the last 7 days.",
  "Protected project folder list successfully applied before cleanup review.",
  "Weekly scan completed with high archive opportunity and low delete safety confidence.",
];

export default function NotificationsPage() {
  return (
    <main className="container-shell py-10">
      <SubpageVisual variant="default" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <AppSidebar items={[...APP_NAV_ITEMS]} activeHref="/app/notifications" />

        <section className="grid gap-6">
          <AppShellHeader
            eyebrow="Notifications"
            title="Machine events and system alerts"
            description="This is the event layer for machine changes, warnings, scan findings, and action-ready recommendations."
          />

          <div className="grid gap-4">
            {notifications.map((item) => (
              <div key={item} className="glass-panel p-6">
                <p className="text-sm leading-7 text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
