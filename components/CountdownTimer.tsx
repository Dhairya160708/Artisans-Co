"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  target: string; // ISO date
  className?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="digit-plate border bg-surface/60 px-4 py-3 md:px-6 md:py-4"
        style={{ borderColor: "color-mix(in srgb, var(--color-gold) 30%, transparent)" }}
      >
        <div className="relative h-[1.1em] w-[1.6em] overflow-hidden text-center text-3xl md:text-5xl">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={display}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 font-display font-light tabular-nums text-bone"
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <span className="eyebrow text-stone">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ target, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!timeLeft) {
    return <div className={className} style={{ minHeight: "5.5rem" }} />;
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-4 md:gap-6">
        <Digit value={timeLeft.days} label="Days" />
        <span className="pb-7 font-display text-2xl font-light text-gold/50 md:text-4xl">:</span>
        <Digit value={timeLeft.hours} label="Hours" />
        <span className="pb-7 font-display text-2xl font-light text-gold/50 md:text-4xl">:</span>
        <Digit value={timeLeft.minutes} label="Minutes" />
        <span className="pb-7 font-display text-2xl font-light text-gold/50 md:text-4xl">:</span>
        <Digit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
