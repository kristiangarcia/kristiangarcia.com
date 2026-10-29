import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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
    },
    twitter: {
      card: 'summary',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
