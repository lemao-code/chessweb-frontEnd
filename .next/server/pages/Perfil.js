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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Perfil.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Contras.js":
/*!*******************************!*\
  !*** ./components/Contras.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Contras.js";

function Contras({
  contras
}) {
  const idperfil = localStorage.getItem('id'); //    console.log(contras)

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

  const players = Object.entries(contras);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: players.map(element => {
      let _key;

      console.log(element[1]);

      if (element[1][0].id_player == idperfil) {
        _key = 0;
      } else {
        _key = 1;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["PerfilWords"], {
            children: [getNames(element[0]), "\xA0\xA0\xA0\xA0\xA0\xA0 ", element[1][_key].vitorias, "\xA0 /\xA0 ", element[1][_key].derrotas, " \xA0\xA0|\xA0\xA0 ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./pages/Perfil.js":
/*!*************************!*\
  !*** ./pages/Perfil.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perfil; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var _components_Contras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contras */ "./components/Contras.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\pages\\Perfil.js";




function Perfil() {
  const {
    0: getperfil,
    1: setGetPerfil
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      const id = localStorage.getItem('id');

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3333/perfil', {
          "id": id
        });
        getperfil.push(response.data);
        setGetPerfil([...getperfil, response.data]);
      } catch (err) {
        console.log('error');
      }
    })();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
    style: {
      margin: 0,
      marginTop: -30,
      backgroundColor: "black"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: "black",
        height: "100%",
        width: "100%"
      },
      children: getperfil == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "sem dadooooooooooooooos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [getperfil[0].perfil.map((element, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                color: "white",
                fontSize: 29,
                fontWeight: "bold",
                textAlign: "center"
              },
              children: "Perfil"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#00FFFF",
                    textAlign: "center"
                  },
                  children: element.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["PerfilWords"], {
                  children: [" Rating \xA0\xA0\xA0", element.rating]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["PerfilWords"], {
                  children: [" Vit\xF3rias \xA0\xA0\xA0", element.vitorias_total]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 40
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["PerfilWords"], {
                  children: [" Derrotas\xA0\xA0\xA0  ", element.derrotas_total, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_2__["PerfilWords"], {
                  children: ["Empates\xA0\xA0\xA0 ", element.empates_totais, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 40
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            color: "white",
            textAlign: "center",
            fontSize: 25,
            color: "#FFD700",
            fontWeight: "bold"
          },
          children: "Contras"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "green",
              textAlign: "center"
            },
            children: " Vitoria "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "white",
              fontWeight: "bold",
              marginLeft: 10
            },
            children: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 89
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "red",
              textAlign: "center",
              marginLeft: 10
            },
            children: " Derrota "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "white",
              fontWeight: "bold",
              marginLeft: 10
            },
            children: "|"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 103
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "blue",
              textAlign: "center",
              marginLeft: 10
            },
            children: "Empate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 20
        }, this), getperfil[0].contras.map((element, i) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Contras__WEBPACK_IMPORTED_MODULE_3__["default"], {
            contras: element
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 33
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./style/style.js":
/*!************************!*\
  !*** ./style/style.js ***!
  \************************/
/*! exports provided: Alpha, Container, HeaderChess, ContainerChildren, ContainerRanking, ContainerLastMatches, BoxLastMatchs, RenderData, FontNameAndRanking, NameRanking, NameLastMatchsWinner, NameLastMatchLoser, NameLastMatchs, ContainerNameLastMatch, ContainerGuide, GuideText, GuideWinner, GuideLoser, GuideEmpate, ContainerAddMatch, InputAddMatch, ButtonSubmit, PerfilWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alpha", function() { return Alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderChess", function() { return HeaderChess; });
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

const Alpha = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.body` 
    margin: -10px;
    padding: 0px;
    height: 130vh;
    background-color: black;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`;
const HeaderChess = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(39,72,115);
`;
const ContainerChildren = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div` 
    width: 100%;
    height: auto;
    background-color: black;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    position: absolute;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmFzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1BlcmZpbC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250cmFzIiwiY29udHJhcyIsImlkcGVyZmlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldE5hbWVzIiwiaWQiLCJwbGF5ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVsZW1lbnQiLCJfa2V5IiwiY29uc29sZSIsImxvZyIsImlkX3BsYXllciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ2aXRvcmlhcyIsImRlcnJvdGFzIiwiZW1wYXRlcyIsIlBlcmZpbCIsImdldHBlcmZpbCIsInNldEdldFBlcmZpbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3QiLCJwdXNoIiwiZGF0YSIsImVyciIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwicGVyZmlsIiwiaSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJtYXJnaW5MZWZ0IiwiQWxwaGEiLCJzdHlsZWQiLCJib2R5IiwiQ29udGFpbmVyIiwiZGl2IiwiSGVhZGVyQ2hlc3MiLCJDb250YWluZXJDaGlsZHJlbiIsIkNvbnRhaW5lclJhbmtpbmciLCJDb250YWluZXJMYXN0TWF0Y2hlcyIsIkJveExhc3RNYXRjaHMiLCJSZW5kZXJEYXRhIiwiRm9udE5hbWVBbmRSYW5raW5nIiwiaDEiLCJOYW1lUmFua2luZyIsInAiLCJOYW1lTGFzdE1hdGNoc1dpbm5lciIsInByb3BzIiwiY29sb3J3aW5uZXIiLCJOYW1lTGFzdE1hdGNoTG9zZXIiLCJjb2xvckxvc2VyIiwiTmFtZUxhc3RNYXRjaHMiLCJDb250YWluZXJOYW1lTGFzdE1hdGNoIiwiQ29udGFpbmVyR3VpZGUiLCJHdWlkZVRleHQiLCJHdWlkZVdpbm5lciIsIkd1aWRlTG9zZXIiLCJHdWlkZUVtcGF0ZSIsIkNvbnRhaW5lckFkZE1hdGNoIiwiSW5wdXRBZGRNYXRjaCIsImlucHV0IiwiQnV0dG9uU3VibWl0IiwiYnV0dG9uIiwiUGVyZmlsV29yZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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QUFNLENBQUM0QixLQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQk87QUFvQkEsTUFBTUMsWUFBWSxHQUFHN0Isd0RBQU0sQ0FBQzhCLE1BQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1DLFdBQVcsR0FBRy9CLHdEQUFNLENBQUNhLENBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FKTyxDOzs7Ozs7Ozs7OztBQzdMUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9QZXJmaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1BlcmZpbC5qc1wiKTtcbiIsImltcG9ydCB7UGVyZmlsV29yZHN9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFzICh7Y29udHJhc30pIHtcclxuICAgIGNvbnN0IGlkcGVyZmlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuLy8gICAgY29uc29sZS5sb2coY29udHJhcylcclxuICAgIGZ1bmN0aW9uIGdldE5hbWVzKGlkKSB7XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDFcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJUaGlhZ29cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwMlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlJpY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwM1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpvYW9cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRhbmllbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInA1XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVml0b3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHBsYXllcnMgPSBPYmplY3QuZW50cmllcyhjb250cmFzKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgeyBwbGF5ZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgX2tleVxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzFdKVxyXG4gICAgICAgICAgICAgICBpZihlbGVtZW50WzFdWzBdLmlkX3BsYXllciA9PSBpZHBlcmZpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgX2tleSA9ICAwXHJcbiAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIF9rZXkgPSAxXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJ9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldE5hbWVzKGVsZW1lbnRbMF0pfSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyB7ZWxlbWVudFsxXVtfa2V5XS52aXRvcmlhc30mbmJzcDsgLyZuYnNwOyB7ZWxlbWVudFsxXVtfa2V5XS5kZXJyb3Rhc30gJm5ic3A7Jm5ic3A7fCZuYnNwOyZuYnNwOyB7ZWxlbWVudFsxXVtfa2V5XS5lbXBhdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgKVxyXG4gICAgIFxyXG59IiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtQZXJmaWxXb3Jkc30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmltcG9ydCBDb250cmFzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udHJhcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZmlsICgpIHtcclxuICAgIGNvbnN0IFtnZXRwZXJmaWwsIHNldEdldFBlcmZpbF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL3BlcmZpbCcsIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBnZXRwZXJmaWwucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0R2V0UGVyZmlsKFsuLi5nZXRwZXJmaWwsIHJlc3BvbnNlLmRhdGFdKVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSgpXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxib2R5IHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Ub3A6IC0zMCwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fSA+XHJcbiAgICAgICAgICAgIHtnZXRwZXJmaWwgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtIGRhZG9vb29vb29vb29vb29vb3NcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0ucGVyZmlsLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogMjksIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+UGVyZmlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IDMwLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgY29sb3I6IFwiIzAwRkZGRlwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT57ZWxlbWVudC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFJhdGluZyAmbmJzcDsmbmJzcDsmbmJzcDt7ZWxlbWVudC5yYXRpbmd9PC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IFZpdMOzcmlhcyAmbmJzcDsmbmJzcDsmbmJzcDt7ZWxlbWVudC52aXRvcmlhc190b3RhbH08L1BlcmZpbFdvcmRzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz4gRGVycm90YXMmbmJzcDsmbmJzcDsmbmJzcDsgIHtlbGVtZW50LmRlcnJvdGFzX3RvdGFsfSA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPkVtcGF0ZXMmbmJzcDsmbmJzcDsmbmJzcDsge2VsZW1lbnQuZW1wYXRlc190b3RhaXN9IDwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogMjUsIGNvbG9yOiBcIiNGRkQ3MDBcIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fT5Db250cmFzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCIgLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT4gVml0b3JpYSA8L3A+IDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDpcImJvbGRcIiwgbWFyZ2luTGVmdDogMTB9fT4vPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcInJlZFwiICwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5MZWZ0OiAxMH19PiBEZXJyb3RhIDwvcD4gPHAgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCBmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5MZWZ0OjEwfX0+fDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibHVlXCIgLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6IDEwfX0+RW1wYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXRwZXJmaWxbMF0uY29udHJhcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPENvbnRyYXMgY29udHJhcz17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBBbHBoYSA9IHN0eWxlZC5ib2R5IGAgXHJcbiAgICBtYXJnaW46IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNoZXNzID0gc3R5bGVkLmRpdiBgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSw3MiwxMTUpO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJDaGlsZHJlbiA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lclJhbmtpbmcgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMTBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGFzdE1hdGNoZXMgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJveExhc3RNYXRjaHMgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlbmRlckRhdGEgPSBzdHlsZWQuZGl2IGAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvbnROYW1lQW5kUmFua2luZyA9IHN0eWxlZC5oMSBgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lUmFua2luZyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTmFtZUxhc3RNYXRjaHNXaW5uZXIgPSBzdHlsZWQucCBgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J3aW5uZXJ9O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE5hbWVMYXN0TWF0Y2hMb3NlciA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvckxvc2VyIH07XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBOYW1lTGFzdE1hdGNocyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTmFtZUxhc3RNYXRjaCA9IHN0eWxlZC5kaXYgYCBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyR3VpZGUgPSBzdHlsZWQuZGl2IGBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZVRleHQgPSBzdHlsZWQucCBgXHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZVdpbm5lciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBHdWlkZUxvc2VyID0gc3R5bGVkLmRpdiBgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3VpZGVFbXBhdGUgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG5gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFERCBNQVRDSCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQWRkTWF0Y2ggPSBzdHlsZWQuZGl2IGAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgSW5wdXRBZGRNYXRjaCA9ICBzdHlsZWQuaW5wdXQgYFxyXG4gICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uU3VibWl0ID0gc3R5bGVkLmJ1dHRvbiBgXHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJmaWxXb3JkcyA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9