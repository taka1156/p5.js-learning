import p5 from 'p5';
import '@/assets/sass/p5.scss'; // 画面を完全に覆うためpadding, marginをリセット

const p5Init = (): HTMLElement => {    
  return document.getElementById('cnv') || document.querySelectorAll('body')[0];
};

const p5w = (props: any, el: HTMLElement = p5Init()) => {
  new p5(props, el);
};

export { p5w };
