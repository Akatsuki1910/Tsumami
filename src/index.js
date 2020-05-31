import * as cssFunc from "./cssFunc";

export default class Tsumami {
  #size;
  #target;
  #bgcolor;
  #tmmcolor;
  #mbgcolor;
  #meterSize;
  #degree;
  #scale;
  #min;
  #max;
  #obj;
  #mcolor;
  #point;

  constructor(settings) {
    settings = (settings === undefined) ? {} : settings;
    this.#size = settings.size || 100; //サイズ
    this.#target = settings.target || document.getElementById("tsumami"); //ターゲット
    this.#bgcolor = settings.bgcolor || "red"; //背景色
    this.#tmmcolor = settings.tmmcolor || "yellow"; //つまみ色
    this.#mbgcolor = settings.mbgcolor || "black"; //メーター背景色
    this.#meterSize = settings.meterSize || 10; //メーター幅
    this.#degree = settings.degree || 270; //メーター表示幅
    this.#scale = settings.scale || 1.2; //メータースケール
    this.#min = settings.min || 0; //最小値
    this.#max = settings.max || 100; // 最大値
    this.#obj = settings.obj || ""; //値を取る変数
    this.#mcolor = settings.mcolor || "blue"; //メーターの色
    this.#point = settings.point || "purple"; //ポイントの色

    this.#createTag();

    this.#main();
  }

  #createTag = () => {
    this.meterbg = document.createElement('div');
    this.pie = document.createElement('ul');
    this.meterbghole = document.createElement('div');
    this.meterbgholeout = document.createElement('div');
    this.tsumami = document.createElement('div');
    this.point = document.createElement('div');
    this.sliceMeterBg = [];
    this.sliceMeterBgContents = [];
    this.sliceMeter = [];
    this.sliceMeterContents = [];
  }

  #main = () => {
    // 外枠
    this.#addStyleElement(this.#target, {
      center: false,
      position: "relative",
      width: cssFunc._px(this.#size),
      height: cssFunc._px(this.#size),
      background: this.#bgcolor
    });

    // メーター背景
    this.#addStyleElement(this.meterbg, {
      center: true,
      borderRadius: "50%",
      background: this.#mbgcolor,
      width: cssFunc._px(this.#size / this.#scale),
      height: cssFunc._px(this.#size / this.#scale),
    }, "tsumami-meterbg", this.#target);

    // メータを隠す or メーター部の枠
    this.#addStyleElement(this.pie, {
      center: false,
      overflow: "hidden",
      borderRadius: "50%",
      position: "absolute",
      padding: 0,
      margin: 0,
      width: cssFunc._px(this.#size),
      height: cssFunc._px(this.#size),
      left: cssFunc._px((this.#size - this.#size / this.#scale) / (-2)),
      top: cssFunc._px((this.#size - this.#size / this.#scale) / (-2)),
    }, "tsumami-meter", this.meterbg);

    // メータを隠す扇形作成
    this.#createsliceMeterBg(this.#degree);

    // メーターを表示する扇形作成作成
    this.#createsliceMeter(this.#degree);

    // 内円
    this.#addStyleElement(this.meterbghole, {
      center: true,
      borderRadius: "50%",
      width: cssFunc._px(this.#size / this.#scale - this.#meterSize),
      height: cssFunc._px(this.#size / this.#scale - this.#meterSize),
      background: this.#bgcolor,
    }, "tsumami-meterhole", this.meterbg);

    // 外円
    this.#addStyleElement(this.meterbgholeout, {
      center: false,
      position: "absolute",
      borderRadius: "50%",
      width: cssFunc._px(this.#size / this.#scale),
      height: cssFunc._px(this.#size / this.#scale),
      background: "rgba(0,0,0,0)",
      border: cssFunc._whileSpace(["solid", cssFunc._px((this.#size - this.#size / this.#scale) / 2), this.#bgcolor]),
      margin: 0,
      top: "50%",
      left: "50%",
      transform: cssFunc._whileSpace(["translateX(-50%)", "translateY(-50%)"]),
    }, "tsumami-meterhole-out", this.meterbg);

    // つまみ
    this.#addStyleElement(this.tsumami, {
      center: true,
      userSelect: "none",
      width: cssFunc._px(this.#size / 2),
      height: cssFunc._px(this.#size / 2),
      background: this.#tmmcolor,
      borderRadius: "50%",
      transform: cssFunc._rotate(this.#degree / -2),
    }, "tsumami-inner", this.#target);

    // 針
    this.#addStyleElement(this.point, {
      center: true,
      width: "10%",
      height: "20%",
      background: this.#point,
      transform: "translateY(-100%)",
    }, "tsumami-point", this.tsumami);

    //イベント追加
    this.#eventAdd(this.tsumami);
  }

  //center
  #styleCenter = () => {
    const style = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: "auto",
    }
    return style;
  }

  // css付与
  #addStyleElement = (element, style, className = undefined, target = undefined) => {
    if (className !== void 0) element.className = className;
    if (style.center) style = Object.assign(this.#styleCenter(), style);
    delete style.center;
    for (let key in style) {
      element.style[key] = style[key];
    }
    if (target !== void 0) target.appendChild(element);
  }

  #meterStyle = {
    center: false,
    overflow: "hidden",
    position: "absolute",
    width: "50%",
    height: "50%",
    transformOrigin: "0% 100%",
  }

  #meterContentStyle = {
    center: false,
    position: "absolute",
    left: "-100%",
    borderRadius: "50%",
    width: "200%",
    height: "200%",
  }

  // メータを隠す扇形作成
  #createsliceMeterBg = (degree) => {
    degree = (degree > 360) ? 0 : 360 - degree;
    const bf = (degree % 90 == 0) ? 0 : 1;
    const num = degree / 90 + bf;
    for (let i = 0; i < num; i++) {
      let degreePiece = 0;
      if (degree == 0) {
        this.sliceMeterBg[i] = "";
        this.sliceMeterBgContents[i] = "";
        continue;
      } else if (degree >= 90) {
        degreePiece = 90;
        degree -= 90;
      } else {
        degreePiece = degree;
        degree = 0;
      }
      this.sliceMeterBg[i] = document.createElement("li");
      this.sliceMeterBgContents[i] = document.createElement("div");
      this.#addStyleElement(this.sliceMeterBg[i], {
        ...this.#meterStyle,
        top: 0,
        right: 0,
        transform: cssFunc._whileSpace([cssFunc._rotate(degreePiece / (-2) + 180 - i * 45 + degree / 2), cssFunc._skewY(-90 + degreePiece)]),
      }, "sliceMeterBg", this.pie);

      this.#addStyleElement(this.sliceMeterBgContents[i], {
        ...this.#meterContentStyle,
        background: this.#bgcolor,
        transform: cssFunc._skewY(90 - degreePiece),
      }, "sliceMeterBg-contents", this.sliceMeterBg[i]);
    }
  }

  // メーター作成
  #createsliceMeter = (degree) => {
    const bf = (degree % 90 == 0) ? 0 : 1;
    const num = degree / 90 + bf;
    degree = (degree > 360) ? 0 : 360 - degree;
    var tr = [{
        top: cssFunc._px(0),
        right: cssFunc._px(-1)
      },
      {
        top: cssFunc._px(1),
        right: cssFunc._px(0)
      },
      {
        top: cssFunc._px(0),
        right: cssFunc._px(1)
      },
      {
        top: cssFunc._px(-1),
        right: cssFunc._px(0)
      },
    ];
    for (let i = 0; i < num; i++) {
      this.sliceMeter[i] = document.createElement("li");
      this.sliceMeterContents[i] = document.createElement("div");
      this.#addStyleElement(this.sliceMeter[i], {
        ...this.#meterStyle,
        transform: cssFunc._whileSpace([cssFunc._rotate(180 + 90 * i + degree / 2), cssFunc._skewY(-90)]),
        ...tr[i]
      }, "sliceMeter", this.pie);

      this.#addStyleElement(this.sliceMeterContents[i], {
        ...this.#meterContentStyle,
        background: this.#mcolor,
        transform: cssFunc._skewY(90),
      }, "sliceMeter-contents", this.sliceMeter[i]);
    }
  }

  // マウス操作
  #eventAdd = (element) => {
    this.#click = false;
    this.#memoryY = 0;
    element.addEventListener('mousedown', this.#OnMouseDown, false);
    window.addEventListener('mousemove', (e) => {
      this.#OnMouseMove(e, element)
    }, false);
    window.addEventListener('mouseup', this.#OnMouseUp, false);
  }

  #click;
  #memoryY;
  #OnMouseDown = (event) => {
    this.#click = true;
    this.#memoryY = event.clientY;
    console.log("MouseDown");
  }

  #OnMouseMove = (event, element) => {
    if (this.#click) {
      const rotateDegreeBefore = cssFunc._returnTransformValue(element.style.transform, "rotate");
      let rotateDegreeAfter = rotateDegreeBefore + (event.clientY - this.#memoryY) * 3;
      if (rotateDegreeAfter < -this.#degree / 2) {
        rotateDegreeAfter = -this.#degree / 2;
      } else if (rotateDegreeAfter > this.#degree / 2) {
        rotateDegreeAfter = this.#degree / 2;
      }

      const degValue = this.#limit(rotateDegreeAfter, -this.#degree / 2, this.#degree / 2);
      element.style.transform = cssFunc._rotate(degValue);
      this.#memoryY = event.clientY;

      this.#rotateMeter(rotateDegreeAfter + this.#degree / 2, this.sliceMeter, this.sliceMeterContents);

      this.#outputObject.value = (this.#max - this.#min) * (rotateDegreeAfter + this.#degree / 2) / this.#degree;

      console.log("MouseMove");
    }
  }

  #OnMouseUp = (event) => {
    this.#click = false;
    console.log("MouseUp");
  }

  //オブジェクトに値をセット
  #outputObject = (() => {
    var val = Object.create(null);
    var memValue = 0;
    Object.defineProperty(val, 'value', {
      set: (value) => {
        if (this.#obj !== "") {
          this.#obj.value = value; //セット
        }
        memValue = value;
      },
      get: () => {
        return memValue;
      }
    });
    return val;
  })();

  #rotateMeter = (degree, sM, sMC) => {
    for (let i = 0; i < this.sliceMeter.length; i++) {
      var rotateDeg = 0;
      if (degree >= 90) {
        rotateDeg = 90;
        degree -= 90;
      } else {
        rotateDeg = degree;
        degree = 0;
      }
      const smTransform = sM[i].style.transform.split(" ");
      sM[i].style.transform = cssFunc._whileSpace([smTransform[0], cssFunc._skewY(-90 + rotateDeg)]);
      sMC[i].style.transform = cssFunc._skewY(90 - rotateDeg);
    }
  }

  // その他関数
  #limit = (value, min, max) => {
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    return value;
  }

  // テストログ
  static testlog = () => {
    console.log("testlog");
  }
}