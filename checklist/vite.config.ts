import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      exclude: ['**/types.ts', '**/index.ts', 'vite.config.ts', 'eslint.config.js'],
    },
  },
});

// https://vite.dev/config/
export default mergeConfig(viteConfig, vitestConfig);
