import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-shell py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="A premium contact block with clear details and an elegant form."
          description="The form is front-end ready and can be connected to a form service later. For now it keeps recruiters one click away from the direct contact details."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-charcoal/8 bg-charcoal p-6 text-ivory shadow-soft sm:p-8">
              <div className="space-y-4">
                {[
                  { icon: FiMapPin, label: 'Location', value: profile.location },
                  { icon: FiMail, label: 'Email', value: profile.email },
                  { icon: FiPhone, label: 'Phone', value: profile.phone },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                      <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold">
                        <Icon />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">{item.label}</p>
                        <p className="mt-2 text-sm leading-7 text-ivory/82">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">LinkedIn</p>
                <p className="mt-2 text-sm leading-7 text-ivory/82">
                  {profile.linkedin || 'No public LinkedIn profile is listed on the CV.'}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              className="glass-panel grid gap-4 rounded-[2rem] p-6 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-[1rem] border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-charcoal/36 focus:border-gold"
                  placeholder="Your name"
                />
                <input
                  className="rounded-[1rem] border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-charcoal/36 focus:border-gold"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <input
                className="rounded-[1rem] border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-charcoal/36 focus:border-gold"
                placeholder="Subject"
              />
              <textarea
                className="min-h-40 rounded-[1rem] border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-charcoal/36 focus:border-gold"
                placeholder="Tell me about the role, project, or collaboration..."
              />
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-black"
                >
                  Send Message <FiSend />
                </button>
                {submitted ? <span className="text-sm text-gold">Message form is ready to connect to a mail service.</span> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}