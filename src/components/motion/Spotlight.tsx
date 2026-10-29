'use client';

import { useRef, type ReactNode, type PointerEvent } from 'react';
import { cn } from '@/lib/utils';

/** Card wrapper with a soft monochrome light that follows the pointer. */
export function Spotlight({
  children,
  className,
  as: Tag = 'article',
}: {
  children: ReactNode;
  className?: string;
  as?: 'article' | 'div' | 'li';
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} onPointerMove={onMove} className={cn('spotlight', className)}>
      {children}
    </Tag>
  );
}
