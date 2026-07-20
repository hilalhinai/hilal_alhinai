import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { NewsletterForm } from './NewsletterForm';

export function Newsletter() {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tighter sm:text-4xl">
            Follow the build
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-lg leading-relaxed text-muted">
            One email when a new app ships or a new post goes up. Honest numbers, real lessons,
            nothing padded.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
