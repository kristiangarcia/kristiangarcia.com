'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

const SECTIONS = NAVIGATION_ITEMS.filter((i) => i.href !== '#home');

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently crossing the middle of the viewport
  useEffect(() => {
    const els = NAVIGATION_ITEMS.map((s) => document.querySelector<HTMLElement>(s.href)).filter(
      Boolean
    ) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(e.target.id === 'home' ? '' : `#${e.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {t('ui.skip')}
      </a>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled || open
            ? 'border-b border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent'
        )}
      >
        <div
          aria-hidden="true"
          className="scroll-progress absolute inset-x-0 bottom-[-1px] h-px origin-left bg-foreground"
        />
        <nav aria-label={t('ui.primaryNav')} className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground font-mono text-[0.7rem] font-semibold tracking-tight text-background transition-transform duration-500 group-hover:rotate-[360deg]">
              KG
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:inline">
              {SITE_CONFIG.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {SECTIONS.map((item, i) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'group relative flex items-baseline gap-1.5 rounded-full px-3 py-2 text-[0.8rem] transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="font-mono text-[0.6rem] opacity-60">0{i + 1}</span>
                    {t(item.label)}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-px origin-left bg-foreground transition-transform duration-500',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary btn-sm ml-1 hidden md:inline-flex">
              {t('hero.cta')}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="icon-btn relative lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t('ui.close') : t('ui.menu')}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute h-px w-4 bg-current transition-transform duration-300',
                  open ? 'rotate-45' : '-translate-y-[3px]'
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute h-px w-4 bg-current transition-transform duration-300',
                  open ? '-rotate-45' : 'translate-y-[3px]'
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 bg-background pt-16 transition-[opacity,visibility] duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        aria-hidden={!open}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {SECTIONS.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  'transition-[opacity,transform] duration-500',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border py-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
                >
                  <span className="font-mono text-xs font-normal tracking-normal text-muted-foreground">
                    0{i + 1}
                  </span>
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="btn btn-primary w-full"
          >
            {t('hero.cta')}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
