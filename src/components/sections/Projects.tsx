import { useTranslations } from 'next-intl';
import { ArrowUpRight, Github } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Spotlight } from '@/components/motion/Spotlight';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

type ProjectKey = 'nexus' | 'cognitia' | 'agentCatalog' | 'mailpilot' | 'luminakraft' | 'launcher';

const projects: Array<{ key: ProjectKey; githubUrl?: string; websiteUrl?: string; wide?: boolean }> = [
  { key: 'nexus', wide: true },
  { key: 'cognitia' },
  { key: 'agentCatalog' },
  { key: 'mailpilot' },
  { key: 'luminakraft', websiteUrl: 'https://www.luminakraft.com/' },
  { key: 'launcher', githubUrl: 'https://github.com/LuminaKraft/LuminaKraftLauncher', wide: true },
];

export function Projects() {
  const t = useTranslations('projects');
  const tn = useTranslations('nav');

  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-card">
      <div className="container-x">
        <SectionHeading id="projects-title" index="04" label={tn('projects')} title={t('title')} subtitle={t('subtitle')} />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((p, i) => {
            const tech = t.raw(`items.${p.key}.tech`) as string[];
            const highlights = t.raw(`items.${p.key}.highlights`) as string[];
            return (
              <Reveal
                as="li"
                key={p.key}
                delay={(i % 3) * 90}
                className={cn('flex', p.wide && 'lg:col-span-2', p.key === 'nexus' && 'md:col-span-2')}
              >
                <Spotlight
                  className="group flex w-full flex-col rounded-lg border border-border bg-background p-6 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-foreground/50 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      P/{String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex gap-2">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          {t('viewGithub')}
                        </a>
                      )}
                      {p.websiteUrl && (
                        <a
                          href={p.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm group/l"
                        >
                          {t('website')}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className={cn(
                      'mt-10 text-balance font-semibold leading-[1.02] tracking-[-0.04em]',
                      p.wide ? 'text-3xl md:text-[2.75rem]' : 'text-3xl'
                    )}
                  >
                    {t(`items.${p.key}.title`)}
                  </h3>
                  <p
                    className={cn(
                      'mt-4 text-pretty leading-relaxed text-muted-foreground',
                      p.wide && 'max-w-2xl md:text-lg'
                    )}
                  >
                    {t(`items.${p.key}.description`)}
                  </p>

                  <ul className={cn('mt-6 space-y-2 text-sm', p.wide && 'md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0 md:gap-y-2')}>
                    {highlights.map((h) => (
                      <li key={h} className="flex items-baseline gap-2.5">
                        <span aria-hidden="true" className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <ul className="flex flex-wrap gap-1.5 border-t border-border pt-5" aria-label="Tech stack">
                      {tech.map((item) => (
                        <li key={item} className="tag group-hover:border-foreground/30">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
