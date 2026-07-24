import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Modern cards for the core textile and design capabilities."
          description="Each group is broken out so recruiters can scan technical depth, creative range, and software fluency without hunting through long paragraphs."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(profile.skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.06}>
              <article className="h-full rounded-[1.8rem] border border-charcoal/8 bg-white/75 p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{category}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-charcoal/8 bg-ivory/90 px-4 py-2 text-sm text-charcoal/78">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}