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
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            width: "100%",
            borderBottom: 1,
            borderBottomColor: "white"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
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
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), getperfil[0].contras.map(function (element, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_7__["default"], {
            contras: element
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGVyZmlsLmpzIl0sIm5hbWVzIjpbIlBlcmZpbCIsInVzZVN0YXRlIiwiZ2V0cGVyZmlsIiwic2V0R2V0UGVyZmlsIiwidXNlRWZmZWN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsInBlcmZpbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJib3JkZXJCb3R0b20iLCJib3JkZXJCb3R0b21Db2xvciIsImNvbnRyYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBbUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFlBRFk7O0FBRTlCQyx5REFBUyxDQUFDLFlBQU07QUFDWix1UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDU0MsZ0JBRFQsR0FDY0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBRGQ7QUFBQTtBQUFBO0FBQUEscUJBSThCQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsOEJBQVgsRUFBMkM7QUFDbEUsc0JBQU1KO0FBRDRELGVBQTNDLENBSjlCOztBQUFBO0FBSWFLLHNCQUpi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UyxFQUFFLFFBQTlCO0FBQXdDRixzQkFBUSxFQUFFO0FBQWxELDBLQUE2RCxTQUE3RCxtS0FBb0YsTUFBcEYsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJKLEVBMkJLdkIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhcUMsT0FBYixDQUFxQmxCLEdBQXJCLENBQXlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUV0Qyw4QkFBUSxxRUFBQywyREFBRDtBQUFTLG1CQUFPLEVBQUVEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVI7QUFFSCxTQUpBLENBM0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Q0g7O0dBbEV1QnRCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLjBkMDU4ZTkzNzI5M2QwNDYxODdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BlcmZpbFdvcmRzfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IENvbnRyYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmFzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmaWwgKCkge1xyXG4gICAgY29uc3QgW2dldHBlcmZpbCwgc2V0R2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvcGVyZmlsJywge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGdldHBlcmZpbC5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRHZXRQZXJmaWwoWy4uLmdldHBlcmZpbCwgcmVzcG9uc2UuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pKClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJvZHkgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpblRvcDogLTMwLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiAsIGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIn19ID5cclxuICAgICAgICAgICAge2dldHBlcmZpbCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBzZW0gZGFkb29vb29vb29vb29vb29vc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldHBlcmZpbFswXS5wZXJmaWwubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiAyOSwgZm9udFdlaWdodDogXCJib2xkXCIgLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5QZXJmaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogMzAsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCIjMDBGRkZGXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PntlbGVtZW50Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gUmF0aW5nIHtlbGVtZW50LnJhdGluZ308L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gVml0w7NyaWFzICB7ZWxlbWVudC52aXRvcmlhc190b3RhbH08L1BlcmZpbFdvcmRzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gRGVycm90YXMgIHtlbGVtZW50LmRlcnJvdGFzX3RvdGFsfSA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPkVtcGF0ZXMge2VsZW1lbnQuZW1wYXRlc190b3RhaXN9IDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBib3JkZXJCb3R0b206IDEsIGJvcmRlckJvdHRvbUNvbG9yOiBcIndoaXRlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjUsIGNvbG9yOiBcIiNGRjAwMDBcIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fT5Db250cmFzPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0uY29udHJhcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPENvbnRyYXMgY29udHJhcz17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==