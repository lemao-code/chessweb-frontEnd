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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerLastMatches"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["FontNameAndRanking"], {
      children: "\xDAltimas partidas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerGuide"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideWinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 74
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Vencedor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 90
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideLoser"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 74
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Derrotado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 89
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideEmpate"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
              lineNumber: 39,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: lastmatchs.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchLoser"], {
              colorLoser: function colorLoser() {
                return element.empate ? "blue" : "red";
              },
              children: [" ", element.p2]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXN0TWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJMYXN0TWF0Y2hzIiwidXNlU3RhdGUiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFwIiwiZWxlbWVudCIsImkiLCJlbXBhdGUiLCJwMSIsInAyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsVUFBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFWkMsVUFGWTtBQUFBLE1BRUFDLGFBRkE7O0FBQUEsbUJBR3FCRixzREFBUSxDQUFDLEtBQUQsQ0FIN0I7QUFBQSxNQUdaRyxZQUhZO0FBQUEsTUFHRUMsZUFIRjs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxpQkFBYTtBQUNoQixHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUxtQixXQVVKQSxhQVZJO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdTQVVuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxrQ0FBVixDQUQzQjs7QUFBQTtBQUFBO0FBQ1lDLGtCQURaLG9CQUNZQSxJQURaO0FBRVFDLDBCQUZSLEdBRXVCRCxJQUFJLENBQUNFLE9BQUwsRUFGdkI7QUFHUUMscUJBSFIsR0FHa0JGLFlBQVksQ0FBQ0csS0FBYixDQUFtQixDQUFuQixFQUFxQixFQUFyQixDQUhsQjtBQUlJWCwyQkFBYSxDQUFDLFVBQUFZLFNBQVM7QUFBQSwrS0FBU2IsVUFBVCxpSkFBd0JXLE9BQXhCO0FBQUEsZUFBVixDQUFiOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVm1CO0FBQUE7QUFBQTs7QUFpQm5CLHNCQUNJLHFFQUFDLGlFQUFEO0FBQUEsNEJBQ0sscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETCxlQUlRLHFFQUFDLDJEQUFEO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0csaUJBQU8sRUFBRSxNQUFWO0FBQWtCQyx1QkFBYSxFQUFFO0FBQWpDLFNBQVo7QUFBQSxnQ0FBcUQscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBckQsb0JBQXFFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVHO0FBQUssYUFBSyxFQUFFO0FBQUNELGlCQUFPLEVBQUUsTUFBVjtBQUFrQkMsdUJBQWEsRUFBRTtBQUFqQyxTQUFaO0FBQUEscUNBQXNELHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXRELG9CQUFxRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkgsZUFHSTtBQUFLLGFBQUssRUFBRTtBQUFDRCxpQkFBTyxFQUFFLE1BQVY7QUFBa0JDLHVCQUFhLEVBQUUsS0FBakM7QUFBd0NDLG9CQUFVLEVBQUU7QUFBcEQsU0FBWjtBQUFBLGdDQUEyRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzRSxvQkFBMkYscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpSLGVBU0kscUVBQUMsMERBQUQ7QUFBQSw4QkFDRDtBQUFBLGtCQUNFaEIsVUFBVSxDQUFDaUIsR0FBWCxDQUFlLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUM1Qiw4QkFDUSxxRUFBQyxtRUFBRDtBQUFBLG1DQUNJLHFFQUFDLGlFQUFEO0FBQXNCLHlCQUFXLEVBQUU7QUFBQSx1QkFBTUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLE9BQWhDO0FBQUEsZUFBbkM7QUFBQSx5QkFBNkVGLE9BQU8sQ0FBQ0csRUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUjtBQUtILFNBTkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREMsZUFVRDtBQUFBLGtCQUNFckIsVUFBVSxDQUFDaUIsR0FBWCxDQUFlLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQzNCLDhCQUNRLHFFQUFDLG1FQUFEO0FBQUEsbUNBQ0kscUVBQUMsK0RBQUQ7QUFBb0Isd0JBQVUsRUFBRTtBQUFBLHVCQUFNRCxPQUFPLENBQUNFLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsS0FBaEM7QUFBQSxlQUFoQztBQUFBLDhCQUF5RUYsT0FBTyxDQUFDSSxFQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSO0FBS0MsU0FOSjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDs7R0FqRFF4QixVOztLQUFBQSxVO0FBb0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzBiZjRhOGE4YzhlNWFiYTlkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJMYXN0TWF0Y2hlcywgRm9udE5hbWVBbmRSYW5raW5nLE5hbWVMYXN0TWF0Y2hzV2lubmVyLCBOYW1lTGFzdE1hdGNoTG9zZXIsIENvbnRhaW5lck5hbWVMYXN0TWF0Y2gsIFxyXG4gICAgICAgIEJveExhc3RNYXRjaHMsIEd1aWRlVGV4dCwgR3VpZGVXaW5uZXIsIEd1aWRlTG9zZXIsIEd1aWRlRW1wYXRlLCBDb250YWluZXJHdWlkZX0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIExhc3RNYXRjaHMgKCkge1xyXG5cclxuICAgIGNvbnN0IFtsYXN0bWF0Y2hzLCBzZXRMYXN0bWF0Y2hzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2VtcGF0ZUJvcmRlciwgc2V0RW1wYXRlQm9yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldExhc3RNYXRjaHMoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TGFzdE1hdGNocyAoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9sYXN0bWF0Y2hzJylcclxuICAgICAgICBsZXQgYXJyYXlyZXZlcnNlID0gZGF0YS5yZXZlcnNlKClcclxuICAgICAgICBsZXQgY29ydGFkbyA9IGFycmF5cmV2ZXJzZS5zbGljZSgwLDEwKVxyXG4gICAgICAgIHNldExhc3RtYXRjaHMocHJldlN0YXRlID0+IChbLi4ubGFzdG1hdGNocywgLi4uY29ydGFkb10pKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckxhc3RNYXRjaGVzPlxyXG4gICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIMOabHRpbWFzIHBhcnRpZGFzXHJcbiAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lckd1aWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIn19PjxHdWlkZVdpbm5lciAvPiA8R3VpZGVUZXh0PlZlbmNlZG9yPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCJ9fT4gPEd1aWRlTG9zZXIgLz4gPEd1aWRlVGV4dD5EZXJyb3RhZG88L0d1aWRlVGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT48R3VpZGVFbXBhdGUgLz4gPEd1aWRlVGV4dD5FbXBhdGU8L0d1aWRlVGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyR3VpZGU+XHJcbiAgICAgICAgICAgIDxCb3hMYXN0TWF0Y2hzPlxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsYXN0bWF0Y2hzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaHNXaW5uZXIgY29sb3J3aW5uZXI9eygpID0+IGVsZW1lbnQuZW1wYXRlID8gXCJibHVlXCIgOiBcImdyZWVuXCJ9PntlbGVtZW50LnAxfSA8L05hbWVMYXN0TWF0Y2hzV2lubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xhc3RtYXRjaHMubWFwKChlbGVtZW50LGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJOYW1lTGFzdE1hdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVMYXN0TWF0Y2hMb3NlciBjb2xvckxvc2VyPXsoKSA9PiBlbGVtZW50LmVtcGF0ZSA/IFwiYmx1ZVwiIDogXCJyZWRcIn0+IHtlbGVtZW50LnAyfTwvTmFtZUxhc3RNYXRjaExvc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3hMYXN0TWF0Y2hzPlxyXG4gICAgICAgIDwvQ29udGFpbmVyTGFzdE1hdGNoZXM+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0TWF0Y2hzIl0sInNvdXJjZVJvb3QiOiIifQ==