"use client";

import { motion } from "framer-motion";
import GradientMesh from "./GradientMesh";
import JaliMotif from "./JaliMotif";
import CountdownTimer from "./CountdownTimer";
import { currentDrop, nextDropDate, site } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <GradientMesh />
      <JaliMotif />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-6 pt-24 text-center md:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="eyebrow text-gold"
        >
          {currentDrop.title.toUpperCase()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
          className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.1] text-bone sm:text-6xl md:text-7xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-stone md:text-base"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mt-14"
        >
          <p className="eyebrow mb-6 text-stone">Next drop opens in</p>
          <CountdownTimer target={nextDropDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="/waitlist" className="btn-outline text-bone">
            Request Access
          </a>
          <a href="/drop" className="btn-text text-bone">
            View The Drop
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-stone/50"
        />
      </motion.div>
    </section>
  );
}
