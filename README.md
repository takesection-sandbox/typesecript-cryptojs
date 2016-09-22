typescript-cryptojs
===

# 動かし方

```
npm install
npm start
```

# 動くようになるまでにしたこと

## 初期化

```
npm init
typings init
```

## 最初にcrypto-jsとその型定義

```
npm install crypto-js --save
typings install dt~cryptojs --save --global
```

## tsconfig.jsonを記述

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "removeComments": false
    },
    "files": [
        "typings/index.d.ts"
    ]
}
```

## app/main.tsを書く前に

これだけだと、requireファンクションを使うことができなかった。
Angular2のtypings.jsonをみて、少し追加。

```
typings install dt~node --save --global
```

これで、requireが使えるようになる。
だけど、とりあえず、Angular2を参考にcore-jsとjasmineも追加しておくことにした。

```
typings install dt~core-js --save --global
typings install dt~jasmine --save --global
```

## app/main.tsを書く

[Visual Studio Code](https://www.visualstudio.com/)を使ってさくさくっと記述。型があるのは補完とかがきいて便利。
