// JohnTrucks Accesorios - Sales Interface

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const categories: string[] = [
  'Sistemas de carpado',
  'Kits',
  'Piezas para el sistema',
  'Repuestos motor LX 600W 12V',
  'Repuestos reductor',
  'Protectores laterales (bicicleteros)',
  'Cintas reflectivas',
  'Otros'
];

const products: Product[] = [
  { id: 1, name: 'Carpado eléctrico para volqueta – tipo brazo', price: 4800000, image: 'productos/1.jpg', category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo brazo para volquetas. Cumple la Resolución 54 de 1994.' },
  { id: 2, name: 'Carpado eléctrico para volqueta – tipo acordeón', price: 4200000, image: 'productos/2.jpg', category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo acordeón para volquetas.' },
  { id: 3, name: 'Carpado eléctrico para tractomula – tipo brazo', price: 6500000, image: 'productos/3.jpg', category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo brazo para tractomulas.' },
  { id: 4, name: 'Carpado eléctrico para tractomula – tipo acordeón', price: 5900000, image: 'productos/4.jpg', category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo acordeón para tractomulas.' },
  { id: 5, name: 'Carpado manual para tractomula – tipo acordeón', price: 2800000, image: 'productos/5.jpg', category: 'Sistemas de carpado', description: 'Sistema de carpado manual tipo acordeón para tractomulas.' },
  { id: 6, name: 'Kit eléctrico', price: 1650000, image: 'productos/6.jpg', category: 'Kits', description: 'Motor LX 600W 12V, switch, cable vehicular, terminales y térmico.' },
  { id: 7, name: 'Diadema', price: 850000, image: 'productos/7.jpg', category: 'Kits', description: 'Diadema en acero para sistema de carpado tipo brazo.' },
  { id: 8, name: 'Platinas de motor y chumacera', price: 180000, image: 'productos/8.jpg', category: 'Piezas para el sistema', description: 'Par de platinas para montaje de motor y chumacera.' },
  { id: 9, name: 'Chumacera', price: 65000, image: 'productos/9.jpg', category: 'Piezas para el sistema', description: 'Chumacera de pared con rodamiento para rodillo de tracción.' },
  { id: 10, name: 'Codos', price: 95000, image: 'productos/10.jpg', category: 'Piezas para el sistema', description: 'Codos en acero galvanizado para estructura de brazos.' },
  { id: 11, name: 'Macho y hembra', price: 70000, image: 'productos/11.jpg', category: 'Piezas para el sistema', description: 'Acople macho y hembra para rodillo de tracción.' },
  { id: 12, name: 'Extensiones 3m - 1"', price: 120000, image: 'productos/12.jpg', category: 'Piezas para el sistema', description: 'Extensiones de tubo de 3 metros en 1 pulgada.' },
  { id: 13, name: 'Tubo superior trasero de 2,39m - 1"', price: 90000, image: 'productos/13.jpg', category: 'Piezas para el sistema', description: 'Tubo superior trasero de 2,39 metros en 1 pulgada.' },
  { id: 14, name: 'Rodillo de tracción', price: 210000, image: 'productos/14.jpg', category: 'Piezas para el sistema', description: 'Rodillo de tracción para enrollar la carpa.' },
  { id: 15, name: 'Brazos', price: 380000, image: 'productos/15.jpg', category: 'Piezas para el sistema', description: 'Par de brazos para sistema de carpado tipo brazo.' },
  { id: 16, name: 'Bases de resortes', price: 160000, image: 'productos/16.jpg', category: 'Piezas para el sistema', description: 'Par de bases para montaje de resortes.' },
  { id: 17, name: 'Resortes', price: 420000, image: 'productos/17.jpg', category: 'Piezas para el sistema', description: 'Par de resortes en espiral para sistema tipo brazo.' },
  { id: 18, name: 'Carpa AT1000RT altas temperaturas', price: 950000, image: 'productos/18.jpg', category: 'Piezas para el sistema', description: 'Carpa en lona AT1000RT resistente a altas temperaturas.' },
  { id: 19, name: 'Motor LX 600W 12V', price: 1250000, image: 'productos/19.jpg', category: 'Piezas para el sistema', description: 'Motorreductor LX de 600W a 12V para carpado eléctrico.' },
  { id: 20, name: 'Terminales de 50 y 70 AMP y térmico', price: 85000, image: 'productos/20.jpg', category: 'Piezas para el sistema', description: 'Terminales de cobre de 50 y 70 AMP con breaker térmico.' },
  { id: 21, name: 'Kit de tornillería', price: 55000, image: 'productos/21.jpg', category: 'Piezas para el sistema', description: 'Juego de tornillos, tuercas y arandelas para instalación.' },
  { id: 22, name: 'Cable vehicular', price: 6500, image: 'productos/22.jpg', category: 'Piezas para el sistema', description: 'Cable vehicular calibre grueso (precio por metro).' },
  { id: 23, name: 'Amarras plásticas pqt y elástico tramos de 7m', price: 35000, image: 'productos/23.jpg', category: 'Piezas para el sistema', description: 'Paquete de amarras plásticas y elástico en tramos de 7m.' },
  { id: 24, name: 'Arandelas y pines', price: 18000, image: 'productos/24.jpg', category: 'Piezas para el sistema', description: 'Arandelas y pines de seguridad para el sistema.' },
  { id: 25, name: 'Switch', price: 95000, image: 'productos/25.jpg', category: 'Piezas para el sistema', description: 'Switch de control para motor de carpado.' },
  { id: 26, name: 'Perilla de switch', price: 25000, image: 'productos/26.jpg', category: 'Piezas para el sistema', description: 'Perilla de repuesto para switch de control.' },
  { id: 27, name: 'Frontal', price: 320000, image: 'productos/27.jpg', category: 'Piezas para el sistema', description: 'Frontal protector en aluminio para el platón.' },
  { id: 28, name: 'Escobillas', price: 45000, image: 'productos/28.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Juego de escobillas para motor LX 600W 12V.' },
  { id: 29, name: 'Porta escobillas', price: 90000, image: 'productos/29.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Porta escobillas para motor LX 600W 12V.' },
  { id: 30, name: 'Bobinado', price: 380000, image: 'productos/30.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Bobinado (inducido) para motor LX 600W 12V.' },
  { id: 31, name: 'Carcasa con imanes', price: 290000, image: 'productos/31.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Carcasa con imanes para motor LX 600W 12V.' },
  { id: 32, name: 'Retenedor y rodamientos', price: 48000, image: 'productos/32.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Retenedor y rodamientos para motor LX 600W 12V.' },
  { id: 33, name: 'Tapa superior', price: 110000, image: 'productos/33.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Tapa superior para motor LX 600W 12V.' },
  { id: 34, name: 'Tornillos', price: 15000, image: 'productos/34.jpg', category: 'Repuestos motor LX 600W 12V', description: 'Tornillos pasantes para motor LX 600W 12V.' },
  { id: 35, name: 'Tornillo sin fin', price: 150000, image: 'productos/35.jpg', category: 'Repuestos reductor', description: 'Tornillo sin fin para reductor del motor.' },
  { id: 36, name: 'Eje de motor con 1 perforación', price: 130000, image: 'productos/36.jpg', category: 'Repuestos reductor', description: 'Eje de salida del reductor con 1 perforación.' },
  { id: 37, name: 'Corona de bronce', price: 175000, image: 'productos/37.jpg', category: 'Repuestos reductor', description: 'Corona de bronce para reductor.' },
  { id: 38, name: 'Empaque de tapa cubierta', price: 20000, image: 'productos/38.jpg', category: 'Repuestos reductor', description: 'Empaque para tapa cubierta del reductor.' },
  { id: 39, name: 'Rodamientos, retenedores y pin', price: 75000, image: 'productos/39.jpg', category: 'Repuestos reductor', description: 'Kit de rodamientos, retenedores y pin para reductor.' },
  { id: 40, name: 'Tapa cubierta', price: 160000, image: 'productos/40.jpg', category: 'Repuestos reductor', description: 'Tapa cubierta en aluminio para reductor.' },
  { id: 41, name: 'Base triangular', price: 60000, image: 'productos/41.jpg', category: 'Protectores laterales (bicicleteros)', description: 'Base triangular para montaje de protector lateral.' },
  { id: 42, name: 'U de base', price: 75000, image: 'productos/42.jpg', category: 'Protectores laterales (bicicleteros)', description: 'U de base en aluminio para protector lateral.' },
  { id: 43, name: 'Perfiles en aluminio', price: 140000, image: 'productos/43.jpg', category: 'Protectores laterales (bicicleteros)', description: 'Perfiles en aluminio para protector lateral (bicicletero).' },
  { id: 44, name: 'Punteras', price: 40000, image: 'productos/44.jpg', category: 'Protectores laterales (bicicleteros)', description: 'Punteras de aluminio para extremos del perfil.' },
  { id: 45, name: 'Tapones', price: 12000, image: 'productos/45.jpg', category: 'Protectores laterales (bicicleteros)', description: 'Tapones plásticos para perfiles de aluminio.' },
  { id: 46, name: 'Bases largas de chasis', price: 95000, image: 'productos/46.jpg', category: 'Protectores laterales (bicicleteros)', description: 'Bases largas para anclaje al chasis.' },
  { id: 47, name: 'Cinta reflectiva roja', price: 85000, image: 'productos/47.jpg', category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 48, name: 'Cinta reflectiva roja y blanca', price: 85000, image: 'productos/48.jpg', category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 49, name: 'Cinta reflectiva verde limón', price: 90000, image: 'productos/49.jpg', category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 50, name: 'Carpas para carrocerías', price: 1100000, image: 'productos/50.jpg', category: 'Otros', description: 'Carpas a la medida para carrocerías de camión.' },
  { id: 51, name: 'Carpas tipo kiosco', price: 1800000, image: 'productos/51.jpg', category: 'Otros', description: 'Carpas tipo kiosco para eventos y exteriores.' },
  { id: 52, name: 'Lona AT 1000 RT', price: 38000, image: 'productos/52.jpg', category: 'Otros', description: 'Lona AT 1000 RT por metro, resistente y duradera.' }
];

const BASE = import.meta.env.BASE_URL;
const WHATSAPP_URL = 'https://wa.me/573005733945';
const CHAT_ICON = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';

export function initSalesPage(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="sales-container">
      <!-- HEADER -->
      <header class="header">
        <div class="header-content">
          <div class="logo-section">
            <img src="${BASE}logo.png" alt="JohnTrucks Accesorios" class="logo-img" />
            <div class="logo-text">
              <h1 class="logo">JohnTrucks Accesorios</h1>
              <p class="tagline">Los mejores accesorios para vehiculos de carga</p>
            </div>
          </div>
          <div class="header-actions">
            <a class="cart-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener">
              ${CHAT_ICON}<span>300 573 3945</span>
            </a>
          </div>
        </div>
      </header>

      <!-- HERO SECTION -->
      <section class="hero">
        <img class="hero-logo-bg" src="${BASE}logo.png" alt="" aria-hidden="true" />
        <div class="hero-content">
          <h2>Accesorios Premium para Camiones</h2>
          <p>Calidad, durabilidad y resistencia garantizadas como en los viejos tiempos</p>
          <button class="cta-button" id="shopBtn">Ver Productos</button>
        </div>
      </section>

      <!-- PRODUCTS SECTION -->
      <section class="products-section">
        <h2>Nuestros Productos</h2>
        <div class="filters">
          <button class="filter-btn active" data-filter="all">Todos</button>
          ${categories.map(c => `<button class="filter-btn" data-filter="${c}">${c}</button>`).join('')}
        </div>
        <div class="products-grid" id="productsGrid">
          <!-- Products will be loaded here -->
        </div>
      </section>

      <!-- CONTACT SECTION -->
      <section class="contact-section">
        <h2>¿Preguntas? Contáctanos</h2>
        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Tu email" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Tu mensaje" rows="4" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Enviar Consulta</button>
        </form>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <p>&copy; 2024 JohnTrucks Accesorios. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </div>
  `;

  renderProducts(products);
  setupEventListeners();
}

function renderProducts(productsToRender: Product[]): void {
  const grid = document.querySelector<HTMLDivElement>('#productsGrid');
  if (!grid) return;

  const card = (product: Product) => `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image"><img src="${BASE}${product.image}" alt="${product.name}" loading="lazy" /></div>
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="description">${product.description}</p>
      <div class="product-footer">
        <div class="price-block">
          <span class="price-label">Precio</span>
          <span class="price">$${product.price.toLocaleString('es-CO')}<small>COP</small></span>
        </div>
        <a class="add-to-cart-btn" href="${whatsappProductUrl(product)}" target="_blank" rel="noopener" title="Comprar por WhatsApp">
          ${CHAT_ICON}<span>Comprar</span>
        </a>
      </div>
    </div>
  `;

  grid.innerHTML = categories
    .map(category => {
      const items = productsToRender.filter(p => p.category === category);
      if (items.length === 0) return '';
      return `<h3 class="category-heading">${category}</h3>${items.map(card).join('')}`;
    })
    .join('');
}

function whatsappProductUrl(product: Product): string {
  const message = `Hola JohnTrucks, quiero comprar: ${product.name} ($${product.price.toLocaleString('es-CO')})`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function setupEventListeners(): void {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filterValue = (e.target as HTMLElement).getAttribute('data-filter');
      filterProducts(filterValue || 'all');
      
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      (e.target as HTMLElement).classList.add('active');
    });
  });

  // Contact form
  const contactForm = document.querySelector('#contactForm') as HTMLFormElement;
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
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
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);
  renderProducts(filtered);
}
