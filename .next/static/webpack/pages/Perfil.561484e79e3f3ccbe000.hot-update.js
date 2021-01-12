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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);





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
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:3333/perfil', {
                "id": id
              });

            case 4:
              response = _context.sent;
              getperfil.push(response.data);
              console.log(getperfil);
              setGetPerfil([].concat(Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(getperfil), [response.data]));
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log('error');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }))();
  }, []);

  function getNames(id) {
    if (id == 1) {
      return "Thiago";
    }

    if (id == 2) {
      return "Rick";
    }

    if (id == 3) {
      return "Joao";
    }

    if (id == 4) {
      return "Daniel";
    }

    if (id == 5) {
      return "Vitor";
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: getperfil == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: "sem dadooooooooooooooos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [getperfil[0].perfil.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: ["Perfil", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: element.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Rating ", element.rating]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Vit\xF3rias  ", element.vitorias_total]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Derrotas  ", element.derrotas_total]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Empates ", element.empates_totais]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }, _this);
      }), getperfil[0].contras.map(function (element, i) {
        Object.keys(element).forEach(function (key) {
          var _this2 = this;

          element[key].map(function (item, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: item.id_player
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, _this2);
          });
        });
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGVyZmlsLmpzIl0sIm5hbWVzIjpbIlBlcmZpbCIsInVzZVN0YXRlIiwiZ2V0cGVyZmlsIiwic2V0R2V0UGVyZmlsIiwidXNlRWZmZWN0IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXROYW1lcyIsInBlcmZpbCIsIm1hcCIsImVsZW1lbnQiLCJpIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJuYW1lIiwicmF0aW5nIiwidml0b3JpYXNfdG90YWwiLCJkZXJyb3Rhc190b3RhbCIsImVtcGF0ZXNfdG90YWlzIiwiY29udHJhcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaXRlbSIsImlkX3BsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUU5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osdVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1NDLGdCQURULEdBQ2NDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQURkO0FBQUE7QUFBQTtBQUFBLHFCQUk4QkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLDhCQUFYLEVBQTJDO0FBQ2xFLHNCQUFNSjtBQUQ0RCxlQUEzQyxDQUo5Qjs7QUFBQTtBQUlhSyxzQkFKYjtBQU9PUix1QkFBUyxDQUFDUyxJQUFWLENBQWVELFFBQVEsQ0FBQ0UsSUFBeEI7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0FDLDBCQUFZLHlKQUFLRCxTQUFMLElBQWdCUSxRQUFRLENBQUNFLElBQXpCLEdBQVo7QUFUUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlPQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUFaUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBaUJILEdBbEJRLEVBa0JQLEVBbEJPLENBQVQ7O0FBbUJBLFdBQVNDLFFBQVQsQ0FBa0JWLEVBQWxCLEVBQXNCO0FBQ2xCLFFBQUdBLEVBQUUsSUFBSSxDQUFULEVBQVk7QUFDUixhQUFPLFFBQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBTyxNQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxJQUFJLENBQVQsRUFBWTtBQUNSLGFBQU8sTUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsSUFBSSxDQUFULEVBQVk7QUFDUixhQUFPLFFBQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBTyxPQUFQO0FBQ0g7QUFDSjs7QUFDRCxzQkFDSTtBQUFBLGNBQ0tILFNBQVMsSUFBSSxDQUFiLGdCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZ0JBS0c7QUFBQSxpQkFDS0EsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhYyxNQUFiLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDckMsNEJBQ0k7QUFBQSw0Q0FFSTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0MscUJBQU8sRUFBRSxNQUFWO0FBQWtCQywyQkFBYSxFQUFFO0FBQWpDLGFBQVo7QUFBQSxvQ0FDSTtBQUFBLHdCQUNLSCxPQUFPLENBQUNJO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUEsb0NBQ1lKLE9BQU8sQ0FBQ0ssTUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBT0k7QUFBQSwwQ0FDY0wsT0FBTyxDQUFDTSxjQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEosZUFVSTtBQUFBLHVDQUNjTixPQUFPLENBQUNPLGNBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSixlQWFJO0FBQUEscUNBQ1lQLE9BQU8sQ0FBQ1EsY0FEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFzQkgsT0F2QkEsQ0FETCxFQTBCS3hCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXlCLE9BQWIsQ0FBcUJWLEdBQXJCLENBQXlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUV0Q1MsY0FBTSxDQUFDQyxJQUFQLENBQVlYLE9BQVosRUFBcUJZLE9BQXJCLENBQTZCLFVBQVVDLEdBQVYsRUFBZTtBQUFBOztBQUN4Q2IsaUJBQU8sQ0FBQ2EsR0FBRCxDQUFQLENBQWFkLEdBQWIsQ0FBaUIsVUFBQ2UsSUFBRCxFQUFPYixDQUFQLEVBQWM7QUFDM0IsZ0NBQ0k7QUFBQSx3QkFDS2EsSUFBSSxDQUFDQztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFLSCxXQU5EO0FBUUgsU0FURDtBQVVILE9BWkEsQ0ExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQXhGdUJqQyxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BlcmZpbC41NjE0ODRlNzllM2YzY2NiZTAwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZmlsICgpIHtcclxuICAgIGNvbnN0IFtnZXRwZXJmaWwsIHNldEdldFBlcmZpbF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3BlcmZpbCcsIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBnZXRwZXJmaWwucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0cGVyZmlsKVxyXG4gICAgICAgICAgICAgICAgc2V0R2V0UGVyZmlsKFsuLi5nZXRwZXJmaWwsIHJlc3BvbnNlLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSgpXHJcbiAgICB9LFtdKVxyXG4gICAgZnVuY3Rpb24gZ2V0TmFtZXMoaWQpIHtcclxuICAgICAgICBpZihpZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRoaWFnb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiUmlja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSm9hb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09IDQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRGFuaWVsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJWaXRvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Z2V0cGVyZmlsID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbSBkYWRvb29vb29vb29vb29vb29zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0ucGVyZmlsLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJmaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nIHtlbGVtZW50LnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXTDs3JpYXMgIHtlbGVtZW50LnZpdG9yaWFzX3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVycm90YXMgIHtlbGVtZW50LmRlcnJvdGFzX3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1wYXRlcyB7ZWxlbWVudC5lbXBhdGVzX3RvdGFpc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0cGVyZmlsWzBdLmNvbnRyYXMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRba2V5XS5tYXAoKGl0ZW0sIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmlkX3BsYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9