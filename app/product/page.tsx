import Image from "next/image";
import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link";

const pillars = [
  {
    title: "Storage intelligence",
    copy:
      "Map exactly where capacity is being lost across project artifacts, caches, temp files, duplicate assets, and inactive work.",
  },
  {
    title: "Project-aware cleanup",
    copy:
      "Understand what belongs to active workflows versus dormant clutter, then take safe action without breaking valuable work.",
  },
  {
    title: "Performance health",
    copy:
      "Surface the hidden system drag caused by heavy local workflows across CPU, memory, GPU, disk pressure, and background noise.",
  },
];

const packs = [
  {
    name: "Dev Pack",
    points: [
      "node_modules and package cache visibility",
      "build artifact cleanup",
      "Docker and local environment sprawl",
      "logs, temp files, and inactive repos",
    ],
  },
  {
    name: "Studio Pack",
    points: [
      "render caches and preview files",
      "scratch disk overload detection",
      "duplicate exports and inactive assets",
      "archive recommendations for older projects",
    ],
  },
  {
    name: "AI Pack",
    points: [
      "checkpoint and model version cleanup",
      "dataset storage analysis",
      "stale outputs and experiment clutter",
      "local AI workflow footprint awareness",
    ],
  },
];

const workflow = [
  {
    step: "01",
    title: "Scan",
    copy:
      "Inspect the machine across system storage, project directories, workflow-generated artifacts, and pressure indicators.",
  },
  {
    step: "02",
    title: "Classify",
    copy:
      "Separate active files from waste using file patterns, project structure, age, duplication, and workflow context.",
  },
  {
    step: "03",
    title: "Recommend",
    copy:
      "Show delete, archive, compress, move, or protect actions with projected impact and safer system logic.",
  },
  {
    step: "04",
    title: "Maintain",
    copy:
      "Set up ongoing rules and routines so the machine stays healthy without another cleanup emergency.",
  },
];

export default function ProductPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div>
          <div className="subtle-kicker">Product</div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
            A system layer for machine clarity, safety, and control
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            CleanStack OS helps modern builders understand what is consuming their machine,
            what is still active, and what can be safely cleaned, archived, compressed, or protected.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/app" className="primary-button min-w-[200px]">
              Preview Product UI
            </Link>
            <Link href="/request-demo" className="secondary-button min-w-[200px]">
              Request Demo
            </Link>
          </div>
        </div>

        <div className="visual-frame control-grid">
          <div className="visual-inner">
            <Image
              src="/graphics/product-system-map.svg"
              alt="CleanStack OS product systems graphic"
              width={1400}
              height={960}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="feature-card">
            <div className="text-xl font-semibold text-white">{pillar.title}</div>
            <p className="mt-4 text-sm leading-7 text-white/60">{pillar.copy}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 glass-panel p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="subtle-kicker">Core Packs</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Built for the way modern builders actually work
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60 md:text-lg">
            Instead of forcing one generic cleanup model onto every user, CleanStack OS expands
            through workflow packs that understand how different tools generate clutter and drag.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className="surface-elevated p-6"
            >
              <div className="text-xl font-semibold text-white">{pack.name}</div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/60">
                {pack.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
        <div className="visual-frame">
          <div className="visual-inner">
            <Image
              src="/graphics/cleanup-intelligence.svg"
              alt="Cleanup intelligence graphic"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <div className="subtle-kicker">Workflow</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            From machine noise to system control
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            CleanStack OS moves users from reactive cleanup into an ongoing machine-health model.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {workflow.map((item) => (
              <div key={item.step} className="feature-card">
                <div className="text-sm tracking-[0.25em] text-white/35">{item.step}</div>
                <div className="mt-4 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="glass-panel p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Want the first version?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Join the early access list and help shape the first premium system for workstation cleanup and health.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/waitlist" className="primary-button min-w-[220px]">
              Join Early Access
            </Link>
            <Link href="/features" className="secondary-button min-w-[220px]">
              View Product Screens
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
