webpackHotUpdate_N_E("pages/Perfil",{

/***/ "./components/Contras.js":
/*!*******************************!*\
  !*** ./components/Contras.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Contras.js";
function Contras(_ref) {
  var _this = this;

  var idperfil = _ref.idperfil,
      contras = _ref.contras;

  //    console.log(contras)
  function getNames(id) {
    if (id === "p1") {
      return "Thiago";
    }

    if (id === "p2") {
      return "Rick";
    }

    if (id === "p3") {
      return "Joao";
    }

    if (id === "p4") {
      return "Daniel";
    }

    if (id === "p5") {
      return "Vitor";
    }
  }

  var players = Object.entries(contras);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: players.map(function (element) {
      console.log(element[1]);

      if (element[1][0].id_player == idperfil) {
        console.log('é sim');
      } else {
        console.log('é nao');
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: getNames(element[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 8
  }, this);
}
_c = Contras;

var _c;

$RefreshReg$(_c, "Contras");

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
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Contras__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contras */ "./components/Contras.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:3333/perfil', {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: getperfil == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: "sem dadooooooooooooooos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
              lineNumber: 40,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Rating ", element.rating]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Vit\xF3rias  ", element.vitorias_total]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              children: ["Derrotas  ", element.derrotas_total]
            }, void 0, true, {
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_5__["default"], {
          idperdil: element.id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9QZXJmaWwuanMiXSwibmFtZXMiOlsiQ29udHJhcyIsImlkcGVyZmlsIiwiY29udHJhcyIsImdldE5hbWVzIiwiaWQiLCJwbGF5ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwiUGVyZmlsIiwidXNlU3RhdGUiLCJnZXRwZXJmaWwiLCJzZXRHZXRQZXJmaWwiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJwdXNoIiwiZGF0YSIsInBlcmZpbCIsImkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTs7QUFDdEQ7QUFDSSxXQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQixRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxNQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sUUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxPQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxPQUFmLENBQWhCO0FBQ0Qsc0JBQ0k7QUFBQSxjQUNNRyxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUMsQ0FBRCxDQUFuQjs7QUFDQSxVQUFHQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxFQUFjRyxTQUFkLElBQTJCWCxRQUE5QixFQUF3QztBQUNwQ1MsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNILE9BRkQsTUFFTTtBQUNGRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7O0FBRVIsMEJBQ1E7QUFBQSwrQkFDSTtBQUFBLG9CQUFNUixRQUFRLENBQUNNLE9BQU8sQ0FBQyxDQUFELENBQVI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBTUMsS0FkSTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CRjtLQXhDdUJULE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEI7QUFDQTtBQUNBO0FBRWUsU0FBU2EsTUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFlBRFk7O0FBRTlCQyx5REFBUyxDQUFDLFlBQU07QUFDWix1UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDU2IsZ0JBRFQsR0FDY2MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBRGQ7QUFBQTtBQUFBO0FBQUEscUJBSThCQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsOEJBQVgsRUFBMkM7QUFDbEUsc0JBQU1qQjtBQUQ0RCxlQUEzQyxDQUo5Qjs7QUFBQTtBQUlha0Isc0JBSmI7QUFPT1AsdUJBQVMsQ0FBQ1EsSUFBVixDQUFlRCxRQUFRLENBQUNFLElBQXhCO0FBQ0FkLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUksU0FBWjtBQUNBQywwQkFBWSx5SkFBS0QsU0FBTCxJQUFnQk8sUUFBUSxDQUFDRSxJQUF6QixHQUFaO0FBVFA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZT2QscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBWlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWlCSCxHQWxCUSxFQWtCUCxFQWxCTyxDQUFUO0FBb0JBLHNCQUNJO0FBQUEsY0FDS0ksU0FBUyxJQUFJLENBQWIsZ0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxnQkFLRztBQUFBLGlCQUNLQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFVLE1BQWIsQ0FBb0JqQixHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVpQixDQUFWLEVBQWdCO0FBQ3JDLDRCQUNJO0FBQUEsNENBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUNDLHFCQUFPLEVBQUUsTUFBVjtBQUFrQkMsMkJBQWEsRUFBRTtBQUFqQyxhQUFaO0FBQUEsb0NBQ0k7QUFBQSx3QkFDS25CLE9BQU8sQ0FBQ29CO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUEsb0NBQ1lwQixPQUFPLENBQUNxQixNQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFPSTtBQUFBLDBDQUNjckIsT0FBTyxDQUFDc0IsY0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBVUk7QUFBQSx1Q0FDY3RCLE9BQU8sQ0FBQ3VCLGNBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSixlQWFJO0FBQUEscUNBQ1l2QixPQUFPLENBQUN3QixjQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQXNCSCxPQXZCQSxDQURMLEVBMEJLbEIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhYixPQUFiLENBQXFCTSxHQUFyQixDQUF5QixVQUFDQyxPQUFELEVBQVVpQixDQUFWLEVBQWdCO0FBRXRDLDRCQUFRLHFFQUFDLDJEQUFEO0FBQVMsa0JBQVEsRUFBRWpCLE9BQU8sQ0FBQ0wsRUFBM0I7QUFBK0IsaUJBQU8sRUFBRUs7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUVILE9BSkEsQ0ExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQWhFdUJJLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLjE1OTU0ZjY4OTc5ZTAyZmE4MjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFzICh7aWRwZXJmaWwsIGNvbnRyYXN9KSB7XHJcbi8vICAgIGNvbnNvbGUubG9nKGNvbnRyYXMpXHJcbiAgICBmdW5jdGlvbiBnZXROYW1lcyhpZCkge1xyXG4gICAgICAgIGlmKGlkID09PSBcInAxXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGhpYWdvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJSaWNrXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJKb2FvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEYW5pZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlZpdG9yXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwbGF5ZXJzID0gT2JqZWN0LmVudHJpZXMoY29udHJhcylcclxuICAgcmV0dXJuIChcclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgeyBwbGF5ZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzFdKVxyXG4gICAgICAgICAgICAgICBpZihlbGVtZW50WzFdWzBdLmlkX3BsYXllciA9PSBpZHBlcmZpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ8OpIHNpbScpXHJcbiAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfDqSBuYW8nKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntnZXROYW1lcyhlbGVtZW50WzBdKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgKVxyXG4gICAgIFxyXG59IiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRyYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmFzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmaWwgKCkge1xyXG4gICAgY29uc3QgW2dldHBlcmZpbCwgc2V0R2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvcGVyZmlsJywge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGdldHBlcmZpbC5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRwZXJmaWwpXHJcbiAgICAgICAgICAgICAgICBzZXRHZXRQZXJmaWwoWy4uLmdldHBlcmZpbCwgcmVzcG9uc2UuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pKClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2dldHBlcmZpbCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBzZW0gZGFkb29vb29vb29vb29vb29vc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0cGVyZmlsWzBdLnBlcmZpbC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVyZmlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhdGluZyB7ZWxlbWVudC5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVml0w7NyaWFzICB7ZWxlbWVudC52aXRvcmlhc190b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcnJvdGFzICB7ZWxlbWVudC5kZXJyb3Rhc190b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcGF0ZXMge2VsZW1lbnQuZW1wYXRlc190b3RhaXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0uY29udHJhcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPENvbnRyYXMgaWRwZXJkaWw9e2VsZW1lbnQuaWR9IGNvbnRyYXM9e2VsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==