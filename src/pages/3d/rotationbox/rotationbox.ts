import type p5 from 'p5';
import { setPermission, requestAccess, judgeDeviceStatus } from '@/assets/ts/permission';
import { p5w } from '@/assets/ts/p5w';
let isDeviceMove: DevicePermission = setPermission(false);

const sk = (p: p5) => {
  let btn: p5.Element = p.createButton('click');

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    // ios13 or ipadOS かつ 傾きの取得が許可されていない時は進まない
    // permission判定処理に移動
    if (judgeDeviceStatus(isDeviceMove)) {
      btn.style('font-size', '20px');
      btn.center();
      btn.mousePressed(() => {
        isDeviceMove = requestAccess();
      });
      return;
    } else {
      btn.remove();
    }

    p.background(200);
    p.rotateX(p.radians(p.rotationX));
    p.rotateY(p.radians(p.rotationY));
    p.rotateZ(p.radians(p.rotationZ));
    p.box(100, 100, 100);
  };

  // すでに傾きにアクセスできる
  // permission判定処理に移動
  p.deviceMoved = () => {
    btn.remove();
  };
};

p5w(sk);
