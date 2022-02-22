# p5.js-learning
p5.jsフレームワークの学習ページ(https://taka1156.github.io/p5.js-learning)

p5.jsでの動きをつけたりいろいろ試す予定

# 参考

- p5.js公式(https://p5js.org/)
- p5.jsの当たり判定などのライブラリ？(https://github.com/bmoren/p5.collide2D)

その他ライブラリもそのうち試します。


 ## vite 移行後

- スマホで確認したい時はhostを設定する

    ```shell
    yarn dev --host 0.0.0.0
    ```

- デバイスの傾きを取得するときは、自己証明証の設定、もしくは以下のコマンドで開発サーバーを立ち上げる
 
    ```shell
    yarn dev --host 0.0.0.0 --https true
    ```

- http-serverを使うときは以下の引数でbuild実行
  
  ```shell
  yarn build --base="../"
  ```
