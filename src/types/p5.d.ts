import 'p5';

declare module 'p5' {
  interface p5InstanceExtensions {
    collideRectRect(
      x: number,
      y: number,
      w: number,
      h: number,
      x2: number,
      y2: number,
      w2: number,
      h2: number,
    ): boolean;
    collideRectCircle(
      rx: number,
      ry: number,
      rw: number,
      rh: number,
      cx: number,
      cy: number,
      diameter: number,
    ): boolean;
    collideCircleCircle(
      x: number,
      y: number,
      d: number,
      x2: number,
      y2: number,
      d2: number,
    ): boolean;
    collidePointRect(
      px: number,
      py: number,
      rx: number,
      ry: number,
      rw: number,
      rh: number,
    ): boolean;
    collidePointCircle(
      px: number,
      py: number,
      cx: number,
      cy: number,
      d: number,
    ): boolean;
    collideLineLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number,
    ): boolean;
    collideLineRect(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      rx: number,
      ry: number,
      rw: number,
      rh: number,
    ): boolean;
    collideLineCircle(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      cx: number,
      cy: number,
      diameter: number,
    ): boolean;
    collidePointLine(
      px: number,
      py: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ): boolean;
  }
}
