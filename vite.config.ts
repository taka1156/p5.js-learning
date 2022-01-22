import { defineConfig } from 'vite';
import path from 'path';
import { viteMdPlugin, pathConfig } from './plugins';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(async () => {
  const paths = await pathConfig;

  return {
    root: 'src',
    base: process.env.NODE_ENV === 'production' ? '/p5.js-learning/' : './',
    build: {
      rollupOptions: {
        input: paths,
        plugins: [visualizer()],
      },
      outDir: '../dist',
      polyfillModulePreload: false,
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [viteMdPlugin],
  };
});
