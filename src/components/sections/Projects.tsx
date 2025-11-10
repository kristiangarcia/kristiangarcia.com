'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const projects: Array<{
  key: 'zaly' | 'launcher' | 'luminakraft';
  githubUrl?: string;
  websiteUrl?: string;
}> = [
  {
    key: 'zaly',
    githubUrl: 'https://github.com/CLAI-Academy',
  },
  {
    key: 'launcher',
    githubUrl: 'https://github.com/LuminaKraft/LuminaKraftLauncher',
  },
  {
    key: 'luminakraft',
    websiteUrl: 'https://www.luminakraft.com/',
  },
];

export function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const tech = t.raw(`items.${project.key}.tech`) as string[];
            const highlights = t.raw(
              `items.${project.key}.highlights`
            ) as string[];

            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg hover:border-primary transition-colors h-full flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">
                    {t(`items.${project.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`items.${project.key}.description`)}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-6 text-sm">
                    {highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex gap-2 items-start"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(project.githubUrl, '_blank')
                        }
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t('viewGithub')}
                      </Button>
                    )}
                    {project.websiteUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(project.websiteUrl, '_blank')
                        }
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Website
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
