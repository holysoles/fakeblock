webpackHotUpdate("static\\development\\pages\\[page]\\posts.js",{

/***/ "./components/Posts/MakePosts.js":
/*!***************************************!*\
  !*** ./components/Posts/MakePosts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakePosts; });
/* harmony import */ var _MakeAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakeAvatar */ "./components/Posts/MakeAvatar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _MakeLightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MakeLightbox */ "./components/Posts/MakeLightbox.js");
/* harmony import */ var _MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MakeVideoPlayer */ "./components/Posts/MakeVideoPlayer.js");
var _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\components\\Posts\\MakePosts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    maxWidth: 750
  }
});
function MakePosts(postsArray) {
  var _this = this;

  var classes = useStyles();
  var postsList = postsArray.map(function (post) {
    var Avatar = Object(_MakeAvatar__WEBPACK_IMPORTED_MODULE_0__["default"])('/');
    var paragraphs = post.text.map(function (paragraph, index) {
      return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "body2",
        component: "p",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, paragraph);
    });
    var images = post.images.map(function (source) {
      //if image is avatar
      if (source.includes('p50x50')) {
        Avatar = Object(_MakeAvatar__WEBPACK_IMPORTED_MODULE_0__["default"])(source, post.user);
      } else {
        return source;
      }
    });

    var media = __jsx(_MakeLightbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      images: images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }); //if there is a video post, overwrite thumbnail with video player component


    if (post.video.length > 0) {
      media = __jsx(_MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        source: post.video,
        thumb: post.images[1],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      });
    }

    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: post.timestamp,
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, media, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, Avatar, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, post.user)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      variant: "body2",
      color: "textSecondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, post.timestamp), paragraphs), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, "Share"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, "Likes")));
  });
  return postsList;
}

/***/ })

})
//# sourceMappingURL=posts.js.2ed0aea748a0a4412600.hot-update.js.map