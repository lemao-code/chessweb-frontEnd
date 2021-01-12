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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["PerfilWords"], {
            children: [getNames(element[0]), "\xA0\xA0\xA0 ", element[1][_key].vitorias, " / ", element[1][_key].derrotas, " | ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIl0sIm5hbWVzIjpbIkNvbnRyYXMiLCJjb250cmFzIiwiaWRwZXJmaWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TmFtZXMiLCJpZCIsInBsYXllcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWxlbWVudCIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInZpdG9yaWFzIiwiZGVycm90YXMiLCJlbXBhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUN4QyxNQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQUFqQixDQUR3QyxDQUU1Qzs7QUFDSSxXQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQixRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxNQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxPQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUixPQUFmLENBQWhCO0FBQ0Qsc0JBQ0k7QUFBQSxjQUNNTSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkIsVUFBSUMsSUFBSjs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQyxDQUFELENBQW5COztBQUNBLFVBQUdBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVyxDQUFYLEVBQWNJLFNBQWQsSUFBMkJiLFFBQTlCLEVBQXdDO0FBQ3BDVSxZQUFJLEdBQUksQ0FBUjtBQUNILE9BRkQsTUFFTTtBQUNGQSxZQUFJLEdBQUcsQ0FBUDtBQUNIOztBQUVSLDBCQUNRO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUU7QUFBQ0ksbUJBQU8sRUFBRSxNQUFWO0FBQWtCQyxzQkFBVSxFQUFFLFFBQTlCO0FBQXdDQywwQkFBYyxFQUFFO0FBQXhELFdBQVo7QUFBQSxpQ0FDUSxxRUFBQyx3REFBRDtBQUFBLHVCQUNLYixRQUFRLENBQUNNLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FEYixtQkFDOENBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQk8sUUFEL0QsU0FDNEVSLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQlEsUUFEN0YsU0FDMEdULE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQlMsT0FEM0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUjtBQVVDLEtBbkJJO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJGO0tBOUN1QnJCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLjczMmQ2NjM3YjdhMzc0YjAxMjJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcmZpbFdvcmRzfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJhcyAoe2NvbnRyYXN9KSB7XHJcbiAgICBjb25zdCBpZHBlcmZpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbnRyYXMpXHJcbiAgICBmdW5jdGlvbiBnZXROYW1lcyhpZCkge1xyXG4gICAgICAgIGlmKGlkID09PSBcInAxXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGhpYWdvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJSaWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJKb2FvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEYW5pZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlZpdG9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwbGF5ZXJzID0gT2JqZWN0LmVudHJpZXMoY29udHJhcylcclxuICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgIHsgcGxheWVycy5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IF9rZXlcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFsxXSlcclxuICAgICAgICAgICAgICAgaWYoZWxlbWVudFsxXVswXS5pZF9wbGF5ZXIgPT0gaWRwZXJmaWwpIHtcclxuICAgICAgICAgICAgICAgICAgIF9rZXkgPSAgMFxyXG4gICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBfa2V5ID0gMVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXROYW1lcyhlbGVtZW50WzBdKX0mbmJzcDsmbmJzcDsmbmJzcDsge2VsZW1lbnRbMV1bX2tleV0udml0b3JpYXN9IC8ge2VsZW1lbnRbMV1bX2tleV0uZGVycm90YXN9IHwge2VsZW1lbnRbMV1bX2tleV0uZW1wYXRlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgIClcclxuICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=