'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';

/**
 * Sticky, frosted navigation. Gains a border and stronger blur once the page
 * is scrolled, and collapses into a full-screen sheet on mobile.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet on navigation and lock body scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => {
    // Hash links (e.g. /apps#games) are in-page jumps — never treat them as the
    // active route, so they don't fight the real page link for the nav pill.
    if (href.includes('#')) return false;
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border' : 'bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          <Link
            href="/"
            className="text-[1.0625rem] font-semibold tracking-tighter"
            aria-label={`${siteConfig.name} — home`}
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-foreground'
                      : 'text-muted hover:text-foreground',
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-card"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href="/apps" size="sm">
                View Apps
              </Button>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass fixed inset-x-0 top-16 bottom-0 border-t border-border md:hidden"
          >
            <Container className="py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block rounded-2xl px-4 py-3.5 text-lg font-medium tracking-tight transition-colors',
                        isActive(link.href) ? 'bg-card text-foreground' : 'text-muted',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button href="/apps" size="lg" className="mt-6 w-full">
                View My Apps
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
