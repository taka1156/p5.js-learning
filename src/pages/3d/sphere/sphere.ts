import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';

// 4*4のmatrixに型が対応していないため独自に定義
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/58165/commits/a1aa6282a89873342a8c018674fac815564e4a2e
type p5t = p5 & {
  applyMatrix(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    ...args: number[]
  ): p5;
};

const sk = (p: p5t) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noFill();
  };

  let i = 0, rndStroke1 = 140, rndStroke2 = 255;

  p.draw = () => {
    p.background(200);
    p.rotateY(p.PI / 6);

    let rad = p.millis() / 1000;
    let ct = p.cos(rad);
    let st = p.sin(rad);

    i++;

    if (i % 35 === 0) {
      rndStroke1 = rnd();
      rndStroke2 = rnd();
    }

    p.applyMatrix(
      ct,
      0.0,
      st,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      -st,
      0.0,
      ct,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
    );

    p.stroke(rndStroke1);
    p.sphere(140);

    p.applyMatrix(
      ct,
      0.0,
      st,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      -st,
      0.0,
      ct,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0
    );

    p.stroke(rndStroke2);
    p.sphere(200);
  };

  function rnd() {
    return Math.floor(p.random() * 255);
  }
};

p5w(sk);
