import type { Metadata } from "next";
import { site } from "@/lib/content";
import WaitlistForm from "@/components/WaitlistForm";
import GradientMesh from "@/components/GradientMesh";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Request Access — ${site.name}`,
  description: "Request access to the next artisan drop.",
};

export default function WaitlistPage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-40">
      <GradientMesh />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Request Access</p>
          <h1 className="mt-5 max-w-md font-display text-4xl font-light leading-tight text-bone md:text-5xl">
            Be the first to know when the next drop opens.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
            We release a small number of numbered pieces at a time. Join the
            list to receive early access before each drop goes public.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
