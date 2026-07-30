import Link from "next/link";
import Hero from "@/components/Hero";
import DropGrid from "@/components/DropGrid";
import ArtisanRow from "@/components/ArtisanRow";
import ProvenanceSection from "@/components/ProvenanceSection";
import Reveal from "@/components/Reveal";
import { artisans, currentDrop } from "@/lib/content";

export default function Home() {
  const featuredArtisans = artisans.slice(0, 2);

  return (
    <div>
      <Hero />

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-rose-dust">Drop {currentDrop.number} — {currentDrop.city}</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-light text-bone md:text-4xl">
                {currentDrop.intro}
              </h2>
            </div>
            <Link href="/drop" className="btn-text shrink-0 text-bone hover:text-gold">
              View Full Collection
            </Link>
          </Reveal>

          <DropGrid limit={3} />
        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-24 px-6 md:gap-32 md:px-10">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-lake-blue">The Makers</p>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-light text-bone md:text-4xl">
                Every piece carries a name.
              </h2>
            </div>
            <Link href="/artisans" className="btn-text hidden shrink-0 text-bone hover:text-gold sm:inline-block">
              Meet the Artisans
            </Link>
          </Reveal>

          {featuredArtisans.map((artisan, i) => (
            <ArtisanRow key={artisan.slug} artisan={artisan} reverse={i % 2 === 1} />
          ))}

          <Reveal className="sm:hidden">
            <Link href="/artisans" className="btn-text text-bone">
              Meet the Artisans
            </Link>
          </Reveal>
        </div>
      </section>

      <ProvenanceSection />

      <section className="relative overflow-hidden bg-charcoal py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-gold">Request Access</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-bone md:text-5xl">
              Join the list before the next drop opens.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-stone md:text-base">
              A small number of numbered pieces, released a few times a year.
              We&rsquo;ll let you know before anyone else.
            </p>
            <Link href="/waitlist" className="btn-outline mt-10 inline-block text-bone">
              Request Access
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
