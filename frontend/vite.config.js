import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',   // IMPORTANT for Render static hosting
  build: { outDir: 'dist' },
});