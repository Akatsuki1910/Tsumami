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

  constructor(settings) {
    settings = (settings === undefined) ? {} : settings;
    this.#size = settings.size || 100; //サイズ
    this.#target = settings.target || document.getElementById("tsumami"); //ターゲット
    this.#bgcolor = settings.bgcolor || "red"; //背景色
    this.#tmmcolor = settings.tmmcolor || "yellow"; //つまみ色
    this.#mbgcolor = settings.mbgcolor || "black"; //メーター背景色
    this.#meterSize = settings.meterSize || 10; //メーター幅
    this.#degree = settings.degree || 270; //メーター表示幅
    this.#scale = settings.scale || 1.2; //メータースケール         To Do
    this.#min = settings.min || 0; //最小値
    this.#max = settings.max || 100; // 最大値
    this.#obj = settings.obj || "";

    // this.value = this.#min; //初期値

    this.#createTag();

    this.#main();
  }

  #createTag = () => {
    this.meterbg = document.createElement('div');
    this.pie = document.createElement('ul');
    this.meterbghole = document.createElement('div');
    this.meterbgholeout = document.createElement('div');
    this.tsumami = document.createElement('div');
    this.marker = document.createElement('div');
    this.slice = [];
    this.sliceContents = [];
  }

  #main = () => {
    // 外枠
    this.#addStyleElement(this.#target, {
      center: false,
      position: "relative",
      width: this.#px(this.#size),
      height: this.#px(this.#size),
      background: this.#bgcolor
    });

    // メーター背景
    this.#addStyleElement(this.meterbg, {
      center: true,
      borderRadius: "50%",
      background: this.#mbgcolor,
      width: this.#px(this.#size / this.#scale),
      height: this.#px(this.#size / this.#scale),
    }, "tsumami-meterbg", this.#target);

    // メータを隠す
    this.#addStyleElement(this.pie, {
      center: false,
      borderRadius: "50%",
      position: "absolute",
      padding: 0,
      margin: 0,
      width: this.#px(this.#size),
      height: this.#px(this.#size),
      left: this.#px((this.#size - this.#size / this.#scale) / (-2)),
      top: this.#px((this.#size - this.#size / this.#scale) / (-2)),
    }, "tsumami-meter", this.meterbg);

    // 中身
    this.#createSlice(this.#degree);

    // 内円
    this.#addStyleElement(this.meterbghole, {
      center: true,
      borderRadius: "50%",
      width: this.#px(this.#size / this.#scale - this.#meterSize),
      height: this.#px(this.#size / this.#scale - this.#meterSize),
      background: this.#bgcolor,
    }, "tsumami-meterhole", this.meterbg);

    // 外円
    this.#addStyleElement(this.meterbgholeout, {
      center: false,
      position: "absolute",
      borderRadius: "50%",
      width: this.#px(this.#size / this.#scale),
      height: this.#px(this.#size / this.#scale),
      background: "rgba(0,0,0,0)",
      border: this.#whileSpace(["solid", this.#px((this.#size - this.#size / this.#scale) / 2), this.#bgcolor]),
      margin: 0,
      top: "50%",
      left: "50%",
      transform: this.#whileSpace(["translateX(-50%)", "translateY(-50%)"]),
    }, "tsumami-meterhole-out", this.meterbg);

    // つまみ
    this.#addStyleElement(this.tsumami, {
      center: true,
      userSelect: "none",
      width: this.#px(this.#size / 2),
      height: this.#px(this.#size / 2),
      background: this.#tmmcolor,
      borderRadius: "50%",
      transform: this.#rotate(this.#degree / -2),
    }, "tsumami-inner", this.#target);

    // 針
    this.#addStyleElement(this.marker, {
      center: true,
      width: "10%",
      height: "20%",
      background: "purple",
      transform: "translateY(-100%)",
    }, "tsumami-marker", this.tsumami);

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

  // メータを隠す扇形作成
  #createSlice = (degree) => {
    degree = (degree > 360) ? 0 : 360 - degree;
    for (let i = 0; i < 4; i++) {
      let degreePiece = 0;
      if(degree == 0){
        this.slice[i] = "";
        this.sliceContents[i] = "";
        continue;
      }else if (degree >= 90) {
        degreePiece = 90;
        degree -= 90;
      } else {
        degreePiece = degree;
        degree = 0;
      }
      this.slice[i] = document.createElement("li");
      this.sliceContents[i] = document.createElement("div");
      this.#addStyleElement(this.slice[i], {
        center: false,
        overflow: "hidden",
        position: "absolute",
        width: "50%", height: "50%",
        top: 0, right: 0, transformOrigin: "0% 100%",
        transform: this.#whileSpace([this.#rotate(degreePiece / (-2) + 180 - i * 45 + degree / 2), this.#skewY(-90 + degreePiece)]),
      }, "slice", this.pie);

      this.#addStyleElement(this.sliceContents[i], {
        center: false,
        position: "absolute",
        left: "-100%",
        borderRadius: "50%",
        width: "200%", height: "200%",
        background: this.#bgcolor,
        transform: this.#skewY(90 - degreePiece),
      }, "slice-contents", this.slice[i]);
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
      const rotateDegreeBefore = +(element.style.transform.replace("rotate(", "").replace("deg)", ""));
      let rotateDegreeAfter = rotateDegreeBefore + (event.clientY - this.#memoryY) * 3;
      if (rotateDegreeAfter < -this.#degree / 2) {
        rotateDegreeAfter = -this.#degree / 2;
      } else if (rotateDegreeAfter > this.#degree / 2) {
        rotateDegreeAfter = this.#degree / 2;
      }

      const degValue = this.#limit(rotateDegreeAfter, -this.#degree / 2, this.#degree / 2);
      element.style.transform = this.#rotate(degValue);
      this.#memoryY = event.clientY;

      this.#outputObject.value = (this.#max - this.#min) * (rotateDegreeAfter + this.#degree / 2) / this.#degree;

      console.log("MouseMove");
    }
  }

  #OnMouseUp = (event) => {
    this.#click = false;
    console.log("MouseUp");
  }

  //オブジェクトに値をセット
  #outputObject = (()=>{
    var val = Object.create(null);
    var memValue = 0;
    Object.defineProperty(val, 'value', {
      set: (value)=>{
        if(this.#obj !== ""){
          this.#obj.value = value; //セット
        }
        memValue = value;
      },
      get: ()=>{return memValue;}
    });
    return val;
  })();

  // css単位系
  #px = (num) => {
    return num + "px";
  }

  #deg = (num) => {
    return num + "deg";
  }

  #rotate = (num) => {
    return "rotate(" + this.#deg(Math.floor(num)) + ")";
  }

  #skewY = (num) => {
    return "skewY(" + this.#deg(Math.floor(num)) + ")";
  }

  #whileSpace = (obj) => {
    let returnObj = "";
    for (let v of obj) {
      returnObj += v + " ";
    }
    return returnObj;
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