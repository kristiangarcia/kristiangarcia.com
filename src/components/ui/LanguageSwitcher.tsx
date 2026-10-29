'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('ui');

  return (
    <div
      role="group"
      aria-label={t('switchLanguage')}
      className={cn(
        'relative flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-[0.7rem] tracking-[0.08em]',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-0.5 h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-foreground transition-transform duration-300 ease-out',
          locale === 'es' ? 'translate-x-full' : 'translate-x-0'
        )}
      />
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <Link
            key={l.code}
            href={pathname}
            locale={l.code}
            hrefLang={l.code}
            lang={l.code}
            aria-current={active ? 'true' : undefined}
            aria-label={l.name}
            className={cn(
              'relative z-10 flex h-full w-9 items-center justify-center rounded-full transition-colors duration-300',
              active ? 'text-background' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
