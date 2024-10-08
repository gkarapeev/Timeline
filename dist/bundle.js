/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./src/data/points.js":
/*!****************************!*\
  !*** ./src/data/points.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ points)\n/* harmony export */ });\nfunction points() {\r\n    const pointY = 0;\r\n    return [\r\n        {\r\n            name: 'First Bulgarian Kingdom',\r\n            color: [31, 231, 238],\r\n            id: 1,\r\n            x: 681,\r\n            y: pointY,\r\n            importance: 1\r\n        },\r\n        {\r\n            name: 'Hitler comes into power',\r\n            color: [48, 238, 31],\r\n            id: 2,\r\n            x: 1933,\r\n            y: pointY,\r\n            importance: 2\r\n        },\r\n        {\r\n            name: 'WW2',\r\n            color: [224, 238, 31],\r\n            id: 3,\r\n            x: 1939,\r\n            y: pointY,\r\n            importance: 3\r\n        },\r\n        {\r\n            name: 'Gesha Birthday',\r\n            color: [238, 31, 228],\r\n            id: 4,\r\n            x: 1993,\r\n            y: pointY,\r\n            importance: 4\r\n        },\r\n        {\r\n            name: 'Today',\r\n            color: [255, 255, 255],\r\n            id: 5,\r\n            x: 2019,\r\n            y: pointY,\r\n            importance: 5\r\n        },\r\n        {\r\n            name: 'Columbus 1st Voyage',\r\n            color: [178, 163, 245],\r\n            id: 6,\r\n            x: 1492,\r\n            y: pointY,\r\n            importance: 6\r\n        },\r\n        {\r\n            name: 'Pyramids',\r\n            color: [190, 90, 30],\r\n            id: 7,\r\n            x: -2600,\r\n            y: pointY,\r\n            importance: 7\r\n        },\r\n        {\r\n            name: 'WW1',\r\n            color: [224, 160, 31],\r\n            id: 8,\r\n            x: 1914,\r\n            y: pointY,\r\n            importance: 8\r\n        }\r\n    ]\r\n};\n\n//# sourceURL=webpack://timeline/./src/data/points.js?");

/***/ }),

/***/ "./src/data/points_2.js":
/*!******************************!*\
  !*** ./src/data/points_2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ points)\n/* harmony export */ });\nfunction points() {\r\n    let points = [];\r\n    let _idCounter = 1;\r\n\r\n    for (let i = -1250; i <= 1250; i+= 100) {\r\n        for (let j = -1250; j <= 1250; j+= 100) {\r\n            let color;\r\n            if (i < 0) {\r\n                if (j < 0) {\r\n                    color = [31, 231, 238];\r\n                } else {\r\n                    color = [48, 238, 31];\r\n                }\r\n            } else {\r\n                if (j < 0) {\r\n                    color = [224, 238, 31];\r\n                } else {\r\n                    color = [178, 163, 245]\r\n                }\r\n            }\r\n\r\n            points.push({\r\n                name: 'point_' + i + '_' + j,\r\n                color: color,\r\n                id: _idCounter,\r\n                x: i,\r\n                y: j,\r\n                importance: _idCounter\r\n            })\r\n\r\n            _idCounter++;\r\n        }\r\n    }\r\n    return points;\r\n};\n\n//# sourceURL=webpack://timeline/./src/data/points_2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.min.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_points_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/points.js */ \"./src/data/points.js\");\n/* harmony import */ var _data_points_2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/points_2.js */ \"./src/data/points_2.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\nlet dragStartX;\r\nlet dragStartY;\r\nlet dragDistanceX = 0;\r\nlet dragDistanceY = 0;\r\n\r\n// Canvas\r\nconst lockHorizontal = false;\r\nlet screenHeight = 700;\r\nlet screenWidth = 1600;\r\nlet zoomFactor = 12;\r\nlet offset_X = lockHorizontal ? 1952 : 0;\r\nlet offset_Y = -screenHeight / 2;\r\n\r\n// Points\r\nlet points = (0,_data_points_2_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nconst pointSize = 30;\r\n\r\n// Sketch\r\nlet s = (sk) => {\r\n    sk.setup = () => {\r\n        sk.createCanvas(screenWidth, screenHeight).parent(\"#sketch-container\");\r\n        sk.frameRate(60);\r\n        sk.background(50);\r\n        sk.ellipseMode(sk.CENTER);\r\n        sk.noStroke();\r\n        sk.textAlign(sk.CENTER);\r\n    }\r\n\r\n    sk.draw = () => {\r\n\r\n        // Draw the timeline\r\n        sk.noStroke();\r\n        sk.background(60);\r\n        sk.fill(170)\r\n        sk.rectMode(sk.CENTER);\r\n        sk.rect(screenWidth / 2, screenHeight / 2 + 20, screenWidth - 20, 1);\r\n\r\n        // Draw the points\r\n        let pointSize_scaled = sk.constrain(pointSize * zoomFactor * 0.3, 5, 20);\r\n\r\n\r\n        for (let point of points) {\r\n\r\n            let [ pointX_Screen, pointY_Screen ] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.worldToScreen)(point.x, point.y, offset_X, offset_Y, zoomFactor);\r\n            // Point indicator\r\n            sk.strokeWeight(1);\r\n            sk.stroke(170);\r\n            sk.line(pointX_Screen, screenHeight / 2, pointX_Screen, screenHeight / 2 + 20)\r\n\r\n            // Point\r\n            sk.strokeWeight(2);\r\n            sk.fill(point.color);\r\n            sk.ellipse(pointX_Screen, lockHorizontal ? screenHeight / 2 : pointY_Screen, pointSize_scaled, pointSize_scaled);\r\n\r\n            // Name\r\n            sk.noStroke();\r\n            sk.fill(\"white\");\r\n            sk.textSize(16);\r\n            sk.text(\"- \" + point.x + \" -\", pointX_Screen, screenHeight / 2 + 20 + 40 * point.id);\r\n            sk.fill(200)\r\n            sk.textSize(12);\r\n            sk.text(point.name, pointX_Screen, screenHeight / 2 + 40 + 40 * point.id);\r\n        }\r\n    }\r\n\r\n    sk.mousePressed = () => {\r\n        dragStartX = sk.mouseX;\r\n        dragStartY = sk.mouseY;\r\n    }\r\n\r\n    sk.mouseDragged = () => {\r\n        dragDistanceX = sk.mouseX - dragStartX;\r\n        dragDistanceY = sk.mouseY - dragStartY;\r\n\r\n        offset_X -= dragDistanceX / zoomFactor;\r\n        offset_Y -= dragDistanceY / zoomFactor;\r\n\r\n        dragStartX = sk.mouseX;\r\n        dragStartY = sk.mouseY;\r\n    }\r\n\r\n    sk.mouseWheel = (event) => {\r\n        // Mouse screen coordinates before zoom\r\n        let mouse_X_screen_before_zoom = sk.mouseX;\r\n        let mouse_Y_screen_before_zoom = sk.mouseY;\r\n\r\n        // Mouse world coordinates before zoom\r\n        let [ mouse_X_world_before_zoom, mouse_Y_world_before_zoom ] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.screenToWorld)(mouse_X_screen_before_zoom, mouse_Y_screen_before_zoom, offset_X, offset_Y, zoomFactor);\r\n\r\n        // The actual zoom\r\n        let speed = event.delta;\r\n        zoomFactor = sk.constrain(zoomFactor + speed * 0.0005, 0.01, 20);\r\n        console.log(offset_X)\r\n\r\n        // Mouse screen coordinates after zoom\r\n        let mouse_X_screen_after_zoom = sk.mouseX;\r\n        let mouse_Y_screen_after_zoom = sk.mouseY;\r\n\r\n        // Mouse world coordinates after zoom\r\n        let [ mouse_X_world_after_zoom, mouse_Y_world_after_zoom ] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.screenToWorld)(mouse_X_screen_after_zoom, mouse_Y_screen_after_zoom, offset_X, offset_Y, zoomFactor);\r\n\r\n        // Screen difference before vs. after zoom\r\n        let world_x_difference = mouse_X_world_before_zoom - mouse_X_world_after_zoom;\r\n        let world_y_difference = mouse_Y_world_before_zoom - mouse_Y_world_after_zoom;\r\n\r\n        offset_X += world_x_difference;\r\n        offset_Y += world_y_difference;\r\n\r\n        // block page scrolling\r\n        return false;\r\n    }\r\n}\r\n\r\nconst drawing = new (p5__WEBPACK_IMPORTED_MODULE_0___default())(s);\r\n\n\n//# sourceURL=webpack://timeline/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screenToWorld: () => (/* binding */ screenToWorld),\n/* harmony export */   worldToScreen: () => (/* binding */ worldToScreen)\n/* harmony export */ });\nconst worldToScreen = (x, y, offset_X, offset_Y, zoomFactor) => {\r\n    let screenX = (x - offset_X) * zoomFactor;\r\n    let screenY = (y - offset_Y) * zoomFactor;\r\n    return [screenX, screenY]\r\n}\r\n\r\nconst screenToWorld = (x, y, offset_X, offset_Y, zoomFactor) => {\r\n    let worldX = (x / zoomFactor) + offset_X;\r\n    let worldY = (y / zoomFactor) + offset_Y;\r\n    return [worldX, worldY]\r\n}\r\n\n\n//# sourceURL=webpack://timeline/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;