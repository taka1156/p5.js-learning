import type p5 from 'p5';
import { DevicePermission } from '@/assets/ts/permission';
import { p5w } from '@/assets/ts/p5w';

const sk = (p: p5) => {
  const devicePermission = DevicePermission.getInstance(p);

  const c: Color = {
    r: 0,
    g: 0,
    b: 0,
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    if (devicePermission.judgeDeviceStatus()) {
      return;
    }

    p.fill(c.r, c.g, c.b);
    p.rect(0, 0, p.width, p.height);
  };

  p.deviceShaken = () => {
    c.r += 5;
    c.g += 2;
    c.b += 3;

    if (c.r > 255) c.r = 0;
    if (c.g > 255) c.g = 0;
    if (c.b > 255) c.b = 0;
  };
};

p5w(sk);
