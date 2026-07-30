import type { Metadata } from "next";
import { currentDrop, nextDropDate, site } from "@/lib/content";
import CountdownTimer from "@/components/CountdownTimer";
import DropGrid from "@/components/DropGrid";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `The Drop — ${site.name}`,
  description: currentDrop.intro,
};

export default function DropPage() {
  return (
    <div>
      <section className="bg-charcoal pb-16 pt-40 text-bone md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-gold">Drop {currentDrop.number} — {currentDrop.city}</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight md:text-6xl">
              {currentDrop.title}
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone md:text-base">
              {currentDrop.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <p className="eyebrow mb-6 text-stone">Opens in</p>
            <CountdownTimer target={nextDropDate} />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <DropGrid />
        </div>
      </section>
    </div>
  );
}
