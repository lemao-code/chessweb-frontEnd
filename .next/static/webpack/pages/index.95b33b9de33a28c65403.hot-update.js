webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ranking */ "./components/Ranking.js");
/* harmony import */ var _components_LastMatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LastMatches */ "./components/LastMatches.js");
/* harmony import */ var _components_AddMatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddMatch */ "./components/AddMatch.js");

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\pages\\index.js";






var GA_TRACKING_ID = process.env.GA_TRACKING_ID;

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
    style: {
      margin: 0,
      padding: 0,
      width: "auto",
      height: "100%",
      backgroundColor: "black"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Chess"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerChildren"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Ranking__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastMatches__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AddMatch__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiSG9tZSIsIm1hcmdpbiIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFuQzs7QUFDQSxTQUFTRyxJQUFULEdBQWlCO0FBRWIsc0JBQ0k7QUFBTSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFLENBQVQ7QUFBWUMsYUFBTyxFQUFFLENBQXJCO0FBQXdCQyxXQUFLLEVBQUUsTUFBL0I7QUFBdUNDLFlBQU0sRUFBRSxNQUEvQztBQUF1REMscUJBQWUsRUFBRTtBQUF4RSxLQUFiO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLHFFQUFDLHNEQUFEO0FBQUEsNkJBRUkscUVBQUMsOERBQUQ7QUFBQSxnQ0FDSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztLQXBCUUwsSTtBQXNCTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTViMzNiOWRlMzNhMjhjNjU0MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0NvbnRhaW5lciwgQ29udGFpbmVyQ2hpbGRyZW59IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmFua2luZyBmcm9tICcuLi9jb21wb25lbnRzL1JhbmtpbmcnXHJcbmltcG9ydCBMYXN0TWF0Y2hlcyBmcm9tICcuLi9jb21wb25lbnRzL0xhc3RNYXRjaGVzJ1xyXG5pbXBvcnQgQWRkTWF0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9BZGRNYXRjaCdcclxuY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5HQV9UUkFDS0lOR19JRFxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxib2R5IHN0eWxlPXt7bWFyZ2luOiAwLCBwYWRkaW5nOiAwLCB3aWR0aDogXCJhdXRvXCIsIGhlaWdodDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkNoZXNzPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luTGVmdDotMTAsIG1hcmdpblRvcDogLTIwLCBtYXJnaW5Cb3R0b206IC0xMCwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIHdpZHRoOlwiMTIwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifX0+ICovfVxyXG4gICAgICAgICAgICA8Q29udGFpbmVyID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz1cIi9jaGVzcy53ZWJwXCIgcXVhbGl0eT1cIjEwMFwiIHJlc3BvbnNpdmU9XCJ0cnVlXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI2MDBcIi8+ICovfVxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lckNoaWxkcmVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5raW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhc3RNYXRjaGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZE1hdGNoIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lckNoaWxkcmVuPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==