'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const jobs = ['clai', 'civica', 'floorball'] as const;

export function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="section bg-muted/30">
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

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {jobs.map((job, index) => {
            const description = t.raw(
              `jobs.${job}.description`
            ) as string[];

            return (
              <motion.div
                key={job}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">
                      {t(`jobs.${job}.title`)}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {t(`jobs.${job}.company`)}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {t(`jobs.${job}.period`)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {t(`jobs.${job}.location`)}
                      </div>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {t(`jobs.${job}.type`)}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex gap-2 before:content-['•'] before:text-primary before:font-bold"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
