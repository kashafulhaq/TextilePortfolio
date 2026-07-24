import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Textile design with editorial restraint and commercial clarity."
          description={profile.about}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <p className="text-base leading-8 text-charcoal/78 sm:text-lg">{profile.philosophy}</p>
              <p className="text-base leading-8 text-charcoal/78 sm:text-lg">{profile.goals}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.specialties.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-charcoal/8 bg-white/75 px-4 py-4 text-sm font-medium text-charcoal/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[2rem] border border-charcoal/8 bg-charcoal p-6 text-ivory shadow-soft sm:p-8">
            <div className="flex h-full min-h-[28rem] flex-col justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/90">Professional Snapshot</p>
                <div className="mt-5 grid gap-4">
                  {[
                    ['Location', profile.location],
                    ['Email', profile.email],
                    ['Phone', profile.phone],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4">
                      <div className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/75">{label}</div>
                      <div className="mt-2 text-sm text-ivory/88">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold/90">Focus</p>
                <p className="mt-3 text-sm leading-7 text-ivory/84">
                  {profile.title} with a portfolio emphasis on original artwork, repeat accuracy, and design boards that
                  read cleanly on both desktop and mobile.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}