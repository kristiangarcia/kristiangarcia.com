'use client';

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from './Button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as string;

  const switchLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchLanguage}
      aria-label="Switch language"
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">
        {currentLocale === 'en' ? 'Español' : 'English'}
      </span>
    </Button>
  );
}
