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

  const c : Color = {
    r: 255,
    g: 255,
    b: 255
  }

  let i = 0;

  p.draw = () => {
    p.background(0);
    let time = p.millis();
    p.rotateX(time / 1000);
    p.rotateY(time / 1234);

    i++;

    if (i % 30 === 0) {
      c.r = Math.floor(p.random() * 255);
      c.g = Math.floor(p.random() * 255);
      c.b = Math.floor(p.random() * 255);
    }

    p.fill(c.r, c.g, c.b);
    p.text("Taka's P5.js Test Page", 0, 0);
  };
};

p5w(sk);
