import { startTransition, useDeferredValue, useMemo, useState } from 'react';
import { Container } from '@/components/Container';
import { PortfolioCard } from '@/components/PortfolioCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { portfolioCollections, portfolioImages } from '@/data/images';
import type { PortfolioImage } from '@/data/images';

type GallerySectionProps = {
  onOpenImage: (image: PortfolioImage) => void;
};

export function GallerySection({ onOpenImage }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);

  const filters = useMemo(
    () => [
      { label: 'All', value: 'all' },
      ...portfolioCollections.map((collection) => ({ label: collection.title, value: collection.key })),
    ],
    [],
  );

  const filteredImages = useMemo(() => {
    const normalizedSearch = deferredSearch.trim().toLowerCase();
    return portfolioImages.filter((image) => {
      const matchesFilter = activeFilter === 'all' ? true : image.folderKey === activeFilter;
      const matchesSearch =
        normalizedSearch.length === 0
          ? true
          : [image.title, image.folderLabel, image.collection, ...image.tags].some((value) =>
              value.toLowerCase().includes(normalizedSearch),
            );
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, deferredSearch]);

  return (
    <section id="portfolio" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio Gallery"
          title="A responsive masonry gallery with filters, search, hover, and lightbox preview."
          description="Original textile work appears first under My Creations, while Technical Studies & Replica Work stays separate for clarity."
        />

        <Reveal className="mt-10 rounded-[2rem] border border-charcoal/8 bg-white/65 p-5 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = activeFilter === filter.value;
                return (
                  <button
                    type="button"
                    key={filter.value}
                    onClick={() => startTransition(() => setActiveFilter(filter.value))}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active ? 'bg-charcoal text-ivory' : 'border border-charcoal/10 bg-white text-charcoal/72 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <label className="w-full max-w-sm">
              <span className="sr-only">Search portfolio</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search artwork, collection, or study type"
                className="w-full rounded-full border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/38 focus:border-gold"
              />
            </label>
          </div>
        </Reveal>

        <div className="mt-8 masonry-grid gap-5 [column-fill:_balance]">
          {filteredImages.map((image, index) => (
            <Reveal key={image.id} delay={(index % 6) * 0.03} className="masonry-item mb-5 inline-block w-full">
              <PortfolioCard image={image} onOpen={onOpenImage} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}