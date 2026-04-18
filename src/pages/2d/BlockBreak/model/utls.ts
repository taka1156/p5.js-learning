//ブロックの耐久レベルによって色を返す
enum BLOCK_COLOR {
  gold = 'gold',
  pink = 'pink',
  green = 'green',
  blue = 'blue',
  orange = 'orange',
  red = 'red',
  black = 'black',
  silver = '999B9B',
}

export enum BLOCK_TYPE {
  unbreakable = 'unbreakable',
  breakable = 'breakable',
  blank = 'blank',
}

type BlockInfo = {
  color: BLOCK_COLOR;
  blockType: BLOCK_TYPE;
};

export function createBlock(hitMax: number): BlockInfo {
  switch (hitMax) {
    case -1:
      return { color: BLOCK_COLOR.silver, blockType: BLOCK_TYPE.unbreakable };
    case 0:
      return { color: BLOCK_COLOR.black, blockType: BLOCK_TYPE.blank };
    case 1:
      return { color: BLOCK_COLOR.pink, blockType: BLOCK_TYPE.breakable };
    case 2:
      return { color: BLOCK_COLOR.green, blockType: BLOCK_TYPE.breakable };
    case 3:
      return { color: BLOCK_COLOR.blue, blockType: BLOCK_TYPE.breakable };
    case 4:
      return { color: BLOCK_COLOR.orange, blockType: BLOCK_TYPE.breakable };
    case 5:
      return { color: BLOCK_COLOR.red, blockType: BLOCK_TYPE.breakable };
    default:
      throw new Error('Invalid hitMax value');
  }
}
