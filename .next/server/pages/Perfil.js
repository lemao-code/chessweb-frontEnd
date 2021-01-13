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
  const idperfil = localStorage.getItem('id');

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
    children: players.map((element, i) => {
      let _key;

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
            lineNumber: 36,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: "black",
      marginTop: -30,
      marginLeft: -10,
      marginRight: -5,
      marginBottom: -30,
      width: "110%",
      height: "110%"
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
        }, i, true, {
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
        }, i, false, {
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
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmFzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1BlcmZpbC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250cmFzIiwiY29udHJhcyIsImlkcGVyZmlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldE5hbWVzIiwiaWQiLCJwbGF5ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVsZW1lbnQiLCJpIiwiX2tleSIsImlkX3BsYXllciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ2aXRvcmlhcyIsImRlcnJvdGFzIiwiZW1wYXRlcyIsIlBlcmZpbCIsImdldHBlcmZpbCIsInNldEdldFBlcmZpbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3QiLCJwdXNoIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInBlcmZpbCIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm5hbWUiLCJyYXRpbmciLCJ2aXRvcmlhc190b3RhbCIsImRlcnJvdGFzX3RvdGFsIiwiZW1wYXRlc190b3RhaXMiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250YWluZXJDaGlsZHJlbiIsIkNvbnRhaW5lclJhbmtpbmciLCJDb250YWluZXJMYXN0TWF0Y2hlcyIsIkJveExhc3RNYXRjaHMiLCJSZW5kZXJEYXRhIiwiRm9udE5hbWVBbmRSYW5raW5nIiwiaDEiLCJOYW1lUmFua2luZyIsInAiLCJOYW1lTGFzdE1hdGNoc1dpbm5lciIsInByb3BzIiwiY29sb3J3aW5uZXIiLCJOYW1lTGFzdE1hdGNoTG9zZXIiLCJjb2xvckxvc2VyIiwiTmFtZUxhc3RNYXRjaHMiLCJDb250YWluZXJOYW1lTGFzdE1hdGNoIiwiQ29udGFpbmVyR3VpZGUiLCJHdWlkZVRleHQiLCJHdWlkZVdpbm5lciIsIkd1aWRlTG9zZXIiLCJHdWlkZUVtcGF0ZSIsIkNvbnRhaW5lckFkZE1hdGNoIiwiSW5wdXRBZGRNYXRjaCIsImlucHV0IiwiQnV0dG9uU3VibWl0IiwiYnV0dG9uIiwiUGVyZmlsV29yZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ2UsU0FBU0EsT0FBVCxDQUFrQjtBQUFDQztBQUFELENBQWxCLEVBQTZCO0FBQ3hDLFFBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBQWpCOztBQUNBLFdBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ2xCLFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sTUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE9BQVA7QUFDSDtBQUNKOztBQUNELFFBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVSLE9BQWYsQ0FBaEI7QUFDRCxzQkFDSTtBQUFBLGNBQ01NLE9BQU8sQ0FBQ0csR0FBUixDQUFZLENBQUNDLE9BQUQsRUFBVUMsQ0FBVixLQUFnQjtBQUMxQixVQUFJQyxJQUFKOztBQUVBLFVBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVyxDQUFYLEVBQWNHLFNBQWQsSUFBMkJaLFFBQTlCLEVBQXdDO0FBQ3BDVyxZQUFJLEdBQUksQ0FBUjtBQUNILE9BRkQsTUFFTTtBQUNGQSxZQUFJLEdBQUcsQ0FBUDtBQUNIOztBQUVSLDBCQUNRO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUU7QUFBQ0UsbUJBQU8sRUFBRSxNQUFWO0FBQWtCQyxzQkFBVSxFQUFFLFFBQTlCO0FBQXdDQywwQkFBYyxFQUFFO0FBQXhELFdBQVo7QUFBQSxpQ0FDUSxxRUFBQyx3REFBRDtBQUFBLHVCQUNLWixRQUFRLENBQUNNLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FEYiwrQkFDZ0VBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsSUFBWCxFQUFpQkssUUFEakYsaUJBQzBHUCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdFLElBQVgsRUFBaUJNLFFBRDNILHlCQUNnS1IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxJQUFYLEVBQWlCTyxPQURqTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVVIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFI7QUFVQyxLQW5CSTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlCRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxNQUFULEdBQW1CO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaLEtBQUMsWUFBWTtBQUNULFlBQU1uQixFQUFFLEdBQUdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixDQUFYOztBQUNBLFVBQUk7QUFFQSxjQUFNc0IsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyw4QkFBWCxFQUEyQztBQUNsRSxnQkFBTXRCO0FBRDRELFNBQTNDLENBQXZCO0FBR0FnQixpQkFBUyxDQUFDTyxJQUFWLENBQWVILFFBQVEsQ0FBQ0ksSUFBeEI7QUFDQVAsb0JBQVksQ0FBQyxDQUFDLEdBQUdELFNBQUosRUFBZUksUUFBUSxDQUFDSSxJQUF4QixDQUFELENBQVo7QUFFSCxPQVJELENBUUMsT0FBTUMsR0FBTixFQUFXO0FBQ1JDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSDtBQUdKLEtBZkQ7QUFnQkgsR0FqQlEsRUFpQlAsRUFqQk8sQ0FBVDtBQW1CQSxzQkFFSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFFLE9BQWxCO0FBQTRCQyxlQUFTLEVBQUUsQ0FBQyxFQUF4QztBQUE0Q0MsZ0JBQVUsRUFBRSxDQUFDLEVBQXpEO0FBQTZEQyxpQkFBVyxFQUFFLENBQUMsQ0FBM0U7QUFBOEVDLGtCQUFZLEVBQUUsQ0FBQyxFQUE3RjtBQUFpR0MsV0FBSyxFQUFFLE1BQXhHO0FBQWdIQyxZQUFNLEVBQUU7QUFBeEgsS0FBWjtBQUFBLGNBQ0tsQixTQUFTLElBQUksQ0FBYixnQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGdCQUtHO0FBQUEsaUJBQ0tBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYW1CLE1BQWIsQ0FBb0IvQixHQUFwQixDQUF3QixDQUFDQyxPQUFELEVBQVVDLENBQVYsS0FBZ0I7QUFDckMsNEJBQ0k7QUFBQSxrQ0FDSTtBQUFHLGlCQUFLLEVBQUU7QUFBQzhCLG1CQUFLLEVBQUUsT0FBUjtBQUFpQkMsc0JBQVEsRUFBRSxFQUEzQjtBQUErQkMsd0JBQVUsRUFBRSxNQUEzQztBQUFvREMsdUJBQVMsRUFBRTtBQUEvRCxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxpQkFBSyxFQUFFO0FBQUM5QixxQkFBTyxFQUFFLE1BQVY7QUFBa0IrQiwyQkFBYSxFQUFFLFFBQWpDO0FBQTJDN0IsNEJBQWMsRUFBRSxRQUEzRDtBQUFxRUQsd0JBQVUsRUFBRTtBQUFqRixhQUFaO0FBQUEsb0NBQ0k7QUFBQSxxQ0FDSTtBQUFHLHFCQUFLLEVBQUU7QUFBQzJCLDBCQUFRLEVBQUUsRUFBWDtBQUFlQyw0QkFBVSxFQUFFLE1BQTNCO0FBQW1DRix1QkFBSyxFQUFFLFNBQTFDO0FBQXFERywyQkFBUyxFQUFFO0FBQWhFLGlCQUFWO0FBQUEsMEJBQXNGbEMsT0FBTyxDQUFDb0M7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFBLHFDQUNJLHFFQUFDLHdEQUFEO0FBQUEsbURBQXdDcEMsT0FBTyxDQUFDcUMsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQU9JO0FBQUEscUNBQ0cscUVBQUMsd0RBQUQ7QUFBQSx3REFBMENyQyxPQUFPLENBQUNzQyxjQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKLGVBVUk7QUFBQSxxQ0FDQSxxRUFBQyx3REFBRDtBQUFBLHNEQUEyQ3RDLE9BQU8sQ0FBQ3VDLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkosZUFhSTtBQUFBLHFDQUNHLHFFQUFDLHdEQUFEO0FBQUEsbURBQXdDdkMsT0FBTyxDQUFDd0MsY0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQSxXQUFVdkMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBc0JILE9BdkJBLENBREwsZUEwQkc7QUFBRyxhQUFLLEVBQUU7QUFBQzhCLGVBQUssRUFBRSxPQUFSO0FBQWlCRyxtQkFBUyxFQUFFLFFBQTVCO0FBQXNDRixrQkFBUSxFQUFFLEVBQWhEO0FBQW9ERCxlQUFLLEVBQUUsU0FBM0Q7QUFBc0VFLG9CQUFVLEVBQUU7QUFBbEYsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSCxlQTJCRztBQUFLLGFBQUssRUFBRTtBQUFDN0IsaUJBQU8sRUFBRSxNQUFWO0FBQWtCK0IsdUJBQWEsRUFBRSxLQUFqQztBQUF3QzdCLHdCQUFjLEVBQUUsUUFBeEQ7QUFBa0VELG9CQUFVLEVBQUU7QUFBOUUsU0FBWjtBQUFBLGdDQUNLO0FBQUcsZUFBSyxFQUFFO0FBQUMwQixpQkFBSyxFQUFFLE9BQVI7QUFBa0JHLHFCQUFTLEVBQUU7QUFBN0IsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETCxvQkFDcUU7QUFBRyxlQUFLLEVBQUU7QUFBQ0gsaUJBQUssRUFBRSxPQUFSO0FBQWlCRSxzQkFBVSxFQUFDLE1BQTVCO0FBQW9DUixzQkFBVSxFQUFFO0FBQWhELFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHJFLGVBRUs7QUFBRyxlQUFLLEVBQUU7QUFBQ00saUJBQUssRUFBRSxLQUFSO0FBQWdCRyxxQkFBUyxFQUFFLFFBQTNCO0FBQXFDVCxzQkFBVSxFQUFFO0FBQWpELFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkwsb0JBRW1GO0FBQUcsZUFBSyxFQUFFO0FBQUNNLGlCQUFLLEVBQUUsT0FBUjtBQUFpQkUsc0JBQVUsRUFBQyxNQUE1QjtBQUFvQ1Isc0JBQVUsRUFBQztBQUEvQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZuRixlQUdLO0FBQUcsZUFBSyxFQUFFO0FBQUNNLGlCQUFLLEVBQUUsTUFBUjtBQUFpQkcscUJBQVMsRUFBRSxRQUE1QjtBQUFzQ1Qsc0JBQVUsRUFBRTtBQUFsRCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSCxFQWdDS2QsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhckIsT0FBYixDQUFxQlMsR0FBckIsQ0FBeUIsQ0FBQ0MsT0FBRCxFQUFVQyxDQUFWLEtBQWdCO0FBRXRDLDRCQUFRLHFFQUFDLDJEQUFEO0FBQWlCLGlCQUFPLEVBQUVEO0FBQTFCLFdBQWNDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUjtBQUVILE9BSkEsQ0FoQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBa0RILEM7Ozs7Ozs7Ozs7OztBQzVFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU13QyxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQTztBQVNBLE1BQU1DLGlCQUFpQixHQUFHRix3REFBTSxDQUFDQyxHQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJPO0FBa0JBLE1BQU1FLGdCQUFnQixHQUFHSCx3REFBTSxDQUFDQyxHQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUE87QUFRQSxNQUFNRyxvQkFBb0IsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQU9BLE1BQU1JLGFBQWEsR0FBR0wsd0RBQU0sQ0FBQ0MsR0FBSztBQUN6QztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1LLFVBQVUsR0FBR04sd0RBQU0sQ0FBQ0MsR0FBSztBQUN0QztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1NLGtCQUFrQixHQUFHUCx3REFBTSxDQUFDUSxFQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU1DLFdBQVcsR0FBR1Qsd0RBQU0sQ0FBQ1UsQ0FBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQVFBLE1BQU1DLG9CQUFvQixHQUFHWCx3REFBTSxDQUFDVSxDQUFHO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CRSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsV0FBWTtBQUMvQztBQUNBLENBUE87QUFRQSxNQUFNQyxrQkFBa0IsR0FBR2Qsd0RBQU0sQ0FBQ1UsQ0FBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQkUsS0FBSyxJQUFJQSxLQUFLLENBQUNHLFVBQVk7QUFDL0M7QUFDQTtBQUNBLENBUk87QUFTQSxNQUFNQyxjQUFjLEdBQUdoQix3REFBTSxDQUFDVSxDQUFHO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUUEsTUFBTU8sc0JBQXNCLEdBQUdqQix3REFBTSxDQUFDQyxHQUFLO0FBQ2xEO0FBQ0E7QUFDQSxDQUhPO0FBS0EsTUFBTWlCLGNBQWMsR0FBR2xCLHdEQUFNLENBQUNDLEdBQUs7QUFDMUM7QUFDQSxDQUZPO0FBSUEsTUFBTWtCLFNBQVMsR0FBR25CLHdEQUFNLENBQUNVLENBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQTztBQVNBLE1BQU1VLFdBQVcsR0FBR3BCLHdEQUFNLENBQUNDLEdBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsQ0FKTztBQUtBLE1BQU1vQixVQUFVLEdBQUdyQix3REFBTSxDQUFDQyxHQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNcUIsV0FBVyxHQUFHdEIsd0RBQU0sQ0FBQ0MsR0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUpPLEMsQ0FLUDs7QUFFTyxNQUFNc0IsaUJBQWlCLEdBQUd2Qix3REFBTSxDQUFDQyxHQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBVUEsTUFBTXVCLGFBQWEsR0FBSXhCLHdEQUFNLENBQUN5QixLQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQk87QUFvQkEsTUFBTUMsWUFBWSxHQUFHMUIsd0RBQU0sQ0FBQzJCLE1BQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1DLFdBQVcsR0FBRzVCLHdEQUFNLENBQUNVLENBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FKTyxDOzs7Ozs7Ozs7OztBQzdLUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9QZXJmaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1BlcmZpbC5qc1wiKTtcbiIsImltcG9ydCB7UGVyZmlsV29yZHN9IGZyb20gJy4uL3N0eWxlL3N0eWxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFzICh7Y29udHJhc30pIHtcclxuICAgIGNvbnN0IGlkcGVyZmlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuICAgIGZ1bmN0aW9uIGdldE5hbWVzKGlkKSB7XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDFcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJUaGlhZ29cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwMlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlJpY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwM1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpvYW9cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRhbmllbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInA1XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVml0b3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHBsYXllcnMgPSBPYmplY3QuZW50cmllcyhjb250cmFzKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgeyBwbGF5ZXJzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgX2tleVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICBpZihlbGVtZW50WzFdWzBdLmlkX3BsYXllciA9PSBpZHBlcmZpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgX2tleSA9ICAwXHJcbiAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIF9rZXkgPSAxXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0TmFtZXMoZWxlbWVudFswXSl9Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IHtlbGVtZW50WzFdW19rZXldLnZpdG9yaWFzfSZuYnNwOyAvJm5ic3A7IHtlbGVtZW50WzFdW19rZXldLmRlcnJvdGFzfSAmbmJzcDsmbmJzcDt8Jm5ic3A7Jm5ic3A7IHtlbGVtZW50WzFdW19rZXldLmVtcGF0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgIDwvZGl2PlxyXG4gICApXHJcbiAgICAgXHJcbn0iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1BlcmZpbFdvcmRzfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IENvbnRyYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Db250cmFzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmaWwgKCkge1xyXG4gICAgY29uc3QgW2dldHBlcmZpbCwgc2V0R2V0UGVyZmlsXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMzMzMvcGVyZmlsJywge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGdldHBlcmZpbC5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRHZXRQZXJmaWwoWy4uLmdldHBlcmZpbCwgcmVzcG9uc2UuZGF0YV0pXHJcblxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pKClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgLCBtYXJnaW5Ub3A6IC0zMCwgbWFyZ2luTGVmdDogLTEwLCBtYXJnaW5SaWdodDogLTUsIG1hcmdpbkJvdHRvbTogLTMwLCB3aWR0aDogXCIxMTAlXCIsIGhlaWdodDogXCIxMTAlXCJ9fSA+XHJcbiAgICAgICAgICAgIHtnZXRwZXJmaWwgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtIGRhZG9vb29vb29vb29vb29vb3NcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldHBlcmZpbFswXS5wZXJmaWwubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IDI5LCBmb250V2VpZ2h0OiBcImJvbGRcIiAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlBlcmZpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiAzMCwgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcIiMwMEZGRkZcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+e2VsZW1lbnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBSYXRpbmcgJm5ic3A7Jm5ic3A7Jm5ic3A7e2VsZW1lbnQucmF0aW5nfTwvUGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZpbFdvcmRzPiBWaXTDs3JpYXMgJm5ic3A7Jm5ic3A7Jm5ic3A7e2VsZW1lbnQudml0b3JpYXNfdG90YWx9PC9QZXJmaWxXb3Jkcz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyZmlsV29yZHM+IERlcnJvdGFzJm5ic3A7Jm5ic3A7Jm5ic3A7ICB7ZWxlbWVudC5kZXJyb3Rhc190b3RhbH0gPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmaWxXb3Jkcz5FbXBhdGVzJm5ic3A7Jm5ic3A7Jm5ic3A7IHtlbGVtZW50LmVtcGF0ZXNfdG90YWlzfSA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IDI1LCBjb2xvcjogXCIjRkZENzAwXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+Q29udHJhczwvcD5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJncmVlblwiICwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+IFZpdG9yaWEgPC9wPiA8cCBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIGZvbnRXZWlnaHQ6XCJib2xkXCIsIG1hcmdpbkxlZnQ6IDEwfX0+LzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luTGVmdDogMTB9fT4gRGVycm90YSA8L3A+IDxwIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFdlaWdodDpcImJvbGRcIiwgbWFyZ2luTGVmdDoxMH19Pnw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwiYmx1ZVwiICwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5MZWZ0OiAxMH19PkVtcGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0cGVyZmlsWzBdLmNvbnRyYXMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIDxDb250cmFzIGtleT17aX0gY29udHJhcz17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksNzIsMTE1KTtcclxuICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckNoaWxkcmVuID0gc3R5bGVkLmRpdiBgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIHRvcDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyUmFua2luZyA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJMYXN0TWF0Y2hlcyA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgQm94TGFzdE1hdGNocyA9IHN0eWxlZC5kaXYgYCBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUmVuZGVyRGF0YSA9IHN0eWxlZC5kaXYgYCBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRm9udE5hbWVBbmRSYW5raW5nID0gc3R5bGVkLmgxIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE5hbWVSYW5raW5nID0gc3R5bGVkLnAgYCBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lTGFzdE1hdGNoc1dpbm5lciA9IHN0eWxlZC5wIGAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcndpbm5lcn07XHJcbiAgICBtYXJnaW46IDVweDtcclxuYFxyXG5leHBvcnQgY29uc3QgTmFtZUxhc3RNYXRjaExvc2VyID0gc3R5bGVkLnAgYCBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yTG9zZXIgfTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE5hbWVMYXN0TWF0Y2hzID0gc3R5bGVkLnAgYCBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJOYW1lTGFzdE1hdGNoID0gc3R5bGVkLmRpdiBgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJHdWlkZSA9IHN0eWxlZC5kaXYgYFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEd1aWRlVGV4dCA9IHN0eWxlZC5wIGBcclxuICAgIGZvbnQtZmFtaWx5OiAgVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEd1aWRlV2lubmVyID0gc3R5bGVkLmRpdiBgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbmBcclxuZXhwb3J0IGNvbnN0IEd1aWRlTG9zZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHdWlkZUVtcGF0ZSA9IHN0eWxlZC5kaXYgYFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbmBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQUREIE1BVENIIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJBZGRNYXRjaCA9IHN0eWxlZC5kaXYgYCBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBJbnB1dEFkZE1hdGNoID0gIHN0eWxlZC5pbnB1dCBgXHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25TdWJtaXQgPSBzdHlsZWQuYnV0dG9uIGBcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBlcmZpbFdvcmRzID0gc3R5bGVkLnAgYCBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=