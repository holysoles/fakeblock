webpackHotUpdate("static\\development\\pages\\[page].js",{

/***/ "./components/Business/MakeMenu.js":
/*!*****************************************!*\
  !*** ./components/Business/MakeMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/DynamicFeed */ "./node_modules/@material-ui/icons/DynamicFeed.js");
/* harmony import */ var _material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PhotoLibrary */ "./node_modules/@material-ui/icons/PhotoLibrary.js");
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_VideoLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/VideoLibrary */ "./node_modules/@material-ui/icons/VideoLibrary.js");
/* harmony import */ var _material_ui_icons_VideoLibrary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoLibrary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Event */ "./node_modules/@material-ui/icons/Event.js");
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_RateReview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/RateReview */ "./node_modules/@material-ui/icons/RateReview.js");
/* harmony import */ var _material_ui_icons_RateReview__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RateReview__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MenuBook */ "./node_modules/@material-ui/icons/MenuBook.js");
/* harmony import */ var _material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\components\\Business\\MakeMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function MakeMenu(item) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var text = item.text;
  var link = item.link;

  var icon = __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 16
    }
  });

  var order = 0; //look for match menu icons

  switch (text) {
    case "About":
      icon = __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 20
        }
      });
      order = 0;
      break;

    case "Posts":
      icon = __jsx(_material_ui_icons_DynamicFeed__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 20
        }
      });
      order = 1;
      break;

    case "Menu":
      icon = __jsx(_material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 20
        }
      });
      order = 2;
      break;

    case "Photos":
      icon = __jsx(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 20
        }
      });
      order = 3;
      break;

    case "Videos":
      icon = __jsx(_material_ui_icons_VideoLibrary__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      });
      order = 4;
      break;

    case "Events":
      icon = __jsx(_material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }
      });
      order = 5;
      break;

    case "Reviews":
      icon = __jsx(_material_ui_icons_RateReview__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 20
        }
      });
      order = 6;
      break;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link,
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, icon), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, text)));
}

/***/ })

})
//# sourceMappingURL=[page].js.5b279e3806d67516c9d5.hot-update.js.map