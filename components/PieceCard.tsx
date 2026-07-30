"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Piece, type Currency } from "@/lib/content";
import { formatPrice } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const aspectClass: Record<Piece["aspect"], string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5.5]",
  square: "aspect-[1/1.15]",
};

export default function PieceCard({
  piece,
  currency,
  index,
}: {
  piece: Piece;
  currency: Currency;
  index: number;
}) {
  const reserved = piece.status === "reserved";
  const price = currency === "GBP" ? piece.priceGBP : piece.priceEUR;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: (index % 3) * 0.12 }}
      className="group"
    >
      <div className={`frame-gold relative overflow-hidden ${aspectClass[piece.aspect]}`}>
        <Image
          src={piece.image}
          alt={piece.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${
            reserved ? "grayscale-[35%] opacity-80" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-6 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <span className="eyebrow text-bone">
            {reserved ? "Reserved" : "View Piece"}
          </span>
        </div>
        <div className="absolute left-4 top-4 z-10">
          <span className="eyebrow border border-gold/40 bg-charcoal/85 px-2 py-1 text-gold">
            {String(piece.pieceNumber).padStart(2, "0")}/{piece.editionSize}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-light text-bone">
            {piece.title}
          </h3>
          <p className="mt-1 text-xs text-stone">
            {piece.artisan} — {piece.city}
          </p>
        </div>
        <div className="shrink-0 text-right">
          {reserved ? (
            <span className="eyebrow text-rose-dust">Reserved</span>
          ) : (
            <span className="font-display text-sm text-bone">
              {formatPrice(price, currency)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
