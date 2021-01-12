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
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var _components_Contras__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contras */ "./components/Contras.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\pages\\Perfil.js",
    _s = $RefreshSig$();





function Perfil() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      getperfil = _useState[0],
      setGetPerfil = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, response;
      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = localStorage.getItem('id');
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://localhost:3333/perfil', {
                "id": id
              });

            case 4:
              response = _context.sent;
              getperfil.push(response.data);
              setGetPerfil([].concat(Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(getperfil), [response.data]));
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    style: {
      backgroundColor: "black",
      height: "100%",
      width: "100%",
      marginTop: -10
    },
    children: getperfil == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: "sem dadooooooooooooooos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [getperfil[0].perfil.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            style: {
              color: "white",
              fontSize: 29,
              fontWeight: "bold",
              textAlign: "center"
            },
            children: "Perfil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["PerfilWords"], {
                children: element.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["PerfilWords"], {
                children: [" Rating ", element.rating]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["PerfilWords"], {
                children: [" Vit\xF3rias  ", element.vitorias_total]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 40
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["PerfilWords"], {
                children: [" Derrotas  ", element.derrotas_total, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Empates ", element.empates_totais]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 29
        }, _this);
      }), getperfil[0].contras.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_6__["default"], {
          contras: element
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 33
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGVyZmlsLmpzIl0sIm5hbWVzIjpbIlBlcmZpbCIsInVzZVN0YXRlIiwiZ2V0cGVyZmlsIiwic2V0R2V0UGVyZmlsIiwidXNlRWZmZWN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInBlcmZpbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJjb250cmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFlBRFk7O0FBRTlCQyx5REFBUyxDQUFDLFlBQU07QUFDWix1UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDU0MsZ0JBRFQsR0FDY0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBRGQ7QUFBQTtBQUFBO0FBQUEscUJBSThCQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsOEJBQVgsRUFBMkM7QUFDbEUsc0JBQU1KO0FBRDRELGVBQTNDLENBSjlCOztBQUFBO0FBSWFLLHNCQUpiO0FBT09SLHVCQUFTLENBQUNTLElBQVYsQ0FBZUQsUUFBUSxDQUFDRSxJQUF4QjtBQUNBVCwwQkFBWSx5SkFBS0QsU0FBTCxJQUFnQlEsUUFBUSxDQUFDRSxJQUF6QixHQUFaO0FBUlA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXT0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWdCSCxHQWpCUSxFQWlCUCxFQWpCTyxDQUFUO0FBbUJBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUUsT0FBbEI7QUFBNEJDLFlBQU0sRUFBRSxNQUFwQztBQUE0Q0MsV0FBSyxFQUFFLE1BQW5EO0FBQTJEQyxlQUFTLEVBQUUsQ0FBQztBQUF2RSxLQUFaO0FBQUEsY0FDS2hCLFNBQVMsSUFBSSxDQUFiLGdCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZ0JBS0c7QUFBQSxpQkFDS0EsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhaUIsTUFBYixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ3JDLDRCQUNJO0FBQUEsa0NBQ0k7QUFBRyxpQkFBSyxFQUFFO0FBQUNDLG1CQUFLLEVBQUUsT0FBUjtBQUFpQkMsc0JBQVEsRUFBRSxFQUEzQjtBQUErQkMsd0JBQVUsRUFBRSxNQUEzQztBQUFvREMsdUJBQVMsRUFBRTtBQUEvRCxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNDLHFCQUFPLEVBQUUsTUFBVjtBQUFrQkMsMkJBQWEsRUFBRTtBQUFqQyxhQUFaO0FBQUEsb0NBQ0k7QUFBQSxxQ0FDSSxxRUFBQyx3REFBRDtBQUFBLDBCQUFjUCxPQUFPLENBQUNRO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUk7QUFBQSxxQ0FDSSxxRUFBQyx3REFBRDtBQUFBLHVDQUFzQlIsT0FBTyxDQUFDUyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBT0k7QUFBQSxxQ0FDRyxxRUFBQyx3REFBRDtBQUFBLDZDQUF5QlQsT0FBTyxDQUFDVSxjQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBVUk7QUFBQSxxQ0FDQSxxRUFBQyx3REFBRDtBQUFBLDBDQUF5QlYsT0FBTyxDQUFDVyxjQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKLGVBYUk7QUFBQSxxQ0FDWVgsT0FBTyxDQUFDWSxjQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQXNCSCxPQXZCQSxDQURMLEVBMEJLL0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhZ0MsT0FBYixDQUFxQmQsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBRXRDLDRCQUFRLHFFQUFDLDJEQUFEO0FBQVMsaUJBQU8sRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUVILE9BSkEsQ0ExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQS9EdUJyQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BlcmZpbC5mZjhmYjk2NmVkY2QxMWM1YjRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQZXJmaWxXb3Jkc30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmltcG9ydCBDb250cmFzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJhcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZmlsICgpIHtcclxuICAgIGNvbnN0IFtnZXRwZXJmaWwsIHNldEdldFBlcmZpbF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3BlcmZpbCcsIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBnZXRwZXJmaWwucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0R2V0UGVyZmlsKFsuLi5nZXRwZXJmaWwsIHJlc3BvbnNlLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSgpXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiAsIGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiAtMTB9fSA+XHJcbiAgICAgICAgICAgIHtnZXRwZXJmaWwgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtIGRhZG9vb29vb29vb29vb29vb3NcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0ucGVyZmlsLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogMjksIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+UGVyZmlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPntlbGVtZW50Lm5hbWV9PC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFJhdGluZyB7ZWxlbWVudC5yYXRpbmd9PC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFZpdMOzcmlhcyAge2VsZW1lbnQudml0b3JpYXNfdG90YWx9PC9QZXJmaWxXb3Jkcz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IERlcnJvdGFzICB7ZWxlbWVudC5kZXJyb3Rhc190b3RhbH0gPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcGF0ZXMge2VsZW1lbnQuZW1wYXRlc190b3RhaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0uY29udHJhcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPENvbnRyYXMgY29udHJhcz17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9