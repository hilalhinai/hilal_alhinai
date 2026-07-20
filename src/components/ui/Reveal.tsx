'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const;

/**
 * Scroll-triggered entrance animation. Animates once, respects
 * prefers-reduced-motion, and never blocks content from rendering.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof typeof tags;
}) {
  const reduce = useReducedMotion();
  const MotionTag = tags[as];

  return (
    <MotionTag
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
