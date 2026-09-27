import { SubpageVisual } from "@/components/SubpageVisual";
const steps = [
  {
    number: "01",
    title: "Connect your machine context",
    copy:
      "CleanStack OS starts by understanding what kind of user you are, what workflows matter most, and how your local system is currently being used.",
  },
  {
    number: "02",
    title: "Run a full system scan",
    copy:
      "The first scan maps storage load, project sprawl, duplicate density, inactive work, and early signs of performance drag.",
  },
  {
    number: "03",
    title: "Review recommended actions",
    copy:
      "Instead of blindly deleting files, the product shows what should be deleted, archived, compressed, moved, or protected.",
  },
  {
    number: "04",
    title: "Set your optimization rules",
    copy:
      "Users can define preferences for how aggressive or conservative cleanup should be, what project types are protected, and what gets reviewed first.",
  },
  {
    number: "05",
    title: "Move into continuous machine health",
    copy:
      "Once configured, CleanStack OS can help keep the workstation healthy over time instead of waiting until things become slow and chaotic again.",
  },
];

export default function OnboardingPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          Onboarding Preview
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          What the first user experience can feel like.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          This preview outlines how CleanStack OS can take a new user from overloaded
          machine chaos to a clear, healthy, and manageable workstation state.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-6">
          {steps.map((step) => (
            <div key={step.number} className="glass-panel p-8 md:p-10">
              <div className="text-sm uppercase tracking-[0.25em] text-white/35">
                Step {step.number}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{step.title}</h2>
              <p className="mt-5 text-base leading-8 text-white/60">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
