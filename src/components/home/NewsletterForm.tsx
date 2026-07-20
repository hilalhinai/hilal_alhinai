'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type State = 'idle' | 'loading' | 'done' | 'error';

/**
 * Newsletter capture, backed by beehiiv.
 *
 * Posts to /api/subscribe rather than calling beehiiv directly, so the API
 * key stays on the server. See src/app/api/subscribe/route.ts.
 */
export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return setState('error');
    }

    setState('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.');
        return setState('error');
      }

      setState('done');
      setEmail('');
    } catch {
      setErrorMessage('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div
        className={cn(
          'flex flex-col gap-2 sm:flex-row',
          !compact && 'mx-auto max-w-md',
        )}
      >
        <label htmlFor={compact ? 'email-footer' : 'email-cta'} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? 'email-footer' : 'email-cta'}
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === 'error') setState('idle');
          }}
          placeholder="you@example.com"
          className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-[0.9375rem] text-foreground placeholder:text-muted/70 transition-colors focus:border-accent"
        />
        <button
          type="submit"
          disabled={state === 'loading' || state === 'done'}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-[0.9375rem] font-medium text-background transition-all duration-200 hover:bg-foreground/88 disabled:opacity-60"
        >
          <AnimatePresence mode="wait" initial={false}>
            {state === 'done' ? (
              <motion.span
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2"
              >
                <Check size={16} /> Subscribed
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2"
              >
                {state === 'loading' ? 'Joining…' : 'Subscribe'}
                {state !== 'loading' && <ArrowRight size={15} />}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <p
        role={state === 'error' ? 'alert' : undefined}
        className={cn(
          'mt-2.5 text-xs',
          compact ? 'text-left' : 'text-center',
          state === 'error' ? 'text-red-500' : 'text-muted',
        )}
      >
        {state === 'error'
          ? (errorMessage ?? 'Please enter a valid email address.')
          : state === 'done'
            ? 'Check your inbox to confirm.'
            : 'No spam. Unsubscribe any time.'}
      </p>
    </form>
  );
}
