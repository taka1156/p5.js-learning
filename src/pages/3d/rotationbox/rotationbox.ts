import type p5 from 'p5';
import { DevicePermission } from '@/assets/ts/permission';
import { p5w } from '@/assets/ts/p5w';


const sk = (p: p5) => {
  const devicePermission = DevicePermission.getInstance(p);

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    // ios13 or ipadOS かつ 傾きの取得が許可されていない時は進まない
    // permission判定処理に移動
    if (devicePermission.judgeDeviceStatus()) {
      return;
    }

    p.background(200);
    p.rotateX(p.radians(p.rotationX));
    p.rotateY(p.radians(p.rotationY));
    p.rotateZ(p.radians(p.rotationZ));
    p.box(100, 100, 100);
  };

  // すでに傾きにアクセスできる
  // permission判定処理に移動
  p.deviceMoved = () => devicePermission.deviceMoved();
};

p5w(sk);
