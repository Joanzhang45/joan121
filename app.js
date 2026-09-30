const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  header.classList.remove('menu-open');
  toggle.querySelector('span').textContent = '＋';
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  header.classList.toggle('menu-open', open);
  toggle.querySelector('span').textContent = open ? '−' : '＋';
});
document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);
