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

  _createTag.set(this, {
    writable: true,
    value: function value() {
      _this.meterbg = document.createElement('div');
      _this.pie = document.createElement('ul');
      _this.meterbghole = document.createElement('div');
      _this.meterbgholeout = document.createElement('div');
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
      }); // メーター背景


      _classPrivateFieldGet(_this, _addStyleElement).call(_this, _this.meterbg, {
        center: true,
        borderRadius: "50%",
        background: _classPrivateFieldGet(_this, _mbgcolor),
        width: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale)),
        height: _classPrivateFieldGet(_this, _px).call(_this, _classPrivateFieldGet(_this, _size) / _classPrivateFieldGet(_this, _scale))
      }, "tsumami-meterbg", _classPrivateFieldGet(_this, _target)); // メータを隠す


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
      }, "tsumami-meter", _this.meterbg); // 中身


      _classPrivateFieldGet(_this, _createSlice).call(_this, _classPrivateFieldGet(_this, _degree)); // 内円


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

      for (var i = 0; i < 4; i++) {
        var degreePiece = 0;

        if (degree == 0) {
          _this.slice[i] = "";
          _this.sliceContents[i] = "";
          continue;
        } else if (degree >= 90) {
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


  _classPrivateFieldSet(this, _mbgcolor, settings.mbgcolor || "black"); //メーター背景色


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

var _mbgcolor = new WeakMap();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXJiZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBpZSIsIm1ldGVyYmdob2xlIiwibWV0ZXJiZ2hvbGVvdXQiLCJ0c3VtYW1pIiwibWFya2VyIiwic2xpY2UiLCJzbGljZUNvbnRlbnRzIiwiY2VudGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwibGVmdCIsInRvcCIsImJvcmRlciIsInRyYW5zZm9ybSIsInVzZXJTZWxlY3QiLCJzdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsInRhcmdldCIsIk9iamVjdCIsImFzc2lnbiIsImtleSIsImFwcGVuZENoaWxkIiwiZGVncmVlIiwiaSIsImRlZ3JlZVBpZWNlIiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZSIsImV2ZW50IiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJyb3RhdGVEZWdyZWVCZWZvcmUiLCJyZXBsYWNlIiwicm90YXRlRGVncmVlQWZ0ZXIiLCJkZWdWYWx1ZSIsInZhbHVlIiwidmFsIiwiY3JlYXRlIiwibWVtVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsImdldCIsIm51bSIsIk1hdGgiLCJmbG9vciIsIm9iaiIsInJldHVybk9iaiIsInYiLCJtaW4iLCJtYXgiLCJzaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZ2NvbG9yIiwidG1tY29sb3IiLCJtYmdjb2xvciIsIm1ldGVy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Z0UsR0FBVCxJQUFnQixDQUE1QixFQVZvQixDQVVXOzs7QUFDL0Isb0NBQVloRSxRQUFRLENBQUNpRSxHQUFULElBQWdCLEdBQTVCLEVBWG9CLENBV2E7OztBQUNqQyxvQ0FBWWpFLFFBQVEsQ0FBQzZELEdBQVQsSUFBZ0IsRUFBNUIsRUFab0IsQ0FjcEI7OztBQUVBOztBQUVBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWhDa0I5RCxPLGFBK1JGLFlBQU07QUFDckI4QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsQyIsImZpbGUiOiJ0c3VtYW1pLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHN1bWFtaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUc3VtYW1pXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRzdW1hbWkge1xyXG4gICNzaXplO1xyXG4gICN0YXJnZXQ7XHJcbiAgI2JnY29sb3I7XHJcbiAgI3RtbWNvbG9yO1xyXG4gICNtYmdjb2xvcjtcclxuICAjbWV0ZXJTaXplO1xyXG4gICNkZWdyZWU7XHJcbiAgI3NjYWxlO1xyXG4gICNtaW47XHJcbiAgI21heDtcclxuICAjb2JqO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xyXG4gICAgc2V0dGluZ3MgPSAoc2V0dGluZ3MgPT09IHVuZGVmaW5lZCkgPyB7fSA6IHNldHRpbmdzO1xyXG4gICAgdGhpcy4jc2l6ZSA9IHNldHRpbmdzLnNpemUgfHwgMTAwOyAvL+OCteOCpOOCulxyXG4gICAgdGhpcy4jdGFyZ2V0ID0gc2V0dGluZ3MudGFyZ2V0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHN1bWFtaVwiKTsgLy/jgr/jg7zjgrLjg4Pjg4hcclxuICAgIHRoaXMuI2JnY29sb3IgPSBzZXR0aW5ncy5iZ2NvbG9yIHx8IFwicmVkXCI7IC8v6IOM5pmv6ImyXHJcbiAgICB0aGlzLiN0bW1jb2xvciA9IHNldHRpbmdzLnRtbWNvbG9yIHx8IFwieWVsbG93XCI7IC8v44Gk44G+44G/6ImyXHJcbiAgICB0aGlzLiNtYmdjb2xvciA9IHNldHRpbmdzLm1iZ2NvbG9yIHx8IFwiYmxhY2tcIjsgLy/jg6Hjg7zjgr/jg7zog4zmma/oibJcclxuICAgIHRoaXMuI21ldGVyU2l6ZSA9IHNldHRpbmdzLm1ldGVyU2l6ZSB8fCAxMDsgLy/jg6Hjg7zjgr/jg7zluYVcclxuICAgIHRoaXMuI2RlZ3JlZSA9IHNldHRpbmdzLmRlZ3JlZSB8fCAyNzA7IC8v44Oh44O844K/44O86KGo56S65bmFXHJcbiAgICB0aGlzLiNzY2FsZSA9IHNldHRpbmdzLnNjYWxlIHx8IDEuMjsgLy/jg6Hjg7zjgr/jg7zjgrnjgrHjg7zjg6sgICAgICAgICBUbyBEb1xyXG4gICAgdGhpcy4jbWluID0gc2V0dGluZ3MubWluIHx8IDA7IC8v5pyA5bCP5YCkXHJcbiAgICB0aGlzLiNtYXggPSBzZXR0aW5ncy5tYXggfHwgMTAwOyAvLyDmnIDlpKflgKRcclxuICAgIHRoaXMuI29iaiA9IHNldHRpbmdzLm9iaiB8fCBcIlwiO1xyXG5cclxuICAgIC8vIHRoaXMudmFsdWUgPSB0aGlzLiNtaW47IC8v5Yid5pyf5YCkXHJcblxyXG4gICAgdGhpcy4jY3JlYXRlVGFnKCk7XHJcblxyXG4gICAgdGhpcy4jbWFpbigpO1xyXG4gIH1cclxuXHJcbiAgI2NyZWF0ZVRhZyA9ICgpID0+IHtcclxuICAgIHRoaXMubWV0ZXJiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5waWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdGhpcy5tZXRlcmJnaG9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5tZXRlcmJnaG9sZW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy50c3VtYW1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGljZSA9IFtdO1xyXG4gICAgdGhpcy5zbGljZUNvbnRlbnRzID0gW107XHJcbiAgfVxyXG5cclxuICAjbWFpbiA9ICgpID0+IHtcclxuICAgIC8vIOWkluaeoFxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuI3RhcmdldCwge1xyXG4gICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI2JnY29sb3JcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOODoeODvOOCv+ODvOiDjOaZr1xyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXJiZywge1xyXG4gICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jbWJnY29sb3IsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSksXHJcbiAgICB9LCBcInRzdW1hbWktbWV0ZXJiZ1wiLCB0aGlzLiN0YXJnZXQpO1xyXG5cclxuICAgIC8vIOODoeODvOOCv+OCkumaoOOBmVxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMucGllLCB7XHJcbiAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy4jcHgodGhpcy4jc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgICB0b3A6IHRoaXMuI3B4KCh0aGlzLiNzaXplIC0gdGhpcy4jc2l6ZSAvIHRoaXMuI3NjYWxlKSAvICgtMikpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLW1ldGVyXCIsIHRoaXMubWV0ZXJiZyk7XHJcblxyXG4gICAgLy8g5Lit6LqrXHJcbiAgICB0aGlzLiNjcmVhdGVTbGljZSh0aGlzLiNkZWdyZWUpO1xyXG5cclxuICAgIC8vIOWGheWGhlxyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXJiZ2hvbGUsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUgLSB0aGlzLiNtZXRlclNpemUpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSAtIHRoaXMuI21ldGVyU2l6ZSksXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuI2JnY29sb3IsXHJcbiAgICB9LCBcInRzdW1hbWktbWV0ZXJob2xlXCIsIHRoaXMubWV0ZXJiZyk7XHJcblxyXG4gICAgLy8g5aSW5YaGXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmJnaG9sZW91dCwge1xyXG4gICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLiNweCh0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyB0aGlzLiNzY2FsZSksXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwKVwiLFxyXG4gICAgICBib3JkZXI6IHRoaXMuI3doaWxlU3BhY2UoW1wic29saWRcIiwgdGhpcy4jcHgoKHRoaXMuI3NpemUgLSB0aGlzLiNzaXplIC8gdGhpcy4jc2NhbGUpIC8gMiksIHRoaXMuI2JnY29sb3JdKSxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy4jd2hpbGVTcGFjZShbXCJ0cmFuc2xhdGVYKC01MCUpXCIsIFwidHJhbnNsYXRlWSgtNTAlKVwiXSksXHJcbiAgICB9LCBcInRzdW1hbWktbWV0ZXJob2xlLW91dFwiLCB0aGlzLm1ldGVyYmcpO1xyXG5cclxuICAgIC8vIOOBpOOBvuOBv1xyXG4gICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMudHN1bWFtaSwge1xyXG4gICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy4jcHgodGhpcy4jc2l6ZSAvIDIpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuI3B4KHRoaXMuI3NpemUgLyAyKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy4jdG1tY29sb3IsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLiNyb3RhdGUodGhpcy4jZGVncmVlIC8gLTIpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLWlubmVyXCIsIHRoaXMuI3RhcmdldCk7XHJcblxyXG4gICAgLy8g6YedXHJcbiAgICB0aGlzLiNhZGRTdHlsZUVsZW1lbnQodGhpcy5tYXJrZXIsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInB1cnBsZVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMTAwJSlcIixcclxuICAgIH0sIFwidHN1bWFtaS1tYXJrZXJcIiwgdGhpcy50c3VtYW1pKTtcclxuXHJcbiAgICAvL+OCpOODmeODs+ODiOi/veWKoFxyXG4gICAgdGhpcy4jZXZlbnRBZGQodGhpcy50c3VtYW1pKTtcclxuICB9XHJcblxyXG4gIC8vY2VudGVyXHJcbiAgI3N0eWxlQ2VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIGNzc+S7mOS4jlxyXG4gICNhZGRTdHlsZUVsZW1lbnQgPSAoZWxlbWVudCwgc3R5bGUsIGNsYXNzTmFtZSA9IHVuZGVmaW5lZCwgdGFyZ2V0ID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB2b2lkIDApIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHN0eWxlLmNlbnRlcikgc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuI3N0eWxlQ2VudGVyKCksIHN0eWxlKTtcclxuICAgIGRlbGV0ZSBzdHlsZS5jZW50ZXI7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQgIT09IHZvaWQgMCkgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8g44Oh44O844K/44KS6Zqg44GZ5omH5b2i5L2c5oiQXHJcbiAgI2NyZWF0ZVNsaWNlID0gKGRlZ3JlZSkgPT4ge1xyXG4gICAgZGVncmVlID0gKGRlZ3JlZSA+IDM2MCkgPyAwIDogMzYwIC0gZGVncmVlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgbGV0IGRlZ3JlZVBpZWNlID0gMDtcclxuICAgICAgaWYoZGVncmVlID09IDApe1xyXG4gICAgICAgIHRoaXMuc2xpY2VbaV0gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2xpY2VDb250ZW50c1tpXSA9IFwiXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1lbHNlIGlmIChkZWdyZWUgPj0gOTApIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IDkwO1xyXG4gICAgICAgIGRlZ3JlZSAtPSA5MDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWdyZWVQaWVjZSA9IGRlZ3JlZTtcclxuICAgICAgICBkZWdyZWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpY2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHRoaXMuc2xpY2VDb250ZW50c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMuI2FkZFN0eWxlRWxlbWVudCh0aGlzLnNsaWNlW2ldLCB7XHJcbiAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjUwJVwiLCBoZWlnaHQ6IFwiNTAlXCIsXHJcbiAgICAgICAgdG9wOiAwLCByaWdodDogMCwgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuI3doaWxlU3BhY2UoW3RoaXMuI3JvdGF0ZShkZWdyZWVQaWVjZSAvICgtMikgKyAxODAgLSBpICogNDUgKyBkZWdyZWUgLyAyKSwgdGhpcy4jc2tld1koLTkwICsgZGVncmVlUGllY2UpXSksXHJcbiAgICAgIH0sIFwic2xpY2VcIiwgdGhpcy5waWUpO1xyXG5cclxuICAgICAgdGhpcy4jYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VDb250ZW50c1tpXSwge1xyXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBsZWZ0OiBcIi0xMDAlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjIwMCVcIiwgaGVpZ2h0OiBcIjIwMCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLiNiZ2NvbG9yLFxyXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy4jc2tld1koOTAgLSBkZWdyZWVQaWVjZSksXHJcbiAgICAgIH0sIFwic2xpY2UtY29udGVudHNcIiwgdGhpcy5zbGljZVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDjg57jgqbjgrnmk43kvZxcclxuICAjZXZlbnRBZGQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuI21lbW9yeVkgPSAwO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLiNPbk1vdXNlRG93biwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuI09uTW91c2VNb3ZlKGUsIGVsZW1lbnQpXHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuI09uTW91c2VVcCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgI2NsaWNrO1xyXG4gICNtZW1vcnlZO1xyXG4gICNPbk1vdXNlRG93biA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSB0cnVlO1xyXG4gICAgdGhpcy4jbWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vdXNlRG93blwiKTtcclxuICB9XHJcblxyXG4gICNPbk1vdXNlTW92ZSA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuI2NsaWNrKSB7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZURlZ3JlZUJlZm9yZSA9ICsoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0ucmVwbGFjZShcInJvdGF0ZShcIiwgXCJcIikucmVwbGFjZShcImRlZylcIiwgXCJcIikpO1xyXG4gICAgICBsZXQgcm90YXRlRGVncmVlQWZ0ZXIgPSByb3RhdGVEZWdyZWVCZWZvcmUgKyAoZXZlbnQuY2xpZW50WSAtIHRoaXMuI21lbW9yeVkpICogMztcclxuICAgICAgaWYgKHJvdGF0ZURlZ3JlZUFmdGVyIDwgLXRoaXMuI2RlZ3JlZSAvIDIpIHtcclxuICAgICAgICByb3RhdGVEZWdyZWVBZnRlciA9IC10aGlzLiNkZWdyZWUgLyAyO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvdGF0ZURlZ3JlZUFmdGVyID4gdGhpcy4jZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gdGhpcy4jZGVncmVlIC8gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGVnVmFsdWUgPSB0aGlzLiNsaW1pdChyb3RhdGVEZWdyZWVBZnRlciwgLXRoaXMuI2RlZ3JlZSAvIDIsIHRoaXMuI2RlZ3JlZSAvIDIpO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuI3JvdGF0ZShkZWdWYWx1ZSk7XHJcbiAgICAgIHRoaXMuI21lbW9yeVkgPSBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgdGhpcy4jb3V0cHV0T2JqZWN0LnZhbHVlID0gKHRoaXMuI21heCAtIHRoaXMuI21pbikgKiAocm90YXRlRGVncmVlQWZ0ZXIgKyB0aGlzLiNkZWdyZWUgLyAyKSAvIHRoaXMuI2RlZ3JlZTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTW91c2VNb3ZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI09uTW91c2VVcCA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy4jY2xpY2sgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91c2VVcFwiKTtcclxuICB9XHJcblxyXG4gIC8v44Kq44OW44K444Kn44Kv44OI44Gr5YCk44KS44K744OD44OIXHJcbiAgI291dHB1dE9iamVjdCA9ICgoKT0+e1xyXG4gICAgdmFyIHZhbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2YXIgbWVtVmFsdWUgPSAwO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ3ZhbHVlJywge1xyXG4gICAgICBzZXQ6ICh2YWx1ZSk9PntcclxuICAgICAgICBpZih0aGlzLiNvYmogIT09IFwiXCIpe1xyXG4gICAgICAgICAgdGhpcy4jb2JqLnZhbHVlID0gdmFsdWU7IC8v44K744OD44OIXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbVZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldDogKCk9PntyZXR1cm4gbWVtVmFsdWU7fVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH0pKCk7XHJcblxyXG4gIC8vIGNzc+WNmOS9jeezu1xyXG4gICNweCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBudW0gKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAjZGVnID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIG51bSArIFwiZGVnXCI7XHJcbiAgfVxyXG5cclxuICAjcm90YXRlID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIFwicm90YXRlKFwiICsgdGhpcy4jZGVnKE1hdGguZmxvb3IobnVtKSkgKyBcIilcIjtcclxuICB9XHJcblxyXG4gICNza2V3WSA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBcInNrZXdZKFwiICsgdGhpcy4jZGVnKE1hdGguZmxvb3IobnVtKSkgKyBcIilcIjtcclxuICB9XHJcblxyXG4gICN3aGlsZVNwYWNlID0gKG9iaikgPT4ge1xyXG4gICAgbGV0IHJldHVybk9iaiA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCB2IG9mIG9iaikge1xyXG4gICAgICByZXR1cm5PYmogKz0gdiArIFwiIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybk9iajtcclxuICB9XHJcblxyXG4gIC8vIOOBneOBruS7lumWouaVsFxyXG4gICNsaW1pdCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcclxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICB2YWx1ZSA9IG1pbjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgdmFsdWUgPSBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyDjg4bjgrnjg4jjg63jgrBcclxuICBzdGF0aWMgdGVzdGxvZyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidGVzdGxvZ1wiKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9