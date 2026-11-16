// Page effects: scroll reveal, glass spotlight and card tilt.
// The look lives in global.css; this file only adds classes and CSS variables.

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;
const hasMouse = window.matchMedia(
  '(hover: hover) and (pointer: fine)',
).matches;

/* ---------- Scroll reveal ---------- */
const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    },
    { threshold: 0.15 },
  );
  revealElements.forEach((element) => observer.observe(element));
}

/* ---------- Glass spotlight: works with a mouse, even with reduced motion ---------- */
if (hasMouse) {
  document.querySelectorAll<HTMLElement>('[data-glass]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - box.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - box.top}px`);
    });
  });
}

/* ---------- Things that move: only with a mouse and no reduced motion ---------- */
if (hasMouse && !prefersReducedMotion) {
  // Tilt: the card leans toward the cursor, max 6 degrees
  const maxTilt = 6;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5; // -0.5 to 0.5
      const y = (event.clientY - box.top) / box.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * maxTilt * 2}deg) rotateY(${x * maxTilt * 2}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
