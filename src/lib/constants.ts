export const SITE_CONFIG = {
  name: 'Kristian García Paulsen',
  title: 'AI Engineer & Full-Stack Developer',
  description:
    'AI Engineer and full-stack developer in Granada, Spain. I build LLM agents for real business workflows: multi-agent pipelines, human-in-the-loop email agents, agent governance tooling and a production AI assistant for Unit4 ERP.',
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
    en: '/data/cv/Kristian CV (English) - 29-10-26.pdf',
    es: '/data/cv/Kristian CV (Español) - 29-10-26.pdf',
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
