/// vite.config.ts
import { defineConfig } from 'vitest/config'; // ✅ use this, not 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // or .js if you're using JS
    include: ['src/**/*.test.tsx'], // update path if needed
  },
});
