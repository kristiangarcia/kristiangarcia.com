import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const jobs = ['civicaAi', 'nexus', 'clai', 'civica', 'floorball'] as const;

export function Experience() {
  const t = useTranslations('experience');
  const tn = useTranslations('nav');

  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          index="03"
          label={tn('experience')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <ol className="border-b border-border">
          {jobs.map((job, i) => {
            const description = t.raw(`jobs.${job}.description`) as string[];
            const tech = t.raw(`jobs.${job}.tech`) as string[];
            const hasType = t.has(`jobs.${job}.type`);
            return (
              <Reveal
                as="li"
                key={job}
                className="group relative grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="flex items-baseline gap-3 md:block">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, '0')} / {String(jobs.length).padStart(2, '0')}
                    </span>
                    <p className="font-mono text-sm uppercase tracking-[0.06em] md:mt-4">
                      {t(`jobs.${job}.period`)}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t(`jobs.${job}.location`)}</p>
                  {hasType && (
                    <span className="tag mt-4 border-foreground/30 text-foreground">{t(`jobs.${job}.type`)}</span>
                  )}
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                  <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-[2rem]">
                    {t(`jobs.${job}.title`)}
                  </h3>
                  <p className="mt-2 flex items-center gap-2.5 font-serif text-xl italic text-muted-foreground md:text-2xl">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {t(`jobs.${job}.company`)}
                  </p>

                  <ul className="mt-6 max-w-3xl space-y-3">
                    {description.map((item, k) => (
                      <li key={k} className="grid grid-cols-[1.25rem_1fr] text-pretty leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="text-foreground/40">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {tech.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                      {tech.map((item) => (
                        <li key={item} className="tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
