import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SiteShell, localeMetadata } from '@/components/layout/SiteShell';

// Exportación estática: solo se generan las rutas con prefijo (el inglés, idioma por defecto, vive en la raíz).
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.filter((l) => l !== routing.defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localeMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'es')) notFound();
  return <SiteShell locale={locale}>{children}</SiteShell>;
}
