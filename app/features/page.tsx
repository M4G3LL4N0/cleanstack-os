import Image from "next/image";
import { SubpageVisual } from "@/components/SubpageVisual";

const screens = [
  {
    title: "Workstation overview",
    copy:
      "A machine-health surface showing recovery potential, automation readiness, and active system pressure.",
    image: "/graphics/hero-workstation.svg",
  },
  {
    title: "Cleanup intelligence",
    copy:
      "Storage waste is mapped by workflow context so the system can tell the difference between active work and removable clutter.",
    image: "/graphics/cleanup-intelligence.svg",
  },
  {
    title: "Archive-first recommendations",
    copy:
      "Cold projects and duplicate outputs are surfaced as archive opportunities before risky delete actions are suggested.",
    image: "/graphics/archive-intelligence.svg",
  },
  {
    title: "AI and storage operations",
    copy:
      "Model checkpoints, datasets, outputs, and experiment sprawl become understandable through a dedicated systems layer.",
    image: "/graphics/ai-storage-ops.svg",
  },
];

export default function FeaturesPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="subtle-kicker">Feature Screens</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Product visuals built around clarity and system control
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          These graphics turn CleanStack OS into a sharper product story with relevant
          visuals for cleanup intelligence, archive logic, and AI-era storage pressure.
        </p>
      </section>

      <section className="mt-16 grid gap-8">
        {screens.map((screen, index) => (
          <div key={screen.title} className="glass-panel overflow-hidden p-4 md:p-6">
            <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <div className="visual-frame">
                  <div className="visual-inner">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      width={1600}
                      height={1000}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}>
                <div className="subtle-kicker">Visual System {index + 1}</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {screen.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-white/60 md:text-lg">
                  {screen.copy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
