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
  {
    slug: 'ritmio',
    name: 'Ritmio — Habit Tracker',
    tagline: 'Build habits that stick.',
    description:
      'A habit tracker built around consistency rather than perfection — flexible schedules, gentle reminders, and stats that show real progress.',
    longDescription:
      'Most habit trackers punish you for missing a day. Ritmio is built for how habits actually form: set the routines you care about, check them off on a schedule that fits your week, and watch streaks and statistics build over time. Start small, stay consistent, and let the progress become visible.',
    status: 'live',
    category: 'Productivity',
    icon: '/apps/ritmio/icon.png',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-07-21',
    platforms: ['ios', 'ipados'],
    pricing: 'Free · In-App Purchases',
    links: {
      appStore: 'https://apps.apple.com/app/ritmio-habit-tracker/id6787430767',
      website: '/apps/ritmio',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Consistency over perfection',
        description:
          'Flexible schedules mean a habit can be three days a week, weekdays only, or every few days — without breaking a streak you never agreed to.',
      },
      {
        title: 'Progress you can see',
        description:
          'Completion trends, rankings and insights turn a month of small check-ins into evidence that something is changing.',
      },
      {
        title: 'Momentum that lasts',
        description:
          'XP, levels and achievements give the early weeks a reward, which is exactly when most habits are abandoned.',
      },
    ],
    features: [
      {
        title: 'Simple daily tracking',
        description: 'Tap to complete and build a streak. The whole interaction takes a second.',
        icon: 'CircleCheck',
      },
      {
        title: 'Flexible schedules',
        description:
          'Daily, weekdays, weekends, specific days, or every few days — habits that fit a real week.',
        icon: 'CalendarRange',
      },
      {
        title: 'Custom categories',
        description: 'Create your own with a name, icon and colour, so the app matches your life.',
        icon: 'Shapes',
      },
      {
        title: 'Smart reminders',
        description: 'Gentle nudges at the times you choose, not a stream of notifications.',
        icon: 'BellRing',
      },
      {
        title: 'Beautiful statistics',
        description: 'Completion trends, rankings and insights that show where consistency is real.',
        icon: 'ChartLine',
      },
      {
        title: 'Home-screen widget',
        description: "See today's progress at a glance, and sync across devices — offline included.",
        icon: 'LayoutGrid',
      },
    ],
    screenshots: [
      { src: '/apps/ritmio/screen-1.png', alt: "Ritmio today view with the day's habits ready to check off" },
      { src: '/apps/ritmio/screen-2.png', alt: 'Ritmio statistics screen showing completion trends over time' },
      { src: '/apps/ritmio/screen-3.png', alt: 'Ritmio streaks and achievements tracking long-term consistency' },
    ],
    faq: [
      {
        question: 'Is Ritmio free?',
        answer:
          'Yes — track up to five habits for free, with no time limit. Premium unlocks unlimited habits and full statistics at $4.99 a month or $49.99 a year.',
      },
      {
        question: 'Does it work offline?',
        answer:
          'Yes. Ritmio works fully offline and syncs across your devices once you reconnect, so a poor signal never costs you a check-in.',
      },
      {
        question: 'Is there an Android version?',
        answer:
          'Not yet. Ritmio runs on iPhone and iPad, and requires iOS 15.6 or later. Subscribe to the newsletter to hear if that changes.',
      },
      {
        question: 'Can I get my data out?',
        answer:
          'Yes. You can export your data or delete your account at any time. Nothing is locked in.',
      },
    ],
  },
  {
    slug: 'renavo',
    name: 'Renavo',
    tagline: 'Track service, fuel and costs.',
    description:
      'Your car\'s full history in one app — services, fuel, expenses, documents and renewal reminders, with a health score at a glance.',
    longDescription:
      'Renavo keeps your car\'s whole history in one place — services, fuel, expenses, reminders and documents — so you always know what has been done and what is coming up. Log a service in seconds, track every fill-up, attach the invoice, and let Renavo remind you before the next oil change, insurance renewal or registration is due. A simple health score tells you your car\'s status at a glance, and one app covers the whole garage.',
    status: 'live',
    category: 'Utilities',
    icon: '/apps/renavo/icon.png',
    gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-07-27',
    platforms: ['ios', 'ipados'],
    pricing: 'Free · In-App Purchases',
    links: {
      appStore: 'https://apps.apple.com/app/renavo/id6790155156',
      website: '/apps/renavo',
      support: '/contact',
    },
    benefits: [
      {
        title: 'One home for the whole history',
        description:
          'Services, fuel, expenses and documents live together, so nothing is scattered across glove-box receipts and half-remembered dates.',
      },
      {
        title: 'Never miss a renewal',
        description:
          'Smart reminders by date or mileage warn you before the next service, insurance renewal or registration — the deadlines that get expensive when missed.',
      },
      {
        title: 'Know what the car really costs',
        description:
          'Fuel, servicing and expenses add up to monthly and average figures, and a health score turns it all into a status you can read in a second.',
      },
    ],
    features: [
      {
        title: 'Service history',
        description: 'Log every service with date, mileage, cost, workshop and notes — invoices attached.',
        icon: 'Wrench',
      },
      {
        title: 'Fuel tracking',
        description: 'Record every fill-up and watch your spending and consumption over time.',
        icon: 'Fuel',
      },
      {
        title: 'Expenses & costs',
        description: 'Capture all car expenses and see monthly and average costs at a glance.',
        icon: 'Receipt',
      },
      {
        title: 'Smart reminders',
        description: 'Set reminders by date or mileage, with notifications before anything falls due.',
        icon: 'BellRing',
      },
      {
        title: 'Document storage',
        description: 'Keep insurance, registration, invoices and photos safely in one place.',
        icon: 'FolderLock',
      },
      {
        title: 'Multiple vehicles',
        description: 'Manage a whole garage from one app, with instant search across every record.',
        icon: 'Car',
      },
    ],
    screenshots: [
      { src: '/apps/renavo/screen-1.png', alt: 'Renavo dashboard showing a car health score and upcoming alerts' },
      { src: '/apps/renavo/screen-2.png', alt: 'Renavo service history with dates, mileage, cost and attached invoices' },
      { src: '/apps/renavo/screen-3.png', alt: 'Renavo fuel and expense tracking with monthly and average costs' },
    ],
    faq: [
      {
        question: 'Is Renavo free?',
        answer:
          'Yes. The free version covers service history, fuel, expenses, reminders and documents. Premium adds unlimited vehicles, advanced statistics and charts, PDF/Excel/CSV export and unlimited reminders — $2.99 a month or $19.99 a year.',
      },
      {
        question: 'Do I need an account?',
        answer:
          'No. Your data is stored locally on your device and you can start in guest mode. If you want to sign in, you can use email, Google or Apple.',
      },
      {
        question: 'Can it handle more than one car?',
        answer:
          'Yes. You can manage multiple vehicles, and Premium removes the limit so a whole garage lives in one app.',
      },
      {
        question: 'Is there an Android version?',
        answer:
          'Not yet. Renavo runs on iPhone and iPad, and requires iOS 15 or later. Subscribe to the newsletter to hear if that changes.',
      },
    ],
  },
  {
    slug: 'warvo',
    name: 'Warvo',
    tagline: 'Receipt & warranty vault.',
    description:
      'Scan a receipt in seconds and never lose a warranty, return or repair claim again — with a dashboard showing what is active, expiring or expired.',
    longDescription:
      'Warvo is the simplest way to keep every receipt safe, so you are always ready for a return, repair, exchange or warranty claim. Point the camera and it detects the edges, crops and enhances the photo, then reads the merchant, date, total and receipt number for you — you just confirm what you bought and pick a warranty length. A colour-coded dashboard shows what is active, expiring soon or expired, and instant search finds any receipt as fast as you type. No accounts, no clutter, and private on your device by default.',
    status: 'live',
    category: 'Utilities',
    icon: '/apps/warvo/icon.png',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-08-03',
    platforms: ['ios', 'ipados'],
    pricing: 'Free · In-App Purchases',
    links: {
      appStore: 'https://apps.apple.com/app/warvo/id6794998377',
      website: '/apps/warvo',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Never lose proof of purchase',
        description:
          'Every receipt is scanned and stored the moment you buy, so the one you need for a return or claim is always there — not lost in a drawer or a photo roll.',
      },
      {
        title: 'Know what is still covered',
        description:
          'A colour-coded dashboard shows active, expiring-soon and expired warranties at a glance, so you claim while you still can.',
      },
      {
        title: 'Private by default',
        description:
          'Your receipts live on your device. Optional Cloud Sync backs them up and shares them across your devices only if you turn it on.',
      },
    ],
    features: [
      {
        title: 'Scan in seconds',
        description: 'Point and capture — on-device scanning crops, enhances and reads the details automatically.',
        icon: 'ScanLine',
      },
      {
        title: 'Warranty dashboard',
        description: 'A clean, colour-coded overview of active, expiring-soon and expired warranties. Tap to filter.',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Instant search',
        description: 'Search across product names, merchants, receipt numbers and notes as fast as you type.',
        icon: 'Search',
      },
      {
        title: 'Warranty reminders',
        description: 'Premium nudges at 30 days, 7 days and on expiry, so a deadline never slips past.',
        icon: 'BellRing',
      },
      {
        title: 'PDF export',
        description: 'Export a receipt to PDF for claims and returns, ready to send in seconds.',
        icon: 'FileText',
      },
      {
        title: 'Private by design',
        description: 'Stored on your device, with optional Cloud Sync for backup and access across devices.',
        icon: 'ShieldCheck',
      },
    ],
    screenshots: [
      { src: '/apps/warvo/screen-1.png', alt: 'Warvo warranty dashboard showing active, expiring and expired coverage' },
      { src: '/apps/warvo/screen-2.png', alt: 'Warvo scanning a receipt and reading the details automatically' },
      { src: '/apps/warvo/screen-3.png', alt: 'Warvo instant search across products, merchants and receipt numbers' },
    ],
    faq: [
      {
        question: 'Is Warvo free?',
        answer:
          'Yes. The free version scans and stores receipts, tracks warranties and includes search. Premium removes ads and adds warranty reminders, PDF export and backup & restore — $0.99 a month, $9.99 a year, or a $29.99 one-time lifetime purchase.',
      },
      {
        question: 'Do I need an account?',
        answer:
          'No. Warvo works with no account and stores your receipts on your device. Turn on optional Cloud Sync if you want them backed up and available on your other devices.',
      },
      {
        question: 'How does scanning work?',
        answer:
          'Scanning and text recognition run on your device. Warvo detects the receipt edges, crops and enhances the image, then reads the merchant, date, total and receipt number for you to confirm.',
      },
      {
        question: 'Is there an Android version?',
        answer:
          'Not yet. Warvo runs on iPhone and iPad, and requires iOS 15.5 or later. Subscribe to the newsletter to hear if that changes.',
      },
    ],
  },
  {
    slug: 'sticks-and-squares',
    name: 'Sticks & Squares',
    tagline: 'Roll, race & capture online.',
    description:
      'A fast, friendly board game of racing, luck and capture — play online with friends, pass-and-play, or against the computer. No ads, no login.',
    longDescription:
      'Sticks & Squares is a fast, friendly board game of racing, luck and capture, inspired by classics like Ludo and Jackaroo. Roll the sticks, move your pieces around the board, and be the first to bring them all home — land on an opponent and send them back to the start. Play pass-and-play on one device, take on a smart computer opponent, or start an online room and share a 6-character code with a friend. Simple to learn, tense to the finish, and free of ads and sign-ups.',
    status: 'live',
    category: 'Board Game',
    icon: '/apps/sticks-and-squares/icon.png',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    featured: true,
    releaseDate: '2026-08-25',
    platforms: ['ios', 'ipados'],
    pricing: 'Free',
    links: {
      appStore: 'https://apps.apple.com/app/sticks-squares/id6785944388',
      website: '/apps/sticks-and-squares',
      support: '/contact',
    },
    benefits: [
      {
        title: 'Play together, anywhere',
        description:
          'Pass-and-play on one device, an online room with a shared code, or a smart computer opponent — 2 or 4 players, with optional teams.',
      },
      {
        title: 'Simple to learn, tense to finish',
        description:
          'Roll, race your pieces home, and capture opponents to send them back. Easy to pick up, hard to put down.',
      },
      {
        title: 'No ads, no login',
        description:
          'No sign-up and no advertising. Your profile, stats and achievements live on your device.',
      },
    ],
    features: [
      {
        title: 'Pass-and-play offline',
        description: 'Share one device with 2 or 4 players — no connection needed.',
        icon: 'Users',
      },
      {
        title: 'Play the computer',
        description: 'Take on a smart AI opponent whenever you want a solo game.',
        icon: 'Cpu',
      },
      {
        title: 'Online multiplayer',
        description: 'Create a room, share a 6-character code, and play with a friend anywhere.',
        icon: 'Globe',
      },
      {
        title: 'In-game chat',
        description: 'Send messages and quick emoji reactions, with report and block built in.',
        icon: 'MessageCircle',
      },
      {
        title: 'Six board themes',
        description: 'Classic, Wood, Dark, Ocean, Royal and Forest — plus avatars and colours.',
        icon: 'Palette',
      },
      {
        title: 'Level up',
        description: 'Track stats, earn XP, unlock achievements and keep a daily-reward streak.',
        icon: 'Trophy',
      },
    ],
    screenshots: [
      { src: '/apps/sticks-and-squares/screen-1.png', alt: 'Sticks & Squares board mid-game with pieces racing home' },
      { src: '/apps/sticks-and-squares/screen-2.png', alt: 'Online multiplayer room with a shared code and in-game chat' },
      { src: '/apps/sticks-and-squares/screen-3.png', alt: 'Board themes, profile and achievements in Sticks & Squares' },
    ],
    faq: [
      {
        question: 'Is Sticks & Squares free?',
        answer:
          'Yes — completely free, with no ads and no in-app purchases.',
      },
      {
        question: 'Can I play online with a friend?',
        answer:
          'Yes. Create a room and share the 6-character code. Games support 2 or 4 players, with an optional team mode for four.',
      },
      {
        question: 'Can I play offline or against the computer?',
        answer:
          'Both. Pass-and-play with 2 or 4 players on one device, or play against a smart computer opponent.',
      },
      {
        question: 'Do I need an account?',
        answer:
          'No. There is no sign-up — your profile, avatar, stats and achievements are stored on your device.',
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
