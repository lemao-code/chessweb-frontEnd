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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Ranking.js",
    _s = $RefreshSig$();






function Ranking() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      players = _useState[0],
      setPlayers = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

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
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:3333/busca');

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

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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
        lineNumber: 21,
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
                      return localStorage.setItem('id', element.id);

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
              lineNumber: 32,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
        children: "Rating"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), players.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
            children: element.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 32
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Ranking, "qXc0uHvmZ1ElKuF7lX/PK5MMIA8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYW5raW5nLmpzIl0sIm5hbWVzIjpbIlJhbmtpbmciLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmFua2luZ1BsYXllcnMiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUZsb2F0IiwicmF0aW5nIiwibWFwIiwiZWxlbWVudCIsImkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJwdXNoIiwiYm9yZGVyIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDVEMsT0FEUztBQUFBLE1BQ0FDLFVBREE7O0FBRWhCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmdCLFdBR0RDLGNBSEM7QUFBQTtBQUFBOztBQUFBO0FBQUEseVNBR2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3VCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNkJBQVYsQ0FEdkI7O0FBQUE7QUFDVUMsa0JBRFY7QUFFSU4sd0JBQVUsQ0FBQ00sSUFBSSxDQUFDQSxJQUFOLENBQVY7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIZ0I7QUFBQTtBQUFBOztBQU9oQkMseURBQVMsQ0FBQyxZQUFNO0FBRWJKLGtCQUFjO0FBQ2hCLEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQUosU0FBTyxDQUFDUyxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBU0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQUgsQ0FBVixHQUF1QkQsVUFBVSxDQUFDRixDQUFDLENBQUNHLE1BQUgsQ0FBMUM7QUFBQSxHQUFiLEVBWGdCLENBV2tEOztBQUNsRSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0EscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQUtJYixPQUFPLENBQUNjLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUN2Qiw0QkFDSSxxRUFBQyx1REFBRDtBQUFBLGlDQUNJO0FBQVEsbUJBQU8sa1NBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ1RDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixFQUEyQkgsT0FBTyxDQUFDSSxFQUFuQyxDQURTOztBQUFBO0FBRWZqQiw0QkFBTSxDQUFDa0IsSUFBUCxDQUFZLFNBQVo7O0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRixFQUFmO0FBR0csaUJBQUssRUFBRTtBQUFDQyxvQkFBTSxFQUFFLE1BQVQ7QUFBaUJDLHFCQUFPLEVBQUUsTUFBMUI7QUFBa0NDLDZCQUFlLEVBQUU7QUFBbkQsYUFIVjtBQUFBLG1DQUlBLHFFQUFDLHdEQUFEO0FBQUEseUJBQ1BQLENBQUMsR0FBQyxDQURLLFFBQ0FELE9BQU8sQ0FBQ1MsSUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBaUJSLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFhSCxPQWRELENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF1Qkk7QUFBQSw4QkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBS1FoQixPQUFPLENBQUNjLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUN2Qiw0QkFDSSxxRUFBQyx1REFBRDtBQUFBLGlDQUNHLHFFQUFDLHdEQUFEO0FBQUEsc0JBQ0tELE9BQU8sQ0FBQ0Y7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsV0FBaUJHLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFPSCxPQVJELENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQXREUWxCLE87VUFFVUsscUQ7OztLQUZWTCxPO0FBeURNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NGQyNDE0NGNmNDNjODU0ZmE5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJSYW5raW5nLCBSZW5kZXJEYXRhLCBGb250TmFtZUFuZFJhbmtpbmcsTmFtZVJhbmtpbmd9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBSYW5raW5nICgpIHtcclxuICAgIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzIF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBhc3luYyBmdW5jdGlvbiBSYW5raW5nUGxheWVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2J1c2NhJylcclxuICAgICAgICBzZXRQbGF5ZXJzKGRhdGEuZGF0YSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICBSYW5raW5nUGxheWVycygpXHJcbiAgICB9LFtdKVxyXG4gICAgcGxheWVycy5zb3J0KChhLGIpID0+IHBhcnNlRmxvYXQoYi5yYXRpbmcpIC0gcGFyc2VGbG9hdChhLnJhdGluZykpLy8gY29sb2NhbmRvIGFycmF5IGVtIG9yZGVtIGRlY3Jlc2NlbnRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJSYW5raW5nPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgTm9tZSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGxheWVycy5tYXAoKGVsZW1lbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJEYXRhIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgZWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9QZXJmaWwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3tib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lUmFua2luZz5cclxuICAgICAgICAgICAgICAgICAgICB7aSsxfS4ge2VsZW1lbnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgUmF0aW5nXHJcbiAgICAgICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRGF0YSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lclJhbmtpbmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nIl0sInNvdXJjZVJvb3QiOiIifQ==