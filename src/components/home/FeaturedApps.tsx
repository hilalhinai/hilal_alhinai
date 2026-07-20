import { ArrowRight } from 'lucide-react';
import { getFeaturedApps } from '@/lib/apps';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AppCard } from '@/components/apps/AppCard';

export function FeaturedApps() {
  const featured = getFeaturedApps();

  return (
    <Section id="apps" className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Apps built to be used every day"
          description="Small, focused tools for money, admin and the everyday things that quietly take up time."
        />
        <Button href="/apps" variant="secondary" className="shrink-0">
          All apps
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((app, i) => (
          <AppCard key={app.slug} app={app} index={i} />
        ))}
      </div>
    </Section>
  );
}
