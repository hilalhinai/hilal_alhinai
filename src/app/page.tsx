import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import { Hero } from '@/components/home/Hero';
import { FeaturedApps } from '@/components/home/FeaturedApps';
import { Principles } from '@/components/home/Principles';
import { Newsletter } from '@/components/home/Newsletter';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { PostCard } from '@/components/blog/PostCard';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <FeaturedApps />
      <Principles />

      {/* Short intro that feeds the About page */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="One developer. Four apps. No shortcuts." />
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I build mobile apps on my own — design, code, support, the lot. Every app started as
              something I needed myself and couldn&apos;t find done properly: a budget I&apos;d
              actually keep up with, a receipt I could find eleven months later, a service history I
              could trust.
            </p>
            <p>
              Working alone forces a kind of honesty. There&apos;s no room for features nobody asked
              for, so every screen has to earn its place. Start with the real problem, remove
              everything that isn&apos;t essential, and make the next step obvious.
            </p>
            <Button href="/about" variant="secondary" className="mt-2">
              Read the full story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Latest writing */}
      {posts.length > 0 && (
        <Section className="border-t border-border">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Writing"
              title="Notes from building in public"
              description="Lessons, numbers and mistakes from shipping apps as a team of one."
            />
            <Button href="/blog" variant="secondary" className="shrink-0">
              All posts
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </Section>
      )}

      <Newsletter />
    </>
  );
}
