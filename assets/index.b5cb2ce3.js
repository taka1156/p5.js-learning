import"./modulepreload-polyfill.b7f2da20.js";import{p as l}from"./p5w.79e98c8a.js";const d=t=>{t.setup=()=>{t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),t.noFill()};let o=0,i=140,a=255;t.draw=()=>{t.background(200),t.rotateY(t.PI/6);let s=t.millis()/1e3,r=t.cos(s),e=t.sin(s);o++,o%35===0&&(i=n(),a=n()),t.applyMatrix(r,0,e,0,0,1,0,0,-e,0,r,0,0,0,0,1),t.stroke(i),t.sphere(140),t.applyMatrix(r,0,e,0,0,1,0,0,-e,0,r,0,0,0,0,1),t.stroke(a),t.sphere(200)};function n(){return Math.floor(t.random()*255)}};l(d);