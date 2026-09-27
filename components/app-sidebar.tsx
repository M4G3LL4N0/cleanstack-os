import Link from "next/link";

export type AppSidebarItem = {
  label: string;
  href: string;
};

export default function AppSidebar({
  items,
  activeHref,
  profile = "Founder / Builder workstation with mixed dev, media, and AI workloads.",
}: {
  items: readonly AppSidebarItem[] | AppSidebarItem[];
  activeHref: string;
  profile?: string;
}) {
  return (
    <aside className="glass-panel p-5">
      <div className="text-xs uppercase tracking-[0.25em] text-white/35">
        App Navigation
      </div>

      <div className="mt-5 grid gap-2">
        {items.map((item) => {
          const active = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
        <div className="text-sm font-semibold text-white">Current Profile</div>
        <p className="mt-3 text-sm leading-6 text-white/55">{profile}</p>
      </div>
    </aside>
  );
}
