import { cn } from '@/lib/utils';
import { Container } from './Container';

/** Vertical rhythm wrapper for page sections. */
export function Section({
  className,
  containerClassName,
  children,
  id,
  size = 'default',
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  size?: 'sm' | 'default' | 'lg';
}) {
  return (
    <section
      id={id}
      className={cn(
        size === 'sm' && 'py-14 sm:py-16',
        size === 'default' && 'py-20 sm:py-28',
        size === 'lg' && 'py-24 sm:py-36',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
