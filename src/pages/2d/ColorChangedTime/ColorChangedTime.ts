import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';

const sk = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
  };

  let rb = 0;
  let gb = 0;
  let bb = 0;

  p.draw = () => {
    let time = p.second();
    const c: Color = {
        r: 0,
        g: 0,
        b: 0
    }
    c.r = Math.floor(time / 10);
    c.g = Math.floor(time / 15);
    c.b = Math.floor(time / 25);

    if (rb <= 255) rb += c.r;
    else rb = Math.floor(rb % 255);
    if (gb <= 255) gb += c.g;
    else gb = Math.floor(gb % 255);
    if (bb <= 255) bb += c.b;
    else bb = Math.floor(bb % 255);

    let rb1 = rb;
    let gb1 = gb;
    let bb1 = bb;

    p.fill(rb1, gb1, bb1);
    p.rect(0, 0, p.windowWidth * 2, p.windowHeight * 2);
  };
};

p5w(sk);
