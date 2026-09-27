import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

const launchItems = [
  "Workflow-aware cleanup for overloaded workstations",
  "Dev, Studio, and AI launch wedges",
  "Archive-first system health recommendations",
  "Project-aware machine intelligence preview",
  "Operator dashboards and team infrastructure path",
];

export default function LaunchPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl text-center">
        <div className="subtle-kicker">Launch</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          CleanStack OS is entering early access
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          The first version is aimed at overloaded builder, creator, and AI-heavy machines that need a cleaner operating surface for machine health.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="glass-panel p-8 md:p-12">
          <div className="subtle-kicker">Launch Scope</div>
          <div className="mt-4 text-3xl font-semibold text-white">
            What’s included in the first product story
          </div>

          <div className="mt-8 grid gap-4">
            {launchItems.map((item) => (
              <div
                key={item}
                className="surface-elevated p-5 text-white/70"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/waitlist" className="primary-button min-w-[200px]">
              Join Waitlist
            </Link>
            <Link href="/request-demo" className="secondary-button min-w-[200px]">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
