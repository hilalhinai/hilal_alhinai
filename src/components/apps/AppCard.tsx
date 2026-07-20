import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { statusLabels, platformLabels, type App } from '@/lib/apps';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/**
 * Reusable app card used on the home page and the apps index.
 * `variant="feature"` renders a taller card with a device preview.
 */
export function AppCard({
  app,
  index = 0,
  variant = 'default',
}: {
  app: App;
  index?: number;
  variant?: 'default' | 'feature';
}) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <Card href={`/apps/${app.slug}`} className="group h-full">
        {/* Accent wash */}
        <div
          className={cn(
            'absolute inset-x-0 top-0 h-40 bg-gradient-to-b opacity-70 transition-opacity duration-500 group-hover:opacity-100',
            app.gradient,
          )}
          aria-hidden
        />

        <div className={cn('relative flex h-full flex-col p-7', variant === 'feature' && 'sm:p-8')}>
          <div className="flex items-start justify-between gap-4">
            <div
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-background text-2xl shadow-soft"
              aria-hidden
            >
              {app.icon}
            </div>
            <ArrowUpRight
              size={20}
              className="mt-1 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge variant={app.status === 'live' ? 'success' : 'default'}>
              {statusLabels[app.status]}
            </Badge>
            <Badge variant="outline">{app.category}</Badge>
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-tighter">{app.name}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{app.description}</p>

          <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-muted">
            {app.platforms.map((p) => (
              <span key={p} className="rounded-md bg-background px-2 py-1 tracking-tight">
                {platformLabels[p]}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

/** Placeholder card inviting visitors to follow along for future releases. */
export function FutureAppCard({ index = 0 }: { index?: number }) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <Link
        href="/contact"
        className="group flex h-full min-h-[19rem] flex-col items-center justify-center rounded-3xl border border-dashed border-border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card"
      >
        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-dashed border-border text-2xl text-muted">
          +
        </span>
        <h3 className="mt-6 text-xl font-semibold tracking-tighter">More apps coming</h3>
        <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
          New apps ship regularly. Tell me what problem you&apos;d like solved next.
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Suggest an idea
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
