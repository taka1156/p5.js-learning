import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';
import font from '@/assets/font/Roboto-RegularItalic.ttf';

let myfont: p5.Font;

const sk = (p: p5) => {
  p.preload = () => {
    myfont = p.loadFont(font);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.textFont(myfont);
    p.textSize(p.width / 15);
    p.textAlign(p.CENTER, p.CENTER);
  };

  let r, g, b;
  r = g = b = 255;
  let i = 0;

  p.draw = () => {
    p.background(0);
    let time = p.millis();
    p.rotateX(time / 1000);
    p.rotateY(time / 1234);

    i++;

    if (i % 30 === 0) {
      r = Math.floor(p.random() * 255);
      g = Math.floor(p.random() * 255);
      b = Math.floor(p.random() * 255);
    }

    p.fill(r, g, b);
    p.text("Taka's P5.js Test Page", 0, 0);
  };
};

p5w(sk);
