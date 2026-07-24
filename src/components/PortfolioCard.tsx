import { motion } from 'framer-motion';
import type { PortfolioImage } from '@/data/images';

type PortfolioCardProps = {
  image: PortfolioImage;
  onOpen: (image: PortfolioImage) => void;
  compact?: boolean;
};

export function PortfolioCard({ image, onOpen, compact = false }: PortfolioCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.28 }}
      onClick={() => onOpen(image)}
      className={`group relative overflow-hidden rounded-[1.75rem] bg-white/65 text-left shadow-soft ring-1 ring-black/5 ${compact ? 'aspect-[4/5]' : 'aspect-[4/5]'} w-full`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/18 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-ivory sm:p-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-gold/90">{image.folderLabel}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight">{image.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-ivory/78">{image.tags.join(' · ')}</p>
      </div>
    </motion.button>
  );
}