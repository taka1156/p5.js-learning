import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';

const sk = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    //月食

    //真ん中
    p.ellipseMode(p.RADIUS);
    p.fill(255);
    p.ellipse(50, 50, 30, 30);

    p.ellipseMode(p.CENTER);
    p.fill(100);
    p.ellipse(50, 50, 30, 30);

    p.translate(100, 0); //重なるのでずらす

    //角
    p.ellipseMode(p.CORNER);
    p.fill(255);
    p.ellipse(25, 25, 50, 50);

    p.ellipseMode(p.CORNERS);
    p.fill(100);
    p.ellipse(25, 25, 50, 50);

    p.translate(100, 0); //重なるのでずらす

    //四角版の月食

    //角
    p.rectMode(p.CORNER);
    p.fill(255);
    p.rect(25, 25, 50, 50);

    p.rectMode(p.CORNERS);
    p.fill(100);
    p.rect(25, 25, 50, 50);

    p.translate(100, 0); //重なるのでずらす

    //真ん中
    p.rectMode(p.RADIUS);
    p.fill(255);
    p.rect(50, 50, 30, 30);

    p.rectMode(p.CENTER);
    p.fill(100);
    p.rect(50, 50, 30, 30);
  };
};

p5w(sk);
