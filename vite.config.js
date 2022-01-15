import { defineConfig } from 'vite';
import path from 'path';
import { generatePathConfig } from './buildHelper/index.js';

export default defineConfig(async () => {
  const pathList = await generatePathConfig();

  return {
    root: 'src',
    build: {
      rollupOptions: {
        input: pathList,
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
  };
});
