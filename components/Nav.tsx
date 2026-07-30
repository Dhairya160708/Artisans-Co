"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid color-mix(in srgb, var(--color-gold) 25%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-bone"
        >
          {site.logoMark}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="btn-text text-bone/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className="block h-px w-6 bg-bone transition-all duration-300"
            style={{
              transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 bg-bone transition-all duration-300"
            style={{
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-surface md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 pb-8 pt-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow text-bone"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
