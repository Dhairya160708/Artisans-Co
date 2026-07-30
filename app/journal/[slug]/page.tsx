import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { site } from "@/lib/content";
import { getAllJournalPosts, getJournalPost, getJournalSlugs } from "@/lib/journal";
import { formatDate } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getJournalPost(slug);
    return {
      title: `${post.frontmatter.title} — ${site.name}`,
      description: post.frontmatter.excerpt,
    };
  } catch {
    return { title: site.name };
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 mb-4 font-display text-2xl font-light text-bone" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-base leading-relaxed text-bone/80" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-stone" {...props} />
  ),
};

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getJournalSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getJournalPost(slug);
  const related = getAllJournalPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <article>
      <section className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden bg-charcoal">
        <Image
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[880px] px-6 pb-16 md:px-10">
          <Reveal>
            <p className="eyebrow text-gold">
              {post.frontmatter.category} — {formatDate(post.frontmatter.date)}
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight text-bone md:text-5xl">
              {post.frontmatter.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <Reveal>
            <MDXRemote source={post.content} components={mdxComponents} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-charcoal pb-24 md:pb-32">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10">
            <div className="hairline-solid mb-12" />
            <p className="eyebrow mb-8 text-stone">Continue Reading</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <a key={p.slug} href={`/journal/${p.slug}`} className="group block">
                  <h3 className="font-display text-xl font-light text-bone transition-opacity group-hover:opacity-70">
                    {p.frontmatter.title}
                  </h3>
                  <p className="mt-2 eyebrow text-stone">
                    {formatDate(p.frontmatter.date)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
