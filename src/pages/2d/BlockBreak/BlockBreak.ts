import type p5 from "p5";
import { p5w } from "@/assets/ts/p5w";
import { ensureP5Collide2dLoaded } from "@/assets/ts/p5collide";
import { GameSystem } from "./model/GameSystem";
import { createBlock } from "./model/utls";
import { Block } from "./model/Block";
import { Ball } from "./model/Ball";
import { Paddle } from "./model/Paddle";

const sk = (p: p5) => {
    const gs = new GameSystem(p);
    const blocks: Block[] = [];
    let paddle: Paddle;
    let playerBall: Ball;

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
                const hitCount = gs.BLOCK_DATA[i][j];
                const { color, blockType } = createBlock(hitCount);

                if (blockType === 'blank') {
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
                    color
                )
                blocks.push(bk);

            }
        }
    };


    p.draw = () => {
        p.background(0);
        playerBall.move(
            blocks,
            paddle.x,
            paddle.y,
            paddle.paddleSizeX,
            paddle.paddleSizeY,
            gs.count,
            gs.getFinished()
        );
        playerBall.display();

        for (let i = 0; i < blocks.length; i++) {
            if (gs.checkGameClear() || playerBall.getFalledBall()) break;
            playerBall.move(
                blocks,
                blocks[i].x,
                blocks[i].y,
                blocks[i].blockSizeX,
                blocks[i].blockSizeY,
                gs.count,
                gs.getFinished()
            );
            blocks[i].hitCheck(
                playerBall.vecLocation.x,
                playerBall.vecLocation.y,
                playerBall.diameter,
                gs
            );
            blocks[i].display();
        }

        if (gs.checkGameClear()) {
            gs.textDisplay('Game Clear');
            gs.setFinished();
        }

        if (playerBall.getFalledBall()) {
            gs.textDisplay('Game Over');
            gs.setFinished();
        }

        if (p.mouseIsPressed) {
            let X = p.mouseX;
            paddle.move(X);
        }
        paddle.display();
    }
}

const bootstrap = async () => {
    await ensureP5Collide2dLoaded();
    p5w(sk);
};

void bootstrap();