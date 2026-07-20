import Link from 'next/link';
import { footerSections, siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { NewsletterForm } from '@/components/home/NewsletterForm';
import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + newsletter */}
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-semibold tracking-tighter">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">Get new apps and posts in your inbox</p>
              <NewsletterForm compact />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold tracking-tight">{section.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
}
