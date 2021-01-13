module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/AddMatch.js":
/*!********************************!*\
  !*** ./components/AddMatch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.js");

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\AddMatch.js";




function AddMatch() {
  const {
    0: winner,
    1: setWinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: loser,
    1: setLoser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: empate,
    1: setEmpate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  async function handleAddMatch(winner, loser, empate) {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:3333/addmatch', {
        "p1": `${winner}`,
        "p2": `${loser}`,
        "empate": {
          "true": empate
        }
      });
      console.log(response);

      if (response.data === "OK") {
        alert('Partida Adicionada');
      } else {
        alert("Erro ao adicionar a partida");
      }
    } catch (err) {
      alert(`Erro ao adicionar partida!! Usuario não encontrado`);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["ContainerAddMatch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
      children: "Add Partida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onClick: () => setEmpate(1),
        style: {
          width: 20,
          height: 20
        },
        type: "checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["InputAddMatch"], {
      type: "text",
      value: winner,
      onChange: e => setWinner(e.target.value),
      placeholder: "Vencedor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["InputAddMatch"], {
      type: "text",
      value: loser,
      onChange: e => setLoser(e.target.value),
      placeholder: "Derrotado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["ButtonSubmit"], {
      onClick: () => handleAddMatch(winner, loser, empate),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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

/* harmony default export */ __webpack_exports__["default"] = (AddMatch);

/***/ }),

/***/ "./components/LastMatches.js":
/*!***********************************!*\
  !*** ./components/LastMatches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\LastMatches.js";




function LastMatchs() {
  const {
    0: lastmatchs,
    1: setLastmatchs
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const {
    0: empateBorder,
    1: setEmpateBorder
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getLastMatchs();
  }, []);

  async function getLastMatchs() {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3333/lastmatchs');
    let arrayreverse = data.reverse();
    let cortado = arrayreverse.slice(0, 10);
    setLastmatchs(prevState => [...lastmatchs, ...cortado]);
  }

  function formatDate(data) {
    const dateGame = new Date(`${data}`);
    const formatedDate = dateGame.toString();
    const cutDate = formatedDate.slice(0, 25);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: 13,
          color: "#00FFFF",
          marginTop: 15
        },
        children: [cutDate, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 20
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerLastMatches"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["FontNameAndRanking"], {
      children: "\xDAltimas partidas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerGuide"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideWinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideText"], {
          children: "Vencedor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideLoser"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 97
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideText"], {
          children: "Derrotado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideEmpate"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 96
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["GuideText"], {
          children: "Empate"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 112
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["BoxLastMatchs"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: lastmatchs.map((element, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["NameLastMatchsWinner"], {
              colorwinner: () => element.empate ? "blue" : "green",
              children: [element.p1, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: lastmatchs.map((element, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerNameLastMatch"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["NameLastMatchLoser"], {
              colorLoser: () => element.empate ? "blue" : "red",
              children: [" ", element.p2]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          marginTop: -5,
          marginLeft: 30
        },
        children: lastmatchs.map((element, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: formatDate(element.data)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LastMatchs);

/***/ }),

/***/ "./components/Ranking.js":
/*!*******************************!*\
  !*** ./components/Ranking.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Ranking.js";





function Ranking() {
  const {
    0: players,
    1: setPlayers
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  async function RankingPlayers() {
    const data = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3333/busca');
    setPlayers(data.data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    RankingPlayers();
  }, []);
  players.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)); // colocando array em ordem decrescente

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerRanking"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["FontNameAndRanking"], {
        children: "Nome\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), players.map((element, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: async () => {
              await localStorage.setItem('id', element.id);
              router.push('/Perfil');
            },
            style: {
              border: "none",
              outline: "none",
              backgroundColor: "transparent"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["NameRanking"], {
              children: [i + 1, ". ", element.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["FontNameAndRanking"], {
        children: "Rating"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), players.map((element, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["RenderData"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["NameRanking"], {
            children: element.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 32
          }, this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }, this);
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

/* harmony default export */ __webpack_exports__["default"] = (Ranking);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Ranking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Ranking */ "./components/Ranking.js");
/* harmony import */ var _components_LastMatches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LastMatches */ "./components/LastMatches.js");
/* harmony import */ var _components_AddMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddMatch */ "./components/AddMatch.js");

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\pages\\index.js";






function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      padding: 0,
      marginLeft: -10,
      marginTop: -20,
      marginBottom: -10,
      backgroundColor: "black",
      width: "120%",
      height: "auto"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/chess.webp",
        quality: "100",
        responsive: "true",
        width: "1200",
        height: "600"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["ContainerChildren"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Ranking__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastMatches__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AddMatch__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./style/style.js":
/*!************************!*\
  !*** ./style/style.js ***!
  \************************/
/*! exports provided: Container, ContainerChildren, ContainerRanking, ContainerLastMatches, BoxLastMatchs, RenderData, FontNameAndRanking, NameRanking, NameLastMatchsWinner, NameLastMatchLoser, NameLastMatchs, ContainerNameLastMatch, ContainerGuide, GuideText, GuideWinner, GuideLoser, GuideEmpate, ContainerAddMatch, InputAddMatch, ButtonSubmit, PerfilWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerChildren", function() { return ContainerChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRanking", function() { return ContainerRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerLastMatches", function() { return ContainerLastMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxLastMatchs", function() { return BoxLastMatchs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderData", function() { return RenderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontNameAndRanking", function() { return FontNameAndRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameRanking", function() { return NameRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameLastMatchsWinner", function() { return NameLastMatchsWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameLastMatchLoser", function() { return NameLastMatchLoser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameLastMatchs", function() { return NameLastMatchs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerNameLastMatch", function() { return ContainerNameLastMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerGuide", function() { return ContainerGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideText", function() { return GuideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideWinner", function() { return GuideWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideLoser", function() { return GuideLoser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideEmpate", function() { return GuideEmpate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAddMatch", function() { return ContainerAddMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAddMatch", function() { return InputAddMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSubmit", function() { return ButtonSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilWords", function() { return PerfilWords; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: rgb(39,72,115);
  
`;
const ContainerChildren = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 100%;
    height: auto;
    background-color: black;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    top: 550px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`;
const ContainerRanking = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 300px;
    height: 200px;
    background-color: black;
    display: flex;
    flex-direction: row;
    margin: 10px;
`;
const ContainerLastMatches = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 300px;
    height: auto;
    background-color: black;
    margin: 10px;

`;
const BoxLastMatchs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    display: flex;
    flex-direction: row;
`;
const RenderData = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    display: flex;
    flex-direction: row;
`;
const FontNameAndRanking = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;

`;
const NameRanking = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed white;
    margin: 5px;
`;
const NameLastMatchsWinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 2px dashed;
    border-color: ${props => props.colorwinner};
    margin: 5px;
`;
const NameLastMatchLoser = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 2px dashed;
    border-color: ${props => props.colorLoser};
    margin: 5px;
    margin-left: 10px;
`;
const NameLastMatchs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p` 
    color: white;
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed white;
    margin: 5px;
`;
const ContainerNameLastMatch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    display: flex;
    flex-direction: row;
`;
const ContainerGuide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

`;
const GuideText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    font-size: 11px;
    font-weight: bold;
    color: white;
    margin-left: 10px;

`;
const GuideWinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 20px;
    height: 5px;
    background-color: green;
`;
const GuideLoser = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 20px;
    height: 5px;
    background-color: red;
`;
const GuideEmpate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 20px;
    height: 5px;
    background-color: blue;
`; ////////////////////////// ADD MATCH ///////////////////////////////

const ContainerAddMatch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 300px;
    height: 300px;
    background-color: black;
    margin: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;

`;
const InputAddMatch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
    ::placeholder {
        color: white;
        font-size: 12px;
        text-align: center;
    }
    width: 130px;
    height: 20px;
    margin: 5px;
    background-color: #1C1C1C;
    border: none;
    border-radius: 20px;
    :focus {
        outline: none;
        width: 140px;
        color: white;
    }
`;
const ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    width: 80px;
    height: 35px;
    background-color: #1C1C1C;
    border: none;
    outline: none;
    border-radius: 20px;
    margin: 5px;
    margin-top: 15px;

`;
const PerfilWords = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p` 
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZE1hdGNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGFzdE1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SYW5raW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFkZE1hdGNoIiwid2lubmVyIiwic2V0V2lubmVyIiwidXNlU3RhdGUiLCJsb3NlciIsInNldExvc2VyIiwiZW1wYXRlIiwic2V0RW1wYXRlIiwiaGFuZGxlQWRkTWF0Y2giLCJyZXNwb25zZSIsImF4aW9zIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWxlcnQiLCJlcnIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiIsIkxhc3RNYXRjaHMiLCJsYXN0bWF0Y2hzIiwic2V0TGFzdG1hdGNocyIsImVtcGF0ZUJvcmRlciIsInNldEVtcGF0ZUJvcmRlciIsInVzZUVmZmVjdCIsImdldExhc3RNYXRjaHMiLCJnZXQiLCJhcnJheXJldmVyc2UiLCJyZXZlcnNlIiwiY29ydGFkbyIsInNsaWNlIiwicHJldlN0YXRlIiwiZm9ybWF0RGF0ZSIsImRhdGVHYW1lIiwiRGF0ZSIsImZvcm1hdGVkRGF0ZSIsInRvU3RyaW5nIiwiY3V0RGF0ZSIsIm1hcmdpblRvcCIsIm1hcCIsImVsZW1lbnQiLCJpIiwicDEiLCJwMiIsIlJhbmtpbmciLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJhbmtpbmdQbGF5ZXJzIiwic29ydCIsImEiLCJiIiwicGFyc2VGbG9hdCIsInJhdGluZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInB1c2giLCJib3JkZXIiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwibmFtZSIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsInciLCJwIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJzaXplcyIsInNyYyIsInBhcnNlSW50IiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkhvbWUiLCJtYXJnaW5Cb3R0b20iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250YWluZXJDaGlsZHJlbiIsIkNvbnRhaW5lclJhbmtpbmciLCJDb250YWluZXJMYXN0TWF0Y2hlcyIsIkJveExhc3RNYXRjaHMiLCJSZW5kZXJEYXRhIiwiRm9udE5hbWVBbmRSYW5raW5nIiwiaDEiLCJOYW1lUmFua2luZyIsIk5hbWVMYXN0TWF0Y2hzV2lubmVyIiwicHJvcHMiLCJjb2xvcndpbm5lciIsIk5hbWVMYXN0TWF0Y2hMb3NlciIsImNvbG9yTG9zZXIiLCJOYW1lTGFzdE1hdGNocyIsIkNvbnRhaW5lck5hbWVMYXN0TWF0Y2giLCJDb250YWluZXJHdWlkZSIsIkd1aWRlVGV4dCIsIkd1aWRlV2lubmVyIiwiR3VpZGVMb3NlciIsIkd1aWRlRW1wYXRlIiwiQ29udGFpbmVyQWRkTWF0Y2giLCJJbnB1dEFkZE1hdGNoIiwiaW5wdXQiLCJCdXR0b25TdWJtaXQiLCJidXR0b24iLCJQZXJmaWxXb3JkcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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O0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNb0IsV0FBVyxHQUFHckIsd0RBQU0sQ0FBQ0MsR0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUpPLEMsQ0FLUDs7QUFFTyxNQUFNcUIsaUJBQWlCLEdBQUd0Qix3REFBTSxDQUFDQyxHQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBVUEsTUFBTXNCLGFBQWEsR0FBSXZCLHdEQUFNLENBQUN3QixLQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQk87QUFvQkEsTUFBTUMsWUFBWSxHQUFHekIsd0RBQU0sQ0FBQzBCLE1BQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1DLFdBQVcsR0FBRzNCLHdEQUFNLENBQUN2RixDQUFHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLENBSk8sQzs7Ozs7Ozs7Ozs7QUM3S1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtDb250YWluZXJBZGRNYXRjaCwgSW5wdXRBZGRNYXRjaCwgRm9udE5hbWVBbmRSYW5raW5nLCBCdXR0b25TdWJtaXR9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5cclxuZnVuY3Rpb24gQWRkTWF0Y2ggKCkge1xyXG4gICAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2xvc2VyLCBzZXRMb3Nlcl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlbXBhdGUsIHNldEVtcGF0ZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZE1hdGNoICh3aW5uZXIsbG9zZXIsZW1wYXRlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvYWRkbWF0Y2gnLCB7XHJcbiAgICAgICAgICAgIFwicDFcIjogYCR7d2lubmVyfWAsXHJcbiAgICAgICAgICAgIFwicDJcIjogYCR7bG9zZXJ9YCxcclxuICAgICAgICAgICAgXCJlbXBhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0cnVlXCI6IGVtcGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSA9PT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUGFydGlkYSBBZGljaW9uYWRhJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIGFkaWNpb25hciBhIHBhcnRpZGFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoYEVycm8gYW8gYWRpY2lvbmFyIHBhcnRpZGEhISBVc3VhcmlvIG7Do28gZW5jb250cmFkb2ApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyQWRkTWF0Y2g+XHJcbiAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+QWRkIFBhcnRpZGE8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DbGljaz17KCkgPT4gc2V0RW1wYXRlKDEpfXN0eWxlPXt7d2lkdGg6IDIwLCBoZWlnaHQ6IDIwfX0gdHlwZT1cImNoZWNrYm94XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxwIHN0eWxlPXt7Zm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogMTB9fT5FbXBhdGU8L3A+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dEFkZE1hdGNoIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3dpbm5lcn0gb25DaGFuZ2U9e2UgPT4gc2V0V2lubmVyKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJWZW5jZWRvclwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dEFkZE1hdGNoIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvc2VyfSBvbkNoYW5nZT17ZSA9PiBzZXRMb3NlcihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRGVycm90YWRvXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblN1Ym1pdCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRNYXRjaCh3aW5uZXIsbG9zZXIsZW1wYXRlKX0+PHAgc3R5bGU9e3tmb250U2l6ZTogMTIsIGNvbG9yOiBcIndoaXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5FbnZpYXI8L3A+PC9CdXR0b25TdWJtaXQ+XHJcbiAgICAgICAgPC9Db250YWluZXJBZGRNYXRjaD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWF0Y2giLCJpbXBvcnQge0NvbnRhaW5lckxhc3RNYXRjaGVzLCBGb250TmFtZUFuZFJhbmtpbmcsTmFtZUxhc3RNYXRjaHNXaW5uZXIsIE5hbWVMYXN0TWF0Y2hMb3NlciwgQ29udGFpbmVyTmFtZUxhc3RNYXRjaCwgXHJcbiAgICAgICAgQm94TGFzdE1hdGNocywgR3VpZGVUZXh0LCBHdWlkZVdpbm5lciwgR3VpZGVMb3NlciwgR3VpZGVFbXBhdGUsIENvbnRhaW5lckd1aWRlfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZnVuY3Rpb24gTGFzdE1hdGNocyAoKSB7XHJcblxyXG4gICAgY29uc3QgW2xhc3RtYXRjaHMsIHNldExhc3RtYXRjaHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZW1wYXRlQm9yZGVyLCBzZXRFbXBhdGVCb3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TGFzdE1hdGNocygpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMYXN0TWF0Y2hzICgpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2xhc3RtYXRjaHMnKVxyXG4gICAgICAgIGxldCBhcnJheXJldmVyc2UgPSBkYXRhLnJldmVyc2UoKVxyXG4gICAgICAgIGxldCBjb3J0YWRvID0gYXJyYXlyZXZlcnNlLnNsaWNlKDAsMTApXHJcbiAgICAgICAgc2V0TGFzdG1hdGNocyhwcmV2U3RhdGUgPT4gKFsuLi5sYXN0bWF0Y2hzLCAuLi5jb3J0YWRvXSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUgKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkYXRlR2FtZSA9ICBuZXcgRGF0ZShgJHtkYXRhfWApXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZWREYXRlID0gZGF0ZUdhbWUudG9TdHJpbmcoKVxyXG4gICAgICAgIGNvbnN0IGN1dERhdGUgPSBmb3JtYXRlZERhdGUuc2xpY2UoMCwyNSlcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj4gIDxwIHN0eWxlPXt7Zm9udFNpemU6IDEzLCBjb2xvcjogXCIjMDBGRkZGXCIsIG1hcmdpblRvcDogMTV9fT57Y3V0RGF0ZX0gPC9wPjwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckxhc3RNYXRjaGVzPlxyXG4gICAgICAgICAgICAgPEZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIMOabHRpbWFzIHBhcnRpZGFzXHJcbiAgICAgICAgICAgIDwvRm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lckd1aWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PjxHdWlkZVdpbm5lciAvPiA8R3VpZGVUZXh0PlZlbmNlZG9yPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsICBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+IDxHdWlkZUxvc2VyIC8+IDxHdWlkZVRleHQ+RGVycm90YWRvPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+PEd1aWRlRW1wYXRlIC8+IDxHdWlkZVRleHQ+RW1wYXRlPC9HdWlkZVRleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lckd1aWRlPlxyXG4gICAgICAgICAgICA8Qm94TGFzdE1hdGNocz5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJOYW1lTGFzdE1hdGNoIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmFtZUxhc3RNYXRjaHNXaW5uZXIgY29sb3J3aW5uZXI9eygpID0+IGVsZW1lbnQuZW1wYXRlID8gXCJibHVlXCIgOiBcImdyZWVuXCJ9PntlbGVtZW50LnAxfSA8L05hbWVMYXN0TWF0Y2hzV2lubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIHtsYXN0bWF0Y2hzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyTmFtZUxhc3RNYXRjaCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVMYXN0TWF0Y2hMb3NlciBjb2xvckxvc2VyPXsoKSA9PiBlbGVtZW50LmVtcGF0ZSA/IFwiYmx1ZVwiIDogXCJyZWRcIn0+IHtlbGVtZW50LnAyfTwvTmFtZUxhc3RNYXRjaExvc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lck5hbWVMYXN0TWF0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogLTUsIG1hcmdpbkxlZnQ6IDMwfX0+XHJcbiAgICAgICAgICAgICAgICB7bGFzdG1hdGNocy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGVsZW1lbnQuZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3hMYXN0TWF0Y2hzPlxyXG4gICAgICAgIDwvQ29udGFpbmVyTGFzdE1hdGNoZXM+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0TWF0Y2hzIiwiaW1wb3J0IHtDb250YWluZXJSYW5raW5nLCBSZW5kZXJEYXRhLCBGb250TmFtZUFuZFJhbmtpbmcsTmFtZVJhbmtpbmd9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBSYW5raW5nICgpIHtcclxuICAgIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzIF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBhc3luYyBmdW5jdGlvbiBSYW5raW5nUGxheWVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2J1c2NhJylcclxuICAgICAgICBzZXRQbGF5ZXJzKGRhdGEuZGF0YSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICBSYW5raW5nUGxheWVycygpXHJcbiAgICB9LFtdKVxyXG4gICAgcGxheWVycy5zb3J0KChhLGIpID0+IHBhcnNlRmxvYXQoYi5yYXRpbmcpIC0gcGFyc2VGbG9hdChhLnJhdGluZykpLy8gY29sb2NhbmRvIGFycmF5IGVtIG9yZGVtIGRlY3Jlc2NlbnRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJSYW5raW5nPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgTm9tZSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGxheWVycy5tYXAoKGVsZW1lbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJEYXRhIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgZWxlbWVudC5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9QZXJmaWwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3R5bGU9e3tib3JkZXI6IFwibm9uZVwiLCBvdXRsaW5lOiBcIm5vbmVcIiwgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lUmFua2luZz5cclxuICAgICAgICAgICAgICAgICAgICB7aSsxfS4ge2VsZW1lbnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgUmF0aW5nXHJcbiAgICAgICAgICAgICAgICA8L0ZvbnROYW1lQW5kUmFua2luZz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLm1hcCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRGF0YSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hbWVSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlbmRlckRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lclJhbmtpbmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxMb2FkZXJWYWx1ZSwgKHByb3BzOiBMb2FkZXJQcm9wcykgPT4gc3RyaW5nPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiwgd2lkdGggKiAzXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgQ2FsbExvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxuZnVuY3Rpb24gY2FsbExvYWRlcihsb2FkZXJQcm9wczogQ2FsbExvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IFBpY2s8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NpemVzJyB8ICdzcmNTZXQnXG4+XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgY29uc3Qgc3JjU2V0ID0gd2lkdGhzXG4gICAgLm1hcChcbiAgICAgICh3LCBpKSA9PlxuICAgICAgICBgJHtjYWxsTG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgfSR7a2luZH1gXG4gICAgKVxuICAgIC5qb2luKCcsICcpXG5cbiAgaWYgKCFzaXplcyAmJiBraW5kID09PSAndycpIHtcbiAgICBzaXplcyA9IHdpZHRoc1xuICAgICAgLm1hcCgodywgaSkgPT4gKGkgPT09IGxhc3QgPyBgJHt3fXB4YCA6IGAobWF4LXdpZHRoOiAke3d9cHgpICR7d31weGApKVxuICAgICAgLmpvaW4oJywgJylcbiAgfVxuXG4gIHNyYyA9IGNhbGxMb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSlcblxuICByZXR1cm4geyBzcmMsIHNpemVzLCBzcmNTZXQgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nLFxuXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2Jsb2NrJyB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxudHlwZSBMb2FkZXJQcm9wcyA9IENhbGxMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKSB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0L3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxXycgKyBxdWFsaXR5KVxuICB9XG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICB9XG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbikge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxcbiAgc3RyaW5nLFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxuICB9XG4+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCkge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQge0NvbnRhaW5lciwgSGVhZGVyQ2hlc3MsIENvbnRhaW5lckNoaWxkcmVufSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSYW5raW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUmFua2luZydcclxuaW1wb3J0IExhc3RNYXRjaGVzIGZyb20gJy4uL2NvbXBvbmVudHMvTGFzdE1hdGNoZXMnXHJcbmltcG9ydCBBZGRNYXRjaCBmcm9tICcuLi9jb21wb25lbnRzL0FkZE1hdGNoJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luTGVmdDotMTAsIG1hcmdpblRvcDogLTIwLCBtYXJnaW5Cb3R0b206IC0xMCwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIHdpZHRoOlwiMTIwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jaGVzcy53ZWJwXCIgcXVhbGl0eT1cIjEwMFwiIHJlc3BvbnNpdmU9XCJ0cnVlXCIgd2lkdGg9XCIxMjAwXCIgaGVpZ2h0PVwiNjAwXCIvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lckNoaWxkcmVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYW5raW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhc3RNYXRjaGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZE1hdGNoIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lckNoaWxkcmVuPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LDcyLDExNSk7XHJcbiAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJDaGlsZHJlbiA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICB0b3A6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lclJhbmtpbmcgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMTBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGFzdE1hdGNoZXMgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJveExhc3RNYXRjaHMgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlbmRlckRhdGEgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvbnROYW1lQW5kUmFua2luZyA9IHN0eWxlZC5oMSBgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lUmFua2luZyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTmFtZUxhc3RNYXRjaHNXaW5uZXIgPSBzdHlsZWQucCBgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J3aW5uZXJ9O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE5hbWVMYXN0TWF0Y2hMb3NlciA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvckxvc2VyIH07XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBOYW1lTGFzdE1hdGNocyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTmFtZUxhc3RNYXRjaCA9IHN0eWxlZC5kaXYgYCBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyR3VpZGUgPSBzdHlsZWQuZGl2IGBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZVRleHQgPSBzdHlsZWQucCBgXHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZVdpbm5lciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBHdWlkZUxvc2VyID0gc3R5bGVkLmRpdiBgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3VpZGVFbXBhdGUgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG5gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFERCBNQVRDSCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQWRkTWF0Y2ggPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgSW5wdXRBZGRNYXRjaCA9ICBzdHlsZWQuaW5wdXQgYFxyXG4gICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uU3VibWl0ID0gc3R5bGVkLmJ1dHRvbiBgXHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJmaWxXb3JkcyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9