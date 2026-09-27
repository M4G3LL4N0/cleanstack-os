import { SubpageVisual } from "@/components/SubpageVisual";
const metrics = [
  { label: "Weekly Scans", value: "1,284", delta: "+14%" },
  { label: "Avg GB Reclaimed", value: "47.2", delta: "+9%" },
  { label: "Archive Actions", value: "318", delta: "+22%" },
  { label: "Protected Projects", value: "904", delta: "+11%" },
];

const bars = [
  { label: "Dev", value: 82 },
  { label: "Studio", value: 67 },
  { label: "AI", value: 74 },
  { label: "Mixed", value: 91 },
];

const funnel = [
  { label: "Visited site", value: "8,420" },
  { label: "Viewed product", value: "4,980" },
  { label: "Joined waitlist", value: "642" },
  { label: "Requested demo", value: "58" },
];

const linePoints = "0,120 60,104 120,96 180,82 240,88 300,70 360,62 420,40";

export default function AnalyticsPage() {
  return (
    <main className="container-shell py-24">
      <SubpageVisual variant="default" />
      <section className="max-w-4xl">
        <div className="subtle-kicker">Analytics</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Operating signals across demand and machine health
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          A premium analytics surface for understanding product pull, workflow mix, and storage recovery opportunity.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass-panel p-6">
            <div className="text-sm text-white/40">{metric.label}</div>
            <div className="mt-3 text-4xl font-semibold text-white">{metric.value}</div>
            <div className="mt-3 text-sm text-white/55">{metric.delta} vs prior period</div>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">Trend</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Reclaimable value over time</h2>

          <div className="mt-8 surface-elevated p-4">
            <svg viewBox="0 0 420 140" className="w-full">
              <defs>
                <linearGradient id="cleanstackLineFade" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(204,232,255,0.75)" />
                  <stop offset="100%" stopColor="rgba(204,232,255,0.04)" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="white"
                strokeWidth="3"
                points={linePoints}
              />
              <polygon
                fill="url(#cleanstackLineFade)"
                points={`0,140 ${linePoints} 420,140`}
              />
            </svg>
          </div>
        </div>

        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">Demand Funnel</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Acquisition motion</h2>

          <div className="mt-8 grid gap-4">
            {funnel.map((item, index) => (
              <div
                key={item.label}
                className="surface-elevated p-5"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Step {index + 1}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">{item.label}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">Workflow Mix</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Most active workloads</h2>

          <div className="mt-8 grid gap-5">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/55">{bar.label}</span>
                  <span className="font-semibold text-white">{bar.value}%</span>
                </div>
                <div className="mt-3 h-4 rounded-full bg-white/10">
                  <div
                    className="h-4 rounded-full bg-white"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 md:p-8">
          <div className="subtle-kicker">Recovery Profile</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Opportunity mix</h2>

          <div className="mt-8 surface-elevated p-4">
            <svg viewBox="0 0 220 220" className="mx-auto h-[220px] w-[220px]">
              <circle cx="110" cy="110" r="72" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="24" />
              <circle
                cx="110"
                cy="110"
                r="72"
                fill="none"
                stroke="white"
                strokeWidth="24"
                strokeDasharray="160 452"
                strokeLinecap="round"
                transform="rotate(-90 110 110)"
              />
              <circle
                cx="110"
                cy="110"
                r="72"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="24"
                strokeDasharray="110 502"
                strokeDashoffset="-170"
                strokeLinecap="round"
                transform="rotate(-90 110 110)"
              />
              <circle
                cx="110"
                cy="110"
                r="72"
                fill="none"
                stroke="rgba(255,255,255,0.24)"
                strokeWidth="24"
                strokeDasharray="78 534"
                strokeDashoffset="-290"
                strokeLinecap="round"
                transform="rotate(-90 110 110)"
              />
              <text x="110" y="104" textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
                187 GB
              </text>
              <text x="110" y="126" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11">
                recoverable
              </text>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
