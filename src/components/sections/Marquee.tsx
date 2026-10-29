import { useTranslations } from 'next-intl';

/** Infinite ticker of core skills (pure CSS, paused on hover / reduced motion). */
export function Marquee() {
  const t = useTranslations('skills');
  const items = [
    ...(t.raw('categories.ai.items') as string[]),
    ...(t.raw('categories.backend.items') as string[]).slice(0, 5),
    'Next.js',
    'TypeScript',
    'Docker',
  ];
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium tracking-[-0.03em]">
            {item}
          </span>
          <span aria-hidden="true" className="text-accent">
            ✳
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee relative overflow-hidden border-y border-border bg-card py-5 md:py-7">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent md:w-32" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card to-transparent md:w-32" />
    </div>
  );
}
