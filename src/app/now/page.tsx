import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { nowSections, nowUpdated } from '@/lib/now';
import { formatDate } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Newsletter } from '@/components/home/Newsletter';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Now',
  description:
    'What I am working on right now — current apps, goals, projects, books and learning.',
  alternates: { canonical: '/now' },
  openGraph: {
    title: 'Now — what Hilal is working on',
    description: 'A snapshot of current apps, goals, projects and reading.',
    url: '/now',
  },
};

function SectionIcon({ name }: { name: string }) {
  const Icon =
    (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[name] ??
    Icons.Circle;
  return <Icon size={18} />;
}

export default function NowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Now', url: '/now' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <Badge variant="accent">Now</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
              What I&apos;m focused on right now.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              A short, honest snapshot of current work — updated when things genuinely change, not
              on a schedule.
            </p>
            <p className="mt-6 text-sm text-muted">
              Last updated <time dateTime={nowUpdated}>{formatDate(nowUpdated)}</time>
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="space-y-0">
          {nowSections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <div className="grid gap-6 border-b border-border py-10 sm:grid-cols-[14rem_1fr] sm:gap-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-accent">
                    <SectionIcon name={section.icon} />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
                </div>
                <ul className="space-y-5">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-medium tracking-tight">{item.title}</p>
                      <p className="mt-1 leading-relaxed text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-sm leading-relaxed text-muted">
            This is a{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              now page
            </a>
            , inspired by Derek Sivers.
          </p>
        </Reveal>
      </Section>

      <Newsletter />
    </>
  );
}
