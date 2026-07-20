import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Base surface for all card content. When `href` is provided the whole card
 * becomes a single accessible link target.
 */
export function Card({
  children,
  className,
  href,
  interactive = true,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  interactive?: boolean;
}) {
  const classes = cn(
    'relative overflow-hidden rounded-3xl border border-border bg-card',
    interactive &&
      'transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'block')}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
