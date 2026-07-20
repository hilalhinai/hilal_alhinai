import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social card, rendered at build time. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FFFFFF',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#111111' }}>
          Hilal<span style={{ color: '#2563EB' }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              color: '#111111',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#666666' }}>
            {siteConfig.author.jobTitle}
          </div>
        </div>
        <div style={{ display: 'flex', height: 8, width: 160, background: '#2563EB', borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
