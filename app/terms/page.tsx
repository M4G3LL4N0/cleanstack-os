import { SubpageVisual } from "@/components/SubpageVisual";
export default function TermsPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Terms
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Terms of Use
        </h1>
        <p className="mt-6 text-base leading-8 text-white/60">
          This is an early placeholder terms page for CleanStack OS and should be reviewed
          before public release.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="glass-panel space-y-8 p-8 md:p-10 text-white/60">
          <div>
            <h2 className="text-xl font-semibold text-white">Website Use</h2>
            <p className="mt-3 leading-7">
              By accessing this website, you agree to use it in a lawful manner and not
              attempt to disrupt, damage, or misuse the site or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Early Access</h2>
            <p className="mt-3 leading-7">
              Joining the waitlist or requesting early access does not guarantee product
              access, feature availability, or specific launch timing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">No Warranty</h2>
            <p className="mt-3 leading-7">
              The website and any early materials are provided on an as-is basis without
              warranties of any kind, express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Future Product Terms</h2>
            <p className="mt-3 leading-7">
              If and when the product launches, additional terms may apply to software use,
              data handling, subscriptions, beta access, and platform-specific features.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
