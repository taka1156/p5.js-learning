import { defineConfig } from 'vite';
import path from 'path';
const json = require('./path.config.json');

export default defineConfig({
  root: 'src',
  base:
    process.env.NODE_ENV === 'production' ? '/p5.js-learning/' : './',
  build: {
    rollupOptions: {
      input: {
        ...json
      }
    },
    outDir: '../dist',
    polyfillModulePreload: false,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
