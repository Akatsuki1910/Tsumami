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

  _mgcolor.set(this, {
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

  _createTag.set(this, {
    writable: true,
    value: function value() {
      _this.meter = document.createElement('div');
      _this.pie = document.createElement('ul');
      _this.meterhole = document.createElement('div');
      _this.meterholeout = document.createElement('div');
      _this.tsumami = document.createElement('div');
      _this.marker = document.createElement('div');
      _this.slice = [];
      _this.sliceContents = [];
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
      }); // メーター


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meter, {
        center: true,
        borderRadius: "50%",
        background: _classPrivateFieldGet(_this, _mgcolor),
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale))
      }, "tsumami-meter", _classPrivateFieldGet(_this, _target)); // メータを隠す


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
      }, "tsumami-meter", _this.meter); // 中身


      _classPrivateFieldGet(_this, _createSlice).call(_this, _classPrivateFieldGet(_this, _degree)); // 内円


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterhole, {
        center: true,
        borderRadius: "50%",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale) - _classPrivateFieldGet(_this, _meterSize)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale) - _classPrivateFieldGet(_this, _meterSize)),
        background: _classPrivateFieldGet(_this, _bgcolor)
      }, "tsumami-meterhole", _this.meter); // 外円


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterholeout, {
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
      }, "tsumami-meterhole-out", _this.meter); // つまみ


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.tsumami, {
        center: true,
        userSelect: "none",
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / 2),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / 2),
        background: _classPrivateFieldGet(_this, _tmmcolor),
        borderRadius: "50%",
        transform: _classPrivateFieldGet(_this, _rotate).call(_this, _classPrivateFieldGet(_this, _degree) / -2)
      }, "tsumami-inner", _classPrivateFieldGet(_this, _target)); // 針


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.marker, {
        center: true,
        width: "10%",
        height: "20%",
        background: "purple",
        transform: "translateY(-100%)"
      }, "tsumami-marker", _this.tsumami); //イベント追加


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

  _createSlice.set(this, {
    writable: true,
    value: function value(degree) {
      degree = degree > 360 ? 0 : 360 - degree;
      var bf = (degree - 90 * (degree / 90)) % 90 == 0 ? 0 : 1;
      var d = degree / 90 + bf;

      for (var i = 0; i < d; i++) {
        var degreePiece = 0;

        if (degree >= 90) {
          degreePiece = 90;
          degree -= 90;
        } else {
          degreePiece = degree;
          degree = 0;
        }

        _this.slice[i] = document.createElement("li");
        _this.sliceContents[i] = document.createElement("div");

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.slice[i], {
          center: false,
          overflow: "hidden",
          position: "absolute",
          width: "50%",
          height: "50%",
          top: 0,
          right: 0,
          transformOrigin: "0% 100%",
          transform: _classPrivateFieldGet(_this, _whileSpace).call(_this, [_classPrivateFieldGet(_this, _rotate).call(_this, degreePiece / -2 + 180 - i * 45 + degree / 2), _classPrivateFieldGet(_this, _skewY).call(_this, -90 + degreePiece)])
        }, "slice", _this.pie);

        _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.sliceContents[i], {
          center: false,
          position: "absolute",
          left: "-100%",
          borderRadius: "50%",
          width: "200%",
          height: "200%",
          background: _classPrivateFieldGet(_this, _bgcolor),
          transform: _classPrivateFieldGet(_this, _skewY).call(_this, 90 - degreePiece)
        }, "slice-contents", _this.slice[i]);
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
        var rotateDegreeBefore = +element.style.transform.replace("rotate(", "").replace("deg)", "");
        var rotateDegreeAfter = rotateDegreeBefore + (event.clientY - _classPrivateFieldGet(_this, _memoryY)) * 3;

        if (rotateDegreeAfter < -_classPrivateFieldGet(_this, _degree) / 2) {
          rotateDegreeAfter = -_classPrivateFieldGet(_this, _degree) / 2;
        } else if (rotateDegreeAfter > _classPrivateFieldGet(_this, _degree) / 2) {
          rotateDegreeAfter = _classPrivateFieldGet(_this, _degree) / 2;
        }

        var degValue = _classPrivateFieldGet(_this, _limit).call(_this, rotateDegreeAfter, -_classPrivateFieldGet(_this, _degree) / 2, _classPrivateFieldGet(_this, _degree) / 2);

        element.style.transform = _classPrivateFieldGet(_this, _rotate).call(_this, degValue);

        _classPrivateFieldSet(_this, _memoryY, event.clientY);

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


  _classPrivateFieldSet(this, _mgcolor, settings.gmcolor || "black"); //メーター色


  _classPrivateFieldSet(this, _meterSize, settings.meterSize || 10); //メーター幅


  _classPrivateFieldSet(this, _degree, settings.degree || 270); //メーター表示幅


  _classPrivateFieldSet(this, _scale, settings.scale || 1.2); //メータースケール         To Do


  _classPrivateFieldSet(this, _min, settings.min || 0); //最小値


  _classPrivateFieldSet(this, _max, settings.max || 100); // 最大値


  _classPrivateFieldSet(this, _obj, settings.obj || ""); // this.value = this.#min; //初期値


  _classPrivateFieldGet(this, _createTag).call(this);

  _classPrivateFieldGet(this, _main).call(this);
};

var _size = new WeakMap();

var _target = new WeakMap();

var _bgcolor = new WeakMap();

var _tmmcolor = new WeakMap();

var _mgcolor = new WeakMap();

var _meterSize = new WeakMap();

var _degree = new WeakMap();

var _scale = new WeakMap();

var _min = new WeakMap();

var _max = new WeakMap();

var _obj = new WeakMap();

var _createTag = new WeakMap();

var _main = new WeakMap();

var _styleCenter = new WeakMap();

var _addStyleElement = new WeakMap();

var _createSlice = new WeakMap();

var _eventAdd = new WeakMap();

var _click = new WeakMap();

var _memoryY = new WeakMap();

var _OnMouseDown = new WeakMap();

var _OnMouseMove = new WeakMap();

var _OnMouseUp = new WeakMap();

var _outputObject = new WeakMap();

var _px = new WeakMap();

var _deg = new WeakMap();

var _rotate = new WeakMap();

var _skewY = new WeakMap();

var _whileSpace = new WeakMap();

var _limit = new WeakMap();

_defineProperty(Tsumami, "testlog", function () {
  console.log("testlog");
});



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwaWUiLCJtZXRlcmhvbGUiLCJtZXRlcmhvbGVvdXQiLCJ0c3VtYW1pIiwibWFya2VyIiwic2xpY2UiLCJzbGljZUNvbnRlbnRzIiwiY2VudGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwibGVmdCIsInRvcCIsImJvcmRlciIsInRyYW5zZm9ybSIsInVzZXJTZWxlY3QiLCJzdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsInRhcmdldCIsIk9iamVjdCIsImFzc2lnbiIsImtleSIsImFwcGVuZENoaWxkIiwiZGVncmVlIiwiYmYiLCJkIiwiaSIsImRlZ3JlZVBpZWNlIiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImV2ZW50IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVEZWdyZWVCZWZvcmUiLCJyZXBsYWNlIiwicm90YXRlRGVncmVlQWZ0ZXIiLCJkZWdWYWx1ZSIsInZhbHVlIiwidmFsIiwiY3JlYXRlIiwibWVtVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsImdldCIsIm51bSIsIk1hdGgiLCJmbG9vciIsIm9iaiIsInJldHVybk9iaiIsInYiLCJtaW4iLCJtYXgiLCJzaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZ2NvbG9yIiwidG1tY29sb3IiLCJnbWNvbG9yIiwibWV0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U2lCOzs7QUFDckMsb0NBQVkxRSxRQUFRLENBQUNrRSxHQUFULElBQWdCLENBQTVCLEVBVm9CLENBVVc7OztBQUMvQixvQ0FBWWxFLFFBQVEsQ0FBQ21FLEdBQVQsSUFBZ0IsR0FBNUIsRUFYb0IsQ0FXYTs7O0FBQ2pDLG9DQUFZbkUsUUFBUSxDQUFDK0QsR0FBVCxJQUFnQixFQUE1QixFQVpvQixDQWNwQjs7O0FBRUE7O0FBRUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBaENrQmhFLE8sYUFpU0YsWUFBTTtBQUNyQmdELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRCxDIiwiZmlsZSI6InRzdW1hbWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUc3VtYW1pXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRzdW1hbWlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHN1bWFtaSB7XHJcbiAgI3NpemU7XHJcbiAgI3RhcmdldDtcclxuICAjYmdjb2xvcjtcclxuICAjdG1tY29sb3I7XHJcbiAgI21nY29sb3I7XHJcbiAgI21ldGVyU2l6ZTtcclxuICAjZGVncmVlO1xyXG4gICNzY2FsZTtcclxuICAjbWluO1xyXG4gICNtYXg7XHJcbiAgI29iajtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgIHNldHRpbmdzID0gKHNldHRpbmdzID09PSB1bmRlZmluZWQpID8ge30gOiBzZXR0aW5ncztcclxuICAgIHRoaXMuI3NpemUgPSBzZXR0aW5ncy5zaXplIHx8IDEwMDsgLy/jgrXjgqTjgrpcclxuICAgIHRoaXMuI3RhcmdldCA9IHNldHRpbmdzLnRhcmdldCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzdW1hbWlcIik7IC8v44K/44O844Ky44OD44OIXHJcbiAgICB0aGlzLiNiZ2NvbG9yID0gc2V0dGluZ3MuYmdjb2xvciB8fCBcInJlZFwiOyAvL+iDjOaZr+iJslxyXG4gICAgdGhpcy4jdG1tY29sb3IgPSBzZXR0aW5ncy50bW1jb2xvciB8fCBcInllbGxvd1wiOyAvL+OBpOOBvuOBv+iJslxyXG4gICAgdGhpcy4jbWdjb2xvciA9IHNldHRpbmdzLmdtY29sb3IgfHwgXCJibGFja1wiOyAvL+ODoeODvOOCv+ODvOiJslxyXG4gICAgdGhpcy4jbWV0ZXJTaXplID0gc2V0dGluZ3MubWV0ZXJTaXplIHx8IDEwOyAvL+ODoeODvOOCv+ODvOW5hVxyXG4gICAgdGhpcy4jZGVncmVlID0gc2V0dGluZ3MuZGVncmVlIHx8IDI3MDsgLy/jg6Hjg7zjgr/jg7zooajnpLrluYVcclxuICAgIHRoaXMuI3NjYWxlID0gc2V0dGluZ3Muc2NhbGUgfHwgMS4yOyAvL+ODoeODvOOCv+ODvOOCueOCseODvOODqyAgICAgICAgIFRvIERvXHJcbiAgICB0aGlzLiNtaW4gPSBzZXR0aW5ncy5taW4gfHwgMDsgLy/mnIDlsI/lgKRcclxuICAgIHRoaXMuI21heCA9IHNldHRpbmdzLm1heCB8fCAxMDA7IC8vIOacgOWkp+WApFxyXG4gICAgdGhpcy4jb2JqID0gc2V0dGluZ3Mub2JqIHx8IFwiXCI7XHJcblxyXG4gICAgLy8gdGhpcy52YWx1ZSA9IHRoaXMuI21pbjsgLy/liJ3mnJ/lgKRcclxuXHJcbiAgICB0aGlzLiNjcmVhdGVUYWcoKTtcclxuXHJcbiAgICB0aGlzLiNtYWluKCk7XHJcbiAgfVxyXG5cclxuICAjY3JlYXRlVGFnID0gKCkgPT4ge1xyXG4gICAgdGhpcy5tZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5waWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdGhpcy5tZXRlcmhvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWV0ZXJob2xlb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnRzdW1hbWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnNsaWNlID0gW107XHJcbiAgICB0aGlzLnNsaWNlQ29udGVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gICNtYWluID0gKCkgPT4ge1xyXG4gICAgLy8g5aSW5p6gXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy4jdGFyZ2V0LCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jYmdjb2xvclxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44O8XHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlciwge1xyXG4gICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jbWdjb2xvcixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlclwiLCB0aGlzLiN0YXJnZXQpO1xyXG5cclxuICAgIC8vIOODoeODvOOCv+OCkumaoOOBmVxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucGllLCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgICB0b3A6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyXCIsIHRoaXMubWV0ZXIpO1xyXG5cclxuICAgIC8vIOS4rei6q1xyXG4gICAgdGhpcy4jY3JlYXRlU2xpY2UodGhpcy4jZGVncmVlKTtcclxuXHJcbiAgICAvLyDlhoXlhoZcclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1ldGVyaG9sZSwge1xyXG4gICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgd2lkdGg6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSAtIHRoaXMuI21ldGVyU2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlIC0gdGhpcy4jbWV0ZXJTaXplKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jYmdjb2xvcixcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlcmhvbGVcIiwgdGhpcy5tZXRlcik7XHJcblxyXG4gICAgLy8g5aSW5YaGXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmhvbGVvdXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgYm9yZGVyOiB0aGlzLiN3aGlsZVNwYWNlKFtcInNvbGlkXCIsIHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvIDIpLCB0aGlzLiNiZ2NvbG9yXSksXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW1widHJhbnNsYXRlWCgtNTAlKVwiLCBcInRyYW5zbGF0ZVkoLTUwJSlcIl0pLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyaG9sZS1vdXRcIiwgdGhpcy5tZXRlcik7XHJcblxyXG4gICAgLy8g44Gk44G+44G/XHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy50c3VtYW1pLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplIC8gMiksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLiN0bW1jb2xvcixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuI3JvdGF0ZSh0aGlzLiNkZWdyZWUgLyAtMiksXHJcbiAgICB9LCBcInRzdW1hbWktaW5uZXJcIiwgdGhpcy4jdGFyZ2V0KTtcclxuXHJcbiAgICAvLyDph51cclxuICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLm1hcmtlciwge1xyXG4gICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMjAlXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicHVycGxlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1hcmtlclwiLCB0aGlzLnRzdW1hbWkpO1xyXG5cclxuICAgIC8v44Kk44OZ44Oz44OI6L+95YqgXHJcbiAgICB0aGlzLiNldmVudEFkZCh0aGlzLnRzdW1hbWkpO1xyXG4gIH1cclxuXHJcbiAgLy9jZW50ZXJcclxuICAjc3R5bGVDZW50ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgLy8gY3Nz5LuY5LiOXHJcbiAgI2FkZFN0eWxlRWxlbWVudCA9IChlbGVtZW50LCBzdHlsZSwgY2xhc3NOYW1lID0gdW5kZWZpbmVkLCB0YXJnZXQgPSB1bmRlZmluZWQpID0+IHtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IHZvaWQgMCkgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoc3R5bGUuY2VudGVyKSBzdHlsZSA9IE9iamVjdC5hc3NpZ24odGhpcy4jc3R5bGVDZW50ZXIoKSwgc3R5bGUpO1xyXG4gICAgZGVsZXRlIHN0eWxlLmNlbnRlcjtcclxuICAgIGZvciAobGV0IGtleSBpbiBzdHlsZSkge1xyXG4gICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCAhPT0gdm9pZCAwKSB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyDjg6Hjg7zjgr/jgpLpmqDjgZnmiYflvaLkvZzmiJBcclxuICAjY3JlYXRlU2xpY2UgPSAoZGVncmVlKSA9PiB7XHJcbiAgICBkZWdyZWUgPSAoZGVncmVlID4gMzYwKSA/IDAgOiAzNjAgLSBkZWdyZWU7XHJcbiAgICBjb25zdCBiZiA9ICgoZGVncmVlIC0gOTAgKiAoZGVncmVlIC8gOTApKSAlIDkwID09IDApID8gMCA6IDE7XHJcbiAgICBjb25zdCBkID0gZGVncmVlIC8gOTAgKyBiZjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XHJcbiAgICAgIGxldCBkZWdyZWVQaWVjZSA9IDA7XHJcbiAgICAgIGlmIChkZWdyZWUgPj0gOTApIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IDkwO1xyXG4gICAgICAgIGRlZ3JlZSAtPSA5MDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IGRlZ3JlZTtcclxuICAgICAgICBkZWdyZWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpY2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHRoaXMuc2xpY2VDb250ZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnNsaWNlW2ldLCB7XHJcbiAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1MCVcIixcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW3RoaXMuI3JvdGF0ZShkZWdyZWVQaWVjZSAvICgtMikgKyAxODAgLSBpICogNDUgKyBkZWdyZWUgLyAyKSwgdGhpcy4jc2tld1koLTkwICsgZGVncmVlUGllY2UpXSksXHJcbiAgICAgIH0sIFwic2xpY2VcIiwgdGhpcy5waWUpO1xyXG5cclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VDb250ZW50c1tpXSwge1xyXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBsZWZ0OiBcIi0xMDAlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjIwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuI2JnY29sb3IsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLiNza2V3WSg5MCAtIGRlZ3JlZVBpZWNlKSxcclxuICAgICAgfSwgXCJzbGljZS1jb250ZW50c1wiLCB0aGlzLnNsaWNlW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOODnuOCpuOCueaTjeS9nFxyXG4gICNldmVudEFkZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IGZhbHNlO1xyXG4gICAgdGhpcy4jbWVtb3J5WSA9IDA7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuI09uTW91c2VEb3duLCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy4jT25Nb3VzZU1vdmUoZSwgZWxlbWVudClcclxuICAgIH0sIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy4jT25Nb3VzZVVwLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAjY2xpY2s7XHJcbiAgI21lbW9yeVk7XHJcbiAgI09uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IHRydWU7XHJcbiAgICB0aGlzLiNtZW1vcnlZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91c2VEb3duXCIpO1xyXG4gIH1cclxuXHJcbiAgI09uTW91c2VNb3ZlID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy4jY2xpY2spIHtcclxuICAgICAgY29uc3Qgcm90YXRlRGVncmVlQmVmb3JlID0gKyhlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKFwicm90YXRlKFwiLCBcIlwiKS5yZXBsYWNlKFwiZGVnKVwiLCBcIlwiKSk7XHJcbiAgICAgIGxldCByb3RhdGVEZWdyZWVBZnRlciA9IHJvdGF0ZURlZ3JlZUJlZm9yZSArIChldmVudC5jbGllbnRZIC0gdGhpcy4jbWVtb3J5WSkgKiAzO1xyXG4gICAgICBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPCAtdGhpcy4jZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gLXRoaXMuI2RlZ3JlZSAvIDI7XHJcbiAgICAgIH0gZWxzZSBpZiAocm90YXRlRGVncmVlQWZ0ZXIgPiB0aGlzLiNkZWdyZWUgLyAyKSB7XHJcbiAgICAgICAgcm90YXRlRGVncmVlQWZ0ZXIgPSB0aGlzLiNkZWdyZWUgLyAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkZWdWYWx1ZSA9IHRoaXMuI2xpbWl0KHJvdGF0ZURlZ3JlZUFmdGVyLCAtdGhpcy4jZGVncmVlIC8gMiwgdGhpcy4jZGVncmVlIC8gMik7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy4jcm90YXRlKGRlZ1ZhbHVlKTtcclxuICAgICAgdGhpcy4jbWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICB0aGlzLiNvdXRwdXRPYmplY3QudmFsdWUgPSAodGhpcy4jbWF4IC0gdGhpcy4jbWluKSAqIChyb3RhdGVEZWdyZWVBZnRlciArIHRoaXMuI2RlZ3JlZSAvIDIpIC8gdGhpcy4jZGVncmVlO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJNb3VzZU1vdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjT25Nb3VzZVVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLiNjbGljayA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2coXCJNb3VzZVVwXCIpO1xyXG4gIH1cclxuXHJcbiAgLy/jgqrjg5bjgrjjgqfjgq/jg4jjgavlgKTjgpLjgrvjg4Pjg4hcclxuICAjb3V0cHV0T2JqZWN0ID0gKCgpPT57XHJcbiAgICB2YXIgdmFsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZhciBtZW1WYWx1ZSA9IDA7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAndmFsdWUnLCB7XHJcbiAgICAgIHNldDogKHZhbHVlKT0+e1xyXG4gICAgICAgIGlmKHRoaXMuI29iaiAhPT0gXCJcIil7XHJcbiAgICAgICAgICB0aGlzLiNvYmoudmFsdWUgPSB2YWx1ZTsgLy/jgrvjg4Pjg4hcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0OiAoKT0+e3JldHVybiBtZW1WYWx1ZTt9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfSkoKTtcclxuXHJcbiAgLy8gY3Nz5Y2Y5L2N57O7XHJcbiAgI3B4ID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIG51bSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gICNkZWcgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtICsgXCJkZWdcIjtcclxuICB9XHJcblxyXG4gICNyb3RhdGUgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gXCJyb3RhdGUoXCIgKyB0aGlzLiNkZWcoTWF0aC5mbG9vcihudW0pKSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgI3NrZXdZID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIFwic2tld1koXCIgKyB0aGlzLiNkZWcoTWF0aC5mbG9vcihudW0pKSArIFwiKVwiO1xyXG4gIH1cclxuXHJcbiAgI3doaWxlU3BhY2UgPSAob2JqKSA9PiB7XHJcbiAgICBsZXQgcmV0dXJuT2JqID0gXCJcIjtcclxuICAgIGZvciAobGV0IHYgb2Ygb2JqKSB7XHJcbiAgICAgIHJldHVybk9iaiArPSB2ICsgXCIgXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0dXJuT2JqO1xyXG4gIH1cclxuXHJcbiAgLy8g44Gd44Gu5LuW6Zai5pWwXHJcbiAgI2xpbWl0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICB2YWx1ZSA9IG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIOODhuOCueODiOODreOCsFxyXG4gIHN0YXRpYyB0ZXN0bG9nID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0bG9nXCIpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=