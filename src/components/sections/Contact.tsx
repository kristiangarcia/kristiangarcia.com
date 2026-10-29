import { useTranslations } from 'next-intl';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Reveal } from '@/components/motion/Reveal';
import { MailtoForm } from '@/components/ui/MailtoForm';

export function Contact() {
  const t = useTranslations('contact');
  const tn = useTranslations('nav');

  const socials = [
    { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub', handle: 'kristiangarcia' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn', handle: 'kristian-garcia-paulsen' },
  ];

  const field =
    'w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none focus:ring-0 focus-visible:outline-none';

  return (
    <section id="contact" aria-labelledby="contact-title" className="section overflow-hidden bg-foreground text-background">
      <div className="container-x">
        <Reveal className="flex items-center gap-4 border-t border-background/70 pt-4">
          <span className="eyebrow !text-background">06</span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="eyebrow !text-background/60">{tn('contact')}</span>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="contact-title"
            className="mt-10 text-balance text-[clamp(3rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]"
          >
            {t('title')}
            <span className="block font-serif font-normal italic tracking-[-0.03em] text-background/60">
              {t('subtitle')}
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" delay={120}>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-background/70">{t('description')}</p>

            <a
              href={SITE_CONFIG.social.email}
              className="group mt-10 inline-flex max-w-full items-center gap-3 break-all text-[clamp(1.4rem,3.2vw,2.6rem)] font-medium tracking-[-0.03em]"
            >
              <span className="link-u">{t('info.email')}</span>
              <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <ul className="mt-12 border-t border-background/20">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-background/20 py-4 transition-[padding] duration-500 hover:pl-2"
                  >
                    <span className="flex items-center gap-3">
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                      <span className="font-medium">{s.label}</span>
                    </span>
                    <span className="flex items-center gap-2 font-mono text-xs text-background/60">
                      {s.handle}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 border-b border-background/20 py-4 text-background/70">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t('info.location')}
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={200}>
            <MailtoForm email={SITE_CONFIG.email} className="space-y-8">
              <div className="[&_input]:border-background/25 [&_input]:text-background [&_input]:placeholder:text-background/45 [&_input:focus]:border-background">
                <label htmlFor="subject" className="eyebrow !text-background/60">
                  {t('form.name')}
                </label>
                <input type="text" id="subject" name="subject" className={field} placeholder={t('form.name')} required />
              </div>
              <div className="[&_textarea]:border-background/25 [&_textarea]:text-background [&_textarea]:placeholder:text-background/45 [&_textarea:focus]:border-background">
                <label htmlFor="body" className="eyebrow !text-background/60">
                  {t('form.message')}
                </label>
                <textarea id="body" name="body" rows={5} className={`${field} resize-none`} placeholder={t('form.message')} required />
              </div>
              <button
                type="submit"
                className="btn group w-full bg-background text-foreground hover:bg-background/85 focus-visible:outline-background"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t('form.send')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </MailtoForm>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
