import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';

const sk = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.noStroke();
    p.colorMode(p.RGB, 100);
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        p.stroke(i, j, 0);
        p.point(i, j);
      }
    }

    p.translate(101, 0); //重なるのでずらす

    p.colorMode(p.HSB, 100);
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        p.stroke(i, j, 100);
        p.point(i, j);
      }
    }
  };
};

p5w(sk);
