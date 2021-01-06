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
    return formatedDate;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerLastMatches"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["FontNameAndRanking"], {
      children: "\xDAltimas partidas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
          lineNumber: 36,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Vencedor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideLoser"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 97
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Derrotado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideEmpate"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
              lineNumber: 45,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
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
              lineNumber: 54,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchLoser"], {
              children: formatDate(element.data)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXN0TWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJMYXN0TWF0Y2hzIiwidXNlU3RhdGUiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwiZm9ybWF0RGF0ZSIsImZvcm1hdGVkRGF0ZSIsIkRhdGUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFwIiwiZWxlbWVudCIsImkiLCJlbXBhdGUiLCJwMSIsInAyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsVUFBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFWkMsVUFGWTtBQUFBLE1BRUFDLGFBRkE7O0FBQUEsbUJBR3FCRixzREFBUSxDQUFDLEtBQUQsQ0FIN0I7QUFBQSxNQUdaRyxZQUhZO0FBQUEsTUFHRUMsZUFIRjs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxpQkFBYTtBQUNoQixHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUxtQixXQVVKQSxhQVZJO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdTQVVuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxrQ0FBVixDQUQzQjs7QUFBQTtBQUFBO0FBQ1lDLGtCQURaLG9CQUNZQSxJQURaO0FBRVFDLDBCQUZSLEdBRXVCRCxJQUFJLENBQUNFLE9BQUwsRUFGdkI7QUFHUUMscUJBSFIs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QUFDUyxPQUFPLENBQUNmLElBQVQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQTZCZ0IsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUjtBQU1DLFNBUEo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7O0dBeERRMUIsVTs7S0FBQUEsVTtBQTJETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGY4NmQzMmFlMzcxMTMxYTllMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyTGFzdE1hdGNoZXMsIEZvbnROYW1lQW5kUmFua2luZyxOYW1lTGFzdE1hdGNoc1dpbm5lciwgTmFtZUxhc3RNYXRjaExvc2VyLCBDb250YWluZXJOYW1lTGFzdE1hdGNoLCBcclxuICAgICAgICBCb3hMYXN0TWF0Y2hzLCBHdWlkZVRleHQsIEd1aWRlV2lubmVyLCBHdWlkZUxvc2VyLCBHdWlkZUVtcGF0ZSwgQ29udGFpbmVyR3VpZGV9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5mdW5jdGlvbiBMYXN0TWF0Y2hzICgpIHtcclxuXHJcbiAgICBjb25zdCBbbGFzdG1hdGNocywgc2V0TGFzdG1hdGNoc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlbXBhdGVCb3JkZXIsIHNldEVtcGF0ZUJvcmRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRMYXN0TWF0Y2hzKClcclxuICAgIH0sW10pXHJcblxyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExhc3RNYXRjaHMgKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvbGFzdG1hdGNocycpXHJcbiAgICAgICAgbGV0IGFycmF5cmV2ZXJzZSA9IGRhdGEucmV2ZXJzZSgpXHJcbiAgICAgICAgbGV0IGNvcnRhZG8gPSBhcnJheXJldmVyc2Uuc2xpY2UoMCwxMClcclxuICAgICAgICBzZXRMYXN0bWF0Y2hzKHByZXZTdGF0ZSA9PiAoWy4uLmxhc3RtYXRjaHMsIC4uLmNvcnRhZG9dKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZSAoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdGVkRGF0ZSA9ICBuZXcgRGF0ZShgJHtkYXRhfWApXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybWF0ZWREYXRlKVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZERhdGVcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckxhc3RNYXRjaGVzPlxyXG4gICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIMOabHRpbWFzIHBhcnRpZGFzXHJcbiAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lckd1aWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PjxHdWlkZVdpbm5lciAvPiA8R3VpZGVUZXh0PlZlbmNlZG9yPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsICBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+IDxHdWlkZUxvc2VyIC8+IDxHdWlkZVRleHQ+RGVycm90YWRvPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+PEd1aWRlRW1wYXRlIC8+IDxHdWlkZVRleHQ+RW1wYXRlPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lckd1aWRlPlxyXG4gICAgICAgICAgICA8Qm94TGFzdE1hdGNocz5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJOYW1lTGFzdE1hdGNoIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaHNXaW5uZXIgY29sb3J3aW5uZXI9eygpID0+IGVsZW1lbnQuZW1wYXRlID8gXCJibHVlXCIgOiBcImdyZWVuXCJ9PntlbGVtZW50LnAxfSA8L05hbWVMYXN0TWF0Y2hzV2lubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xhc3RtYXRjaHMubWFwKChlbGVtZW50LGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJOYW1lTGFzdE1hdGNoIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaExvc2VyIGNvbG9yTG9zZXI9eygpID0+IGVsZW1lbnQuZW1wYXRlID8gXCJibHVlXCIgOiBcInJlZFwifT4ge2VsZW1lbnQucDJ9PC9OYW1lTGFzdE1hdGNoTG9zZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaExvc2VyPntmb3JtYXREYXRlKGVsZW1lbnQuZGF0YSl9PC9OYW1lTGFzdE1hdGNoTG9zZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyTmFtZUxhc3RNYXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveExhc3RNYXRjaHM+XHJcbiAgICAgICAgPC9Db250YWluZXJMYXN0TWF0Y2hlcz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RNYXRjaHMiXSwic291cmNlUm9vdCI6IiJ9