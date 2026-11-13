import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

// Exportación estática: se genera /sitemap.xml en el build.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: SITE_CONFIG.url, es: `${SITE_CONFIG.url}/es`, 'x-default': SITE_CONFIG.url };
  const lastModified = new Date();
  return [
    { url: SITE_CONFIG.url, lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: `${SITE_CONFIG.url}/es`, lastModified, changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
  ];
}
