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
    <section id="contact" className="px-6 py-16 sm:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
          {tr.section}
        </p>

        <div className="mb-16 text-center">
          <h2
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-[var(--color-text)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            {words[0]} {words[1]}{' '}
            <span className="text-[var(--color-accent)]">
              {words[2]}
            </span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>

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
