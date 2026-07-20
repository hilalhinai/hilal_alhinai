import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from 'lucide-react';
import { ArrowLeft, Check, LifeBuoy, Lock, ScrollText } from 'lucide-react';
import { apps, getApp, platformLabels, statusLabels } from '@/lib/apps';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StoreBadge } from '@/components/apps/StoreBadge';
import { AppScreenshots } from '@/components/apps/AppScreenshots';
import { Faq } from '@/components/apps/Faq';
import { PhoneMockup } from '@/components/apps/PhoneMockup';
import { AppIcon } from '@/components/apps/AppIcon';
import { Newsletter } from '@/components/home/Newsletter';
import { BreadcrumbSchema, FaqSchema, SoftwareAppSchema } from '@/components/seo/JsonLd';

type Params = { params: Promise<{ slug: string }> };

/** Pre-render every app page at build time. */
export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      url: `/apps/${app.slug}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: app.name, description: app.description },
  };
}

/** Resolve a lucide icon by name, with a safe fallback. */
function FeatureIcon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  const Fallback = Icons.Sparkles;
  const Resolved = Icon ?? Fallback;
  return <Resolved {...props} />;
}

export default async function AppPage({ params }: Params) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const downloadLinks = [
    { store: 'appStore' as const, href: app.links.appStore },
    { store: 'playStore' as const, href: app.links.playStore },
    { store: 'macAppStore' as const, href: app.links.macAppStore },
  ].filter((l) => Boolean(l.href));

  return (
    <>
      <SoftwareAppSchema app={app} />
      <FaqSchema faq={app.faq} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Apps', url: '/apps' },
          { name: app.name, url: `/apps/${app.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
        <Container className="py-16 sm:py-24">
          <Link
            href="/apps"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            All apps
          </Link>

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="flex items-center gap-4">
                <AppIcon
                  icon={app.icon}
                  name={app.name}
                  className="h-16 w-16"
                  rounded="rounded-3xl"
                  textSize="text-3xl"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge variant={app.status === 'live' ? 'success' : 'default'}>
                    {statusLabels[app.status]}
                  </Badge>
                  <Badge variant="outline">{app.category}</Badge>
                </div>
              </div>

              <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl">
                {app.name}
              </h1>
              <p className="mt-4 text-balance text-xl leading-relaxed text-foreground/80">
                {app.tagline}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">{app.longDescription}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {downloadLinks.length > 0 ? (
                  downloadLinks.map((link) => (
                    <StoreBadge key={link.store} store={link.store} href={link.href!} />
                  ))
                ) : (
                  <Button href="/contact" size="lg">
                    Request early access
                  </Button>
                )}
              </div>

              <p className="mt-5 text-sm text-muted">
                Available on {app.platforms.map((p) => platformLabels[p]).join(', ')}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mx-auto w-full max-w-[16rem]">
              <PhoneMockup gradient={app.gradient} label={app.icon}>
                {app.screenshots[0] && (
                  <Image
                    src={app.screenshots[0].src}
                    alt={app.screenshots[0].alt}
                    fill
                    sizes="256px"
                    className="object-cover"
                    priority
                  />
                )}
              </PhoneMockup>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeading eyebrow="Why it helps" title="What changes when you use it" />
        <div className="mt-14 grid gap-x-10 gap-y-11 md:grid-cols-3">
          {app.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.07}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent">
                <Check size={17} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{benefit.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Screenshots */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="A look inside" title={`${app.name} in use`} />
        <div className="mt-14">
          <AppScreenshots app={app} />
        </div>
      </Section>

      {/* Features */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Features" title="Everything included" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {app.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-foreground/15">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-accent">
                  <FeatureIcon name={feature.icon} size={18} />
                </span>
                <h3 className="mt-5 font-semibold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Reveal delay={0.1}>
            <Faq items={app.faq} />
          </Reveal>
        </div>
      </Section>

      {/* Legal + support */}
      <Section className="border-t border-border" size="sm">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Lock, title: 'Privacy', detail: 'How this app handles your data.', href: '/privacy' },
            { icon: ScrollText, title: 'Terms', detail: 'The terms that apply to use.', href: '/terms' },
            { icon: LifeBuoy, title: 'Support', detail: 'Questions, bugs and feedback.', href: app.links.support ?? '/contact' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Link
                href={item.href}
                className="flex h-full items-start gap-4 rounded-3xl border border-border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-card"
              >
                <item.icon size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <span className="block font-medium tracking-tight">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Built and supported by {siteConfig.author.name}, an independent developer.
        </p>
      </Section>

      <Newsletter />
    </>
  );
}
