import { SiteShell, localeMetadata } from '@/components/layout/SiteShell';
import { Home } from '@/components/layout/Home';
import { routing } from '@/i18n/routing';

export async function generateMetadata() {
  return localeMetadata(routing.defaultLocale);
}

// Raíz = inglés (idioma por defecto). Los navegadores en español que entran desde fuera pasan a /es, como hacía antes el middleware.
const REDIRECT = "try{var l=(navigator.language||'').slice(0,2);if(l==='es'&&!document.referrer.includes(location.host)&&!sessionStorage.getItem('lang-seen')){sessionStorage.setItem('lang-seen','1');location.replace('/es')}}catch(e){}";

export default function RootPage() {
  return (
    <SiteShell locale={routing.defaultLocale}>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT }} />
      <Home />
    </SiteShell>
  );
}
