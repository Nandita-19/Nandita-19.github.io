document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }));
  }
  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const current = btn.dataset.filter;
    filters.forEach(b => { const active=b===btn; b.classList.toggle('active',active); b.setAttribute('aria-pressed', String(active)); });
    cards.forEach(card => { card.hidden = current !== 'all' && card.dataset.category !== current; });
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
