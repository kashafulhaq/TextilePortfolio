import { Container } from '@/components/Container';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { technicalCollection } from '@/data/images';
import type { PortfolioImage } from '@/data/images';

type TechnicalStudiesSectionProps = {
  onOpenImage: (image: PortfolioImage) => void;
};

export function TechnicalStudiesSection({ onOpenImage }: TechnicalStudiesSectionProps) {
  const technical = technicalCollection;

  return (
    <section id="technical" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technical Studies & Replica Work"
          title="A separate section for the studies that strengthen precision and software expertise."
          description="These pieces are displayed apart from the original artwork to keep authorship clear. They demonstrate pattern recreation, color matching, repeat development, and software expertise rather than original collection development."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">Study Note</p>
              <p className="mt-4 text-base leading-8 text-charcoal/74 sm:text-lg">
                This section is intentionally separated from the original designs. It gives recruiters a clear view of
                technical reconstruction skills, repeat logic, and software fluency without blurring the boundary between
                study work and authored work.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-charcoal/72">
                {[
                  'Pattern reconstruction and visual analysis',
                  'Placement, border, and layout studies',
                  'Precision rendering and presentation sheets',
                  'CAD-ready organization for review and iteration',
                ].map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-charcoal/8 bg-white/75 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {technical.images.slice(0, 6).map((image, index) => (
              <Reveal key={image.id} delay={index * 0.04}>
                <PortfolioCard image={image} onOpen={onOpenImage} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}