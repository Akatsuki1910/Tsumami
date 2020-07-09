[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![TWITTER](https://img.shields.io/badge/twitter-nomber1910-blue.svg)](https://twitter.com/nomber1910)
[![NPM Package](https://img.shields.io/npm/v/tsumami.js)](https://www.npmjs.com/package/tsumami.js)
[![Build Size](https://badgen.net/bundlephobia/minzip/tsumami.js)](https://bundlephobia.com/result?p=tsumami.js)

# Tsumami.js
This is a knob in place of a slider.

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
      //processing
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

|Use |Variable Name |Default Value |Remarks |
|:---|:---|:---|:---|
|Size |size |100 | |
|Target |target |document.getElementById("tsumami") | |
|Background Color |bgcolor |"red" |css color <sup>[1](#note1)</sup> |
|Pinch Color |tmmcolor |"yellow" |css color <sup>[1](#note1)</sup> |
|Meter Background Color |mbgcolor |"black" |css color <sup>[1](#note1)</sup> |
|Meter Size |meterSize |10 | |
|Meter Angle |degree |270 |0~360 |
|Meter Scale |scale |1.2 | |
|Min Value |min |0 |min < max <sup>[2](#note2)</sup>|
|Max Value |max |100 |min < max <sup>[2](#note2)</sup>|
|Value Obj |obj |"" |tsumamiValue |
|Meter Color |mcolor |"blue" |css color <sup>[1](#note1)</sup> |
|Point Color |point |"purple" |css color <sup>[1](#note1)</sup> |
|Initial Value |value |0 |min ≤ value ≤ max <sup>[2](#note2)</sup>|
|Mode |mode |nomal |nomal or center |
|Center Value |centerValue |50 |0 ≤ centerValue <sup>[3](#note3)</sup> |

<p id="note1">
[1] You can use any color specification method in css.(ex:color code,RGB,HSL)<br>
However, it should be a string.
</p>

<p id="note2">
[2] Ignored if mode is center.
</p>

<p id="note3">
[3] Ignored if mode is nomal.
</p>

## LINK
example : [example](https://akatsuki1910.github.io/Tsumami.js/example/)  
support : [support](https://www.patreon.com/akatsukicirno)

##  License
MIT License, Copyright (c) 2020 Akatsuki1910

## Update

### v2.0.0
Compatible with rotation from the center.

### v1.0.2
Miss fixes.

### v1.0.1
English Update

### v1.0.0
release

### v0.2.0
option add : Initial Value
Create an example page.
Bug fixes.

### v0.1.0
First Update.