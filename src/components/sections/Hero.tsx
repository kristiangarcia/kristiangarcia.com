'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/imgs/yo/sinfondo.webp"
                alt={SITE_CONFIG.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              {t('title')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tagline')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              {t('description')}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.social.email}
              className="p-3 rounded-full border border-border hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" onClick={() => scrollToSection('#contact')}>
              {t('cta')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#projects')}
            >
              {t('viewWork')}
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-muted transition-colors group"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
