import type { Metadata, Viewport } from 'next';
import './globals.css';
import { branding } from '@/config/branding';
import { siteContent } from '@/config/content';

export const viewport: Viewport = {
  themeColor: branding.metadata.themeColor,
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: branding.metadata.title,
  description: branding.metadata.description,
  openGraph: {
    title: branding.metadata.title,
    description: branding.metadata.description,
    url: 'https://bitetheory.app',
    siteName: 'BITE THEORY',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    name: branding.brandName,
    description: branding.metadata.description,
    url: 'https://bitetheory.app',
    telephone: siteContent.cta.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteContent.cta.location,
      addressLocality: siteContent.cta.city,
      addressCountry: 'PK',
    },
    openingHours: 'Mo-Su 11:00-02:00',
    servesCuisine: ['Burgers', 'Rolls', 'Pizza', 'Fast Food'],
    priceRange: '$$',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@400;500;600;700;800;900&family=Raleway:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0F0906] text-[#FFF4E0] antialiased selection:bg-[#F6A525] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}
