webpackHotUpdate_N_E("pages/Perfil",{

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

  var _this = this,
      _ref2;

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
                  children: [" Rating \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", element.rating]
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
                  children: [" Vit\xF3rias \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", element.vitorias_total]
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
          style: (_ref2 = {
            color: "white",
            textAlign: "center",
            fontSize: 25
          }, Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "color", "#FF0000"), Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "fontWeight", "bold"), _ref2),
          children: "Contras"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          style: {
            color: "white",
            textAlign: "center"
          },
          children: " Vitoria / Derrota | Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 20
        }, this), getperfil[0].contras.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_7__["default"], {
            contras: element
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGVyZmlsLmpzIl0sIm5hbWVzIjpbIlBlcmZpbCIsInVzZVN0YXRlIiwiZ2V0cGVyZmlsIiwic2V0R2V0UGVyZmlsIiwidXNlRWZmZWN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsInBlcmZpbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJjb250cmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQW1CO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUU5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osdVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1NDLGdCQURULEdBQ2NDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQURkO0FBQUE7QUFBQTtBQUFBLHFCQUk4QkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLDhCQUFYLEVBQTJDO0FBQ2xFLHNCQUFNSjtBQUQ0RCxlQUEzQyxDQUo5Qjs7QUFBQTtBQUlhSyxzQkFKYjtBQU9PUix1QkFBUyxDQUFDUyxJQUFWLENBQWVELFFBQVEs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QUUsT0FBUjtBQUFrQkcscUJBQVMsRUFBRTtBQUE3QixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNCSCxFQTRCS3pCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYW1DLE9BQWIsQ0FBcUJoQixHQUFyQixDQUF5QixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFFdEMsOEJBQVEscUVBQUMsMkRBQUQ7QUFBUyxtQkFBTyxFQUFFRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFSO0FBRUgsU0FKQSxDQTVCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOENIOztHQW5FdUJ0QixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BlcmZpbC5jMDc0NjIyNmU5MjhiZDk1ZTMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQZXJmaWxXb3Jkc30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmltcG9ydCBDb250cmFzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJhcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZmlsICgpIHtcclxuICAgIGNvbnN0IFtnZXRwZXJmaWwsIHNldEdldFBlcmZpbF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3BlcmZpbCcsIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBnZXRwZXJmaWwucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0R2V0UGVyZmlsKFsuLi5nZXRwZXJmaWwsIHJlc3BvbnNlLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSgpXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxib2R5IHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Ub3A6IC0zMCwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fSA+XHJcbiAgICAgICAgICAgIHtnZXRwZXJmaWwgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtIGRhZG9vb29vb29vb29vb29vb3NcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0ucGVyZmlsLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogMjksIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+UGVyZmlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IDMwLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgY29sb3I6IFwiIzAwRkZGRlwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT57ZWxlbWVudC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFJhdGluZyAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDt7ZWxlbWVudC5yYXRpbmd9PC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFZpdMOzcmlhcyAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDt7ZWxlbWVudC52aXRvcmlhc190b3RhbH08L1BlcmZpbFdvcmRzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gRGVycm90YXMgIHtlbGVtZW50LmRlcnJvdGFzX3RvdGFsfSA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPkVtcGF0ZXMge2VsZW1lbnQuZW1wYXRlc190b3RhaXN9IDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjUsIGNvbG9yOiBcIiNGRjAwMDBcIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fT5Db250cmFzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+IFZpdG9yaWEgLyBEZXJyb3RhIHwgRW1wYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0uY29udHJhcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPENvbnRyYXMgY29udHJhcz17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==