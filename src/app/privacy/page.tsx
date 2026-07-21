import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How this website and the apps built by Hilal collect, use and protect your data. Local-first by default.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="The short version: I collect as little as possible, I don't sell anything, and your app data stays on your device wherever it technically can."
      updated="2026-07-01"
    >
      <h2>Who this applies to</h2>
      <p>
        This policy covers {siteConfig.url.replace('https://', '')} and the mobile applications
        published by {siteConfig.author.fullName}, including Mira: Money &amp; Mood.
      </p>

      <h2>What the website collects</h2>
      <ul>
        <li>
          <strong>Analytics.</strong> Aggregated, privacy-friendly page-view statistics — pages
          visited, referrer and approximate country. No cookies are used for advertising, and no
          individual profiles are built.
        </li>
        <li>
          <strong>Newsletter.</strong> If you subscribe, your email address is stored with the email
          provider solely to send you updates. You can unsubscribe from any email.
        </li>
        <li>
          <strong>Contact form.</strong> Anything you send by email is kept only as long as needed
          to reply and keep a support record.
        </li>
      </ul>

      <h2>What the apps collect</h2>
      <p>
        The apps are designed to be local-first. Financial records, receipts, vehicle logs and
        contacts are stored on your device. Where cloud sync is offered it is optional and, where
        supported by the platform, end-to-end encrypted — meaning the contents cannot be read by
        anyone but you.
      </p>
      <ul>
        <li>No app sells personal data to third parties. Ever.</li>
        <li>No app requires an account to use its core features.</li>
        <li>
          Crash and performance diagnostics, if enabled, are anonymised and used only to fix bugs.
        </li>
      </ul>

      <h2>AI processing</h2>
      <p>
        Features described as AI-powered run on your device wherever technically possible. Where a
        feature must call a remote model, this is stated clearly in the app before you use it, only
        the minimum necessary content is sent, and it is not used to train third-party models.
      </p>

      <h2>Cookies</h2>
      <p>
        This site uses a single local storage entry to remember your theme preference and your
        cookie choice. Analytics are only initialised if you accept.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request access to, correction of, or deletion of any personal data held about you,
        and you can withdraw consent at any time. Email{' '}
        <a href={`mailto:${siteConfig.author.email}`}>{siteConfig.author.email}</a> and I will
        respond within 30 days.
      </p>

      <h2>Children</h2>
      <p>
        These products are not directed at children under 13, and no data is knowingly collected
        from them.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes materially, the date at the top of this page will be updated and, for
        significant changes, subscribers will be notified by email.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? <Link href="/contact">Get in touch</Link> or email{' '}
        <a href={`mailto:${siteConfig.author.email}`}>{siteConfig.author.email}</a>.
      </p>
    </LegalPage>
  );
}
