import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronUp, FiMail } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { Lightbox } from '@/components/Lightbox';
import { profile } from '@/data/profile';
import { portfolioImages, type PortfolioImage } from '@/data/images';
import { AboutSection } from '@/sections/AboutSection';
import { CollectionsSection } from '@/sections/CollectionsSection';
import { ContactSection } from '@/sections/ContactSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { Footer } from '@/sections/Footer';
import { GallerySection } from '@/sections/GallerySection';
import { HeroSection } from '@/sections/HeroSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { SoftwareSection } from '@/sections/SoftwareSection';
import { TechnicalStudiesSection } from '@/sections/TechnicalStudiesSection';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Technical Studies', href: '#technical' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [activeImage, setActiveImage] = useState<PortfolioImage | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const activeIndex = useMemo(() => {
    if (!activeImage) {
      return -1;
    }
    return portfolioImages.findIndex((image) => image.id === activeImage.id);
  }, [activeImage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const navigateImage = (direction: 1 | -1) => {
    if (activeIndex < 0) {
      return;
    }

    const nextIndex = (activeIndex + direction + portfolioImages.length) % portfolioImages.length;
    setActiveImage(portfolioImages[nextIndex]);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />

      <header className="sticky top-0 z-40 border-b border-white/50 bg-[#f8f3ec]/82 backdrop-blur-xl">
        <Container className="py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-serif text-3xl text-charcoal">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/52">{profile.title}</p>
            </div>
            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-charcoal/8 bg-white/65 px-4 py-2 text-sm font-medium text-charcoal/72 transition hover:border-gold hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-black"
              >
                Enquire <FiMail />
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CollectionsSection onOpenImage={setActiveImage} />
        <GallerySection onOpenImage={setActiveImage} />
        <TechnicalStudiesSection onOpenImage={setActiveImage} />
        <SoftwareSection />
        <ContactSection />
      </main>

      <Footer onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <Lightbox
        image={activeImage}
        onClose={() => setActiveImage(null)}
        onNext={() => navigateImage(1)}
        onPrevious={() => navigateImage(-1)}
      />

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-ivory shadow-soft transition hover:bg-black"
            aria-label="Back to top"
          >
            <FiChevronUp />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;