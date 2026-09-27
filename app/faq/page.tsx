import { SubpageVisual } from "@/components/SubpageVisual";
const faqs = [
  {
    question: "Is CleanStack OS just another disk cleaner?",
    answer:
      "No. CleanStack OS is positioned as a compute health platform. It focuses on workflow-aware cleanup, project intelligence, and machine performance rather than generic one-size-fits-all file deletion.",
  },
  {
    question: "Who is this built for first?",
    answer:
      "The first wedge is overloaded builders: developers, technical founders, AI tinkerers, and creator-technical hybrid users who regularly deal with project sprawl and performance drag.",
  },
  {
    question: "What makes it safer than generic cleanup tools?",
    answer:
      "The long-term product direction is to explain cleanup decisions, separate active work from dormant clutter, and recommend different actions such as delete, archive, compress, move, or protect instead of blindly removing files.",
  },
  {
    question: "Will this work for creators too?",
    answer:
      "Yes. The Studio wedge is designed for media-heavy workflows like video, audio, photography, and 3D, where caches, previews, proxies, renders, and duplicate exports cause performance problems.",
  },
  {
    question: "Will there be an AI-specific mode?",
    answer:
      "Yes. The AI wedge will focus on model checkpoints, datasets, stale outputs, experiment clutter, and the local storage and performance pressure created by modern AI workflows.",
  },
  {
    question: "Is this for teams or just individuals?",
    answer:
      "It starts as a powerful tool for individuals, but the broader opportunity includes team dashboards, workstation policies, shared storage standards, and compute health across startup and studio environments.",
  },
];

export default function FaqPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-4xl">
        <div className="text-sm uppercase tracking-[0.25em] text-white/40">
          FAQ
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Questions people will ask before they believe this category.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          CleanStack OS is larger than a utility and narrower than a full operating
          system replacement. It starts with real pain and expands into a meaningful
          infrastructure layer for healthy workstations.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass-panel p-8">
              <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
              <p className="mt-4 text-base leading-7 text-white/60">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
