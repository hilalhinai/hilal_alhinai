import { cn } from '@/lib/utils';

/**
 * Pure-CSS device frame. Avoids shipping heavy mockup images and keeps the
 * hero fully responsive. Drop a screenshot in as `children` when available.
 */
export function PhoneMockup({
  children,
  className,
  gradient = 'from-accent/25 via-accent/5 to-transparent',
  label,
}: {
  children?: React.ReactNode;
  className?: string;
  gradient?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-full rounded-[2.25rem] border border-border bg-background p-2 shadow-lift',
        className,
      )}
    >
      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-card">
        <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />
        {children ? (
          /* Real screenshot: fills the screen. App Store captures already
             include their own status bar, so the fake notch is skipped. */
          <div className="absolute inset-0">{children}</div>
        ) : (
          <>
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-foreground/85" />
            <div className="relative grid h-full w-full place-items-center p-4 text-center">
              <span className="text-4xl opacity-90" aria-hidden>
                {label}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
