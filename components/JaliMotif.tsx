"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A jali lattice rosette — the pierced-stone screen pattern found on
 * Jaipur's havelis and the Hawa Mahal — rendered in hairline brass gold
 * and set slowly turning behind the hero. Signature element for Drop 01.
 */
export default function JaliMotif() {
  const reduceMotion = useReducedMotion();
  const spokes = 24;
  const center = 200;
  const rInner = 58;
  const rMid = 138;
  const rOuter = 188;

  const lines = Array.from({ length: spokes }, (_, i) => {
    const angle = (i / spokes) * Math.PI * 2;
    const x1 = center + rInner * Math.cos(angle);
    const y1 = center + rInner * Math.sin(angle);
    const x2 = center + rOuter * Math.cos(angle);
    const y2 = center + rOuter * Math.sin(angle);
    return { x1, y1, x2, y2, key: `spoke-${i}` };
  });

  const diamonds = Array.from({ length: spokes / 3 }, (_, i) => {
    const angle = (i / (spokes / 3)) * Math.PI * 2;
    const x = center + rOuter * Math.cos(angle);
    const y = center + rOuter * Math.sin(angle);
    const deg = (angle * 180) / Math.PI;
    return { x, y, deg, key: `diamond-${i}` };
  });

  const dots = Array.from({ length: spokes }, (_, i) => {
    const angle = (i / spokes) * Math.PI * 2 + Math.PI / spokes;
    const x = center + rMid * Math.cos(angle);
    const y = center + rMid * Math.sin(angle);
    return { x, y, key: `dot-${i}` };
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120vh] w-[120vh] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.16]"
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <circle cx={center} cy={center} r={rOuter} fill="none" stroke="var(--color-gold)" strokeWidth="0.75" />
        <circle cx={center} cy={center} r={rMid} fill="none" stroke="var(--color-gold)" strokeWidth="0.5" />
        <circle cx={center} cy={center} r={rInner} fill="none" stroke="var(--color-gold)" strokeWidth="0.75" />
        {lines.map((l) => (
          <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="var(--color-gold)" strokeWidth="0.4" />
        ))}
        {dots.map((d) => (
          <circle key={d.key} cx={d.x} cy={d.y} r="2.5" fill="var(--color-gold)" />
        ))}
        {diamonds.map((d) => (
          <rect
            key={d.key}
            x={d.x - 6}
            y={d.y - 6}
            width="12"
            height="12"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="0.75"
            transform={`rotate(${d.deg + 45} ${d.x} ${d.y})`}
          />
        ))}
      </svg>
    </motion.div>
  );
}
