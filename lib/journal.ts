import fs from "fs";
import path from "path";
import matter from "gray-matter";

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export type JournalFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export function getJournalSlugs(): string[] {
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getJournalPost(slug: string) {
  const filePath = path.join(JOURNAL_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as JournalFrontmatter,
    content,
  };
}

export function getAllJournalPosts() {
  return getJournalSlugs()
    .map((slug) => getJournalPost(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
