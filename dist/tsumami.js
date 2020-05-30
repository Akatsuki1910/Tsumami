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


  _classPrivateFieldSet(this, _scale, settings.scale || 1.2); //メータースケール


  _classPrivateFieldSet(this, _min, settings.min || 0); //最小値


  _classPrivateFieldSet(this, _max, settings.max || 100); // 最大値


  _classPrivateFieldSet(this, _obj, settings.obj || ""); //値を取る変数


  _classPrivateFieldSet(this, _mcolor, settings.mcolor || "blue"); //メーターの色


  _classPrivateFieldSet(this, _point, settings.point || "purple"); //ポイントの色


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXJiZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBpZSIsIm1ldGVyYmdob2xlIiwibWV0ZXJiZ2hvbGVvdXQiLCJ0c3VtYW1pIiwicG9pbnQiLCJzbGljZU1ldGVyQmciLCJzbGljZU1ldGVyQmdDb250ZW50cyIsInNsaWNlTWV0ZXIiLCJzbGljZU1ldGVyQ29udGVudHMiLCJjZW50ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicGFkZGluZyIsIm1hcmdpbiIsImxlZnQiLCJ0b3AiLCJib3JkZXIiLCJ0cmFuc2Zvcm0iLCJ1c2VyU2VsZWN0Iiwic3R5bGUiLCJyaWdodCIsImJvdHRvbSIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJ0YXJnZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXkiLCJhcHBlbmRDaGlsZCIsInRyYW5zZm9ybU9yaWdpbiIsImRlZ3JlZSIsImJmIiwibnVtIiwiaSIsImRlZ3JlZVBpZWNlIiwidHIiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImV2ZW50IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVEZWdyZWVCZWZvcmUiLCJyb3RhdGVEZWdyZWVBZnRlciIsImRlZ1ZhbHVlIiwidmFsdWUiLCJ2YWwiLCJjcmVhdGUiLCJtZW1WYWx1ZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZ2V0Iiwic00iLCJzTUMiLCJsZW5ndGgiLCJyb3RhdGVEZWciLCJzbVRyYW5zZm9ybSIsInNwbGl0IiwiTWF0aCIsImZsb29yIiwib2JqIiwicmV0dXJuT2JqIiwidiIsIm5hbWUiLCJ0TmFtZSIsInJlcGxhY2UiLCJtaW4iLCJtYXgiLCJzaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZ2NvbG9yIiwidG1tY29sb3IiLCJtYmdjb2xvciIsIm1ldGVyU2l6ZSIsInNjYWxlIiwibWNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsTyxHQWVuQixpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtB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TG9CLENBSzRCOzs7QUFDaEQseUNBQWlCakYsUUFBUSxDQUFDa0YsUUFBVCxJQUFxQixPQUF0QyxFQU5vQixDQU0yQjs7O0FBQy9DLDBDQUFrQmxGLFFBQVEsQ0FBQ21GLFNBQVQsSUFBc0IsRUFBeEMsRUFQb0IsQ0FPd0I7OztBQUM1Qyx1Q0FBZW5GLFFBQVEsQ0FBQ3VDLE1BQVQsSUFBbUIsR0FBbEMsRUFSb0IsQ0FRbUI7OztBQUN2QyxzQ0FBY3ZDLFFBQVEsQ0FBQ29GLEtBQVQsSUFBa0IsR0FBaEMsRUFUb0IsQ0FTaUI7OztBQUNyQyxvQ0FBWXBGLFFBQVEsQ0FBQzRFLEdBQVQsSUFBZ0IsQ0FBNUIsRUFWb0IsQ0FVVzs7O0FBQy9CLG9DQUFZNUUsUUFBUSxDQUFDNkUsR0FBVCxJQUFnQixHQUE1QixFQVhvQixDQVdhOzs7QUFDakMsb0NBQVk3RSxRQUFRLENBQUNzRSxHQUFULElBQWdCLEVBQTVCLEVBWm9CLENBWVk7OztBQUNoQyx1Q0FBZXRFLFFBQVEsQ0FBQ3FGLE1BQVQsSUFBbUIsTUFBbEMsRUFib0IsQ0Fhc0I7OztBQUMxQyxzQ0FBY3JGLFFBQVEsQ0FBQ1EsS0FBVCxJQUFrQixRQUFoQyxFQWRvQixDQWNzQjs7O0FBRTFDOztBQUVBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbENrQlQsTyxhQXNYRixZQUFNO0FBQ3JCbUQsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEMiLCJmaWxlIjoidHN1bWFtaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRzdW1hbWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHN1bWFtaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUc3VtYW1pIHtcclxuICAjc2l6ZTtcclxuICAjdGFyZ2V0O1xyXG4gICNiZ2NvbG9yO1xyXG4gICN0bW1jb2xvcjtcclxuICAjbWJnY29sb3I7XHJcbiAgI21ldGVyU2l6ZTtcclxuICAjZGVncmVlO1xyXG4gICNzY2FsZTtcclxuICAjbWluO1xyXG4gICNtYXg7XHJcbiAgI29iajtcclxuICAjbWNvbG9yO1xyXG4gICNwb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgIHNldHRpbmdzID0gKHNldHRpbmdzID09PSB1bmRlZmluZWQpID8ge30gOiBzZXR0aW5ncztcclxuICAgIHRoaXMuI3NpemUgPSBzZXR0aW5ncy5zaXplIHx8IDEwMDsgLy/jgrXjgqTjgrpcclxuICAgIHRoaXMuI3RhcmdldCA9IHNldHRpbmdzLnRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzdW1hbWlcIik7IC8v44K/44O844Ky44OD44OIXHJcbiAgICB0aGlzLiNiZ2NvbG9yID0gc2V0dGluZ3MuYmdjb2xvciB8fCBcInJlZFwiOyAvL+iDjOaZr+iJslxyXG4gICAgdGhpcy4jdG1tY29sb3IgPSBzZXR0aW5ncy50bW1jb2xvciB8fCBcInllbGxvd1wiOyAvL+OBpOOBvuOBv+iJslxyXG4gICAgdGhpcy4jbWJnY29sb3IgPSBzZXR0aW5ncy5tYmdjb2xvciB8fCBcImJsYWNrXCI7IC8v44Oh44O844K/44O86IOM5pmv6ImyXHJcbiAgICB0aGlzLiNtZXRlclNpemUgPSBzZXR0aW5ncy5tZXRlclNpemUgfHwgMTA7IC8v44Oh44O844K/44O85bmFXHJcbiAgICB0aGlzLiNkZWdyZWUgPSBzZXR0aW5ncy5kZWdyZWUgfHwgMjcwOyAvL+ODoeODvOOCv+ODvOihqOekuuW5hVxyXG4gICAgdGhpcy4jc2NhbGUgPSBzZXR0aW5ncy5zY2FsZSB8fCAxLjI7IC8v44Oh44O844K/44O844K544Kx44O844OrXHJcbiAgICB0aGlzLiNtaW4gPSBzZXR0aW5ncy5taW4gfHwgMDsgLy/mnIDlsI/lgKRcclxuICAgIHRoaXMuI21heCA9IHNldHRpbmdzLm1heCB8fCAxMDA7IC8vIOacgOWkp+WApFxyXG4gICAgdGhpcy4jb2JqID0gc2V0dGluZ3Mub2JqIHx8IFwiXCI7IC8v5YCk44KS5Y+W44KL5aSJ5pWwXHJcbiAgICB0aGlzLiNtY29sb3IgPSBzZXR0aW5ncy5tY29sb3IgfHwgXCJibHVlXCI7IC8v44Oh44O844K/44O844Gu6ImyXHJcbiAgICB0aGlzLiNwb2ludCA9IHNldHRpbmdzLnBvaW50IHx8IFwicHVycGxlXCI7IC8v44Od44Kk44Oz44OI44Gu6ImyXHJcblxyXG4gICAgdGhpcy4jY3JlYXRlVGFnKCk7XHJcblxyXG4gICAgdGhpcy4jbWFpbigpO1xyXG4gIH1cclxuXHJcbiAgI2NyZWF0ZVRhZyA9ICgpID0+IHtcclxuICAgIHRoaXMubWV0ZXJiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5waWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdGhpcy5tZXRlcmJnaG9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5tZXRlcmJnaG9sZW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50c3VtYW1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnNsaWNlTWV0ZXJCZyA9IFtdO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyQmdDb250ZW50cyA9IFtdO1xyXG4gICAgdGhpcy5zbGljZU1ldGVyID0gW107XHJcbiAgICB0aGlzLnNsaWNlTWV0ZXJDb250ZW50cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgI21haW4gPSAoKSA9PiB7XHJcbiAgICAvLyDlpJbmnqBcclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLiN0YXJnZXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuI3B4KHRoaXMuI3NpemUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jg7zog4zmma9cclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1ldGVyYmcsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI21iZ2NvbG9yLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyYmdcIiwgdGhpcy4jdGFyZ2V0KTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jgpLpmqDjgZkgb3Ig44Oh44O844K/44O86YOo44Gu5p6gXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5waWUsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgICB0b3A6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyXCIsIHRoaXMubWV0ZXJiZyk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgICB0aGlzLiNjcmVhdGVzbGljZU1ldGVyQmcodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jg7zjgpLooajnpLrjgZnjgovmiYflvaLkvZzmiJDkvZzmiJBcclxuICAgIHRoaXMuI2NyZWF0ZXNsaWNlTWV0ZXIodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDlhoXlhoZcclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1ldGVyYmdob2xlLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlIC0gdGhpcy4jbWV0ZXJTaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUgLSB0aGlzLiNtZXRlclNpemUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZVwiLCB0aGlzLm1ldGVyYmcpO1xyXG5cclxuICAgIC8vIOWkluWGhlxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXJiZ2hvbGVvdXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgYm9yZGVyOiB0aGlzLiN3aGlsZVNwYWNlKFtcInNvbGlkXCIsIHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvIDIpLCB0aGlzLiNiZ2NvbG9yXSksXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW1widHJhbnNsYXRlWCgtNTAlKVwiLCBcInRyYW5zbGF0ZVkoLTUwJSlcIl0pLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZS1vdXRcIiwgdGhpcy5tZXRlcmJnKTtcclxuXHJcbiAgICAvLyDjgaTjgb7jgb9cclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnRzdW1hbWksIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyAyKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gMiksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI3RtbWNvbG9yLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy4jcm90YXRlKHRoaXMuI2RlZ3JlZSAvIC0yKSxcclxuICAgIH0sIFwidHN1bWFtaS1pbm5lclwiLCB0aGlzLiN0YXJnZXQpO1xyXG5cclxuICAgIC8vIOmHnVxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucG9pbnQsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNwb2ludCxcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXHJcbiAgICB9LCBcInRzdW1hbWktcG9pbnRcIiwgdGhpcy50c3VtYW1pKTtcclxuXHJcbiAgICAvL+OCpOODmeODs+ODiOi/veWKoFxyXG4gICAgdGhpcy4jZXZlbnRBZGQodGhpcy50c3VtYW1pKTtcclxuICB9XHJcblxyXG4gIC8vY2VudGVyXHJcbiAgI3N0eWxlQ2VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIGNzc+S7mOS4jlxyXG4gICNhZGRTdHlsZUVsZW1lbnQgPSAoZWxlbWVudCwgc3R5bGUsIGNsYXNzTmFtZSA9IHVuZGVmaW5lZCwgdGFyZ2V0ID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB2b2lkIDApIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHN0eWxlLmNlbnRlcikgc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuI3N0eWxlQ2VudGVyKCksIHN0eWxlKTtcclxuICAgIGRlbGV0ZSBzdHlsZS5jZW50ZXI7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQgIT09IHZvaWQgMCkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgI21ldGVyU3R5bGUgPSB7XHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTAlXCIsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCUgMTAwJVwiLFxyXG4gIH1cclxuXHJcbiAgI21ldGVyQ29udGVudFN0eWxlID0ge1xyXG4gICAgY2VudGVyOiBmYWxzZSxcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiBcIi0xMDAlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICB3aWR0aDogXCIyMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMjAwJVwiLFxyXG4gIH1cclxuXHJcbiAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgI2NyZWF0ZXNsaWNlTWV0ZXJCZyA9IChkZWdyZWUpID0+IHtcclxuICAgIGRlZ3JlZSA9IChkZWdyZWUgPiAzNjApID8gMCA6IDM2MCAtIGRlZ3JlZTtcclxuICAgIGNvbnN0IGJmID0gKGRlZ3JlZSAlIDkwID09IDApID8gMCA6IDE7XHJcbiAgICBjb25zdCBudW0gPSBkZWdyZWUgLyA5MCArIGJmO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICBsZXQgZGVncmVlUGllY2UgPSAwO1xyXG4gICAgICBpZiAoZGVncmVlID09IDApIHtcclxuICAgICAgICB0aGlzLnNsaWNlTWV0ZXJCZ1tpXSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zbGljZU1ldGVyQmdDb250ZW50c1tpXSA9IFwiXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGVncmVlID49IDkwKSB7XHJcbiAgICAgICAgZGVncmVlUGllY2UgPSA5MDtcclxuICAgICAgICBkZWdyZWUgLT0gOTA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVncmVlUGllY2UgPSBkZWdyZWU7XHJcbiAgICAgICAgZGVncmVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNsaWNlTWV0ZXJCZ1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGhpcy5zbGljZU1ldGVyQmdDb250ZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnNsaWNlTWV0ZXJCZ1tpXSwge1xyXG4gICAgICAgIC4uLnRoaXMuI21ldGVyU3R5bGUsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jd2hpbGVTcGFjZShbdGhpcy4jcm90YXRlKGRlZ3JlZVBpZWNlIC8gKC0yKSArIDE4MCAtIGkgKiA0NSArIGRlZ3JlZSAvIDIpLCB0aGlzLiNza2V3WSgtOTAgKyBkZWdyZWVQaWVjZSldKSxcclxuICAgICAgfSwgXCJzbGljZU1ldGVyQmdcIiwgdGhpcy5waWUpO1xyXG5cclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VNZXRlckJnQ29udGVudHNbaV0sIHtcclxuICAgICAgICAuLi50aGlzLiNtZXRlckNvbnRlbnRTdHlsZSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jc2tld1koOTAgLSBkZWdyZWVQaWVjZSksXHJcbiAgICAgIH0sIFwic2xpY2VNZXRlckJnLWNvbnRlbnRzXCIsIHRoaXMuc2xpY2VNZXRlckJnW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOODoeODvOOCv+ODvOS9nOaIkFxyXG4gICNjcmVhdGVzbGljZU1ldGVyID0gKGRlZ3JlZSkgPT4ge1xyXG4gICAgY29uc3QgYmYgPSAoZGVncmVlICUgOTAgPT0gMCkgPyAwIDogMTtcclxuICAgIGNvbnN0IG51bSA9IGRlZ3JlZSAvIDkwICsgYmY7XHJcbiAgICBkZWdyZWUgPSAoZGVncmVlID4gMzYwKSA/IDAgOiAzNjAgLSBkZWdyZWU7XHJcbiAgICB2YXIgdHIgPSBbe1xyXG4gICAgICAgIHRvcDogdGhpcy4jcHgoMCksXHJcbiAgICAgICAgcmlnaHQ6IHRoaXMuI3B4KC0xKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdG9wOiB0aGlzLiNweCgxKSxcclxuICAgICAgICByaWdodDogdGhpcy4jcHgoMClcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRvcDogdGhpcy4jcHgoMCksXHJcbiAgICAgICAgcmlnaHQ6IHRoaXMuI3B4KDEpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0b3A6IHRoaXMuI3B4KC0xKSxcclxuICAgICAgICByaWdodDogdGhpcy4jcHgoMClcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuc2xpY2VNZXRlcltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGhpcy5zbGljZU1ldGVyQ29udGVudHNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5zbGljZU1ldGVyW2ldLCB7XHJcbiAgICAgICAgLi4udGhpcy4jbWV0ZXJTdHlsZSxcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW3RoaXMuI3JvdGF0ZSgxODAgKyA5MCAqIGkgKyBkZWdyZWUgLyAyKSwgdGhpcy4jc2tld1koLTkwKV0pLFxyXG4gICAgICAgIC4uLnRyW2ldXHJcbiAgICAgIH0sIFwic2xpY2VNZXRlclwiLCB0aGlzLnBpZSk7XHJcblxyXG4gICAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5zbGljZU1ldGVyQ29udGVudHNbaV0sIHtcclxuICAgICAgICAuLi50aGlzLiNtZXRlckNvbnRlbnRTdHlsZSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNtY29sb3IsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLiNza2V3WSg5MCksXHJcbiAgICAgIH0sIFwic2xpY2VNZXRlci1jb250ZW50c1wiLCB0aGlzLnNsaWNlTWV0ZXJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g44Oe44Km44K55pON5L2cXHJcbiAgI2V2ZW50QWRkID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuI2NsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLiNtZW1vcnlZID0gMDtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy4jT25Nb3VzZURvd24sIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLiNPbk1vdXNlTW92ZShlLCBlbGVtZW50KVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLiNPbk1vdXNlVXAsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gICNjbGljaztcclxuICAjbWVtb3J5WTtcclxuICAjT25Nb3VzZURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuI2NsaWNrID0gdHJ1ZTtcclxuICAgIHRoaXMuI21lbW9yeVkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgY29uc29sZS5sb2coXCJNb3VzZURvd25cIik7XHJcbiAgfVxyXG5cclxuICAjT25Nb3VzZU1vdmUgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmICh0aGlzLiNjbGljaykge1xyXG4gICAgICBjb25zdCByb3RhdGVEZWdyZWVCZWZvcmUgPSB0aGlzLiNyZXR1cm5UcmFuc2Zvcm1WYWx1ZShlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSwgXCJyb3RhdGVcIik7XHJcbiAgICAgIGxldCByb3RhdGVEZWdyZWVBZnRlciA9IHJvdGF0ZURlZ3JlZUJlZm9yZSArIChldmVudC5jbGllbnRZIC0gdGhpcy4jbWVtb3J5WSkgKiAzO1xyXG4gICAgICBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPCAtdGhpcy4jZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gLXRoaXMuI2RlZ3JlZSAvIDI7XHJcbiAgICAgIH0gZWxzZSBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPiB0aGlzLiNkZWdyZWUgLyAyKSB7XHJcbiAgICAgICAgcm90YXRlRGVncmVlQWZ0ZXIgPSB0aGlzLiNkZWdyZWUgLyAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkZWdWYWx1ZSA9IHRoaXMuI2xpbWl0KHJvdGF0ZURlZ3JlZUFmdGVyLCAtdGhpcy4jZGVncmVlIC8gMiwgdGhpcy4jZGVncmVlIC8gMik7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy4jcm90YXRlKGRlZ1ZhbHVlKTtcclxuICAgICAgdGhpcy4jbWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICB0aGlzLiNyb3RhdGVNZXRlcihyb3RhdGVEZWdyZWVBZnRlciArIHRoaXMuI2RlZ3JlZSAvIDIsIHRoaXMuc2xpY2VNZXRlciwgdGhpcy5zbGljZU1ldGVyQ29udGVudHMpO1xyXG5cclxuICAgICAgdGhpcy4jb3V0cHV0T2JqZWN0LnZhbHVlID0gKHRoaXMuI21heCAtIHRoaXMuI21pbikgKiAocm90YXRlRGVncmVlQWZ0ZXIgKyB0aGlzLiNkZWdyZWUgLyAyKSAvIHRoaXMuI2RlZ3JlZTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTW91c2VNb3ZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI09uTW91c2VVcCA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91c2VVcFwiKTtcclxuICB9XHJcblxyXG4gIC8v44Kq44OW44K444Kn44Kv44OI44Gr5YCk44KS44K744OD44OIXHJcbiAgI291dHB1dE9iamVjdCA9ICgoKSA9PiB7XHJcbiAgICB2YXIgdmFsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZhciBtZW1WYWx1ZSA9IDA7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAndmFsdWUnLCB7XHJcbiAgICAgIHNldDogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuI29iaiAhPT0gXCJcIikge1xyXG4gICAgICAgICAgdGhpcy4jb2JqLnZhbHVlID0gdmFsdWU7IC8v44K744OD44OIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbVZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZW1WYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH0pKCk7XHJcblxyXG4gICNyb3RhdGVNZXRlciA9IChkZWdyZWUsIHNNLCBzTUMpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGljZU1ldGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByb3RhdGVEZWcgPSAwO1xyXG4gICAgICBpZiAoZGVncmVlID49IDkwKSB7XHJcbiAgICAgICAgcm90YXRlRGVnID0gOTA7XHJcbiAgICAgICAgZGVncmVlIC09IDkwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdGF0ZURlZyA9IGRlZ3JlZTtcclxuICAgICAgICBkZWdyZWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNtVHJhbnNmb3JtID0gc01baV0uc3R5bGUudHJhbnNmb3JtLnNwbGl0KFwiIFwiKTtcclxuICAgICAgc01baV0uc3R5bGUudHJhbnNmb3JtID0gdGhpcy4jd2hpbGVTcGFjZShbc21UcmFuc2Zvcm1bMF0sIHRoaXMuI3NrZXdZKC05MCArIHJvdGF0ZURlZyldKTtcclxuICAgICAgc01DW2ldLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuI3NrZXdZKDkwIC0gcm90YXRlRGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNzc+WNmOS9jeezu1xyXG4gICNweCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBudW0gKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAjZGVnID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIG51bSArIFwiZGVnXCI7XHJcbiAgfVxyXG5cclxuICAjcm90YXRlID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIFwicm90YXRlKFwiICsgdGhpcy4jZGVnKE1hdGguZmxvb3IobnVtKSkgKyBcIilcIjtcclxuICB9XHJcblxyXG4gICNza2V3WSA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBcInNrZXdZKFwiICsgdGhpcy4jZGVnKE1hdGguZmxvb3IobnVtKSkgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIC8vIGNzc+WPluW+ly/ku5jkuI7ns7tcclxuICAjd2hpbGVTcGFjZSA9IChvYmopID0+IHtcclxuICAgIGxldCByZXR1cm5PYmogPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgdiBvZiBvYmopIHtcclxuICAgICAgcmV0dXJuT2JqICs9IHYgKyBcIiBcIjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5PYmo7XHJcbiAgfVxyXG5cclxuICAjcmV0dXJuVHJhbnNmb3JtVmFsdWUgPSAoZWxlbWVudCwgbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdE5hbWUgPSBuYW1lICsgXCIoXCI7XHJcbiAgICByZXR1cm4gKyhlbGVtZW50LnJlcGxhY2UodE5hbWUsIFwiXCIpLnJlcGxhY2UoXCJkZWcpXCIsIFwiXCIpKTtcclxuICB9XHJcblxyXG4gIC8vIOOBneOBruS7lumWouaVsFxyXG4gICNsaW1pdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcclxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICB2YWx1ZSA9IG1pbjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgdmFsdWUgPSBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyDjg4bjgrnjg4jjg63jgrBcclxuICBzdGF0aWMgdGVzdGxvZyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidGVzdGxvZ1wiKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9