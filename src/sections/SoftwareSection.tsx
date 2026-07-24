import { FiBarChart2, FiGrid, FiImage, FiPenTool, FiType } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

const softwareIcons = [FiImage, FiPenTool, FiGrid, FiType, FiBarChart2];

export function SoftwareSection() {
  return (
    <section id="software" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Software"
          title="A restrained software presentation that feels polished, not cluttered."
          description="Each tool appears in a card with enough breathing room to feel premium on desktop and compact on mobile."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {profile.software.map((tool, index) => {
            const Icon = softwareIcons[index % softwareIcons.length];
            return (
              <Reveal key={tool} delay={index * 0.05}>
                <article className="flex h-full flex-col justify-between rounded-[1.6rem] border border-charcoal/8 bg-white/75 p-5 shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-ivory">
                    <Icon className="text-xl" />
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-charcoal/58">Software</p>
                    <h3 className="mt-2 font-serif text-2xl text-charcoal">{tool}</h3>
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