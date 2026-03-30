import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',       // optional, default is '.'
  base: './',      // important for static hosting on Render
  build: {
    outDir: 'dist' // optional, default is 'dist'
  },
  server: {
    port: 5173,
    open: true,
  },
});