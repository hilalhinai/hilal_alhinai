import { Apple, Globe, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type Store = 'appStore' | 'playStore' | 'macAppStore' | 'website';

const config: Record<Store, { icon: typeof Apple; sub: string; main: string }> = {
  appStore: { icon: Apple, sub: 'Download on the', main: 'App Store' },
  macAppStore: { icon: Apple, sub: 'Download on the', main: 'Mac App Store' },
  playStore: { icon: Play, sub: 'Get it on', main: 'Google Play' },
  website: { icon: Globe, sub: 'Visit the', main: 'Website' },
};

/** Store download badge styled to match the site rather than platform assets. */
export function StoreBadge({
  store,
  href,
  className,
}: {
  store: Store;
  href: string;
  className?: string;
}) {
  const { icon: Icon, sub, main } = config[store];
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border border-border bg-foreground px-4 py-2.5 text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift',
        className,
      )}
    >
      <Icon size={22} className="shrink-0" />
      <span className="text-left leading-tight">
        <span className="block text-[0.625rem] uppercase tracking-wide opacity-70">{sub}</span>
        <span className="block text-sm font-semibold tracking-tight">{main}</span>
      </span>
    </a>
  );
}
