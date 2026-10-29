import { useLocale, useTranslations } from 'next-intl';
import { Download, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const highlights = ['ai', 'fullstack', 'learning'] as const;

export function About() {
  const t = useTranslations('about');
  const tn = useTranslations('nav');
  const tu = useTranslations('ui');
  const locale = useLocale();
  const isEs = locale === 'es';
  const cvMain = isEs ? SITE_CONFIG.cv.es : SITE_CONFIG.cv.en;
  const cvOther = isEs ? SITE_CONFIG.cv.en : SITE_CONFIG.cv.es;

  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeading id="about-title" index="01" label={tn('about')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="text-pretty text-[clamp(1.5rem,2.6vw,2.4rem)] font-medium leading-[1.2] tracking-[-0.025em]">
              {t('intro')}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:pl-8" delay={120}>
            <dl className="divide-y divide-border border-y border-border text-sm">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="eyebrow">{tu('basedIn')}</dt>
                <dd className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {t('location')}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="eyebrow">CV</dt>
                <dd className="flex flex-wrap justify-end gap-2">
                  <a href={cvMain} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm group">
                    <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    {t('downloadCV')}
                    <span className="font-mono text-[0.65rem] opacity-70">{tu('cvShort')}</span>
                  </a>
                  <a
                    href={cvOther}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label={tu('cvOther')}
                    title={tu('cvOther')}
                  >
                    <span className="font-mono text-[0.65rem]">{tu('cvOtherShort')}</span>
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {highlights.map((key, i) => (
            <Reveal as="li" key={key} delay={i * 100} className="group relative bg-background p-7 md:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                {t(`highlights.${key}.title`)}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t(`highlights.${key}.description`)}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
