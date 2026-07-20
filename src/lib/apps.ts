/**
 * App catalogue.
 *
 * Adding a new app = appending one object here. Everything else — the apps
 * grid, the individual app page at /apps/[slug], the sitemap, the footer
 * links and the structured data — is generated from this array.
 */

export type Platform = 'ios' | 'ipados' | 'android' | 'macos' | 'web';

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
  /** Shown on the app page, e.g. "Free · In-App Purchases". */
  pricing?: string;
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
    slug: 'mira',
    name: 'Mira: Money & Mood',
    tagline: 'Understand your money. Understand yourself.',
    description:
      'A mindful money and mood tracker that shows you not just where your money goes, but why.',
    longDescription:
      'Every purchase carries a feeling — stress, boredom, celebration, guilt. Mira lets you tag the emotion behind your spending, then shows you the patterns a bank statement can never reveal. It is budgeting with self-awareness built in, designed to help you change gently, without shame.',
    status: 'live',
    category: 'Finance',
    icon: '/apps/mira/icon.png',
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-01-01',
    platforms: ['ios', 'ipados'],
    pricing: 'Free · In-App Purchases',
    links: {
      appStore: 'https://apps.apple.com/app/id6786034837',
      website: '/apps/mira',
      support: '/contact',
    },
    benefits: [
      {
        title: 'See why, not just where',
        description:
          'Most budgeting apps only track numbers. Mira tracks the feeling behind each one, so the cause of your spending becomes visible.',
      },
      {
        title: 'Gentle, never shaming',
        description:
          'One honest check-in at a time. Weekly reflections build mindful habits instead of guilt about a coffee.',
      },
      {
        title: 'Private by design',
        description:
          'Your data is yours. Export it or delete it whenever you like, with an optional Face ID or passcode lock.',
      },
    ],
    features: [
      {
        title: 'Track with feeling',
        description:
          'Log expenses in seconds and tag how you felt, then see spending broken down by emotion.',
        icon: 'Heart',
      },
      {
        title: 'Weekly reflections',
        description:
          'Short, regular check-ins that turn scattered entries into habits you actually keep.',
        icon: 'CalendarCheck',
      },
      {
        title: 'Budget your way',
        description:
          'Set a monthly budget, watch it at a glance, and choose a budgeting strategy that fits you.',
        icon: 'Wallet',
      },
      {
        title: 'Goals & sinking funds',
        description:
          'Create savings goals and recurring sinking funds so the big bills stop being a surprise.',
        icon: 'Target',
      },
      {
        title: 'Debt payoff plans',
        description:
          'Track every debt, compare Avalanche against Snowball, and see your debt-free date and total interest.',
        icon: 'TrendingDown',
      },
      {
        title: 'AI reflections',
        description:
          'Premium coaching that reads your patterns back to you and suggests what to try next.',
        icon: 'Sparkles',
      },
    ],
    screenshots: [
      { src: '/apps/mira/screen-1.png', alt: 'Mira insights screen showing spending patterns and trends over the month' },
      { src: '/apps/mira/screen-2.png', alt: 'Mira feelings screen showing spending broken down by the emotion behind each purchase' },
      { src: '/apps/mira/screen-3.png', alt: 'Mira goals screen showing savings targets and progress at a glance' },
    ],
    faq: [
      {
        question: 'Is Mira free?',
        answer:
          'Free to start, with everything you need to track spending and mood. Premium unlocks all spending-by-emotion insights, unlimited budgets and goals, AI reflections and data export — $3.99 a month or $39.99 a year.',
      },
      {
        question: 'Is there an Android version?',
        answer:
          'Not yet. Mira is currently on iPhone and iPad, requiring iOS 13 or later. Subscribe to the newsletter to hear if that changes.',
      },
      {
        question: 'Can I get my data out?',
        answer:
          'Yes. Data export is available, and you can delete everything at any time. Nothing is locked in.',
      },
      {
        question: 'Can I lock the app?',
        answer:
          'Yes — Face ID or a passcode lock is optional, so your financial and emotional records stay private if someone else picks up your phone.',
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
  ios: 'iPhone',
  ipados: 'iPad',
  android: 'Android',
  macos: 'macOS',
  web: 'Web',
};
