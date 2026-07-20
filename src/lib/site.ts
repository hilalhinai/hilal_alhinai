/**
 * Single source of truth for site-wide metadata, navigation and social links.
 * Update this file when the brand, domain or social presence changes.
 */

export const siteConfig = {
  name: 'Hilal',
  title: 'Hilal — Independent App Developer',
  tagline: 'Building apps that solve real problems.',
  description:
    'I design practical mobile apps that simplify everyday life through thoughtful design. Budgeting, receipts, car maintenance and more.',
  url: 'https://hilalalhinai.com',
  locale: 'en_US',
  author: {
    name: 'Hilal',
    fullName: 'Hilal Al Hinai',
    email: 'contact@hilalalhinai.com',
    jobTitle: 'Independent App Developer',
  },
  keywords: [
    'independent app developer',
    'mobile app developer',
    'iOS app developer',
    'Android app developer',
    'Flutter developer',
    'productivity apps',
    'budget app',
    'receipt scanner app',
    'car maintenance app',
    'personal finance app',
    'indie developer',
    'building in public',
    'Hilal Al Hinai',
  ],
  ogImage: '/og.png',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/apps', label: 'Apps' },
  { href: '/blog', label: 'Blog' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Shown in the footer and on the contact page.
 * Supported `icon` values are registered in components/layout/SocialIcons.tsx
 * ('github' | 'linkedin' | 'twitter' | 'youtube' | 'mail'), so adding LinkedIn
 * or X later is a one-line change here.
 */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/hilalhinai', icon: 'github' },
  { label: 'Email', href: 'mailto:contact@hilalalhinai.com', icon: 'mail' },
] as const;

export const footerSections = [
  {
    title: 'Product',
    links: [
      { href: '/apps', label: 'All Apps' },
      { href: '/apps/budget', label: 'Budget App' },
      { href: '/apps/receipt-vault', label: 'Receipt Vault' },
      { href: '/apps/car-maintenance', label: 'Car Maintenance' },
      { href: '/apps/crm', label: 'CRM' },
    ],
  },
  {
    title: 'Writing',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/blog?category=building-in-public', label: 'Building in Public' },
      { href: '/now', label: 'Now' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
] as const;
