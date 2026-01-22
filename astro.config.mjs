import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Ganti dengan username GitHub kamu
  site: 'https://muhammadrezga.github.io', 
  // Ganti dengan nama repository kamu (misal: '/portofolio')
  base: '/Portofolio', 
  integrations: [tailwind()],
});
