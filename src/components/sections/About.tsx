'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Code, Lightbulb, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const highlights = [
  {
    icon: Sparkles,
    key: 'ai',
  },
  {
    icon: Code,
    key: 'fullstack',
  },
  {
    icon: Lightbulb,
    key: 'learning',
  },
];

export function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  const downloadCV = () => {
    const cvUrl = locale === 'es' ? SITE_CONFIG.cv.es : SITE_CONFIG.cv.en;
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="section bg-muted/30">
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

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`highlights.${highlight.key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`highlights.${highlight.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CV Download & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" onClick={downloadCV} className="min-w-[200px]">
            <Download className="h-5 w-5 mr-2" />
            {t('downloadCV')}
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{t('location')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
