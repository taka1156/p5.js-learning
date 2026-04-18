import p5 from 'p5';

declare global {
  interface Window {
    p5?: typeof p5;
  }
}

let collide2dLoaded: Promise<void> | null = null;

export const ensureP5Collide2dLoaded = (): Promise<void> => {
  if (!collide2dLoaded) {
    collide2dLoaded = (async () => {
      if (typeof window !== 'undefined' && !window.p5) {
        window.p5 = p5;
      }
      await import('p5.collide2d');
    })();
  }

  return collide2dLoaded;
};
