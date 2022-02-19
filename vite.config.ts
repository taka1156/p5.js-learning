import { defineConfig } from 'vite';
import path from 'path';
import { vitePlugins } from './plugins';


export default defineConfig({
    root: 'src',
    base: process.env.NODE_ENV === 'production' ? '/p5.js-learning/' : './',
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
});
