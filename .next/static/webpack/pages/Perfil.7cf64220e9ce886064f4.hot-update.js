webpackHotUpdate_N_E("pages/Perfil",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/Perfil.js":
/*!*************************!*\
  !*** ./pages/Perfil.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perfil; });
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var _components_Contras__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Contras */ "./components/Contras.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\pages\\Perfil.js",
    _s = $RefreshSig$();





function Perfil() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      getperfil = _useState[0],
      setGetPerfil = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var id, response;
      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = localStorage.getItem('id');
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:3333/perfil', {
                "id": id
              });

            case 4:
              response = _context.sent;
              getperfil.push(response.data);
              setGetPerfil([].concat(Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(getperfil), [response.data]));
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log('error');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("body", {
    style: {
      margin: 0,
      marginTop: -30,
      backgroundColor: "black"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        backgroundColor: "black",
        height: "100%",
        width: "100%"
      },
      children: getperfil == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: "sem dadooooooooooooooos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [getperfil[0].perfil.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              style: {
                color: "white",
                fontSize: 29,
                fontWeight: "bold",
                textAlign: "center"
              },
              children: "Perfil"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                  style: {
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#00FFFF",
                    textAlign: "center"
                  },
                  children: element.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_6__["PerfilWords"], {
                  children: [" Rating ", element.rating]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_6__["PerfilWords"], {
                  children: [" Vit\xF3rias  ", element.vitorias_total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 40
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_6__["PerfilWords"], {
                  children: [" Derrotas  ", element.derrotas_total, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_6__["PerfilWords"], {
                  children: ["Empates ", element.empates_totais, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 40
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          style: Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
            color: "white",
            textAlign: "center",
            fontSize: 25
          }, "color", "#FF0000"),
          children: "Contras"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 20
        }, this), getperfil[0].contras.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_7__["default"], {
            contras: element
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(Perfil, "s+xjrReT4JfNWeLfmYE3Rqt4DbM=");

_c = Perfil;

var _c;

$RefreshReg$(_c, "Perfil");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9QZXJmaWwuanMiXSwibmFtZXMiOlsiUGVyZmlsIiwidXNlU3RhdGUiLCJnZXRwZXJmaWwiLCJzZXRHZXRQZXJmaWwiLCJ1c2VFZmZlY3QiLCJpZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsInB1c2giLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwicGVyZmlsIiwibWFwIiwiZWxlbWVudCIsImkiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibmFtZSIsInJhdGluZyIsInZpdG9yaWFzX3RvdGFsIiwiZGVycm90YXNfdG90YWwiLCJlbXBhdGVzX3RvdGFpcyIsImNvbnRyYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUU5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osdVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1NDLGdCQURULEdBQ2NDLFlB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QUdaLGlCQUFLLEVBQUUsT0FBVjtBQUFtQkcscUJBQVMsRUFBRSxRQUE5QjtBQUF3Q0Ysb0JBQVEsRUFBRTtBQUFsRCxzQkFBNkQsU0FBN0QsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkgsRUEwQkt2QixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFtQyxPQUFiLENBQXFCaEIsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBRXRDLDhCQUFRLHFFQUFDLDJEQUFEO0FBQVMsbUJBQU8sRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUjtBQUVILFNBSkEsQ0ExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRDSDs7R0FqRXVCdEIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9QZXJmaWwuN2NmNjQyMjBlOWNlODg2MDY0ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UGVyZmlsV29yZHN9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgQ29udHJhcyBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRyYXMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcmZpbCAoKSB7XHJcbiAgICBjb25zdCBbZ2V0cGVyZmlsLCBzZXRHZXRQZXJmaWxdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9wZXJmaWwnLCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZ2V0cGVyZmlsLnB1c2gocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldEdldFBlcmZpbChbLi4uZ2V0cGVyZmlsLCByZXNwb25zZS5kYXRhXSlcclxuXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Ym9keSBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luVG9wOiAtMzAsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wiICwgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwifX0gPlxyXG4gICAgICAgICAgICB7Z2V0cGVyZmlsID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbSBkYWRvb29vb29vb29vb29vb29zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0cGVyZmlsWzBdLnBlcmZpbC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IDI5LCBmb250V2VpZ2h0OiBcImJvbGRcIiAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlBlcmZpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiAzMCwgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcIiMwMEZGRkZcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+e2VsZW1lbnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBSYXRpbmcge2VsZW1lbnQucmF0aW5nfTwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBWaXTDs3JpYXMgIHtlbGVtZW50LnZpdG9yaWFzX3RvdGFsfTwvUGVyZmlsV29yZHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBEZXJyb3RhcyAge2VsZW1lbnQuZGVycm90YXNfdG90YWx9IDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+RW1wYXRlcyB7ZWxlbWVudC5lbXBhdGVzX3RvdGFpc30gPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyNSwgY29sb3I6IFwiI0ZGMDAwMFwifX0+Q29udHJhczwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0cGVyZmlsWzBdLmNvbnRyYXMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIDxDb250cmFzIGNvbnRyYXM9e2VsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=