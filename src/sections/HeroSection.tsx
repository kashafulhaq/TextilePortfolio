import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { PrimaryButton } from '@/components/PrimaryButton';
import { profile } from '@/data/profile';
import { heroImage, fallbackPortfolioImage } from '@/data/images';

export function HeroSection() {
  const safeHeroImage = heroImage ?? fallbackPortfolioImage;

  return (
    <section className="section-shell overflow-hidden pt-4 sm:pt-6 lg:pt-8">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="glass-panel hero-pattern relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${safeHeroImage.src})` }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex min-h-[32rem] flex-col justify-between gap-10">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.36em] text-gold">
                <span className="h-px w-12 bg-gold/60" />
                Premium Textile Portfolio
              </div>

              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="font-serif text-5xl font-semibold leading-none text-ivory sm:text-6xl lg:text-7xl"
                >
                  MINAHIL FATIMA
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-none text-ivory sm:text-5xl lg:text-6xl"
                >
                  Senior Textile Designer
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.16 }}
                  className="mt-6 max-w-xl text-sm leading-7 text-ivory/80 sm:text-base"
                >
                  {profile.summary}
                </motion.p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#portfolio">
                  View Portfolio <FiArrowRight />
                </PrimaryButton>
                <PrimaryButton href={profile.cvDownloadHref} variant="ghost">
                  Download CV <FiDownload />
                </PrimaryButton>
                <PrimaryButton href="#contact" variant="ghost">
                  Contact Me <FiMail />
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-rows-[1fr_auto]">
            <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Creative Direction</p>
                  <h2 className="mt-4 max-w-md font-serif text-4xl leading-none text-charcoal sm:text-5xl">
                    Elegant textile design for premium collections.
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-7 text-charcoal/72 sm:text-base">
                  Original creations and technical studies are presented with editorial precision so recruiters can
                  assess style, range, and technical fluency in seconds.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: '2', label: 'Core folders' },
                    { value: `${profile.name.split(' ').length > 0 ? '52+' : '50+'}`, label: 'Portfolio images' },
                    { value: '100%', label: 'Recruiter-friendly layout' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-[1.25rem] border border-charcoal/8 bg-white/70 p-4">
                      <div className="font-serif text-3xl text-charcoal">{stat.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.24em] text-charcoal/55">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-charcoal shadow-soft">
              <img src={safeHeroImage.src} alt={safeHeroImage.alt} className="h-full w-full object-cover opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/84 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-gold/90">Featured artwork</p>
                <p className="mt-2 font-serif text-3xl leading-none">Design (54)</p>
                <p className="mt-3 text-sm leading-6 text-ivory/76">
                  The hero uses the selected textile design as a subtle backdrop to keep the artwork central and
                  visually memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}