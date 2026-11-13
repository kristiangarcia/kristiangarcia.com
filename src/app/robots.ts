import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

// Exportación estática: se genera /robots.txt en el build (Cloudflare antepone sus "content signals").
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
