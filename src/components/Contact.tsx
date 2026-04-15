import { useEffect, useRef, type CSSProperties } from 'react';
import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';
import MagneticButton from './motion/MagneticButton';
import ScrollReveal from './motion/ScrollReveal';

const links = [
  { label: 'Email', href: 'mailto:elliebinn@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hyebin-woo-62a261291/' },
  { label: 'GitHub', href: 'https://github.com/Elliebinn' },
];

const formLabels = {
  en: { name: 'Full Name', namePh: 'Your name', email: 'Email Address', emailPh: 'name@company.com', message: 'Message', messagePh: 'Tell me about your project...', send: 'Send Message' },
  ko: { name: '이름', namePh: '이름을 입력하세요', email: '이메일', emailPh: 'name@company.com', message: '메시지', messagePh: '프로젝트에 대해 알려주세요...', send: '메시지 보내기' },
};

const sloganKeyframes = `
@keyframes sloganFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

export default function Contact({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).contact;
  const fl = formLabels[lang];
  const words = tr.sloganWords;

  const sloganRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sloganRef.current;
    if (!el) return;
    const spans = el.querySelectorAll<HTMLSpanElement>('[data-slogan-word]');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          spans.forEach((span) => {
            span.style.animationPlayState = 'running';
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wordStyle = (delay: string): CSSProperties => ({
    display: 'inline-block',
    opacity: 0,
    animation: `sloganFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay} forwards`,
    animationPlayState: 'paused',
  });

  return (
    <section id="contact" className="px-6 py-16 sm:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <style>{sloganKeyframes}</style>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-8 text-center text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
            {tr.section}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-16 text-center">
            <h2
              ref={sloganRef}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              <span data-slogan-word style={wordStyle('0s')}>{words[0]}</span>
              {' '}
              <span data-slogan-word style={wordStyle('0.15s')}>{words[1]}</span>
              {' '}
              <span
                data-slogan-word
                className="text-[var(--color-accent)]"
                style={wordStyle('0.3s')}
              >
                {words[2]}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* CTA links with MagneticButton — pill style */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {links.map((link) => (
              <MagneticButton
                key={link.label}
                strength={0.3}
                className="pill-link"
                onClick={() => window.open(link.href, link.href.startsWith('http') ? '_blank' : '_self')}
              >
                {link.label}
              </MagneticButton>
            ))}
          </div>
        </ScrollReveal>
        <style>{`
          .pill-link {
            border: 1.5px solid rgba(69, 98, 114, 0.2);
            border-radius: 9999px;
            padding: 10px 24px;
            font-size: 13px;
            font-weight: 600;
            color: var(--color-text-muted);
            background: transparent;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .pill-link:hover {
            background: var(--color-accent);
            color: var(--color-on-accent);
            border-color: var(--color-accent);
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(69, 98, 114, 0.15);
          }
        `}</style>

        {/* Mobile contact form */}
        <div className="mt-16 md:hidden">
          <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">{fl.name}</label>
              <input type="text" name="name" placeholder={fl.namePh}
                className="w-full rounded-xl bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-faint)]/40 outline-none shadow-ambient-sm focus:shadow-ambient" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">{fl.email}</label>
              <input type="email" name="email" placeholder={fl.emailPh}
                className="w-full rounded-xl bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-faint)]/40 outline-none shadow-ambient-sm focus:shadow-ambient" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">{fl.message}</label>
              <textarea name="message" rows={4} placeholder={fl.messagePh}
                className="w-full resize-none rounded-xl bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-faint)]/40 outline-none shadow-ambient-sm focus:shadow-ambient" />
            </div>
            <button type="submit"
              className="w-full rounded-full gradient-primary py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-on-accent)] transition-opacity hover:opacity-90">
              {fl.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
