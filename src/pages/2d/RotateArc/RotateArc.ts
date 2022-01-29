import type p5 from "p5";
import { p5w } from '@/assets/ts/p5w';
let arcList: Arc[] = [];
const colorList: ColorList[] = ['white', 'red', 'green', 'blue', 'yellow', 'purple', 'orange'];

class Arc {
    p: p5;
    arcDiameter: number;
    rotate: number;
    arcStroke: ColorList;

    constructor(p: p5, d:number, a:number, color: ColorList) {
        this.p = p;
        this.arcDiameter = d;
        this.rotate = a;
        this.arcStroke = color;
    }

    rotateAdd() {
        const p = this.p;
        if(this.rotate < 360){
            this.rotate += p.random(5,10);
        }else {
            this.rotate = 0;
        }
    }

    display() {
        const p = this.p;
        p.push();
        //描画を中心基準に指定
        p.ellipseMode(p.CENTER);
        //原点の移動
        p.translate(p.width/2, p.height/2);
        //回転
        p.rotate(p.radians(this.rotate));
        //塗りつぶし無効
        p.noFill();
        p.strokeWeight(5);
        p.stroke(this.arcStroke);
        p.arc(0, 0, this.arcDiameter, this.arcDiameter, p.HALF_PI + p.QUARTER_PI, p.TWO_PI);
        p.pop();
    }
}

const sk = (p:p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < colorList.length; i++) {
            arcList.push(new Arc(p, p.width/10+i*15, p.floor(p.random(0,360)), colorList[i]));
        }
        p.frameRate(30);
    }
    
    p.draw = () => {
        p.background(220);

        for(let i = 0; i < colorList.length; i++) {
            //回転角度の加算
            arcList[i].rotateAdd();
            //表示
            arcList[i].display();
        }
    }
}

p5w(sk);
