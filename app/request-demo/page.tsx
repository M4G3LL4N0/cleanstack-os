"use client";

import { FormEvent, useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";

type FormState = "idle" | "loading" | "success" | "error";

export default function RequestDemoPage() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      role: String(formData.get("role") || ""),
      interest: `DEMO REQUEST: ${String(formData.get("company") || "")} | ${String(
        formData.get("details") || ""
      )}`,
      source: "request-demo-page",
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Submission failed.");
      }

      setState("success");
      setMessage("Demo request received. We’ll follow up when private previews open.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="container-shell page-stack">
      <SubpageVisual variant="demo" />
      <section className="mx-auto max-w-4xl">
        <div className="subtle-kicker">Request Demo</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Request a private product walkthrough
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Best for startup teams, studios, and operators who want to see how CleanStack OS can evolve into a real workstation intelligence layer.
        </p>
      </section>

      <section className="page-section mx-auto max-w-4xl">
        <div className="glass-panel p-8 md:p-10">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-white/70">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/70">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="form-input"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-white/70">Role</span>
                <input
                  name="role"
                  type="text"
                  placeholder="Founder, engineer, editor, studio lead..."
                  className="form-input"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/70">Company or Team</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Your company or team"
                  className="form-input"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">What do you want to see?</span>
              <textarea
                name="details"
                rows={5}
                placeholder="Tell us about your workstation pain, workflow type, and what a useful demo would show."
                className="form-input"
              />
            </label>

            <button
              type="submit"
              disabled={state === "loading"}
              className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "loading" ? "Submitting..." : "Request Demo"}
            </button>

            {message ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white">
                {message}
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
