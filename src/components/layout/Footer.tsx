'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: SITE_CONFIG.social.email, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. {t('rights')}.
          </div>

          {/* Center - Made with */}
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            {t('madeWith')}
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            {t('and')} Next.js
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
