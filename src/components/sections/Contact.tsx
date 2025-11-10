'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Contact() {
  const t = useTranslations('contact');

  const contactInfo = [
    { icon: MapPin, text: t('info.location'), href: null },
    { icon: Mail, text: t('info.email'), href: SITE_CONFIG.social.email },
  ];

  const socialLinks = [
    { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: SITE_CONFIG.social.email, label: 'Email' },
  ];

  return (
    <section id="contact" className="section">
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

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-6">{t('description')}</p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 hover:text-primary transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="flex items-center gap-3">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium mb-4">{t('social.title')}</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label={link.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form (mailto) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <form
              action={SITE_CONFIG.social.email}
              method="GET"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('form.name')}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium mb-2"
                >
                  {t('form.message')}
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={6}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t('form.message')}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t('form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
