'use client';

import { motion } from 'framer-motion';
import type { App } from '@/lib/apps';
import { PhoneMockup } from './PhoneMockup';

/**
 * Horizontally scrollable screenshot rail. Falls back to styled device frames
 * until real screenshot assets are dropped into /public/apps/<slug>/.
 */
export function AppScreenshots({ app }: { app: App }) {
  return (
    <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:px-0">
      {app.screenshots.map((shot, i) => (
        <motion.figure
          key={shot.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="w-[62%] shrink-0 snap-center sm:w-[38%] lg:w-[30%]"
        >
          <PhoneMockup gradient={app.gradient} label={app.icon} />
          <figcaption className="mt-3 text-center text-xs text-muted">{shot.alt}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
