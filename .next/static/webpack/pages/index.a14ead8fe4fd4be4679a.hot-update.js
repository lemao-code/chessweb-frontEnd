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
    var dateGame = new Date("".concat(data));
    var formatedDate = dateGame.toString();
    var cutDate = formatedDate.slice(0, 25);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: cutDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerLastMatches"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["FontNameAndRanking"], {
      children: "\xDAltimas partidas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
          lineNumber: 40,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Vencedor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideLoser"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 97
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Derrotado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideEmpate"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["GuideText"], {
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
              lineNumber: 49,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
              lineNumber: 58,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          marginTop: -5,
          marginLeft: 30
        },
        children: lastmatchs.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              style: {
                fontSize: 13,
                color: "#00FFFF",
                marginTop: 15
              },
              children: formatDate(element.data)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXN0TWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJMYXN0TWF0Y2hzIiwidXNlU3RhdGUiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwiZm9ybWF0RGF0ZSIsImRhdGVHYW1lIiwiRGF0ZSIsImZvcm1hdGVkRGF0ZSIsInRvU3RyaW5nIiwiY3V0RGF0ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsImVsZW1lbnQiLCJpIiwiZW1wYXRlIiwicDEiLCJwMiIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsU0FBU0EsVUFBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUVpQkMsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFWkMsVUFGWTtBQUFBLE1BRUFDLGFBRkE7O0FBQUEsbUJBR3FCRixzREFBUSxDQUFDLEtBQUQsQ0FIN0I7QUFBQSxNQUdaRyxZQUhZO0FBQUEsTUFHRUMsZUFIRjs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxpQkFBYTtBQUNoQixHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUxtQixXQVVKQSxhQVZJO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdTQVVuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxrQ0FBVixDQUQzQjs7QUFBQTtBQUFBO0FBQ1lDLGtCQURaLG9CQUNZ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QUFvQix3QkFBVSxFQUFFO0FBQUEsdUJBQU1ELE9BQU8sQ0FBQ0UsTUFBUixHQUFpQixNQUFqQixHQUEwQixLQUFoQztBQUFBLGVBQWhDO0FBQUEsOEJBQXlFRixPQUFPLENBQUNJLEVBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQTZCSCxDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSO0FBS0MsU0FOSjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWQyxlQW1CQTtBQUFLLGFBQUssRUFBRTtBQUFDSSxtQkFBUyxFQUFFLENBQUMsQ0FBYjtBQUFnQkMsb0JBQVUsRUFBRTtBQUE1QixTQUFaO0FBQUEsa0JBQ0s5QixVQUFVLENBQUN1QixHQUFYLENBQWUsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQzVCLDhCQUNJO0FBQUEsbUNBQ0k7QUFBRyxtQkFBSyxFQUFFO0FBQUNNLHdCQUFRLEVBQUUsRUFBWDtBQUFlQyxxQkFBSyxFQUFFLFNBQXRCO0FBQWlDSCx5QkFBUyxFQUFFO0FBQTVDLGVBQVY7QUFBQSx3QkFBNERmLFVBQVUsQ0FBQ1UsT0FBTyxDQUFDaEIsSUFBVDtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVWlCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILFNBTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIOztHQXBFUTNCLFU7O0tBQUFBLFU7QUF1RU1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExNGVhZDhmZTRmZDRiZTQ2NzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lckxhc3RNYXRjaGVzLCBGb250TmFtZUFuZFJhbmtpbmcsTmFtZUxhc3RNYXRjaHNXaW5uZXIsIE5hbWVMYXN0TWF0Y2hMb3NlciwgQ29udGFpbmVyTmFtZUxhc3RNYXRjaCwgXHJcbiAgICAgICAgQm94TGFzdE1hdGNocywgR3VpZGVUZXh0LCBHdWlkZVdpbm5lciwgR3VpZGVMb3NlciwgR3VpZGVFbXBhdGUsIENvbnRhaW5lckd1aWRlfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZnVuY3Rpb24gTGFzdE1hdGNocyAoKSB7XHJcblxyXG4gICAgY29uc3QgW2xhc3RtYXRjaHMsIHNldExhc3RtYXRjaHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZW1wYXRlQm9yZGVyLCBzZXRFbXBhdGVCb3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TGFzdE1hdGNocygpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMYXN0TWF0Y2hzICgpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2xhc3RtYXRjaHMnKVxyXG4gICAgICAgIGxldCBhcnJheXJldmVyc2UgPSBkYXRhLnJldmVyc2UoKVxyXG4gICAgICAgIGxldCBjb3J0YWRvID0gYXJyYXlyZXZlcnNlLnNsaWNlKDAsMTApXHJcbiAgICAgICAgc2V0TGFzdG1hdGNocyhwcmV2U3RhdGUgPT4gKFsuLi5sYXN0bWF0Y2hzLCAuLi5jb3J0YWRvXSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUgKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkYXRlR2FtZSA9ICBuZXcgRGF0ZShgJHtkYXRhfWApXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWREYXRlID0gZGF0ZUdhbWUudG9TdHJpbmcoKVxyXG4gICAgICAgIGNvbnN0IGN1dERhdGUgPSBmb3JtYXRlZERhdGUuc2xpY2UoMCwyNSlcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj57Y3V0RGF0ZX08L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJMYXN0TWF0Y2hlcz5cclxuICAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICDDmmx0aW1hcyBwYXJ0aWRhc1xyXG4gICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXJHdWlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT48R3VpZGVXaW5uZXIgLz4gPEd1aWRlVGV4dD5WZW5jZWRvcjwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCAgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PiA8R3VpZGVMb3NlciAvPiA8R3VpZGVUZXh0PkRlcnJvdGFkbzwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PjxHdWlkZUVtcGF0ZSAvPiA8R3VpZGVUZXh0PkVtcGF0ZTwvR3VpZGVUZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXJHdWlkZT5cclxuICAgICAgICAgICAgPEJveExhc3RNYXRjaHM+XHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xhc3RtYXRjaHMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyTmFtZUxhc3RNYXRjaCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVMYXN0TWF0Y2hzV2lubmVyIGNvbG9yd2lubmVyPXsoKSA9PiBlbGVtZW50LmVtcGF0ZSA/IFwiYmx1ZVwiIDogXCJncmVlblwifT57ZWxlbWVudC5wMX0gPC9OYW1lTGFzdE1hdGNoc1dpbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXJOYW1lTGFzdE1hdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lck5hbWVMYXN0TWF0Y2gga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lTGFzdE1hdGNoTG9zZXIgY29sb3JMb3Nlcj17KCkgPT4gZWxlbWVudC5lbXBhdGUgPyBcImJsdWVcIiA6IFwicmVkXCJ9PiB7ZWxlbWVudC5wMn08L05hbWVMYXN0TWF0Y2hMb3Nlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXJOYW1lTGFzdE1hdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IC01LCBtYXJnaW5MZWZ0OiAzMH19PlxyXG4gICAgICAgICAgICAgICAge2xhc3RtYXRjaHMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogMTMsIGNvbG9yOiBcIiMwMEZGRkZcIiwgbWFyZ2luVG9wOiAxNX19Pntmb3JtYXREYXRlKGVsZW1lbnQuZGF0YSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94TGFzdE1hdGNocz5cclxuICAgICAgICA8L0NvbnRhaW5lckxhc3RNYXRjaGVzPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdE1hdGNocyJdLCJzb3VyY2VSb290IjoiIn0=