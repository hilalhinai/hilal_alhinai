'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary: 'bg-foreground text-background hover:bg-foreground/88 shadow-soft',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft',
  secondary: 'bg-card text-foreground border border-border hover:bg-border/40',
  ghost: 'text-foreground/70 hover:text-foreground hover:bg-card',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-[3.25rem] px-7 text-base',
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

/**
 * Single button primitive used across the site. Renders as a Next.js Link,
 * an anchor, or a native button depending on the props supplied.
 * A subtle press animation gives every interaction physical feedback.
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external,
  type = 'button',
  onClick,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.975 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 28 },
  };

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
