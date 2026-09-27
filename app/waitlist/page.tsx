"use client";

import { FormEvent, useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistPage() {
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
      interest: String(formData.get("interest") || ""),
      source: "waitlist-page",
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
      setMessage("You’re on the list. We’ll reach out when early access opens.");
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
      <SubpageVisual variant="default" />
      <section className="mx-auto max-w-3xl text-center">
        <div className="subtle-kicker">Waitlist</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Get early access to CleanStack OS
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Join the list to get launch updates, early product access, and a chance to help shape the first workflow packs.
        </p>
      </section>

      <section className="page-section mx-auto max-w-3xl">
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
                <span className="text-sm text-white/70">Primary role</span>
                <select
                  name="role"
                  defaultValue=""
                  className="form-input bg-[#0a1219]"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="developer">Developer</option>
                  <option value="creator">Creator</option>
                  <option value="ai-builder">AI Builder</option>
                  <option value="founder">Founder</option>
                  <option value="team">Team / Studio</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/70">Most important workflow</span>
                <input
                  name="interest"
                  type="text"
                  placeholder="Node, Premiere, Docker, DaVinci, local AI, etc."
                  className="form-input"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={state === "loading"}
              className="primary-button mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "loading" ? "Submitting..." : "Join the Waitlist"}
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
