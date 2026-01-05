import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Project-Shopping-Cart---Ether-The-Void-Market/' : '/',
  plugins: [react()],
}));
