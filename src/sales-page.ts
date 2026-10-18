// JohnTrucks - interacción de la página.
// El HTML ya viene renderizado en index.html (ver src/content.ts y vite.config.ts); aquí solo se agregan los eventos.

import { WHATSAPP_URL } from './content.ts';

export function initSalesPage(): void {
  setupEventListeners();
}

function setupEventListeners(): void {
  // Filter buttons
  document.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterProducts(btn.dataset.filter || 'all');

      // Update active button
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Contact form
  const contactForm = document.querySelector('#contactForm') as HTMLFormElement;
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const message = `Hola JohnTrucks, soy ${data.get('name')} (${data.get('email')}).\n\n${data.get('message')}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    contactForm.reset();
  });

  // Shop button
  const shopBtn = document.querySelector('#shopBtn');
  shopBtn?.addEventListener('click', () => {
    const productsSection = document.querySelector('.products-section');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  });
}

function filterProducts(filter: string): void {
  document.querySelectorAll<HTMLElement>('.category-group').forEach(group => {
    group.hidden = filter !== 'all' && group.dataset.category !== filter;
  });
}
