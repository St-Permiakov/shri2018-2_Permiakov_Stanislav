/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/main.js":
/*!*******************************!*\
  !*** ./app/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_layout_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/layout/header/header */ \"./app/components/layout/header/header.js\");\n/* harmony import */ var _components_layout_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_layout_header_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_blocks_camera_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blocks/camera/camera */ \"./app/components/blocks/camera/camera.js\");\n/* harmony import */ var _components_blocks_camera_camera__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_blocks_camera_camera__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_blocks_pleer_pleer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/blocks/pleer/pleer */ \"./app/components/blocks/pleer/pleer.js\");\n/* harmony import */ var _components_blocks_pleer_pleer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_blocks_pleer_pleer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./app/assets/js/main.js?");

/***/ }),

/***/ "./app/components/blocks/camera/camera.js":
/*!************************************************!*\
  !*** ./app/components/blocks/camera/camera.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Camera {\n    constructor(el, opts) {\n        const self = this;\n        self.DATA_KEY = 'Camera';\n\n        // опции\n        self.$el = $(el);\n        self.$el.data(self.DATA_KEY, self);\n        self.opts = $.extend({}, self.$el.data(), opts);\n\n        self.$cameraWrapper = self.$el.find('.js-camera-wrapper');\n        self.$cameraRails = self.$el.find('.js-camera-movable');\n        self.$camera = self.$el.find('.js-camera-img');\n        self.$zoomVal = self.$el.find('.js-camera-info-val[data-info=zoom]');\n        self.$brightVal = self.$el.find('.js-camera-info-val[data-info=brightness]');\n\n        self.canMove = true;\n        self.canZoomOut = true;\n        self.canZoomIn = true;\n\n        self.pointers = {};\n        self.camData = {\n            x: 0,\n            zoom: 1,\n            brightness: 100\n        };\n\n        // разница расстояния между точками\n        self.prevDiffX = 0;\n        self.prevDiffY = 0;\n\n        self.init();\n    }\n\n    init() {\n        this.setListeners();\n    }\n\n    setListeners() {\n        const self = this;\n        const camera = self.$cameraWrapper[0];\n\n        // TODO: исправить баг мерцания под курсором\n        if (window.innerWidth < 1025) {\n            camera.addEventListener('pointerdown', e => {\n                camera.setPointerCapture(e.pointerId);\n                self.camData.x = Math.round(self.$cameraRails.offset().left);\n\n                camera.addEventListener('pointermove', e => {\n                    if (!self.pointers.hasOwnProperty(e.pointerId)) self.pointers[e.pointerId] = e;\n\n                    if (Object.keys(self.pointers).length === 1 && self.canMove) {\n                        self.handleMove(e);\n                    }\n\n                    if (Object.keys(self.pointers).length === 2) {\n                        self.canMove = false;\n                        self.pointers[e.pointerId] = e;\n                        self.handleMultiTouch();\n                    }\n                });\n            });\n\n            camera.addEventListener('pointerup', e => {\n                delete self.pointers[e.pointerId];\n                if (Object.keys(self.pointers).length < 2) {\n                    setTimeout(() => {\n                        self.canMove = true;\n                        self.canZoomIn = true;\n                        self.canZoomOut = true;\n                    }, 500);\n                }\n            });\n        }\n    }\n\n    handleMove(e) {\n        const self = this;\n        const pointerId = e.pointerId;\n        const startPoint = {\n            x: self.pointers[pointerId].offsetX,\n            y: self.pointers[pointerId].offsetY\n        };\n\n        const imgRightEdge = self.$cameraRails.offset().left + self.$cameraRails.width();\n        const imgLeftEdge = self.$cameraRails.offset().left;\n        const wrapRightEdge = self.$cameraWrapper.offset().left + self.$cameraWrapper.width();\n        const wrapLeftEdge = self.$cameraWrapper.offset().left;\n\n        let diff = Math.round(e.offsetX - startPoint.x + self.camData.x - self.$cameraWrapper.offset().left);\n        if (!(wrapLeftEdge <= imgLeftEdge && e.offsetX - startPoint.x > 0) && !(wrapRightEdge >= imgRightEdge && e.offsetX - startPoint.x < 0)) {\n            self.$cameraRails.css('left', diff + 'px');\n        }\n    }\n\n    handleMultiTouch(e) {\n        const self = this;\n        let curDiffX = Math.abs(self.pointers[Object.keys(self.pointers)[0]].clientX - self.pointers[Object.keys(self.pointers)[1]].clientX);\n        let curDiffY = Math.abs(self.pointers[Object.keys(self.pointers)[0]].clientY - self.pointers[Object.keys(self.pointers)[1]].clientY);\n        let curDiff = curDiffX + curDiffY;\n        let zoom = self.camData.zoom;\n\n        // если разница по одной из осей сокращается, то это поворот\n        if (curDiffX > self.prevDiffX && curDiffY < self.prevDiffY || curDiffX < self.prevDiffX && curDiffY > self.prevDiffY) {\n            self.canZoomIn = false;\n            self.canZoomOut = false;\n\n            if (curDiffX > self.prevDiffX && curDiffY < self.prevDiffY) {\n                self.camData.brightness = self.camData.brightness < 100 ? self.camData.brightness + parseFloat((curDiffX / 100).toFixed(2)) : 100;\n            } else {\n                self.camData.brightness = self.camData.brightness > 50 ? self.camData.brightness - parseFloat((curDiffY / 100).toFixed(2)) : 50;\n            }\n            self.$camera.css('filter', 'brightness(' + self.camData.brightness / 100 + ')');\n            self.$brightVal.text(Math.round(self.camData.brightness) + '%');\n        } else {\n            // zoom\n            if (curDiff > self.prevDiff && self.canZoomIn) {\n                zoom = self.camData.zoom + parseFloat((curDiff / 10000).toFixed(2));\n                self.canZoomOut = false;\n            } else if (curDiff < self.prevDiff && self.camData.zoom > 1 && self.canZoomOut) {\n                zoom = self.camData.zoom - parseFloat((curDiff / 10000).toFixed(2));\n                self.canZoomIn = false;\n            }\n\n            zoom = zoom < 1 ? 1 : zoom;\n\n            self.$camera.css('transform', 'scale(' + zoom + ')');\n            self.$zoomVal.text(Math.round((zoom - 1) * 100) + '%');\n\n            self.camData.zoom = zoom;\n        }\n\n        self.prevDiff = curDiff;\n        self.prevDiffX = curDiffX;\n        self.prevDiffY = curDiffY;\n    }\n}\n\n$(() => {\n    $('.js-camera').each((i, item) => {\n        new Camera(item);\n    });\n});\n\n//# sourceURL=webpack:///./app/components/blocks/camera/camera.js?");

/***/ }),

/***/ "./app/components/blocks/pleer/pleer.js":
/*!**********************************************!*\
  !*** ./app/components/blocks/pleer/pleer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Pleer {\n    constructor(el, opts) {\n        const self = this;\n        self.DATA_KEY = 'Pleer';\n\n        // опции\n        self.$el = $(el);\n        self.$el.data(self.DATA_KEY, self);\n        self.opts = $.extend({}, self.$el.data(), opts);\n\n        self.$track = self.$el.find('.js-pleer-track');\n        self.$trackLine = self.$el.find('.js-pleer-track-line');\n        self.$trackControl = self.$el.find('.js-pleer-track-control');\n        self.$trackTime = self.$el.find('.js-pleer-track-time');\n    }\n}\n\n$(() => {\n    $('.js-pleer').each((i, item) => {\n        new Pleer(item);\n    });\n});\n\n//# sourceURL=webpack:///./app/components/blocks/pleer/pleer.js?");

/***/ }),

/***/ "./app/components/layout/header/header.js":
/*!************************************************!*\
  !*** ./app/components/layout/header/header.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Header {\n    constructor(el, opts) {\n        const self = this;\n        self.DATA_KEY = 'Header';\n\n        // опции\n        self.$el = $(el);\n        self.$el.data(self.DATA_KEY, self);\n        self.opts = $.extend({}, self.$el.data(), opts);\n\n        self.$navBtn = self.$el.find('.js-header-btn');\n        self.$navMenu = self.$el.find('.js-header-nav');\n\n        /* init */\n        self.setListeners();\n    }\n\n    setListeners() {\n        const self = this;\n        self.$navBtn.on('click', function (e) {\n            e.preventDefault();\n            if (self.$navMenu.hasClass('opened')) {\n                self.closeMenu();\n            } else {\n                self.openMenu();\n            }\n        });\n    }\n\n    openMenu() {\n        this.$navMenu.addClass('opened');\n    }\n\n    closeMenu() {\n        this.$navMenu.removeClass('opened');\n    }\n}\n\n$(() => {\n    $('.js-header').each((i, item) => {\n        new Header(item);\n    });\n});\n\n//# sourceURL=webpack:///./app/components/layout/header/header.js?");

/***/ })

/******/ });