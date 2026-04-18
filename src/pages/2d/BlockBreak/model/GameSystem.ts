import type p5 from 'p5';

export class GameSystem {
  p: p5;
  //データ書き換えでブロックの耐久レベルを設定(0~4)
  BLOCK_DATA: number[][];
  PROD_BLOCK_DATA = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    [4, 3, 2, 2, 2, 2, 2, 2, 3, 4],
    [4, 3, 2, 5, 1, 1, 5, 2, 3, 4],
    [4, 3, 2, 5, 1, 1, 5, 2, 3, 4],
    [4, 3, 2, 2, 2, 2, 2, 2, 3, 4],
    [4, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  ];
  DEBUG_BLOCK_DATA = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  frameRow: number; //行
  frameColumn: number; //列
  count: number; //壊したブロックの数
  sentence: string; //ゲームクリア、ゲームオーバーの表示
  finished = false;
  maxBreakableBlocks = 0;

  constructor(p: p5) {
    this.p = p;
    this.count = 0;
    this.sentence = '';
    this.BLOCK_DATA = this.deciedeBlockData();
    this.frameRow = this.BLOCK_DATA.length;
    this.frameColumn = this.BLOCK_DATA[0].length;

    for (let i = 0; i < this.frameRow; i++) {
      for (let j = 0; j < this.frameColumn; j++) {
        if (this.BLOCK_DATA[i][j] > 0) {
          this.maxBreakableBlocks++;
        }
      }
    }
  }

  deciedeBlockData() {
    const queryStr = window.location.search;
    const urlParams = new URLSearchParams(queryStr);
    const debug = urlParams.get('debug') || '';
    if (['true', '1'].includes(debug.toLowerCase())) {
      return this.DEBUG_BLOCK_DATA;
    }

    return this.PROD_BLOCK_DATA;
  }

  increment() {
    this.count++;
  }

  checkGameClear() {
    return this.count === this.maxBreakableBlocks;
  }

  setFinished() {
    this.finished = true;
  }

  getFinished() {
    return this.finished;
  }

  textDisplay(sentence: string) {
    if (!this.finished) {
      this.sentence = sentence;
    }

    const score = this.count * 100;

    this.p.textAlign(this.p.CENTER);
    this.p.textSize(this.p.width / 10);
    this.p.fill('red');
    this.p.text(this.sentence, this.p.width / 2, this.p.height / 2 - 40);

    this.p.textAlign(this.p.CENTER);
    this.p.textSize(this.p.width / 16);
    this.p.fill('red');
    this.p.text(`Score: ${score}`, this.p.width / 2, this.p.height / 2 + 60);
  }
}
