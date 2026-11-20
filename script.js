// Sample concepts are intentionally presented without invented live or source links.
const projects = [
  ['Modern Business Website', 'A considered digital home for a modern business.', 'BUSINESS / CONCEPT', 'NORTH'],
  ['E-commerce Website', 'An elevated shopping experience with clarity at its core.', 'COMMERCE / CONCEPT', 'OBJECT'],
  ['Technology Landing Page', 'A bold introduction to the next big idea.', 'TECHNOLOGY / CONCEPT', 'NEXUS'],
  ['Creative Agency Website', 'A vibrant space for ideas and creative expression.', 'STUDIO / CONCEPT', 'FORM & CO.'],
  ['Personal Portfolio Website', 'A distinctive platform for a creative point of view.', 'PORTFOLIO / CONCEPT', 'PERSONA'],
  ['Interactive Dashboard', 'Making complex information feel simple and intuitive.', 'INTERFACE / CONCEPT', 'PULSE']
];
document.querySelector('#project-grid').innerHTML = projects.map(([title, description, label, word]) => `<article class="project-card"><div class="project-visual" role="img" aria-label="Abstract visual for ${title} sample concept"><small>${label}</small><strong>${word}</strong></div><div class="project-meta"><div><h3>${title}</h3><p>${description}</p><div class="tags"><span>HTML</span><span>CSS</span><span>JAVASCRIPT</span><span>SAMPLE CONCEPT</span></div></div><span aria-hidden="true">↗</span></div></article>`).join('');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const role = document.querySelector('#role');
const roles = ['Web Designer', 'Front-End Developer', 'Creative Developer', 'Digital Experience Designer'];
if (!reducedMotion.matches) {
  let index = 0, deleting = false, length = roles[0].length;
  function typeRole() {
    const current = roles[index];
    length += deleting ? -1 : 1;
    role.textContent = current.slice(0, length);
    let delay = deleting ? 45 : 85;
    if (!deleting && length === current.length) { deleting = true; delay = 2200; }
    if (deleting && length === 0) { deleting = false; index = (index + 1) % roles.length; delay = 300; }
    setTimeout(typeRole, delay);
  }
  setTimeout(() => { deleting = true; typeRole(); }, 2200);
}

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }), { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
  window.addEventListener('scroll', () => { if (window.scrollY < 250) links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#top')); }, { passive: true });
}
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-note').textContent = 'Your form is valid, but no message was sent. Connect a backend or form service to enable delivery.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
