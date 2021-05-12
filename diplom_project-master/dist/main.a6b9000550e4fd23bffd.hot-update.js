/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/mobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/mobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mobileMenu = function mobileMenu() {\n  var menuBtn = document.getElementById('menu-btn'),\n      menu = document.getElementById('hidden-menu'),\n      head = document.querySelector('.head'),\n      menuWrapper = document.querySelector('.menu-button'),\n      topMenu = document.querySelector('.top-menu');\n\n  var showMenu = function showMenu() {\n    menu.style.display = 'flex';\n  };\n\n  var hideMenu = function hideMenu() {\n    menu.style.display = 'none';\n  };\n\n  var slickMenu = function slickMenu() {\n    var height = head.clientHeight + menuWrapper.clientHeight;\n\n    if (window.screen.width <= 768) {\n      if (document.documentElement.scrollTop >= height) {\n        topMenu.style.cssText = \"\\n                position: fixed;\\n                z-index: 10;\\n            \";\n      } else {\n        topMenu.style.cssText = \"\\n                    position: relative;\\n                \";\n      }\n\n      ;\n    }\n\n    ;\n  };\n\n  menuBtn.addEventListener('click', showMenu);\n  menu.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.closest('#close-btn') || target.closest('.scroll')) {\n      hideMenu();\n    }\n\n    ;\n  });\n  document.addEventListener('scroll', slickMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/mobileMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3067ca3158029fe28914")
/******/ })();
/******/ 
/******/ }
);