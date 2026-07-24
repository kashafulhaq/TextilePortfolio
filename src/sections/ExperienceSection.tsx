import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A clean timeline that reads quickly and still feels premium."
          description="The timeline reflects the textile roles and internship experience listed in the CV, with clear emphasis on digital print development, repeats, colorways, and production-ready artwork."
        />

        <div className="mt-12 space-y-5">
          {profile.experience.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 0.08}>
              <article className="grid gap-5 rounded-[2rem] border border-charcoal/8 bg-white/70 p-6 shadow-soft lg:grid-cols-[0.65fr_1.35fr] lg:p-7">
                <div className="space-y-3 border-b border-charcoal/8 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{entry.duration}</p>
                  <h3 className="font-serif text-3xl leading-tight text-charcoal">{entry.company}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-charcoal/55">{entry.role}</p>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-charcoal">Key Contributions</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-charcoal/72">
                      {entry.contributions.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-charcoal">Responsibilities</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-charcoal/72">
                      {entry.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-charcoal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <article className="rounded-[2rem] border border-charcoal/8 bg-charcoal p-6 text-ivory shadow-soft sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/90">Education</p>
              <div className="mt-5 space-y-5">
                {profile.education.map((entry) => (
                  <div key={entry.school} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h4 className="font-serif text-3xl leading-tight">{entry.school}</h4>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-gold/80">{entry.degree}</p>
                    <p className="mt-3 text-sm leading-7 text-ivory/82">{entry.duration}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Professional Links</p>
              {profile.socialLinks.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-medium text-charcoal/76 transition hover:border-gold hover:text-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              <p className="mt-6 max-w-2xl text-sm leading-7 text-charcoal/72">
                The CV does not list a public professional profile link, so the contact section focuses on the direct
                phone and email details recruiters can use immediately.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}