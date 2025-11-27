import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // keep the new Tailwind Vite plugin
  ],
  base: '/', // ensures JS/CSS load correctly on Vercel
});
