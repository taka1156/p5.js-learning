const fg = require('fast-glob');

const generatePathConfig = async (root = './src') => {
  const fileList = {};
  const paths = fg.sync(`${root}/**/*.html`);

  paths.forEach((path) => {
    const dirList = path.split('/');
    const fileName = dirList[dirList.length - 1].replace('.html', '');
      fileList[`${fileName}`] = path.replace(root, '');
  });

  return fileList;
};

export { generatePathConfig };
