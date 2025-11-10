'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Wrench,
  Brain,
  Globe,
} from 'lucide-react';

const skillCategories = [
  { key: 'frontend', icon: Code },
  { key: 'backend', icon: Server },
  { key: 'tools', icon: Wrench },
  { key: 'ai', icon: Brain },
];

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="section">
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

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const items = t.raw(`categories.${category.key}.items`) as string[];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {t(`categories.${category.key}.title`)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + itemIndex * 0.05,
                      }}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t('languages.title')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="font-semibold mb-1">{t('languages.spanish')}</p>
              <p className="text-sm text-muted-foreground">
                {t('languages.native')}
              </p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="font-semibold mb-1">{t('languages.english')}</p>
              <p className="text-sm text-muted-foreground">
                {t('languages.proficient')}
              </p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="font-semibold mb-1">{t('languages.norwegian')}</p>
              <p className="text-sm text-muted-foreground">
                {t('languages.intermediate')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
