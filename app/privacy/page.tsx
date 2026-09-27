import { SubpageVisual } from "@/components/SubpageVisual";
export default function PrivacyPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Privacy
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-8 text-white/60">
          This is an early placeholder privacy policy for CleanStack OS. It can be expanded
          and reviewed by counsel before public launch.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="glass-panel space-y-8 p-8 md:p-10 text-white/60">
          <div>
            <h2 className="text-xl font-semibold text-white">Information You Provide</h2>
            <p className="mt-3 leading-7">
              We may collect information you provide directly, such as your name, email
              address, role, and workflow interests when you join the waitlist or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Product Data</h2>
            <p className="mt-3 leading-7">
              Future product versions may process machine health, storage, and workflow
              metadata to provide cleanup and optimization insights. Product data handling
              should be designed around transparency, user control, and minimal collection.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">How Information May Be Used</h2>
            <p className="mt-3 leading-7">
              We may use information to operate the website, manage the waitlist, improve
              the product, communicate updates, and understand user demand and workflow needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Changes</h2>
            <p className="mt-3 leading-7">
              This policy may be updated as the product evolves. Public launch should include
              a finalized policy tailored to the production product and data flows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
