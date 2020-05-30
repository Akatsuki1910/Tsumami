(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tsumami"] = factory();
	else
		root["Tsumami"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tsumami; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Tsumami = function Tsumami(settings) {
  var _this = this;

  _classCallCheck(this, Tsumami);

  _size.set(this, {
    writable: true,
    value: void 0
  });

  _target.set(this, {
    writable: true,
    value: void 0
  });

  _bgcolor.set(this, {
    writable: true,
    value: void 0
  });

  _tmmcolor.set(this, {
    writable: true,
    value: void 0
  });

  _mbgcolor.set(this, {
    writable: true,
    value: void 0
  });

  _meterSize.set(this, {
    writable: true,
    value: void 0
  });

  _degree.set(this, {
    writable: true,
    value: void 0
  });

  _scale.set(this, {
    writable: true,
    value: void 0
  });

  _min.set(this, {
    writable: true,
    value: void 0
  });

  _max.set(this, {
    writable: true,
    value: void 0
  });

  _obj.set(this, {
    writable: true,
    value: void 0
  });

  _mcolor.set(this, {
    writable: true,
    value: void 0
  });

  _point.set(this, {
    writable: true,
    value: void 0
  });

  _createTag.set(this, {
    writable: true,
    value: function value() {
      _this.meterbg = document.createElement('div');
      _this.pie = document.createElement('ul');
      _this.meterbghole = document.createElement('div');
      _this.meterbgholeout = document.createElement('div');
      _this.tsumami = document.createElement('div');
      _this.point = document.createElement('div');
      _this.sliceMeterBg = [];
      _this.sliceMeterBgContents = [];
      _this.sliceMeter = [];
      _this.sliceMeterContents = [];
    }
  });

  _main.set(this, {
    writable: true,
    value: function value() {
      // 外枠
      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _classPrivateFieldGet(_this, _target), {
        center: false,
        position: "relative",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size)),
        background: _classPrivateFieldGet(_this, _bgcolor)
      }); // メーター背景


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterbg, {
        center: true,
        borderRadius: "50%",
        background: _classPrivateFieldGet(_this, _mbgcolor),
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale))
      }, "tsumami-meterbg", _classPrivateFieldGet(_this, _target)); // メータを隠す or メーター部の枠


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.pie, {
        center: false,
        borderRadius: "50%",
        position: "absolute",
        padding: 0,
        margin: 0,
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size)),
        left: _classPrivateFieldGet(_this, _px).call(_this, (_classPrivateFieldGet(_this, _size) - _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)) / -2),
        top: _classPrivateFieldGet(_this, _px).call(_this, (_classPrivateFieldGet(_this, _size) - _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)) / -2)
      }, "tsumami-meter", _this.meterbg); // メータを隠す扇形作成


      _classPrivateFieldGet(_this, _createsliceMeterBg).call(_this, _classPrivateFieldGet(_this, _degree)); // メーターを表示する扇形作成作成


      _classPrivateFieldGet(_this, _createsliceMeter).call(_this, _classPrivateFieldGet(_this, _degree)); // 内円


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterbghole, {
        center: true,
        borderRadius: "50%",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale) - _classPrivateFieldGet(_this, _meterSize)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale) - _classPrivateFieldGet(_this, _meterSize)),
        background: _classPrivateFieldGet(_this, _bgcolor)
      }, "tsumami-meterhole", _this.meterbg); // 外円


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterbgholeout, {
        center: false,
        position: "absolute",
        borderRadius: "50%",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)),
        background: "rgba(0,0,0,0)",
        border: _classPrivateFieldGet(_this, _whileSpace).call(_this, ["solid", _classPrivateFieldGet(_this, _px).call(_this, (_classPrivateFieldGet(_this, _size) - _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)) / 2), _classPrivateFieldGet(_this, _bgcolor)]),
        margin: 0,
        top: "50%",
        left: "50%",
        transform: _classPrivateFieldGet(_this, _whileSpace).call(_this, ["translateX(-50%)", "translateY(-50%)"])
      }, "tsumami-meterhole-out", _this.meterbg); // つまみ


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.tsumami, {
        center: true,
        userSelect: "none",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / 2),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / 2),
        background: _classPrivateFieldGet(_this, _tmmcolor),
        borderRadius: "50%",
        transform: _classPrivateFieldGet(_this, _rotate).call(_this, _classPrivateFieldGet(_this, _degree) / -2)
      }, "tsumami-inner", _classPrivateFieldGet(_this, _target)); // 針


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.point, {
        center: true,
        width: "10%",
        height: "20%",
        background: _classPrivateFieldGet(_this, _point),
        transform: "translateY(-100%)"
      }, "tsumami-point", _this.tsumami); //イベント追加


      _classPrivateFieldGet(_this, _eventAdd).call(_this, _this.tsumami);
    }
  });

  _styleCenter.set(this, {
    writable: true,
    value: function value() {
      var style = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
      };
      return style;
    }
  });

  _addStyleElement.set(this, {
    writable: true,
    value: function value(element, style) {
      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      if (className !== void 0) element.className = className;
      if (style.center) style = Object.assign(_classPrivateFieldGet(_this, _styleCenter).call(_this), style);
      delete style.center;

      for (var key in style) {
        element.style[key] = style[key];
      }

      if (target !== void 0) target.appendChild(element);
    }
  });

  _meterStyle.set(this, {
    writable: true,
    value: {
      center: false,
      overflow: "hidden",
      position: "absolute",
      width: "50%",
      height: "50%",
      transformOrigin: "0% 100%"
    }
  });

  _meterContentStyle.set(this, {
    writable: true,
    value: {
      center: false,
      overflow: "hidden",
      position: "absolute",
      left: "-100%",
      borderRadius: "50%",
      width: "200%",
      height: "200%"
    }
  });

  _createsliceMeterBg.set(this, {
    writable: true,
    value: function value(degree) {
      degree = degree > 360 ? 0 : 360 - degree;
      var bf = degree % 90 == 0 ? 0 : 1;
      var num = degree / 90 + bf;

      for (var i = 0; i < num; i++) {
        var degreePiece = 0;

        if (degree == 0) {
          _this.sliceMeterBg[i] = "";
          _this.sliceMeterBgContents[i] = "";
          continue;
        } else if (degree >= 90) {
          degreePiece = 90;
          degree -= 90;
        } else {
          degreePiece = degree;
          degree = 0;
        }

        _this.sliceMeterBg[i] = document.createElement("li");
        _this.sliceMeterBgContents[i] = document.createElement("div");

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.sliceMeterBg[i], _objectSpread(_objectSpread({}, _classPrivateFieldGet(_this, _meterStyle)), {}, {
          top: 0,
          right: 0,
          transform: _classPrivateFieldGet(_this, _whileSpace).call(_this, [_classPrivateFieldGet(_this, _rotate).call(_this, degreePiece / -2 + 180 - i * 45 + degree / 2), _classPrivateFieldGet(_this, _skewY).call(_this, -90 + degreePiece)])
        }), "sliceMeterBg", _this.pie);

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.sliceMeterBgContents[i], _objectSpread(_objectSpread({}, _classPrivateFieldGet(_this, _meterContentStyle)), {}, {
          background: _classPrivateFieldGet(_this, _bgcolor),
          transform: _classPrivateFieldGet(_this, _skewY).call(_this, 90 - degreePiece)
        }), "sliceMeterBg-contents", _this.sliceMeterBg[i]);
      }
    }
  });

  _createsliceMeter.set(this, {
    writable: true,
    value: function value(degree) {
      var bf = degree % 90 == 0 ? 0 : 1;
      var num = degree / 90 + bf;
      degree = degree > 360 ? 0 : 360 - degree;
      var tr = [{
        top: _classPrivateFieldGet(_this, _px).call(_this, 0),
        right: _classPrivateFieldGet(_this, _px).call(_this, -1)
      }, {
        top: _classPrivateFieldGet(_this, _px).call(_this, 1),
        right: _classPrivateFieldGet(_this, _px).call(_this, 0)
      }, {
        top: _classPrivateFieldGet(_this, _px).call(_this, 0),
        right: _classPrivateFieldGet(_this, _px).call(_this, 1)
      }, {
        top: _classPrivateFieldGet(_this, _px).call(_this, -1),
        right: _classPrivateFieldGet(_this, _px).call(_this, 0)
      }];

      for (var i = 0; i < num; i++) {
        _this.sliceMeter[i] = document.createElement("li");
        _this.sliceMeterContents[i] = document.createElement("div");

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.sliceMeter[i], _objectSpread(_objectSpread({}, _classPrivateFieldGet(_this, _meterStyle)), {}, {
          transform: _classPrivateFieldGet(_this, _whileSpace).call(_this, [_classPrivateFieldGet(_this, _rotate).call(_this, 180 + 90 * i + degree / 2), _classPrivateFieldGet(_this, _skewY).call(_this, -90)])
        }, tr[i]), "sliceMeter", _this.pie);

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.sliceMeterContents[i], _objectSpread(_objectSpread({}, _classPrivateFieldGet(_this, _meterContentStyle)), {}, {
          background: _classPrivateFieldGet(_this, _mcolor),
          transform: _classPrivateFieldGet(_this, _skewY).call(_this, 90)
        }), "sliceMeter-contents", _this.sliceMeter[i]);
      }
    }
  });

  _eventAdd.set(this, {
    writable: true,
    value: function value(element) {
      _classPrivateFieldSet(_this, _click, false);

      _classPrivateFieldSet(_this, _memoryY, 0);

      element.addEventListener('mousedown', _classPrivateFieldGet(_this, _OnMouseDown), false);
      window.addEventListener('mousemove', function (e) {
        _classPrivateFieldGet(_this, _OnMouseMove).call(_this, e, element);
      }, false);
      window.addEventListener('mouseup', _classPrivateFieldGet(_this, _OnMouseUp), false);
    }
  });

  _click.set(this, {
    writable: true,
    value: void 0
  });

  _memoryY.set(this, {
    writable: true,
    value: void 0
  });

  _OnMouseDown.set(this, {
    writable: true,
    value: function value(event) {
      _classPrivateFieldSet(_this, _click, true);

      _classPrivateFieldSet(_this, _memoryY, event.clientY);

      console.log("MouseDown");
    }
  });

  _OnMouseMove.set(this, {
    writable: true,
    value: function value(event, element) {
      if (_classPrivateFieldGet(_this, _click)) {
        var rotateDegreeBefore = _classPrivateFieldGet(_this, _returnTransformValue).call(_this, element.style.transform, "rotate");

        var rotateDegreeAfter = rotateDegreeBefore + (event.clientY - _classPrivateFieldGet(_this, _memoryY)) * 3;

        if (rotateDegreeAfter < -_classPrivateFieldGet(_this, _degree) / 2) {
          rotateDegreeAfter = -_classPrivateFieldGet(_this, _degree) / 2;
        } else if (rotateDegreeAfter > _classPrivateFieldGet(_this, _degree) / 2) {
          rotateDegreeAfter = _classPrivateFieldGet(_this, _degree) / 2;
        }

        var degValue = _classPrivateFieldGet(_this, _limit).call(_this, rotateDegreeAfter, -_classPrivateFieldGet(_this, _degree) / 2, _classPrivateFieldGet(_this, _degree) / 2);

        element.style.transform = _classPrivateFieldGet(_this, _rotate).call(_this, degValue);

        _classPrivateFieldSet(_this, _memoryY, event.clientY);

        _classPrivateFieldGet(_this, _rotateMeter).call(_this, rotateDegreeAfter + _classPrivateFieldGet(_this, _degree) / 2, _this.sliceMeter, _this.sliceMeterContents);

        _classPrivateFieldGet(_this, _outputObject).value = (_classPrivateFieldGet(_this, _max) - _classPrivateFieldGet(_this, _min)) * (rotateDegreeAfter + _classPrivateFieldGet(_this, _degree) / 2) / _classPrivateFieldGet(_this, _degree);
        console.log("MouseMove");
      }
    }
  });

  _OnMouseUp.set(this, {
    writable: true,
    value: function value(event) {
      _classPrivateFieldSet(_this, _click, false);

      console.log("MouseUp");
    }
  });

  _outputObject.set(this, {
    writable: true,
    value: function () {
      var val = Object.create(null);
      var memValue = 0;
      Object.defineProperty(val, 'value', {
        set: function set(value) {
          if (_classPrivateFieldGet(_this, _obj) !== "") {
            _classPrivateFieldGet(_this, _obj).value = value; //セット
          }

          memValue = value;
        },
        get: function get() {
          return memValue;
        }
      });
      return val;
    }()
  });

  _rotateMeter.set(this, {
    writable: true,
    value: function value(degree, sM, sMC) {
      for (var i = 0; i < _this.sliceMeter.length; i++) {
        var rotateDeg = 0;

        if (degree >= 90) {
          rotateDeg = 90;
          degree -= 90;
        } else {
          rotateDeg = degree;
          degree = 0;
        }

        var smTransform = sM[i].style.transform.split(" ");
        sM[i].style.transform = _classPrivateFieldGet(_this, _whileSpace).call(_this, [smTransform[0], _classPrivateFieldGet(_this, _skewY).call(_this, -90 + rotateDeg)]);
        sMC[i].style.transform = _classPrivateFieldGet(_this, _skewY).call(_this, 90 - rotateDeg);
      }
    }
  });

  _px.set(this, {
    writable: true,
    value: function value(num) {
      return num + "px";
    }
  });

  _deg.set(this, {
    writable: true,
    value: function value(num) {
      return num + "deg";
    }
  });

  _rotate.set(this, {
    writable: true,
    value: function value(num) {
      return "rotate(" + _classPrivateFieldGet(_this, _deg).call(_this, Math.floor(num)) + ")";
    }
  });

  _skewY.set(this, {
    writable: true,
    value: function value(num) {
      return "skewY(" + _classPrivateFieldGet(_this, _deg).call(_this, Math.floor(num)) + ")";
    }
  });

  _whileSpace.set(this, {
    writable: true,
    value: function value(obj) {
      var returnObj = "";

      var _iterator = _createForOfIteratorHelper(obj),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var v = _step.value;
          returnObj += v + " ";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return returnObj;
    }
  });

  _returnTransformValue.set(this, {
    writable: true,
    value: function value(element, name) {
      var tName = name + "(";
      return +element.replace(tName, "").replace("deg)", "");
    }
  });

  _limit.set(this, {
    writable: true,
    value: function value(_value, min, max) {
      if (_value < min) {
        _value = min;
      } else if (_value > max) {
        _value = max;
      }

      return _value;
    }
  });

  settings = settings === undefined ? {} : settings;

  _classPrivateFieldSet(this, _size, settings.size || 100); //サイズ


  _classPrivateFieldSet(this, _target, settings.target || document.getElementById("tsumami")); //ターゲット


  _classPrivateFieldSet(this, _bgcolor, settings.bgcolor || "red"); //背景色


  _classPrivateFieldSet(this, _tmmcolor, settings.tmmcolor || "yellow"); //つまみ色


  _classPrivateFieldSet(this, _mbgcolor, settings.mbgcolor || "black"); //メーター背景色


  _classPrivateFieldSet(this, _meterSize, settings.meterSize || 10); //メーター幅


  _classPrivateFieldSet(this, _degree, settings.degree || 270); //メーター表示幅


  _classPrivateFieldSet(this, _scale, settings.scale || 1.2); //メータースケール         To Do


  _classPrivateFieldSet(this, _min, settings.min || 0); //最小値


  _classPrivateFieldSet(this, _max, settings.max || 100); // 最大値


  _classPrivateFieldSet(this, _obj, settings.obj || ""); //値を取る変数


  _classPrivateFieldSet(this, _mcolor, settings.mcolor || "blue"); //メーターの色


  _classPrivateFieldSet(this, _point, settings.point || "purple"); //ポイントの色
  // this.value = this.#min; //初期値


  _classPrivateFieldGet(this, _createTag).call(this);

  _classPrivateFieldGet(this, _main).call(this);
};

var _size = new WeakMap();

var _target = new WeakMap();

var _bgcolor = new WeakMap();

var _tmmcolor = new WeakMap();

var _mbgcolor = new WeakMap();

var _meterSize = new WeakMap();

var _degree = new WeakMap();

var _scale = new WeakMap();

var _min = new WeakMap();

var _max = new WeakMap();

var _obj = new WeakMap();

var _mcolor = new WeakMap();

var _point = new WeakMap();

var _createTag = new WeakMap();

var _main = new WeakMap();

var _styleCenter = new WeakMap();

var _addStyleElement = new WeakMap();

var _meterStyle = new WeakMap();

var _meterContentStyle = new WeakMap();

var _createsliceMeterBg = new WeakMap();

var _createsliceMeter = new WeakMap();

var _eventAdd = new WeakMap();

var _click = new WeakMap();

var _memoryY = new WeakMap();

var _OnMouseDown = new WeakMap();

var _OnMouseMove = new WeakMap();

var _OnMouseUp = new WeakMap();

var _outputObject = new WeakMap();

var _rotateMeter = new WeakMap();

var _px = new WeakMap();

var _deg = new WeakMap();

var _rotate = new WeakMap();

var _skewY = new WeakMap();

var _whileSpace = new WeakMap();

var _returnTransformValue = new WeakMap();

var _limit = new WeakMap();

_defineProperty(Tsumami, "testlog", function () {
  console.log("testlog");
});



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXJiZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBpZSIsIm1ldGVyYmdob2xlIiwibWV0ZXJiZ2hvbGVvdXQiLCJ0c3VtYW1pIiwicG9pbnQiLCJzbGljZU1ldGVyQmciLCJzbGljZU1ldGVyQmdDb250ZW50cyIsInNsaWNlTWV0ZXIiLCJzbGljZU1ldGVyQ29udGVudHMiLCJjZW50ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJsZWZ0IiwidG9wIiwiYm9yZGVyIiwidHJhbnNmb3JtIiwidXNlclNlbGVjdCIsInN0eWxlIiwicmlnaHQiLCJib3R0b20iLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwidGFyZ2V0IiwiT2JqZWN0IiwiYXNzaWduIiwia2V5IiwiYXBwZW5kQ2hpbGQiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsImRlZ3JlZSIsImJmIiwibnVtIiwiaSIsImRlZ3JlZVBpZWNlIiwidHIiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImV2ZW50IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVEZWdyZWVCZWZvcmUiLCJyb3RhdGVEZWdyZWVBZnRlciIsImRlZ1ZhbHVlIiwidmFsdWUiLCJ2YWwiLCJjcmVhdGUiLCJtZW1WYWx1ZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZ2V0Iiwic00iLCJzTUMiLCJsZW5ndGgiLCJyb3RhdGVEZWciLCJzbVRyYW5zZm9ybSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwib2JqIiwicmV0dXJuT2JqIiwidiIsIm5hbWUiLCJ0TmFtZSIsInJlcGxhY2UiLCJtaW4iLCJtYXgiLCJzaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZ2NvbG9yIiwidG1tY29sb3IiLCJtYmdjb2xvciIsIm1ldGVyU2l6ZSIsInNjYWxlIiwibWNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsTyxHQWVuQixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtB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QUF0QyxFQUxvQixDQUs0Qjs7O0FBQ2hELHlDQUFpQmpGLFFBQVEsQ0FBQ2tGLFFBQVQsSUFBcUIsT0FBdEMsRUFOb0IsQ0FNMkI7OztBQUMvQywwQ0FBa0JsRixRQUFRLENBQUNtRixTQUFULElBQXNCLEVBQXhDLEVBUG9CLENBT3dCOzs7QUFDNUMsdUNBQWVuRixRQUFRLENBQUN1QyxNQUFULElBQW1CLEdBQWxDLEVBUm9CLENBUW1COzs7QUFDdkMsc0NBQWN2QyxRQUFRLENBQUNvRixLQUFULElBQWtCLEdBQWhDLEVBVG9CLENBU2lCOzs7QUFDckMsb0NBQVlwRixRQUFRLENBQUM0RSxHQUFULElBQWdCLENBQTVCLEVBVm9CLENBVVc7OztBQUMvQixvQ0FBWTVFLFFBQVEsQ0FBQzZFLEdBQVQsSUFBZ0IsR0FBNUIsRUFYb0IsQ0FXYTs7O0FBQ2pDLG9DQUFZN0UsUUFBUSxDQUFDc0UsR0FBVCxJQUFnQixFQUE1QixFQVpvQixDQVlZOzs7QUFDaEMsdUNBQWV0RSxRQUFRLENBQUNxRixNQUFULElBQW1CLE1BQWxDLEVBYm9CLENBYXNCOzs7QUFDMUMsc0NBQWNyRixRQUFRLENBQUNRLEtBQVQsSUFBa0IsUUFBaEMsRUFkb0IsQ0Fjc0I7QUFFMUM7OztBQUVBOztBQUVBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcENrQlQsTyxhQXlXRixZQUFNO0FBQ3JCbUQsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEMiLCJmaWxlIjoidHN1bWFtaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRzdW1hbWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHN1bWFtaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUc3VtYW1pIHtcclxuICAjc2l6ZTtcclxuICAjdGFyZ2V0O1xyXG4gICNiZ2NvbG9yO1xyXG4gICN0bW1jb2xvcjtcclxuICAjbWJnY29sb3I7XHJcbiAgI21ldGVyU2l6ZTtcclxuICAjZGVncmVlO1xyXG4gICNzY2FsZTtcclxuICAjbWluO1xyXG4gICNtYXg7XHJcbiAgI29iajtcclxuICAjbWNvbG9yO1xyXG4gICNwb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgIHNldHRpbmdzID0gKHNldHRpbmdzID09PSB1bmRlZmluZWQpID8ge30gOiBzZXR0aW5ncztcclxuICAgIHRoaXMuI3NpemUgPSBzZXR0aW5ncy5zaXplIHx8IDEwMDsgLy/jgrXjgqTjgrpcclxuICAgIHRoaXMuI3RhcmdldCA9IHNldHRpbmdzLnRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzdW1hbWlcIik7IC8v44K/44O844Ky44OD44OIXHJcbiAgICB0aGlzLiNiZ2NvbG9yID0gc2V0dGluZ3MuYmdjb2xvciB8fCBcInJlZFwiOyAvL+iDjOaZr+iJslxyXG4gICAgdGhpcy4jdG1tY29sb3IgPSBzZXR0aW5ncy50bW1jb2xvciB8fCBcInllbGxvd1wiOyAvL+OBpOOBvuOBv+iJslxyXG4gICAgdGhpcy4jbWJnY29sb3IgPSBzZXR0aW5ncy5tYmdjb2xvciB8fCBcImJsYWNrXCI7IC8v44Oh44O844K/44O86IOM5pmv6ImyXHJcbiAgICB0aGlzLiNtZXRlclNpemUgPSBzZXR0aW5ncy5tZXRlclNpemUgfHwgMTA7IC8v44Oh44O844K/44O85bmFXHJcbiAgICB0aGlzLiNkZWdyZWUgPSBzZXR0aW5ncy5kZWdyZWUgfHwgMjcwOyAvL+ODoeODvOOCv+ODvOihqOekuuW5hVxyXG4gICAgdGhpcy4jc2NhbGUgPSBzZXR0aW5ncy5zY2FsZSB8fCAxLjI7IC8v44Oh44O844K/44O844K544Kx44O844OrICAgICAgICAgVG8gRG9cclxuICAgIHRoaXMuI21pbiA9IHNldHRpbmdzLm1pbiB8fCAwOyAvL+acgOWwj+WApFxyXG4gICAgdGhpcy4jbWF4ID0gc2V0dGluZ3MubWF4IHx8IDEwMDsgLy8g5pyA5aSn5YCkXHJcbiAgICB0aGlzLiNvYmogPSBzZXR0aW5ncy5vYmogfHwgXCJcIjsgLy/lgKTjgpLlj5bjgovlpInmlbBcclxuICAgIHRoaXMuI21jb2xvciA9IHNldHRpbmdzLm1jb2xvciB8fCBcImJsdWVcIjsgLy/jg6Hjg7zjgr/jg7zjga7oibJcclxuICAgIHRoaXMuI3BvaW50ID0gc2V0dGluZ3MucG9pbnQgfHwgXCJwdXJwbGVcIjsgLy/jg53jgqTjg7Pjg4jjga7oibJcclxuXHJcbiAgICAvLyB0aGlzLnZhbHVlID0gdGhpcy4jbWluOyAvL+WIneacn+WApFxyXG5cclxuICAgIHRoaXMuI2NyZWF0ZVRhZygpO1xyXG5cclxuICAgIHRoaXMuI21haW4oKTtcclxuICB9XHJcblxyXG4gICNjcmVhdGVUYWcgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm1ldGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMucGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRoaXMubWV0ZXJiZ2hvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWV0ZXJiZ2hvbGVvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMudHN1bWFtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5wb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyQmcgPSBbXTtcclxuICAgIHRoaXMuc2xpY2VNZXRlckJnQ29udGVudHMgPSBbXTtcclxuICAgIHRoaXMuc2xpY2VNZXRlciA9IFtdO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyQ29udGVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gICNtYWluID0gKCkgPT4ge1xyXG4gICAgLy8g5aSW5p6gXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy4jdGFyZ2V0LCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jYmdjb2xvclxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44O86IOM5pmvXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmJnLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNtYmdjb2xvcixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlcmJnXCIsIHRoaXMuI3RhcmdldCk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZIG9yIOODoeODvOOCv+ODvOmDqOOBruaeoFxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucGllLCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgICB0b3A6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyXCIsIHRoaXMubWV0ZXJiZyk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgICB0aGlzLiNjcmVhdGVzbGljZU1ldGVyQmcodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jg7zjgpLooajnpLrjgZnjgovmiYflvaLkvZzmiJDkvZzmiJBcclxuICAgIHRoaXMuI2NyZWF0ZXNsaWNlTWV0ZXIodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDlhoXlhoZcclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1ldGVyYmdob2xlLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlIC0gdGhpcy4jbWV0ZXJTaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUgLSB0aGlzLiNtZXRlclNpemUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZVwiLCB0aGlzLm1ldGVyYmcpO1xyXG5cclxuICAgIC8vIOWkluWGhlxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXJiZ2hvbGVvdXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgYm9yZGVyOiB0aGlzLiN3aGlsZVNwYWNlKFtcInNvbGlkXCIsIHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvIDIpLCB0aGlzLiNiZ2NvbG9yXSksXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW1widHJhbnNsYXRlWCgtNTAlKVwiLCBcInRyYW5zbGF0ZVkoLTUwJSlcIl0pLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZS1vdXRcIiwgdGhpcy5tZXRlcmJnKTtcclxuXHJcbiAgICAvLyDjgaTjgb7jgb9cclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnRzdW1hbWksIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyAyKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gMiksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI3RtbWNvbG9yLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy4jcm90YXRlKHRoaXMuI2RlZ3JlZSAvIC0yKSxcclxuICAgIH0sIFwidHN1bWFtaS1pbm5lclwiLCB0aGlzLiN0YXJnZXQpO1xyXG5cclxuICAgIC8vIOmHnVxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucG9pbnQsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNwb2ludCxcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXHJcbiAgICB9LCBcInRzdW1hbWktcG9pbnRcIiwgdGhpcy50c3VtYW1pKTtcclxuXHJcbiAgICAvL+OCpOODmeODs+ODiOi/veWKoFxyXG4gICAgdGhpcy4jZXZlbnRBZGQodGhpcy50c3VtYW1pKTtcclxuICB9XHJcblxyXG4gIC8vY2VudGVyXHJcbiAgI3N0eWxlQ2VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIGNzc+S7mOS4jlxyXG4gICNhZGRTdHlsZUVsZW1lbnQgPSAoZWxlbWVudCwgc3R5bGUsIGNsYXNzTmFtZSA9IHVuZGVmaW5lZCwgdGFyZ2V0ID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB2b2lkIDApIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHN0eWxlLmNlbnRlcikgc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuI3N0eWxlQ2VudGVyKCksIHN0eWxlKTtcclxuICAgIGRlbGV0ZSBzdHlsZS5jZW50ZXI7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQgIT09IHZvaWQgMCkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgI21ldGVyU3R5bGUgPSB7XHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIixcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwJSAxMDAlXCIsXHJcbiAgfVxyXG5cclxuICAjbWV0ZXJDb250ZW50U3R5bGUgPSB7XHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgbGVmdDogXCItMTAwJVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgd2lkdGg6IFwiMjAwJVwiLCBoZWlnaHQ6IFwiMjAwJVwiLFxyXG4gIH1cclxuXHJcbiAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgI2NyZWF0ZXNsaWNlTWV0ZXJCZyA9IChkZWdyZWUpID0+IHtcclxuICAgIGRlZ3JlZSA9IChkZWdyZWUgPiAzNjApID8gMCA6IDM2MCAtIGRlZ3JlZTtcclxuICAgIGNvbnN0IGJmID0gKGRlZ3JlZSAlIDkwID09MCk/MDoxO1xyXG4gICAgY29uc3QgbnVtID0gZGVncmVlIC8gOTAgKyBiZjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgbGV0IGRlZ3JlZVBpZWNlID0gMDtcclxuICAgICAgaWYoZGVncmVlID09IDApe1xyXG4gICAgICAgIHRoaXMuc2xpY2VNZXRlckJnW2ldID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNsaWNlTWV0ZXJCZ0NvbnRlbnRzW2ldID0gXCJcIjtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfWVsc2UgaWYgKGRlZ3JlZSA+PSA5MCkge1xyXG4gICAgICAgIGRlZ3JlZVBpZWNlID0gOTA7XHJcbiAgICAgICAgZGVncmVlIC09IDkwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlZ3JlZVBpZWNlID0gZGVncmVlO1xyXG4gICAgICAgIGRlZ3JlZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGljZU1ldGVyQmdbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHRoaXMuc2xpY2VNZXRlckJnQ29udGVudHNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5zbGljZU1ldGVyQmdbaV0sIHtcclxuICAgICAgICAuLi50aGlzLiNtZXRlclN0eWxlLFxyXG4gICAgICAgIHRvcDogMCwgcmlnaHQ6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLiN3aGlsZVNwYWNlKFt0aGlzLiNyb3RhdGUoZGVncmVlUGllY2UgLyAoLTIpICsgMTgwIC0gaSAqIDQ1ICsgZGVncmVlIC8gMiksIHRoaXMuI3NrZXdZKC05MCArIGRlZ3JlZVBpZWNlKV0pLFxyXG4gICAgICB9LCBcInNsaWNlTWV0ZXJCZ1wiLCB0aGlzLnBpZSk7XHJcblxyXG4gICAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5zbGljZU1ldGVyQmdDb250ZW50c1tpXSwge1xyXG4gICAgICAgIC4uLnRoaXMuI21ldGVyQ29udGVudFN0eWxlLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuI2JnY29sb3IsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLiNza2V3WSg5MCAtIGRlZ3JlZVBpZWNlKSxcclxuICAgICAgfSwgXCJzbGljZU1ldGVyQmctY29udGVudHNcIiwgdGhpcy5zbGljZU1ldGVyQmdbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g44Oh44O844K/44O85L2c5oiQXHJcbiAgI2NyZWF0ZXNsaWNlTWV0ZXIgPSAoZGVncmVlKSA9PiB7XHJcbiAgICBjb25zdCBiZiA9IChkZWdyZWUgJSA5MCA9PTApPzA6MTtcclxuICAgIGNvbnN0IG51bSA9IGRlZ3JlZSAvIDkwICsgYmY7XHJcbiAgICBkZWdyZWUgPSAoZGVncmVlID4gMzYwKSA/IDAgOiAzNjAgLSBkZWdyZWU7XHJcbiAgICB2YXIgdHIgPSBbXHJcbiAgICAgIHt0b3A6dGhpcy4jcHgoMCkscmlnaHQ6dGhpcy4jcHgoLTEpfSxcclxuICAgICAge3RvcDp0aGlzLiNweCgxKSxyaWdodDp0aGlzLiNweCgwKX0sXHJcbiAgICAgIHt0b3A6dGhpcy4jcHgoMCkscmlnaHQ6dGhpcy4jcHgoMSl9LFxyXG4gICAgICB7dG9wOnRoaXMuI3B4KC0xKSxyaWdodDp0aGlzLiNweCgwKX0sXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICB0aGlzLnNsaWNlTWV0ZXJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHRoaXMuc2xpY2VNZXRlckNvbnRlbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VNZXRlcltpXSwge1xyXG4gICAgICAgIC4uLnRoaXMuI21ldGVyU3R5bGUsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLiN3aGlsZVNwYWNlKFt0aGlzLiNyb3RhdGUoMTgwICsgOTAgKiBpICsgZGVncmVlIC8gMiksIHRoaXMuI3NrZXdZKC05MCldKSxcclxuICAgICAgICAuLi50cltpXVxyXG4gICAgICB9LCBcInNsaWNlTWV0ZXJcIiwgdGhpcy5waWUpO1xyXG5cclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VNZXRlckNvbnRlbnRzW2ldLCB7XHJcbiAgICAgICAgLi4udGhpcy4jbWV0ZXJDb250ZW50U3R5bGUsXHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhpcy4jbWNvbG9yLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jc2tld1koOTApLFxyXG4gICAgICB9LCBcInNsaWNlTWV0ZXItY29udGVudHNcIiwgdGhpcy5zbGljZU1ldGVyW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOODnuOCpuOCueaTjeS9nFxyXG4gICNldmVudEFkZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy4jbWVtb3J5WSA9IDA7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuI09uTW91c2VEb3duLCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy4jT25Nb3VzZU1vdmUoZSwgZWxlbWVudClcclxuICAgIH0sIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy4jT25Nb3VzZVVwLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAjY2xpY2s7XHJcbiAgI21lbW9yeVk7XHJcbiAgI09uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IHRydWU7XHJcbiAgICB0aGlzLiNtZW1vcnlZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91c2VEb3duXCIpO1xyXG4gIH1cclxuXHJcbiAgI09uTW91c2VNb3ZlID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy4jY2xpY2spIHtcclxuICAgICAgY29uc3Qgcm90YXRlRGVncmVlQmVmb3JlID0gdGhpcy4jcmV0dXJuVHJhbnNmb3JtVmFsdWUoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0sXCJyb3RhdGVcIik7XHJcbiAgICAgIGxldCByb3RhdGVEZWdyZWVBZnRlciA9IHJvdGF0ZURlZ3JlZUJlZm9yZSArIChldmVudC5jbGllbnRZIC0gdGhpcy4jbWVtb3J5WSkgKiAzO1xyXG4gICAgICBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPCAtdGhpcy4jZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gLXRoaXMuI2RlZ3JlZSAvIDI7XHJcbiAgICAgIH0gZWxzZSBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPiB0aGlzLiNkZWdyZWUgLyAyKSB7XHJcbiAgICAgICAgcm90YXRlRGVncmVlQWZ0ZXIgPSB0aGlzLiNkZWdyZWUgLyAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkZWdWYWx1ZSA9IHRoaXMuI2xpbWl0KHJvdGF0ZURlZ3JlZUFmdGVyLCAtdGhpcy4jZGVncmVlIC8gMiwgdGhpcy4jZGVncmVlIC8gMik7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy4jcm90YXRlKGRlZ1ZhbHVlKTtcclxuICAgICAgdGhpcy4jbWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICB0aGlzLiNyb3RhdGVNZXRlcihyb3RhdGVEZWdyZWVBZnRlciArIHRoaXMuI2RlZ3JlZSAvIDIsdGhpcy5zbGljZU1ldGVyLHRoaXMuc2xpY2VNZXRlckNvbnRlbnRzKTtcclxuXHJcbiAgICAgIHRoaXMuI291dHB1dE9iamVjdC52YWx1ZSA9ICh0aGlzLiNtYXggLSB0aGlzLiNtaW4pICogKHJvdGF0ZURlZ3JlZUFmdGVyICsgdGhpcy4jZGVncmVlIC8gMikgLyB0aGlzLiNkZWdyZWU7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIk1vdXNlTW92ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNPbk1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuI2NsaWNrID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vdXNlVXBcIik7XHJcbiAgfVxyXG5cclxuICAvL+OCquODluOCuOOCp+OCr+ODiOOBq+WApOOCkuOCu+ODg+ODiFxyXG4gICNvdXRwdXRPYmplY3QgPSAoKCk9PntcclxuICAgIHZhciB2YWwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgdmFyIG1lbVZhbHVlID0gMDtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICd2YWx1ZScsIHtcclxuICAgICAgc2V0OiAodmFsdWUpPT57XHJcbiAgICAgICAgaWYodGhpcy4jb2JqICE9PSBcIlwiKXtcclxuICAgICAgICAgIHRoaXMuI29iai52YWx1ZSA9IHZhbHVlOyAvL+OCu+ODg+ODiFxyXG4gICAgICAgIH1cclxuICAgICAgICBtZW1WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXQ6ICgpPT57cmV0dXJuIG1lbVZhbHVlO31cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9KSgpO1xyXG5cclxuICAjcm90YXRlTWV0ZXIgPSAoZGVncmVlLHNNLHNNQykgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWNlTWV0ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHJvdGF0ZURlZyA9IDA7XHJcbiAgICAgIGlmKGRlZ3JlZT49OTApe1xyXG4gICAgICAgIHJvdGF0ZURlZyA9IDkwO1xyXG4gICAgICAgIGRlZ3JlZS09OTA7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJvdGF0ZURlZyA9IGRlZ3JlZTtcclxuICAgICAgICBkZWdyZWU9MDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzbVRyYW5zZm9ybSA9IHNNW2ldLnN0eWxlLnRyYW5zZm9ybS5zcGxpdChcIiBcIik7XHJcbiAgICAgIHNNW2ldLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuI3doaWxlU3BhY2UoW3NtVHJhbnNmb3JtWzBdLCB0aGlzLiNza2V3WSgtOTAgKyByb3RhdGVEZWcpXSk7XHJcbiAgICAgIHNNQ1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiNza2V3WSg5MCAtIHJvdGF0ZURlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjc3PljZjkvY3ns7tcclxuICAjcHggPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgI2RlZyA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBudW0gKyBcImRlZ1wiO1xyXG4gIH1cclxuXHJcbiAgI3JvdGF0ZSA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBcInJvdGF0ZShcIiArIHRoaXMuI2RlZyhNYXRoLmZsb29yKG51bSkpICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICAjc2tld1kgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gXCJza2V3WShcIiArIHRoaXMuI2RlZyhNYXRoLmZsb29yKG51bSkpICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICAvLyBjc3Plj5blvpfns7tcclxuXHJcbiAgI3doaWxlU3BhY2UgPSAob2JqKSA9PiB7XHJcbiAgICBsZXQgcmV0dXJuT2JqID0gXCJcIjtcclxuICAgIGZvciAobGV0IHYgb2Ygb2JqKSB7XHJcbiAgICAgIHJldHVybk9iaiArPSB2ICsgXCIgXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0dXJuT2JqO1xyXG4gIH1cclxuXHJcbiAgI3JldHVyblRyYW5zZm9ybVZhbHVlID0gKGVsZW1lbnQsIG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHROYW1lID0gbmFtZStcIihcIjtcclxuICAgIHJldHVybiArKGVsZW1lbnQucmVwbGFjZSh0TmFtZSwgXCJcIikucmVwbGFjZShcImRlZylcIiwgXCJcIikpO1xyXG4gIH1cclxuXHJcbiAgLy8g44Gd44Gu5LuW6Zai5pWwXHJcbiAgI2xpbWl0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICB2YWx1ZSA9IG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIOODhuOCueODiOODreOCsFxyXG4gIHN0YXRpYyB0ZXN0bG9nID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0bG9nXCIpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=