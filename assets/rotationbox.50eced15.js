var o=Object.defineProperty;var c=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(c(e,typeof t!="symbol"?t+"":t,s),s);import{p as a}from"./p5w.f6535dba.js";import"./vendor.e7d72309.js";const n=class{constructor(t){i(this,"deviceStatus");i(this,"btn");i(this,"deviceVersionCheck",()=>DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission=="function");i(this,"requestAccess",()=>{let t=!1;typeof DeviceOrientationEvent!==void 0&&typeof DeviceOrientationEvent.requestPermission=="function"&&DeviceOrientationEvent.requestPermission().then(s=>{s==="granted"&&(t=!0)}).catch(s=>console.log(s)),this.setPermission(t)});i(this,"setPermission",(t,s=this.deviceVersionCheck())=>{this.deviceStatus={isIos13:s,permission:t}});i(this,"judgeDeviceStatus",()=>{const{isIos13:t,permission:s}=this.deviceStatus;return t&&!s});i(this,"createBtn",t=>{const s=t.createButton("click");return s.style("font-size","20px"),s.center(),s.mousePressed(this.requestAccess),s});i(this,"deviceMoved",()=>{this.btn.remove(),this.setPermission(!0)});this.deviceStatus={isIos13:this.deviceVersionCheck(),permission:!1},this.btn=this.createBtn(t)}};let r=n;i(r,"_instance"),i(r,"getInstance",t=>(n._instance||(n._instance=new n(t)),n._instance));const d=e=>{const t=r.getInstance(e);e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL)},e.draw=()=>{t.judgeDeviceStatus()||(e.background(200),e.rotateX(e.radians(e.rotationX)),e.rotateY(e.radians(e.rotationY)),e.rotateZ(e.radians(e.rotationZ)),e.box(100,100,100))},e.deviceMoved=()=>t.deviceMoved()};a(d);
