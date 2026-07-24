import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        <span className="h-px w-10 bg-gold/60" />
        {eyebrow}
      </span>
      <div className="max-w-3xl">
        <h2 className="font-serif text-4xl font-semibold leading-none text-charcoal sm:text-5xl lg:text-6xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-charcoal/72 sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
}