import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[62vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-balance leading-relaxed text-muted">
        The link may be out of date, or the page may have moved. The apps and the blog are both
        still where you left them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back home</Button>
        <Button href="/apps" variant="secondary">
          View apps
        </Button>
      </div>
    </Container>
  );
}
