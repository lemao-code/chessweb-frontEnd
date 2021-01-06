webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AddMatch.js":
/*!********************************!*\
  !*** ./components/AddMatch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.js");




var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\AddMatch.js",
    _s = $RefreshSig$();





function AddMatch() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      winner = _useState[0],
      setWinner = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      loser = _useState2[0],
      setLoser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      empate = _useState3[0],
      setEmpate = _useState3[1];

  function handleAddMatch(_x, _x2, _x3) {
    return _handleAddMatch.apply(this, arguments);
  }

  function _handleAddMatch() {
    _handleAddMatch = Object(D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(winner, loser, empate) {
      var response;
      return D_chesswebfrontend_chessweb_frontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3333/addmatch', {
                "p1": "".concat(winner),
                "p2": "".concat(loser),
                "empate": {
                  "true": empate
                }
              });

            case 3:
              response = _context.sent;
              console.log(response);

              if (response.data === "OK") {
                alert('Partida Adicionada');
              } else {
                alert("Erro ao adicionar a partida");
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              alert("Erro ao adicionar partida!! Usuario n\xE3o encontrado");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _handleAddMatch.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["ContainerAddMatch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["FontNameAndRanking"], {
      children: "Add Partida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        onClick: function onClick() {
          return setEmpate(1);
        },
        style: {
          width: 20,
          height: 20
        },
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          style: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10
          },
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["InputAddMatch"], {
      type: "text",
      value: winner,
      onChange: function onChange(e) {
        return setWinner(e.target.value);
      },
      placeholder: "Vencedor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["InputAddMatch"], {
      type: "text",
      value: loser,
      onChange: function onChange(e) {
        return setLoser(e.target.value);
      },
      placeholder: "Derrotado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["ButtonSubmit"], {
      onClick: function onClick() {
        return handleAddMatch(winner, loser, empate);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        style: {
          fontSize: 12,
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        children: "Enviar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 79
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(AddMatch, "B5CTmsm7wJPCy4UQTgZJEkvTv1I=");

_c = AddMatch;
/* harmony default export */ __webpack_exports__["default"] = (AddMatch);

var _c;

$RefreshReg$(_c, "AddMatch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNYXRjaC5qcyJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsInVzZVN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwibG9zZXIiLCJzZXRMb3NlciIsImVtcGF0ZSIsInNldEVtcGF0ZSIsImhhbmRsZUFkZE1hdGNoIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFsZXJ0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBQUEsbUJBR1dKLHNEQUFRLENBQUMsQ0FBRCxDQUhuQjtBQUFBLE1BR1ZLLE1BSFU7QUFBQSxNQUdGQyxTQUhFOztBQUFBLFdBS0ZDLGNBTEU7QUFBQTtBQUFBOztBQUFBO0FBQUEseVNBS2pCLGlCQUErQk4sTUFBL0IsRUFBc0NFLEtBQXRDLEVBQTRDRSxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRStCRyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsZ0NBQVgsRUFBNkM7QUFDcEUsZ0NBQVNSLE1BQVQsQ0FEb0U7QUFFcEUsZ0NBQVNFLEtBQVQsQ0FGb0U7QUFHcEUsMEJBQVU7QUFDTiwwQkFBUUU7QUFERjtBQUgwRCxlQUE3QyxDQUYvQjs7QUFBQTtBQUVjSyxzQkFGZDtBQVNJQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBQ0ksa0JBQUdBLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixJQUFyQixFQUEyQjtBQUN2QkMscUJBQUssQ0FBQyxvQkFBRCxDQUFMO0FBQ0gsZUFGRCxNQUVNO0FBQ0ZBLHFCQUFLLENBQUMsNkJBQUQsQ0FBTDtBQUNIOztBQWRUO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JRQSxtQkFBSyx5REFBTDs7QUFoQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMaUI7QUFBQTtBQUFBOztBQXdCakIsc0JBQ0kscUVBQUMsOERBQUQ7QUFBQSw0QkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFFLE1BQVY7QUFBa0JDLHFCQUFhLEVBQUUsS0FBakM7QUFBd0NDLGtCQUFVLEVBQUU7QUFBcEQsT0FBWjtBQUFBLDhCQUNJO0FBQU8sZUFBTyxFQUFFO0FBQUEsaUJBQU1YLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFBQSxTQUFoQjtBQUFtQyxhQUFLLEVBQUU7QUFBQ1ksZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRTtBQUFwQixTQUExQztBQUFtRSxZQUFJLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRVE7QUFBQSwrQkFBTztBQUFHLGVBQUssRUFBRTtBQUFDQyxvQkFBUSxFQUFFLEVBQVg7QUFBZUMsc0JBQVUsRUFBRSxNQUEzQjtBQUFtQ0MsaUJBQUssRUFBRSxPQUExQztBQUFtREMsc0JBQVUsRUFBRTtBQUEvRCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBTUkscUVBQUMsMERBQUQ7QUFBZSxVQUFJLEVBQUMsTUFBcEI7QUFBMkIsV0FBSyxFQUFFdEIsTUFBbEM7QUFBMEMsY0FBUSxFQUFFLGtCQUFBdUIsQ0FBQztBQUFBLGVBQUl0QixTQUFTLENBQUNzQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsT0FBckQ7QUFBb0YsaUJBQVcsRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSSxxRUFBQywwREFBRDtBQUFlLFVBQUksRUFBQyxNQUFwQjtBQUEyQixXQUFLLEVBQUV2QixLQUFsQztBQUF5QyxjQUFRLEVBQUUsa0JBQUFxQixDQUFDO0FBQUEsZUFBSXBCLFFBQVEsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxPQUFwRDtBQUFrRixpQkFBVyxFQUFDO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJLHFFQUFDLHlEQUFEO0FBQWMsYUFBTyxFQUFFO0FBQUEsZUFBTW5CLGNBQWMsQ0FBQ04sTUFBRCxFQUFRRSxLQUFSLEVBQWNFLE1BQWQsQ0FBcEI7QUFBQSxPQUF2QjtBQUFBLDZCQUFrRTtBQUFHLGFBQUssRUFBRTtBQUFDZSxrQkFBUSxFQUFFLEVBQVg7QUFBZUUsZUFBSyxFQUFFLE9BQXRCO0FBQStCRCxvQkFBVSxFQUFFLE1BQTNDO0FBQW1ETSxtQkFBUyxFQUFFO0FBQTlELFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBcENRNUIsUTs7S0FBQUEsUTtBQXNDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjA3ZjkzMGIxYWY5MzdkOGUzNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtDb250YWluZXJBZGRNYXRjaCwgSW5wdXRBZGRNYXRjaCwgRm9udE5hbWVBbmRSYW5raW5nLCBCdXR0b25TdWJtaXR9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5cclxuZnVuY3Rpb24gQWRkTWF0Y2ggKCkge1xyXG4gICAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2xvc2VyLCBzZXRMb3Nlcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlbXBhdGUsIHNldEVtcGF0ZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZE1hdGNoICh3aW5uZXIsbG9zZXIsZW1wYXRlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvYWRkbWF0Y2gnLCB7XHJcbiAgICAgICAgICAgIFwicDFcIjogYCR7d2lubmVyfWAsXHJcbiAgICAgICAgICAgIFwicDJcIjogYCR7bG9zZXJ9YCxcclxuICAgICAgICAgICAgXCJlbXBhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0cnVlXCI6IGVtcGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSA9PT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUGFydGlkYSBBZGljaW9uYWRhJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIGFkaWNpb25hciBhIHBhcnRpZGFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoYEVycm8gYW8gYWRpY2lvbmFyIHBhcnRpZGEhISBVc3VhcmlvIG7Do28gZW5jb250cmFkb2ApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyQWRkTWF0Y2g+XHJcbiAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+QWRkIFBhcnRpZGE8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DbGljaz17KCkgPT4gc2V0RW1wYXRlKDEpfXN0eWxlPXt7d2lkdGg6IDIwLCBoZWlnaHQ6IDIwfX0gdHlwZT1cImNoZWNrYm94XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxwIHN0eWxlPXt7Zm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogMTB9fT5FbXBhdGU8L3A+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dEFkZE1hdGNoIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dpbm5lcn0gb25DaGFuZ2U9e2UgPT4gc2V0V2lubmVyKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJWZW5jZWRvclwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dEFkZE1hdGNoIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvc2VyfSBvbkNoYW5nZT17ZSA9PiBzZXRMb3NlcihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRGVycm90YWRvXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblN1Ym1pdCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRNYXRjaCh3aW5uZXIsbG9zZXIsZW1wYXRlKX0+PHAgc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBcIndoaXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5FbnZpYXI8L3A+PC9CdXR0b25TdWJtaXQ+XHJcbiAgICAgICAgPC9Db250YWluZXJBZGRNYXRjaD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9