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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Ranking.js",
    _s = $RefreshSig$();





function Ranking() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      players = _useState[0],
      setPlayers = _useState[1];

  function RankingPlayers() {
    return _RankingPlayers.apply(this, arguments);
  }

  function _RankingPlayers() {
    _RankingPlayers = Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:3333/busca');

            case 2:
              data = _context.sent;
              setPlayers(data.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _RankingPlayers.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
        lineNumber: 19,
        columnNumber: 13
      }, this), players.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              style: {
                border: "none",
                outline: "none"
              },
              children: [i + 1, ". ", element.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
        children: "Rating"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), players.map(function (element, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
            children: element.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 32
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(Ranking, "x01McZoBj85ZsH2CUHGJhkUoAXA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYW5raW5nLmpzIl0sIm5hbWVzIjpbIlJhbmtpbmciLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwiUmFua2luZ1BsYXllcnMiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUZsb2F0IiwicmF0aW5nIiwibWFwIiwiZWxlbWVudCIsImkiLCJib3JkZXIiLCJvdXRsaW5lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsRUFBRCxDQUR2QjtBQUFBLE1BQ1RDLE9BRFM7QUFBQSxNQUNBQyxVQURBOztBQUFBLFdBRURDLGNBRkM7QUFBQTtBQUFBOztBQUFBO0FBQUEseVNBRWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3VCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNkJBQVYsQ0FEdkI7O0FBQUE7QUFDVUMsa0JBRFY7QUFFSUosd0JBQVUsQ0FBQ0ksSUFBSSxDQUFDQSxJQUFOLENBQVY7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGZ0I7QUFBQTtBQUFBOztBQU1oQkMseURBQVMsQ0FBQyxZQUFNO0FBRWJKLGtCQUFjO0FBQ2hCLEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQUYsU0FBTyxDQUFDTyxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBU0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE1BQUgsQ0FBVixHQUF1QkQsVUFBVSxDQUFDRixDQUFDLENBQUNHLE1BQUgsQ0FBMUM7QUFBQSxHQUFiLEVBVmdCLENBVWtEOztBQUNsRSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0EscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQUtJWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUN2Qiw0QkFFSSxxRUFBQyx1REFBRDtBQUFBLGlDQUNJLHFFQUFDLHdEQUFEO0FBQUEsbUNBQ0E7QUFBUSxtQkFBSyxFQUFFO0FBQUNDLHNCQUFNLEVBQUUsTUFBVDtBQUFpQkMsdUJBQU8sRUFBRTtBQUExQixlQUFmO0FBQUEseUJBQ1BGLENBQUMsR0FBQyxDQURLLFFBQ0FELE9BQU8sQ0FBQ0ksSUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBaUJILENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFXSCxPQVpELENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFxQkk7QUFBQSw4QkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBS1FkLE9BQU8sQ0FBQ1ksR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3ZCLDRCQUNJLHFFQUFDLHVEQUFEO0FBQUEsaUNBQ0cscUVBQUMsd0RBQUQ7QUFBQSxzQkFDS0QsT0FBTyxDQUFDRjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxXQUFpQkcsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQU9ILE9BUkQsQ0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0dBbkRRaEIsTzs7S0FBQUEsTztBQXNETUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWVmZTIwYmZhMmM5ZDgxNzFmYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyUmFua2luZywgUmVuZGVyRGF0YSwgRm9udE5hbWVBbmRSYW5raW5nLE5hbWVSYW5raW5nfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBSYW5raW5nICgpIHtcclxuICAgIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzIF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGFzeW5jIGZ1bmN0aW9uIFJhbmtpbmdQbGF5ZXJzICgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvYnVzY2EnKVxyXG4gICAgICAgIHNldFBsYXllcnMoZGF0YS5kYXRhKVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgIFJhbmtpbmdQbGF5ZXJzKClcclxuICAgIH0sW10pXHJcbiAgICBwbGF5ZXJzLnNvcnQoKGEsYikgPT4gcGFyc2VGbG9hdChiLnJhdGluZykgLSBwYXJzZUZsb2F0KGEucmF0aW5nKSkvLyBjb2xvY2FuZG8gYXJyYXkgZW0gb3JkZW0gZGVjcmVzY2VudGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lclJhbmtpbmc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICBOb21lJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJEYXRhIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7Ym9yZGVyOiBcIm5vbmVcIiwgb3V0bGluZTogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7aSsxfS4ge2VsZW1lbnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgUmF0aW5nXHJcbiAgICAgICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRGF0YSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lclJhbmtpbmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nIl0sInNvdXJjZVJvb3QiOiIifQ==