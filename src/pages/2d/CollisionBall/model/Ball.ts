import type p5 from "p5";


type BallColor = {
    R: number;
    G: number;
    B: number;
};

export class Ball {
    p: p5;
    id: number; //自分かどうかを判定するid(自分と衝突はあり得ない)
    vecLocation: p5.Vector; //位置ベクトル
    vecVelocity: p5.Vector; //速度ベクトル
    diameter: number; //直径
    hit: boolean; //衝突フラグ
    falledBall = false; //ボールが落ちたかどうか
    color: BallColor; //色

        constructor(p: p5, id: number, Balls: Ball[]) {
          this.p = p;
          this.vecLocation = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height)); //初期位置
          this.vecVelocity = this.p.createVector(
            (this.p.width / 1000) * 1.6,
            (this.p.height / 1000) * 1.6
          ); //速さ
          this.diameter = 60; //直径
          this.id = id;
          this.color = { R: 255, G: 255, B: 255 }; //色
          this.hit = false; //衝突フラグ

          //座標の重複回避
          for (let i = 0; i < Balls.length; i++) {
            if (this.id !== Balls[i].id) {
              this.hit = this.p.collideCircleCircle(
                this.vecLocation.x,
                this.vecLocation.y,
                this.diameter + 1,
                Balls[i].vecLocation.x,
                Balls[i].vecLocation.y,
                Balls[i].diameter + 1
              );
              if (this.hit) {
                this.vecLocation = this.p.createVector(this.p.random(this.p.width), this.p.random(this.p.height));
              }
            }
          }
        }

        move(Balls: Ball[]) {
          for (let i = 0; i < Balls.length; i++) {
            if (this.id !== Balls[i].id) {
              this.hit = this.p.collideCircleCircle(
                this.vecLocation.x,
                this.vecLocation.y,
                this.diameter,
                Balls[i].vecLocation.x,
                Balls[i].vecLocation.y,
                Balls[i].diameter
              );
              if (this.hit === true) {
                break;
              } else {
                this.hit = false;
              }
            }
          }

          if (this.hit === true) {
            this.color = { R: 255, G: 0, B: 0 };
          } else {
            this.color = { R: 255, G: 255, B: 255 };
          }

          if (
            this.hit ||
            this.vecLocation.x < 0 ||
            this.vecLocation.x > this.p.width
          ) {
            this.vecVelocity.x = this.vecVelocity.x * -1;
          }
          if (
            this.hit ||
            this.vecLocation.y < 0 ||
            this.vecLocation.y > this.p.height
          ) {
            this.vecVelocity.y = this.vecVelocity.y * -1;
          }
        }

        display() {
          this.vecLocation.add(this.vecVelocity);
          this.p.fill(this.color.R, this.color.G, this.color.B);
          this.p.ellipse(
            this.vecLocation.x,
            this.vecLocation.y,
            this.diameter,
            this.diameter
          );
        }
      }
