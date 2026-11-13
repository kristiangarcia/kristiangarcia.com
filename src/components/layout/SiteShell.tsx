import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
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

// Datos estructurados (schema.org) para buscadores: persona, web y página de perfil, en el idioma de la página.
async function structuredData(locale: string) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const pageUrl = locale === routing.defaultLocale ? SITE_CONFIG.url : `${SITE_CONFIG.url}/${locale}`;
  const personId = `${SITE_CONFIG.url}/#person`;
  const websiteId = `${SITE_CONFIG.url}/#website`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.name,
        givenName: 'Kristian',
        familyName: 'García Paulsen',
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/imgs/portrait/kristian-678.webp`,
        jobTitle: locale === 'es' ? 'Ingeniero de IA y desarrollador full-stack' : SITE_CONFIG.title,
        description: t('description'),
        email: `mailto:${SITE_CONFIG.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Granada', addressCountry: 'ES' },
        sameAs: [SITE_CONFIG.social.github, SITE_CONFIG.social.linkedin],
        knowsLanguage: ['es', 'en', 'no'],
        knowsAbout: [
          'AI agents',
          'LLM agents',
          'Multi-agent systems',
          'LangGraph',
          'Model Context Protocol (MCP)',
          'Human-in-the-loop',
          'FastAPI',
          'Next.js',
          'TypeScript',
          'Python',
          'PostgreSQL',
        ],
        alumniOf: { '@type': 'EducationalOrganization', name: 'IES Politécnico Hermenegildo Lanz' },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        inLanguage: ['en', 'es'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profilepage`,
        url: pageUrl,
        name: t('title'),
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        about: { '@id': personId },
      },
    ],
  };
}

export async function SiteShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  // Al cliente solo le llegan los textos que usan los componentes 'use client' (Header, ThemeToggle, LanguageSwitcher):
  // el resto se pinta en el servidor y así no se duplica todo el JSON de traducciones en el HTML.
  const hero = messages.hero as AbstractIntlMessages;
  const clientMessages: AbstractIntlMessages = { ui: messages.ui, nav: messages.nav, hero: { cta: hero.cta } };
  const jsonLd = await structuredData(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider locale={locale} messages={clientMessages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
