import { setRequestLocale } from 'next-intl/server';
import { Home } from '@/components/layout/Home';

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}
