import { SubpageVisual } from "@/components/SubpageVisual";
const updates = [
  {
    version: "v0.8 Demo Shell",
    notes: [
      "Added admin leads inbox and segmentation summary",
      "Added CSV export flow for leads",
      "Added command center and machine detail views",
      "Added source tagging for waitlist and demo submissions",
    ],
  },
  {
    version: "v0.7 Product Depth",
    notes: [
      "Added reports, notifications, team preview, and archive flows",
      "Added local JSON waitlist persistence",
      "Added request demo path",
    ],
  },
  {
    version: "v0.6 Venture Shell",
    notes: [
      "Added dashboard preview, docs, FAQ, use cases, onboarding, and legal pages",
      "Expanded pricing and product positioning",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Changelog
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Product and site evolution
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          A lightweight changelog helps the product feel active, iterated, and real.
        </p>
      </section>

      <section className="mt-16 grid gap-6">
        {updates.map((update) => (
          <div key={update.version} className="glass-panel p-8 md:p-10">
            <div className="text-2xl font-semibold text-white">{update.version}</div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/60">
              {update.notes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
