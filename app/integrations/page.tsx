import { SubpageVisual } from "@/components/SubpageVisual";
const integrations = [
  {
    name: "Developer Toolchains",
    examples: "Node, Docker, Python, local build systems, logs, package caches",
    note:
      "The product can become more valuable as it understands the storage and artifact patterns of common dev environments.",
  },
  {
    name: "Creative Apps",
    examples: "Premiere, Final Cut, After Effects, DaVinci, audio and design workflows",
    note:
      "Workflow-aware media cleanup is one of the most obvious growth wedges beyond developers.",
  },
  {
    name: "AI Workflows",
    examples: "Model checkpoints, datasets, local outputs, experiment folders",
    note:
      "AI builders have some of the heaviest local storage and cleanup pain, especially when experiments multiply over time.",
  },
  {
    name: "Storage Layers",
    examples: "Internal SSD, external drives, network storage, future cloud archive paths",
    note:
      "Long-term value increases when the product can recommend what stays hot, what moves cold, and what should be archived.",
  },
];

export default function IntegrationsPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Integrations
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Workflow intelligence gets stronger with deeper integrations.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          CleanStack OS starts as a strong standalone system health layer, but the product
          becomes more powerful as it understands the tools and storage environments users
          depend on every day.
        </p>
      </section>

      <section className="mt-16 grid gap-6">
        {integrations.map((item) => (
          <div key={item.name} className="glass-panel p-8 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.7fr,1fr]">
              <div>
                <div className="text-2xl font-semibold text-white">{item.name}</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/35">
                  Examples
                </div>
                <p className="mt-3 text-base leading-7 text-white/60">{item.examples}</p>

                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-white/35">
                  Why it matters
                </div>
                <p className="mt-3 text-base leading-7 text-white/60">{item.note}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
