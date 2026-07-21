import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that apply to using this website and the mobile applications published by Hilal.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The rules for using this website and the apps. Written to be readable rather than impressive."
      updated="2026-07-01"
    >
      <h2>Agreement</h2>
      <p>
        By using {siteConfig.url.replace('https://', '')} or any application published by{' '}
        {siteConfig.author.fullName}, you agree to these terms. If you do not agree, please do not use
        them.
      </p>

      <h2>Licence to use the apps</h2>
      <p>
        You are granted a personal, non-exclusive, non-transferable licence to use the apps on
        devices you own or control, for personal or internal business purposes. You may not
        redistribute, resell, reverse-engineer or attempt to extract the source code, except where
        such restriction is prohibited by law.
      </p>

      <h2>Your content</h2>
      <p>
        Data you enter — transactions, receipts, vehicle records, contacts — remains yours. No
        ownership over it is claimed. You are responsible for keeping your own backups and for the
        legality of what you store.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use the products for unlawful purposes.</li>
        <li>Do not attempt to disrupt, overload or gain unauthorised access to any service.</li>
        <li>Do not misrepresent the products as your own.</li>
      </ul>

      <h2>Purchases and subscriptions</h2>
      <p>
        Paid features are billed through the Apple App Store or Google Play, and their refund
        policies apply. Subscriptions renew automatically until cancelled in your platform account
        settings. Prices may change with notice, and existing subscription periods are not affected.
      </p>

      <h2>Availability</h2>
      <p>
        These products are built and maintained by one person. Reasonable effort goes into keeping
        everything working, but uninterrupted or error-free operation cannot be guaranteed. Features
        may change, and services may be discontinued with reasonable notice.
      </p>

      <h2>No warranty</h2>
      <p>
        The products are provided &ldquo;as is&rdquo;, without warranties of any kind, express or
        implied, to the maximum extent permitted by law. Financial, tax and maintenance features are
        tools to assist you — they are not professional financial, tax or mechanical advice, and you
        remain responsible for your own decisions.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, liability for any indirect, incidental or consequential
        loss, including loss of data or profit, is excluded. Total liability will not exceed the
        amount you paid in the twelve months preceding the claim.
      </p>

      <h2>Third-party content</h2>
      <p>
        Links to external sites are provided for convenience. No responsibility is taken for their
        content or practices.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        These terms may be updated. The date at the top reflects the latest revision, and continued
        use after a change constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? <Link href="/contact">Contact me</Link> or email{' '}
        <a href={`mailto:${siteConfig.author.email}`}>{siteConfig.author.email}</a>.
      </p>
    </LegalPage>
  );
}
