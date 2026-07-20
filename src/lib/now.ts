/**
 * Content for the /now page — a snapshot of current focus.
 * Update the `nowUpdated` date whenever you revise this file.
 */

export const nowUpdated = '2026-07-01';

export interface NowSection {
  title: string;
  icon: string;
  items: { title: string; detail: string }[];
}

export const nowSections: NowSection[] = [
  {
    title: 'Shipping',
    icon: 'Rocket',
    items: [
      {
        title: 'Mira — post-launch',
        detail:
          'Watching how people actually use the emotion tagging, and cutting anything that adds friction to a daily check-in.',
      },
      {
        title: 'Weekly reflections',
        detail: 'Making the weekly summary genuinely worth opening rather than another notification.',
      },
      {
        title: 'Debt planner polish',
        detail: 'Refining the Avalanche and Snowball comparison so the trade-off is obvious at a glance.',
      },
    ],
  },
  {
    title: 'Goals this quarter',
    icon: 'Target',
    items: [
      {
        title: 'First 100 active users',
        detail: 'Not downloads — people who open Mira in a given week and get something out of it.',
      },
      {
        title: 'Write weekly',
        detail: 'One honest build-in-public post every week, revenue numbers included.',
      },
      {
        title: '1,000 subscribers',
        detail: 'Grow the newsletter with genuinely useful writing rather than launch noise.',
      },
    ],
  },
  {
    title: 'Building',
    icon: 'Wrench',
    items: [
      {
        title: 'Shared design system',
        detail:
          'Extracting Mira’s components into a reusable package, so the next app starts further along.',
      },
      {
        title: 'Offline sync',
        detail: 'Rewriting the sync layer to handle conflicts properly instead of last-write-wins.',
      },
    ],
  },
  {
    title: 'Reading',
    icon: 'BookOpen',
    items: [
      {
        title: 'The Design of Everyday Things — Don Norman',
        detail: 'A re-read. It gets better every time.',
      },
      { title: 'Shape Up — Ryan Singer', detail: 'Rethinking how I scope solo six-week cycles.' },
      {
        title: 'Refactoring — Martin Fowler',
        detail: 'Slowly, and with a lot of margin notes.',
      },
    ],
  },
  {
    title: 'Learning',
    icon: 'Sparkles',
    items: [
      { title: 'Swift & SwiftUI', detail: 'Going deeper on native iOS to complement Flutter.' },
      {
        title: 'App Store optimisation',
        detail: 'Working out what actually moves downloads versus what people claim does.',
      },
      {
        title: 'Motion design',
        detail: 'Studying how Apple and Linear use timing curves to communicate state.',
      },
    ],
  },
  {
    title: 'Elsewhere',
    icon: 'Plane',
    items: [
      { title: 'Based in Oman', detail: 'Working from Muscat, mostly early mornings.' },
      {
        title: 'Conferences',
        detail: 'Planning to attend one mobile development conference later this year.',
      },
    ],
  },
];
