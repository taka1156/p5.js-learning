import type p5 from 'p5';
import type { Block } from './Block';

const BALL_DIAMETER = 20; //ボールの直径
const BALL_SPEED = 5; //ボールの速さ

export class Ball {
  p: p5;
  vecLocation: p5.Vector; //位置ベクトル
  vecVelocity: p5.Vector; //速度ベクトル
  diameter: number; //直径
  hit: boolean; //衝突フラグ
  falledBall = false; //ボールが落ちたかどうか

  constructor(p: p5) {
    this.p = p;
    this.vecLocation = p.createVector(p.width * 0.5, p.height * 0.85); //初期位置
    this.vecVelocity = p.createVector(BALL_SPEED, BALL_SPEED); //速さ
    this.diameter = BALL_DIAMETER; //直径
    this.hit = false; //衝突フラグ
  }

  getFalledBall() {
    return this.falledBall;
  }

  move(
    Blocks: Block[],
    posX: number,
    posY: number,
    sizeX: number,
    sizeY: number,
    count: number,
    finished: boolean,
  ) {
    if (count === Blocks.length || this.falledBall) {
      return;
    }

    this.hit = this.p.collideRectCircle(
      posX,
      posY,
      sizeX,
      sizeY,
      this.vecLocation.x,
      this.vecLocation.y,
      this.diameter,
    );

    //点が3000~5000の間ボールサイズ二倍
    if (count > 30 && count < 50) {
      this.diameter = BALL_DIAMETER * 2;
    } else {
      this.diameter = BALL_DIAMETER;
    }

    // ゲームクリアの時は、全方向をはねるようにする。
    if (finished) {
      if (this.vecLocation.x < 0 || this.vecLocation.x > this.p.width) {
        this.vecVelocity.x = this.vecVelocity.x * -1;
      }
      if (this.vecLocation.y < 0 || this.vecLocation.y > this.p.height) {
        this.vecVelocity.y = this.vecVelocity.y * -1;
      }
      return;
    }

    if (this.vecLocation.x < 0 || this.vecLocation.x > this.p.width) {
      this.vecVelocity.x = this.vecVelocity.x * -1;
    }
    if (this.hit || this.vecLocation.y < 0) {
      this.vecVelocity.y = this.vecVelocity.y * -1;
    }
    if (this.vecLocation.y > this.p.height) {
      this.falledBall = true;
    }
  }

  display() {
    this.vecLocation.add(this.vecVelocity);
    this.p.fill(255); //白色で固定
    this.p.ellipse(
      this.vecLocation.x,
      this.vecLocation.y,
      this.diameter,
      this.diameter,
    );
  }
}
