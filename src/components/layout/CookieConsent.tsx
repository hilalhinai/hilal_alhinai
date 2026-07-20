'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const STORAGE_KEY = 'cookie-consent';

/**
 * Lightweight consent banner. Analytics scripts should only be initialised
 * once `cookie-consent` is set to "accepted" (see AnalyticsScripts below).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked — do not show the banner */
    }
  }, []);

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-3xl border border-border bg-background/90 p-5 shadow-lift backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <p className="text-sm leading-relaxed text-muted">
            This site uses privacy-friendly analytics to understand what&apos;s useful. No personal
            data is sold or shared. See the{' '}
            <Link href="/privacy" className="text-foreground underline underline-offset-4">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-2">
            <Button size="sm" onClick={() => decide('accepted')}>
              Accept
            </Button>
            <Button size="sm" variant="secondary" onClick={() => decide('declined')}>
              Decline
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
