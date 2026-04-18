import path from 'node:path';
import { defineConfig } from 'vite';
import { vitePlugins } from './plugins';

export default defineConfig(({ mode }) => {
  return {
    root: 'src',
    base: mode !== 'development' ? '/p5.js-learning/' : './',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: vitePlugins,
  };
});
