'use client';

import type { FormEvent, ReactNode } from 'react';

/**
 * Opens the visitor's mail client with subject/body prefilled. Done in JS
 * instead of `<form action="mailto:">` to avoid the browser's mixed-content
 * warning on HTTPS pages.
 */
export function MailtoForm({ email, className, children }: { email: string; className?: string; children: ReactNode }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get('subject') ?? ''));
    const body = encodeURIComponent(String(data.get('body') ?? ''));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}
