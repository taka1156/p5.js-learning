import p5 from "p5";

export class Paddle {
    p: p5;
    x: number; //パドル座標X
    y: number; //パドル座標Y
    paddleSizeX: number; //サイズX
    paddleSizeY: number; //サイズY
    speed: number; //操作スピード

    constructor(p: p5) {
        this.p = p;
        this.x = this.p.width * 0.5; //初期パドル座標X
        this.y = this.p.height * 0.9; //初期パドル座標Y
        this.paddleSizeX = this.p.width * 0.12; //サイズX
        this.paddleSizeY = this.p.height * 0.02; //サイズY
        this.speed = 1; //操作スピード
    }

    move(mouse: number) {
        this.x = Math.max(
            0,
            Math.min(mouse * this.speed, this.p.width - this.paddleSizeX)
        );
    }

    display() {
        this.p.fill('gray');
        this.p.rect(this.x, this.y, this.paddleSizeX, this.paddleSizeY);
    }
}