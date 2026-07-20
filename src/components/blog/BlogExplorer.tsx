'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { categories, type Post } from '@/lib/blog-config';
import { cn } from '@/lib/utils';
import { PostCard } from './PostCard';

/**
 * Client-side search + category filtering. All posts are already in the
 * payload, so filtering is instant and works without an API.
 */
export function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const hasPosts = posts.length > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === 'all' || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        (post.tags ?? []).some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      {/* Controls — hidden until there is something to search through */}
      <div className={cn('flex flex-col gap-5', !hasPosts && 'hidden')}>
        <div className="relative max-w-md">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <label htmlFor="blog-search" className="sr-only">
            Search posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-[0.9375rem] placeholder:text-muted/70 transition-colors focus:border-accent"
          />
        </div>

        <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ slug: 'all', label: 'All' }, ...categories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                category === c.slug
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted hover:text-foreground',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className={cn(hasPosts && 'mt-12')}>
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${query}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-dashed border-border px-6 py-20 text-center"
            >
              {hasPosts ? (
                <p className="text-muted">No posts match that search.</p>
              ) : (
                <>
                  <p className="text-lg font-medium tracking-tight">First post coming soon.</p>
                  <p className="mx-auto mt-2 max-w-sm leading-relaxed text-muted">
                    I&apos;ll be writing about what I ship, what breaks and what the numbers
                    actually look like. Subscribe below to get them as they land.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
