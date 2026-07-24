import type { ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'solid' | 'ghost';
};

export function PrimaryButton({ children, href, variant = 'solid' }: PrimaryButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300';

  const styles =
    variant === 'solid'
      ? 'bg-charcoal text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-black'
      : 'border border-charcoal/15 bg-white/70 text-charcoal hover:border-gold hover:text-gold';

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}