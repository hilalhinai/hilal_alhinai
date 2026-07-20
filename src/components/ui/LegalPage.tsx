import { Container } from './Container';
import { Reveal } from './Reveal';
import { Badge } from './Badge';
import { formatDate } from '@/lib/utils';

/**
 * Shared shell for Privacy and Terms so both pages stay visually identical
 * and only the body content differs.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border">
        <Container size="prose" className="py-20 sm:py-24">
          <Reveal>
            <Badge variant="accent">{eyebrow}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
            <p className="mt-6 text-sm text-muted">
              Last updated <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </Reveal>
        </Container>
      </section>

      <Container size="prose" className="py-16">
        <div
          className="prose prose-lg max-w-none dark:prose-invert
            prose-headings:font-semibold prose-headings:tracking-tighter
            prose-h2:mt-12 prose-h2:text-2xl
            prose-p:leading-relaxed prose-p:text-muted
            prose-li:text-muted
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
            prose-strong:text-foreground"
        >
          {children}
        </div>
      </Container>
    </>
  );
}
