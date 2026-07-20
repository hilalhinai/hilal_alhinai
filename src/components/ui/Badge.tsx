import { cn } from '@/lib/utils';

type Variant = 'default' | 'accent' | 'outline' | 'success';

const variants: Record<Variant, string> = {
  default: 'bg-card text-muted border border-border',
  accent: 'bg-accent/10 text-accent border border-accent/20',
  outline: 'border border-border text-foreground/70',
  success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
};

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
