// JohnTrucks - contenido de la página.
// Se renderiza a HTML estático en el build (ver vite.config.ts) para que Google lo lea sin ejecutar JS.

export interface Product {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
  category: string;
  description: string;
}

export const categories: string[] = [
  'Sistemas de carpado',
  'Kits',
  'Piezas para el sistema',
  'Repuestos motor LX 600W 12V',
  'Repuestos reductor',
  'Protectores laterales (bicicleteros)',
  'Cintas reflectivas',
  'Otros'
];

export const products: Product[] = [
  { id: 1, name: 'Carpado eléctrico para volqueta – tipo brazo', image: 'productos/1.jpg', width: 522, height: 291, category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo brazo para volquetas. Cumple la Resolución 54 de 1994.' },
  { id: 2, name: 'Carpado eléctrico para volqueta – tipo acordeón', image: 'productos/2.jpg', width: 576, height: 291, category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo acordeón para volquetas.' },
  { id: 3, name: 'Carpado eléctrico para tractomula – tipo brazo', image: 'productos/3.jpg', width: 450, height: 291, category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo brazo para tractomulas.' },
  { id: 4, name: 'Carpado eléctrico para tractomula – tipo acordeón', image: 'productos/4.jpg', width: 630, height: 291, category: 'Sistemas de carpado', description: 'Sistema de carpado eléctrico tipo acordeón para tractomulas.' },
  { id: 5, name: 'Carpado manual para tractomula – tipo acordeón', image: 'productos/5.jpg', width: 564, height: 291, category: 'Sistemas de carpado', description: 'Sistema de carpado manual tipo acordeón para tractomulas.' },
  { id: 6, name: 'Kit eléctrico', image: 'productos/6.jpg', width: 690, height: 408, category: 'Kits', description: 'Motor LX 600W 12V, switch, cable vehicular, terminales y térmico.' },
  { id: 7, name: 'Diadema', image: 'productos/7.jpg', width: 288, height: 408, category: 'Kits', description: 'Diadema en acero para sistema de carpado tipo brazo.' },
  { id: 8, name: 'Platinas de motor y chumacera', image: 'productos/8.jpg', width: 732, height: 270, category: 'Piezas para el sistema', description: 'Par de platinas para montaje de motor y chumacera.' },
  { id: 9, name: 'Chumacera', image: 'productos/9.jpg', width: 708, height: 480, category: 'Piezas para el sistema', description: 'Chumacera de pared con rodamiento para rodillo de tracción.' },
  { id: 10, name: 'Codos', image: 'productos/10.jpg', width: 636, height: 411, category: 'Piezas para el sistema', description: 'Codos en acero galvanizado para estructura de brazos.' },
  { id: 11, name: 'Macho y hembra', image: 'productos/11.jpg', width: 522, height: 411, category: 'Piezas para el sistema', description: 'Acople macho y hembra para rodillo de tracción.' },
  { id: 12, name: 'Extensiones 3m - 1"', image: 'productos/12.jpg', width: 891, height: 216, category: 'Piezas para el sistema', description: 'Extensiones de tubo de 3 metros en 1 pulgada.' },
  { id: 13, name: 'Tubo superior trasero de 2,39m - 1"', image: 'productos/13.jpg', width: 933, height: 87, category: 'Piezas para el sistema', description: 'Tubo superior trasero de 2,39 metros en 1 pulgada.' },
  { id: 14, name: 'Rodillo de tracción', image: 'productos/14.jpg', width: 933, height: 189, category: 'Piezas para el sistema', description: 'Rodillo de tracción para enrollar la carpa.' },
  { id: 15, name: 'Brazos', image: 'productos/15.jpg', width: 732, height: 255, category: 'Piezas para el sistema', description: 'Par de brazos para sistema de carpado tipo brazo.' },
  { id: 16, name: 'Bases de resortes', image: 'productos/16.jpg', width: 624, height: 375, category: 'Piezas para el sistema', description: 'Par de bases para montaje de resortes.' },
  { id: 17, name: 'Resortes', image: 'productos/17.jpg', width: 630, height: 375, category: 'Piezas para el sistema', description: 'Par de resortes en espiral para sistema tipo brazo.' },
  { id: 18, name: 'Carpa AT1000RT altas temperaturas', image: 'productos/18.jpg', width: 552, height: 375, category: 'Piezas para el sistema', description: 'Carpa en lona AT1000RT resistente a altas temperaturas.' },
  { id: 19, name: 'Motor LX 600W 12V', image: 'productos/19.jpg', width: 444, height: 375, category: 'Piezas para el sistema', description: 'Motorreductor LX de 600W a 12V para carpado eléctrico.' },
  { id: 20, name: 'Terminales de 50 y 70 AMP y térmico', image: 'productos/20.jpg', width: 732, height: 375, category: 'Piezas para el sistema', description: 'Terminales de cobre de 50 y 70 AMP con breaker térmico.' },
  { id: 21, name: 'Kit de tornillería', image: 'productos/21.jpg', width: 732, height: 267, category: 'Piezas para el sistema', description: 'Juego de tornillos, tuercas y arandelas para instalación.' },
  { id: 22, name: 'Cable vehicular', image: 'productos/22.jpg', width: 624, height: 375, category: 'Piezas para el sistema', description: 'Cable vehicular calibre grueso (por metro).' },
  { id: 23, name: 'Amarras plásticas pqt y elástico tramos de 7m', image: 'productos/23.jpg', width: 696, height: 234, category: 'Piezas para el sistema', description: 'Paquete de amarras plásticas y elástico en tramos de 7m.' },
  { id: 24, name: 'Arandelas y pines', image: 'productos/24.jpg', width: 342, height: 279, category: 'Piezas para el sistema', description: 'Arandelas y pines de seguridad para el sistema.' },
  { id: 25, name: 'Switch', image: 'productos/25.jpg', width: 219, height: 282, category: 'Piezas para el sistema', description: 'Switch de control para motor de carpado.' },
  { id: 26, name: 'Perilla de switch', image: 'productos/26.jpg', width: 432, height: 282, category: 'Piezas para el sistema', description: 'Perilla de repuesto para switch de control.' },
  { id: 27, name: 'Frontal', image: 'productos/27.jpg', width: 459, height: 174, category: 'Piezas para el sistema', description: 'Frontal protector en aluminio para el platón.' },
  { id: 28, name: 'Escobillas', image: 'productos/28.jpg', width: 486, height: 306, category: 'Repuestos motor LX 600W 12V', description: 'Juego de escobillas para motor LX 600W 12V.' },
  { id: 29, name: 'Porta escobillas', image: 'productos/29.jpg', width: 675, height: 306, category: 'Repuestos motor LX 600W 12V', description: 'Porta escobillas para motor LX 600W 12V.' },
  { id: 30, name: 'Bobinado', image: 'productos/30.jpg', width: 426, height: 258, category: 'Repuestos motor LX 600W 12V', description: 'Bobinado (inducido) para motor LX 600W 12V.' },
  { id: 31, name: 'Carcasa con imanes', image: 'productos/31.jpg', width: 300, height: 258, category: 'Repuestos motor LX 600W 12V', description: 'Carcasa con imanes para motor LX 600W 12V.' },
  { id: 32, name: 'Retenedor y rodamientos', image: 'productos/32.jpg', width: 444, height: 213, category: 'Repuestos motor LX 600W 12V', description: 'Retenedor y rodamientos para motor LX 600W 12V.' },
  { id: 33, name: 'Tapa superior', image: 'productos/33.jpg', width: 366, height: 258, category: 'Repuestos motor LX 600W 12V', description: 'Tapa superior para motor LX 600W 12V.' },
  { id: 34, name: 'Tornillos', image: 'productos/34.jpg', width: 459, height: 258, category: 'Repuestos motor LX 600W 12V', description: 'Tornillos pasantes para motor LX 600W 12V.' },
  { id: 35, name: 'Tornillo sin fin', image: 'productos/35.jpg', width: 666, height: 210, category: 'Repuestos reductor', description: 'Tornillo sin fin para reductor del motor.' },
  { id: 36, name: 'Eje de motor con 1 perforación', image: 'productos/36.jpg', width: 714, height: 210, category: 'Repuestos reductor', description: 'Eje de salida del reductor con 1 perforación.' },
  { id: 37, name: 'Corona de bronce', image: 'productos/37.jpg', width: 210, height: 258, category: 'Repuestos reductor', description: 'Corona de bronce para reductor.' },
  { id: 38, name: 'Empaque de tapa cubierta', image: 'productos/38.jpg', width: 222, height: 258, category: 'Repuestos reductor', description: 'Empaque para tapa cubierta del reductor.' },
  { id: 39, name: 'Rodamientos, retenedores y pin', image: 'productos/39.jpg', width: 732, height: 138, category: 'Repuestos reductor', description: 'Kit de rodamientos, retenedores y pin para reductor.' },
  { id: 40, name: 'Tapa cubierta', image: 'productos/40.jpg', width: 306, height: 258, category: 'Repuestos reductor', description: 'Tapa cubierta en aluminio para reductor.' },
  { id: 41, name: 'Base triangular', image: 'productos/41.jpg', width: 204, height: 195, category: 'Protectores laterales (bicicleteros)', description: 'Base triangular para montaje de protector lateral.' },
  { id: 42, name: 'U de base', image: 'productos/42.jpg', width: 732, height: 111, category: 'Protectores laterales (bicicleteros)', description: 'U de base en aluminio para protector lateral.' },
  { id: 43, name: 'Perfiles en aluminio', image: 'productos/43.jpg', width: 462, height: 198, category: 'Protectores laterales (bicicleteros)', description: 'Perfiles en aluminio para protector lateral (bicicletero).' },
  { id: 44, name: 'Punteras', image: 'productos/44.jpg', width: 357, height: 198, category: 'Protectores laterales (bicicleteros)', description: 'Punteras de aluminio para extremos del perfil.' },
  { id: 45, name: 'Tapones', image: 'productos/45.jpg', width: 390, height: 198, category: 'Protectores laterales (bicicleteros)', description: 'Tapones plásticos para perfiles de aluminio.' },
  { id: 46, name: 'Bases largas de chasis', image: 'productos/46.jpg', width: 420, height: 198, category: 'Protectores laterales (bicicleteros)', description: 'Bases largas para anclaje al chasis.' },
  { id: 47, name: 'Cinta reflectiva roja', image: 'productos/47.jpg', width: 291, height: 387, category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 48, name: 'Cinta reflectiva roja y blanca', image: 'productos/48.jpg', width: 342, height: 342, category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 49, name: 'Cinta reflectiva verde limón', image: 'productos/49.jpg', width: 291, height: 342, category: 'Cintas reflectivas', description: 'Cinta conspicuity retro-reflectiva. Res. 1572 y NTC 5807.' },
  { id: 50, name: 'Carpas para carrocerías', image: 'productos/50.jpg', width: 1458, height: 435, category: 'Otros', description: 'Carpas a la medida para carrocerías de camión.' },
  { id: 51, name: 'Carpas tipo kiosco', image: 'productos/51.jpg', width: 732, height: 279, category: 'Otros', description: 'Carpas tipo kiosco para eventos y exteriores.' },
  { id: 52, name: 'Lona AT 1000 RT', image: 'productos/52.jpg', width: 732, height: 345, category: 'Otros', description: 'Lona AT 1000 RT por metro, resistente y duradera.' }
];

export const WHATSAPP_URL = 'https://wa.me/573005733945';
export const INSTAGRAM_URL = 'https://www.instagram.com/johntrucksaccesories/';
const CHAT_ICON = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function whatsappProductUrl(product: Product): string {
  const message = `Hola JohnTrucks, quiero comprar: ${product.name}`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function productCard(product: Product): string {
  return `
        <article class="product-card">
          <div class="product-image"><img src="/${product.image}" alt="${esc(`${product.name} – ${product.category}, JohnTrucks`)}" width="${product.width}" height="${product.height}" loading="lazy" decoding="async" /></div>
          <h4>${esc(product.name)}</h4>
          <p class="category">${esc(product.category)}</p>
          <p class="description">${esc(product.description)}</p>
          <div class="product-footer">
            <a class="add-to-cart-btn" href="${esc(whatsappProductUrl(product))}" target="_blank" rel="noopener" title="Comprar por WhatsApp">
              ${CHAT_ICON}<span>Comprar</span>
            </a>
          </div>
        </article>`;
}

export function renderPage(): string {
  const productGroups = categories
    .map(category => `
      <div class="category-group" data-category="${esc(category)}">
        <h3 class="category-heading">${esc(category)}</h3>${products.filter(p => p.category === category).map(productCard).join('')}
      </div>`)
    .join('');

  return `
    <div class="sales-container">
      <header class="header">
        <div class="header-content">
          <div class="logo-section">
            <img src="/logo-300.webp" alt="Logo JohnTrucks Sistemas de Carpado" width="135" height="90" class="logo-img" />
            <div class="logo-text">
              <p class="logo"><span class="logo-john">John</span><span class="logo-trucks">Trucks</span></p>
              <p class="tagline">Sistemas de carpado y accesorios para vehículos de carga</p>
            </div>
          </div>
          <div class="header-actions">
            <a class="cart-button" href="${WHATSAPP_URL}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp al 300 573 3945">
              ${CHAT_ICON}<span>300 573 3945</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section class="hero">
          <img class="hero-logo-bg" src="/logo-1200.webp" alt="" aria-hidden="true" width="1200" height="800" />
          <div class="hero-content">
            <h1>Sistemas de carpado para volquetas y tractomulas</h1>
            <p>Venta, instalación y mantenimiento de carpados eléctricos y manuales en Medellín y toda Colombia.</p>
            <button class="cta-button" id="shopBtn" type="button">Ver productos</button>
          </div>
        </section>

        <section class="services-section" aria-labelledby="servicios">
          <h2 id="servicios">Instalación, mantenimiento y suministros</h2>
          <div class="services-grid">
            <article class="service-card">
              <h3>Instalación de sistemas de carpado</h3>
              <p>Instalamos carpados eléctricos y manuales tipo brazo y tipo acordeón en volquetas y tractomulas, con motor LX 600W 12V, rodillo de tracción y carpa AT1000RT.</p>
            </article>
            <article class="service-card">
              <h3>Mantenimiento y reparación</h3>
              <p>Revisamos y reparamos tu sistema de carpado: motor, reductor, escobillas, brazos, resortes y carpa, para que tu vehículo siga cubriendo la carga.</p>
            </article>
            <article class="service-card">
              <h3>Venta de suministros y repuestos</h3>
              <p>Kits eléctricos, piezas para el sistema, repuestos de motor y reductor, protectores laterales (bicicleteros) y cintas reflectivas con envíos a toda Colombia.</p>
            </article>
          </div>
        </section>

        <section class="products-section" id="productos" aria-labelledby="productos-titulo">
          <h2 id="productos-titulo">Nuestros productos</h2>
          <div class="filters">
            <button class="filter-btn active" type="button" data-filter="all">Todos</button>
            ${categories.map(c => `<button class="filter-btn" type="button" data-filter="${esc(c)}">${esc(c)}</button>`).join('\n            ')}
          </div>
          <div class="products-grid" id="productsGrid">${productGroups}
          </div>
        </section>

        <section class="contact-section" id="contacto" aria-labelledby="contacto-titulo">
          <h2 id="contacto-titulo">¿Preguntas? Contáctanos</h2>
          <address class="contact-info">
            <p>WhatsApp y teléfono: <a href="${WHATSAPP_URL}" target="_blank" rel="noopener">300 573 3945</a></p>
            <p>Instagram: <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">@johntrucksaccesories</a></p>
            <p>Medellín, Colombia · Atención de 6:00 a 20:00 · Envíos a todo el país</p>
          </address>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" name="name" placeholder="Tu nombre" aria-label="Tu nombre" required />
            </div>
            <div class="form-group">
              <input type="email" name="email" placeholder="Tu email" aria-label="Tu email" required />
            </div>
            <div class="form-group">
              <textarea name="message" placeholder="Tu mensaje" aria-label="Tu mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Enviar por WhatsApp</button>
          </form>
        </section>
      </main>

      <footer class="footer">
        <p>&copy; ${new Date().getFullYear()} JohnTrucks Sistemas de Carpado. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#contacto">Contacto</a>
        </div>
      </footer>
    </div>
  `;
}
