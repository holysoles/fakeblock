webpackHotUpdate("static\\development\\pages\\[page]\\photos.js",{

/***/ "./pages/[page]/photos/index.js":
/*!**************************************!*\
  !*** ./pages/[page]/photos/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/nav/HeaderBar */ "./components/nav/HeaderBar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_Photos_MakeGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Photos/MakeGallery */ "./components/Photos/MakeGallery.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\pages\\[page]\\photos\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Page = function Page(_ref) {
  var photoArray = _ref.photoArray,
      albumLinks = _ref.albumLinks;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  var imageGallery = __jsx(_components_Photos_MakeGallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: photoArray,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 26
    }
  });

  var albumList = albumLinks.map(function (album) {
    var link = "/" + router.query.page + "/photos/?tab=album&album_id=" + album.link;
    var name = album.name;
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: function onClick() {
        router.push(link);
      },
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, name));
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pagetitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: "center",
    variant: 'h4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, 'user')), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, imageGallery), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, albumList)));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=photos.js.a62464781eac60c3286e.hot-update.js.map