webpackHotUpdate("static\\development\\pages\\[page]\\posts.js",{

/***/ "./pages/[page]/posts.js":
/*!*******************************!*\
  !*** ./pages/[page]/posts.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nav/HeaderBar */ "./components/nav/HeaderBar.js");
/* harmony import */ var _components_Posts_MakePosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Posts/MakePosts */ "./components/Posts/MakePosts.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\pages\\[page]\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Page = function Page(_ref) {
  var postsArray = _ref.postsArray;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var postsList = Object(_components_Posts_MakePosts__WEBPACK_IMPORTED_MODULE_3__["default"])(postsArray);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, router.query.page), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, postsList)));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=posts.js.22461ff5c214a0318aea.hot-update.js.map