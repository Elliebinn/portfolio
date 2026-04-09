/**
 * ImageZoom — C5 Blog Image Zoom
 * Injected via script into blog slug pages; targets .prose-custom img elements.
 * Click to open overlay with scaled image. ESC or backdrop click to close.
 * Respects prefers-reduced-motion.
 */

export function initImageZoom() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Create overlay elements
  const overlay = document.createElement('div');
  overlay.id = 'image-zoom-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image preview');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(4px);
    opacity: 0;
    pointer-events: none;
    cursor: zoom-out;
    ${prefersReduced ? '' : 'transition: opacity 0.2s ease;'}
  `;

  const zoomedImg = document.createElement('img');
  zoomedImg.style.cssText = `
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
    ${prefersReduced ? '' : 'transition: transform 0.2s ease; transform: scale(0.92);'}
  `;
  zoomedImg.alt = '';

  overlay.appendChild(zoomedImg);
  document.body.appendChild(overlay);

  function open(src: string, alt: string) {
    zoomedImg.src = src;
    zoomedImg.alt = alt;
    overlay.style.pointerEvents = 'auto';
    overlay.style.opacity = '1';
    if (!prefersReduced) {
      zoomedImg.style.transform = 'scale(1)';
    }
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
  }

  function close() {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    if (!prefersReduced) {
      zoomedImg.style.transform = 'scale(0.92)';
    }
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  overlay.addEventListener('click', close);
  // Prevent click on image itself from closing (allow drag-select)
  zoomedImg.addEventListener('click', (e) => e.stopPropagation());

  // Attach to all .prose-custom img elements
  const imgs = document.querySelectorAll<HTMLImageElement>('.prose-custom img');
  imgs.forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      open(img.src, img.alt);
    });
  });
}
