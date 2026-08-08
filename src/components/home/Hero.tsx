'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { apps, getFeaturedApps } from '@/lib/apps';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/apps/PhoneMockup';

const featured = getFeaturedApps();
const liveCount = apps.filter((app) => app.status === 'live').length;

/** How many phones the device cluster shows. */
const CLUSTER_SIZE = 3;

export function Hero() {
  const reduce = useReducedMotion();

  // Render a stable set on the server / first paint to avoid a hydration
  // mismatch, then pick a random set after mount so revisits can show
  // different apps in the floating cluster.
  const [cluster, setCluster] = useState(() => featured.slice(0, CLUSTER_SIZE));

  useEffect(() => {
    if (featured.length <= CLUSTER_SIZE) return; // nothing to rotate
    const shuffled = [...featured];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCluster(shuffled.slice(0, CLUSTER_SIZE));
  }, []);

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Layered background: soft accent glow over a masked grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-texture opacity-60" aria-hidden />

      <Container className="pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <motion.div {...item(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted">
                <Sparkles size={13} className="text-accent" />
                Independent app developer
              </span>
            </motion.div>

            <motion.h1
              {...item(0.08)}
              className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tighter sm:text-6xl lg:text-[4.25rem]"
            >
              Building apps that{' '}
              <span className="text-accent">solve real problems.</span>
            </motion.h1>

            <motion.p
              {...item(0.16)}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
            >
              {siteConfig.description.split('.')[0]}.
            </motion.p>

            <motion.div {...item(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/apps" size="lg">
                View My Apps
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/about" size="lg" variant="secondary">
                About Me
              </Button>
            </motion.div>

            <motion.dl {...item(0.32)} className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
              {[
                {
                  value: String(liveCount),
                  label: liveCount === 1 ? 'App on the App Store' : 'Apps on the App Store',
                },
                { value: 'iOS', label: 'iPhone & iPad' },
                { value: '100%', label: 'Independent' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-tighter">{stat.value}</dt>
                  <dd className="mt-0.5 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Device cluster */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4 sm:gap-6"
            aria-hidden
          >
            {cluster.map((app, i) => (
              <motion.div
                key={app.slug}
                className="flex-1"
                animate={reduce ? undefined : { y: [0, i === 1 ? -12 : -6, 0] }}
                transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                style={{ marginBottom: i === 1 ? '2.5rem' : 0 }}
              >
                <PhoneMockup gradient={app.gradient} label={app.icon}>
                  {app.screenshots[0] && (
                    <Image
                      src={app.screenshots[0].src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, 200px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  )}
                </PhoneMockup>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
