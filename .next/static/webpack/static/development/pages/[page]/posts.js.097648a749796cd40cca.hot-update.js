webpackHotUpdate("static\\development\\pages\\[page]\\posts.js",{

/***/ "./components/Photos/MakeGallery.js":
/*!******************************************!*\
  !*** ./components/Photos/MakeGallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeGallery; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/es/index.js");





var _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\components\\Photos\\MakeGallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MakeGallery = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MakeGallery, _Component);

  var _super = _createSuper(MakeGallery);

  function MakeGallery(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MakeGallery);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MakeGallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.props.images; //if no images return empty div

      if (images === undefined) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 20
          }
        });
      }

      if (images.length === 1) {
        images = images.shift();
        return __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
          showArrows: false,
          showThumbs: false,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }
        }, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: images[0],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }
        })));
      } //create list of images


      var imageList = images.map(function (image) {
        return __jsx("div", {
          key: images.indexOf(image),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }
        }, __jsx("img", {
          src: image,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }
        }));
      });
      return __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
        showArrows: false,
        dynamicHeight: true,
        showThumbs: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, imageList);
    }
  }]);

  return MakeGallery;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

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
/* harmony import */ var _MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MakeVideoPlayer */ "./components/Posts/MakeVideoPlayer.js");
/* harmony import */ var _Photos_MakeGallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Photos/MakeGallery */ "./components/Photos/MakeGallery.js");
var _jsxFileName = "C:\\Users\\Patrick\\PhpstormProjects\\fakeblock\\components\\Posts\\MakePosts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    maxWidth: 750,
    'margin': '4%'
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
          lineNumber: 26,
          columnNumber: 17
        }
      }, paragraph);
    });
    var images = post.images.map(function (source) {
      //if image is avatar
      if (source.includes('t1.0-1')) {
        Avatar = Object(_MakeAvatar__WEBPACK_IMPORTED_MODULE_0__["default"])(source, post.user);
      } else {
        return source;
      }
    }); //remove profile pic from image array

    var media = __jsx(_Photos_MakeGallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
      images: images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }); //if there is a video post, overwrite thumbnail with video player component


    if (post.video.length > 0) {
      media = __jsx(_MakeVideoPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        source: post.video,
        thumb: post.images[1],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
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
        lineNumber: 48,
        columnNumber: 17
      }
    }, media, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, Avatar, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, post.user)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      gutterBottom: true,
      variant: "body2",
      color: "textSecondary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, post.timestamp), paragraphs), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, "Share"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, "Likes")));
  });
  return postsList;
}

/***/ })

})
//# sourceMappingURL=posts.js.097648a749796cd40cca.hot-update.js.map