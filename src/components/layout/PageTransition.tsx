'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

/**
 * Fades and lifts each route into place. Deliberately short (240ms) so it
 * reads as polish rather than latency.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      id="main"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="pt-16"
    >
      {children}
    </motion.main>
  );
}
