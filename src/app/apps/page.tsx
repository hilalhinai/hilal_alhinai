import type { Metadata } from 'next';
import { apps } from '@/lib/apps';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { AppCard, FutureAppCard } from '@/components/apps/AppCard';
import { Newsletter } from '@/components/home/Newsletter';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Mira: Money & Mood — a mindful budgeting and mood tracker for iPhone and iPad, built independently.',
  alternates: { canonical: '/apps' },
  openGraph: {
    title: 'Apps by Hilal — practical mobile apps',
    description:
      'Mira: Money & Mood — practical apps that solve everyday problems.',
    url: '/apps',
  },
};

export default function AppsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Apps', url: '/apps' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <Badge variant="accent">Portfolio</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
              Small apps for problems that aren&apos;t small.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              Each one started as something I needed myself. All are designed to be fast, private
              and genuinely useful on the days you&apos;re busiest.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <AppCard key={app.slug} app={app} index={i} />
          ))}
          <FutureAppCard index={apps.length} />
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
