import { useLocale, useTranslations } from 'next-intl';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

function Portrait({ alt, badge, caption }: { alt: string; badge: string; caption: string }) {
  return (
    <figure className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      <div
        className="unveil grain relative aspect-[4/5] overflow-hidden rounded-[2px] bg-white"
        style={{ '--d': '150ms' } as React.CSSProperties}
      >
        <picture>
          <source
            type="image/avif"
            srcSet="/imgs/portrait/kristian-480.avif 480w, /imgs/portrait/kristian-678.avif 678w"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 420px, 88vw"
          />
          <source
            type="image/webp"
            srcSet="/imgs/portrait/kristian-480.webp 480w, /imgs/portrait/kristian-678.webp 678w"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 420px, 88vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imgs/portrait/kristian-678.webp"
            width={678}
            height={847}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-[1.02] object-cover object-top grayscale transition-transform duration-[1.6s] ease-out hover:scale-[1.06] dark:brightness-[0.94] dark:contrast-[1.08]"
          />
        </picture>
        <span className="eyebrow absolute left-3 top-3 z-10 !text-[0.6rem] !text-neutral-900/70">
          Fig. 01
        </span>
        <span className="eyebrow absolute right-3 top-3 z-10 !text-[0.6rem] !text-neutral-900/70">
          B/W
        </span>
      </div>

      {/* Rotating badge */}
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-background p-1 sm:-left-10 sm:h-32 sm:w-32"
      >
        <div className="relative h-full w-full rounded-full border border-border">
          <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
            <defs>
              <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text className="fill-foreground font-mono text-[8.2px] uppercase" letterSpacing="0.9">
              <textPath href="#badge-circle" textLength="286" lengthAdjust="spacingAndGlyphs">
                {badge}
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl text-accent">
            ✳
          </span>
        </div>
      </div>

      <figcaption className="mt-4 flex items-center justify-end gap-3 pl-24 sm:pl-28">
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow">{caption}</span>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  const t = useTranslations('hero');
  const tu = useTranslations('ui');
  const ta = useTranslations('about');
  const locale = useLocale();
  const cv = locale === 'es' ? SITE_CONFIG.cv.es : SITE_CONFIG.cv.en;
  const [first, ...rest] = SITE_CONFIG.name.split(' ');

  const socials = [
    { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub', external: true },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: SITE_CONFIG.social.email, label: 'Email', external: false },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      {/* Faint editorial grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(to_right,hsl(var(--border)/0.55)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="container-x flex flex-1 flex-col justify-center py-10 md:py-14">
        <div className="grid items-end gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="rise eyebrow max-w-xl" style={{ '--d': '0ms' } as React.CSSProperties}>
              <span aria-hidden="true" className="mr-3 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-accent align-middle" />
              {t('title')}
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-[clamp(4.1rem,10.5vw,9.75rem)] font-semibold leading-[0.86] tracking-[-0.055em]"
            >
              <span className="rise block" style={{ '--d': '80ms' } as React.CSSProperties}>
                {first}
              </span>
              <span
                className="rise block font-serif font-normal italic tracking-[-0.03em]"
                style={{ '--d': '180ms' } as React.CSSProperties}
              >
                {rest.join(' ')}
              </span>
            </h1>

            <div
              className="rise mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10"
              style={{ '--d': '320ms' } as React.CSSProperties}
            >
              <p className="text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] md:text-[1.75rem]">
                {t('tagline')}
              </p>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {t('description')}
              </p>
            </div>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-3"
              style={{ '--d': '440ms' } as React.CSSProperties}
            >
              <a href="#contact" className="btn btn-primary group">
                {t('cta')}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#projects" className="btn btn-outline">
                {t('viewWork')}
              </a>
              <a href={cv} target="_blank" rel="noopener noreferrer" className="btn group px-4 text-foreground hover:bg-muted">
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                <span className="link-u">{ta('downloadCV')}</span>
              </a>
            </div>
          </div>

          <div className="relative pb-6 lg:col-span-5 xl:col-span-4">
            <Portrait alt={tu('photoAlt')} badge={`${t('title')} · `} caption={ta('location')} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-x relative">
        <div className="flex items-center justify-between border-t border-border py-5">
          <ul className="flex items-center gap-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="icon-btn"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#about" className="group flex items-center gap-3" aria-label={t('scrollDown')}>
            <span className="eyebrow hidden transition-colors group-hover:text-foreground sm:inline">
              {t('scrollDown')}
            </span>
            <span className="relative block h-10 w-px overflow-hidden bg-border">
              <span className="scroll-hint absolute inset-0 bg-foreground" />
            </span>
            <ArrowDown className="h-4 w-4 sm:hidden" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
