import"./modulepreload-polyfill-3xzlJT5O.js";var e={heroText:`P5.js学習ページ`,leadText:`p5.jsの実験などを行うページ`,infoText:`現在はvite環境に移行中です。`,btnText:`p5.jsのリファレンス`,repoUrl:`taka1156/p5.js-learning`,btnUrl:`https://p5js.jp/reference/`},t=`<ul>
<li>
<details><summary>図形の描画、色関連</summary>
<ul>
<li><a href="./pages/other/shape/index.html">図形の描画</a></li>
<li><a href="./pages/other/attributes/index.html">図形の組み合わせ</a></li>
<li><a href="./pages/other/color/index.html">色の表示</a></li>
</ul>
</details>
</li>
<li>
<details><summary>動きあり(2D)</summary>
<ul>
<li><a href="./pages/2d/ColorChangedTime/index.html">時間で色変え</a></li>
<li><a href="./pages/2d/ShakeChangedColor/index.html">振って色変え(スマホ)</a></li>
<li><a href="./pages/2d/ShakeBalls/index.html">振ってボールを出す(スマホ)</a></li>
<li><a href="./pages/2d/CollisionBall/index.html">ボールで当たり判定</a></li>
<li><a href="./pages/2d/RotateArc/index.html">ローディングアイコンのようなもの</a></li>
</ul>
</details>
</li>
<li>
<details><summary>ブロック崩し</summary>
<ul>
<li><a href="./pages/2d/BlockBreak/index.html?stage=1">Level1</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=1&amp;auto=true">Level1 - auto</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=2">Level2</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=2&amp;auto=true">Level2 - auto</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=3">Level3</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=3&amp;auto=true">Level3 - auto</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=4">Level4</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=4&amp;auto=true">Level4 - auto</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=5">Level5</a></li>
<li><a href="./pages/2d/BlockBreak/index.html?stage=5&amp;auto=true">Level5 - auto</a></li>
</ul>
</details>
</li>
<li>
<details><summary>動きあり(3D)</summary>
<ul>
<li><a href="./pages/3d/font3d/index.html">文字を回す</a></li>
<li><a href="./pages/3d/sphere/index.html">球体を回す</a></li>
<li><a href="./pages/3d/rotationbox/index.html">傾きで立方体を回す(スマホ)</a></li>
</ul>
</details>
</li>
</ul>
`;(()=>{let{heroText:n,leadText:r,infoText:i,btnText:a,repoUrl:o,btnUrl:s}=e,c=e=>document.getElementById(e);c(`hero`).innerHTML=`
    <div class="jumbotron">
    <h1 class="display-5">${n}</h1>
    <p class="lead">${r}</p>
    <hr class="my-2">
    <p>${i}</p>
    <a class="btn btn-primary btn-lg" href="${s}" role="button">
    ${a}
    </a>
    <div class="mt-3">
    <a class="text-secondary" href="https://www.github.com/${o}" >GitHub</a>
    </div>
    </div>
   `,c(`md`).innerHTML=t})();