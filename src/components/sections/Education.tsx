'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, FileText } from 'lucide-react';
import Image from 'next/image';

const educationItems = ['university', 'dam', 'asir'] as const;

export function Education() {
  const t = useTranslations('education');

  return (
    <section id="education" className="section bg-muted/30">
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

        {/* Education Items */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {educationItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">
                    {t(`items.${item}.title`)}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-2">
                    {t(`items.${item}.institution`)}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {t(`items.${item}.period`)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {t(`items.${item}.location`)}
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {t(`items.${item}.field`)}
                  </p>

                  {item === 'asir' && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <Award className="h-4 w-4" />
                      {t(`items.${item}.grade`)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">
              {t('achievements.title')}
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(t.raw('achievements.items') as string[]).map((achievement, i) => (
              <li
                key={i}
                className="flex gap-2 items-start"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Recognition Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Best Academic Record
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image
                  src="/imgs/achievements/trofeo_mejor_expediente_nobg.webp"
                  alt="Best Academic Record Trophy"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/imgs/achievements/diploma_mejor_expediente_nobg.webp"
                  alt="Best Academic Record Diploma"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Reference Letters
            </h4>
            <div className="space-y-3">
              <a
                href="/data/cv/2024_ReferenceLetter_Kristian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="h-4 w-4" />
                Erasmus+ Reference Letter (English)
              </a>
              <a
                href="/data/cv/2024_ReferenceSchreiben_Kristian.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="h-4 w-4" />
                Erasmus+ Referenzschreiben (Deutsch)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
