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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
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
      lineNumber: 25,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["BoxLastMatchs"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: lastmatchs.map(function (element, i) {
          if (element.empate == 1) {
            var _border = function _border() {
              setEmpateBorder("blue");
              console.log('rodou?');
            };

            _border();
          }

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchsWinner"], {
              colorwinner: empateBorder,
              children: [element.p1, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: lastmatchs.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_4__["NameLastMatchLoser"], {
              colorLoser: empateBorder,
              children: [" ", element.p2]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(LastMatchs, "impI7+ZgxT5ysM2roTdPuJoO+Lo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXN0TWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJMYXN0TWF0Y2hzIiwidXNlU3RhdGUiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwibWFwIiwiZWxlbWVudCIsImkiLCJlbXBhdGUiLCJfYm9yZGVyIiwiY29uc29sZSIsImxvZyIsInAxIiwicDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxVQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVaQyxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHcUJGLHNEQUFRLENBQUMsSUFBRCxDQUg3QjtBQUFBLE1BR1pHLFlBSFk7QUFBQSxNQUdFQyxlQUhGOztBQUtuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGlCQUFhO0FBQ2hCLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBTG1CLFdBVUpBLGFBVkk7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1NBVW5CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGtDQUFWLENBRDNCOztBQUFBO0FBQUE7QUFDWUMsa0JBRFosb0JBQ1lBLElBRFo7QUFFUUMsMEJBRlIsR0FFdUJELElBQUksQ0FBQ0UsT0FBTCxFQUZ2QjtBQUdRQyxxQkFIUixHQUdrQkYsWUFBWSxDQUFDRyxLQUFiLENBQW1CLENBQW5CLEVBQXFCLEVBQXJCLENBSGxCO0FBSUlYLDJCQUFhLENBQUMsVUFBQVksU0FBUztBQUFBLCtLQUFTYixVQUFULGlKQUF3QlcsT0FBeEI7QUFBQSxlQUFWLENBQWI7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FWbUI7QUFBQTtBQUFBOztBQWlCbkIsc0JBQ0kscUVBQUMsaUVBQUQ7QUFBQSw0QkFDSyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURMLGVBSUkscUVBQUMsMERBQUQ7QUFBQSw4QkFDRDtBQUFBLGtCQUNFWCxVQUFVLENBQUNjLEdBQVgsQ0FBZSxVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDNUIsY0FBR0QsT0FBTyxDQUFDRSxNQUFSLElBQWtCLENBQXJCLEVBQXdCO0FBQUEsZ0JBQ1pDLE9BRFksR0FDckIsU0FBU0EsT0FBVCxHQUFvQjtBQUNuQmYsNkJBQWUsQ0FBQyxNQUFELENBQWY7QUFDQWdCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsYUFKb0I7O0FBS3JCRixtQkFBTztBQUNUOztBQUNELDhCQUNRLHFFQUFDLG1FQUFEO0FBQUEsbUNBQ0kscUVBQUMsaUVBQUQ7QUFBc0IseUJBQVcsRUFBRWhCLFlBQW5DO0FBQUEseUJBQWtEYSxPQUFPLENBQUNNLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFLSCxTQWJBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURDLGVBaUJEO0FBQUEsa0JBQ0VyQixVQUFVLENBQUNjLEdBQVgsQ0FBZSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUMzQiw4QkFDUSxxRUFBQyxtRUFBRDtBQUFBLG1DQUNJLHFFQUFDLCtEQUFEO0FBQW9CLHdCQUFVLEVBQUVkLFlBQWhDO0FBQUEsOEJBQWdEYSxPQUFPLENBQUNPLEVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFLQyxTQU5KO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDs7R0FuRFF4QixVOztLQUFBQSxVO0FBc0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zN2IyYWYxMjBhNTRjNWM2M2FhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJMYXN0TWF0Y2hlcywgRm9udE5hbWVBbmRSYW5raW5nLE5hbWVMYXN0TWF0Y2hzV2lubmVyLCBOYW1lTGFzdE1hdGNoTG9zZXIsIENvbnRhaW5lck5hbWVMYXN0TWF0Y2gsIEJveExhc3RNYXRjaHN9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5mdW5jdGlvbiBMYXN0TWF0Y2hzICgpIHtcclxuXHJcbiAgICBjb25zdCBbbGFzdG1hdGNocywgc2V0TGFzdG1hdGNoc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtlbXBhdGVCb3JkZXIsIHNldEVtcGF0ZUJvcmRlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldExhc3RNYXRjaHMoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TGFzdE1hdGNocyAoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9sYXN0bWF0Y2hzJylcclxuICAgICAgICBsZXQgYXJyYXlyZXZlcnNlID0gZGF0YS5yZXZlcnNlKClcclxuICAgICAgICBsZXQgY29ydGFkbyA9IGFycmF5cmV2ZXJzZS5zbGljZSgwLDEwKVxyXG4gICAgICAgIHNldExhc3RtYXRjaHMocHJldlN0YXRlID0+IChbLi4ubGFzdG1hdGNocywgLi4uY29ydGFkb10pKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckxhc3RNYXRjaGVzPlxyXG4gICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIMOabHRpbWFzIHBhcnRpZGFzXHJcbiAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICA8Qm94TGFzdE1hdGNocz5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZW1wYXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9ib3JkZXIgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVtcGF0ZUJvcmRlcihcImJsdWVcIilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm9kb3U/JylcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIF9ib3JkZXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaHNXaW5uZXIgY29sb3J3aW5uZXI9e2VtcGF0ZUJvcmRlcn0+e2VsZW1lbnQucDF9IDwvTmFtZUxhc3RNYXRjaHNXaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyTmFtZUxhc3RNYXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaExvc2VyIGNvbG9yTG9zZXI9e2VtcGF0ZUJvcmRlcn0+IHtlbGVtZW50LnAyfTwvTmFtZUxhc3RNYXRjaExvc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3hMYXN0TWF0Y2hzPlxyXG4gICAgICAgIDwvQ29udGFpbmVyTGFzdE1hdGNoZXM+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0TWF0Y2hzIl0sInNvdXJjZVJvb3QiOiIifQ==