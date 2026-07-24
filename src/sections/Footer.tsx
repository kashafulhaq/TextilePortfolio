import { FiArrowUpRight } from 'react-icons/fi';
import { Container } from '@/components/Container';
import { profile } from '@/data/profile';

type FooterProps = {
  onBackToTop: () => void;
};

export function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="border-t border-charcoal/8 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl text-charcoal">{profile.name}</p>
            <p className="mt-2 text-sm text-charcoal/60">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-medium text-charcoal/76 transition hover:border-gold hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onBackToTop}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition hover:border-gold hover:text-gold"
            >
              Back to top <FiArrowUpRight />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}