import { Reveal } from '@/components/motion/Reveal';

/** Editorial section header: index + label rule, then a large title. */
export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  id,
}: {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  id: string;
}) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal className="flex items-center gap-4 border-t border-foreground/80 pt-4">
        <span className="eyebrow !text-foreground">{index}</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="eyebrow">{label}</span>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
        <Reveal as="div" className="md:col-span-8" delay={80}>
          <h2
            id={id}
            className="text-balance text-[clamp(2.6rem,6.2vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          >
            {title}
          </h2>
        </Reveal>
        {subtitle && (
          <Reveal className="md:col-span-4 md:pb-2 md:text-right" delay={160}>
            <p className="font-serif text-2xl italic leading-tight text-muted-foreground md:text-3xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
