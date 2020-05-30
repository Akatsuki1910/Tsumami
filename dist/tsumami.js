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
        overflow: "hidden",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXJiZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBpZSIsIm1ldGVyYmdob2xlIiwibWV0ZXJiZ2hvbGVvdXQiLCJ0c3VtYW1pIiwicG9pbnQiLCJzbGljZU1ldGVyQmciLCJzbGljZU1ldGVyQmdDb250ZW50cyIsInNsaWNlTWV0ZXIiLCJzbGljZU1ldGVyQ29udGVudHMiLCJjZW50ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicGFkZGluZyIsIm1hcmdpbiIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJ0cmFuc2Zvcm0iLCJ1c2VyU2VsZWN0Iiwic3R5bGUiLCJyaWdodCIsImJvdHRvbSIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJ0YXJnZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXkiLCJhcHBlbmRDaGlsZCIsInRyYW5zZm9ybU9yaWdpbiIsImRlZ3JlZSIsImJmIiwibnVtIiwiaSIsImRlZ3JlZVBpZWNlIiwidHIiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImV2ZW50IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVEZWdyZWVCZWZvcmUiLCJyb3RhdGVEZWdyZWVBZnRlciIsImRlZ1ZhbHVlIiwidmFsdWUiLCJ2YWwiLCJjcmVhdGUiLCJtZW1WYWx1ZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZ2V0Iiwic00iLCJzTUMiLCJsZW5ndGgiLCJyb3RhdGVEZWciLCJzbVRyYW5zZm9ybSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwib2JqIiwicmV0dXJuT2JqIiwidiIsIm5hbWUiLCJ0TmFtZSIsInJlcGxhY2UiLCJtaW4iLCJtYXgiLCJzaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZ2NvbG9yIiwidG1tY29sb3IiLCJtYmdjb2xvciIsIm1ldGVyU2l6ZSIsInNjYWxlIiwibWNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsTyxHQWVuQixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQXVCVCxpQkFBTTtBQUNqQixXQUFJLENBQUNDLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxXQUFJLENBQUNDLEdBQUwsR0FBV0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxXQUFJLENBQUNFLFdBQUwsR0FBbUJILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLFdBQUksQ0FBQ0csY0FBTCxHQUFzQkosUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0EsV0FBSSxDQUFDSSxPQUFMLEdBQWVMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBSSxDQUFDSyxLQUFMLEdBQWFOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsV0FBSSxDQUFDTSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBSSxDQUFDQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFdBQUksQ0FBQ0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQUksQ0FBQ0Msa0JBQUwsR0FBMEIsRUFBMUI7QUFDRDtBQWxDcUI7O0FBQUE7QUFBQTtBQUFBLFdBb0NkLGlCQUFNO0FBQ1o7QUFDQSxpQ0FBSSxtQkFBSixXQUFJLHdCQUFrQixLQUFsQixZQUFnQztBQUNsQ0MsY0FBTSxFQUFFLEtBRDBCO0FBRWxDQyxnQkFBUSxFQUFFLFVBRndCO0FBR2xDQyxhQUFLLHdCQUFFLEtBQUYsWUFBRSxLQUFGLHdCQUFXLEtBQVgsU0FINkI7QUFJbENDLGNBQU0sd0JBQUUsS0FBRixZQUFFLEtBQUYsd0JBQVcsS0FBWCxTQUo0QjtBQUtsQ0Msa0JBQVUsd0JBQUUsS0FBRjtBQUx3QixPQUFoQyxDQUFKLENBRlksQ0FVWjs7O0FBQ0EsaUNBQUksbUJBQUosV0FBSSxFQUFrQixLQUFJLENBQUNoQixPQUF2QixFQUFnQztBQUNsQ1ksY0FBTSxFQUFFLElBRDBCO0FBRWxDSyxvQkFBWSxFQUFFLEtBRm9CO0FBR2xDRCxrQkFBVSx3QkFBRSxLQUFGLFlBSHdCO0FBSWxDRixhQUFLLHdCQUFFLEtBQUYsWUFBRSxLQUFGLEVBQVcsMkJBQUksUUFBSix5QkFBYSxLQUFiLFNBQVgsQ0FKNkI7QUFLbENDLGNBQU0sd0JBQUUsS0FBRixZQUFFLEtBQUYsRUFBVywyQkFBSSxRQUFKLHlCQUFhLEtBQWIsU0FBWDtBQUw0QixPQUFoQyxFQU1ELGlCQU5DLHdCQU1rQixLQU5sQixXQUFKLENBWFksQ0FtQlo7OztBQUNBLGlDQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDWixHQUF2QixFQUE0QjtBQUM5QlMsY0FBTSxFQUFFLEtBRHNCO0FBRTlCTSxnQkFBUSxFQUFDLFFBRnFCO0FBRzlCRCxvQkFBWSxFQUFFLEtBSGdCO0FBSTlCSixnQkFBUSxFQUFFLFVBSm9CO0FBSzlCTSxlQUFPLEVBQUUsQ0FMcUI7QUFNOUJDLGNBQU0sRUFBRSxDQU5zQjtBQU85Qk4sYUFBSyx3QkFBRSxLQUFGLFlBQUUsS0FBRix3QkFBVyxLQUFYLFNBUHlCO0FBUTlCQyxjQUFNLHdCQUFFLEtBQUYsWUFBRSxLQUFGLHdCQUFXLEtBQVgsU0FSd0I7QUFTOUJNLFlBQUksd0JBQUUsS0FBRixZQUFFLEtBQUYsRUFBVyxDQUFDLDJCQUFJLFFBQUosR0FBYSwyQkFBSSxRQUFKLHlCQUFhLEtBQWIsU0FBZCxJQUEyQyxDQUFDLENBQXZELENBVDBCO0FBVTlCQyxXQUFHLHdCQUFFLEtBQUYsWUFBRSxLQUFGLEVBQVcsQ0FBQywyQkFBSSxRQUFKLEdBQWEsMkJBQUksUUFBSix5QkFBYSxLQUFiLFNBQWQsSUFBMkMsQ0FBQyxDQUF2RDtBQVYyQixPQUE1QixFQVdELGVBWEMsRUFXZ0IsS0FBSSxDQUFDdEIsT0FYckIsQ0FBSixDQXBCWSxDQWlDWjs7O0FBQ0EsaUNBQUksc0JBQUosV0FBSSx3QkFBcUIsS0FBckIsV0FBSixDQWxDWSxDQW9DWjs7O0FBQ0EsaUNBQUksb0JBQUosV0FBSSx3QkFBbUIsS0FBbkIsV0FBSixDQXJDWSxDQXVDWjs7O0FBQ0EsaUNBQUksbUJBQUosV0FBSSxFQUFrQixLQUFJLENBQUNJLFdBQXZCLEVBQW9DO0FBQ3RDUSxjQUFNLEVBQUUsSUFEOEI7QUFFdENLLG9CQUFZLEVBQUUsS0FGd0I7QUFHdENILGFBQUssd0JBQUUsS0FBRixZQUFFLEtBQUYsRUFBVywyQkFBSSxRQUFKLHlCQUFhLEtBQWIsa0NBQTJCLEtBQTNCLGFBQVgsQ0FIaUM7QUFJdENDLGNBQU0sd0JBQUUsS0FBRixZQUFFLEtBQUYsRUFBVywyQkFBSSxRQUFKLHlCQUFhLEtBQWIsa0NBQTJCLEtBQTNCLGFBQVgsQ0FKZ0M7QUFLdENDLGtCQUFVLHdCQUFFLEtBQUY7QUFMNEIsT0FBcEMsRUFNRCxtQkFOQyxFQU1vQixLQUFJLENBQUNoQixPQU56QixDQUFKLENBeENZLENBZ0RaOzs7QUFDQSxpQ0FBSSxtQkFBSixXQUFJLEVBQWtCLEtBQUksQ0FBQ0ssY0FBdkIsRUFBdUM7QUFDekNPLGNBQU0sRUFBRSxLQURpQztBQUV6Q0MsZ0JBQVEsRUFBRSxVQUYrQjtBQUd6Q0ksb0JBQVksRUFBRSxLQUgyQjtBQUl6Q0gsYUFBSyx3QkFBRSxLQUFGLFlBQUUsS0FBRixFQUFXLDJCQUFJLFFBQUoseUJBQWEsS0FBYixTQUFYLENBSm9DO0FBS3pDQyxjQUFNLHdCQUFFLEtBQUYsWUFBRSxLQUFGLEVBQVcsMkJBQUksUUFBSix5QkFBYSxLQUFiLFNBQVgsQ0FMbUM7QUFNekNDLGtCQUFVLEVBQUUsZUFONkI7QUFPekNPLGNBQU0sd0JBQUUsS0FBRixvQkFBRSxLQUFGLEVBQW1CLENBQUMsT0FBRCx3QkFBVSxLQUFWLFlBQVUsS0FBVixFQUFtQixDQUFDLDJCQUFJLFFBQUosR0FBYSwyQkFBSSxRQUFKLHlCQUFhLEtBQWIsU0FBZCxJQUEwQyxDQUE3RCx5QkFBaUUsS0FBakUsWUFBbkIsQ0FQbUM7QUFRekNILGNBQU0sRUFBRSxDQVJpQztBQVN6Q0UsV0FBRyxFQUFFLEtBVG9DO0FBVXpDRCxZQUFJLEVBQUUsS0FWbUM7QUFXekNHLGlCQUFTLHdCQUFFLEtBQUYsb0JBQUUsS0FBRixFQUFtQixDQUFDLGtCQUFELEVBQXFCLGtCQUFyQixDQUFuQjtBQVhnQyxPQUF2QyxFQVlELHVCQVpDLEVBWXdCLEtBQUksQ0FBQ3hCLE9BWjdCLENBQUosQ0FqRFksQ0ErRFo7OztBQUNBLGlDQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDTSxPQUF2QixFQUFnQztBQUNsQ00sY0FBTSxFQUFFLElBRDBCO0FBRWxDYSxrQkFBVSxFQUFFLE1BRnNCO0FBR2xDWCxhQUFLLHdCQUFFLEtBQUYsWUFBRSxLQUFGLEVBQVcsMkJBQUksUUFBSixHQUFhLENBQXhCLENBSDZCO0FBSWxDQyxjQUFNLHdCQUFFLEtBQUYsWUFBRSxLQUFGLEVBQVcsMkJBQUksUUFBSixHQUFhLENBQXhCLENBSjRCO0FBS2xDQyxrQkFBVSx3QkFBRSxLQUFGLFlBTHdCO0FBTWxDQyxvQkFBWSxFQUFFLEtBTm9CO0FBT2xDTyxpQkFBUyx3QkFBRSxLQUFGLGdCQUFFLEtBQUYsRUFBZSwyQkFBSSxVQUFKLEdBQWUsQ0FBQyxDQUEvQjtBQVB5QixPQUFoQyxFQVFELGVBUkMsd0JBUWdCLEtBUmhCLFdBQUosQ0FoRVksQ0EwRVo7OztBQUNBLGlDQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDakIsS0FBdkIsRUFBOEI7QUFDaENLLGNBQU0sRUFBRSxJQUR3QjtBQUVoQ0UsYUFBSyxFQUFFLEtBRnlCO0FBR2hDQyxjQUFNLEVBQUUsS0FId0I7QUFJaENDLGtCQUFVLHdCQUFFLEtBQUYsU0FKc0I7QUFLaENRLGlCQUFTLEVBQUU7QUFMcUIsT0FBOUIsRUFNRCxlQU5DLEVBTWdCLEtBQUksQ0FBQ2xCLE9BTnJCLENBQUosQ0EzRVksQ0FtRlo7OztBQUNBLGlDQUFJLFlBQUosV0FBSSxFQUFXLEtBQUksQ0FBQ0EsT0FBaEIsQ0FBSjtBQUNEO0FBekhxQjs7QUFBQTtBQUFBO0FBQUEsV0E0SFAsaUJBQU07QUFDbkIsVUFBTW9CLEtBQUssR0FBRztBQUNaYixnQkFBUSxFQUFFLFVBREU7QUFFWlMsV0FBRyxFQUFFLENBRk87QUFHWkssYUFBSyxFQUFFLENBSEs7QUFJWkMsY0FBTSxFQUFFLENBSkk7QUFLWlAsWUFBSSxFQUFFLENBTE07QUFNWkQsY0FBTSxFQUFFO0FBTkksT0FBZDtBQVFBLGFBQU9NLEtBQVA7QUFDRDtBQXRJcUI7O0FBQUE7QUFBQTtBQUFBLFdBeUlILGVBQUNHLE9BQUQsRUFBVUgsS0FBVixFQUErRDtBQUFBLFVBQTlDSSxTQUE4Qyx1RUFBbENDLFNBQWtDO0FBQUEsVUFBdkJDLE1BQXVCLHVFQUFkRCxTQUFjO0FBQ2hGLFVBQUlELFNBQVMsS0FBSyxLQUFLLENBQXZCLEVBQTBCRCxPQUFPLENBQUNDLFNBQVIsR0FBb0JBLFNBQXBCO0FBQzFCLFVBQUlKLEtBQUssQ0FBQ2QsTUFBVixFQUFrQmMsS0FBSyxHQUFHTyxNQUFNLENBQUNDLE1BQVAsdUJBQWMsS0FBZCxxQkFBYyxLQUFkLEdBQW1DUixLQUFuQyxDQUFSO0FBQ2xCLGFBQU9BLEtBQUssQ0FBQ2QsTUFBYjs7QUFDQSxXQUFLLElBQUl1QixHQUFULElBQWdCVCxLQUFoQixFQUF1QjtBQUNyQkcsZUFBTyxDQUFDSCxLQUFSLENBQWNTLEdBQWQsSUFBcUJULEtBQUssQ0FBQ1MsR0FBRCxDQUExQjtBQUNEOztBQUNELFVBQUlILE1BQU0sS0FBSyxLQUFLLENBQXBCLEVBQXVCQSxNQUFNLENBQUNJLFdBQVAsQ0FBbUJQLE9BQW5CO0FBQ3hCO0FBakpxQjs7QUFBQTtBQUFBO0FBQUEsV0FtSlI7QUFDWmpCLFlBQU0sRUFBRSxLQURJO0FBRVpNLGNBQVEsRUFBRSxRQUZFO0FBR1pMLGNBQVEsRUFBRSxVQUhFO0FBSVpDLFdBQUssRUFBRSxLQUpLO0FBSUVDLFlBQU0sRUFBRSxLQUpWO0FBS1pzQixxQkFBZSxFQUFFO0FBTEw7QUFuSlE7O0FBQUE7QUFBQTtBQUFBLFdBMkpEO0FBQ25CekIsWUFBTSxFQUFFLEtBRFc7QUFFbkJDLGNBQVEsRUFBRSxVQUZTO0FBR25CUSxVQUFJLEVBQUUsT0FIYTtBQUluQkosa0JBQVksRUFBRSxLQUpLO0FBS25CSCxXQUFLLEVBQUUsTUFMWTtBQUtKQyxZQUFNLEVBQUU7QUFMSjtBQTNKQzs7QUFBQTtBQUFBO0FBQUEsV0FvS0EsZUFBQ3VCLE1BQUQsRUFBWTtBQUNoQ0EsWUFBTSxHQUFJQSxNQUFNLEdBQUcsR0FBVixHQUFpQixDQUFqQixHQUFxQixNQUFNQSxNQUFwQztBQUNBLFVBQU1DLEVBQUUsR0FBSUQsTUFBTSxHQUFHLEVBQVQsSUFBYyxDQUFmLEdBQWtCLENBQWxCLEdBQW9CLENBQS9CO0FBQ0EsVUFBTUUsR0FBRyxHQUFHRixNQUFNLEdBQUcsRUFBVCxHQUFjQyxFQUExQjs7QUFDQSxXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEdBQXBCLEVBQXlCQyxDQUFDLEVBQTFCLEVBQThCO0FBQzVCLFlBQUlDLFdBQVcsR0FBRyxDQUFsQjs7QUFDQSxZQUFHSixNQUFNLElBQUksQ0FBYixFQUFlO0FBQ2IsZUFBSSxDQUFDOUIsWUFBTCxDQUFrQmlDLENBQWxCLElBQXVCLEVBQXZCO0FBQ0EsZUFBSSxDQUFDaEMsb0JBQUwsQ0FBMEJnQyxDQUExQixJQUErQixFQUEvQjtBQUNBO0FBQ0QsU0FKRCxNQUlNLElBQUlILE1BQU0sSUFBSSxFQUFkLEVBQWtCO0FBQ3RCSSxxQkFBVyxHQUFHLEVBQWQ7QUFDQUosZ0JBQU0sSUFBSSxFQUFWO0FBQ0QsU0FISyxNQUdDO0FBQ0xJLHFCQUFXLEdBQUdKLE1BQWQ7QUFDQUEsZ0JBQU0sR0FBRyxDQUFUO0FBQ0Q7O0FBQ0QsYUFBSSxDQUFDOUIsWUFBTCxDQUFrQmlDLENBQWxCLElBQXVCeEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQXZCO0FBQ0EsYUFBSSxDQUFDTyxvQkFBTCxDQUEwQmdDLENBQTFCLElBQStCeEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9COztBQUNBLG1DQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDTSxZQUFMLENBQWtCaUMsQ0FBbEIsQ0FBbEIsd0RBQ0MsS0FERDtBQUVGbkIsYUFBRyxFQUFFLENBRkg7QUFFTUssZUFBSyxFQUFFLENBRmI7QUFHRkgsbUJBQVMsd0JBQUUsS0FBRixvQkFBRSxLQUFGLEVBQW1CLHVCQUFDLEtBQUQsZ0JBQUMsS0FBRCxFQUFja0IsV0FBVyxHQUFJLENBQUMsQ0FBaEIsR0FBcUIsR0FBckIsR0FBMkJELENBQUMsR0FBRyxFQUEvQixHQUFvQ0gsTUFBTSxHQUFHLENBQTNELHlCQUErRCxLQUEvRCxlQUErRCxLQUEvRCxFQUEyRSxDQUFDLEVBQUQsR0FBTUksV0FBakYsRUFBbkI7QUFIUCxZQUlELGNBSkMsRUFJZSxLQUFJLENBQUN2QyxHQUpwQixDQUFKOztBQU1BLG1DQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDTSxvQkFBTCxDQUEwQmdDLENBQTFCLENBQWxCLHdEQUNDLEtBREQ7QUFFRnpCLG9CQUFVLHdCQUFFLEtBQUYsV0FGUjtBQUdGUSxtQkFBUyx3QkFBRSxLQUFGLGVBQUUsS0FBRixFQUFjLEtBQUtrQixXQUFuQjtBQUhQLFlBSUQsdUJBSkMsRUFJd0IsS0FBSSxDQUFDbEMsWUFBTCxDQUFrQmlDLENBQWxCLENBSnhCLENBQUo7QUFLRDtBQUNGO0FBbk1xQjs7QUFBQTtBQUFBO0FBQUEsV0FzTUYsZUFBQ0gsTUFBRCxFQUFZO0FBQzlCLFVBQU1DLEVBQUUsR0FBSUQsTUFBTSxHQUFHLEVBQVQsSUFBYyxDQUFmLEdBQWtCLENBQWxCLEdBQW9CLENBQS9CO0FBQ0EsVUFBTUUsR0FBRyxHQUFHRixNQUFNLEdBQUcsRUFBVCxHQUFjQyxFQUExQjtBQUNBRCxZQUFNLEdBQUlBLE1BQU0sR0FBRyxHQUFWLEdBQWlCLENBQWpCLEdBQXFCLE1BQU1BLE1BQXBDO0FBQ0EsVUFBSUssRUFBRSxHQUFHLENBQ1A7QUFBQ3JCLFdBQUcsd0JBQUMsS0FBRCxZQUFDLEtBQUQsRUFBVSxDQUFWLENBQUo7QUFBaUJLLGFBQUssd0JBQUMsS0FBRCxZQUFDLEtBQUQsRUFBVSxDQUFDLENBQVg7QUFBdEIsT0FETyxFQUVQO0FBQUNMLFdBQUcsd0JBQUMsS0FBRCxZQUFDLEtBQUQsRUFBVSxDQUFWLENBQUo7QUFBaUJLLGFBQUssd0JBQUMsS0FBRCxZQUFDLEtBQUQsRUFBVSxDQUFWO0FBQXRCLE9BRk8sRUFHUDtBQUFDTCxXQUFHLHdCQUFDLEtBQUQsWUFBQyxLQUFELEVBQVUsQ0FBVixDQUFKO0FBQWlCSyxhQUFLLHdCQUFDLEtBQUQsWUFBQyxLQUFELEVBQVUsQ0FBVjtBQUF0QixPQUhPLEVBSVA7QUFBQ0wsV0FBRyx3QkFBQyxLQUFELFlBQUMsS0FBRCxFQUFVLENBQUMsQ0FBWCxDQUFKO0FBQWtCSyxhQUFLLHdCQUFDLEtBQUQsWUFBQyxLQUFELEVBQVUsQ0FBVjtBQUF2QixPQUpPLENBQVQ7O0FBTUEsV0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxHQUFwQixFQUF5QkMsQ0FBQyxFQUExQixFQUE4QjtBQUM1QixhQUFJLENBQUMvQixVQUFMLENBQWdCK0IsQ0FBaEIsSUFBcUJ4QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBckI7QUFDQSxhQUFJLENBQUNTLGtCQUFMLENBQXdCOEIsQ0FBeEIsSUFBNkJ4QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7O0FBQ0EsbUNBQUksbUJBQUosV0FBSSxFQUFrQixLQUFJLENBQUNRLFVBQUwsQ0FBZ0IrQixDQUFoQixDQUFsQix3REFDQyxLQUREO0FBRUZqQixtQkFBUyx3QkFBRSxLQUFGLG9CQUFFLEtBQUYsRUFBbUIsdUJBQUMsS0FBRCxnQkFBQyxLQUFELEVBQWMsTUFBTSxLQUFLaUIsQ0FBWCxHQUFlSCxNQUFNLEdBQUcsQ0FBdEMseUJBQTBDLEtBQTFDLGVBQTBDLEtBQTFDLEVBQXNELENBQUMsRUFBdkQsRUFBbkI7QUFGUCxXQUdDSyxFQUFFLENBQUNGLENBQUQsQ0FISCxHQUlELFlBSkMsRUFJYSxLQUFJLENBQUN0QyxHQUpsQixDQUFKOztBQU1BLG1DQUFJLG1CQUFKLFdBQUksRUFBa0IsS0FBSSxDQUFDUSxrQkFBTCxDQUF3QjhCLENBQXhCLENBQWxCLHdEQUNDLEtBREQ7QUFFRnpCLG9CQUFVLHdCQUFFLEtBQUYsVUFGUjtBQUdGUSxtQkFBUyx3QkFBRSxLQUFGLGVBQUUsS0FBRixFQUFjLEVBQWQ7QUFIUCxZQUlELHFCQUpDLEVBSXNCLEtBQUksQ0FBQ2QsVUFBTCxDQUFnQitCLENBQWhCLENBSnRCLENBQUo7QUFLRDtBQUNGO0FBL05xQjs7QUFBQTtBQUFBO0FBQUEsV0FrT1YsZUFBQ1osT0FBRCxFQUFhO0FBQ3ZCLGlDQUFJLFVBQVUsS0FBVixDQUFKOztBQUNBLGlDQUFJLFlBQVksQ0FBWixDQUFKOztBQUNBQSxhQUFPLENBQUNlLGdCQUFSLENBQXlCLFdBQXpCLHdCQUFzQyxLQUF0QyxpQkFBeUQsS0FBekQ7QUFDQUMsWUFBTSxDQUFDRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDRSxDQUFELEVBQU87QUFDMUMsbUNBQUksZUFBSixXQUFJLEVBQWNBLENBQWQsRUFBaUJqQixPQUFqQixDQUFKO0FBQ0QsT0FGRCxFQUVHLEtBRkg7QUFHQWdCLFlBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsU0FBeEIsd0JBQW1DLEtBQW5DLGVBQW9ELEtBQXBEO0FBQ0Q7QUExT3FCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQThPUCxlQUFDRyxLQUFELEVBQVc7QUFDeEIsaUNBQUksVUFBVSxJQUFWLENBQUo7O0FBQ0EsaUNBQUksWUFBWUEsS0FBSyxDQUFDQyxPQUFsQixDQUFKOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7QUFsUHFCOztBQUFBO0FBQUE7QUFBQSxXQW9QUCxlQUFDSCxLQUFELEVBQVFsQixPQUFSLEVBQW9CO0FBQ2pDLGdDQUFJLEtBQUosV0FBaUI7QUFDZixZQUFNc0Isa0JBQWtCLHlCQUFHLEtBQUgsOEJBQUcsS0FBSCxFQUE4QnRCLE9BQU8sQ0FBQ0gsS0FBUixDQUFjRixTQUE1QyxFQUFzRCxRQUF0RCxDQUF4Qjs7QUFDQSxZQUFJNEIsaUJBQWlCLEdBQUdELGtCQUFrQixHQUFHLENBQUNKLEtBQUssQ0FBQ0MsT0FBTix5QkFBZ0IsS0FBaEIsV0FBRCxJQUFrQyxDQUEvRTs7QUFDQSxZQUFJSSxpQkFBaUIsR0FBRyx1QkFBQyxLQUFELGFBQWdCLENBQXhDLEVBQTJDO0FBQ3pDQSwyQkFBaUIsR0FBRyx1QkFBQyxLQUFELGFBQWdCLENBQXBDO0FBQ0QsU0FGRCxNQUVPLElBQUlBLGlCQUFpQixHQUFHLDJCQUFJLFVBQUosR0FBZSxDQUF2QyxFQUEwQztBQUMvQ0EsMkJBQWlCLEdBQUcsMkJBQUksVUFBSixHQUFlLENBQW5DO0FBQ0Q7O0FBRUQsWUFBTUMsUUFBUSx5QkFBRyxLQUFILGVBQUcsS0FBSCxFQUFlRCxpQkFBZixFQUFrQyx1QkFBQyxLQUFELGFBQWdCLENBQWxELEVBQXFELDJCQUFJLFVBQUosR0FBZSxDQUFwRSxDQUFkOztBQUNBdkIsZUFBTyxDQUFDSCxLQUFSLENBQWNGLFNBQWQseUJBQTBCLEtBQTFCLGdCQUEwQixLQUExQixFQUF1QzZCLFFBQXZDOztBQUNBLG1DQUFJLFlBQVlOLEtBQUssQ0FBQ0MsT0FBbEIsQ0FBSjs7QUFFQSxtQ0FBSSxlQUFKLFdBQUksRUFBY0ksaUJBQWlCLEdBQUcsMkJBQUksVUFBSixHQUFlLENBQWpELEVBQW1ELEtBQUksQ0FBQzFDLFVBQXhELEVBQW1FLEtBQUksQ0FBQ0Msa0JBQXhFLENBQUo7O0FBRUEsbUNBQUksZ0JBQUosQ0FBbUIyQyxLQUFuQixHQUEyQixDQUFDLDJCQUFJLE9BQUoseUJBQVksS0FBWixPQUFELEtBQTJCRixpQkFBaUIsR0FBRywyQkFBSSxVQUFKLEdBQWUsQ0FBOUQsMEJBQW1FLEtBQW5FLFVBQTNCO0FBRUFILGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRDtBQUNGO0FBeFFxQjs7QUFBQTtBQUFBO0FBQUEsV0EwUVQsZUFBQ0gsS0FBRCxFQUFXO0FBQ3RCLGlDQUFJLFVBQVUsS0FBVixDQUFKOztBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7QUE3UXFCOztBQUFBO0FBQUE7QUFBQSxXQWdSTCxZQUFJO0FBQ25CLFVBQUlLLEdBQUcsR0FBR3RCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBYyxJQUFkLENBQVY7QUFDQSxVQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBeEIsWUFBTSxDQUFDeUIsY0FBUCxDQUFzQkgsR0FBdEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDbENJLFdBQUcsRUFBRSxhQUFDTCxLQUFELEVBQVM7QUFDWixjQUFHLDJCQUFJLE9BQUosS0FBYyxFQUFqQixFQUFvQjtBQUNsQix1Q0FBSSxPQUFKLENBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLENBRGtCLENBQ087QUFDMUI7O0FBQ0RHLGtCQUFRLEdBQUdILEtBQVg7QUFDRCxTQU5pQztBQU9sQ00sV0FBRyxFQUFFLGVBQUk7QUFBQyxpQkFBT0gsUUFBUDtBQUFpQjtBQVBPLE9BQXBDO0FBU0EsYUFBT0YsR0FBUDtBQUNELEtBYmU7QUFoUk07O0FBQUE7QUFBQTtBQUFBLFdBK1JQLGVBQUNqQixNQUFELEVBQVF1QixFQUFSLEVBQVdDLEdBQVgsRUFBbUI7QUFDaEMsV0FBSyxJQUFJckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFJLENBQUMvQixVQUFMLENBQWdCcUQsTUFBcEMsRUFBNEN0QixDQUFDLEVBQTdDLEVBQWlEO0FBQy9DLFlBQUl1QixTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsWUFBRzFCLE1BQU0sSUFBRSxFQUFYLEVBQWM7QUFDWjBCLG1CQUFTLEdBQUcsRUFBWjtBQUNBMUIsZ0JBQU0sSUFBRSxFQUFSO0FBQ0QsU0FIRCxNQUdLO0FBQ0gwQixtQkFBUyxHQUFHMUIsTUFBWjtBQUNBQSxnQkFBTSxHQUFDLENBQVA7QUFDRDs7QUFDRCxZQUFNMkIsV0FBVyxHQUFHSixFQUFFLENBQUNwQixDQUFELENBQUYsQ0FBTWYsS0FBTixDQUFZRixTQUFaLENBQXNCMEMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBcEI7QUFDQUwsVUFBRSxDQUFDcEIsQ0FBRCxDQUFGLENBQU1mLEtBQU4sQ0FBWUYsU0FBWix5QkFBd0IsS0FBeEIsb0JBQXdCLEtBQXhCLEVBQXlDLENBQUN5QyxXQUFXLENBQUMsQ0FBRCxDQUFaLHdCQUFpQixLQUFqQixlQUFpQixLQUFqQixFQUE2QixDQUFDLEVBQUQsR0FBTUQsU0FBbkMsRUFBekM7QUFDQUYsV0FBRyxDQUFDckIsQ0FBRCxDQUFILENBQU9mLEtBQVAsQ0FBYUYsU0FBYix5QkFBeUIsS0FBekIsZUFBeUIsS0FBekIsRUFBcUMsS0FBS3dDLFNBQTFDO0FBQ0Q7QUFDRjtBQTdTcUI7O0FBQUE7QUFBQTtBQUFBLFdBZ1RoQixlQUFDeEIsR0FBRCxFQUFTO0FBQ2IsYUFBT0EsR0FBRyxHQUFHLElBQWI7QUFDRDtBQWxUcUI7O0FBQUE7QUFBQTtBQUFBLFdBb1RmLGVBQUNBLEdBQUQsRUFBUztBQUNkLGFBQU9BLEdBQUcsR0FBRyxLQUFiO0FBQ0Q7QUF0VHFCOztBQUFBO0FBQUE7QUFBQSxXQXdUWixlQUFDQSxHQUFELEVBQVM7QUFDakIsYUFBTyxrQ0FBWSxLQUFaLGFBQVksS0FBWixFQUFzQjJCLElBQUksQ0FBQ0MsS0FBTCxDQUFXNUIsR0FBWCxDQUF0QixJQUF5QyxHQUFoRDtBQUNEO0FBMVRxQjs7QUFBQTtBQUFBO0FBQUEsV0E0VGIsZUFBQ0EsR0FBRCxFQUFTO0FBQ2hCLGFBQU8saUNBQVcsS0FBWCxhQUFXLEtBQVgsRUFBcUIyQixJQUFJLENBQUNDLEtBQUwsQ0FBVzVCLEdBQVgsQ0FBckIsSUFBd0MsR0FBL0M7QUFDRDtBQTlUcUI7O0FBQUE7QUFBQTtBQUFBLFdBa1VSLGVBQUM2QixHQUFELEVBQVM7QUFDckIsVUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQURxQixpREFFUEQsR0FGTztBQUFBOztBQUFBO0FBRXJCLDREQUFtQjtBQUFBLGNBQVZFLENBQVU7QUFDakJELG1CQUFTLElBQUlDLENBQUMsR0FBRyxHQUFqQjtBQUNEO0FBSm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS3JCLGFBQU9ELFNBQVA7QUFDRDtBQXhVcUI7O0FBQUE7QUFBQTtBQUFBLFdBMFVFLGVBQUN6QyxPQUFELEVBQVUyQyxJQUFWLEVBQW1CO0FBQ3pDLFVBQU1DLEtBQUssR0FBR0QsSUFBSSxHQUFDLEdBQW5CO0FBQ0EsYUFBTyxDQUFFM0MsT0FBTyxDQUFDNkMsT0FBUixDQUFnQkQsS0FBaEIsRUFBdUIsRUFBdkIsRUFBMkJDLE9BQTNCLENBQW1DLE1BQW5DLEVBQTJDLEVBQTNDLENBQVQ7QUFDRDtBQTdVcUI7O0FBQUE7QUFBQTtBQUFBLFdBZ1ZiLGVBQUNwQixNQUFELEVBQVFxQixHQUFSLEVBQWFDLEdBQWIsRUFBcUI7QUFDNUIsVUFBSXRCLE1BQUssR0FBR3FCLEdBQVosRUFBaUI7QUFDZnJCLGNBQUssR0FBR3FCLEdBQVI7QUFDRCxPQUZELE1BRU8sSUFBSXJCLE1BQUssR0FBR3NCLEdBQVosRUFBaUI7QUFDdEJ0QixjQUFLLEdBQUdzQixHQUFSO0FBQ0Q7O0FBQ0QsYUFBT3RCLE1BQVA7QUFDRDtBQXZWcUI7O0FBQ3BCdkQsVUFBUSxHQUFJQSxRQUFRLEtBQUtnQyxTQUFkLEdBQTJCLEVBQTNCLEdBQWdDaEMsUUFBM0M7O0FBQ0EscUNBQWFBLFFBQVEsQ0FBQzhFLElBQVQsSUFBaUIsR0FBOUIsRUFGb0IsQ0FFZTs7O0FBQ25DLHVDQUFlOUUsUUFBUSxDQUFDaUMsTUFBVCxJQUFtQi9CLFFBQVEsQ0FBQzZFLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEMsRUFIb0IsQ0FHa0Q7OztBQUN0RSx3Q0FBZ0IvRSxRQUFRLENBQUNnRixPQUFULElBQW9CLEtBQXBDLEVBSm9CLENBSXVCOzs7QUFDM0MseUNBQWlCaEYsUUFBUSxDQUFDaUYsUUFBVCxJQUFxQixRQUF0QyxFQUxvQixDQUs0Qjs7O0FBQ2hELHlDQUFpQmpGLFFBQVEsQ0FBQ2tGLFFBQVQsSUFBcUIsT0FBdEMsRUFOb0IsQ0FNMkI7OztBQUMvQywwQ0FBa0JsRixRQUFRLENBQUNtRixTQUFULElBQXNCLEVBQXhDLEVBUG9CLENBT3dCOzs7QUFDNUMsdUNBQWVuRixRQUFRLENBQUN1QyxNQUFULElBQW1CLEdBQWxDLEVBUm9CLENBUW1COzs7QUFDdkMsc0NBQWN2QyxRQUFRLENBQUNvRixLQUFULElBQWtCLEdBQWhDLEVBVG9CLENBU2lCOzs7QUFDckMsb0NBQVlwRixRQUFRLENBQUM0RSxHQUFULElBQWdCLENBQTVCLEVBVm9CLENBVVc7OztBQUMvQixvQ0FBWTVFLFFBQVEsQ0FBQzZFLEdBQVQsSUFBZ0IsR0FBNUIsRUFYb0IsQ0FXYTs7O0FBQ2pDLG9DQUFZN0UsUUFBUSxDQUFDc0UsR0FBVCxJQUFnQixFQUE1QixFQVpvQixDQVlZOzs7QUFDaEMsdUNBQWV0RSxRQUFRLENBQUNxRixNQUFULElBQW1CLE1BQWxDLEVBYm9CLENBYXNCOzs7QUFDMUMsc0NBQWNyRixRQUFRLENBQUNRLEtBQVQsSUFBa0IsUUFBaEMsRUFkb0IsQ0Fjc0I7QUFFMUM7OztBQUVBOztBQUVBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcENrQlQsTyxhQXlXRixZQUFNO0FBQ3JCbUQsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEMiLCJmaWxlIjoidHN1bWFtaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRzdW1hbWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHN1bWFtaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUc3VtYW1pIHtcclxuICAjc2l6ZTtcclxuICAjdGFyZ2V0O1xyXG4gICNiZ2NvbG9yO1xyXG4gICN0bW1jb2xvcjtcclxuICAjbWJnY29sb3I7XHJcbiAgI21ldGVyU2l6ZTtcclxuICAjZGVncmVlO1xyXG4gICNzY2FsZTtcclxuICAjbWluO1xyXG4gICNtYXg7XHJcbiAgI29iajtcclxuICAjbWNvbG9yO1xyXG4gICNwb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgIHNldHRpbmdzID0gKHNldHRpbmdzID09PSB1bmRlZmluZWQpID8ge30gOiBzZXR0aW5ncztcclxuICAgIHRoaXMuI3NpemUgPSBzZXR0aW5ncy5zaXplIHx8IDEwMDsgLy/jgrXjgqTjgrpcclxuICAgIHRoaXMuI3RhcmdldCA9IHNldHRpbmdzLnRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzdW1hbWlcIik7IC8v44K/44O844Ky44OD44OIXHJcbiAgICB0aGlzLiNiZ2NvbG9yID0gc2V0dGluZ3MuYmdjb2xvciB8fCBcInJlZFwiOyAvL+iDjOaZr+iJslxyXG4gICAgdGhpcy4jdG1tY29sb3IgPSBzZXR0aW5ncy50bW1jb2xvciB8fCBcInllbGxvd1wiOyAvL+OBpOOBvuOBv+iJslxyXG4gICAgdGhpcy4jbWJnY29sb3IgPSBzZXR0aW5ncy5tYmdjb2xvciB8fCBcImJsYWNrXCI7IC8v44Oh44O844K/44O86IOM5pmv6ImyXHJcbiAgICB0aGlzLiNtZXRlclNpemUgPSBzZXR0aW5ncy5tZXRlclNpemUgfHwgMTA7IC8v44Oh44O844K/44O85bmFXHJcbiAgICB0aGlzLiNkZWdyZWUgPSBzZXR0aW5ncy5kZWdyZWUgfHwgMjcwOyAvL+ODoeODvOOCv+ODvOihqOekuuW5hVxyXG4gICAgdGhpcy4jc2NhbGUgPSBzZXR0aW5ncy5zY2FsZSB8fCAxLjI7IC8v44Oh44O844K/44O844K544Kx44O844OrICAgICAgICAgVG8gRG9cclxuICAgIHRoaXMuI21pbiA9IHNldHRpbmdzLm1pbiB8fCAwOyAvL+acgOWwj+WApFxyXG4gICAgdGhpcy4jbWF4ID0gc2V0dGluZ3MubWF4IHx8IDEwMDsgLy8g5pyA5aSn5YCkXHJcbiAgICB0aGlzLiNvYmogPSBzZXR0aW5ncy5vYmogfHwgXCJcIjsgLy/lgKTjgpLlj5bjgovlpInmlbBcclxuICAgIHRoaXMuI21jb2xvciA9IHNldHRpbmdzLm1jb2xvciB8fCBcImJsdWVcIjsgLy/jg6Hjg7zjgr/jg7zjga7oibJcclxuICAgIHRoaXMuI3BvaW50ID0gc2V0dGluZ3MucG9pbnQgfHwgXCJwdXJwbGVcIjsgLy/jg53jgqTjg7Pjg4jjga7oibJcclxuXHJcbiAgICAvLyB0aGlzLnZhbHVlID0gdGhpcy4jbWluOyAvL+WIneacn+WApFxyXG5cclxuICAgIHRoaXMuI2NyZWF0ZVRhZygpO1xyXG5cclxuICAgIHRoaXMuI21haW4oKTtcclxuICB9XHJcblxyXG4gICNjcmVhdGVUYWcgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm1ldGVyYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMucGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRoaXMubWV0ZXJiZ2hvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWV0ZXJiZ2hvbGVvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMudHN1bWFtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5wb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyQmcgPSBbXTtcclxuICAgIHRoaXMuc2xpY2VNZXRlckJnQ29udGVudHMgPSBbXTtcclxuICAgIHRoaXMuc2xpY2VNZXRlciA9IFtdO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyQ29udGVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gICNtYWluID0gKCkgPT4ge1xyXG4gICAgLy8g5aSW5p6gXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy4jdGFyZ2V0LCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jYmdjb2xvclxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44O86IOM5pmvXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmJnLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNtYmdjb2xvcixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlcmJnXCIsIHRoaXMuI3RhcmdldCk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZIG9yIOODoeODvOOCv+ODvOmDqOOBruaeoFxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucGllLCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIG92ZXJmbG93OlwiaGlkZGVuXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgICB0b3A6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyXCIsIHRoaXMubWV0ZXJiZyk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgICB0aGlzLiNjcmVhdGVzbGljZU1ldGVyQmcodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jg7zjgpLooajnpLrjgZnjgovmiYflvaLkvZzmiJDkvZzmiJBcclxuICAgIHRoaXMuI2NyZWF0ZXNsaWNlTWV0ZXIodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDlhoXlhoZcclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1ldGVyYmdob2xlLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlIC0gdGhpcy4jbWV0ZXJTaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUgLSB0aGlzLiNtZXRlclNpemUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZVwiLCB0aGlzLm1ldGVyYmcpO1xyXG5cclxuICAgIC8vIOWkluWGhlxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXJiZ2hvbGVvdXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgYm9yZGVyOiB0aGlzLiN3aGlsZVNwYWNlKFtcInNvbGlkXCIsIHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvIDIpLCB0aGlzLiNiZ2NvbG9yXSksXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW1widHJhbnNsYXRlWCgtNTAlKVwiLCBcInRyYW5zbGF0ZVkoLTUwJSlcIl0pLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZS1vdXRcIiwgdGhpcy5tZXRlcmJnKTtcclxuXHJcbiAgICAvLyDjgaTjgb7jgb9cclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnRzdW1hbWksIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyAyKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gMiksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI3RtbWNvbG9yLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy4jcm90YXRlKHRoaXMuI2RlZ3JlZSAvIC0yKSxcclxuICAgIH0sIFwidHN1bWFtaS1pbm5lclwiLCB0aGlzLiN0YXJnZXQpO1xyXG5cclxuICAgIC8vIOmHnVxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucG9pbnQsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNwb2ludCxcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXHJcbiAgICB9LCBcInRzdW1hbWktcG9pbnRcIiwgdGhpcy50c3VtYW1pKTtcclxuXHJcbiAgICAvL+OCpOODmeODs+ODiOi/veWKoFxyXG4gICAgdGhpcy4jZXZlbnRBZGQodGhpcy50c3VtYW1pKTtcclxuICB9XHJcblxyXG4gIC8vY2VudGVyXHJcbiAgI3N0eWxlQ2VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIGNzc+S7mOS4jlxyXG4gICNhZGRTdHlsZUVsZW1lbnQgPSAoZWxlbWVudCwgc3R5bGUsIGNsYXNzTmFtZSA9IHVuZGVmaW5lZCwgdGFyZ2V0ID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB2b2lkIDApIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHN0eWxlLmNlbnRlcikgc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuI3N0eWxlQ2VudGVyKCksIHN0eWxlKTtcclxuICAgIGRlbGV0ZSBzdHlsZS5jZW50ZXI7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQgIT09IHZvaWQgMCkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgI21ldGVyU3R5bGUgPSB7XHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI1MCVcIixcclxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwJSAxMDAlXCIsXHJcbiAgfVxyXG5cclxuICAjbWV0ZXJDb250ZW50U3R5bGUgPSB7XHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGxlZnQ6IFwiLTEwMCVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIHdpZHRoOiBcIjIwMCVcIiwgaGVpZ2h0OiBcIjIwMCVcIixcclxuICB9XHJcblxyXG4gIC8vIOODoeODvOOCv+OCkumaoOOBmeaJh+W9ouS9nOaIkFxyXG4gICNjcmVhdGVzbGljZU1ldGVyQmcgPSAoZGVncmVlKSA9PiB7XHJcbiAgICBkZWdyZWUgPSAoZGVncmVlID4gMzYwKSA/IDAgOiAzNjAgLSBkZWdyZWU7XHJcbiAgICBjb25zdCBiZiA9IChkZWdyZWUgJSA5MCA9PTApPzA6MTtcclxuICAgIGNvbnN0IG51bSA9IGRlZ3JlZSAvIDkwICsgYmY7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgIGxldCBkZWdyZWVQaWVjZSA9IDA7XHJcbiAgICAgIGlmKGRlZ3JlZSA9PSAwKXtcclxuICAgICAgICB0aGlzLnNsaWNlTWV0ZXJCZ1tpXSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zbGljZU1ldGVyQmdDb250ZW50c1tpXSA9IFwiXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1lbHNlIGlmIChkZWdyZWUgPj0gOTApIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IDkwO1xyXG4gICAgICAgIGRlZ3JlZSAtPSA5MDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IGRlZ3JlZTtcclxuICAgICAgICBkZWdyZWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpY2VNZXRlckJnW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICB0aGlzLnNsaWNlTWV0ZXJCZ0NvbnRlbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VNZXRlckJnW2ldLCB7XHJcbiAgICAgICAgLi4udGhpcy4jbWV0ZXJTdHlsZSxcclxuICAgICAgICB0b3A6IDAsIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jd2hpbGVTcGFjZShbdGhpcy4jcm90YXRlKGRlZ3JlZVBpZWNlIC8gKC0yKSArIDE4MCAtIGkgKiA0NSArIGRlZ3JlZSAvIDIpLCB0aGlzLiNza2V3WSgtOTAgKyBkZWdyZWVQaWVjZSldKSxcclxuICAgICAgfSwgXCJzbGljZU1ldGVyQmdcIiwgdGhpcy5waWUpO1xyXG5cclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VNZXRlckJnQ29udGVudHNbaV0sIHtcclxuICAgICAgICAuLi50aGlzLiNtZXRlckNvbnRlbnRTdHlsZSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jc2tld1koOTAgLSBkZWdyZWVQaWVjZSksXHJcbiAgICAgIH0sIFwic2xpY2VNZXRlckJnLWNvbnRlbnRzXCIsIHRoaXMuc2xpY2VNZXRlckJnW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOODoeODvOOCv+ODvOS9nOaIkFxyXG4gICNjcmVhdGVzbGljZU1ldGVyID0gKGRlZ3JlZSkgPT4ge1xyXG4gICAgY29uc3QgYmYgPSAoZGVncmVlICUgOTAgPT0wKT8wOjE7XHJcbiAgICBjb25zdCBudW0gPSBkZWdyZWUgLyA5MCArIGJmO1xyXG4gICAgZGVncmVlID0gKGRlZ3JlZSA+IDM2MCkgPyAwIDogMzYwIC0gZGVncmVlO1xyXG4gICAgdmFyIHRyID0gW1xyXG4gICAgICB7dG9wOnRoaXMuI3B4KDApLHJpZ2h0OnRoaXMuI3B4KC0xKX0sXHJcbiAgICAgIHt0b3A6dGhpcy4jcHgoMSkscmlnaHQ6dGhpcy4jcHgoMCl9LFxyXG4gICAgICB7dG9wOnRoaXMuI3B4KDApLHJpZ2h0OnRoaXMuI3B4KDEpfSxcclxuICAgICAge3RvcDp0aGlzLiNweCgtMSkscmlnaHQ6dGhpcy4jcHgoMCl9LFxyXG4gICAgXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgdGhpcy5zbGljZU1ldGVyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICB0aGlzLnNsaWNlTWV0ZXJDb250ZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnNsaWNlTWV0ZXJbaV0sIHtcclxuICAgICAgICAuLi50aGlzLiNtZXRlclN0eWxlLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jd2hpbGVTcGFjZShbdGhpcy4jcm90YXRlKDE4MCArIDkwICogaSArIGRlZ3JlZSAvIDIpLCB0aGlzLiNza2V3WSgtOTApXSksXHJcbiAgICAgICAgLi4udHJbaV1cclxuICAgICAgfSwgXCJzbGljZU1ldGVyXCIsIHRoaXMucGllKTtcclxuXHJcbiAgICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnNsaWNlTWV0ZXJDb250ZW50c1tpXSwge1xyXG4gICAgICAgIC4uLnRoaXMuI21ldGVyQ29udGVudFN0eWxlLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuI21jb2xvcixcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuI3NrZXdZKDkwKSxcclxuICAgICAgfSwgXCJzbGljZU1ldGVyLWNvbnRlbnRzXCIsIHRoaXMuc2xpY2VNZXRlcltpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDjg57jgqbjgrnmk43kvZxcclxuICAjZXZlbnRBZGQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuI21lbW9yeVkgPSAwO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLiNPbk1vdXNlRG93biwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuI09uTW91c2VNb3ZlKGUsIGVsZW1lbnQpXHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuI09uTW91c2VVcCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgI2NsaWNrO1xyXG4gICNtZW1vcnlZO1xyXG4gICNPbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSB0cnVlO1xyXG4gICAgdGhpcy4jbWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vdXNlRG93blwiKTtcclxuICB9XHJcblxyXG4gICNPbk1vdXNlTW92ZSA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuI2NsaWNrKSB7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZURlZ3JlZUJlZm9yZSA9IHRoaXMuI3JldHVyblRyYW5zZm9ybVZhbHVlKGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLFwicm90YXRlXCIpO1xyXG4gICAgICBsZXQgcm90YXRlRGVncmVlQWZ0ZXIgPSByb3RhdGVEZWdyZWVCZWZvcmUgKyAoZXZlbnQuY2xpZW50WSAtIHRoaXMuI21lbW9yeVkpICogMztcclxuICAgICAgaWYgKHJvdGF0ZURlZ3JlZUFmdGVyIDwgLXRoaXMuI2RlZ3JlZSAvIDIpIHtcclxuICAgICAgICByb3RhdGVEZWdyZWVBZnRlciA9IC10aGlzLiNkZWdyZWUgLyAyO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvdGF0ZURlZ3JlZUFmdGVyID4gdGhpcy4jZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gdGhpcy4jZGVncmVlIC8gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGVnVmFsdWUgPSB0aGlzLiNsaW1pdChyb3RhdGVEZWdyZWVBZnRlciwgLXRoaXMuI2RlZ3JlZSAvIDIsIHRoaXMuI2RlZ3JlZSAvIDIpO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuI3JvdGF0ZShkZWdWYWx1ZSk7XHJcbiAgICAgIHRoaXMuI21lbW9yeVkgPSBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgdGhpcy4jcm90YXRlTWV0ZXIocm90YXRlRGVncmVlQWZ0ZXIgKyB0aGlzLiNkZWdyZWUgLyAyLHRoaXMuc2xpY2VNZXRlcix0aGlzLnNsaWNlTWV0ZXJDb250ZW50cyk7XHJcblxyXG4gICAgICB0aGlzLiNvdXRwdXRPYmplY3QudmFsdWUgPSAodGhpcy4jbWF4IC0gdGhpcy4jbWluKSAqIChyb3RhdGVEZWdyZWVBZnRlciArIHRoaXMuI2RlZ3JlZSAvIDIpIC8gdGhpcy4jZGVncmVlO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJNb3VzZU1vdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjT25Nb3VzZVVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJNb3VzZVVwXCIpO1xyXG4gIH1cclxuXHJcbiAgLy/jgqrjg5bjgrjjgqfjgq/jg4jjgavlgKTjgpLjgrvjg4Pjg4hcclxuICAjb3V0cHV0T2JqZWN0ID0gKCgpPT57XHJcbiAgICB2YXIgdmFsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZhciBtZW1WYWx1ZSA9IDA7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAndmFsdWUnLCB7XHJcbiAgICAgIHNldDogKHZhbHVlKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuI29iaiAhPT0gXCJcIil7XHJcbiAgICAgICAgICB0aGlzLiNvYmoudmFsdWUgPSB2YWx1ZTsgLy/jgrvjg4Pjg4hcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0OiAoKT0+e3JldHVybiBtZW1WYWx1ZTt9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfSkoKTtcclxuXHJcbiAgI3JvdGF0ZU1ldGVyID0gKGRlZ3JlZSxzTSxzTUMpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGljZU1ldGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByb3RhdGVEZWcgPSAwO1xyXG4gICAgICBpZihkZWdyZWU+PTkwKXtcclxuICAgICAgICByb3RhdGVEZWcgPSA5MDtcclxuICAgICAgICBkZWdyZWUtPTkwO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByb3RhdGVEZWcgPSBkZWdyZWU7XHJcbiAgICAgICAgZGVncmVlPTA7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc21UcmFuc2Zvcm0gPSBzTVtpXS5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoXCIgXCIpO1xyXG4gICAgICBzTVtpXS5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLiN3aGlsZVNwYWNlKFtzbVRyYW5zZm9ybVswXSwgdGhpcy4jc2tld1koLTkwICsgcm90YXRlRGVnKV0pO1xyXG4gICAgICBzTUNbaV0uc3R5bGUudHJhbnNmb3JtID0gdGhpcy4jc2tld1koOTAgLSByb3RhdGVEZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY3Nz5Y2Y5L2N57O7XHJcbiAgI3B4ID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIG51bSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gICNkZWcgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtICsgXCJkZWdcIjtcclxuICB9XHJcblxyXG4gICNyb3RhdGUgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gXCJyb3RhdGUoXCIgKyB0aGlzLiNkZWcoTWF0aC5mbG9vcihudW0pKSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgI3NrZXdZID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIFwic2tld1koXCIgKyB0aGlzLiNkZWcoTWF0aC5mbG9vcihudW0pKSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgLy8gY3Nz5Y+W5b6X57O7XHJcblxyXG4gICN3aGlsZVNwYWNlID0gKG9iaikgPT4ge1xyXG4gICAgbGV0IHJldHVybk9iaiA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCB2IG9mIG9iaikge1xyXG4gICAgICByZXR1cm5PYmogKz0gdiArIFwiIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybk9iajtcclxuICB9XHJcblxyXG4gICNyZXR1cm5UcmFuc2Zvcm1WYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7XHJcbiAgICBjb25zdCB0TmFtZSA9IG5hbWUrXCIoXCI7XHJcbiAgICByZXR1cm4gKyhlbGVtZW50LnJlcGxhY2UodE5hbWUsIFwiXCIpLnJlcGxhY2UoXCJkZWcpXCIsIFwiXCIpKTtcclxuICB9XHJcblxyXG4gIC8vIOOBneOBruS7lumWouaVsFxyXG4gICNsaW1pdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcclxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICB2YWx1ZSA9IG1pbjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgdmFsdWUgPSBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyDjg4bjgrnjg4jjg63jgrBcclxuICBzdGF0aWMgdGVzdGxvZyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidGVzdGxvZ1wiKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9