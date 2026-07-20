import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts, getPost, getRelatedPosts } from '@/lib/posts';
import { categoryLabel } from '@/lib/blog-config';
import { formatDate } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { PostCard } from '@/components/blog/PostCard';
import { Newsletter } from '@/components/home/Newsletter';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ['Hilal'],
      tags: post.tags,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <header className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
          <Container size="prose" className="py-16 sm:py-24">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={15} />
              All posts
            </Link>
            <Reveal className="mt-8">
              <Badge variant="accent">{categoryLabel(post.category)}</Badge>
              <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
                {post.description}
              </p>
              <p className="mt-6 text-sm text-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden> · </span>
                {post.readingMinutes} min read
              </p>
            </Reveal>
          </Container>
        </header>

        <Container size="prose" className="py-16">
          <div
            className="prose prose-lg max-w-none dark:prose-invert
              prose-headings:font-semibold prose-headings:tracking-tighter
              prose-p:leading-relaxed prose-p:text-muted
              prose-li:text-muted
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
              prose-strong:text-foreground
              prose-code:rounded prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
              prose-pre:rounded-2xl prose-pre:border prose-pre:border-border prose-pre:bg-card
              prose-blockquote:border-l-accent prose-blockquote:not-italic prose-blockquote:text-foreground/80
              prose-hr:border-border"
          >
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section className="border-t border-border">
          <h2 className="text-2xl font-semibold tracking-tighter">Keep reading</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </Section>
      )}

      <Newsletter />
    </>
  );
}
