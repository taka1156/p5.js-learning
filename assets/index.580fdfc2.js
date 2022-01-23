const i={heroText:"P5.js\u5B66\u7FD2\u30DA\u30FC\u30B8",leadText:"p5.js\u306E\u5B9F\u9A13\u306A\u3069\u3092\u884C\u3046\u30DA\u30FC\u30B8",infoText:"\u73FE\u5728\u306Fvite\u74B0\u5883\u306B\u79FB\u884C\u4E2D\u3067\u3059\u3002",btnText:"p5.js\u306E\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9",btnUrl:"https://p5js.jp/reference/"},s=`<ul>
<li>
<details><summary>\u56F3\u5F62\u306E\u63CF\u753B\u3001\u8272\u95A2\u9023</summary>
<ul>
<li><a href="./pages/other/shape/index.html">\u56F3\u5F62\u306E\u63CF\u753B</a></li>
<li><a href="./pages/other/attributes/index.html">\u56F3\u5F62\u306E\u7D44\u307F\u5408\u308F\u305B</a></li>
<li><a href="./pages/other/color/index.html">\u8272\u306E\u8868\u793A</a></li>
</ul>
</details>
</li>
<li>
<details><summary>\u52D5\u304D\u3042\u308A(2D)</summary>
<ul>
<li><a href="./pages/2d/RandomBall.html">\u30DC\u30FC\u30EB\u3092\u52D5\u304B\u3059</a></li>
<li><a href="./pages/2d/BlockBreak.html">\u30D6\u30ED\u30C3\u30AF\u5D29\u3057(PC)</a></li>
<li><a href="./pages/2d/ColorChangedTime.html">\u6642\u9593\u3067\u8272\u5909\u3048</a></li>
<li><a href="./pages/2d/ShakeChangedColor.html">\u632F\u3063\u3066\u8272\u5909\u3048(\u30B9\u30DE\u30DB)</a></li>
<li><a href="./pages/2d/ShakeBalls.html">\u632F\u3063\u3066\u30DC\u30FC\u30EB\u3092\u51FA\u3059(\u30B9\u30DE\u30DB)</a></li>
<li><a href="./pages/2d/CollisionBall.html">\u5186\u540C\u58EB\u3067\u5F53\u305F\u308A\u5224\u5B9A</a></li>
<li><a href="./pages/2d/RotateArc.html">\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A2\u30A4\u30B3\u30F3\u306E\u3088\u3046\u306A\u3082\u306E</a></li>
</ul>
</details>
</li>
<li>
<details><summary>\u52D5\u304D\u3042\u308A(3D)</summary>
<ul>
<li><a href="./pages/3d/font3d/index.html">\u6587\u5B57\u3092\u56DE\u3059</a></li>
<li><a href="./pages/3d/sphere/index.html">\u7403\u4F53\u3092\u56DE\u3059</a></li>
<li><a href="./pages/3d/rotationbox/index.html">\u50BE\u304D\u3067\u7ACB\u65B9\u4F53\u3092\u56DE\u3059(\u30B9\u30DE\u30DB)</a></li>
</ul>
</details>
</li>
<li>
<details><summary>\u64CD\u4F5C\u7CFB</summary>
<ul>
<li><a href="./pages/event/Acceleration.html">\u52A0\u901F\u5EA6\u53D6\u5F97(\u30B9\u30DE\u30DB)</a></li>
<li><a href="./pages/event/Rotation.html">\u50BE\u304D\u53D6\u5F97(\u30B9\u30DE\u30DB)</a></li>
</ul>
</details>
</li>
</ul>
`,r=()=>{const{heroText:l,leadText:e,infoText:a,btnText:n,btnUrl:t}=i;document.getElementById("hero").innerHTML=`
    <div class="jumbotron">
    <h1 class="display-5">${l}</h1>
    <p class="lead">${e}</p>
    <hr class="my-2">
    <p>${a}</p>
    <a class="btn btn-primary btn-lg" href="${t}" role="button">
    ${n}
    </a>
    </div>
   `,document.getElementById("md").innerHTML=s};r();
