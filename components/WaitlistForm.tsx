"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { countryOptions, site } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") || ""),
      country: String(data.get("country") || ""),
      instagram: String(data.get("instagram") || ""),
    };

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="py-8"
          >
            <p className="eyebrow text-gold">Request Received</p>
            <p className="mt-4 max-w-md font-display text-xl font-light leading-relaxed text-bone md:text-2xl">
              You&rsquo;re on the list. We&rsquo;ll be in touch before the next drop opens.
            </p>
            <p className="mt-4 text-sm text-stone">
              In the meantime, follow along on Instagram —{" "}
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-text text-bone"
              >
                {site.instagramHandle}
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="eyebrow text-stone">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="border-b border-stone/50 bg-transparent py-3 text-bone placeholder:text-stone/40 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="eyebrow text-stone">
                Country (optional)
              </label>
              <select
                id="country"
                name="country"
                defaultValue=""
                className="border-b border-stone/50 bg-transparent py-3 text-bone focus:border-gold focus:outline-none [&>option]:text-charcoal"
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="instagram" className="eyebrow text-stone">
                Instagram handle (optional)
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                placeholder="@yourhandle"
                className="border-b border-stone/50 bg-transparent py-3 text-bone placeholder:text-stone/40 focus:border-gold focus:outline-none"
              />
            </div>

            {error && <p className="text-xs text-rose-dust">{error}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-outline mt-4 self-start text-bone disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Request Access"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
