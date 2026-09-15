// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Hero parallax
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  document.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.25}px) scale(1.06)`;
  }, { passive: true });
}

// Scroll reveal via IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

// Neon "ABIERTO / CERRADO" badge based on local time (12:00–01:00 open)
const neonText = document.getElementById('neonText');
const neonBadge = document.getElementById('neonBadge');
if (neonText && neonBadge) {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 || hour < 1;
  neonText.textContent = isOpen ? 'ABIERTO' : 'CERRADO';
  if (!isOpen) {
    neonBadge.style.color = '#FF5A5F';
    neonBadge.style.borderColor = 'rgba(255,90,95,.7)';
    neonBadge.style.textShadow = '0 0 6px #FF5A5F, 0 0 16px rgba(255,90,95,.8)';
    neonBadge.querySelector('.neon-dot').style.background = '#FF5A5F';
    neonBadge.querySelector('.neon-dot').style.boxShadow = '0 0 8px #FF5A5F';
  }
}
