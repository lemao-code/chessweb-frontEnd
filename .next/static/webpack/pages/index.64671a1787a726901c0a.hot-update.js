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
      lineNumber: 28,
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
        lineNumber: 30,
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
          lineNumber: 31,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 33,
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
      lineNumber: 34,
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
        lineNumber: 35,
        columnNumber: 79
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRNYXRjaC5qcyJdLCJuYW1lcyI6WyJBZGRNYXRjaCIsInVzZVN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwibG9zZXIiLCJzZXRMb3NlciIsImVtcGF0ZSIsInNldEVtcGF0ZSIsImhhbmRsZUFkZE1hdGNoIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwiYWxlcnQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxTQURFOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxDQUFELENBSG5CO0FBQUEsTUFHVkssTUFIVTtBQUFBLE1BR0ZDLFNBSEU7O0FBQUEsV0FLRkMsY0FMRTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5U0FLakIsaUJBQStCTixNQUEvQixFQUFzQ0UsS0FBdEMsRUFBNENFLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFK0JHLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxnQ0FBWCxFQUE2QztBQUNwRSxnQ0FBU1IsTUFBVCxDQURvRTtBQUVwRSxnQ0FBU0UsS0FBVCxDQUZvRTtBQUdwRSwwQkFBVTtBQUNOLDBCQUFRRTtBQURGO0FBSDBELGVBQTdDLENBRi9COztBQUFBO0FBRWNLLHNCQUZkOztBQVNRLGtCQUFHQSxRQUFRLENBQUNDLElBQVQsS0FBa0IsSUFBckIsRUFBMkI7QUFDdkJDLHFCQUFLLENBQUMsb0JBQUQsQ0FBTDtBQUNIOztBQVhUO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBYWVBLEtBQUsscURBYnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTGlCO0FBQUE7QUFBQTs7QUFxQmpCLHNCQUNJLHFFQUFDLDhEQUFEO0FBQUEsNEJBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRSxNQUFWO0FBQWtCQyxxQkFBYSxFQUFFLEtBQWpDO0FBQXdDQyxrQkFBVSxFQUFFO0FBQXBELE9BQVo7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxTQUFTLENBQUMsQ0FBRCxDQUFmO0FBQUEsU0FBaEI7QUFBbUMsYUFBSyxFQUFFO0FBQUNVLGVBQUssRUFBRSxFQUFSO0FBQVlDLGdCQUFNLEVBQUU7QUFBcEIsU0FBMUM7QUFBbUUsWUFBSSxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVRO0FBQUEsK0JBQU87QUFBRyxlQUFLLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRSxFQUFYO0FBQWVDLHNCQUFVLEVBQUUsTUFBM0I7QUFBbUNDLGlCQUFLLEVBQUUsT0FBMUM7QUFBbURDLHNCQUFVLEVBQUU7QUFBL0QsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU1JLHFFQUFDLDBEQUFEO0FBQWUsVUFBSSxFQUFDLE1BQXBCO0FBQTJCLFdBQUssRUFBRXBCLE1BQWxDO0FBQTBDLGNBQVEsRUFBRSxrQkFBQXFCLENBQUM7QUFBQSxlQUFJcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLE9BQXJEO0FBQW9GLGlCQUFXLEVBQUM7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBT0kscUVBQUMsMERBQUQ7QUFBZSxVQUFJLEVBQUMsTUFBcEI7QUFBMkIsV0FBSyxFQUFFckIsS0FBbEM7QUFBeUMsY0FBUSxFQUFFLGtCQUFBbUIsQ0FBQztBQUFBLGVBQUlsQixRQUFRLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQUEsT0FBcEQ7QUFBa0YsaUJBQVcsRUFBQztBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSSxxRUFBQyx5REFBRDtBQUFjLGFBQU8sRUFBRTtBQUFBLGVBQU1qQixjQUFjLENBQUNOLE1BQUQsRUFBUUUsS0FBUixFQUFjRSxNQUFkLENBQXBCO0FBQUEsT0FBdkI7QUFBQSw2QkFBa0U7QUFBRyxhQUFLLEVBQUU7QUFBQ2Esa0JBQVEsRUFBRSxFQUFYO0FBQWVFLGVBQUssRUFBRSxPQUF0QjtBQUErQkQsb0JBQVUsRUFBRSxNQUEzQztBQUFtRE0sbUJBQVMsRUFBRTtBQUE5RCxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztHQWpDUTFCLFE7O0tBQUFBLFE7QUFtQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NjcxYTE3ODdhNzI2OTAxYzBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Q29udGFpbmVyQWRkTWF0Y2gsIElucHV0QWRkTWF0Y2gsIEZvbnROYW1lQW5kUmFua2luZywgQnV0dG9uU3VibWl0fSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuXHJcbmZ1bmN0aW9uIEFkZE1hdGNoICgpIHtcclxuICAgIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtsb3Nlciwgc2V0TG9zZXJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1wYXRlLCBzZXRFbXBhdGVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBZGRNYXRjaCAod2lubmVyLGxvc2VyLGVtcGF0ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2FkZG1hdGNoJywge1xyXG4gICAgICAgICAgICBcInAxXCI6IGAke3dpbm5lcn1gLFxyXG4gICAgICAgICAgICBcInAyXCI6IGAke2xvc2VyfWAsXHJcbiAgICAgICAgICAgIFwiZW1wYXRlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidHJ1ZVwiOiBlbXBhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEgPT09IFwiT0tcIikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1BhcnRpZGEgQWRpY2lvbmFkYScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChgRXJybyBhbyBhZGljaW9uYXIgYSBwYXJ0aWRhOiAke2Vycn1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckFkZE1hdGNoPlxyXG4gICAgICAgICAgICA8Rm9udE5hbWVBbmRSYW5raW5nPkFkZCBQYXJ0aWRhPC9Gb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9eygpID0+IHNldEVtcGF0ZSgxKX1zdHlsZT17e3dpZHRoOiAyMCwgaGVpZ2h0OiAyMH19IHR5cGU9XCJjaGVja2JveFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48cCBzdHlsZT17e2ZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpbkxlZnQ6IDEwfX0+RW1wYXRlPC9wPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXRBZGRNYXRjaCB0eXBlPVwidGV4dFwiIHZhbHVlPXt3aW5uZXJ9IG9uQ2hhbmdlPXtlID0+IHNldFdpbm5lcihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVmVuY2Vkb3JcIiAvPlxyXG4gICAgICAgICAgICA8SW5wdXRBZGRNYXRjaCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb3Nlcn0gb25DaGFuZ2U9e2UgPT4gc2V0TG9zZXIoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkRlcnJvdGFkb1wiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25TdWJtaXQgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkTWF0Y2god2lubmVyLGxvc2VyLGVtcGF0ZSl9PjxwIHN0eWxlPXt7Zm9udFNpemU6IDEyLCBjb2xvcjogXCJ3aGl0ZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+RW52aWFyPC9wPjwvQnV0dG9uU3VibWl0PlxyXG4gICAgICAgIDwvQ29udGFpbmVyQWRkTWF0Y2g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==