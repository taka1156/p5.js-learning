let button = null;
let permissionGranted = false;

// デバイスをチェック
function DeviceVersionCheck() {
  const IS_IOS_13 =
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function';
  if (IS_IOS_13 && !permissionGranted) {
    button = createButton('click');
    button.style('font-size', '20px');
    button.center();
    button.mousePressed(requestAccess);
  }
  return { version: IS_IOS_13};
}

// すでに傾きにアクセスできる
function deviceMoved()  {
  permissionGranted = true;
  button.remove();
}

// ユーザーに方向や動きの取得を許可してもらう。
function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response === 'granted') {
        permissionGranted = true;
        button.remove();
      }
    })
    .catch(e => console.log(e));
}
