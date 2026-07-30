"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Artisan } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ArtisanRow({
  artisan,
  reverse,
}: {
  artisan: Artisan;
  reverse: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: EASE }}
        className="frame-gold relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]"
      >
        <Image
          src={artisan.image}
          alt={artisan.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
        className="max-w-md"
      >
        <p className="eyebrow text-lake-blue">{artisan.craft}</p>
        <h3 className="mt-4 font-display text-3xl font-light text-bone md:text-4xl">
          {artisan.name}
        </h3>
        <p className="mt-2 eyebrow text-stone">{artisan.city}</p>
        <div className="hairline-solid my-6 w-16" />
        <p className="text-sm leading-relaxed text-bone/70 md:text-base">
          {artisan.story}
        </p>
      </motion.div>
    </div>
  );
}
