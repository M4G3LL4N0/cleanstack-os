import { SubpageVisual } from "@/components/SubpageVisual";
const docs = [
  {
    title: "How CleanStack OS thinks about cleanup",
    body:
      "The product is designed to separate active work from dormant clutter using workflow context, file structure, age, duplication, and project-level signals.",
  },
  {
    title: "Delete vs archive vs compress vs protect",
    body:
      "Not every reclaim action should be a deletion. CleanStack OS is built around safer decision paths that preserve active work and reduce unnecessary risk.",
  },
  {
    title: "Workflow packs",
    body:
      "Different machines behave differently. Dev, Studio, and AI packs allow the system to reason about clutter based on the actual tools and workflows involved.",
  },
  {
    title: "System health model",
    body:
      "Health is a combination of free capacity, duplicate pressure, inactive project weight, workflow drag, and how safely the machine can be optimized.",
  },
];

export default function DocsPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="subtle-kicker">Docs</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Product logic, system concepts, and machine-health principles
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          A cleaner documentation surface for understanding how CleanStack OS classifies clutter, recommends actions, and protects active work.
        </p>
      </section>

      <section className="mt-16 grid gap-6">
        {docs.map((doc) => (
          <div key={doc.title} className="glass-panel p-8 md:p-10">
            <div className="text-2xl font-semibold text-white">{doc.title}</div>
            <p className="mt-5 max-w-4xl text-base leading-8 text-white/60">{doc.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
