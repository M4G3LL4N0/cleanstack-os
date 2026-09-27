import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function SignInPage() {
  return (
    <main className="container-shell flex min-h-[calc(100vh-120px)] items-center py-16">
      <SubpageVisual variant="default" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr,0.9fr]">
        <section className="flex flex-col justify-center">
          <div className="text-sm uppercase tracking-[0.25em] text-white/40">
            Sign In
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Enter the CleanStack OS workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            This is a demo auth surface for the product shell. Later, this can connect to a real auth provider and user dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/app" className="primary-button">
              Continue to App Preview
            </Link>
            <Link href="/waitlist" className="secondary-button">
              Join Waitlist
            </Link>
          </div>
        </section>

        <section className="glass-panel p-8 md:p-10">
          <div className="text-2xl font-semibold text-white">Welcome back</div>

          <form className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm text-white/70">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-white/25"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-white/25"
              />
            </label>

            <button type="button" className="primary-button mt-2 w-full">
              Sign In
            </button>

            <div className="text-center text-sm text-white/50">
              Demo shell only. Real auth can be wired next.
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
