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
              console.log(winner);
              console.log(loser);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3333/addmatch', {
                "p1": "".concat(winner),
                "p2": "".concat(loser),
                "empate": {
                  "true": empate
                }
              });

            case 4:
              response = _context.sent;
              console.log(response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleAddMatch.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["ContainerAddMatch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["FontNameAndRanking"], {
      children: "Add Partida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
        lineNumber: 26,
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
          lineNumber: 27,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 29,
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
      lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 79
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNYXRjaC5qcyJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsInVzZVN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwibG9zZXIiLCJzZXRMb3NlciIsImVtcGF0ZSIsInNldEVtcGF0ZSIsImhhbmRsZUFkZE1hdGNoIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBQUEsbUJBR1dKLHNEQUFRLENBQUMsQ0FBRCxDQUhuQjtBQUFBLE1BR1ZLLE1BSFU7QUFBQSxNQUdGQyxTQUhFOztBQUFBLFdBS0ZDLGNBTEU7QUFBQTtBQUFBOztBQUFBO0FBQUEseVNBS2pCLGlCQUErQk4sTUFBL0IsRUFBc0NFLEtBQXRDLEVBQTRDRSxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaO0FBQ0FPLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUZKO0FBQUEscUJBRzJCTyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsZ0NBQVgsRUFBNkM7QUFDaEUsZ0NBQVNWLE1BQVQsQ0FEZ0U7QUFFaEUsZ0NBQVNFLEtBQVQsQ0FGZ0U7QUFHaEUsMEJBQVU7QUFDTiwwQkFBUUU7QUFERjtBQUhzRCxlQUE3QyxDQUgzQjs7QUFBQTtBQUdVTyxzQkFIVjtBQVVJSixxQkFBTyxDQUFDQyxHQUFSLENBQVlHLFFBQVo7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMaUI7QUFBQTtBQUFBOztBQWlCakIsc0JBQ0kscUVBQUMsOERBQUQ7QUFBQSw0QkFDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFFLE1BQVY7QUFBa0JDLHFCQUFhLEVBQUUsS0FBakM7QUFBd0NDLGtCQUFVLEVBQUU7QUFBcEQsT0FBWjtBQUFBLDhCQUNJO0FBQU8sZUFBTyxFQUFFO0FBQUEsaUJBQU1ULFNBQVMsQ0FBQyxDQUFELENBQWY7QUFBQSxTQUFoQjtBQUFtQyxhQUFLLEVBQUU7QUFBQ1UsZUFBSyxFQUFFLEVBQVI7QUFBWUMsZ0JBQU0sRUFBRTtBQUFwQixTQUExQztBQUFtRSxZQUFJLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRVE7QUFBQSwrQkFBTztBQUFHLGVBQUssRUFBRTtBQUFDQyxvQkFBUSxFQUFFLEVBQVg7QUFBZUMsc0JBQVUsRUFBRSxNQUEzQjtBQUFtQ0MsaUJBQUssRUFBRSxPQUExQztBQUFtREMsc0JBQVUsRUFBRTtBQUEvRCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBTUkscUVBQUMsMERBQUQ7QUFBZSxVQUFJLEVBQUMsTUFBcEI7QUFBMkIsV0FBSyxFQUFFcEIsTUFBbEM7QUFBMEMsY0FBUSxFQUFFLGtCQUFBcUIsQ0FBQztBQUFBLGVBQUlwQixTQUFTLENBQUNvQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsT0FBckQ7QUFBb0YsaUJBQVcsRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSSxxRUFBQywwREFBRDtBQUFlLFVBQUksRUFBQyxNQUFwQjtBQUEyQixXQUFLLEVBQUVyQixLQUFsQztBQUF5QyxjQUFRLEVBQUUsa0JBQUFtQixDQUFDO0FBQUEsZUFBSWxCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxPQUFwRDtBQUFrRixpQkFBVyxFQUFDO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJLHFFQUFDLHlEQUFEO0FBQWMsYUFBTyxFQUFFO0FBQUEsZUFBTWpCLGNBQWMsQ0FBQ04sTUFBRCxFQUFRRSxLQUFSLEVBQWNFLE1BQWQsQ0FBcEI7QUFBQSxPQUF2QjtBQUFBLDZCQUFrRTtBQUFHLGFBQUssRUFBRTtBQUFDYSxrQkFBUSxFQUFFLEVBQVg7QUFBZUUsZUFBSyxFQUFFLE9BQXRCO0FBQStCRCxvQkFBVSxFQUFFLE1BQTNDO0FBQW1ETSxtQkFBUyxFQUFFO0FBQTlELFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBN0JRMUIsUTs7S0FBQUEsUTtBQStCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThjNDk5ZjE5MThiMGVjZDYzMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtDb250YWluZXJBZGRNYXRjaCwgSW5wdXRBZGRNYXRjaCwgRm9udE5hbWVBbmRSYW5raW5nLCBCdXR0b25TdWJtaXR9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5cclxuZnVuY3Rpb24gQWRkTWF0Y2ggKCkge1xyXG4gICAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2xvc2VyLCBzZXRMb3Nlcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlbXBhdGUsIHNldEVtcGF0ZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZE1hdGNoICh3aW5uZXIsbG9zZXIsZW1wYXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvc2VyKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2FkZG1hdGNoJywge1xyXG4gICAgICAgICAgICBcInAxXCI6IGAke3dpbm5lcn1gLFxyXG4gICAgICAgICAgICBcInAyXCI6IGAke2xvc2VyfWAsXHJcbiAgICAgICAgICAgIFwiZW1wYXRlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBlbXBhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJBZGRNYXRjaD5cclxuICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5BZGQgUGFydGlkYTwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsoKSA9PiBzZXRFbXBhdGUoMSl9c3R5bGU9e3t3aWR0aDogMjAsIGhlaWdodDogMjB9fSB0eXBlPVwiY2hlY2tib3hcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHAgc3R5bGU9e3tmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiAxMH19PkVtcGF0ZTwvcD48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPElucHV0QWRkTWF0Y2ggdHlwZT1cInRleHRcIiB2YWx1ZT17d2lubmVyfSBvbkNoYW5nZT17ZSA9PiBzZXRXaW5uZXIoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlZlbmNlZG9yXCIgLz5cclxuICAgICAgICAgICAgPElucHV0QWRkTWF0Y2ggdHlwZT1cInRleHRcIiB2YWx1ZT17bG9zZXJ9IG9uQ2hhbmdlPXtlID0+IHNldExvc2VyKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJEZXJyb3RhZG9cIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uU3VibWl0IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZE1hdGNoKHdpbm5lcixsb3NlcixlbXBhdGUpfT48cCBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PkVudmlhcjwvcD48L0J1dHRvblN1Ym1pdD5cclxuICAgICAgICA8L0NvbnRhaW5lckFkZE1hdGNoPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=