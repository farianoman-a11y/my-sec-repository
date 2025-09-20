// Extracted JS from the React component useEffect
function initInteractions() {
  // Add click interaction for cards
  const clickHandler = function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => (this.style.transform = ''), 150);
  };

  const cards = Array.from(document.querySelectorAll('.skill-card, .project-card'));
  cards.forEach((c) => c.addEventListener('click', clickHandler));

  // Intersection observer for reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.section').forEach((section) => observer.observe(section));

  // Return cleanup function (not used here but kept for parity)
  return () => {
    cards.forEach((c) => c.removeEventListener('click', clickHandler));
    observer.disconnect();
  };
}

document.addEventListener('DOMContentLoaded', initInteractions);
