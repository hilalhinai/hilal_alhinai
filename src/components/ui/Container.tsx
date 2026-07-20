import { cn } from '@/lib/utils';

/** Horizontal page gutter + max width. Used by every section. */
export function Container({
  className,
  children,
  size = 'default',
}: {
  className?: string;
  children: React.ReactNode;
  size?: 'default' | 'prose' | 'wide';
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8',
        size === 'default' && 'max-w-content',
        size === 'prose' && 'max-w-prose',
        size === 'wide' && 'max-w-[88rem]',
        className,
      )}
    >
      {children}
    </div>
  );
}
