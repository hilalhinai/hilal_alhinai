/**
 * Blog types and constants with no Node.js dependencies, so they can be
 * imported from client components. Filesystem access lives in posts.ts.
 */

export const categories = [
  { slug: 'ai', label: 'AI' },
  { slug: 'app-development', label: 'App Development' },
  { slug: 'productivity', label: 'Productivity' },
  { slug: 'personal-finance', label: 'Personal Finance' },
  { slug: 'building-in-public', label: 'Building in Public' },
  { slug: 'technology', label: 'Technology' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: CategorySlug;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingMinutes: number;
}

export function categoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}
