import type { Metadata } from 'next';
import { Code2, LifeBuoy, Megaphone, PenTool, Smartphone } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Independent mobile app developer building practical apps for iOS and Android — design, code and support, all handled solo.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Hilal — Independent App Developer',
    description: 'How I design, build and support practical mobile apps as a team of one.',
    url: '/about',
  },
};

const roles = [
  {
    icon: Code2,
    title: 'Independent developer',
    description:
      'Every app is built and shipped solo — from the first sketch to the App Store review queue.',
  },
  {
    icon: PenTool,
    title: 'Product designer',
    description:
      'Design comes before code. If the flow does not make sense on paper, no amount of engineering will save it.',
  },
  {
    icon: Smartphone,
    title: 'Mobile engineer',
    description:
      'Cross-platform apps for iOS and Android, built to open instantly and work offline.',
  },
  {
    icon: LifeBuoy,
    title: 'Support, in person',
    description:
      'Every support email reaches me directly. No ticket queue, no outsourced first line.',
  },
  {
    icon: Megaphone,
    title: 'Building in public',
    description:
      'What ships, what fails and what the numbers actually look like — written down as it happens.',
  },
];

const timeline = [
  {
    year: 'Now',
    title: 'Three apps live',
    detail:
      'Mira, Ritmio and Renavo are all in the App Store. Growing them, listening to what people actually use, and writing about the process as it happens.',
  },
  {
    year: '2026',
    title: 'First app in the store',
    detail:
      'Mira: Money & Mood launched on iPhone and iPad, with real users, real feedback and a lot of rewriting. Ritmio and Renavo followed the same year.',
  },
  {
    year: '2024',
    title: 'From side project to product',
    detail:
      'Started rebuilding my own throwaway tools properly, learning design and mobile development in the evenings.',
  },
  {
    year: 'Earlier',
    title: 'Scratching my own itches',
    detail:
      'Years of small scripts and half-finished utilities, built to solve whatever was annoying me that month.',
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <Badge variant="accent">About</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
              I build the apps I kept wishing existed.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              Small, fast, private tools for the everyday problems that quietly cost people hours.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Biography */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tighter">The short version</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m Hilal — an independent mobile app developer based in Oman. I design, build,
              ship and support every app myself.
            </p>
            <p>
              It started the way most of these things do: with a problem I couldn&apos;t solve
              properly using anything already on the App Store. Every budgeting app I tried showed
              me where my money went. None of them could tell me why. The spreadsheet knew about the
              purchase; it knew nothing about the bad afternoon behind it.
            </p>
            <p>
              That became Mira — a budgeting app that tracks the feeling alongside the figure, so the
              pattern driving your spending finally becomes visible.
            </p>
            <p>
              Working alone shapes what gets built. There is no roadmap handed down from anyone, and
              no pressure to add features that demo well but nobody uses. It also means every
              shortcut becomes my problem later, so I take fewer of them than I would on someone
              else&apos;s deadline.
            </p>
            <p>
              I work in public. I write about what I ship, what breaks, and what the numbers
              actually look like — partly because it is useful to other independent developers, and
              partly because building without an audience is a lonely way to spend your evenings.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Roles */}
      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="What I do"
          title="Every job, one desk"
          description="Independent means there is nobody else to hand any of this to."
        />
        <div className="mt-14 grid gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.06}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card text-accent">
                <role.icon size={19} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{role.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{role.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Journey" title="How I got here" />
        <ol className="mt-14 space-y-0">
          {timeline.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.06} as="li">
              <div className="grid gap-2 border-t border-border py-8 sm:grid-cols-[8rem_1fr] sm:gap-10">
                <p className="text-sm font-medium text-accent">{entry.year}</p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{entry.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tighter">Want to see the work?</h2>
            <p className="mt-2 text-muted">Start with the apps, or read what I&apos;m doing now.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/apps">View My Apps</Button>
            <Button href="/now" variant="secondary">
              What I&apos;m doing now
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
