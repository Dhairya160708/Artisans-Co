import Link from "next/link";
import { footerLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone">
      <div className="hairline-solid" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-light">{site.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
              {site.description}
            </p>
            <p className="eyebrow mt-8 text-gold">{site.shippingNote}</p>
          </div>

          <div>
            <p className="eyebrow mb-5 text-stone">Follow</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="btn-text" target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-stone">Legal</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="btn-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone/20 pt-8 text-xs text-stone md:flex-row md:items-center">
          <p>Every piece handmade by artisans in Jaipur, Udaipur, and across India.</p>
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
