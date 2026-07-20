'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

type State = 'idle' | 'loading' | 'done' | 'error';

const inputClass =
  'w-full rounded-2xl border border-border bg-card px-4 py-3 text-[0.9375rem] placeholder:text-muted/70 transition-colors focus:border-accent';

/**
 * Contact form. Currently opens the visitor's mail client with a prefilled
 * message — swap `handleSubmit` for a POST to /api/contact (Resend, Formspree)
 * when you want server-side delivery.
 */
export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    try {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
      window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
      setState('done');
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update('name')}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={update('subject')}
          className={inputClass}
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={update('message')}
          className={inputClass}
          placeholder="Tell me what you need…"
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[0.9375rem] font-medium text-background transition-all duration-200 hover:bg-foreground/88 disabled:opacity-60"
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === 'done' ? (
            <motion.span
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2"
            >
              <Check size={16} /> Opening your mail app
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2"
            >
              Send message <Send size={15} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {state === 'error' && (
        <p role="alert" className="text-sm text-red-500">
          Something went wrong. Email {siteConfig.author.email} directly instead.
        </p>
      )}
    </form>
  );
}
