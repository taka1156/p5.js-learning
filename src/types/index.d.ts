type DeviceStatus = { isIos13: boolean; permission: boolean };

type Color = {
  r: number;
  g: number;
  b: number;
};

type ColorList =
  | 'white'
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'purple'
  | 'orange';

declare module '*.ttf' {
  const font: string;
  export default font;
}
