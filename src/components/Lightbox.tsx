import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { PortfolioImage } from '@/data/images';

type LightboxProps = {
  image: PortfolioImage | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

export function Lightbox({ image, onClose, onNext, onPrevious }: LightboxProps) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/82 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={image.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 18, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="relative flex w-full max-w-6xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#fbf7f1] p-3 shadow-soft lg:flex-row lg:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-charcoal/90 p-3 text-white transition hover:bg-black"
              aria-label="Close lightbox"
            >
              <FiX />
            </button>

            <div className="relative flex-1 overflow-hidden rounded-[1.5rem] bg-ivory/80">
              <img src={image.src} alt={image.alt} className="h-full max-h-[75vh] w-full object-contain" />
            </div>

            <div className="flex w-full flex-col justify-between gap-4 rounded-[1.5rem] border border-charcoal/5 bg-white/75 p-6 lg:w-[24rem]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{image.folderLabel}</p>
                <h3 className="mt-3 font-serif text-4xl leading-none text-charcoal">{image.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/70">{image.folderLabel}</p>
                <p className="mt-2 text-sm leading-7 text-charcoal/70">{image.tags.join(' · ')}</p>
              </div>
              <p className="text-sm leading-7 text-charcoal/62">
                Use this preview to inspect the artwork scale, motif placement, and surface finish. The portfolio is
                optimized for quick recruiter review while keeping the imagery central.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition hover:border-gold hover:text-gold"
                  aria-label="Previous image"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition hover:border-gold hover:text-gold"
                  aria-label="Next image"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}