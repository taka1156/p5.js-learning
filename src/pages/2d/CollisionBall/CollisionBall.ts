import type p5 from 'p5';
import { ensureP5Collide2dLoaded } from '@/assets/ts/p5collide';
import { p5w } from '@/assets/ts/p5w';
import { Ball } from './model/Ball';

const sk = (p: p5) => {
  const Balls: Ball[] = [];
  const ballNum = 10;

  p.setup = () => {
    p.createCanvas(400, 400);

    for (let i = 0; i < ballNum; i++) {
      Balls.push(new Ball(p, i, Balls));
    }
  };

  p.draw = () => {
    p.background(0);

    for (let i = 0; i < ballNum; i++) {
      Balls[i].move(Balls);
      Balls[i].display();
    }
  };
};

const bootstrap = async () => {
  await ensureP5Collide2dLoaded();
  p5w(sk);
};

void bootstrap();
