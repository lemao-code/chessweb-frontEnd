webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddMatch.js":
/*!********************************!*\
  !*** ./components/AddMatch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style */ "./style/style.js");


var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\AddMatch.js",
    _s = $RefreshSig$();




function AddMatch() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      winner = _useState[0],
      setWinner = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      loser = _useState2[0],
      setLoser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      empate = _useState3[0],
      setEmpate = _useState3[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["ContainerAddMatch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["FontNameAndRanking"], {
      children: "Add Partida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onClick: function onClick() {
          return setEmpate(1);
        },
        style: {
          width: 20,
          height: 20
        },
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10
          },
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["InputAddMatch"], {
      type: "text",
      value: winner,
      onChange: function onChange(e) {
        return setWinner(e.target.value);
      },
      placeholder: "Vencedor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["InputAddMatch"], {
      value: loser,
      placeholder: "Derrotado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["ButtonSubmit"], {
      onClick: function onClick() {
        return console.log(winner);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: 12,
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        children: "Enviar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 63
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(AddMatch, "B5CTmsm7wJPCy4UQTgZJEkvTv1I=");

_c = AddMatch;
/* harmony default export */ __webpack_exports__["default"] = (AddMatch);

var _c;

$RefreshReg$(_c, "AddMatch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNYXRjaC5qcyJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsInVzZVN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwibG9zZXIiLCJzZXRMb3NlciIsImVtcGF0ZSIsInNldEVtcGF0ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxTQURFOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxDQUFELENBSG5CO0FBQUEsTUFHVkssTUFIVTtBQUFBLE1BR0ZDLFNBSEU7O0FBSWpCLHNCQUNJLHFFQUFDLDhEQUFEO0FBQUEsNEJBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRSxNQUFWO0FBQWtCQyxxQkFBYSxFQUFFLEtBQWpDO0FBQXdDQyxrQkFBVSxFQUFFO0FBQXBELE9BQVo7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBRTtBQUFBLGlCQUFNSCxTQUFTLENBQUMsQ0FBRCxDQUFmO0FBQUEsU0FBaEI7QUFBbUMsYUFBSyxFQUFFO0FBQUNJLGVBQUssRUFBRSxFQUFSO0FBQVlDLGdCQUFNLEVBQUU7QUFBcEIsU0FBMUM7QUFBbUUsWUFBSSxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVRO0FBQUEsK0JBQU87QUFBRyxlQUFLLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRSxFQUFYO0FBQWVDLHNCQUFVLEVBQUUsTUFBM0I7QUFBbUNDLGlCQUFLLEVBQUUsT0FBMUM7QUFBbURDLHNCQUFVLEVBQUU7QUFBL0QsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU1JLHFFQUFDLDBEQUFEO0FBQWUsVUFBSSxFQUFDLE1BQXBCO0FBQTJCLFdBQUssRUFBRWQsTUFBbEM7QUFBMEMsY0FBUSxFQUFFLGtCQUFBZSxDQUFDO0FBQUEsZUFBSWQsU0FBUyxDQUFDYyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsT0FBckQ7QUFBb0YsaUJBQVcsRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSSxxRUFBQywwREFBRDtBQUFnQixXQUFLLEVBQUVmLEtBQXZCO0FBQThCLGlCQUFXLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBUUkscUVBQUMseURBQUQ7QUFBYyxhQUFPLEVBQUU7QUFBQSxlQUFNZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVluQixNQUFaLENBQU47QUFBQSxPQUF2QjtBQUFBLDZCQUFrRDtBQUFHLGFBQUssRUFBRTtBQUFDVyxrQkFBUSxFQUFFLEVBQVg7QUFBZUUsZUFBSyxFQUFFLE9BQXRCO0FBQStCRCxvQkFBVSxFQUFFLE1BQTNDO0FBQW1EUSxtQkFBUyxFQUFFO0FBQTlELFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBaEJRdEIsUTs7S0FBQUEsUTtBQWtCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRhZjA0MDAxMmI2MjM0MTQ2MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q29udGFpbmVyQWRkTWF0Y2gsIElucHV0QWRkTWF0Y2gsIEZvbnROYW1lQW5kUmFua2luZywgQnV0dG9uU3VibWl0fSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuXHJcbmZ1bmN0aW9uIEFkZE1hdGNoICgpIHtcclxuICAgIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtsb3Nlciwgc2V0TG9zZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1wYXRlLCBzZXRFbXBhdGVdID0gdXNlU3RhdGUoMClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckFkZE1hdGNoPlxyXG4gICAgICAgICAgICA8Rm9udE5hbWVBbmRSYW5raW5nPkFkZCBQYXJ0aWRhPC9Gb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9eygpID0+IHNldEVtcGF0ZSgxKX1zdHlsZT17e3dpZHRoOiAyMCwgaGVpZ2h0OiAyMH19IHR5cGU9XCJjaGVja2JveFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48cCBzdHlsZT17e2ZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpbkxlZnQ6IDEwfX0+RW1wYXRlPC9wPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRBZGRNYXRjaCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3aW5uZXJ9IG9uQ2hhbmdlPXtlID0+IHNldFdpbm5lcihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVmVuY2Vkb3JcIiAvPlxyXG4gICAgICAgICAgICA8SW5wdXRBZGRNYXRjaCAgdmFsdWU9e2xvc2VyfSBwbGFjZWhvbGRlcj1cIkRlcnJvdGFkb1wiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25TdWJtaXQgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cod2lubmVyKX0+PHAgc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBcIndoaXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5FbnZpYXI8L3A+PC9CdXR0b25TdWJtaXQ+XHJcbiAgICAgICAgPC9Db250YWluZXJBZGRNYXRjaD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9