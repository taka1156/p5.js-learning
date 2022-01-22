import fg from 'fast-glob';

const generatePathConfig = async (root = './src') => {
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

  return fileList;
};

const pathConfig = generatePathConfig();

export { pathConfig };
