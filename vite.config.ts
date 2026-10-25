import { defineConfig, type Plugin } from 'vite'
import { renderPage } from './src/content.ts'

// Inserta el contenido de la página como HTML estático en index.html (SEO: Google lo lee sin ejecutar JS)
function staticContent(): Plugin {
  return {
    name: 'johntrucks-static-content',
    transformIndexHtml: html => html.replace('<!--app-html-->', renderPage()),
  }
}

// GitHub Pages publica el sitio en https://www.johntrucks.online/ (dominio propio, ver public/CNAME)
export default defineConfig({
  base: '/',
  plugins: [staticContent()],
})
