/**
 * CopyButton — code block copy with "Copied!" feedback.
 * Injected into pre tags via script in blog [slug].astro.
 */
import { useState } from 'react';

export function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(getText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 800);
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Copy code"
      style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        padding: '0.25rem 0.6rem',
        fontSize: '0.7rem',
        fontFamily: 'var(--font-mono)',
        background: copied ? 'var(--color-accent)' : 'var(--color-bg-detail)',
        color: copied ? 'var(--color-on-accent)' : 'var(--color-text-muted)',
        border: '1px solid var(--color-border)',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity 0.15s ease, background 0.15s ease, color 0.15s ease',
      }}
      className="copy-btn"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default CopyButton;
