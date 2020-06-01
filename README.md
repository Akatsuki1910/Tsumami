[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![TWITTER](https://img.shields.io/badge/twitter-nomber1910-blue.svg)](https://twitter.com/nomber1910)
# Tsumami
スライダーの代わりのつまみ。

## Installation

```html
<script src="dist/tsumami.js"></script>
```

```js
import Tsumami from 'tsumami.js';
```

## Usage

```js
const tsumamiValue = (()=>{
  const val = Object.create(null);
  Object.defineProperty(val, 'value', {
    set: (value)=>{
      //ここに処理を書く
    }
  });
  return val;
})();

const option = {
  obj: tsumamiValue
}

const tsumami = new Tsumami(option);
```

## Options

|用途 |変数名 |デフォルト値 |備考 |
|:---|:---|:---|:---|
|サイズ |size |100 | |
|ターゲット |target |document.getElementById("tsumami") | |
|背景色 |bgcolor |"red" |cssの色指定<sup>[1](#note1)</sup> |
|つまみ色 |tmmcolor |"yellow" |cssの色指定<sup>[1](#note1)</sup> |
|メーター背景色 |mbgcolor |"black" |cssの色指定<sup>[1](#note1)</sup> |
|メーター幅 |meterSize |10 | |
|メーター表示幅 |degree |270 |0~360 |
|メータースケール |scale |1.2 | |
|最小値 |min |0 |最小値<最大値 |
|最大値 |max |100 |最小値<最大値 |
|値を取る変数 |obj |"" |tsumamiValue |
|メーターの色 |mcolor |"blue" |cssの色指定<sup>[1](#note1)</sup> |
|ポイントの色 |point |"purple" |cssの色指定<sup>[1](#note1)</sup> |

<p id="note1">
cssの色指定方法ならなんでもいけます(例:カラーコード,RGB,HSL)<br>
ただし、文字列入力をしてください。
</p>

## LINK
例 : [example](https://akatsuki1910.github.io/Tsumami/example/)  
支援 : [support](https://www.patreon.com/akatsukicirno)

##  License
MIT License, Copyright (c) 2020 Akatsuki1910