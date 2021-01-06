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

              if (response.data === "OK") {
                alert('Partida Adicionada');
              } else {
                alert("Erro ao adicionar a partida");
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", alert("Erro ao adicionar a partida: ".concat(_context.t0)));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _handleAddMatch.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["ContainerAddMatch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_5__["FontNameAndRanking"], {
      children: "Add Partida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
        lineNumber: 32,
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
          lineNumber: 33,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 35,
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
      lineNumber: 36,
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
        lineNumber: 37,
        columnNumber: 79
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNYXRjaC5qcyJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsInVzZVN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwibG9zZXIiLCJzZXRMb3NlciIsImVtcGF0ZSIsInNldEVtcGF0ZSIsImhhbmRsZUFkZE1hdGNoIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwiYWxlcnQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxTQURFOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxDQUFELENBSG5CO0FBQUEsTUFHVkssTUFIVTtBQUFBLE1BR0ZDLFNBSEU7O0FBQUEsV0FLRkMsY0FMRTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5U0FLakIsaUJBQStCTixNQUEvQixFQUFzQ0UsS0FBdEMsRUFBNENFLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFK0JHLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxnQ0FBWCxFQUE2QztBQUNwRSxnQ0FBU1IsTUFBVCxDQURvRTtBQUVwRSxnQ0FBU0UsS0FBVCxDQUZvRTtBQUdwRSwwQkFBVTtBQUNOLDBCQUFRRTtBQURGO0FBSDBELGVBQTdDLENBRi9COztBQUFBO0FBRWNLLHNCQUZkOztBQVNRLGtCQUFHQSxRQUFRLENBQUNDLElBQVQsS0FBa0IsSUFBckIsRUFBMkI7QUFDdkJDLHFCQUFLLENBQUMsb0JBQUQsQ0FBTDtBQUNILGVBRkQsTUFFTTtBQUNGQSxxQkFBSyxDQUFDLDZCQUFELENBQUw7QUFDSDs7QUFiVDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQWVlQSxLQUFLLHFEQWZwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxpQjtBQUFBO0FBQUE7O0FBdUJqQixzQkFDSSxxRUFBQyw4REFBRDtBQUFBLDRCQUNJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUUsTUFBVjtBQUFrQkMscUJBQWEsRUFBRSxLQUFqQztBQUF3Q0Msa0JBQVUsRUFBRTtBQUFwRCxPQUFaO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUU7QUFBQSxpQkFBTVQsU0FBUyxDQUFDLENBQUQsQ0FBZjtBQUFBLFNBQWhCO0FBQW1DLGFBQUssRUFBRTtBQUFDVSxlQUFLLEVBQUUsRUFBUjtBQUFZQyxnQkFBTSxFQUFFO0FBQXBCLFNBQTFDO0FBQW1FLFlBQUksRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFUTtBQUFBLCtCQUFPO0FBQUcsZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUUsRUFBWDtBQUFlQyxzQkFBVSxFQUFFLE1BQTNCO0FBQW1DQyxpQkFBSyxFQUFFLE9BQTFDO0FBQW1EQyxzQkFBVSxFQUFFO0FBQS9ELFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSSxxRUFBQywwREFBRDtBQUFlLFVBQUksRUFBQyxNQUFwQjtBQUEyQixXQUFLLEVBQUVwQixNQUFsQztBQUEwQyxjQUFRLEVBQUUsa0JBQUFxQixDQUFDO0FBQUEsZUFBSXBCLFNBQVMsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxPQUFyRDtBQUFvRixpQkFBVyxFQUFDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JLHFFQUFDLDBEQUFEO0FBQWUsVUFBSSxFQUFDLE1BQXBCO0FBQTJCLFdBQUssRUFBRXJCLEtBQWxDO0FBQXlDLGNBQVEsRUFBRSxrQkFBQW1CLENBQUM7QUFBQSxlQUFJbEIsUUFBUSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUFBLE9BQXBEO0FBQWtGLGlCQUFXLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBUUkscUVBQUMseURBQUQ7QUFBYyxhQUFPLEVBQUU7QUFBQSxlQUFNakIsY0FBYyxDQUFDTixNQUFELEVBQVFFLEtBQVIsRUFBY0UsTUFBZCxDQUFwQjtBQUFBLE9BQXZCO0FBQUEsNkJBQWtFO0FBQUcsYUFBSyxFQUFFO0FBQUNhLGtCQUFRLEVBQUUsRUFBWDtBQUFlRSxlQUFLLEVBQUUsT0FBdEI7QUFBK0JELG9CQUFVLEVBQUUsTUFBM0M7QUFBbURNLG1CQUFTLEVBQUU7QUFBOUQsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FuQ1ExQixROztLQUFBQSxRO0FBcUNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDg2MmJkMzkwYTg0YmMxZDhlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0NvbnRhaW5lckFkZE1hdGNoLCBJbnB1dEFkZE1hdGNoLCBGb250TmFtZUFuZFJhbmtpbmcsIEJ1dHRvblN1Ym1pdH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcblxyXG5mdW5jdGlvbiBBZGRNYXRjaCAoKSB7XHJcbiAgICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbG9zZXIsIHNldExvc2VyXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2VtcGF0ZSwgc2V0RW1wYXRlXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWRkTWF0Y2ggKHdpbm5lcixsb3NlcixlbXBhdGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hZGRtYXRjaCcsIHtcclxuICAgICAgICAgICAgXCJwMVwiOiBgJHt3aW5uZXJ9YCxcclxuICAgICAgICAgICAgXCJwMlwiOiBgJHtsb3Nlcn1gLFxyXG4gICAgICAgICAgICBcImVtcGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInRydWVcIjogZW1wYXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhID09PSBcIk9LXCIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQYXJ0aWRhIEFkaWNpb25hZGEnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm8gYW8gYWRpY2lvbmFyIGEgcGFydGlkYVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoYEVycm8gYW8gYWRpY2lvbmFyIGEgcGFydGlkYTogJHtlcnJ9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJBZGRNYXRjaD5cclxuICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5BZGQgUGFydGlkYTwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXsoKSA9PiBzZXRFbXBhdGUoMSl9c3R5bGU9e3t3aWR0aDogMjAsIGhlaWdodDogMjB9fSB0eXBlPVwiY2hlY2tib3hcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHAgc3R5bGU9e3tmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiAxMH19PkVtcGF0ZTwvcD48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPElucHV0QWRkTWF0Y2ggdHlwZT1cInRleHRcIiB2YWx1ZT17d2lubmVyfSBvbkNoYW5nZT17ZSA9PiBzZXRXaW5uZXIoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlZlbmNlZG9yXCIgLz5cclxuICAgICAgICAgICAgPElucHV0QWRkTWF0Y2ggdHlwZT1cInRleHRcIiB2YWx1ZT17bG9zZXJ9IG9uQ2hhbmdlPXtlID0+IHNldExvc2VyKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJEZXJyb3RhZG9cIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uU3VibWl0IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZE1hdGNoKHdpbm5lcixsb3NlcixlbXBhdGUpfT48cCBzdHlsZT17e2ZvbnRTaXplOiAxMiwgY29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PkVudmlhcjwvcD48L0J1dHRvblN1Ym1pdD5cclxuICAgICAgICA8L0NvbnRhaW5lckFkZE1hdGNoPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRNYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=