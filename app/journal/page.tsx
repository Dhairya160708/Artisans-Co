import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";
import { getAllJournalPosts } from "@/lib/journal";
import { formatDate } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Journal — ${site.name}`,
  description: "Long-form stories from the workshops behind each drop.",
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <div>
      <section className="bg-charcoal pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-saffron">Journal</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-light leading-tight text-bone md:text-6xl">
              Stories from the workshops.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-8 gap-y-16 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.1}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="frame-gold relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <p className="eyebrow mt-5 text-stone">
                  {post.frontmatter.category} — {formatDate(post.frontmatter.date)}
                </p>
                <h2 className="mt-2 font-display text-xl font-light text-bone">
                  {post.frontmatter.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-bone/70">
                  {post.frontmatter.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
