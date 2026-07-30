"use client";

import { useState } from "react";
import { pieces, type Currency } from "@/lib/content";
import PieceCard from "./PieceCard";
import Reveal from "./Reveal";

export default function DropGrid({ limit }: { limit?: number }) {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const items = limit ? pieces.slice(0, limit) : pieces;

  return (
    <div>
      <Reveal className="mb-10 flex items-center justify-end gap-3 md:mb-14">
        <span className="eyebrow text-stone">Currency</span>
        <div className="flex overflow-hidden border border-gold/30">
          {(["GBP", "EUR"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className="eyebrow px-4 py-2 transition-colors duration-300"
              style={{
                background: currency === c ? "var(--color-gold)" : "transparent",
                color: currency === c ? "var(--color-charcoal)" : "var(--color-stone)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((piece, i) => (
          <div
            key={piece.slug}
            className={
              i % 5 === 0
                ? "sm:col-span-2 sm:mx-auto sm:w-2/3 lg:col-span-1 lg:w-full"
                : ""
            }
          >
            <PieceCard piece={piece} currency={currency} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
