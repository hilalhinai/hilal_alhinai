import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { BlogExplorer } from '@/components/blog/BlogExplorer';
import { Newsletter } from '@/components/home/Newsletter';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing on app development, product design, productivity, personal finance and building software in public as an independent developer.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Hilal',
    description: 'Notes on app development and building in public.',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <Badge variant="accent">Blog</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
              What I&apos;m learning, written down.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              Notes on app development, design, productivity and the unglamorous reality of shipping
              software alone.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <BlogExplorer posts={posts} />
      </Section>

      <Newsletter />
    </>
  );
}
