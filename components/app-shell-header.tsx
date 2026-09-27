import Link from "next/link";

type Action = {
  label: string;
  href?: string;
};

export default function AppShellHeader({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: Action;
  secondaryAction?: Action;
}) {
  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.22em] text-white/35">
            {eyebrow}
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
            {description}
          </p>
        </div>

        {(primaryAction || secondaryAction) ? (
          <div className="flex gap-3">
            {secondaryAction ? (
              secondaryAction.href ? (
                <Link href={secondaryAction.href} className="secondary-button">
                  {secondaryAction.label}
                </Link>
              ) : (
                <button type="button" className="secondary-button">
                  {secondaryAction.label}
                </button>
              )
            ) : null}

            {primaryAction ? (
              primaryAction.href ? (
                <Link href={primaryAction.href} className="primary-button">
                  {primaryAction.label}
                </Link>
              ) : (
                <button type="button" className="primary-button">
                  {primaryAction.label}
                </button>
              )
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
