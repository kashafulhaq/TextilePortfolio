import { Container } from '@/components/Container';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { portfolioCollections } from '@/data/images';
import type { PortfolioImage } from '@/data/images';

type CollectionsSectionProps = {
  onOpenImage: (image: PortfolioImage) => void;
};

export function CollectionsSection({ onOpenImage }: CollectionsSectionProps) {
  return (
    <section id="collections" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Collections"
          title="Two clear groups, organized exactly around the real folder structure."
          description="The portfolio now keeps only My Creations and Technical Studies & Replica Work, so nothing is misclassified or presented as a separate wrong category."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioCollections.map((collection, index) => {
            const previewImages = collection.images.slice(0, 4);
            return (
              <Reveal key={collection.key} delay={index * 0.08}>
                <article className="h-full overflow-hidden rounded-[2rem] border border-charcoal/8 bg-white/70 p-5 shadow-soft">
                  <div className="rounded-[1.4rem] bg-gradient-to-br from-white to-ivory p-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{collection.key === 'technical' ? 'Replicas' : 'My Creations'}</p>
                        <h3 className="mt-3 font-serif text-3xl leading-none text-charcoal">{collection.title}</h3>
                      </div>
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                        {collection.images.length} works
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-charcoal/68">{collection.description}</p>
                  </div>

                  <div className="mt-5">
                    {previewImages.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {previewImages.map((image) => (
                          <PortfolioCard key={image.id} image={image} onOpen={onOpenImage} compact />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-[1.4rem] border border-dashed border-charcoal/10 bg-white/70 px-4 py-10 text-center text-sm text-charcoal/60">
                        No images found in this collection yet.
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}