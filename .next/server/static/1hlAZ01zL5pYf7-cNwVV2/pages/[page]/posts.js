module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Spbm");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Dw/b":
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "KNCX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFBID; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);



async function GetFBID(pagename) {
  let fbID = '';

  const jsdom = __webpack_require__("Dw/b");

  const {
    JSDOM
  } = jsdom;
  console.log(pagename); //construct and fetch pageurl

  const pageUrl = "https://www.facebook.com/" + pagename;
  console.log("requesting page: ", pageUrl);
  let profileResponse = await node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(pageUrl);
  let profileHtml = await profileResponse.text();
  let profileDom = new JSDOM(profileHtml);
  let profileDoc = profileDom.window.document;
  let metas = profileDoc.getElementsByTagName("meta");
  console.log(metas); //get id from meta tags for redirecting to ios app

  for (const meta of metas) {
    if (meta.attributes[0].value === "al:ios:url") {
      //replace text if business page
      fbID = meta.attributes[1].value.replace('fb://page/?id=', ''); //replace text if profile page

      fbID = fbID.replace('fb://profile/?id=', '');
    }
  }

  console.log(fbID);
  return fbID;
}

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "Spbm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: ./components/GetFBID.js
var GetFBID = __webpack_require__("KNCX");

// CONCATENATED MODULE: ./components/Business/GetPosts.js




async function GetPosts(page) {
  const jsdom = __webpack_require__("Dw/b");

  const {
    JSDOM
  } = jsdom;
  const dom = new JSDOM();
  const document = dom.window.document;
  let postsArray = [];
  const fbID = await Object(GetFBID["a" /* default */])(page);
  console.log("got id, moving on");
  const jsonUrl = 'https://www.facebook.com/pages_reaction_units/more/?'; //timeline cursor appears to set where posts get request starts from

  const timelineCursor = "%7B%22timeline_cursor%22%3A%22AQHRoDgKgwnQmRz8-7LyXTbs8467llbU4E2FkvBASG8-CkOTDUtCxL2Rbx" + "_u0_cGtwwSP-aOXMsTVCNr62TMoNdjl0EmuzWGBCNQrxeyKxMb4hQQMNqhGGJtLN8VYY5vIYUR%22%2C%22timeline_section_cursor%22" + "%3Anull%2C%22has_next_page%22%3Atrue%7D";
  const params = {
    'surface': 'www_pages_posts',
    'unit_count': '4',
    //sets how many posts to get
    '__a': '1'
  };
  const headers = new external_node_fetch_["Headers"]({
    'User-Agent': "PostmanRuntime/7.24.1"
  });
  const opts = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  const fullUrl = jsonUrl + 'page_id=' + fbID + "&cursor=" + timelineCursor + '&' + new URLSearchParams(params); //fetch(fullUrl, opts).then(response => response.text()).then(rawRes => {})

  const res = await external_node_fetch_default()(fullUrl, opts);

  if (res.ok) {
    console.log("response okay"); //console.log(res)
    //need to get html updates from json response

    const resText = await res.text();
    const rawJson = resText.replace("for (;;);", "");
    const postsJson = JSON.parse(rawJson);
    const rawHtml = postsJson.domops[0][3].__html; //construct doc from raw html string and get post wrapper elements into html collection

    const postsDoc = document.createElement('html');
    postsDoc.innerHTML = rawHtml; //get posts elements from html doc

    const postWrappers = postsDoc.getElementsByClassName("_5pcr userContentWrapper"); //const postMessages = postsDoc.querySelectorAll("div[data-testid='post_message']");

    console.log("how many post containers: ", postWrappers.length);

    for (let i = 0; i < postWrappers.length; i++) {
      let post = {
        text: [],
        img: []
      };
      const postImages = postWrappers[i].getElementsByTagName('img');
      const postParagraphs = postWrappers[i].getElementsByTagName('p'); //if post has paragraphs, iterate over each and push to text array in post object

      for (let j = 0; j < postParagraphs.length; j++) {
        post.text.push(postParagraphs[j].textContent);
      } //if post has images, iterate over each and push to image array in post object


      if (postImages.length > 0) {
        for (let k = 0; k < postImages.length; k++) {
          const image = postImages.item(k);
          const imagesToIgnore = "Image may contain: possible text that says 'Shop Now'";

          if (image.getAttribute('alt') !== imagesToIgnore) {
            post.img.push(image.getAttribute('src'));
          }
        }
      }

      postsArray.push(post);
    }

    console.log("returning postsArray");
    return postsArray;
  } else {
    console.log("response failed");
    return [];
  }
}
// EXTERNAL MODULE: ./components/HeaderBar.js
var HeaderBar = __webpack_require__("uUOA");

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// CONCATENATED MODULE: ./components/MakeAvatar.js
var __jsx = external_react_default.a.createElement;


function MakeAvatar(source) {
  return __jsx(Avatar_default.a, {
    alt: "Profile Picture",
    src: source
  });
}
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__("cHt3");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__("lOH7");
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// CONCATENATED MODULE: ./components/MakeLightbox.js
var MakeLightbox_jsx = external_react_default.a.createElement;




class MakeLightbox_MakeLightbox extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const {
      photoIndex,
      isOpen
    } = this.state;
    let images = this.props.images;
    images.shift();
    console.log(images);
    return MakeLightbox_jsx("div", null, MakeLightbox_jsx(CardActionArea_default.a, {
      onClick: () => this.setState({
        isOpen: true
      })
    }, MakeLightbox_jsx(CardMedia_default.a, {
      component: "img",
      alt: "Post Image",
      height: "250",
      image: images[0],
      title: "Post Image"
    })), isOpen && MakeLightbox_jsx(external_react_image_lightbox_default.a, {
      mainSrc: images[photoIndex],
      nextSrc: images[(photoIndex + 1) % images.length],
      prevSrc: images[(photoIndex + images.length - 1) % images.length],
      onCloseRequest: () => this.setState({
        isOpen: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + images.length - 1) % images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % images.length
      })
    }));
  }

}
// CONCATENATED MODULE: ./components/MakePosts.js
var MakePosts_jsx = external_react_default.a.createElement;









const useStyles = Object(styles_["makeStyles"])({
  root: {
    maxWidth: 750
  }
});

function openLightbox() {
  console.log('clicked');
}

function MakePosts(postsArray) {
  const classes = useStyles();
  const postsList = postsArray.map(post => {
    let Avatar = MakeAvatar('/');
    const paragraphs = post.text.map(paragraph => {
      return MakePosts_jsx(Typography_default.a, {
        variant: "body2",
        color: "textSecondary",
        component: "p"
      }, paragraph);
    });
    console.log(post.img);
    const images = post.img.map(source => {
      if (source.includes('p50x50')) {
        Avatar = MakeAvatar(source);
      } else {
        //console.log(source)
        return source;
      }
    });
    return MakePosts_jsx(Card_default.a, {
      className: classes.root
    }, MakePosts_jsx(MakeLightbox_MakeLightbox, {
      images: images
    }), MakePosts_jsx(CardContent_default.a, null, MakePosts_jsx("div", null, Avatar, MakePosts_jsx(Typography_default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2"
    }, "User Name")), paragraphs), MakePosts_jsx(CardActions_default.a, null, MakePosts_jsx(Button_default.a, {
      size: "small",
      color: "primary"
    }, "Share"), MakePosts_jsx(Button_default.a, {
      size: "small",
      color: "primary"
    }, "Likes")));
  });
  return postsList;
}
// CONCATENATED MODULE: ./pages/[page]/posts.js
var posts_jsx = external_react_default.a.createElement;







async function getServerSideProps(context) {
  let page = context.query.page;
  let postsArray = await GetPosts(page);
  return {
    props: {
      postsArray
    }
  };
}

const Page = ({
  postsArray
}) => {
  const router = Object(router_["useRouter"])();
  const postsList = MakePosts(postsArray);
  return posts_jsx("div", null, posts_jsx(HeaderBar["a" /* default */], null), posts_jsx("div", null, posts_jsx("h1", null, router.query.page), posts_jsx("ul", null, postsList)));
};

/* harmony default export */ var posts = __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "lOH7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "uUOA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4151");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ms0O");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4D1s");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function handleFBRedirect(path) {
  const forbiddenRedirect = '/search/';

  if (!path.includes(forbiddenRedirect)) {
    const url = 'https://www.facebook.com/' + path;
    window.open(url, "_self");
  } else {
    console.log("throw error!");
  }
}

;
function HeaderBar() {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static"
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title
  }, "Fakeblock"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: () => {
      handleFBRedirect(router.asPath);
    },
    color: "inherit"
  }, "Open on FB"))));
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });