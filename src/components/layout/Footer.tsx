import { useTranslations } from 'next-intl';
import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('footer');
  const tu = useTranslations('ui');
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub', external: true },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: SITE_CONFIG.social.email, label: 'Email', external: false },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="container-x pt-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {SITE_CONFIG.name}. {t('rights')}.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            {t('madeWith')}
            <Heart className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
            {t('and')} Next.js
          </p>
          <div className="flex items-center gap-1">
            <a href="/privacidad.html" className="link-u mr-3 text-sm text-muted-foreground hover:text-foreground">
              {t('privacy')}
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="icon-btn"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
            <a href="#home" className="icon-btn ml-2 border-border" aria-label={tu('backToTop')}>
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none mt-10 select-none whitespace-nowrap text-center text-[17vw] font-semibold leading-[0.78] tracking-[-0.07em] text-foreground/[0.06]"
      >
        Kristian<span className="font-serif font-normal italic tracking-[-0.04em]">García</span>
      </p>
    </footer>
  );
}
