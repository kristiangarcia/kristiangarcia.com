import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import '@/app/globals.css';

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export async function localeMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const url = locale === routing.defaultLocale ? SITE_CONFIG.url : `${SITE_CONFIG.url}/${locale}`;

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        en: SITE_CONFIG.url,
        es: `${SITE_CONFIG.url}/es`,
        'x-default': SITE_CONFIG.url,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_ES'],
      url,
      title: t('title'),
      description: t('description'),
      siteName: SITE_CONFIG.name,
      images: [{ url: '/imgs/og.jpg', width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/imgs/og.jpg'],
    },
  };
}

export async function SiteShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans`}>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
