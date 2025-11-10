export const SITE_CONFIG = {
  name: 'Kristian García Paulsen',
  title: 'Fullstack Developer specialized in AI Agents',
  description:
    'Passionate about technology, I learn quickly and deliver high-quality solutions to real problems.',
  url: 'https://kristiangarcia.com',
  email: 'info@kristiangarcia.com',
  location: 'Granada, Spain',
  social: {
    github: 'https://github.com/kristiangarcia',
    githubAlt: 'https://github.com/Kristiansito',
    linkedin: 'https://www.linkedin.com/in/kristian-garcia-paulsen/',
    email: 'mailto:info@kristiangarcia.com',
  },
  cv: {
    en: '/data/cv/Kristian CV (English) - 14-10-25.pdf',
    es: '/data/cv/Kristian CV (Español) - 14-10-25.pdf',
  },
};

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'nav.home' },
  { href: '#about', label: 'nav.about' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#experience', label: 'nav.experience' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#education', label: 'nav.education' },
  { href: '#contact', label: 'nav.contact' },
] as const;
