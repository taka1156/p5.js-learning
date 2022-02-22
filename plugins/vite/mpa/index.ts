import { Plugin, UserConfig } from 'vite';
import fg from 'fast-glob';

// https://ja.vitejs.dev/config/#root
const generatePathConfig = (root = process.cwd(), ext: string) => {
  const paths = fg.sync(`${root}/**/*.${ext}`);
  return paths.map((path) => path.replace(root, ''));
};

const resolveMpaConfig = (vitePlugin: UserConfig, ext: string): UserConfig => ({
  build: {
    rollupOptions: {
      input: generatePathConfig(vitePlugin.root, ext)
    }
  }
})

export const vitePluginMpa = (extention: string = 'html'): Plugin  => ({
  name: 'vite-plugin-mpa',
  config: (vitePlugin, _) => resolveMpaConfig(vitePlugin, extention),
  apply: 'build'
})
