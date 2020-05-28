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

var Tsumami = function Tsumami(settings) {
  var _this = this;

  _classCallCheck(this, Tsumami);

  _defineProperty(this, "createTag", function () {
    _this.meter = document.createElement('div');
    _this.pie = document.createElement('ul');
    _this.meterhole = document.createElement('div');
    _this.meterholeout = document.createElement('div');
    _this.inner = document.createElement('div');
    _this.marker = document.createElement('div');
    _this.slice = [];
    _this.sliceContents = [];
  });

  _defineProperty(this, "main", function () {
    // 外枠
    _this.addStyleElement(_this.target, {
      center: false,
      position: "relative",
      width: _this.px(_this.size),
      height: _this.px(_this.size),
      background: _this.bgcolor
    }); // メーター


    _this.addStyleElement(_this.meter, {
      center: true,
      borderRadius: "50%",
      background: _this.mgcolor,
      width: _this.px(_this.size / _this.scale),
      height: _this.px(_this.size / _this.scale)
    }, "tsumami-meter", _this.target); // メータを隠す


    _this.addStyleElement(_this.pie, {
      center: false,
      borderRadius: "50%",
      position: "absolute",
      padding: 0,
      margin: 0,
      width: _this.px(_this.size),
      height: _this.px(_this.size),
      left: _this.px((_this.size - _this.size / _this.scale) / -2),
      top: _this.px((_this.size - _this.size / _this.scale) / -2)
    }, "tsumami-meter", _this.meter); // 中身


    _this.createSlice(_this.degree); // 内円


    _this.addStyleElement(_this.meterhole, {
      center: true,
      borderRadius: "50%",
      width: _this.px(_this.size / _this.scale - _this.meterSize),
      height: _this.px(_this.size / _this.scale - _this.meterSize),
      background: _this.bgcolor
    }, "tsumami-meterhole", _this.meter); // 外円


    _this.addStyleElement(_this.meterholeout, {
      center: false,
      position: "absolute",
      borderRadius: "50%",
      width: _this.px(_this.size / _this.scale),
      height: _this.px(_this.size / _this.scale),
      background: "rgba(0,0,0,0)",
      border: _this.whileSpace(["solid", _this.px((_this.size - _this.size / _this.scale) / 2), _this.bgcolor]),
      margin: 0,
      top: "50%",
      left: "50%",
      transform: _this.whileSpace(["translateX(-50%)", "translateY(-50%)"])
    }, "tsumami-meterhole-out", _this.meter); // つまみ


    _this.addStyleElement(_this.inner, {
      center: true,
      userSelect: "none",
      width: _this.px(_this.size / 2),
      height: _this.px(_this.size / 2),
      background: _this.tmmcolor,
      borderRadius: "50%",
      transform: _this.rotate(_this.degree / -2)
    }, "tsumami-inner", _this.target); // 針


    _this.addStyleElement(_this.marker, {
      center: true,
      width: "10%",
      height: "20%",
      background: "purple",
      transform: "translateY(-100%)"
    }, "tsumami-marker", _this.inner); //イベント追加


    _this.eventAdd(_this.inner);
  });

  _defineProperty(this, "styleCenter", function () {
    var style = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: "auto"
    };
    return style;
  });

  _defineProperty(this, "addStyleElement", function (element, style) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    if (className !== void 0) element.className = className;
    if (style.center) style = Object.assign(_this.styleCenter(), style);
    delete style.center;

    for (var key in style) {
      element.style[key] = style[key];
    }

    if (target !== void 0) target.appendChild(element);
  });

  _defineProperty(this, "createSlice", function (degree) {
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

      _this.addStyleElement(_this.slice[i], {
        center: false,
        overflow: "hidden",
        position: "absolute",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        transformOrigin: "0% 100%",
        transform: _this.whileSpace([_this.rotate(degreePiece / -2 + 180 - i * 45 + degree / 2), _this.skewY(-90 + degreePiece)])
      }, "slice", _this.pie);

      _this.addStyleElement(_this.sliceContents[i], {
        center: false,
        position: "absolute",
        left: "-100%",
        borderRadius: "50%",
        width: "200%",
        height: "200%",
        background: _this.bgcolor,
        transform: _this.skewY(90 - degreePiece)
      }, "slice-contents", _this.slice[i]);
    }
  });

  _defineProperty(this, "eventAdd", function (element) {
    _this.click = false;
    _this.memoryY = 0;
    element.addEventListener('mousedown', _this.OnMouseDown, false);
    window.addEventListener('mousemove', function (e) {
      _this.OnMouseMove(e, element);
    }, false);
    window.addEventListener('mouseup', _this.OnMouseUp, false);
  });

  _defineProperty(this, "OnMouseDown", function (event) {
    _this.click = true;
    _this.memoryY = event.clientY;
    console.log("MouseDown");
  });

  _defineProperty(this, "OnMouseMove", function (event, element) {
    if (_this.click) {
      var rotateDegreeBefore = +element.style.transform.replace("rotate(", "").replace("deg)", "");
      var rotateDegreeAfter = rotateDegreeBefore + (event.clientY - _this.memoryY) * 3;

      if (rotateDegreeAfter < -_this.degree / 2) {
        rotateDegreeAfter = -_this.degree / 2;
      } else if (rotateDegreeAfter > _this.degree / 2) {
        rotateDegreeAfter = _this.degree / 2;
      }

      element.style.transform = _this.rotate(_this.limit(rotateDegreeAfter, -_this.degree / 2, _this.degree / 2));
      _this.memoryY = event.clientY;
      console.log("MouseMove");
    }
  });

  _defineProperty(this, "OnMouseUp", function (event) {
    _this.click = false;
    console.log("MouseUp");
  });

  _defineProperty(this, "px", function (num) {
    return num + "px";
  });

  _defineProperty(this, "deg", function (num) {
    return num + "deg";
  });

  _defineProperty(this, "rotate", function (num) {
    return "rotate(" + _this.deg(Math.floor(num)) + ")";
  });

  _defineProperty(this, "skewY", function (num) {
    return "skewY(" + _this.deg(Math.floor(num)) + ")";
  });

  _defineProperty(this, "whileSpace", function (obj) {
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
  });

  _defineProperty(this, "limit", function (value, min, max) {
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }

    return value;
  });

  _defineProperty(this, "testlog", function () {
    console.log("testlog");
  });

  settings = settings === undefined ? {} : settings;
  this.size = settings.size || 100; //サイズ

  this.target = settings.target || document.getElementById("tsumami"); //ターゲット

  this.bgcolor = settings.bgcolor || "red"; //背景色

  this.tmmcolor = settings.tmmcolor || "yellow"; //つまみ色

  this.mgcolor = settings.gmcolor || "black"; //メーター色

  this.meterSize = settings.meterSize || 10; //メーター幅

  this.degree = settings.degree || 270; //メーター表示幅

  this.scale = settings.scale || 1.2; //メータースケール         To Do

  this.createTag();
  this.main();
};



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Uc3VtYW1pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RzdW1hbWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVHN1bWFtaSIsInNldHRpbmdzIiwibWV0ZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwaWUiLCJtZXRlcmhvbGUiLCJtZXRlcmhvbGVvdXQiLCJpbm5lciIsIm1hcmtlciIsInNsaWNlIiwic2xpY2VDb250ZW50cyIsImFkZFN0eWxlRWxlbWVudCIsInRhcmdldCIsImNlbnRlciIsInBvc2l0aW9uIiwid2lkdGgiLCJweCIsInNpemUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYmdjb2xvciIsImJvcmRlclJhZGl1cyIsIm1nY29sb3IiLCJzY2FsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJsZWZ0IiwidG9wIiwiY3JlYXRlU2xpY2UiLCJkZWdyZWUiLCJtZXRlclNpemUiLCJib3JkZXIiLCJ3aGlsZVNwYWNlIiwidHJhbnNmb3JtIiwidXNlclNlbGVjdCIsInRtbWNvbG9yIiwicm90YXRlIiwiZXZlbnRBZGQiLCJzdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsInN0eWxlQ2VudGVyIiwia2V5IiwiYXBwZW5kQ2hpbGQiLCJiZiIsImQiLCJpIiwiZGVncmVlUGllY2UiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsInNrZXdZIiwiY2xpY2siLCJtZW1vcnlZIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9uTW91c2VEb3duIiwid2luZG93IiwiZSIsIk9uTW91c2VNb3ZlIiwiT25Nb3VzZVVwIiwiZXZlbnQiLCJjbGllbnRZIiwiY29uc29sZSIsImxvZyIsInJvdGF0ZURlZ3JlZUJlZm9yZSIsInJlcGxhY2UiLCJyb3RhdGVEZWdyZWVBZnRlciIsImxpbWl0IiwibnVtIiwiZGVnIiwiTWF0aCIsImZsb29yIiwib2JqIiwicmV0dXJuT2JqIiwidiIsInZhbHVlIiwibWluIiwibWF4IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbWNvbG9yIiwiY3JlYXRlVGFnIiwibWFpbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxPLEdBQ25CLGlCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEscUNBZ0JWLFlBQU07QUFDaEIsU0FBSSxDQUFDQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsU0FBSSxDQUFDQyxHQUFMLEdBQVdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFY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LEdBQTdCLENBRm9CLENBRWM7O0FBQ2xDLE9BQUtMLE1BQUwsR0FBY1osUUFBUSxDQUFDWSxNQUFULElBQW1CVixRQUFRLENBQUNnRixjQUFULENBQXdCLFNBQXhCLENBQWpDLENBSG9CLENBR2lEOztBQUNyRSxPQUFLOUQsT0FBTCxHQUFlcEIsUUFBUSxDQUFDb0IsT0FBVCxJQUFvQixLQUFuQyxDQUpvQixDQUlzQjs7QUFDMUMsT0FBS2UsUUFBTCxHQUFnQm5DLFFBQVEsQ0FBQ21DLFFBQVQsSUFBcUIsUUFBckMsQ0FMb0IsQ0FLMkI7O0FBQy9DLE9BQUtiLE9BQUwsR0FBZXRCLFFBQVEsQ0FBQ21GLE9BQVQsSUFBb0IsT0FBbkMsQ0FOb0IsQ0FNd0I7O0FBQzVDLE9BQUtyRCxTQUFMLEdBQWlCOUIsUUFBUSxDQUFDOEIsU0FBVCxJQUFzQixFQUF2QyxDQVBvQixDQU91Qjs7QUFDM0MsT0FBS0QsTUFBTCxHQUFjN0IsUUFBUSxDQUFDNkIsTUFBVCxJQUFtQixHQUFqQyxDQVJvQixDQVFrQjs7QUFDdEMsT0FBS04sS0FBTCxHQUFhdkIsUUFBUSxDQUFDdUIsS0FBVCxJQUFrQixHQUEvQixDQVRvQixDQVNnQjs7QUFFcEMsT0FBSzZELFNBQUw7QUFFQSxPQUFLQyxJQUFMO0FBQ0QsQyIsImZpbGUiOiJ0c3VtYW1pLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHN1bWFtaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUc3VtYW1pXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRzdW1hbWkge1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcbiAgICBzZXR0aW5ncyA9IChzZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSA/IHt9IDogc2V0dGluZ3M7XHJcbiAgICB0aGlzLnNpemUgPSBzZXR0aW5ncy5zaXplIHx8IDEwMDsgLy/jgrXjgqTjgrpcclxuICAgIHRoaXMudGFyZ2V0ID0gc2V0dGluZ3MudGFyZ2V0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHN1bWFtaVwiKTsgLy/jgr/jg7zjgrLjg4Pjg4hcclxuICAgIHRoaXMuYmdjb2xvciA9IHNldHRpbmdzLmJnY29sb3IgfHwgXCJyZWRcIjsgLy/og4zmma/oibJcclxuICAgIHRoaXMudG1tY29sb3IgPSBzZXR0aW5ncy50bW1jb2xvciB8fCBcInllbGxvd1wiOyAvL+OBpOOBvuOBv+iJslxyXG4gICAgdGhpcy5tZ2NvbG9yID0gc2V0dGluZ3MuZ21jb2xvciB8fCBcImJsYWNrXCI7IC8v44Oh44O844K/44O86ImyXHJcbiAgICB0aGlzLm1ldGVyU2l6ZSA9IHNldHRpbmdzLm1ldGVyU2l6ZSB8fCAxMDsgLy/jg6Hjg7zjgr/jg7zluYVcclxuICAgIHRoaXMuZGVncmVlID0gc2V0dGluZ3MuZGVncmVlIHx8IDI3MDsgLy/jg6Hjg7zjgr/jg7zooajnpLrluYVcclxuICAgIHRoaXMuc2NhbGUgPSBzZXR0aW5ncy5zY2FsZSB8fCAxLjI7IC8v44Oh44O844K/44O844K544Kx44O844OrICAgICAgICAgVG8gRG9cclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRhZygpO1xyXG5cclxuICAgIHRoaXMubWFpbigpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFnID0gKCkgPT4ge1xyXG4gICAgdGhpcy5tZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5waWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdGhpcy5tZXRlcmhvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMubWV0ZXJob2xlb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGljZSA9IFtdO1xyXG4gICAgdGhpcy5zbGljZUNvbnRlbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBtYWluID0gKCkgPT4ge1xyXG4gICAgLy8g5aSW5p6gXHJcbiAgICB0aGlzLmFkZFN0eWxlRWxlbWVudCh0aGlzLnRhcmdldCwge1xyXG4gICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy5weCh0aGlzLnNpemUpLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMucHgodGhpcy5zaXplKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5iZ2NvbG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg6Hjg7zjgr/jg7xcclxuICAgIHRoaXMuYWRkU3R5bGVFbGVtZW50KHRoaXMubWV0ZXIsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMubWdjb2xvcixcclxuICAgICAgd2lkdGg6IHRoaXMucHgodGhpcy5zaXplIC8gdGhpcy5zY2FsZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy5weCh0aGlzLnNpemUgLyB0aGlzLnNjYWxlKSxcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlclwiLCB0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgLy8g44Oh44O844K/44KS6Zqg44GZXHJcbiAgICB0aGlzLmFkZFN0eWxlRWxlbWVudCh0aGlzLnBpZSwge1xyXG4gICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgd2lkdGg6IHRoaXMucHgodGhpcy5zaXplKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnB4KHRoaXMuc2l6ZSksXHJcbiAgICAgIGxlZnQ6IHRoaXMucHgoKHRoaXMuc2l6ZSAtIHRoaXMuc2l6ZSAvIHRoaXMuc2NhbGUpIC8gKC0yKSksXHJcbiAgICAgIHRvcDogdGhpcy5weCgodGhpcy5zaXplIC0gdGhpcy5zaXplIC8gdGhpcy5zY2FsZSkgLyAoLTIpKSxcclxuICAgIH0sIFwidHN1bWFtaS1tZXRlclwiLCB0aGlzLm1ldGVyKTtcclxuXHJcbiAgICAvLyDkuK3ouqtcclxuICAgIHRoaXMuY3JlYXRlU2xpY2UodGhpcy5kZWdyZWUpO1xyXG5cclxuICAgIC8vIOWGheWGhlxyXG4gICAgdGhpcy5hZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmhvbGUsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIHdpZHRoOiB0aGlzLnB4KHRoaXMuc2l6ZSAvIHRoaXMuc2NhbGUgLSB0aGlzLm1ldGVyU2l6ZSksXHJcbiAgICAgIGhlaWdodDogdGhpcy5weCh0aGlzLnNpemUgLyB0aGlzLnNjYWxlIC0gdGhpcy5tZXRlclNpemUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJnY29sb3IsXHJcbiAgICB9LCBcInRzdW1hbWktbWV0ZXJob2xlXCIsIHRoaXMubWV0ZXIpO1xyXG5cclxuICAgIC8vIOWkluWGhlxyXG4gICAgdGhpcy5hZGRTdHlsZUVsZW1lbnQodGhpcy5tZXRlcmhvbGVvdXQsIHtcclxuICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB3aWR0aDogdGhpcy5weCh0aGlzLnNpemUgLyB0aGlzLnNjYWxlKSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLnB4KHRoaXMuc2l6ZSAvIHRoaXMuc2NhbGUpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgYm9yZGVyOiB0aGlzLndoaWxlU3BhY2UoW1wic29saWRcIiwgdGhpcy5weCgodGhpcy5zaXplIC0gdGhpcy5zaXplIC8gdGhpcy5zY2FsZSkgLyAyKSwgdGhpcy5iZ2NvbG9yXSksXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMud2hpbGVTcGFjZShbXCJ0cmFuc2xhdGVYKC01MCUpXCIsIFwidHJhbnNsYXRlWSgtNTAlKVwiXSksXHJcbiAgICB9LCBcInRzdW1hbWktbWV0ZXJob2xlLW91dFwiLCB0aGlzLm1ldGVyKTtcclxuXHJcbiAgICAvLyDjgaTjgb7jgb9cclxuICAgIHRoaXMuYWRkU3R5bGVFbGVtZW50KHRoaXMuaW5uZXIsIHtcclxuICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgd2lkdGg6IHRoaXMucHgodGhpcy5zaXplIC8gMiksXHJcbiAgICAgIGhlaWdodDogdGhpcy5weCh0aGlzLnNpemUgLyAyKSxcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy50bW1jb2xvcixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMucm90YXRlKHRoaXMuZGVncmVlIC8gLTIpLFxyXG4gICAgfSwgXCJ0c3VtYW1pLWlubmVyXCIsIHRoaXMudGFyZ2V0KTtcclxuXHJcbiAgICAvLyDph51cclxuICAgIHRoaXMuYWRkU3R5bGVFbGVtZW50KHRoaXMubWFya2VyLCB7XHJcbiAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIyMCVcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJwdXJwbGVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXHJcbiAgICB9LCBcInRzdW1hbWktbWFya2VyXCIsIHRoaXMuaW5uZXIpO1xyXG5cclxuICAgIC8v44Kk44OZ44Oz44OI6L+95YqgXHJcbiAgICB0aGlzLmV2ZW50QWRkKHRoaXMuaW5uZXIpO1xyXG4gIH1cclxuXHJcbiAgLy9jZW50ZXJcclxuICBzdHlsZUNlbnRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG5cclxuICAvLyBjc3Pku5jkuI5cclxuICBhZGRTdHlsZUVsZW1lbnQgPSAoZWxlbWVudCwgc3R5bGUsIGNsYXNzTmFtZSA9IHVuZGVmaW5lZCwgdGFyZ2V0ID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB2b2lkIDApIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHN0eWxlLmNlbnRlcikgc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3R5bGVDZW50ZXIoKSwgc3R5bGUpO1xyXG4gICAgZGVsZXRlIHN0eWxlLmNlbnRlcjtcclxuICAgIGZvciAobGV0IGtleSBpbiBzdHlsZSkge1xyXG4gICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCAhPT0gdm9pZCAwKSB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyDjg6Hjg7zjgr/jgpLpmqDjgZnmiYflvaLkvZzmiJBcclxuICBjcmVhdGVTbGljZSA9IChkZWdyZWUpID0+IHtcclxuICAgIGRlZ3JlZSA9IChkZWdyZWUgPiAzNjApID8gMCA6IDM2MCAtIGRlZ3JlZTtcclxuICAgIGNvbnN0IGJmID0gKChkZWdyZWUgLSA5MCAqIChkZWdyZWUgLyA5MCkpICUgOTAgPT0gMCkgPyAwIDogMTtcclxuICAgIGNvbnN0IGQgPSBkZWdyZWUgLyA5MCArIGJmO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcclxuICAgICAgbGV0IGRlZ3JlZVBpZWNlID0gMDtcclxuICAgICAgaWYgKGRlZ3JlZSA+PSA5MCkge1xyXG4gICAgICAgIGRlZ3JlZVBpZWNlID0gOTA7XHJcbiAgICAgICAgZGVncmVlIC09IDkwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlZ3JlZVBpZWNlID0gZGVncmVlO1xyXG4gICAgICAgIGRlZ3JlZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGljZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGhpcy5zbGljZUNvbnRlbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGhpcy5hZGRTdHlsZUVsZW1lbnQodGhpcy5zbGljZVtpXSwge1xyXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwJSAxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLndoaWxlU3BhY2UoW3RoaXMucm90YXRlKGRlZ3JlZVBpZWNlIC8gKC0yKSArIDE4MCAtIGkgKiA0NSArIGRlZ3JlZSAvIDIpLCB0aGlzLnNrZXdZKC05MCArIGRlZ3JlZVBpZWNlKV0pLFxyXG4gICAgICB9LCBcInNsaWNlXCIsIHRoaXMucGllKTtcclxuXHJcbiAgICAgIHRoaXMuYWRkU3R5bGVFbGVtZW50KHRoaXMuc2xpY2VDb250ZW50c1tpXSwge1xyXG4gICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBsZWZ0OiBcIi0xMDAlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjIwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjAwJVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmdjb2xvcixcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuc2tld1koOTAgLSBkZWdyZWVQaWVjZSksXHJcbiAgICAgIH0sIFwic2xpY2UtY29udGVudHNcIiwgdGhpcy5zbGljZVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDjg57jgqbjgrnmk43kvZxcclxuICBldmVudEFkZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLmNsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lbW9yeVkgPSAwO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLk9uTW91c2VEb3duLCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5Pbk1vdXNlTW92ZShlLCBlbGVtZW50KVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLk9uTW91c2VVcCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgT25Nb3VzZURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuY2xpY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5tZW1vcnlZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnNvbGUubG9nKFwiTW91c2VEb3duXCIpO1xyXG4gIH1cclxuXHJcbiAgT25Nb3VzZU1vdmUgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGlmICh0aGlzLmNsaWNrKSB7XHJcbiAgICAgIGxldCByb3RhdGVEZWdyZWVCZWZvcmUgPSArKGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnJlcGxhY2UoXCJyb3RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCJkZWcpXCIsIFwiXCIpKTtcclxuICAgICAgbGV0IHJvdGF0ZURlZ3JlZUFmdGVyID0gcm90YXRlRGVncmVlQmVmb3JlICsgKGV2ZW50LmNsaWVudFkgLSB0aGlzLm1lbW9yeVkpICogMztcclxuICAgICAgaWYgKHJvdGF0ZURlZ3JlZUFmdGVyIDwgLXRoaXMuZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gLXRoaXMuZGVncmVlIC8gMjtcclxuICAgICAgfSBlbHNlIGlmIChyb3RhdGVEZWdyZWVBZnRlciA+IHRoaXMuZGVncmVlIC8gMikge1xyXG4gICAgICAgIHJvdGF0ZURlZ3JlZUFmdGVyID0gdGhpcy5kZWdyZWUgLyAyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5yb3RhdGUodGhpcy5saW1pdChyb3RhdGVEZWdyZWVBZnRlciwgLXRoaXMuZGVncmVlIC8gMiwgdGhpcy5kZWdyZWUgLyAyKSk7XHJcbiAgICAgIHRoaXMubWVtb3J5WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTW91c2VNb3ZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgT25Nb3VzZVVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLmNsaWNrID0gZmFsc2U7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vdXNlVXBcIik7XHJcbiAgfVxyXG5cclxuICAvLyBjc3PljZjkvY3ns7tcclxuICBweCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBudW0gKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICBkZWcgPSAobnVtKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtICsgXCJkZWdcIjtcclxuICB9XHJcblxyXG4gIHJvdGF0ZSA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBcInJvdGF0ZShcIiArIHRoaXMuZGVnKE1hdGguZmxvb3IobnVtKSkgKyBcIilcIjtcclxuICB9XHJcblxyXG4gIHNrZXdZID0gKG51bSkgPT4ge1xyXG4gICAgcmV0dXJuIFwic2tld1koXCIgKyB0aGlzLmRlZyhNYXRoLmZsb29yKG51bSkpICsgXCIpXCI7XHJcbiAgfVxyXG5cclxuICB3aGlsZVNwYWNlID0gKG9iaikgPT4ge1xyXG4gICAgbGV0IHJldHVybk9iaiA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCB2IG9mIG9iaikge1xyXG4gICAgICByZXR1cm5PYmogKz0gdiArIFwiIFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybk9iajtcclxuICB9XHJcblxyXG4gIC8vIOOBneOBruS7lumWouaVsFxyXG4gIGxpbWl0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICB2YWx1ZSA9IG1heDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIOODhuOCueODiOODreOCsFxyXG4gIHRlc3Rsb2cgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3Rsb2dcIik7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==