"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/PostFeed.tsx":
/*!*************************************!*\
  !*** ./src/components/PostFeed.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ \"(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PostFeed = (param)=>{\n    let { initialPosts, subredditName } = param;\n    _s();\n    const lastPostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { ref, entry } = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useIntersection)({\n        root: lastPostRef.current,\n        threshold: 1\n    });\n    const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery)([\n        \"infinite-query\"\n    ], async (param)=>{\n        let { pageParam = 1 } = param;\n        const query = \"/api/posts?limit=\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.INFINITE_SCROLLING_PAGINATION_RESULTS, \"&page=\").concat(pageParam) + (!!subredditName ? \"&subredditName=\".concat(subredditName) : \"\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"flex flex-col col-span-2 space-y-6\"\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PostFeed, \"Z6roLWINTxWJdMLCDAhTW642wyE=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useIntersection,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery\n    ];\n});\n_c = PostFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostFeed);\nvar _c;\n$RefreshReg$(_c, \"PostFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGZWVkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUM7QUFFYztBQUNRO0FBQ1E7QUFPakUsTUFBTUksV0FBOEI7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRTs7SUFDbEUsTUFBTUMsY0FBY1AsNkNBQU1BLENBQWM7SUFDeEMsTUFBTSxFQUFFUSxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUFHUiwrREFBZUEsQ0FBQztRQUNyQ1MsTUFBTUgsWUFBWUksT0FBTztRQUN6QkMsV0FBVztJQUNiO0lBRUEsTUFBTSxFQUFFLEdBQUdWLHVFQUFnQkEsQ0FBQztRQUFDO0tBQWlCLEVBQUU7WUFBTyxFQUFFVyxZQUFZLENBQUMsRUFBRTtRQUN0RSxNQUFNQyxRQUNKLG9CQUFrRUQsT0FBOUNWLDBFQUFxQ0EsRUFBQyxVQUFrQixPQUFWVSxhQUNqRSxFQUFDLENBQUNQLGdCQUFnQixrQkFBZ0MsT0FBZEEsaUJBQWtCLEVBQUM7SUFDNUQ7SUFDQSxxQkFBTyw4REFBQ1M7UUFBR0MsV0FBVTs7Ozs7O0FBQ3ZCO0dBYk1aOztRQUVtQkgsMkRBQWVBO1FBSzNCQyxtRUFBZ0JBOzs7S0FQdkJFO0FBZU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdEZlZWQudHN4P2Q0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV4dGVuZGVkUG9zdCB9IGZyb20gXCJAL3R5cGVzL2RiXCI7XG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7IHVzZUluZmluaXRlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBJTkZJTklURV9TQ1JPTExJTkdfUEFHSU5BVElPTl9SRVNVTFRTIH0gZnJvbSBcIkAvY29uZmlnXCI7XG5cbmludGVyZmFjZSBQb3N0RmVlZFByb3BzIHtcbiAgaW5pdGlhbFBvc3RzOiBFeHRlbmRlZFBvc3RbXTtcbiAgc3VicmVkZGl0TmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgUG9zdEZlZWQ6IEZDPFBvc3RGZWVkUHJvcHM+ID0gKHsgaW5pdGlhbFBvc3RzLCBzdWJyZWRkaXROYW1lIH0pID0+IHtcbiAgY29uc3QgbGFzdFBvc3RSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHJlZiwgZW50cnkgfSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdDogbGFzdFBvc3RSZWYuY3VycmVudCxcbiAgICB0aHJlc2hvbGQ6IDEsXG4gIH0pO1xuXG4gIGNvbnN0IHt9ID0gdXNlSW5maW5pdGVRdWVyeShbXCJpbmZpbml0ZS1xdWVyeVwiXSwgYXN5bmMgKHsgcGFnZVBhcmFtID0gMSB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPVxuICAgICAgYC9hcGkvcG9zdHM/bGltaXQ9JHtJTkZJTklURV9TQ1JPTExJTkdfUEFHSU5BVElPTl9SRVNVTFRTfSZwYWdlPSR7cGFnZVBhcmFtfWAgK1xuICAgICAgKCEhc3VicmVkZGl0TmFtZSA/IGAmc3VicmVkZGl0TmFtZT0ke3N1YnJlZGRpdE5hbWV9YCA6IFwiXCIpO1xuICB9KTtcbiAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTIgc3BhY2UteS02XCI+PC91bD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0RmVlZDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VJbnRlcnNlY3Rpb24iLCJ1c2VJbmZpbml0ZVF1ZXJ5IiwiSU5GSU5JVEVfU0NST0xMSU5HX1BBR0lOQVRJT05fUkVTVUxUUyIsIlBvc3RGZWVkIiwiaW5pdGlhbFBvc3RzIiwic3VicmVkZGl0TmFtZSIsImxhc3RQb3N0UmVmIiwicmVmIiwiZW50cnkiLCJyb290IiwiY3VycmVudCIsInRocmVzaG9sZCIsInBhZ2VQYXJhbSIsInF1ZXJ5IiwidWwiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PostFeed.tsx\n"));

/***/ })

});