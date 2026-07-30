"use client";

import { motion } from "framer-motion";

/**
 * Slow, looping amber glow over near-black — a single spotlight drifting
 * like gallery track-lighting, not a colorful mesh. Restraint is the point.
 */
export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal">
      <motion.div
        className="absolute -left-1/4 -top-1/3 h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          filter: "blur(110px)",
          opacity: 0.16,
        }}
        animate={{
          x: ["0%", "12%", "-6%", "0%"],
          y: ["0%", "8%", "3%", "0%"],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-1/4 -bottom-1/4 h-[60vh] w-[60vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-rose-dust) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.1,
        }}
        animate={{
          x: ["0%", "-8%", "6%", "0%"],
          y: ["0%", "-6%", "-10%", "0%"],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="grain" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
