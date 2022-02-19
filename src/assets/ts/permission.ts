import type p5 from 'p5';

declare let DeviceOrientationEvent: {
  prototype: DeviceOrientationEvent;
  new ( type: string, eventInitDict?: DeviceOrientationEvent ): DeviceOrientationEvent;
  requestPermission?: () => Promise<PermissionState>;
};

class DevicePermission {
  private deviceStatus: DeviceStatus;
  btn: p5.Element;
  private static _instance: DevicePermission;

  private constructor(p:p5) {
    this.deviceStatus = { isIos13: this.deviceVersionCheck(), permission: false };
    this.btn = this.createBtn(p);
    if (this.judgeDeviceStatus()) {
      p.deviceMoved = () => this.deviceMoved();
    } else {
      this.btn.remove();
    }
  }

  public static getInstance = (p: p5) => {
    if (!this._instance) {
      this._instance = new DevicePermission(p);
    }
    return this._instance;
  };

  // デバイスをチェック
  private deviceVersionCheck = () => {
    const IS_IOS_13 =
      DeviceOrientationEvent &&
      typeof DeviceOrientationEvent.requestPermission === 'function';
    return IS_IOS_13;
  };

  // ユーザーに方向や動きの取得を許可してもらう。
  private requestAccess = (): void => {
    let permissionGranted = false;

    if (
      typeof DeviceOrientationEvent !== undefined &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === 'granted') permissionGranted = true;
        })
        .catch((e) => console.log(e));
    }

    this.setPermission(permissionGranted);
  };

  private setPermission = (
    permission: boolean,
    isIos13: boolean = this.deviceVersionCheck()
  ): void => {
    this.deviceStatus = { isIos13: isIos13, permission: permission };
  };

  public judgeDeviceStatus = (): boolean => {
    const { isIos13, permission } = this.deviceStatus;
    return isIos13 && !permission;
  };

  private createBtn = (p:p5) => {
    const btn = p.createButton('click');
    btn.style('font-size', '20px');
    btn.center();
    btn.mousePressed(this.requestAccess);
    return btn;
  }

  // すでに傾きが取れる時ボタン解除
  private deviceMoved = (): void => {
    this.btn.remove();
    this.setPermission(true);
  };
}

export { DevicePermission };
