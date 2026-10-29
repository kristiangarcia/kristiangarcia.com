import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const categories = ['ai', 'frontend', 'backend', 'tools'] as const;
const languages = [
  { name: 'spanish', level: 'native' },
  { name: 'english', level: 'proficient' },
  { name: 'norwegian', level: 'intermediate' },
] as const;

export function Skills() {
  const t = useTranslations('skills');
  const tn = useTranslations('nav');

  return (
    <section id="skills" aria-labelledby="skills-title" className="section bg-card">
      <div className="container-x">
        <SectionHeading id="skills-title" index="02" label={tn('skills')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((key, ci) => {
            const items = t.raw(`categories.${key}.items`) as string[];
            return (
              <Reveal key={key} delay={ci * 90} className="flex flex-col bg-card p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{t(`categories.${key}.title`)}</h3>
                  <span className="font-serif text-4xl italic leading-none text-muted-foreground">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <h3 className="eyebrow mb-6">{t('languages.title')}</h3>
          <ul className="grid border-t border-border md:grid-cols-3">
            {languages.map((l, i) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between gap-4 border-b border-border py-6 md:flex-col md:items-start md:gap-3 md:border-b-0 md:pr-8 [&:not(:first-child)]:md:border-l md:[&:not(:first-child)]:pl-8"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {t(`languages.${l.name}`)}
                  </span>
                </span>
                <span className="text-right text-sm text-muted-foreground md:text-left">
                  {t(`languages.${l.level}`)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
