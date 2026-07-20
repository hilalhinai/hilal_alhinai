import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Renders an app's icon in a rounded tile.
 *
 * The `icon` field in src/lib/apps.ts is either an emoji ("💜") or a path to
 * an asset in /public ("/apps/mira/icon.png"). Anything starting with "/" is
 * treated as an image, so an app can start life with an emoji and switch to a
 * real icon later without touching any component.
 */
export function AppIcon({
  icon,
  name,
  className,
  rounded = 'rounded-2xl',
  textSize = 'text-2xl',
}: {
  icon: string;
  name: string;
  /** Sizing utilities, e.g. "h-14 w-14". */
  className?: string;
  rounded?: string;
  textSize?: string;
}) {
  if (icon.startsWith('/')) {
    return (
      <div
        className={cn(
          'relative shrink-0 overflow-hidden border border-border shadow-soft',
          rounded,
          className,
        )}
      >
        <Image src={icon} alt={`${name} app icon`} fill sizes="80px" className="object-cover" />
      </div>
    );
  }

  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center border border-border bg-background shadow-soft',
        rounded,
        textSize,
        className,
      )}
      aria-hidden
    >
      {icon}
    </span>
  );
}
