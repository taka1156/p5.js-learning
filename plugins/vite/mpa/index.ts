import { Plugin, UserConfig } from 'vite';
import fg from 'fast-glob';

const generatePathConfig = (root = process.cwd()) => {
  const fileList = {};
  const paths = fg.sync(`${root}/**/*.html`);

  paths.forEach((path) => {
    const dirList = path.split('/');
    const fileName = dirList[dirList.length - 1].replace('.html', '');
    if (fileName === 'index' && dirList.length > 4) {
      fileList[`${dirList[dirList.length - 2]}`] = path.replace(root, '');
    } else {
      fileList[`${fileName}`] = path.replace(root, '');
    }
  });

  for(const file in fileList) {
    console.log(`${file}:${fileList[file]}`);
  }

  return fileList;
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
