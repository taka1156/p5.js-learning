var c=Object.defineProperty;var l=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var a=(e,t,r)=>(l(e,typeof t!="symbol"?t+"":t,r),r);import"./modulepreload-polyfill.b7f2da20.js";import{p as n}from"./p5w.79e98c8a.js";let o=[];const i=["white","red","green","blue","yellow","purple","orange"];class d{constructor(t,r,s,h){a(this,"p");a(this,"arcDiameter");a(this,"rotate");a(this,"arcStroke");this.p=t,this.arcDiameter=r,this.rotate=s,this.arcStroke=h}rotateAdd(){const t=this.p;this.rotate<360?this.rotate+=t.random(5,10):this.rotate=0}display(){const t=this.p;t.push(),t.ellipseMode(t.CENTER),t.translate(t.width/2,t.height/2),t.rotate(t.radians(this.rotate)),t.noFill(),t.strokeWeight(5),t.stroke(this.arcStroke),t.arc(0,0,this.arcDiameter,this.arcDiameter,t.HALF_PI+t.QUARTER_PI,t.TWO_PI),t.pop()}}const w=e=>{e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight);for(let t=0;t<i.length;t++)o.push(new d(e,e.width/10+t*15,e.floor(e.random(0,360)),i[t]));e.frameRate(30)},e.draw=()=>{e.background(220);for(let t=0;t<i.length;t++)o[t].rotateAdd(),o[t].display()}};n(w);
