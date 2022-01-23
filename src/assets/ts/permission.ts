let permissionGranted = false;

declare let DeviceOrientationEvent: {
  prototype: DeviceOrientationEvent;
  new (type: string, eventInitDict?: DeviceOrientationEvent): DeviceOrientationEvent;
  requestPermission?: () => Promise<PermissionState>;
};

// デバイスをチェック
const deviceVersionCheck = () => {
  const IS_IOS_13 =
    DeviceOrientationEvent &&
    typeof DeviceOrientationEvent.requestPermission === 'function';
  return IS_IOS_13;
};

// ユーザーに方向や動きの取得を許可してもらう。
const requestAccess = ():DevicePermission => {
  if (
    typeof DeviceOrientationEvent !== undefined
    && typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === 'granted') permissionGranted = true;
      })
      .catch((e) => console.log(e));
  }

  return setPermission(permissionGranted);
};

const setPermission = (permission: boolean, isIos13: boolean = deviceVersionCheck()):DevicePermission => {
  return {isIos13: isIos13, permission: permission};
}

const judgeDeviceStatus = (deviceStatus: DevicePermission): boolean => {
  return deviceStatus.isIos13 && !deviceStatus.permission 
}

export { setPermission, requestAccess, judgeDeviceStatus };
