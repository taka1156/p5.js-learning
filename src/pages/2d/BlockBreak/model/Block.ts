import type p5 from 'p5';
import type { GameSystem } from './GameSystem';
import { BLOCK_TYPE, createBlock } from './utls';

export class Block {
  p: p5;
  x: number;
  y: number;
  blockSizeX: number;
  blockSizeY: number;
  hit: boolean;
  //ブロックが壊れるまでのヒット数
  hitMax: number;
  color: string;

  //スコアに加算されないブロックの種類
  nonScoreBlocks: BLOCK_TYPE[] = [BLOCK_TYPE.unbreakable, BLOCK_TYPE.blank];

  constructor(
    p: p5,
    blockSizeX: number,
    blockSizeY: number,
    posX: number,
    posY: number,
    hitMax: number,
    color: string,
  ) {
    this.p = p;
    this.x = posX;
    this.y = posY;
    this.blockSizeX = blockSizeX;
    this.blockSizeY = blockSizeY;
    this.hitMax = hitMax;
    this.color = color;
    this.hit = false;
  }

  hitCheck(posX: number, posY: number, diameter: number, gs: GameSystem) {
    if (this.hitMax === -1) {
      return;
    }

    this.hit = this.p.collideRectCircle(
      this.x,
      this.y,
      this.blockSizeX,
      this.blockSizeY,
      posX,
      posY,
      diameter,
    );

    if (this.hit === true) {
      this.hitMax--; //衝突回数を減らす

      // ヒット数が0になったらブロックを消す
      if (this.hitMax === 0) {
        this.x = this.y = this.blockSizeX = this.blockSizeY = 0;
        this.hitMax = -1;
        gs.increment();
      } else {
        const { blockType } = createBlock(this.hitMax);
        if (this.nonScoreBlocks.includes(blockType)) {
          return;
        }
        this.hit = false; //hitのフラグを初期化
      }
    }
  }

  display() {
    if (this.hit === true) {
      return;
    }

    this.p.fill(this.color);
    this.p.rect(this.x, this.y, this.blockSizeX, this.blockSizeY);
  }
}
