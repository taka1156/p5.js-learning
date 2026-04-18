import type p5 from 'p5';
import { ensureP5Collide2dLoaded } from '@/assets/ts/p5collide';
import { p5w } from '@/assets/ts/p5w';
import { Ball } from './model/Ball';
import { Block } from './model/Block';
import { GameSystem } from './model/GameSystem';
import { Paddle } from './model/Paddle';
import { BLOCK_TYPE, createBlock } from './model/utls';

const sk = (p: p5) => {
  const gs = new GameSystem(p);
  const blocks: Block[] = [];
  let paddle: Paddle;
  let playerBall: Ball;

  const urlParams = new URLSearchParams(window.location.search);
  const isAuto = ['true', '1'].includes(
    (urlParams.get('auto') || '').toLowerCase(),
  );

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    paddle = new Paddle(p);
    playerBall = new Ball(p);

    const blockSizeX = Math.ceil(p.width / 20); //block1個当たりのｘ座標
    const blockSizeY = Math.ceil(p.height / 50); //block1個当たりのy座標
    const marginX = Math.ceil(p.width / 30); //Xの間隔
    const marginY = Math.ceil(p.height / 50) + 14; //Yの間隔

    for (let i = 0; i < gs.frameRow; i++) {
      for (let j = 0; j < gs.frameColumn; j++) {
        const hitCount = gs.MAIN_BLOCK_DATA[i][j];
        const { color, blockType } = createBlock(hitCount);

        if (blockType === BLOCK_TYPE.blank) {
          continue;
        }

        const positionX = blockSizeX * (j + 1) + marginX * (j + 1);
        const positionY = blockSizeY * (i + 1) + marginY * (i + 1);
        const bk = new Block(
          p,
          blockSizeX,
          blockSizeY,
          positionX,
          positionY,
          hitCount,
          color,
        );
        blocks.push(bk);
      }
    }
  };

  p.draw = () => {
    p.background(0);
    playerBall.move(
      paddle.x,
      paddle.y,
      paddle.paddleSizeX,
      paddle.paddleSizeY,
      gs.count,
      gs.getFinished(),
    );

    let anyBlockHit = false;
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (gs.checkGameClear() || playerBall.getFalledBall()) {
        break;
      }
      const hit = blocks[i].hitCheck(
        playerBall.vecLocation.x,
        playerBall.vecLocation.y,
        playerBall.diameter,
        gs,
      );
      if (hit) {
        anyBlockHit = true;
      }
      if (blocks[i].destroyed) {
        blocks.splice(i, 1);
        continue;
      }
      blocks[i].display();
    }
    if (anyBlockHit) {
      playerBall.reflectY();
    }
    playerBall.display();

    if (gs.checkGameClear()) {
      gs.textDisplay('Game Clear');
      gs.setFinished();
    }

    if (playerBall.getFalledBall()) {
      gs.textDisplay('Game Over');
      gs.setFinished();
    }

    if (isAuto) {
      paddle.move(playerBall.vecLocation.x - paddle.paddleSizeX / 2);
    } else if (p.mouseIsPressed) {
      paddle.move(p.mouseX);
    }
    paddle.display();
  };
};

const bootstrap = async () => {
  await ensureP5Collide2dLoaded();
  p5w(sk);
};

void bootstrap();
