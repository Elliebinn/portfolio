import type { Lang } from '../../i18n/translations';

const BASE = '/portfolio';

export default function Footer({ lang = 'en' as Lang }: { lang?: Lang }) {
  return (
    <footer
      className="mt-20 flex flex-col items-center gap-6 px-8 py-12"
      style={{
        backgroundColor: 'var(--ed-surface-container-low)',
        borderTopLeftRadius: '3rem',
        borderTopRightRadius: '3rem',
      }}
    >
      <div
        className="text-lg font-bold"
        style={{ fontFamily: 'var(--ed-font-display)', color: 'var(--ed-primary)' }}
      >
        HB.
      </div>
      <div className="flex gap-8">
        <a
          href={`${BASE}/${lang}/v2/#projects`}
          className="text-sm transition-colors hover:opacity-70"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          Projects
        </a>
        <a
          href={`${BASE}/${lang}/blog/`}
          className="text-sm transition-colors hover:opacity-70"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          Blog
        </a>
        <a
          href="mailto:elliebinn@gmail.com"
          className="text-sm transition-colors hover:opacity-70"
          style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
        >
          Email
        </a>
      </div>
      <p
        className="mt-4 text-sm"
        style={{ color: 'var(--ed-on-surface-variant)', fontFamily: 'var(--ed-font-body)' }}
      >
        &copy; {new Date().getFullYear()} Hyebin Woo. Designed for precision.
      </p>
    </footer>
  );
}
