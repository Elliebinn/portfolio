import type { Lang } from '../i18n/translations';
import { t } from '../i18n/translations';

const links = [
  { label: 'Email', href: 'mailto:elliebinn@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hyebin-woo-62a261291/' },
  { label: 'GitHub', href: 'https://github.com/Elliebinn' },
];

const formLabels = {
  en: { name: 'Full Name', namePh: 'Your name', email: 'Email Address', emailPh: 'name@company.com', message: 'Message', messagePh: 'Tell me about your project...', send: 'Send Message' },
  ko: { name: '이름', namePh: '이름을 입력하세요', email: '이메일', emailPh: 'name@company.com', message: '메시지', messagePh: '프로젝트에 대해 알려주세요...', send: '메시지 보내기' },
};

export default function Contact({ lang = 'en' as Lang }: { lang?: Lang }) {
  const tr = t(lang).contact;
  const fl = formLabels[lang];
  const words = tr.sloganWords;

  return (
    <section id="contact" className="border-t border-[var(--color-border)] px-6 py-16 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {tr.section}
        </p>

        {/* Slogan — single line, centered */}
        <div className="mb-16 text-center">
          <h2
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-[var(--color-text)]"
            style={{ fontFamily: "'Inter', var(--font-display)", fontWeight: 900 }}
          >
            {words[0]} {words[1]}{' '}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
              {words[2]}
            </span>
          </h2>
        </div>

        {/* Contact links — prominent, centered, same style as original */}
        <div className="flex items-center justify-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile contact form */}
        <div className="mt-16 md:hidden">
          <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{fl.name}</label>
              <input type="text" name="name" placeholder={fl.namePh}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/40 outline-none focus:border-[var(--color-accent)]" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{fl.email}</label>
              <input type="email" name="email" placeholder={fl.emailPh}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/40 outline-none focus:border-[var(--color-accent)]" />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{fl.message}</label>
              <textarea name="message" rows={4} placeholder={fl.messagePh}
                className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/40 outline-none focus:border-[var(--color-accent)]" />
            </div>
            <button type="submit"
              className="w-full rounded-full bg-[var(--color-accent)] py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
              {fl.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
