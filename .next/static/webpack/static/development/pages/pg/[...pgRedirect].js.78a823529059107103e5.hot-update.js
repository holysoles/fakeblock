webpackHotUpdate("static\\development\\pages\\pg\\[...pgRedirect].js",{

/***/ "./pages/pg/[...pgRedirect].js":
/*!*************************************!*\
  !*** ./pages/pg/[...pgRedirect].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pgRedirect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/nav/HeaderBar */ "./components/nav/HeaderBar.js");
var _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\pages\\pg\\[...pgRedirect].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function pgRedirect() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var requestedUrl = router.asPath.replace('/pg', '');
  var redirectTo = '/[page]/';

  if (requestedUrl.contains('posts')) {
    redirectTo = '/[page]/posts/';
  }

  if (requestedUrl.contains('photos')) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return router.replace(redirectTo, requestedUrl);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Click to be Redirected")));
}

/***/ })

})
//# sourceMappingURL=[...pgRedirect].js.78a823529059107103e5.hot-update.js.map