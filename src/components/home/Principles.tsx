import { Gauge, Lock, PenTool, Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    icon: PenTool,
    title: 'Designed, not decorated',
    description:
      'Every screen earns its place. If a feature does not make the app clearer, it does not ship.',
  },
  {
    icon: Sparkles,
    title: 'Automate the boring parts',
    description:
      'The best feature is the one that removes a task entirely. If something can happen quietly in the background, it should.',
  },
  {
    icon: Lock,
    title: 'Privacy as a default',
    description:
      'Your data belongs to you. Local-first storage, no tracking for its own sake, no selling anything on.',
  },
  {
    icon: Gauge,
    title: 'Fast, always',
    description:
      'Apps should open instantly and work offline. Speed is the feature people notice every single day.',
  },
];

export function Principles() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="How I build"
        title="Four principles behind every app"
        description="A small set of rules that keep the work focused when it would be easier to add more."
      />
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="flex gap-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card text-accent">
                <p.icon size={19} />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
