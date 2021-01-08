webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Ranking.js":
/*!*******************************!*\
  !*** ./components/Ranking.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Ranking.js",
    _s = $RefreshSig$();







function Ranking() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      players = _useState[0],
      setPlayers = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function RankingPlayers() {
    return _RankingPlayers.apply(this, arguments);
  }

  function _RankingPlayers() {
    _RankingPlayers = Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data;
      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://localhost:3333/busca');

            case 2:
              data = _context2.sent;
              setPlayers(data.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _RankingPlayers.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    RankingPlayers();
  }, []);
  players.sort(function (a, b) {
    return parseFloat(b.rating) - parseFloat(a.rating);
  }); // colocando array em ordem decrescente

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["ContainerRanking"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
        children: "Nome\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), players.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            onClick: /*#__PURE__*/Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
              return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return localStorage.setItem('namePerfil', element.name);

                    case 2:
                      router.push('/Perfil');

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })),
            style: {
              border: "none",
              outline: "none",
              backgroundColor: "transparent"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
              children: [i + 1, ". ", element.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
        children: "Rating"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), players.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
            children: element.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 32
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 29
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(Ranking, "qXc0uHvmZ1ElKuF7lX/PK5MMIA8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Ranking;
/* harmony default export */ __webpack_exports__["default"] = (Ranking);

var _c;

$RefreshReg$(_c, "Ranking");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYW5raW5nLmpzIl0sIm5hbWVzIjpbIlJhbmtpbmciLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmFua2luZ1BsYXllcnMiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUZsb2F0IiwicmF0aW5nIiwibWFwIiwiZWxlbWVudCIsImkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmFtZSIsInB1c2giLCJib3JkZXIiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNUQyxPQURTO0FBQUEsTUFDQUMsVUFEQTs7QUFFaEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGZ0IsV0FHREMsY0FIQztBQUFBO0FBQUE7O0FBQUE7QUFBQSx5U0FHaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw2QkFBVixDQUR2Qjs7QUFBQTtBQUNVQyxrQkFEVjtBQUVJTix3QkFBVSxDQUFDTSxJQUFJLENBQUNBLElBQU4sQ0FBVjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhnQjtBQUFBO0FBQUE7O0FBT2hCQyx5REFBUyxDQUFDLFlBQU07QUFFYkosa0JBQWM7QUFDaEIsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUlBSixTQUFPLENBQUNTLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUFTQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBSCxDQUFWLEdBQXVCRCxVQUFVLENBQUNGLENBQUMsQ0FBQ0csTUFBSCxDQUExQztBQUFBLEdBQWIsRUFYZ0IsQ0FXa0Q7O0FBQ2xFLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0k7QUFBQSw4QkFDQSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBS0liLE9BQU8sQ0FBQ2MsR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3ZCLDRCQUNJLHFFQUFDLHVEQUFEO0FBQUEsaUNBQ0k7QUFBUSxtQkFBTyxrU0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFDVEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DSCxPQUFPLENBQUNJLElBQTNDLENBRFM7O0FBQUE7QUFFZmpCLDRCQUFNLENBQUNrQixJQUFQLENBQVksU0FBWjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFGLEVBQWY7QUFHRyxpQkFBSyxFQUFFO0FBQUNDLG9CQUFNLEVBQUUsTUFBVDtBQUFpQkMscUJBQU8sRUFBRSxNQUExQjtBQUFrQ0MsNkJBQWUsRUFBRTtBQUFuRCxhQUhWO0FBQUEsbUNBSUEscUVBQUMsd0RBQUQ7QUFBQSx5QkFDUFAsQ0FBQyxHQUFDLENBREssUUFDQUQsT0FBTyxDQUFDSSxJQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFpQkgsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQWFILE9BZEQsQ0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXVCSTtBQUFBLDhCQUNJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFLUWhCLE9BQU8sQ0FBQ2MsR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3ZCLDRCQUNJLHFFQUFDLHVEQUFEO0FBQUEsaUNBQ0cscUVBQUMsd0RBQUQ7QUFBQSxzQkFDS0QsT0FBTyxDQUFDRjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxXQUFpQkcsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU9ILE9BUkQsQ0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7O0dBdERRbEIsTztVQUVVSyxxRDs7O0tBRlZMLE87QUF5RE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxZTJjNDM3OGYzZmFkZTc2MmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lclJhbmtpbmcsIFJlbmRlckRhdGEsIEZvbnROYW1lQW5kUmFua2luZyxOYW1lUmFua2luZ30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUmFua2luZyAoKSB7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVycyBdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gUmFua2luZ1BsYXllcnMgKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9idXNjYScpXHJcbiAgICAgICAgc2V0UGxheWVycyhkYXRhLmRhdGEpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgUmFua2luZ1BsYXllcnMoKVxyXG4gICAgfSxbXSlcclxuICAgIHBsYXllcnMuc29ydCgoYSxiKSA9PiBwYXJzZUZsb2F0KGIucmF0aW5nKSAtIHBhcnNlRmxvYXQoYS5yYXRpbmcpKS8vIGNvbG9jYW5kbyBhcnJheSBlbSBvcmRlbSBkZWNyZXNjZW50ZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyUmFua2luZz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIE5vbWUmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgPC9Gb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcnMubWFwKChlbGVtZW50LGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRGF0YSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lUGVyZmlsJywgZWxlbWVudC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL1BlcmZpbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e2JvcmRlcjogXCJub25lXCIsIG91dGxpbmU6IFwibm9uZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpKzF9LiB7ZWxlbWVudC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVuZGVyRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgICAgICBSYXRpbmdcclxuICAgICAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMubWFwKChlbGVtZW50LGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJEYXRhIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYW1lUmFua2luZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVuZGVyRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyUmFua2luZz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhbmtpbmciXSwic291cmNlUm9vdCI6IiJ9