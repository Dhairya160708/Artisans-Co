import { provenance } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProvenanceSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-rose-dust">Craft &amp; Provenance</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-light text-bone md:text-4xl">
            Every technique, documented like a museum plaque.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-gold/25 border-t border-gold/25">
          {provenance.map((entry, i) => (
            <Reveal key={entry.technique} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[1fr_1.4fr]">
                <h3 className="font-display text-xl font-light text-bone md:text-2xl">
                  <span className="mr-3 text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {entry.technique}
                </h3>
                <div className="space-y-3">
                  <p className="eyebrow text-stone">Materials</p>
                  <p className="text-sm leading-relaxed text-bone/70">
                    {entry.materials}
                  </p>
                  <p className="eyebrow pt-2 text-stone">Process</p>
                  <p className="text-sm leading-relaxed text-bone/70">
                    {entry.process}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
