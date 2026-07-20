/**
 * App catalogue.
 *
 * Adding a new app = appending one object here. Everything else — the apps
 * grid, the individual app page at /apps/[slug], the sitemap, the footer
 * links and the structured data — is generated from this array.
 */

export type Platform = 'ios' | 'android' | 'macos' | 'web';

export type AppStatus = 'live' | 'beta' | 'in-development' | 'planned';

export interface AppFeature {
  title: string;
  description: string;
  /** Any lucide-react icon name; resolved at render time. */
  icon: string;
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppScreenshot {
  src: string;
  alt: string;
}

export interface App {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Longer copy shown on the individual app page hero. */
  longDescription: string;
  status: AppStatus;
  category: string;
  /** Emoji or path to an icon asset — used in cards and hero. */
  icon: string;
  /** Tailwind gradient classes used for the app's accent surface. */
  gradient: string;
  featured: boolean;
  releaseDate?: string;
  platforms: Platform[];
  links: {
    appStore?: string;
    playStore?: string;
    macAppStore?: string;
    website?: string;
    support?: string;
  };
  benefits: { title: string; description: string }[];
  features: AppFeature[];
  screenshots: AppScreenshot[];
  faq: AppFaq[];
}

export const apps: App[] = [
  {
    slug: 'budget',
    name: 'Budget',
    tagline: 'Know where your money goes — without the spreadsheet.',
    description:
      'A calm, AI-assisted budgeting app that turns everyday spending into clear, actionable insight.',
    longDescription:
      'Budget helps you plan, track and understand your money in minutes a week. It learns how you spend, categorises transactions automatically, and tells you in plain language what changed this month and why — no charts to decode, no manual tagging.',
    status: 'live',
    category: 'Personal Finance',
    icon: '💰',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    featured: true,
    releaseDate: '2025-09-01',
    platforms: ['ios', 'android'],
    links: {
      appStore: 'https://apps.apple.com/app/id000000000',
      playStore: 'https://play.google.com/store/apps/details?id=app.hilal.budget',
      website: '/apps/budget',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Five minutes a week',
        description:
          'Automatic categorisation means you review, not re-enter. Budgeting stops being a chore.',
      },
      {
        title: 'Insight, not data dumps',
        description:
          'Plain-language summaries explain what changed and what to do about it — no financial jargon.',
      },
      {
        title: 'Private by design',
        description:
          'Your financial data stays on your device. No bank credentials stored, no data sold, ever.',
      },
    ],
    features: [
      {
        title: 'Smart categorisation',
        description: 'On-device AI sorts transactions and learns your corrections instantly.',
        icon: 'Sparkles',
      },
      {
        title: 'Envelope budgets',
        description: 'Assign every unit of currency a job with flexible monthly envelopes.',
        icon: 'Wallet',
      },
      {
        title: 'Recurring detection',
        description: 'Subscriptions and bills are found automatically and forecast ahead.',
        icon: 'Repeat',
      },
      {
        title: 'Multi-currency',
        description: 'Track accounts in several currencies with daily rate updates.',
        icon: 'Globe',
      },
      {
        title: 'Goals & savings',
        description: 'Set targets and see exactly what you need to set aside each month.',
        icon: 'Target',
      },
      {
        title: 'Export anywhere',
        description: 'CSV and PDF exports so your data is never locked in.',
        icon: 'Download',
      },
    ],
    screenshots: [
      { src: '/apps/budget/screen-1.png', alt: 'Budget overview screen showing monthly envelopes' },
      { src: '/apps/budget/screen-2.png', alt: 'Transaction list with automatic categories' },
      { src: '/apps/budget/screen-3.png', alt: 'Monthly insight summary written in plain language' },
    ],
    faq: [
      {
        question: 'Does Budget connect to my bank?',
        answer:
          'You can import statements manually or connect supported institutions. Bank credentials are never stored on our servers.',
      },
      {
        question: 'Is there a free version?',
        answer:
          'Yes. The free tier covers unlimited manual tracking. Pro unlocks AI insight summaries, forecasting and unlimited accounts.',
      },
      {
        question: 'Where is my data stored?',
        answer:
          'Locally on your device, with optional end-to-end encrypted iCloud sync. We cannot read your financial data.',
      },
    ],
  },
  {
    slug: 'receipt-vault',
    name: 'Receipt Vault',
    tagline: 'Snap a receipt. Never lose an expense again.',
    description:
      'Scan, extract and organise receipts automatically — built for freelancers and small businesses.',
    longDescription:
      'Receipt Vault turns a photo of a crumpled receipt into structured, searchable data in seconds. Merchant, date, tax and totals are extracted on device, then organised into folders your accountant will actually thank you for.',
    status: 'live',
    category: 'Business',
    icon: '🧾',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    featured: true,
    releaseDate: '2025-11-15',
    platforms: ['ios', 'android'],
    links: {
      appStore: 'https://apps.apple.com/app/id000000001',
      playStore: 'https://play.google.com/store/apps/details?id=app.hilal.receiptvault',
      website: '/apps/receipt-vault',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Tax season in an afternoon',
        description: 'Everything is already captured, categorised and exportable when you need it.',
      },
      {
        title: 'Works offline',
        description: 'Scanning and extraction run on device — no signal required at the till.',
      },
      {
        title: 'Audit-ready records',
        description: 'Original images kept alongside extracted data, with a full change history.',
      },
    ],
    features: [
      {
        title: 'AI text extraction',
        description: 'Merchant, date, tax and total pulled automatically from any receipt.',
        icon: 'ScanLine',
      },
      {
        title: 'Smart folders',
        description: 'Auto-organise by client, project, category or tax year.',
        icon: 'FolderTree',
      },
      {
        title: 'Full-text search',
        description: 'Find any receipt by merchant, amount or even an item on the line.',
        icon: 'Search',
      },
      {
        title: 'Accountant export',
        description: 'One-tap CSV, PDF or ZIP bundles ready to hand over.',
        icon: 'FileSpreadsheet',
      },
      {
        title: 'Mileage & cash log',
        description: 'Capture non-receipt expenses in the same place.',
        icon: 'Car',
      },
      {
        title: 'Encrypted backup',
        description: 'Optional encrypted cloud backup so nothing is lost with a lost phone.',
        icon: 'ShieldCheck',
      },
    ],
    screenshots: [
      { src: '/apps/receipt-vault/screen-1.png', alt: 'Receipt scanning camera view' },
      { src: '/apps/receipt-vault/screen-2.png', alt: 'Extracted receipt details ready to confirm' },
      { src: '/apps/receipt-vault/screen-3.png', alt: 'Smart folders organised by tax year' },
    ],
    faq: [
      {
        question: 'How accurate is the extraction?',
        answer:
          'Typically above 95% on clear receipts. Every field is editable, and corrections improve future scans.',
      },
      {
        question: 'Can I use it for a whole team?',
        answer: 'Shared workspaces are on the roadmap for the next major release.',
      },
      {
        question: 'Does it handle non-English receipts?',
        answer: 'Yes — including Arabic, with more languages added regularly.',
      },
    ],
  },
  {
    slug: 'car-maintenance',
    name: 'Car Maintenance',
    tagline: 'Every service, every cost, one clear history.',
    description:
      'Track servicing, fuel, expenses and reminders for every vehicle you own.',
    longDescription:
      'Car Maintenance keeps a complete, trustworthy service history for each of your vehicles. It reminds you before something is due, tracks what you actually spend, and gives you a clean record that adds real value at resale.',
    status: 'beta',
    category: 'Utilities',
    icon: '🚗',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-03-01',
    platforms: ['ios', 'android'],
    links: {
      appStore: 'https://apps.apple.com/app/id000000002',
      website: '/apps/car-maintenance',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Never miss a service',
        description: 'Reminders based on both mileage and time, so nothing slips through.',
      },
      {
        title: 'Know your true cost',
        description: 'Cost per kilometre across fuel, servicing and repairs — per vehicle.',
      },
      {
        title: 'Resale-ready history',
        description: 'Export a complete, receipted service log that buyers trust.',
      },
    ],
    features: [
      {
        title: 'Service reminders',
        description: 'Mileage- and date-based alerts for oil, tyres, insurance and inspection.',
        icon: 'BellRing',
      },
      {
        title: 'Fuel log',
        description: 'Track fill-ups and see real-world consumption trends over time.',
        icon: 'Fuel',
      },
      {
        title: 'Multi-vehicle',
        description: 'Manage a whole household or small fleet from one place.',
        icon: 'Car',
      },
      {
        title: 'Document storage',
        description: 'Keep registration, insurance and invoices attached to each vehicle.',
        icon: 'FileText',
      },
      {
        title: 'Cost analytics',
        description: 'Understand where the money actually goes across the year.',
        icon: 'ChartLine',
      },
      {
        title: 'Service history export',
        description: 'Generate a clean PDF history for resale or warranty claims.',
        icon: 'FileDown',
      },
    ],
    screenshots: [
      { src: '/apps/car-maintenance/screen-1.png', alt: 'Vehicle dashboard with upcoming services' },
      { src: '/apps/car-maintenance/screen-2.png', alt: 'Fuel log and consumption chart' },
      { src: '/apps/car-maintenance/screen-3.png', alt: 'Full service history timeline' },
    ],
    faq: [
      {
        question: 'How do I join the beta?',
        answer: 'Subscribe to the newsletter or get in touch — TestFlight invites go out weekly.',
      },
      {
        question: 'Does it work for motorcycles or vans?',
        answer: 'Yes. Any vehicle with a mileage reading can be tracked.',
      },
      {
        question: 'Can I import an existing history?',
        answer: 'CSV import is supported, and photos of past invoices can be attached to entries.',
      },
    ],
  },
  {
    slug: 'crm',
    name: 'CRM',
    tagline: 'A customer relationship manager small businesses actually use.',
    description:
      'Lightweight contact, deal and follow-up tracking without enterprise complexity.',
    longDescription:
      'Most CRMs are built for sales teams of fifty. This one is built for the person doing everything themselves. Contacts, deals and follow-ups in a single fast interface, with AI drafting the follow-up messages you keep putting off.',
    status: 'in-development',
    category: 'Business',
    icon: '📇',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    featured: false,
    platforms: ['ios', 'android', 'web'],
    links: { website: '/apps/crm', support: '/contact' },
    benefits: [
      {
        title: 'Set up in ten minutes',
        description: 'No consultants, no onboarding calls, no 40-field forms.',
      },
      {
        title: 'Follow-ups that happen',
        description: 'AI drafts the message; you approve and send. Deals stop going cold.',
      },
      {
        title: 'Everything in one place',
        description: 'Contacts, notes, deals and reminders without five separate tools.',
      },
    ],
    features: [
      {
        title: 'Contact timeline',
        description: 'Every call, note and message against one clear history.',
        icon: 'Users',
      },
      {
        title: 'Simple pipeline',
        description: 'Drag deals through stages you define yourself.',
        icon: 'Kanban',
      },
      {
        title: 'AI follow-ups',
        description: 'Context-aware message drafts you can edit before sending.',
        icon: 'Sparkles',
      },
      {
        title: 'Reminders',
        description: 'Never lose a lead to a forgotten callback.',
        icon: 'AlarmClock',
      },
      {
        title: 'Import & export',
        description: 'Bring contacts in from CSV or your phone, take them out any time.',
        icon: 'ArrowLeftRight',
      },
      {
        title: 'Offline first',
        description: 'Works fully offline and syncs when you reconnect.',
        icon: 'CloudOff',
      },
    ],
    screenshots: [
      { src: '/apps/crm/screen-1.png', alt: 'Contact list with recent activity' },
      { src: '/apps/crm/screen-2.png', alt: 'Deal pipeline board' },
      { src: '/apps/crm/screen-3.png', alt: 'AI-drafted follow-up message' },
    ],
    faq: [
      {
        question: 'When will it launch?',
        answer: 'Private beta is planned for later this year. Join the newsletter for an invite.',
      },
      {
        question: 'Will there be a web version?',
        answer: 'Yes — mobile and web will share the same account from day one.',
      },
      {
        question: 'How is pricing planned?',
        answer: 'A generous free tier for solo users, with a flat monthly Pro plan. No per-seat traps.',
      },
    ],
  },
];

/** Look up a single app by its URL slug. */
export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

/** Apps highlighted on the home page. */
export function getFeaturedApps(): App[] {
  return apps.filter((app) => app.featured);
}

export const statusLabels: Record<AppStatus, string> = {
  live: 'Available now',
  beta: 'In beta',
  'in-development': 'In development',
  planned: 'Planned',
};

export const platformLabels: Record<Platform, string> = {
  ios: 'iOS',
  android: 'Android',
  macos: 'macOS',
  web: 'Web',
};
