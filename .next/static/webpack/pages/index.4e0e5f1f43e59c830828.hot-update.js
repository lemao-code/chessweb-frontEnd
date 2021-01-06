webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LastMatches.js":
/*!***********************************!*\
  !*** ./components/LastMatches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\LastMatches.js",
    _s = $RefreshSig$();





function LastMatchs() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      lastmatchs = _useState[0],
      setLastmatchs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      empateBorder = _useState2[0],
      setEmpateBorder = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    getLastMatchs();
  }, []);

  function getLastMatchs() {
    return _getLastMatchs.apply(this, arguments);
  }

  function _getLastMatchs() {
    _getLastMatchs = Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios$get, data, arrayreverse, cortado;

      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:3333/lastmatchs');

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              arrayreverse = data.reverse();
              cortado = arrayreverse.slice(0, 10);
              setLastmatchs(function (prevState) {
                return [].concat(Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(lastmatchs), Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cortado));
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getLastMatchs.apply(this, arguments);
  }

  function formatDate(data) {
    var formatedDate = new Date("".concat(data));
    console.log(formatedDate);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchLoser"], {
      children: formatedDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerLastMatches"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["FontNameAndRanking"], {
      children: "\xDAltimas partidas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerGuide"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideWinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Vencedor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideLoser"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 97
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Derrotado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideEmpate"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["BoxLastMatchs"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: lastmatchs.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchsWinner"], {
              colorwinner: function colorwinner() {
                return element.empate ? "blue" : "green";
              },
              children: [element.p1, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: lastmatchs.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerNameLastMatch"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchLoser"], {
              colorLoser: function colorLoser() {
                return element.empate ? "blue" : "red";
              },
              children: [" ", element.p2]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this), formatDateformatDate()]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(LastMatchs, "SGO7gRYekgz+jF7MFYC6YHKDhrs=");

_c = LastMatchs;
/* harmony default export */ __webpack_exports__["default"] = (LastMatchs);

var _c;

$RefreshReg$(_c, "LastMatchs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXN0TWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJMYXN0TWF0Y2hzIiwidXNlU3RhdGUiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwiZm9ybWF0RGF0ZSIsImZvcm1hdGVkRGF0ZSIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFwIiwiZWxlbWVudCIsImkiLCJlbXBhdGUiLCJwMSIsInAyIiwiZm9ybWF0RGF0ZWZvcm1hdERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFHQSxTQUFTQSxVQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVaQyxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHcUJGLHNEQUFRLENBQUMsS0FBRCxDQUg3QjtBQUFBLE1BR1pHLFlBSFk7QUFBQSxNQUdFQyxlQUhGOztBQUtuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGlCQUFhO0FBQ2hCLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBTG1CLFdBVUpBLGFBVkk7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1NBVW5CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGtDQUFWLENBRDNCOztBQUFBO0FBQUE7QUFDWUMsa0JBRFosb0JBQ1lBLElBRFo7QUFFUUMsMEJBRlIsR0FFdUJELElBQUksQ0FBQ0Us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LEVBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLQyxvQkFBb0IsRUFGekI7QUFBQSxhQUE2QkosQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUjtBQU1DLFNBUEo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7O0dBMURRMUIsVTs7S0FBQUEsVTtBQTZETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGUwZTVmMWY0M2U1OWM4MzA4MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyTGFzdE1hdGNoZXMsIEZvbnROYW1lQW5kUmFua2luZyxOYW1lTGFzdE1hdGNoc1dpbm5lciwgTmFtZUxhc3RNYXRjaExvc2VyLCBDb250YWluZXJOYW1lTGFzdE1hdGNoLCBcclxuICAgICAgICBCb3hMYXN0TWF0Y2hzLCBHdWlkZVRleHQsIEd1aWRlV2lubmVyLCBHdWlkZUxvc2VyLCBHdWlkZUVtcGF0ZSwgQ29udGFpbmVyR3VpZGV9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5mdW5jdGlvbiBMYXN0TWF0Y2hzICgpIHtcclxuXHJcbiAgICBjb25zdCBbbGFzdG1hdGNocywgc2V0TGFzdG1hdGNoc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlbXBhdGVCb3JkZXIsIHNldEVtcGF0ZUJvcmRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRMYXN0TWF0Y2hzKClcclxuICAgIH0sW10pXHJcblxyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExhc3RNYXRjaHMgKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvbGFzdG1hdGNocycpXHJcbiAgICAgICAgbGV0IGFycmF5cmV2ZXJzZSA9IGRhdGEucmV2ZXJzZSgpXHJcbiAgICAgICAgbGV0IGNvcnRhZG8gPSBhcnJheXJldmVyc2Uuc2xpY2UoMCwxMClcclxuICAgICAgICBzZXRMYXN0bWF0Y2hzKHByZXZTdGF0ZSA9PiAoWy4uLmxhc3RtYXRjaHMsIC4uLmNvcnRhZG9dKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZSAoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkRGF0ZSA9ICBuZXcgRGF0ZShgJHtkYXRhfWApXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybWF0ZWREYXRlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYW1lTGFzdE1hdGNoTG9zZXI+e2Zvcm1hdGVkRGF0ZX08L05hbWVMYXN0TWF0Y2hMb3Nlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJMYXN0TWF0Y2hlcz5cclxuICAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICDDmmx0aW1hcyBwYXJ0aWRhc1xyXG4gICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXJHdWlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT48R3VpZGVXaW5uZXIgLz4gPEd1aWRlVGV4dD5WZW5jZWRvcjwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCAgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PiA8R3VpZGVMb3NlciAvPiA8R3VpZGVUZXh0PkRlcnJvdGFkbzwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PjxHdWlkZUVtcGF0ZSAvPiA8R3VpZGVUZXh0PkVtcGF0ZTwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXJHdWlkZT5cclxuICAgICAgICAgICAgPEJveExhc3RNYXRjaHM+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xhc3RtYXRjaHMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyTmFtZUxhc3RNYXRjaCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVMYXN0TWF0Y2hzV2lubmVyIGNvbG9yd2lubmVyPXsoKSA9PiBlbGVtZW50LmVtcGF0ZSA/IFwiYmx1ZVwiIDogXCJncmVlblwifT57ZWxlbWVudC5wMX0gPC9OYW1lTGFzdE1hdGNoc1dpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXJOYW1lTGFzdE1hdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsYXN0bWF0Y2hzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyTmFtZUxhc3RNYXRjaCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVMYXN0TWF0Y2hMb3NlciBjb2xvckxvc2VyPXsoKSA9PiBlbGVtZW50LmVtcGF0ZSA/IFwiYmx1ZVwiIDogXCJyZWRcIn0+IHtlbGVtZW50LnAyfTwvTmFtZUxhc3RNYXRjaExvc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGVmb3JtYXREYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyTmFtZUxhc3RNYXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveExhc3RNYXRjaHM+XHJcbiAgICAgICAgPC9Db250YWluZXJMYXN0TWF0Y2hlcz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RNYXRjaHMiXSwic291cmNlUm9vdCI6IiJ9