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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: " Vitoria / Derrota / Empate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, this), players.map(function (element) {
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["PerfilWords"], {
            children: [getNames(element[0]), " ", element[1][_key].vitorias, " / ", element[1][_key].derrotas, " | ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIl0sIm5hbWVzIjpbIkNvbnRyYXMiLCJjb250cmFzIiwiaWRwZXJmaWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TmFtZXMiLCJpZCIsInBsYXllcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWxlbWVudCIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInZpdG9yaWFzIiwiZGVycm90YXMiLCJlbXBhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUN4QyxNQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQUFqQixDQUR3QyxDQUU1Qzs7QUFDSSxXQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQixRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxNQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxPQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUixPQUFmLENBQWhCO0FBQ0Qsc0JBQ0k7QUFBQSw0QkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILEVBRU1NLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUN2QixVQUFJQyxJQUFKOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBTyxDQUFDLENBQUQsQ0FBbkI7O0FBQ0EsVUFBR0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLENBQVgsRUFBY0ksU0FBZCxJQUEyQmIsUUFBOUIsRUFBd0M7QUFDcENVLFlBQUksR0FBSSxDQUFSO0FBQ0gsT0FGRCxNQUVNO0FBQ0ZBLFlBQUksR0FBRyxDQUFQO0FBQ0g7O0FBRVIsMEJBQ1E7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBRTtBQUFDSSxtQkFBTyxFQUFFLE1BQVY7QUFBa0JDLHNCQUFVLEVBQUUsUUFBOUI7QUFBd0NDLDBCQUFjLEVBQUU7QUFBeEQsV0FBWjtBQUFBLGlDQUNRLHFFQUFDLHdEQUFEO0FBQUEsdUJBQ0tiLFFBQVEsQ0FBQ00sT0FBTyxDQUFDLENBQUQsQ0FBUixDQURiLE9BQzRCQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJPLFFBRDdDLFNBQzBEUixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJRLFFBRDNFLFNBQ3dGVCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJTLE9BRHpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFVQyxLQW5CSSxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJGO0tBL0N1QnJCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLmRlNmFkNzA1ZDk1YTAzMmQyMzgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcmZpbFdvcmRzfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJhcyAoe2NvbnRyYXN9KSB7XHJcbiAgICBjb25zdCBpZHBlcmZpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbnRyYXMpXHJcbiAgICBmdW5jdGlvbiBnZXROYW1lcyhpZCkge1xyXG4gICAgICAgIGlmKGlkID09PSBcInAxXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGhpYWdvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJSaWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJKb2FvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEYW5pZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlZpdG9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwbGF5ZXJzID0gT2JqZWN0LmVudHJpZXMoY29udHJhcylcclxuICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgPHA+IFZpdG9yaWEgLyBEZXJyb3RhIC8gRW1wYXRlPC9wPlxyXG4gICAgICAgICAgIHsgcGxheWVycy5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IF9rZXlcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFsxXSlcclxuICAgICAgICAgICAgICAgaWYoZWxlbWVudFsxXVswXS5pZF9wbGF5ZXIgPT0gaWRwZXJmaWwpIHtcclxuICAgICAgICAgICAgICAgICAgIF9rZXkgPSAgMFxyXG4gICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBfa2V5ID0gMVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXROYW1lcyhlbGVtZW50WzBdKX0ge2VsZW1lbnRbMV1bX2tleV0udml0b3JpYXN9IC8ge2VsZW1lbnRbMV1bX2tleV0uZGVycm90YXN9IHwge2VsZW1lbnRbMV1bX2tleV0uZW1wYXRlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgIClcclxuICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=