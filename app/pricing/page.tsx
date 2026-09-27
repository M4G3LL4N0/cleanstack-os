import Image from "next/image";
import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "For discovery and basic cleanup visibility",
    features: [
      "System scan",
      "Storage map",
      "Health score",
      "Limited cleanup suggestions",
      "Basic workflow visibility",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    subtitle: "For serious builders who need ongoing machine health",
    features: [
      "Unlimited cleanup actions",
      "Workflow-aware cleanup",
      "Project health dashboard",
      "Scheduled maintenance",
      "Advanced archive recommendations",
      "Performance insights across system pressure",
    ],
    cta: "Join Pro Waitlist",
    highlighted: true,
  },
  {
    name: "Teams",
    price: "$29/seat",
    subtitle: "For startups, studios, and technical teams",
    features: [
      "Machine health dashboards",
      "Policy-based cleanup rules",
      "Shared workstation standards",
      "Cross-device visibility",
      "Admin controls",
      "Team onboarding support later",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
];

const comparison = [
  ["System scan", "Yes", "Yes", "Yes"],
  ["Workflow-aware cleanup", "Limited", "Yes", "Yes"],
  ["Project health dashboard", "No", "Yes", "Yes"],
  ["Scheduled maintenance", "No", "Yes", "Yes"],
  ["Team visibility", "No", "No", "Yes"],
  ["Policy controls", "No", "No", "Yes"],
];

export default function PricingPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="pricing" />
      <section className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div>
          <div className="subtle-kicker">Pricing</div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Pricing built for control, not clutter
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Start free, upgrade when you want deeper workflow intelligence, automation,
            archive systems, and stronger machine-health control.
          </p>
        </div>

        <div className="visual-frame control-grid">
          <div className="visual-inner">
            <Image
              src="/graphics/pricing-stack.svg"
              alt="CleanStack OS pricing and product stack graphic"
              width={1400}
              height={960}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card rounded-[2rem] border p-8 ${
              plan.highlighted
                ? "border-[#b9ddff]/20 bg-[#dff5ff]/[0.06]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl font-semibold text-white">{plan.name}</div>
                <p className="mt-2 text-sm leading-6 text-white/55">{plan.subtitle}</p>
              </div>
              {plan.highlighted ? (
                <div className="rounded-full border border-[#b9ddff]/20 bg-[#dff5ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#071018]">
                  Preferred
                </div>
              ) : null}
            </div>

            <div className="mt-8 text-4xl font-semibold text-white">{plan.price}</div>

            <ul className="mt-8 space-y-3 text-sm leading-6 text-white/60">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/waitlist"
                className={plan.highlighted ? "primary-button w-full" : "secondary-button w-full"}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div className="glass-panel overflow-hidden">
          <div className="border-b border-white/10 px-8 py-8 md:px-12">
            <div className="subtle-kicker">Feature Comparison</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Choose the level of control you need
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1.6fr,0.7fr,0.7fr,0.7fr] bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white">
                <div>Capability</div>
                <div>Free</div>
                <div>Pro</div>
                <div>Teams</div>
              </div>

              {comparison.map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[1.6fr,0.7fr,0.7fr,0.7fr] border-t border-white/10 px-6 py-4 text-sm text-white/65"
                >
                  <div>{row[0]}</div>
                  <div>{row[1]}</div>
                  <div className="font-semibold text-white">{row[2]}</div>
                  <div>{row[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
