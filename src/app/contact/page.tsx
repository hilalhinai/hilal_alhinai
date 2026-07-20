import type { Metadata } from 'next';
import { Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/contact/ContactForm';
import { SocialIcons } from '@/components/layout/SocialIcons';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about app support, collaboration, speaking or feedback. I read and reply to everything.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Hilal', description: 'Support, collaboration and feedback.', url: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <Badge variant="accent">Contact</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
              Say hello.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              App support, a feature idea, a collaboration, or just to tell me something is broken —
              it all reaches the same inbox, and I read every message.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="space-y-10">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Direct</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-foreground"
                  >
                    <Mail size={16} className="text-accent" />
                    {siteConfig.author.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5 text-muted">
                  <MessageSquare size={16} className="text-accent" />
                  Typical reply within 2 working days
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight">Elsewhere</h2>
              <SocialIcons className="mt-4" />
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h2 className="font-semibold tracking-tight">Reporting a bug?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Include the app name, your device and OS version, and what you expected to happen.
                It genuinely speeds things up.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
