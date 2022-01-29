import type p5 from 'p5';
import { DevicePermission } from '@/assets/ts/permission';
import { p5w } from '@/assets/ts/p5w';

let Balls: Ball[] = [];

class Ball {
    p: p5;
    vecLocation: p5.Vector;
    vecVelocity: p5.Vector;
    diameter: number;
    speed = 30;
    c:Color = {r: 0, g: 0, b:0 };

    constructor(p:p5) {
      this.p = p;
      this.vecLocation = p.createVector(p.random(p.width), p.random(p.height));
      this.vecVelocity = p.createVector(10, 10);
      this.diameter = p.random(5, 10);
      this.c.r = p.random(255);
      this.c.g = p.random(255);
      this.c.b = p.random(255);
    }

    move() {
      const p = this.p;
      if (this.vecLocation.x < 0 || this.vecLocation.x > p.windowWidth - 10) {
        this.vecVelocity.x = this.vecVelocity.x * -1;
      }
      if (
        this.vecLocation.y < 0 ||
        this.vecLocation.y > p.windowHeight - 10
      ) {
        this.vecVelocity.y = this.vecVelocity.y * -1;
      }
    }

    display() {
      const p = this.p;
      this.vecLocation.add(this.vecVelocity);
      p.fill(this.c.r, this.c.g, this.c.b);
      p.ellipse(
        this.vecLocation.x,
        this.vecLocation.y,
        this.diameter,
        this.diameter
      );
    }
  }

const sk = (p: p5) => {
    const devicePermission = DevicePermission.getInstance(p);

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
      // ios13 or ipadOS かつ 傾きの取得が許可されている
      if (devicePermission.judgeDeviceStatus()) {
        return;
      }

      p.background(0);
      for (let i = 0; i < Balls.length; i++) {
        Balls[i].move();
        Balls[i].display();
      }
    }

    p.deviceShaken = () => {
      Balls.push(new Ball(p));
    }
}

p5w(sk);
