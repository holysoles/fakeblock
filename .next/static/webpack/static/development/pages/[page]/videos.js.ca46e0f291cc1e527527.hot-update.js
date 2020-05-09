webpackHotUpdate("static\\development\\pages\\[page]\\videos.js",{

/***/ "./components/Posts/GetTrueVideoSource.js":
/*!************************************************!*\
  !*** ./components/Posts/GetTrueVideoSource.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetTrueVideoSource; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


function GetTrueVideoSource(videoUrl) {
  var myHeaders, requestOptions, res, resText, videoSource;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function GetTrueVideoSource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //fetch video page
          myHeaders = new Headers();
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(videoUrl, requestOptions));

        case 4:
          res = _context.sent;
          resText = res.text();
          videoSource = resText.split("video:[{url:\"")[1].split("\",start:0")[0];
          console.log(videoSource);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ }),

/***/ "./pages/[page]/videos.js":
/*!********************************!*\
  !*** ./pages/[page]/videos.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/nav/HeaderBar */ "./components/nav/HeaderBar.js");
/* harmony import */ var _components_Posts_MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Posts/MakeVideoPlayer */ "./components/Posts/MakeVideoPlayer.js");
/* harmony import */ var _components_Posts_GetTrueVideoSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Posts/GetTrueVideoSource */ "./components/Posts/GetTrueVideoSource.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\pages\\[page]\\videos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //import { Typography } from "@material-ui/core/Typography";




var Page = function Page(_ref) {
  var videoArray = _ref.videoArray;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var videos = videoArray.map(function (videoPost) {
    return videoPost.node.url;
  });
  var videoList = videos.map(function _callee(video) {
    var trueVideo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(video);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_Posts_GetTrueVideoSource__WEBPACK_IMPORTED_MODULE_5__["default"])(video));

          case 3:
            trueVideo = _context.sent;
            return _context.abrupt("return", __jsx(_components_Posts_MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
              source: trueVideo,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 16
              }
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_components_nav_HeaderBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pagetitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("p", {
    align: "center",
    variant: 'h4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, router.query.page, "'s Videos")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, videoList)));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=videos.js.ca46e0f291cc1e527527.hot-update.js.map