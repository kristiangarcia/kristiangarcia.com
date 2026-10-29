import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Award, FileText, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const educationItems = ['dam', 'university', 'asir'] as const;

export function Education() {
  const t = useTranslations('education');
  const tn = useTranslations('nav');
  const achievements = t.raw('achievements.items') as string[];

  const letters = [
    { href: '/data/cv/2024_ReferenceLetter_Kristian.pdf', label: t('recognition.letterEn') },
    { href: '/data/cv/2024_ReferenceSchreiben_Kristian.pdf', label: t('recognition.letterDe') },
  ];

  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="container-x">
        <SectionHeading id="education-title" index="05" label={tn('education')} title={t('title')} subtitle={t('subtitle')} />

        <ol className="border-b border-border">
          {educationItems.map((item) => (
            <Reveal
              as="li"
              key={item}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <p className="font-mono text-sm uppercase tracking-[0.06em] md:col-span-3">
                {t(`items.${item}.period`)}
              </p>
              <div className="md:col-span-6">
                <h3 className="text-balance text-xl font-semibold leading-snug tracking-[-0.02em] md:text-2xl">
                  {t(`items.${item}.title`)}
                </h3>
                <p className="mt-2 font-serif text-xl italic text-muted-foreground">
                  {t(`items.${item}.institution`)}
                </p>
                {item === 'asir' && (
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    {t(`items.${item}.grade`)}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground md:col-span-3 md:text-right">
                <p>{t(`items.${item}.field`)}</p>
                <p className="mt-1">{t(`items.${item}.location`)}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h3 className="eyebrow mb-6">{t('achievements.title')}</h3>
            <ol className="space-y-0">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[2.5rem_1fr] border-t border-border py-4 text-pretty leading-relaxed last:border-b"
                >
                  <span className="font-mono text-xs leading-7 text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={100} className="rounded-lg border border-border bg-card p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <Award className="h-4 w-4" aria-hidden="true" />
                {t('recognition.bestRecord')}
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { src: '/imgs/achievements/trofeo_mejor_expediente_nobg.webp', alt: t('recognition.trophyAlt') },
                  { src: '/imgs/achievements/diploma_mejor_expediente_nobg.webp', alt: t('recognition.diplomaAlt') },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden rounded bg-background">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 220px, 45vw"
                      className="object-contain p-3 grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160} className="rounded-lg border border-border bg-card p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {t('recognition.letters')}
              </h4>
              <ul className="mt-3">
                {letters.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border-b border-border py-3 text-sm text-muted-foreground transition-colors last:border-0 hover:text-foreground"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
