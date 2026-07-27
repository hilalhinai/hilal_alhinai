import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readingTime } from './utils';
import type { Post, PostFrontmatter } from './blog-config';

/**
 * Filesystem-backed blog. Posts live in /content/posts as .mdx files with
 * frontmatter. To publish, add a file and redeploy — no CMS required.
 *
 * This module is server-only. Client components should import types and
 * category constants from `@/lib/blog-config` instead.
 */

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function readPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
}

/**
 * A post is publicly visible when it is not a draft AND its publish date has
 * arrived. This lets posts be scheduled in advance: set `draft: false` and a
 * future `date`, and the post appears automatically on that day (pages use ISR
 * revalidation, so no redeploy is needed). Date comparison uses YYYY-MM-DD
 * strings in UTC to avoid timezone edge cases around midnight.
 */
function isPublished(post: { draft?: boolean; date: string }): boolean {
  if (post.draft) return false;
  const today = new Date().toISOString().slice(0, 10);
  return String(post.date).slice(0, 10) <= today;
}

/**
 * All published posts, newest first. In development every post is shown —
 * including drafts and future-dated posts — so they can be previewed locally.
 */
export function getAllPosts(): Post[] {
  return readPostFiles()
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;
      return {
        ...fm,
        slug: file.replace(/\.mdx$/, ''),
        content,
        readingMinutes: readingTime(content),
      } satisfies Post;
    })
    .filter((post) => process.env.NODE_ENV === 'development' || isPublished(post))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

/** Up to `limit` related posts, preferring the same category. */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  return [...sameCategory, ...others.filter((p) => p.category !== current.category)].slice(0, limit);
}
