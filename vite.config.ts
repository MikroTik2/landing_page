import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import svgLoader from 'vite-svg-loader';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],

  server: {
    port: 3001,
    open: true,
    cors: true,
  },

  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});