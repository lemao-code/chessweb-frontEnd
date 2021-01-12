webpackHotUpdate_N_E("pages/Perfil",{

/***/ "./components/Contras.js":
/*!*******************************!*\
  !*** ./components/Contras.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Contras.js";

function Contras(_ref) {
  var _this = this;

  var contras = _ref.contras;
  var idperfil = localStorage.getItem('id'); //    console.log(contras)

  function getNames(id) {
    if (id === "p1") {
      return "Thiago";
    }

    if (id === "p2") {
      return "Rick";
    }

    if (id === "p3") {
      return "Joao";
    }

    if (id === "p4") {
      return "Daniel";
    }

    if (id === "p5") {
      return "Vitor";
    }
  }

  var players = Object.entries(contras);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: players.map(function (element) {
      var _key;

      console.log(element[1]);

      if (element[1][0].id_player == idperfil) {
        _key = 0;
      } else {
        _key = 1;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Contras"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["PerfilWords"], {
            children: [getNames(element[0]), " ", element[1][_key].vitorias, " / ", element[1][_key].derrotas, " | ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 8
  }, this);
}
_c = Contras;

var _c;

$RefreshReg$(_c, "Contras");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIl0sIm5hbWVzIjpbIkNvbnRyYXMiLCJjb250cmFzIiwiaWRwZXJmaWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TmFtZXMiLCJpZCIsInBsYXllcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWxlbWVudCIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInZpdG9yaWFzIiwiZGVycm90YXMiLCJlbXBhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUN4QyxNQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQUFqQixDQUR3QyxDQUU1Qzs7QUFDSSxXQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQixRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxNQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxPQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUixPQUFmLENBQWhCO0FBQ0Qsc0JBQ0k7QUFBQSxjQUNNTSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkIsVUFBSUMsSUFBSjs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQyxDQUFELENBQW5COztBQUNBLFVBQUdBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVyxDQUFYLEVBQWNJLFNBQWQsSUFBMkJiLFFBQTlCLEVBQXdDO0FBQ3BDVSxZQUFJLEdBQUksQ0FBUjtBQUNILE9BRkQsTUFFTTtBQUNGQSxZQUFJLEdBQUcsQ0FBUDtBQUNIOztBQUVSLDBCQUNRO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUU7QUFBQ0ksbUJBQU8sRUFBRSxNQUFWO0FBQWtCQyxzQkFBVSxFQUFFLFFBQTlCO0FBQXdDQywwQkFBYyxFQUFFO0FBQXhELFdBQVo7QUFBQSxrQ0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUixlQUVRLHFFQUFDLHdEQUFEO0FBQUEsdUJBQ0tiLFFBQVEsQ0FBQ00sT0FBTyxDQUFDLENBQUQsQ0FBUixDQURiLE9BQzRCQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJPLFFBRDdDLFNBQzBEUixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJRLFFBRDNFLFNBQ3dGVCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJTLE9BRHpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFXQyxLQXBCSTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCRjtLQS9DdUJyQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BlcmZpbC5lNmFlOTFkZTk4YmViNmVlM2NiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJmaWxXb3Jkc30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYXMgKHtjb250cmFzfSkge1xyXG4gICAgY29uc3QgaWRwZXJmaWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4vLyAgICBjb25zb2xlLmxvZyhjb250cmFzKVxyXG4gICAgZnVuY3Rpb24gZ2V0TmFtZXMoaWQpIHtcclxuICAgICAgICBpZihpZCA9PT0gXCJwMVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRoaWFnb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInAyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiUmlja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInAzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSm9hb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInA0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRGFuaWVsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJWaXRvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheWVycyA9IE9iamVjdC5lbnRyaWVzKGNvbnRyYXMpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICB7IHBsYXllcnMubWFwKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCBfa2V5XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMV0pXHJcbiAgICAgICAgICAgICAgIGlmKGVsZW1lbnRbMV1bMF0uaWRfcGxheWVyID09IGlkcGVyZmlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICBfa2V5ID0gIDBcclxuICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgX2tleSA9IDFcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRyYXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldE5hbWVzKGVsZW1lbnRbMF0pfSB7ZWxlbWVudFsxXVtfa2V5XS52aXRvcmlhc30gLyB7ZWxlbWVudFsxXVtfa2V5XS5kZXJyb3Rhc30gfCB7ZWxlbWVudFsxXVtfa2V5XS5lbXBhdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgKVxyXG4gICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==