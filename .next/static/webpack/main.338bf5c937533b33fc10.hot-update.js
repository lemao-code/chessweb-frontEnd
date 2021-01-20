webpackHotUpdate_N_E("main",{

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

/***/ "./node_modules/@babel/runtime/helpers/extends.js?a559":
false,

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! ../chessweb-frontEnd/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js?dbce");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea4");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js?dbce"));

__webpack_require__(/*! @next/polyfill-module */ "./node_modules/@next/polyfill-module/dist/polyfill-module.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js?05ec");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js?ec2e"));

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js?f006");

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js?d068");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js?0625");

var querystring = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js?6592"));

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js?e83f");

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(/*! ./performance-relayer */ "./node_modules/next/dist/client/performance-relayer.js"));

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js?5216");
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.0.2";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locales = data.locales;
var locale = data.locale,
    defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])();
var appElement = document.getElementById('__next');
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedComponent;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || hydrateProps && hydrateProps.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {} else {
        var _require5 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"),
            ReactDevOverlay = _require5.ReactDevOverlay;

        return /*#__PURE__*/_react["default"].createElement(ReactDevOverlay, null, this.props.children);
      }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        appEntrypoint,
        app,
        mod,
        initialErr,
        pageEntrypoint,
        _require6,
        isValidElementType,
        _require7,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (true) {
              webpackHMR = opts.webpackHMR;
            }

            _context.next = 4;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 4:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 7;
              break;
            }

            throw appEntrypoint.error;

          case 7:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            initialErr = hydrateErr;
            _context.prev = 11;

            if (!( true && hydrateErr)) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (false) {}

            _require6 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js?4cec"), isValidElementType = _require6.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](11);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (true) {
              _require7 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"), getNodeError = _require7.getNodeError; // Server-side runtime errors need to be re-thrown on the client-side so
              // that the overlay is rendered.

              if (initialErr) {
                if (initialErr === hydrateErr) {
                  setTimeout(function () {
                    var error;

                    try {
                      // Generate a new error object. We `throw` it because some browsers
                      // will set the `stack` when thrown, and we want to ensure ours is
                      // not overridden when we re-throw it below.
                      throw new Error(initialErr.message);
                    } catch (e) {
                      error = e;
                    }

                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    var node = getNodeError(error);
                    throw node;
                  });
                } // We replaced the server-side error with a client-side error, and should
                // no longer rewrite the stack trace to a Node error.
                else {
                    setTimeout(function () {
                      throw initialErr;
                    });
                  }
              }
            }

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App) {
                return render(Object.assign({}, info, {
                  App: App
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (true) {
              _context.next = 44;
              break;
            }

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 44:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 29]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (true) {
              // Ensure this error is displayed in the overlay in development
              setTimeout(function () {
                throw _context2.t0;
              });
            }

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (true) {
    // A Next.js rendering runtime error is always unrecoverable
    // FIXME: let's make this recoverable (error in GIP client-transition)
    webpackHMR.onUnrecoverableError(); // We need to render an empty <App> so that the `<ReactDevOverlay>` can
    // render itself.

    return doRender({
      App: function App() {
        return null;
      },
      props: {},
      Component: function Component() {
        return null;
      },
      styleSheets: []
    });
  }

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref5) {
    var ErrorComponent = _ref5.page,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (typeof _reactDom["default"].hydrate === 'function') {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

_c = AppContainer;

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    true) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) { var referenceNode, idx, currentHrefs, currentStyleTags, desiredHrefs; }
  }

  function onRootCommit() {
    resolvePromise();
  }

  var elem = /*#__PURE__*/_react["default"].createElement(Root, {
    callback: onRootCommit
  }, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps)));

  onStart(); // We catch runtime errors using componentDidCatch which will trigger renderError

  renderReactElement( false ? /*#__PURE__*/undefined : elem, appElement);
  return renderPromise;
}

function Root(_ref9) {
  _s();

  var callback = _ref9.callback,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


_s(Root, "KDoBXdlwSU+O+uFsByO25XxhKDU=");

_c2 = Root;

function Head(_ref10) {
  _s2();

  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

_s2(Head, "n7/vCynhJvM+pLkyL2DMQUF0odM=");

_c3 = Head;

var _c, _c2, _c3;

$RefreshReg$(_c, "AppContainer");
$RefreshReg$(_c2, "Root");
$RefreshReg$(_c3, "Head");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9pbmRleC50c3giXSwibmFtZXMiOlsiZGF0YSIsIkpTT04iLCJkb2N1bWVudCIsIndpbmRvdyIsInZlcnNpb24iLCJwcm9jZXNzIiwiX19ORVhUX1ZFUlNJT04iLCJsb29zZVRvQXJyYXkiLCJwcm9wcyIsImVyciIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwicHJlZml4IiwiX193ZWJwYWNrX3B1YmxpY19wYXRoX18iLCJlbnZDb25maWciLCJzZXJ2ZXJSdW50aW1lQ29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsInJ1bnRpbWVDb25maWciLCJhc1BhdGgiLCJwYWdlTG9hZGVyIiwiUGFnZUxvYWRlciIsInJlZ2lzdGVyIiwicCIsInNldFRpbWVvdXQiLCJoZWFkTWFuYWdlciIsImFwcEVsZW1lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJvdXRlciIsImlzRmFsbGJhY2siLCJsb2NhdGlvbiIsImh5ZHJhdGVQcm9wcyIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiX2giLCJzaGFsbG93IiwiY29tcG9uZW50RGlkVXBkYXRlIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImVsIiwicmVuZGVyIiwicmVxdWlyZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZW1pdHRlciIsIm9wdHMiLCJ3ZWJwYWNrSE1SIiwiYXBwRW50cnlwb2ludCIsImNvbXBvbmVudCIsImV4cG9ydHMiLCJDYWNoZWRBcHAiLCJtb2QiLCJvblBlcmZFbnRyeSIsInVuaXF1ZUlEIiwiRGF0ZSIsIk1hdGgiLCJlbnRyaWVzIiwicGVyZlN0YXJ0RW50cnkiLCJpZCIsIm5hbWUiLCJzdGFydFRpbWUiLCJ2YWx1ZSIsImxhYmVsIiwiZW50cnlUeXBlIiwiaW5pdGlhbEVyciIsImVycm9yIiwicGFnZUVudHJ5cG9pbnQiLCJDYWNoZWRDb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJub2RlIiwiZ2V0Tm9kZUVycm9yIiwiaW5pdGlhbFByb3BzIiwiQXBwIiwid3JhcEFwcCIsIkJvb2xlYW4iLCJzdWJzY3JpcHRpb24iLCJPYmplY3QiLCJsb2NhbGUiLCJyZW5kZXJDdHgiLCJpbml0aWFsIiwicmVuZGVyaW5nUHJvcHMiLCJyZW5kZXJFcnJvciIsImRvUmVuZGVyIiwicmVuZGVyRXJyIiwic3R5bGVTaGVldHMiLCJjb25zb2xlIiwicGFnZSIsIkFwcFRyZWUiLCJhcHBDdHgiLCJjdHgiLCJwYXRobmFtZSIsInF1ZXJ5IiwiUHJvbWlzZSIsInJlbmRlckVycm9yUHJvcHMiLCJpbml0UHJvcHMiLCJyZWFjdFJvb3QiLCJTVCIsInBlcmZvcm1hbmNlIiwiUmVhY3RET00iLCJjbGVhck1hcmtzIiwibmF2U3RhcnRFbnRyaWVzIiwibWVhc3VyZSIsIm1hcmsiLCJ3cmFwcGVkQXBwUHJvcHMiLCJhcHBQcm9wcyIsImlucHV0IiwibGFzdEFwcFByb3BzIiwiY2FuY2VsZWQiLCJyZW5kZXJQcm9taXNlIiwibGFzdFJlbmRlclJlamVjdCIsInJlc29sdmVQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImN1cnJlbnRTdHlsZVRhZ3MiLCJjdXJyZW50SHJlZnMiLCJ0YWciLCJub3NjcmlwdCIsIm5vbmNlIiwic3R5bGVUYWciLCJlbGVtIiwib25TdGFydCIsInJlbmRlclJlYWN0RWxlbWVudCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQXRCQTs7O0FBNENBLElBQU1BLElBQW9DLEdBQUdDLElBQUksQ0FBSkEsTUFDM0NDLFFBQVEsQ0FBUkEsZ0NBREYsV0FBNkNELENBQTdDO0FBR0FFLE1BQU0sQ0FBTkE7QUFFTyxJQUFNQyxPQUFPLEdBQUdDLFFBQWhCO0FBQWdCQSxPQUFZQyxRQUFaRCxHQUFoQixPQUFnQkE7O2dCQUV2QixZLFlBQUEsTUFBTUU7QUFBQUEsdUJBQWUsS0FBZkE7QUFBQUEsQzs7SUFBTixZLEdBRU0sSSxDQUZrRCxLO0lBR2pELFUsR0FERCxJLENBQ0pDLEc7SUFESSxJLEdBQUEsSSxDQUFBLEk7SUFFSkMsSyxHQUZJLEksQ0FFSkEsSztJQUZJLE8sR0FBQSxJLENBQUEsTztJQUFBLFcsR0FBQSxJLENBQUEsVztJQUFBLGEsR0FBQSxJLENBQUEsYTtJQUFBLFUsR0FBQSxJLENBQUEsVTtJQUFBLFUsR0FBQSxJLENBQUEsVTtJQUFBLE8sR0FBQSxJLENBQUEsTztJQVVKQyxNLEdBR0UsSSxDQUhGQSxNO0lBVkYsYSxHQWFJLEksQ0FiSixhO0FBYWNDLElBQVYsU0FBSixXQUVNQyxNQUZRRCxDLENBRWQ7QUFHQTs7QUFDQUUscUJBQXVCLGFBQXZCQSxNQUF1QixZQUF2QkEsQyxDQUE2QztBQUM3Qzs7QUFDQUMsU0FBUyxDQUFUQSxVQUFvQjtBQUNsQkMscUJBQW1CLEVBREQ7QUFFbEJDLHFCQUFtQixFQUFFQyxhQUFhLElBRnBDSDtBQUFvQixDQUFwQkE7QUFLQSxJQUFJSSxNQUFNLEdBQUcsV0FBYixNQUFhLEdBQWIsQyxDQUVBOztBQUNBLElBQUkseUJBQUosTUFBSSxDQUFKLEVBQXlCO0FBQ3ZCQSxRQUFNLEdBQUcseUJBQVRBLE1BQVMsQ0FBVEE7QUFHRjs7QUFBQSxJQUFJYixLQUFKLEVBQXFDLG9LQStDckM7O0FBQUEsSUFBTWMsVUFBVSxHQUFHLElBQUlDLFdBQUoscUJBQW5CLE1BQW1CLENBQW5COztBQUNBLElBQU1DLFFBQW9CLEdBQUcsU0FBdkJBLFFBQXVCO0FBQUE7QUFBQSxNQUFDLENBQUQ7QUFBQTs7QUFBQSxTQUMzQkYsVUFBVSxDQUFWQSw0QkFERixDQUNFQSxDQUQyQjtBQUFBLENBQTdCOztBQUVBLElBQUloQixNQUFNLENBQVYsVUFBcUI7QUFDbkI7QUFDQTtBQUNBQSxRQUFNLENBQU5BLGFBQXFCbUIsV0FBRDtBQUFBLFdBQU9DLFVBQVUsQ0FBQztBQUFBLGFBQU1GLFFBQVEsQ0FBZixDQUFlLENBQWQ7QUFBQSxLQUFELEVBQXJDbEIsQ0FBcUMsQ0FBakI7QUFBQSxHQUFwQkE7QUFFRkE7O0FBQUFBLE1BQU0sQ0FBTkE7QUFDRUEsTUFBTSxDQUFQLFFBQUNBLENBQUQsSUFBQ0EsR0FBRCxRQUFDQTtBQUVGLElBQU1xQixXQUFXLEdBQUcsZ0JBQXBCLFdBQW9CLEdBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHdkIsUUFBUSxDQUFSQSxlQUFuQixRQUFtQkEsQ0FBbkI7QUFFQTs7QUFDQTs7QUFDQTtBQUNPOztBQUNQO0FBQ0E7O0lBRUEsUzs7Ozs7Ozs7Ozs7OztzQ0FHbUIsWSxFQUFBLEksRUFBaUM7QUFDaEQ7QUFHRndCOzs7d0NBQW9CO0FBQ2xCLDBCQURrQixDQUdsQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUNFQyxNQUFNLENBQU5BLFVBQ0NDLFVBQVUsSUFDUjVCLElBQUksQ0FBSkEsZUFDRSwrQkFBZTJCLE1BQU0sQ0FBckIsYUFBbUNFLFFBQVEsQ0FGL0NELE1BQ0U1QixDQURGNEIsSUFHRUUsWUFBWSxJQUFJQSxZQUFZLENBQTVCQSxXQUF3Q0QsUUFBUSxDQUxyRCxNQUNFRixDQURGLEVBTUU7QUFDQTtBQUNBQSxjQUFNLENBQU5BLFFBQ0VBLE1BQU0sQ0FBTkEsaUJBRUVJLE1BQU0sQ0FDSkMsV0FBVyxDQUFYQSxPQUNFQSxXQUFXLENBQVhBLHVCQUFtQ0wsTUFBTSxDQUQzQ0ssS0FDRUEsQ0FERkEsRUFFRSxvQkFBb0JILFFBQVEsQ0FOcENGLE1BTVEsQ0FGRkssQ0FESSxDQUhWTCxVQVVFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQU0sWUFBRSxFQUxKO0FBTUU7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsaUJBQU8sRUFBRSxDQXBCYlA7QUFVRSxTQVZGQTtBQXdCSDtBQUVEUTs7O3lDQUFxQjtBQUNuQjtBQUdGQzs7O21DQUFlO0FBQUEsc0JBQ2IsUUFEYTtBQUFBLFVBQ1QsSUFEUyxhQUNULElBRFM7QUFFYkMsVUFBSSxHQUFHQSxJQUFJLElBQUlBLElBQUksQ0FBSkEsVUFBZkEsQ0FBZUEsQ0FBZkE7QUFDQSxVQUFJLENBQUosTUFBVztBQUVYLFVBQU1DLEVBQUUsR0FBR3BDLFFBQVEsQ0FBUkEsZUFBWCxJQUFXQSxDQUFYO0FBQ0EsVUFBSSxDQUFKLElBQVMsT0FOSSxDQVFiO0FBQ0E7O0FBQ0FxQixnQkFBVSxDQUFDO0FBQUEsZUFBTWUsRUFBRSxDQUFULGNBQU9BLEVBQU47QUFBQSxPQUFELEVBQVZmLENBQVUsQ0FBVkE7QUFHRmdCOzs7NkJBQVM7QUFDUCxpQkFBMkMsRUFBM0MsTUFFTztBQUFBLHdCQUN1QkMsbUJBQU8sQ0FBbkMsZ0dBQW1DLENBRDlCO0FBQUEsWUFDQyxlQURELGFBQ0MsZUFERDs7QUFFTCw0QkFBTyx1REFBa0IsV0FBekIsUUFBTyxDQUFQO0FBRUg7QUF0RUE7Ozs7RUFGcUJDLGtCQUFNQyxTOztBQTJFdkIsSUFBTUMsT0FBTyxHQUFHLFNBQWhCLFdBQWdCLEdBQWhCOzs7O3VFQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU9DLGdCQUFQOztBQUNiO0FBQ0Esc0JBQTRDO0FBQzFDQyx3QkFBVSxHQUFHRCxJQUFJLENBQWpCQztBQUdGOztBQU5hO0FBQUEsbUJBTWUxQixVQUFVLENBQVZBLDJCQUE1QixPQUE0QkEsQ0FOZjs7QUFBQTtBQU1QMkIseUJBTk87O0FBQUEsa0JBT1QsV0FBSixhQVBhO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQVFMQSxhQUFhLENBQW5CLEtBUlc7O0FBQUE7QUFXUCxlQVhPLEdBV2IsYUFYYSxDQVdMQyxTQVhLLEVBV1AsR0FYTyxHQVdiLGFBWGEsQ0FXV0MsT0FYWDtBQVliQyxxQkFBUyxHQUFUQTs7QUFFQSxnQkFBSUMsR0FBRyxJQUFJQSxHQUFHLENBQWQsaUJBQWdDO0FBQzlCQyx5QkFBVyxHQUFHLDRCQVFSO0FBQUEsb0JBUlMsRUFRVCxTQVJTLEVBUVQ7QUFBQSxvQkFSUyxJQVFULFNBUlMsSUFRVDtBQUFBLG9CQVJTLFNBUVQsU0FSUyxTQVFUO0FBQUEsb0JBUlMsS0FRVCxTQVJTLEtBUVQ7QUFBQSxvQkFSUyxRQVFULFNBUlMsUUFRVDtBQUFBLG9CQVJTLFNBUVQsU0FSUyxTQVFUO0FBQUEsb0JBUlEsT0FRUixTQVJRLE9BUVI7QUFDSjtBQUNBLG9CQUFNQyxRQUFRLGFBQU1DLElBQUksQ0FBSkEsS0FBTixjQUNaQyxJQUFJLENBQUpBLE1BQVdBLElBQUksQ0FBSkEsWUFBaUIsT0FBNUJBLENBQVdBLENBQVhBLElBREYsSUFBYyxDQUFkO0FBR0E7O0FBRUEsb0JBQUlDLE9BQU8sSUFBSUEsT0FBTyxDQUF0QixRQUErQjtBQUM3QkMsZ0NBQWMsR0FBR0QsT0FBTyxDQUFQQSxDQUFPLENBQVBBLENBQWpCQztBQUdGTjs7QUFBQUEsbUJBQUcsQ0FBSEEsZ0JBQW9CO0FBQ2xCTyxvQkFBRSxFQUFFQSxFQUFFLElBRFk7QUFFbEJDLHNCQUZrQixFQUVsQkEsSUFGa0I7QUFHbEJDLDJCQUFTLEVBQUVBLFNBQVMsSUFIRjtBQUlsQkMsdUJBQUssRUFBRUEsS0FBSyxJQUFMQSxrQkFKVztBQUtsQkMsdUJBQUssRUFDSEMsU0FBUyxLQUFUQSxVQUF3QkEsU0FBUyxLQUFqQ0EsdUJBTkpaO0FBQW9CLGlCQUFwQkE7QUFuQkZDO0FBZ0NGOztBQUFJWSxzQkEvQ1MsR0ErQ2IsVUEvQ2E7QUFBQTs7QUFBQSxrQkFxRFQxRCxtQkFyRFM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBc0RMO0FBQUUyRCxtQkFBSyxFQURYM0Q7QUFDSSxhQXRESztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQXVEQ2MsVUFBVSxDQUFWQSwyQkFMWixJQUtZQSxDQXZERDs7QUFBQTtBQUFBOztBQUFBO0FBa0RMOEMsMEJBbERLOztBQUFBLGtCQXdEUCxXQUFKLGNBeERXO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXlESEEsY0FBYyxDQUFwQixLQXpEUzs7QUFBQTtBQTJEWEMsMkJBQWUsR0FBR0QsY0FBYyxDQUFoQ0M7O0FBM0RXOztBQUFBLHdCQThEc0IxQixtQkFBTyxDQUF0Qyx1REFBc0MsQ0E5RDdCLEVBOERILGtCQTlERyxhQThESCxrQkE5REc7O0FBQUEsZ0JBK0RKMkIsa0JBQWtCLENBQXZCLGVBQXVCLENBL0RkO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWdFRCwyRUFBTixJQUFNLFFBaEVDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzRVg7QUFDQUo7O0FBdkVXO0FBMEViLHNCQUE0QztBQUFBLDBCQUNqQnZCLG1CQUFPLENBQWhDLGdHQUFnQyxDQURVLEVBQ3BDLFlBRG9DLGFBQ3BDLFlBRG9DLEVBRTFDO0FBQ0E7O0FBQ0EsOEJBQWdCO0FBQ2Qsb0JBQUl1QixVQUFVLEtBQWQsWUFBK0I7QUFDN0J4Qyw0QkFBVSxDQUFDLFlBQU07QUFDZjs7QUFDQSx3QkFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBLDRCQUFNLFVBQVV3QyxVQUFVLENBQTFCLE9BQU0sQ0FBTjtBQUNBLHFCQUxGLENBS0UsVUFBVTtBQUNWQywyQkFBSyxHQUFMQTtBQUdGQTs7QUFBQUEseUJBQUssQ0FBTEEsT0FBYUQsVUFBVSxDQUF2QkM7QUFDQUEseUJBQUssQ0FBTEEsUUFBY0QsVUFBVSxDQUF4QkM7QUFFQSx3QkFBTUksSUFBSSxHQUFHQyxZQUFZLENBQXpCLEtBQXlCLENBQXpCO0FBQ0E7QUFmRjlDLG1CQUFVLENBQVZBO0FBa0JGLGlCQW5CQSxDQW1CQTtBQUNBO0FBcEJBLHFCQXFCSztBQUNIQSw4QkFBVSxDQUFDLFlBQU07QUFDZjtBQURGQSxxQkFBVSxDQUFWQTtBQUlIO0FBQ0Y7QUFFRDs7QUE1R2EsaUJBNEdUcEIsTUFBTSxDQUFWLG1CQTVHYTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQTZHTEEsTUFBTSxDQUFOQSxvQkFBTixVQUFNQSxDQTdHSzs7QUFBQTtBQWdIYixtQ0FBTSxHQUFHLGdEQUFrQztBQUN6Q21FLDBCQUFZLEVBRDZCO0FBRXpDbkQsd0JBRnlDLEVBRXpDQSxVQUZ5QztBQUd6Q29ELGlCQUFHLEVBSHNDO0FBSXpDN0IsdUJBQVMsRUFKZ0M7QUFLekM4QixxQkFMeUMsRUFLekNBLE9BTHlDO0FBTXpDL0QsaUJBQUcsRUFOc0M7QUFPekNtQix3QkFBVSxFQUFFNkMsT0FBTyxDQVBzQixVQU90QixDQVBzQjtBQVF6Q0MsMEJBQVksRUFBRTtBQUFBLHVCQUFlbkMsTUFBTSxDQUFDb0MsTUFBTSxDQUFOQSxpQkFBd0I7QUFBRUoscUJBUnJCLEVBUXFCQTtBQUFGLGlCQUF4QkksQ0FBRCxDQUFyQjtBQUFBLGVBUjJCO0FBU3pDQyxvQkFUeUMsRUFTekNBLE1BVHlDO0FBVXpDbEUscUJBVnlDLEVBVXpDQSxPQVZ5QztBQVd6Q0MsMkJBWEYsRUFXRUE7QUFYeUMsYUFBbEMsQ0FBVCxDQWhIYSxDQThIYjs7QUFDQSxnQkFBSU4sS0FBSixFQUFnQyxFQVloQzs7QUFBTXdFLHFCQTNJTyxHQTJJc0I7QUFDakNOLGlCQUFHLEVBRDhCO0FBRWpDTyxxQkFBTyxFQUYwQjtBQUdqQ3BDLHVCQUFTLEVBSHdCO0FBSWpDbEMsbUJBQUssRUFKNEI7QUFLakNDLGlCQUFHLEVBTEw7QUFBbUMsYUEzSXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9KWDhCLGtCQUFNLENBQU5BLFNBQU0sQ0FBTkE7QUFwSlcsNkNBbUpiLE9BbkphOztBQUFBO0FBQUEsNkNBdUpKO0FBQUVJLHFCQUFGLEVBQUVBLE9BQUY7QUFBV0osb0JBQVgsRUFBV0EsTUFBWDtBQUFtQnNDLHVCQUExQixFQUEwQkE7QUFBbkIsYUF2Skk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7O1NBMkpSLE07O0VBd0JQO0FBQ0E7QUFDQTs7OztxRUExQk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNERSxjQUFjLENBQWxCLEdBREs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFFR0MsV0FBVyxDQUFqQixjQUFpQixDQUZkOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBT0dDLFFBQVEsQ0FBZCxjQUFjLENBUFg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFVQ0MsYUFBSixTQVZHO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBY0gsc0JBQTRDO0FBQzFDO0FBQ0EzRCx3QkFBVSxDQUFDLFlBQU07QUFDZjtBQURGQSxlQUFVLENBQVZBO0FBSUY7O0FBcEJHO0FBQUEsbUJBb0JHeUQsV0FBVztBQUFzQnZFLGlCQUF2QztBQUFpQixlQXBCZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBMkJBLHVDQUF5RDtBQUFBLE1BQ3hELEdBRHdELEdBQzlELGdCQUQ4RCxDQUN4RCxHQUR3RDtBQUFBLE1BQ3hELEdBRHdELEdBQzlELGdCQUQ4RCxDQUN4RCxHQUR3RCxFQUc5RDtBQUNBOztBQUNBLFlBQTJDO0FBQ3pDO0FBQ0E7QUFDQW9DLGNBQVUsQ0FBVkEsdUJBSHlDLENBS3pDO0FBQ0E7O0FBQ0EsV0FBT29DLFFBQVEsQ0FBQztBQUNkVixTQUFHLEVBQUU7QUFBQSxlQURTLElBQ1Q7QUFBQSxPQURTO0FBRWQvRCxXQUFLLEVBRlM7QUFHZGtDLGVBQVMsRUFBRTtBQUFBLGVBSEcsSUFHSDtBQUFBLE9BSEc7QUFJZHlDLGlCQUFXLEVBSmI7QUFBZ0IsS0FBRCxDQUFmO0FBT0Y7O0FBQUEsTUFBSTlFLEtBQUosRUFBZ0MsRUFuQjhCLENBa0M5RDs7O0FBQ0ErRSxTQUFPLENBQVBBO0FBQ0EsU0FBT2pFLFVBQVUsQ0FBVkEseUJBRUMsaUJBQTJDO0FBQUEsUUFBMUMsY0FBMEMsU0FBeENrRSxJQUF3QztBQUFBLFFBQTNDLFdBQTJDLFNBQTNDLFdBQTJDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLE9BQU8sR0FBR2QsT0FBTyxDQUF2QixHQUF1QixDQUF2QjtBQUNBLFFBQU1lLE1BQU0sR0FBRztBQUNiN0MsZUFBUyxFQURJO0FBRWI0QyxhQUZhLEVBRWJBLE9BRmE7QUFHYjNELFlBSGEsRUFHYkEsTUFIYTtBQUliNkQsU0FBRyxFQUFFO0FBQUUvRSxXQUFGLEVBQUVBLEdBQUY7QUFBT2dGLGdCQUFRLEVBQWY7QUFBdUJDLGFBQXZCLEVBQXVCQSxLQUF2QjtBQUE4QnhFLGNBQTlCLEVBQThCQSxNQUE5QjtBQUFzQ29FLGVBSjdDLEVBSTZDQTtBQUF0QztBQUpRLEtBQWY7QUFNQSxXQUFPSyxPQUFPLENBQVBBLFFBQ0xDLGdCQUFnQixDQUFoQkEsUUFDSUEsZ0JBQWdCLENBRHBCQSxRQUVJLHFDQUhDRCxNQUdELENBSENBLE9BSUNFLG1CQUFEO0FBQUEsYUFDTFosUUFBUTtBQUVOeEUsV0FGTSxFQUVOQSxHQUZNO0FBR05pQyxpQkFBUyxFQUhIO0FBSU55QyxtQkFKTSxFQUlOQSxXQUpNO0FBS04zRSxhQUFLLEVBVlQ7QUFLVSxTQURIO0FBQUEsS0FKQW1GLENBQVA7QUFiSixHQUFPeEUsQ0FBUDtBQTZCRjs7QUFBQSxJQUFJMkUsU0FBYyxHQUFsQjs7QUFDQSw0Q0FBc0U7QUFDcEUsTUFBSXpGLEtBQUosRUFBZ0QsYUFBaEQsTUFTTztBQUNMO0FBQ0EsUUFBSTBGLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGLEtBTkssQ0FNTDs7O0FBQ0EsUUFBSSxPQUFPQyxxQkFBUCxZQUFKLFlBQTRDO0FBQzFDQTtBQURGLFdBRU87QUFDTEE7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsK0JBQStCO0FBQzdCLE1BQUksQ0FBQ0YsT0FBTCxJQUFTO0FBRVRDLGFBQVcsQ0FBWEEscUJBSDZCLENBR0k7O0FBRWpDQSxhQUFXLENBQVhBO0FBS0FBLGFBQVcsQ0FBWEE7O0FBRUEsbUJBQWlCO0FBQ2ZBLGVBQVcsQ0FBWEE7QUFFRkU7O0FBQUFBLFlBQVU7QUFHWjs7QUFBQSw4QkFBOEI7QUFDNUIsTUFBSSxDQUFDSCxPQUFMLElBQVM7QUFFVEMsYUFBVyxDQUFYQSxvQkFINEIsQ0FHSTs7QUFDaEMsTUFBTUcsZUFBZSxHQUFHSCxXQUFXLENBQVhBLGdDQUF4QixNQUF3QkEsQ0FBeEI7O0FBRUEsTUFBSSxDQUFDRyxlQUFlLENBQXBCLFFBQTZCO0FBQzNCO0FBR0ZIOztBQUFBQSxhQUFXLENBQVhBLDBDQUVFRyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsQ0FGRkg7QUFLQUEsYUFBVyxDQUFYQTs7QUFDQSxtQkFBaUI7QUFDZkEsZUFBVyxDQUFYQTtBQUNBQSxlQUFXLENBQVhBO0FBSUZFOztBQUFBQSxZQUFVO0FBQ1QsK0RBQThERSxpQkFBRDtBQUFBLFdBQzVESixXQUFXLENBQVhBLGNBREQsT0FDQ0EsQ0FENEQ7QUFBQSxHQUE3RDtBQUtIOztBQUFBLHNCQUFzQjtBQUNwQjtBQUFDLHlFQUtVSyxjQUFEO0FBQUEsV0FBVUwsV0FBVyxDQUFYQSxXQUxuQixJQUttQkEsQ0FBVjtBQUFBLEdBTFQ7QUFRSDs7QUFBQSw2QkFFb0Q7QUFBQSxNQUZwRCxRQUVvRCxTQUZwRCxRQUVvRDtBQUNsRCxzQkFDRTtBQUNFLE1BQUUsRUFBR2hDLGlCQUFEO0FBQUEsYUFDRmdCLFdBQVcsQ0FBQztBQUFFVCxXQUFHLEVBQUw7QUFBa0I5RCxXQUFHLEVBQWpDdUU7QUFBWSxPQUFELENBQVhBLFVBQW1EdkUsYUFBRDtBQUFBLGVBQ2hEMkUsT0FBTyxDQUFQQSxnQ0FITixHQUdNQSxDQURnRDtBQUFBLE9BQWxESixDQURFO0FBQUE7QUFETixrQkFPRSxnQ0FBQyxlQUFELGFBQUMsQ0FBRDtBQUF3QixTQUFLLEVBQUUsdUNBQS9CLE1BQStCO0FBQS9CLGtCQUNFLGdDQUFDLG9CQUFELGtCQUFDLENBQUQ7QUFBNkIsU0FBSyxFQUFsQztBQUFBLEtBVE4sUUFTTSxDQURGLENBUEYsQ0FERjtBQWlCRjs7S0FwQkEsWTs7QUFvQkEsSUFBTVIsT0FBTyxHQUFJRCxTQUFYQyxPQUFXRCxJQUFEO0FBQUEsU0FDZCtCLHlCQURxQyxFQUVsQztBQUNILFFBQU1DLFFBQWtCO0FBRXRCN0QsZUFBUyxFQUZhO0FBR3RCakMsU0FBRyxFQUhtQjtBQUl0QmtCLFlBSkYsRUFJRUE7QUFKc0IsTUFBeEI7QUFNQSx3QkFDRSxpRUFDRSxxQ0FGSixRQUVJLENBREYsQ0FERjtBQVRGLEdBQWdCO0FBQUEsQ0FBaEI7O0FBZ0JBLHlCQUF3RDtBQUFBLE1BQ2xELEdBRGtELEdBQ3RELEtBRHNELENBQ2xELEdBRGtEO0FBQUEsTUFDbEQsU0FEa0QsR0FDdEQsS0FEc0QsQ0FDbEQsU0FEa0Q7QUFBQSxNQUNsRCxLQURrRCxHQUN0RCxLQURzRCxDQUNsRCxLQURrRDtBQUFBLE1BQ2xELEdBRGtELEdBQ3RELEtBRHNELENBQ2xELEdBRGtEO0FBRXRELE1BQUl3RCxXQUEwQyxHQUM1QyxpQ0FBaUNxQixLQUFLLENBRHhDO0FBRUE5RCxXQUFTLEdBQUdBLFNBQVMsSUFBSStELFlBQVksQ0FBckMvRDtBQUNBbEMsT0FBSyxHQUFHQSxLQUFLLElBQUlpRyxZQUFZLENBQTdCakc7QUFFQSxNQUFNK0YsUUFBa0I7QUFFdEI3RCxhQUZzQixFQUV0QkEsU0FGc0I7QUFHdEJqQyxPQUhzQixFQUd0QkEsR0FIc0I7QUFJdEJrQixVQUpGLEVBSUVBO0FBSnNCLElBQXhCLENBUHNELENBYXREOztBQUNBOEUsY0FBWSxHQUFaQTtBQUVBLE1BQUlDLFFBQVEsR0FBWjtBQUNBO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFlBQVksMkJBQXFCO0FBQ3JELDJCQUFzQjtBQUNwQkMsdUJBQWdCO0FBRWxCQzs7QUFBQUEsa0JBQWMsR0FBRywwQkFBTTtBQUNyQkQsdUJBQWdCLEdBQWhCQTtBQUNBRSxhQUFPO0FBRlREOztBQUlBRCxxQkFBZ0IsR0FBRyw0QkFBTTtBQUN2QkYsY0FBUSxHQUFSQTtBQUNBRSx1QkFBZ0IsR0FBaEJBO0FBRUEsVUFBTTVDLEtBQVUsR0FBRyxVQUFuQix3QkFBbUIsQ0FBbkI7QUFDQUEsV0FBSyxDQUFMQTtBQUNBK0MsWUFBTSxDQUFOQSxLQUFNLENBQU5BO0FBTkZIO0FBUkYsR0FBc0IsQ0FBdEIsQ0FsQnNELENBb0N0RDtBQUNBOztBQUNBLHFCQUE0QjtBQUMxQixRQUNFLGdCQUNBO0FBQ0E7QUFGQSxRQURGLEVBS0U7QUFDQTtBQUdGOztBQUFBLFFBQU1JLGdCQUFnQixHQUFHekcsWUFBWSxDQUNuQ0wsUUFBUSxDQUFSQSxpQkFERixvQkFDRUEsQ0FEbUMsQ0FBckM7QUFHQSxRQUFNK0csWUFBWSxHQUFHLFFBQ25CRCxnQkFBZ0IsQ0FBaEJBLElBQXNCRSxhQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFIQSxhQURoQyxhQUNnQ0EsQ0FBVDtBQUFBLEtBQXJCRixDQURtQixDQUFyQjtBQUlBLFFBQU1HLFFBQVEsR0FBR2pILFFBQVEsQ0FBUkEsY0FBakIsc0JBQWlCQSxDQUFqQjtBQUNBLFFBQU1rSCxLQUFLLEdBQUdELFFBQUgsUUFBR0EsR0FBSCxNQUFHQSxXQUFRLENBQVJBLGFBQWQsWUFBY0EsQ0FBZDtBQUVBaEMsZUFBVyxDQUFYQSxRQUFvQixpQkFBb0I7QUFBQSxVQUFuQixJQUFtQixTQUFuQixJQUFtQjtBQUFBLFVBQXBCLElBQW9CLFNBQXBCLElBQW9COztBQUN0QyxVQUFJLENBQUM4QixZQUFZLENBQVpBLElBQUwsSUFBS0EsQ0FBTCxFQUE2QjtBQUMzQixZQUFNSSxRQUFRLEdBQUduSCxRQUFRLENBQVJBLGNBQWpCLE9BQWlCQSxDQUFqQjtBQUNBbUgsZ0JBQVEsQ0FBUkE7QUFDQUEsZ0JBQVEsQ0FBUkE7O0FBRUEsbUJBQVc7QUFDVEEsa0JBQVEsQ0FBUkE7QUFHRm5IOztBQUFBQSxnQkFBUSxDQUFSQTtBQUNBbUgsZ0JBQVEsQ0FBUkEsWUFBcUJuSCxRQUFRLENBQVJBLGVBQXJCbUgsSUFBcUJuSCxDQUFyQm1IO0FBRUg7QUFiRGxDO0FBY0E7QUFHRjs7QUFBQSwwQkFBd0I7QUFDdEIsU0FDRTtBQUNBO0FBQ0E5RSxTQUhGLEVBU0UseUVBb0RIO0FBRUQ7O0FBQUEsMEJBQXdCO0FBQ3RCd0csa0JBQWM7QUFHaEI7O0FBQUEsTUFBTVMsSUFBSSxnQkFDUjtBQUFNLFlBQVEsRUFBZDtBQUFBLGtCQUNFO0FBQU0sWUFBUSxFQURoQjtBQUNFLElBREYsZUFFRSxpRUFDRSxxQ0FKTixRQUlNLENBREYsQ0FGRixDQURGOztBQVNBQyxTQUFPLEdBeEorQyxDQTBKdEQ7O0FBQ0FDLG9CQUFrQixDQUNoQm5ILHNCQUNFLFNBREZBLEdBRGdCLE1BQWxCbUgsVUFBa0IsQ0FBbEJBO0FBU0E7QUFHRjs7QUFBQSxxQkFLd0I7QUFBQTs7QUFBQSxNQUxWLFFBS1UsU0FMVixRQUtVO0FBQUEsTUFMeEIsUUFLd0IsU0FMeEIsUUFLd0I7O0FBQ3RCO0FBQ0E7QUFDQS9FLG9DQUFzQjtBQUFBLFdBQU1nRixRQUE1QmhGLEVBQXNCO0FBQUEsR0FBdEJBLEVBQXdDLENBQXhDQSxRQUF3QyxDQUF4Q0E7O0FBQ0EsTUFBSXBDLFNBQUosRUFBa0M7QUFDaEM7QUFDQW9DLGdDQUFnQixZQUFNO0FBQ3BCdEMsWUFBTSxDQUFOQTs7QUFFQSxVQUFJQSxNQUFNLENBQVYsb0JBQStCO0FBQzdCQSxjQUFNLENBQU5BO0FBRUg7QUFORHNDO0FBUUYsR0Fkc0IsQ0FjdEI7QUFDQTs7O0FBQ0FBLDhCQUFnQixZQUFNO0FBQ3BCO0FBREZBOztBQUdBO0FBR0YsQyxDQUFBO0FBQ0E7OztHQTVCQSxJOztNQUFBLEk7O0FBNkJBLHNCQUFzRDtBQUFBOztBQUFBLE1BQXRELFFBQXNELFVBQXRELFFBQXNEOztBQUNwRDtBQUNBO0FBQ0FBLG9DQUFzQjtBQUFBLFdBQU1nRixRQUE1QmhGLEVBQXNCO0FBQUEsR0FBdEJBLEVBQXdDLENBQXhDQSxRQUF3QyxDQUF4Q0E7O0FBQ0E7QUFDRDs7SUFMRCxJOztNQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svbWFpbi4zMzhiZjVjOTM3NTMzYjMzZmMxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xuaW1wb3J0ICdAbmV4dC9wb2x5ZmlsbC1tb2R1bGUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IG1pdHQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQnXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuaW1wb3J0IHR5cGUgUm91dGVyIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHR5cGUge1xuICBBcHBDb21wb25lbnQsXG4gIEFwcFByb3BzLFxuICBQcml2YXRlUm91dGVJbmZvLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGRlbEJhc2VQYXRoLCBoYXNCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgZW52Q29uZmlnIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZydcbmltcG9ydCB0eXBlIHsgTkVYVF9EQVRBIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0VVJMLCBsb2FkR2V0SW5pdGlhbFByb3BzLCBTVCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBpbml0SGVhZE1hbmFnZXIgZnJvbSAnLi9oZWFkLW1hbmFnZXInXG5pbXBvcnQgUGFnZUxvYWRlciwgeyBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuL3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IG1lYXN1cmVXZWJWaXRhbHMgZnJvbSAnLi9wZXJmb3JtYW5jZS1yZWxheWVyJ1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBtYWtlUHVibGljUm91dGVySW5zdGFuY2UgfSBmcm9tICcuL3JvdXRlcidcblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyZWFjdC1kb20vZXhwZXJpbWVudGFsXCIgLz5cblxuZGVjbGFyZSBsZXQgX193ZWJwYWNrX3B1YmxpY19wYXRoX186IHN0cmluZ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHRlc3QgZm5zICovXG4gICAgX19ORVhUX0hZRFJBVEVEPzogYm9vbGVhblxuICAgIF9fTkVYVF9IWURSQVRFRF9DQj86ICgpID0+IHZvaWRcblxuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfUFJFTE9BRFJFQURZPzogKGlkcz86IHN0cmluZ1tdKSA9PiB2b2lkXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gICAgX19ORVhUX1A6IGFueVtdXG4gIH1cbn1cblxudHlwZSBSZW5kZXJSb3V0ZUluZm8gPSBQcml2YXRlUm91dGVJbmZvICYgeyBBcHA6IEFwcENvbXBvbmVudCB9XG50eXBlIFJlbmRlckVycm9yUHJvcHMgPSBPbWl0PFJlbmRlclJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnc3R5bGVTaGVldHMnPlxuXG5jb25zdCBkYXRhOiB0eXBlb2Ygd2luZG93WydfX05FWFRfREFUQV9fJ10gPSBKU09OLnBhcnNlKFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpIS50ZXh0Q29udGVudCFcbilcbndpbmRvdy5fX05FWFRfREFUQV9fID0gZGF0YVxuXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9WRVJTSU9OXG5cbmNvbnN0IGxvb3NlVG9BcnJheSA9IDxUIGV4dGVuZHMge30+KGlucHV0OiBhbnkpOiBUW10gPT4gW10uc2xpY2UuY2FsbChpbnB1dClcblxuY29uc3Qge1xuICBwcm9wczogaHlkcmF0ZVByb3BzLFxuICBlcnI6IGh5ZHJhdGVFcnIsXG4gIHBhZ2UsXG4gIHF1ZXJ5LFxuICBidWlsZElkLFxuICBhc3NldFByZWZpeCxcbiAgcnVudGltZUNvbmZpZyxcbiAgZHluYW1pY0lkcyxcbiAgaXNGYWxsYmFjayxcbiAgbG9jYWxlcyxcbn0gPSBkYXRhXG5cbmxldCB7IGxvY2FsZSwgZGVmYXVsdExvY2FsZSB9ID0gZGF0YVxuXG5jb25zdCBwcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xuXG4vLyBXaXRoIGR5bmFtaWMgYXNzZXRQcmVmaXggaXQncyBubyBsb25nZXIgcG9zc2libGUgdG8gc2V0IGFzc2V0UHJlZml4IGF0IHRoZSBidWlsZCB0aW1lXG4vLyBTbywgdGhpcyBpcyBob3cgd2UgZG8gaXQgaW4gdGhlIGNsaWVudCBzaWRlIGF0IHJ1bnRpbWVcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gYCR7cHJlZml4fS9fbmV4dC9gIC8vZXNsaW50LWRpc2FibGUtbGluZVxuLy8gSW5pdGlhbGl6ZSBuZXh0L2NvbmZpZyB3aXRoIHRoZSBlbnZpcm9ubWVudCBjb25maWd1cmF0aW9uXG5lbnZDb25maWcuc2V0Q29uZmlnKHtcbiAgc2VydmVyUnVudGltZUNvbmZpZzoge30sXG4gIHB1YmxpY1J1bnRpbWVDb25maWc6IHJ1bnRpbWVDb25maWcgfHwge30sXG59KVxuXG5sZXQgYXNQYXRoID0gZ2V0VVJMKClcblxuLy8gbWFrZSBzdXJlIG5vdCB0byBhdHRlbXB0IHN0cmlwcGluZyBiYXNlUGF0aCBmb3IgNDA0c1xuaWYgKGhhc0Jhc2VQYXRoKGFzUGF0aCkpIHtcbiAgYXNQYXRoID0gZGVsQmFzZVBhdGgoYXNQYXRoKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBjb25zdCB7XG4gICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgY29uc3Qge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuXG4gIGNvbnN0IHtcbiAgICBwYXJzZVJlbGF0aXZlVXJsLFxuICB9ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCcpXG5cbiAgY29uc3Qge1xuICAgIGZvcm1hdFVybCxcbiAgfSA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCcpXG5cbiAgaWYgKGxvY2FsZXMpIHtcbiAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCBsb2NhbGVzKVxuXG4gICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgYXNQYXRoID0gZm9ybWF0VXJsKHBhcnNlZEFzKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXJpdmUgdGhlIGRlZmF1bHQgbG9jYWxlIGlmIGl0IHdhc24ndCBkZXRlY3RlZCBpbiB0aGUgYXNQYXRoXG4gICAgICAvLyBzaW5jZSB3ZSBkb24ndCBwcmVyZW5kZXIgc3RhdGljIHBhZ2VzIHdpdGggYWxsIHBvc3NpYmxlIGRlZmF1bHRcbiAgICAgIC8vIGxvY2FsZXNcbiAgICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGVcbiAgICB9XG5cbiAgICAvLyBhdHRlbXB0IGRldGVjdGluZyBkZWZhdWx0IGxvY2FsZSBiYXNlZCBvbiBob3N0bmFtZVxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fRE9NQUlOUyBhcyBhbnksXG4gICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICApXG5cbiAgICAvLyBUT0RPOiBpbnZlc3RpZ2F0ZSBpZiBkZWZhdWx0TG9jYWxlIG5lZWRzIHRvIGJlIHBvcHVsYXRlZCBhZnRlclxuICAgIC8vIGh5ZHJhdGlvbiB0byBwcmV2ZW50IG1pc21hdGNoZWQgcmVuZGVyc1xuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICB9XG4gIH1cbn1cblxudHlwZSBSZWdpc3RlckZuID0gKGlucHV0OiBbc3RyaW5nLCAoKSA9PiB2b2lkXSkgPT4gdm9pZFxuXG5jb25zdCBwYWdlTG9hZGVyID0gbmV3IFBhZ2VMb2FkZXIoYnVpbGRJZCwgcHJlZml4KVxuY29uc3QgcmVnaXN0ZXI6IFJlZ2lzdGVyRm4gPSAoW3IsIGZdKSA9PlxuICBwYWdlTG9hZGVyLnJvdXRlTG9hZGVyLm9uRW50cnlwb2ludChyLCBmKVxuaWYgKHdpbmRvdy5fX05FWFRfUCkge1xuICAvLyBEZWZlciBwYWdlIHJlZ2lzdHJhdGlvbiBmb3IgYW5vdGhlciB0aWNrLiBUaGlzIHdpbGwgaW5jcmVhc2UgdGhlIG92ZXJhbGxcbiAgLy8gbGF0ZW5jeSBpbiBoeWRyYXRpbmcgdGhlIHBhZ2UsIGJ1dCByZWR1Y2UgdGhlIHRvdGFsIGJsb2NraW5nIHRpbWUuXG4gIHdpbmRvdy5fX05FWFRfUC5tYXAoKHApID0+IHNldFRpbWVvdXQoKCkgPT4gcmVnaXN0ZXIocCksIDApKVxufVxud2luZG93Ll9fTkVYVF9QID0gW11cbjsod2luZG93Ll9fTkVYVF9QIGFzIGFueSkucHVzaCA9IHJlZ2lzdGVyXG5cbmNvbnN0IGhlYWRNYW5hZ2VyID0gaW5pdEhlYWRNYW5hZ2VyKClcbmNvbnN0IGFwcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JylcblxubGV0IGxhc3RBcHBQcm9wczogQXBwUHJvcHNcbmxldCBsYXN0UmVuZGVyUmVqZWN0OiAoKCkgPT4gdm9pZCkgfCBudWxsXG5sZXQgd2VicGFja0hNUjogYW55XG5leHBvcnQgbGV0IHJvdXRlcjogUm91dGVyXG5sZXQgQ2FjaGVkQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlXG5sZXQgQ2FjaGVkQXBwOiBBcHBDb21wb25lbnQsIG9uUGVyZkVudHJ5OiAobWV0cmljOiBhbnkpID0+IHZvaWRcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtcbiAgZm46IChlcnI6IEVycm9yLCBpbmZvPzogYW55KSA9PiB2b2lkXG59PiB7XG4gIGNvbXBvbmVudERpZENhdGNoKGNvbXBvbmVudEVycjogRXJyb3IsIGluZm86IGFueSkge1xuICAgIHRoaXMucHJvcHMuZm4oY29tcG9uZW50RXJyLCBpbmZvKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxUb0hhc2goKVxuXG4gICAgLy8gV2UgbmVlZCB0byByZXBsYWNlIHRoZSByb3V0ZXIgc3RhdGUgaWY6XG4gICAgLy8gLSB0aGUgcGFnZSB3YXMgKGF1dG8pIGV4cG9ydGVkIGFuZCBoYXMgYSBxdWVyeSBzdHJpbmcgb3Igc2VhcmNoIChoYXNoKVxuICAgIC8vIC0gaXQgd2FzIGF1dG8gZXhwb3J0ZWQgYW5kIGlzIGEgZHluYW1pYyByb3V0ZSAodG8gcHJvdmlkZSBwYXJhbXMpXG4gICAgLy8gLSBpZiBpdCBpcyBhIGNsaWVudC1zaWRlIHNrZWxldG9uIChmYWxsYmFjayByZW5kZXIpXG4gICAgaWYgKFxuICAgICAgcm91dGVyLmlzU3NyICYmXG4gICAgICAoaXNGYWxsYmFjayB8fFxuICAgICAgICAoZGF0YS5uZXh0RXhwb3J0ICYmXG4gICAgICAgICAgKGlzRHluYW1pY1JvdXRlKHJvdXRlci5wYXRobmFtZSkgfHwgbG9jYXRpb24uc2VhcmNoKSkgfHxcbiAgICAgICAgKGh5ZHJhdGVQcm9wcyAmJiBoeWRyYXRlUHJvcHMuX19OX1NTRyAmJiBsb2NhdGlvbi5zZWFyY2gpKVxuICAgICkge1xuICAgICAgLy8gdXBkYXRlIHF1ZXJ5IG9uIG1vdW50IGZvciBleHBvcnRlZCBwYWdlc1xuICAgICAgcm91dGVyLnJlcGxhY2UoXG4gICAgICAgIHJvdXRlci5wYXRobmFtZSArXG4gICAgICAgICAgJz8nICtcbiAgICAgICAgICBTdHJpbmcoXG4gICAgICAgICAgICBxdWVyeXN0cmluZy5hc3NpZ24oXG4gICAgICAgICAgICAgIHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocm91dGVyLnF1ZXJ5KSxcbiAgICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanNcbiAgICAgICAgICAvLyBjbGllbnQtc2lkZSBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LlxuICAgICAgICAgIC8vIEl0IG1heSBjaGFuZ2UgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgX2g6IDEsXG4gICAgICAgICAgLy8gRmFsbGJhY2sgcGFnZXMgbXVzdCB0cmlnZ2VyIHRoZSBkYXRhIGZldGNoLCBzbyB0aGUgdHJhbnNpdGlvbiBpc1xuICAgICAgICAgIC8vIG5vdCBzaGFsbG93LlxuICAgICAgICAgIC8vIE90aGVyIHBhZ2VzIChzdHJpY3RseSB1cGRhdGluZyBxdWVyeSkgaGFwcGVucyBzaGFsbG93bHksIGFzIGRhdGFcbiAgICAgICAgICAvLyByZXF1aXJlbWVudHMgd291bGQgYWxyZWFkeSBiZSBwcmVzZW50LlxuICAgICAgICAgIHNoYWxsb3c6ICFpc0ZhbGxiYWNrLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9IYXNoKClcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaCgpIHtcbiAgICBsZXQgeyBoYXNoIH0gPSBsb2NhdGlvblxuICAgIGhhc2ggPSBoYXNoICYmIGhhc2guc3Vic3RyaW5nKDEpXG4gICAgaWYgKCFoYXNoKSByZXR1cm5cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoIWVsKSByZXR1cm5cblxuICAgIC8vIElmIHdlIGNhbGwgc2Nyb2xsSW50b1ZpZXcoKSBpbiBoZXJlIHdpdGhvdXQgYSBzZXRUaW1lb3V0XG4gICAgLy8gaXQgd29uJ3Qgc2Nyb2xsIHByb3Blcmx5LlxuICAgIHNldFRpbWVvdXQoKCkgPT4gZWwuc2Nyb2xsSW50b1ZpZXcoKSwgMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBSZWFjdERldk92ZXJsYXkgfSA9IHJlcXVpcmUoJ0BuZXh0L3JlYWN0LWRldi1vdmVybGF5L2xpYi9jbGllbnQnKVxuICAgICAgcmV0dXJuIDxSZWFjdERldk92ZXJsYXk+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9SZWFjdERldk92ZXJsYXk+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbWl0dGVyID0gbWl0dCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChvcHRzOiB7IHdlYnBhY2tITVI/OiBhbnkgfSA9IHt9KSA9PiB7XG4gIC8vIFRoaXMgbWFrZXMgc3VyZSB0aGlzIHNwZWNpZmljIGxpbmVzIGFyZSByZW1vdmVkIGluIHByb2R1Y3Rpb25cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgd2VicGFja0hNUiA9IG9wdHMud2VicGFja0hNUlxuICB9XG5cbiAgY29uc3QgYXBwRW50cnlwb2ludCA9IGF3YWl0IHBhZ2VMb2FkZXIucm91dGVMb2FkZXIud2hlbkVudHJ5cG9pbnQoJy9fYXBwJylcbiAgaWYgKCdlcnJvcicgaW4gYXBwRW50cnlwb2ludCkge1xuICAgIHRocm93IGFwcEVudHJ5cG9pbnQuZXJyb3JcbiAgfVxuXG4gIGNvbnN0IHsgY29tcG9uZW50OiBhcHAsIGV4cG9ydHM6IG1vZCB9ID0gYXBwRW50cnlwb2ludFxuICBDYWNoZWRBcHAgPSBhcHAgYXMgQXBwQ29tcG9uZW50XG5cbiAgaWYgKG1vZCAmJiBtb2QucmVwb3J0V2ViVml0YWxzKSB7XG4gICAgb25QZXJmRW50cnkgPSAoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVudHJ5VHlwZSxcbiAgICAgIGVudHJpZXMsXG4gICAgfSkgPT4ge1xuICAgICAgLy8gQ29tYmluZXMgdGltZXN0YW1wIHdpdGggcmFuZG9tIG51bWJlciBmb3IgdW5pcXVlIElEXG4gICAgICBjb25zdCB1bmlxdWVJRCA9IGAke0RhdGUubm93KCl9LSR7XG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5ZTEyIC0gMSkpICsgMWUxMlxuICAgICAgfWBcbiAgICAgIGxldCBwZXJmU3RhcnRFbnRyeVxuXG4gICAgICBpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICBwZXJmU3RhcnRFbnRyeSA9IGVudHJpZXNbMF0uc3RhcnRUaW1lXG4gICAgICB9XG5cbiAgICAgIG1vZC5yZXBvcnRXZWJWaXRhbHMoe1xuICAgICAgICBpZDogaWQgfHwgdW5pcXVlSUQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lIHx8IHBlcmZTdGFydEVudHJ5LFxuICAgICAgICB2YWx1ZTogdmFsdWUgPT0gbnVsbCA/IGR1cmF0aW9uIDogdmFsdWUsXG4gICAgICAgIGxhYmVsOlxuICAgICAgICAgIGVudHJ5VHlwZSA9PT0gJ21hcmsnIHx8IGVudHJ5VHlwZSA9PT0gJ21lYXN1cmUnXG4gICAgICAgICAgICA/ICdjdXN0b20nXG4gICAgICAgICAgICA6ICd3ZWItdml0YWwnLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBsZXQgaW5pdGlhbEVyciA9IGh5ZHJhdGVFcnJcblxuICB0cnkge1xuICAgIGNvbnN0IHBhZ2VFbnRyeXBvaW50ID1cbiAgICAgIC8vIFRoZSBkZXYgc2VydmVyIGZhaWxzIHRvIHNlcnZlIHNjcmlwdCBhc3NldHMgd2hlbiB0aGVyZSdzIGEgaHlkcmF0aW9uXG4gICAgICAvLyBlcnJvciwgc28gd2UgbmVlZCB0byBza2lwIHdhaXRpbmcgZm9yIHRoZSBlbnRyeXBvaW50LlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgaHlkcmF0ZUVyclxuICAgICAgICA/IHsgZXJyb3I6IGh5ZHJhdGVFcnIgfVxuICAgICAgICA6IGF3YWl0IHBhZ2VMb2FkZXIucm91dGVMb2FkZXIud2hlbkVudHJ5cG9pbnQocGFnZSlcbiAgICBpZiAoJ2Vycm9yJyBpbiBwYWdlRW50cnlwb2ludCkge1xuICAgICAgdGhyb3cgcGFnZUVudHJ5cG9pbnQuZXJyb3JcbiAgICB9XG4gICAgQ2FjaGVkQ29tcG9uZW50ID0gcGFnZUVudHJ5cG9pbnQuY29tcG9uZW50XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENhY2hlZENvbXBvbmVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYWdlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFRoaXMgY2F0Y2hlcyBlcnJvcnMgbGlrZSB0aHJvd2luZyBpbiB0aGUgdG9wIGxldmVsIG9mIGEgbW9kdWxlXG4gICAgaW5pdGlhbEVyciA9IGVycm9yXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zdCB7IGdldE5vZGVFcnJvciB9ID0gcmVxdWlyZSgnQG5leHQvcmVhY3QtZGV2LW92ZXJsYXkvbGliL2NsaWVudCcpXG4gICAgLy8gU2VydmVyLXNpZGUgcnVudGltZSBlcnJvcnMgbmVlZCB0byBiZSByZS10aHJvd24gb24gdGhlIGNsaWVudC1zaWRlIHNvXG4gICAgLy8gdGhhdCB0aGUgb3ZlcmxheSBpcyByZW5kZXJlZC5cbiAgICBpZiAoaW5pdGlhbEVycikge1xuICAgICAgaWYgKGluaXRpYWxFcnIgPT09IGh5ZHJhdGVFcnIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9yXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IGVycm9yIG9iamVjdC4gV2UgYHRocm93YCBpdCBiZWNhdXNlIHNvbWUgYnJvd3NlcnNcbiAgICAgICAgICAgIC8vIHdpbGwgc2V0IHRoZSBgc3RhY2tgIHdoZW4gdGhyb3duLCBhbmQgd2Ugd2FudCB0byBlbnN1cmUgb3VycyBpc1xuICAgICAgICAgICAgLy8gbm90IG92ZXJyaWRkZW4gd2hlbiB3ZSByZS10aHJvdyBpdCBiZWxvdy5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihpbml0aWFsRXJyIS5tZXNzYWdlKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yLm5hbWUgPSBpbml0aWFsRXJyIS5uYW1lXG4gICAgICAgICAgZXJyb3Iuc3RhY2sgPSBpbml0aWFsRXJyIS5zdGFja1xuXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGdldE5vZGVFcnJvcihlcnJvcilcbiAgICAgICAgICB0aHJvdyBub2RlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBXZSByZXBsYWNlZCB0aGUgc2VydmVyLXNpZGUgZXJyb3Igd2l0aCBhIGNsaWVudC1zaWRlIGVycm9yLCBhbmQgc2hvdWxkXG4gICAgICAvLyBubyBsb25nZXIgcmV3cml0ZSB0aGUgc3RhY2sgdHJhY2UgdG8gYSBOb2RlIGVycm9yLlxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRocm93IGluaXRpYWxFcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAod2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkpIHtcbiAgICBhd2FpdCB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWShkeW5hbWljSWRzKVxuICB9XG5cbiAgcm91dGVyID0gY3JlYXRlUm91dGVyKHBhZ2UsIHF1ZXJ5LCBhc1BhdGgsIHtcbiAgICBpbml0aWFsUHJvcHM6IGh5ZHJhdGVQcm9wcyxcbiAgICBwYWdlTG9hZGVyLFxuICAgIEFwcDogQ2FjaGVkQXBwLFxuICAgIENvbXBvbmVudDogQ2FjaGVkQ29tcG9uZW50LFxuICAgIHdyYXBBcHAsXG4gICAgZXJyOiBpbml0aWFsRXJyLFxuICAgIGlzRmFsbGJhY2s6IEJvb2xlYW4oaXNGYWxsYmFjayksXG4gICAgc3Vic2NyaXB0aW9uOiAoaW5mbywgQXBwKSA9PiByZW5kZXIoT2JqZWN0LmFzc2lnbih7fSwgaW5mbywgeyBBcHAgfSkpLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGVzLFxuICAgIGRlZmF1bHRMb2NhbGUsXG4gIH0pXG5cbiAgLy8gY2FsbCBpbml0LWNsaWVudCBtaWRkbGV3YXJlXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpbXBvcnQoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPW9uLWluaXQtY2xpZW50IScpXG4gICAgICAudGhlbigoaW5pdENsaWVudE1vZHVsZSkgPT4ge1xuICAgICAgICByZXR1cm4gaW5pdENsaWVudE1vZHVsZS5kZWZhdWx0KHsgcm91dGVyIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChpbml0Q2xpZW50RXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGxpbmcgY2xpZW50LWluaXQgZm9yIHBsdWdpbnMnLCBpbml0Q2xpZW50RXJyKVxuICAgICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckN0eDogUmVuZGVyUm91dGVJbmZvID0ge1xuICAgIEFwcDogQ2FjaGVkQXBwLFxuICAgIGluaXRpYWw6IHRydWUsXG4gICAgQ29tcG9uZW50OiBDYWNoZWRDb21wb25lbnQsXG4gICAgcHJvcHM6IGh5ZHJhdGVQcm9wcyxcbiAgICBlcnI6IGluaXRpYWxFcnIsXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJlbmRlcihyZW5kZXJDdHgpXG4gICAgcmV0dXJuIGVtaXR0ZXJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBlbWl0dGVyLCByZW5kZXIsIHJlbmRlckN0eCB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlcihyZW5kZXJpbmdQcm9wczogUmVuZGVyUm91dGVJbmZvKSB7XG4gIGlmIChyZW5kZXJpbmdQcm9wcy5lcnIpIHtcbiAgICBhd2FpdCByZW5kZXJFcnJvcihyZW5kZXJpbmdQcm9wcylcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZG9SZW5kZXIocmVuZGVyaW5nUHJvcHMpXG4gIH0gY2F0Y2ggKHJlbmRlckVycikge1xuICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxhdGlvbiBlcnJvcnNcbiAgICBpZiAocmVuZGVyRXJyLmNhbmNlbGxlZCkge1xuICAgICAgdGhyb3cgcmVuZGVyRXJyXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAvLyBFbnN1cmUgdGhpcyBlcnJvciBpcyBkaXNwbGF5ZWQgaW4gdGhlIG92ZXJsYXkgaW4gZGV2ZWxvcG1lbnRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyByZW5kZXJFcnJcbiAgICAgIH0pXG4gICAgfVxuICAgIGF3YWl0IHJlbmRlckVycm9yKHsgLi4ucmVuZGVyaW5nUHJvcHMsIGVycjogcmVuZGVyRXJyIH0pXG4gIH1cbn1cblxuLy8gVGhpcyBtZXRob2QgaGFuZGxlcyBhbGwgcnVudGltZSBhbmQgZGVidWcgZXJyb3JzLlxuLy8gNDA0IGFuZCA1MDAgZXJyb3JzIGFyZSBzcGVjaWFsIGtpbmQgb2YgZXJyb3JzXG4vLyBhbmQgdGhleSBhcmUgc3RpbGwgaGFuZGxlIHZpYSB0aGUgbWFpbiByZW5kZXIgbWV0aG9kLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVycm9yKHJlbmRlckVycm9yUHJvcHM6IFJlbmRlckVycm9yUHJvcHMpIHtcbiAgY29uc3QgeyBBcHAsIGVyciB9ID0gcmVuZGVyRXJyb3JQcm9wc1xuXG4gIC8vIEluIGRldmVsb3BtZW50IHJ1bnRpbWUgZXJyb3JzIGFyZSBjYXVnaHQgYnkgb3VyIG92ZXJsYXlcbiAgLy8gSW4gcHJvZHVjdGlvbiB3ZSBjYXRjaCBydW50aW1lIGVycm9ycyB1c2luZyBjb21wb25lbnREaWRDYXRjaCB3aGljaCB3aWxsIHRyaWdnZXIgcmVuZGVyRXJyb3JcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBBIE5leHQuanMgcmVuZGVyaW5nIHJ1bnRpbWUgZXJyb3IgaXMgYWx3YXlzIHVucmVjb3ZlcmFibGVcbiAgICAvLyBGSVhNRTogbGV0J3MgbWFrZSB0aGlzIHJlY292ZXJhYmxlIChlcnJvciBpbiBHSVAgY2xpZW50LXRyYW5zaXRpb24pXG4gICAgd2VicGFja0hNUi5vblVucmVjb3ZlcmFibGVFcnJvcigpXG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSA8QXBwPiBzbyB0aGF0IHRoZSBgPFJlYWN0RGV2T3ZlcmxheT5gIGNhblxuICAgIC8vIHJlbmRlciBpdHNlbGYuXG4gICAgcmV0dXJuIGRvUmVuZGVyKHtcbiAgICAgIEFwcDogKCkgPT4gbnVsbCxcbiAgICAgIHByb3BzOiB7fSxcbiAgICAgIENvbXBvbmVudDogKCkgPT4gbnVsbCxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXSxcbiAgICB9KVxuICB9XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpbXBvcnQoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPW9uLWVycm9yLWNsaWVudCEnKVxuICAgICAgLnRoZW4oKG9uQ2xpZW50RXJyb3JNb2R1bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG9uQ2xpZW50RXJyb3JNb2R1bGUuZGVmYXVsdCh7IGVyciB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgob25DbGllbnRFcnJvckVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdlcnJvciBjYWxsaW5nIG9uLWVycm9yLWNsaWVudCBmb3IgcGx1Z2lucycsXG4gICAgICAgICAgb25DbGllbnRFcnJvckVyclxuICAgICAgICApXG4gICAgICB9KVxuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIGxvZyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUsIG90aGVyd2lzZSB1c2VycyBjYW4ndCB0cmFjayBkb3duIGlzc3Vlcy5cbiAgY29uc29sZS5lcnJvcihlcnIpXG4gIHJldHVybiBwYWdlTG9hZGVyXG4gICAgLmxvYWRQYWdlKCcvX2Vycm9yJylcbiAgICAudGhlbigoeyBwYWdlOiBFcnJvckNvbXBvbmVudCwgc3R5bGVTaGVldHMgfSkgPT4ge1xuICAgICAgLy8gSW4gcHJvZHVjdGlvbiB3ZSBkbyBhIG5vcm1hbCByZW5kZXIgd2l0aCB0aGUgYEVycm9yQ29tcG9uZW50YCBhcyBjb21wb25lbnQuXG4gICAgICAvLyBJZiB3ZSd2ZSBnb3R0ZW4gaGVyZSB1cG9uIGluaXRpYWwgcmVuZGVyLCB3ZSBjYW4gdXNlIHRoZSBwcm9wcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAvLyBPdGhlcndpc2UsIHdlIG5lZWQgdG8gY2FsbCBgZ2V0SW5pdGlhbFByb3BzYCBvbiBgQXBwYCBiZWZvcmUgbW91bnRpbmcuXG4gICAgICBjb25zdCBBcHBUcmVlID0gd3JhcEFwcChBcHApXG4gICAgICBjb25zdCBhcHBDdHggPSB7XG4gICAgICAgIENvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgIEFwcFRyZWUsXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgY3R4OiB7IGVyciwgcGF0aG5hbWU6IHBhZ2UsIHF1ZXJ5LCBhc1BhdGgsIEFwcFRyZWUgfSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgIHJlbmRlckVycm9yUHJvcHMucHJvcHNcbiAgICAgICAgICA/IHJlbmRlckVycm9yUHJvcHMucHJvcHNcbiAgICAgICAgICA6IGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBhcHBDdHgpXG4gICAgICApLnRoZW4oKGluaXRQcm9wcykgPT5cbiAgICAgICAgZG9SZW5kZXIoe1xuICAgICAgICAgIC4uLnJlbmRlckVycm9yUHJvcHMsXG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIENvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgcHJvcHM6IGluaXRQcm9wcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxufVxuXG5sZXQgcmVhY3RSb290OiBhbnkgPSBudWxsXG5mdW5jdGlvbiByZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbDogSlNYLkVsZW1lbnQsIGRvbUVsOiBIVE1MRWxlbWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX01PREUgIT09ICdsZWdhY3knKSB7XG4gICAgaWYgKCFyZWFjdFJvb3QpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB7IGh5ZHJhdGU6IHRydWUgfVxuICAgICAgcmVhY3RSb290ID1cbiAgICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX01PREUgPT09ICdjb25jdXJyZW50J1xuICAgICAgICAgID8gKFJlYWN0RE9NIGFzIGFueSkudW5zdGFibGVfY3JlYXRlUm9vdChkb21FbCwgb3B0cylcbiAgICAgICAgICA6IChSZWFjdERPTSBhcyBhbnkpLnVuc3RhYmxlX2NyZWF0ZUJsb2NraW5nUm9vdChkb21FbCwgb3B0cylcbiAgICB9XG4gICAgcmVhY3RSb290LnJlbmRlcihyZWFjdEVsKVxuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgc3RhcnQgb2YgaHlkcmF0ZS9yZW5kZXJcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ2JlZm9yZVJlbmRlcicpXG4gICAgfVxuXG4gICAgLy8gVGhlIGNoZWNrIGZvciBgLmh5ZHJhdGVgIGlzIHRoZXJlIHRvIHN1cHBvcnQgUmVhY3QgYWx0ZXJuYXRpdmVzIGxpa2UgcHJlYWN0XG4gICAgaWYgKHR5cGVvZiBSZWFjdERPTS5oeWRyYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSZWFjdERPTS5oeWRyYXRlKHJlYWN0RWwsIGRvbUVsLCBtYXJrSHlkcmF0ZUNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERPTS5yZW5kZXIocmVhY3RFbCwgZG9tRWwsIG1hcmtSZW5kZXJDb21wbGV0ZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0h5ZHJhdGVDb21wbGV0ZSgpIHtcbiAgaWYgKCFTVCkgcmV0dXJuXG5cbiAgcGVyZm9ybWFuY2UubWFyaygnYWZ0ZXJIeWRyYXRlJykgLy8gbWFyayBlbmQgb2YgaHlkcmF0aW9uXG5cbiAgcGVyZm9ybWFuY2UubWVhc3VyZShcbiAgICAnTmV4dC5qcy1iZWZvcmUtaHlkcmF0aW9uJyxcbiAgICAnbmF2aWdhdGlvblN0YXJ0JyxcbiAgICAnYmVmb3JlUmVuZGVyJ1xuICApXG4gIHBlcmZvcm1hbmNlLm1lYXN1cmUoJ05leHQuanMtaHlkcmF0aW9uJywgJ2JlZm9yZVJlbmRlcicsICdhZnRlckh5ZHJhdGUnKVxuXG4gIGlmIChvblBlcmZFbnRyeSkge1xuICAgIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoJ05leHQuanMtaHlkcmF0aW9uJykuZm9yRWFjaChvblBlcmZFbnRyeSlcbiAgfVxuICBjbGVhck1hcmtzKClcbn1cblxuZnVuY3Rpb24gbWFya1JlbmRlckNvbXBsZXRlKCkge1xuICBpZiAoIVNUKSByZXR1cm5cblxuICBwZXJmb3JtYW5jZS5tYXJrKCdhZnRlclJlbmRlcicpIC8vIG1hcmsgZW5kIG9mIHJlbmRlclxuICBjb25zdCBuYXZTdGFydEVudHJpZXMgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCdyb3V0ZUNoYW5nZScsICdtYXJrJylcblxuICBpZiAoIW5hdlN0YXJ0RW50cmllcy5sZW5ndGgpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBlcmZvcm1hbmNlLm1lYXN1cmUoXG4gICAgJ05leHQuanMtcm91dGUtY2hhbmdlLXRvLXJlbmRlcicsXG4gICAgbmF2U3RhcnRFbnRyaWVzWzBdLm5hbWUsXG4gICAgJ2JlZm9yZVJlbmRlcidcbiAgKVxuICBwZXJmb3JtYW5jZS5tZWFzdXJlKCdOZXh0LmpzLXJlbmRlcicsICdiZWZvcmVSZW5kZXInLCAnYWZ0ZXJSZW5kZXInKVxuICBpZiAob25QZXJmRW50cnkpIHtcbiAgICBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCdOZXh0LmpzLXJlbmRlcicpLmZvckVhY2gob25QZXJmRW50cnkpXG4gICAgcGVyZm9ybWFuY2VcbiAgICAgIC5nZXRFbnRyaWVzQnlOYW1lKCdOZXh0LmpzLXJvdXRlLWNoYW5nZS10by1yZW5kZXInKVxuICAgICAgLmZvckVhY2gob25QZXJmRW50cnkpXG4gIH1cbiAgY2xlYXJNYXJrcygpXG4gIDtbJ05leHQuanMtcm91dGUtY2hhbmdlLXRvLXJlbmRlcicsICdOZXh0LmpzLXJlbmRlciddLmZvckVhY2goKG1lYXN1cmUpID0+XG4gICAgcGVyZm9ybWFuY2UuY2xlYXJNZWFzdXJlcyhtZWFzdXJlKVxuICApXG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFya3MoKSB7XG4gIDtbXG4gICAgJ2JlZm9yZVJlbmRlcicsXG4gICAgJ2FmdGVySHlkcmF0ZScsXG4gICAgJ2FmdGVyUmVuZGVyJyxcbiAgICAncm91dGVDaGFuZ2UnLFxuICBdLmZvckVhY2goKG1hcmspID0+IHBlcmZvcm1hbmNlLmNsZWFyTWFya3MobWFyaykpXG59XG5cbmZ1bmN0aW9uIEFwcENvbnRhaW5lcih7XG4gIGNoaWxkcmVuLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBmbj17KGVycm9yKSA9PlxuICAgICAgICByZW5kZXJFcnJvcih7IEFwcDogQ2FjaGVkQXBwLCBlcnI6IGVycm9yIH0pLmNhdGNoKChlcnIpID0+XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVuZGVyaW5nIHBhZ2U6ICcsIGVycilcbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxSb3V0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKX0+XG4gICAgICAgIDxIZWFkTWFuYWdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hlYWRNYW5hZ2VyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvSGVhZE1hbmFnZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9Sb3V0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IHdyYXBBcHAgPSAoQXBwOiBBcHBDb21wb25lbnQpID0+IChcbiAgd3JhcHBlZEFwcFByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4pID0+IHtcbiAgY29uc3QgYXBwUHJvcHM6IEFwcFByb3BzID0ge1xuICAgIC4uLndyYXBwZWRBcHBQcm9wcyxcbiAgICBDb21wb25lbnQ6IENhY2hlZENvbXBvbmVudCxcbiAgICBlcnI6IGh5ZHJhdGVFcnIsXG4gICAgcm91dGVyLFxuICB9XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxBcHAgey4uLmFwcFByb3BzfSAvPlxuICAgIDwvQXBwQ29udGFpbmVyPlxuICApXG59XG5cbmZ1bmN0aW9uIGRvUmVuZGVyKGlucHV0OiBSZW5kZXJSb3V0ZUluZm8pOiBQcm9taXNlPGFueT4ge1xuICBsZXQgeyBBcHAsIENvbXBvbmVudCwgcHJvcHMsIGVyciB9ID0gaW5wdXRcbiAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXSB8IHVuZGVmaW5lZCA9XG4gICAgJ2luaXRpYWwnIGluIGlucHV0ID8gdW5kZWZpbmVkIDogaW5wdXQuc3R5bGVTaGVldHNcbiAgQ29tcG9uZW50ID0gQ29tcG9uZW50IHx8IGxhc3RBcHBQcm9wcy5Db21wb25lbnRcbiAgcHJvcHMgPSBwcm9wcyB8fCBsYXN0QXBwUHJvcHMucHJvcHNcblxuICBjb25zdCBhcHBQcm9wczogQXBwUHJvcHMgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgQ29tcG9uZW50LFxuICAgIGVycixcbiAgICByb3V0ZXIsXG4gIH1cbiAgLy8gbGFzdEFwcFByb3BzIGhhcyB0byBiZSBzZXQgYmVmb3JlIFJlYWN0RG9tLnJlbmRlciB0byBhY2NvdW50IGZvciBSZWFjdERvbSB0aHJvd2luZyBhbiBlcnJvci5cbiAgbGFzdEFwcFByb3BzID0gYXBwUHJvcHNcblxuICBsZXQgY2FuY2VsZWQgPSBmYWxzZVxuICBsZXQgcmVzb2x2ZVByb21pc2U6ICgpID0+IHZvaWRcbiAgY29uc3QgcmVuZGVyUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAobGFzdFJlbmRlclJlamVjdCkge1xuICAgICAgbGFzdFJlbmRlclJlamVjdCgpXG4gICAgfVxuICAgIHJlc29sdmVQcm9taXNlID0gKCkgPT4ge1xuICAgICAgbGFzdFJlbmRlclJlamVjdCA9IG51bGxcbiAgICAgIHJlc29sdmUoKVxuICAgIH1cbiAgICBsYXN0UmVuZGVyUmVqZWN0ID0gKCkgPT4ge1xuICAgICAgY2FuY2VsZWQgPSB0cnVlXG4gICAgICBsYXN0UmVuZGVyUmVqZWN0ID0gbnVsbFxuXG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKCdDYW5jZWwgcmVuZGVyaW5nIHJvdXRlJylcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlamVjdChlcnJvcilcbiAgICB9XG4gIH0pXG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBoYXMgYSByZXR1cm4gdHlwZSB0byBlbnN1cmUgaXQgZG9lc24ndCBzdGFydCByZXR1cm5pbmcgYVxuICAvLyBQcm9taXNlLiBJdCBzaG91bGQgcmVtYWluIHN5bmNocm9ub3VzLlxuICBmdW5jdGlvbiBvblN0YXJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICFzdHlsZVNoZWV0cyB8fFxuICAgICAgLy8gV2UgdXNlIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LCBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAvLyB1bmxlc3Mgd2UncmUgaW4gcHJvZHVjdGlvbjpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdHlsZVRhZ3MgPSBsb29zZVRvQXJyYXk8SFRNTFN0eWxlRWxlbWVudD4oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZVtkYXRhLW4taHJlZl0nKVxuICAgIClcbiAgICBjb25zdCBjdXJyZW50SHJlZnMgPSBuZXcgU2V0KFxuICAgICAgY3VycmVudFN0eWxlVGFncy5tYXAoKHRhZykgPT4gdGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1uLWhyZWYnKSlcbiAgICApXG5cbiAgICBjb25zdCBub3NjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vc2NyaXB0W2RhdGEtbi1jc3NdJylcbiAgICBjb25zdCBub25jZSA9IG5vc2NyaXB0Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtbi1jc3MnKVxuXG4gICAgc3R5bGVTaGVldHMuZm9yRWFjaCgoeyBocmVmLCB0ZXh0IH0pID0+IHtcbiAgICAgIGlmICghY3VycmVudEhyZWZzLmhhcyhocmVmKSkge1xuICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKCdkYXRhLW4taHJlZicsIGhyZWYpXG4gICAgICAgIHN0eWxlVGFnLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCAneCcpXG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZylcbiAgICAgICAgc3R5bGVUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gb25IZWFkQ29tbWl0KCkge1xuICAgIGlmIChcbiAgICAgIC8vIFdlIHVzZSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudCwgc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgLy8gdW5sZXNzIHdlJ3JlIGluIHByb2R1Y3Rpb246XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAvLyBXZSBjYW4gc2tpcCB0aGlzIGR1cmluZyBoeWRyYXRpb24uIFJ1bm5pbmcgaXQgd29udCBjYXVzZSBhbnkgaGFybSwgYnV0XG4gICAgICAvLyB3ZSBtYXkgYXMgd2VsbCBzYXZlIHRoZSBDUFUgY3ljbGVzOlxuICAgICAgc3R5bGVTaGVldHMgJiZcbiAgICAgIC8vIEVuc3VyZSB0aGlzIHJlbmRlciB3YXMgbm90IGNhbmNlbGVkXG4gICAgICAhY2FuY2VsZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IGRlc2lyZWRIcmVmcyA9IG5ldyBTZXQoc3R5bGVTaGVldHMubWFwKChzKSA9PiBzLmhyZWYpKVxuICAgICAgY29uc3QgY3VycmVudFN0eWxlVGFncyA9IGxvb3NlVG9BcnJheTxIVE1MU3R5bGVFbGVtZW50PihcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGVbZGF0YS1uLWhyZWZdJylcbiAgICAgIClcbiAgICAgIGNvbnN0IGN1cnJlbnRIcmVmcyA9IGN1cnJlbnRTdHlsZVRhZ3MubWFwKFxuICAgICAgICAodGFnKSA9PiB0YWcuZ2V0QXR0cmlidXRlKCdkYXRhLW4taHJlZicpIVxuICAgICAgKVxuXG4gICAgICAvLyBUb2dnbGUgYDxzdHlsZT5gIHRhZ3Mgb24gb3Igb2ZmIGRlcGVuZGluZyBvbiBpZiB0aGV5J3JlIG5lZWRlZDpcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGN1cnJlbnRIcmVmcy5sZW5ndGg7ICsraWR4KSB7XG4gICAgICAgIGlmIChkZXNpcmVkSHJlZnMuaGFzKGN1cnJlbnRIcmVmc1tpZHhdKSkge1xuICAgICAgICAgIGN1cnJlbnRTdHlsZVRhZ3NbaWR4XS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVUYWdzW2lkeF0uc2V0QXR0cmlidXRlKCdtZWRpYScsICd4JylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW9yZGVyIHN0eWxlcyBpbnRvIGludGVuZGVkIG9yZGVyOlxuICAgICAgbGV0IHJlZmVyZW5jZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3NjcmlwdFtkYXRhLW4tY3NzXScpXG4gICAgICBpZiAoXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGFuIGludmFyaWFudDpcbiAgICAgICAgcmVmZXJlbmNlTm9kZVxuICAgICAgKSB7XG4gICAgICAgIHN0eWxlU2hlZXRzLmZvckVhY2goKHsgaHJlZiB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBzdHlsZVtkYXRhLW4taHJlZj1cIiR7aHJlZn1cIl1gXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGFuIGludmFyaWFudDpcbiAgICAgICAgICAgIHRhcmdldFRhZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSEucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICB0YXJnZXRUYWcsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUhLm5leHRTaWJsaW5nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gdGFyZ2V0VGFnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5hbGx5LCBjbGVhbiB1cCBzZXJ2ZXIgcmVuZGVyZWQgc3R5bGVzaGVldHM6XG4gICAgICBsb29zZVRvQXJyYXk8SFRNTExpbmtFbGVtZW50PihcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tkYXRhLW4tcF0nKVxuICAgICAgKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChlbClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZvcmNlIGJyb3dzZXIgdG8gcmVjb21wdXRlIGxheW91dCwgd2hpY2ggc2hvdWxkIHByZXZlbnQgYSBmbGFzaCBvZlxuICAgICAgLy8gdW5zdHlsZWQgY29udGVudDpcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgJ2hlaWdodCcpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Sb290Q29tbWl0KCkge1xuICAgIHJlc29sdmVQcm9taXNlKClcbiAgfVxuXG4gIGNvbnN0IGVsZW0gPSAoXG4gICAgPFJvb3QgY2FsbGJhY2s9e29uUm9vdENvbW1pdH0+XG4gICAgICA8SGVhZCBjYWxsYmFjaz17b25IZWFkQ29tbWl0fSAvPlxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPEFwcCB7Li4uYXBwUHJvcHN9IC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8L1Jvb3Q+XG4gIClcblxuICBvblN0YXJ0KClcblxuICAvLyBXZSBjYXRjaCBydW50aW1lIGVycm9ycyB1c2luZyBjb21wb25lbnREaWRDYXRjaCB3aGljaCB3aWxsIHRyaWdnZXIgcmVuZGVyRXJyb3JcbiAgcmVuZGVyUmVhY3RFbGVtZW50KFxuICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9TVFJJQ1RfTU9ERSA/IChcbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPntlbGVtfTwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICApIDogKFxuICAgICAgZWxlbVxuICAgICksXG4gICAgYXBwRWxlbWVudCFcbiAgKVxuXG4gIHJldHVybiByZW5kZXJQcm9taXNlXG59XG5cbmZ1bmN0aW9uIFJvb3Qoe1xuICBjYWxsYmFjayxcbiAgY2hpbGRyZW4sXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkXG59Pik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIC8vIFdlIHVzZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBndWFyYW50ZWUgdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkXG4gIC8vIGFzIHNvb24gYXMgUmVhY3QgZmx1c2hlcyB0aGUgdXBkYXRlLlxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gY2FsbGJhY2soKSwgW2NhbGxiYWNrXSlcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9URVNUX01PREUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93Ll9fTkVYVF9IWURSQVRFRCA9IHRydWVcblxuICAgICAgaWYgKHdpbmRvdy5fX05FWFRfSFlEUkFURURfQ0IpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9IWURSQVRFRF9DQigpXG4gICAgICB9XG4gICAgfSwgW10pXG4gIH1cbiAgLy8gV2Ugc2hvdWxkIGFzayB0byBtZWFzdXJlIHRoZSBXZWIgVml0YWxzIGFmdGVyIHJlbmRlcmluZyBjb21wbGV0ZXMgc28gd2VcbiAgLy8gZG9uJ3QgY2F1c2UgYW55IGh5ZHJhdGlvbiBkZWxheTpcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZWFzdXJlV2ViVml0YWxzKG9uUGVyZkVudHJ5KVxuICB9LCBbXSlcbiAgcmV0dXJuIGNoaWxkcmVuIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG4vLyBEdW1teSBjb21wb25lbnQgdGhhdCB3ZSByZW5kZXIgYXMgYSBjaGlsZCBvZiBSb290IHNvIHRoYXQgd2UgY2FuXG4vLyB0b2dnbGUgdGhlIGNvcnJlY3Qgc3R5bGVzIGJlZm9yZSB0aGUgcGFnZSBpcyByZW5kZXJlZC5cbmZ1bmN0aW9uIEhlYWQoeyBjYWxsYmFjayB9OiB7IGNhbGxiYWNrOiAoKSA9PiB2b2lkIH0pIHtcbiAgLy8gV2UgdXNlIGB1c2VMYXlvdXRFZmZlY3RgIHRvIGd1YXJhbnRlZSB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWRcbiAgLy8gYXMgc29vbiBhcyBSZWFjdCBmbHVzaGVzIHRoZSB1cGRhdGUuXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBjYWxsYmFjaygpLCBbY2FsbGJhY2tdKVxuICByZXR1cm4gbnVsbFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==