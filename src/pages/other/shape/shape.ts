import type p5 from 'p5';
import { p5w } from '@/assets/ts/p5w';

const sk = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 2);
  };

  p.draw = () => {
    p.fill(255);
    //円形(扇型も含む)
    //p.arc(中心座標X, 中心座標Y, 幅, 高さ, 開始位置,終了位置,モード)モードはなくてもいい
    p.arc(50, 50, 100, 100, 0, p.PI, p.PIE);
    p.arc(200, 50, 100, 100, 50, p.PI + p.QUARTER_PI, p.PIE);
    p.arc(350, 50, 100, 100, 0, p.PI + p.QUARTER_PI, p.CHORD);
    p.arc(500, 50, 100, 100, 0, p.TWO_PI);

    //楕円
    //p.ellipse(中心座標X,中心座標Y,幅,高さ)高さはなくてもいい
    p.ellipse(50, 170, 100, 100);
    p.ellipse(200, 170, 100, 120);
    p.ellipse(350, 170, 150, 100);
    p.ellipse(500, 170, 120, 50);
    p.ellipse(500, 170, 50, 120);

    //直線
    //p.line(始点のX, 始点のy,終点のX,終点のY);
    p.line(0, 300, 100, 300);
    p.line(200, 250, 200, 350);
    p.line(410, 250, 290, 340);
    p.line(580, 340, 430, 250);

    //点
    //p.point(x,y)
    p.point(50, 510);
    p.point(50, 511);
    p.point(51, 510);
    p.point(51, 511);

    p.point(200, 510);
    p.point(200, 511);
    p.point(201, 510);
    p.point(201, 511);

    p.point(350, 510);
    p.point(350, 511);
    p.point(351, 510);
    p.point(351, 511);

    p.point(500, 510);
    p.point(500, 511);
    p.point(501, 510);
    p.point(501, 511);

    //長方形
    //p.rect(x,y,幅,高さ,丸みの大きさ);
    p.rect(20, 560, 100, 55);
    p.rect(180, 560, 100, 55, 20);
    p.rect(350, 560, 55, 55, 20);
    p.rect(470, 560, 55, 55, 20);

    //正方形
    //p.square(x, y, 一辺の長さ, 丸み);
    p.square(20, 680, 50);
    p.square(180, 680, 50, 20);

    //三角形
    //p.triangle(x1, y1, x2, y2, y3, y3);
    p.triangle(400, 730, 370, 640, 340, 730);
  };
};

p5w(sk);
