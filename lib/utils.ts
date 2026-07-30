import { type Currency } from "./content";

export function formatPrice(amount: number, currency: Currency) {
  const symbol = currency === "GBP" ? "£" : "€";
  return `${symbol}${amount.toLocaleString("en-GB")}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
