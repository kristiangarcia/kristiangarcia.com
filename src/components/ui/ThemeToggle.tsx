'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

/** Icon swap is CSS-driven (dark: variant), so there is no hydration flash. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('ui');

  return (
    <button
      type="button"
      className="icon-btn group"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={t('toggleTheme')}
      title={t('toggleTheme')}
    >
      <Sun
        className="hidden h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-90 dark:block"
        aria-hidden="true"
      />
      <Moon
        className="block h-[18px] w-[18px] transition-transform duration-500 group-hover:-rotate-12 dark:hidden"
        aria-hidden="true"
      />
    </button>
  );
}
