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
  var requestOptions, res, resText, videoSource;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function GetTrueVideoSource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //fetch video page
          requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(videoUrl, requestOptions));

        case 3:
          res = _context.sent;
          console.log('fetching');
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 7:
          resText = _context.sent;
          videoSource = resText.split("video:[{url:\"")[1].split("\",start:0")[0];
          console.log("second source: ", videoSource);
          return _context.abrupt("return", videoSource);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=videos.js.a1ddded450c0ba68a9cd.hot-update.js.map