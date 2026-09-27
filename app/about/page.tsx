import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="about" />
      <section className="max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          About
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Building the compute health layer for modern work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          CleanStack OS exists because modern machines are doing more than ever, while
          the tools to manage their health are still generic, reactive, and not built
          for the way developers, creators, and AI builders actually work.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel p-8">
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">
            Vision
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Not just cleanup. Personal infrastructure.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60">
            We believe personal computers and workstations are turning into unmanaged
            mini data centers. CleanStack OS is designed to become the control layer
            that helps users understand, organize, protect, and optimize their local
            compute environments.
          </p>
        </div>

        <div className="glass-panel p-8">
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">
            Wedge
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Start with obvious pain. Expand into the platform.
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60">
            The entry point is overloaded machines: storage pressure, stale caches,
            project sprawl, and system drag. From there, the product expands into
            project lifecycle intelligence, workstation operations, and team-level
            compute health.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-panel p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/40">
                Investor framing
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A wedge into a much larger category.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-white/60">
              <p>
                Cleanup is the starting point, not the ceiling. The larger opportunity
                is a product that helps users manage active versus inactive work, decide
                what stays local versus moves elsewhere, and keep systems consistently
                healthy as workflows become heavier and more fragmented.
              </p>
              <p>
                Over time, that can grow into team-level machine policies, storage
                orchestration, and the system of record for workstation health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="glass-panel p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Want to shape the launch?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Join the waitlist and help define the first version for developers, creators,
            AI builders, and overloaded startup workstations.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/waitlist" className="primary-button min-w-[220px]">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
