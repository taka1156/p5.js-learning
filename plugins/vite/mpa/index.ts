import { Plugin, UserConfig } from 'vite';
import fg from 'fast-glob';

// https://ja.vitejs.dev/config/#root
const generatePathConfig = (root = process.cwd()) => {
  const paths = fg.sync(`${root}/**/*.html`);
  return paths.map((path) => path.replace(root, ''));
};

const resolveMpaConfig = (vitePlugin: UserConfig): UserConfig => ({
  build: {
    rollupOptions: {
      input: generatePathConfig(vitePlugin.root)
    }
  }
})

export const viteMpaPlugin: Plugin = {
  name: 'viteMpaPlugin',
  config: (vitePlugin, _) => resolveMpaConfig(vitePlugin),
  apply: 'build'
}
