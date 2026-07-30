import type { Metadata } from "next";
import { artisans, site } from "@/lib/content";
import ArtisanRow from "@/components/ArtisanRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Artisans — ${site.name}`,
  description: "Meet the makers behind every numbered piece.",
};

export default function ArtisansPage() {
  return (
    <div>
      <section className="bg-charcoal pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-lake-blue">The Makers</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight text-bone md:text-6xl">
              Every piece carries a name.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
              We work directly with a small number of artisan workshops across
              Rajasthan, paying fair prices and crediting every maker by name.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-24 px-6 md:gap-32 md:px-10">
          {artisans.map((artisan, i) => (
            <ArtisanRow key={artisan.slug} artisan={artisan} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </div>
  );
}
