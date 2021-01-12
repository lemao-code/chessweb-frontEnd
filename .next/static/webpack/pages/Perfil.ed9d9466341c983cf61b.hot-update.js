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
                  children: [" Rating \xA0\xA0\xA0", element.rating]
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
                  children: [" Vit\xF3rias \xA0\xA0\xA0", element.vitorias_total]
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
                  children: [" Derrotas\xA0\xA0\xA0  ", element.derrotas_total, " "]
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
                  children: ["Empates\xA0\xA0\xA0 ", element.empates_totais, " "]
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "row"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            style: {
              color: "green",
              textAlign: "center"
            },
            children: " Vitoria "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            style: {
              color: "white",
              fontWeight: "bold",
              marginLeft: 10
            },
            children: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 89
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            style: {
              color: "red",
              textAlign: "center"
            },
            children: " Derrota "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            style: {
              color: "white",
              fontWeight: "bold"
            },
            children: "|"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 87
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
            style: {
              color: "blue",
              textAlign: "center"
            },
            children: "Empate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 20
        }, this), getperfil[0].contras.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_7__["default"], {
            contras: element
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGVyZmlsLmpzIl0sIm5hbWVzIjpbIlBlcmZpbCIsInVzZVN0YXRlIiwiZ2V0cGVyZmlsIiwic2V0R2V0UGVyZmlsIiwidXNlRWZmZWN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsInBlcmZpbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJtYXJnaW5MZWZ0IiwiY29udHJhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFtQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDdkJDLFNBRHVCO0FBQUEsTUFDWkMsWUFEWTs7QUFFOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLHVSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNTQyxnQkFEVCxHQUNjQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FEZDtBQUFBO0FBQUE7QUFBQSxxQkFJOEJDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyw4QkFBWCxFQUEyQztBQUNsRSxzQkFBTUo7QUFENEQsZUFBM0MsQ0FKOUI7O0FBQUE7QUFJYUssc0JBSmI7QUFPT1IsdUJBQVMsQ0FBQ1MsSUFB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QUFBQTtBQUFBLFVBREo7QUFrREg7O0dBdkV1QnRCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLmVkOWQ5NDY2MzQxYzk4M2NmNjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BlcmZpbFdvcmRzfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IENvbnRyYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmFzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmaWwgKCkge1xyXG4gICAgY29uc3QgW2dldHBlcmZpbCwgc2V0R2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvcGVyZmlsJywge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGdldHBlcmZpbC5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRHZXRQZXJmaWwoWy4uLmdldHBlcmZpbCwgcmVzcG9uc2UuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pKClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJvZHkgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpblRvcDogLTMwLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiAsIGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIn19ID5cclxuICAgICAgICAgICAge2dldHBlcmZpbCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBzZW0gZGFkb29vb29vb29vb29vb29vc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldHBlcmZpbFswXS5wZXJmaWwubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiAyOSwgZm9udFdlaWdodDogXCJib2xkXCIgLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5QZXJmaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogMzAsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCIjMDBGRkZGXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PntlbGVtZW50Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gUmF0aW5nICZuYnNwOyZuYnNwOyZuYnNwO3tlbGVtZW50LnJhdGluZ308L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gVml0w7NyaWFzICZuYnNwOyZuYnNwOyZuYnNwO3tlbGVtZW50LnZpdG9yaWFzX3RvdGFsfTwvUGVyZmlsV29yZHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBEZXJyb3RhcyZuYnNwOyZuYnNwOyZuYnNwOyAge2VsZW1lbnQuZGVycm90YXNfdG90YWx9IDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+RW1wYXRlcyZuYnNwOyZuYnNwOyZuYnNwOyB7ZWxlbWVudC5lbXBhdGVzX3RvdGFpc30gPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiAyNSwgY29sb3I6IFwiI0ZGMDAwMFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19PkNvbnRyYXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJncmVlblwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+IFZpdG9yaWEgPC9wPiA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpbkxlZnQ6IDEwfX0+LzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PiBEZXJyb3RhIDwvcD4gPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCBmb250V2VpZ2h0OlwiYm9sZFwifX0+fDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibHVlXCIgLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5FbXBhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldHBlcmZpbFswXS5jb250cmFzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICA8Q29udHJhcyBjb250cmFzPXtlbGVtZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9