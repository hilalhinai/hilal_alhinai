import { siteConfig } from '@/lib/site';
import type { App } from '@/lib/apps';
import type { Post } from '@/lib/blog-config';

/** Injects a JSON-LD block. Kept in one place so schemas stay consistent. */
function Schema({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated server-side from trusted local content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.author.fullName,
        alternateName: siteConfig.author.name,
        url: siteConfig.url,
        jobTitle: siteConfig.author.jobTitle,
        email: siteConfig.author.email,
        description: siteConfig.description,
        knowsAbout: [
          'Mobile App Development',
          'iOS Development',
          'Android Development',
          'Flutter',
          'Product Design',
        ],
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteConfig.url}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

export function SoftwareAppSchema({ app }: { app: App }) {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: app.name,
        description: app.description,
        applicationCategory: 'MobileApplication',
        operatingSystem: app.platforms.join(', '),
        url: `${siteConfig.url}/apps/${app.slug}`,
        author: { '@type': 'Person', name: siteConfig.author.name },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }}
    />
  );
}

export function ArticleSchema({ post }: { post: Post }) {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Person', name: siteConfig.author.name, url: siteConfig.url },
        publisher: { '@type': 'Person', name: siteConfig.author.name },
        mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
      }}
    />
  );
}

export function FaqSchema({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <Schema
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      }}
    />
  );
}
