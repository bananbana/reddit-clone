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

/***/ "(app-pages-browser)/./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\n\nconst Post = (param)=>{\n    let { subredditName, post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-white shadow\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-6 py-4 flex justify-between\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-0 flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"msx-h-40 mt-1 text-xs text-gray-500\",\n                        children: [\n                            subredditName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/r/\".concat(subredditName),\n                                        className: \"underline text-zinc-900 text-sm underline-offset-2\",\n                                        children: [\n                                            \"r/\",\n                                            subredditName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-1\",\n                                        children: \"•\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Posted by u/\",\n                                    post.author.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.formatTimeToNow)(new Date(post.createdAt))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/r/\".concat(subredditName, \"/post/\").concat(post.id)\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBOEM7QUFZOUMsTUFBTUMsT0FBc0I7UUFBQyxFQUFFQyxhQUFhLEVBQUVDLElBQUksRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFHYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQ1pILDhCQUNDOztrREFDRSw4REFBQ0k7d0NBQ0NDLE1BQU0sTUFBb0IsT0FBZEw7d0NBQ1pHLFdBQVU7OzRDQUNYOzRDQUNJSDs7Ozs7OztrREFFTCw4REFBQ007d0NBQUtILFdBQVU7a0RBQU87Ozs7Ozs7K0NBRXZCOzBDQUNKLDhEQUFDRzs7b0NBQUs7b0NBQWFMLEtBQUtNLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7Ozs0QkFBUzs0QkFDM0NWLDJEQUFlQSxDQUFDLElBQUlXLEtBQUtSLEtBQUtTLFNBQVM7Ozs7Ozs7a0NBRzFDLDhEQUFDTjt3QkFBRUMsTUFBTSxNQUE0QkosT0FBdEJELGVBQWMsVUFBZ0IsT0FBUkMsS0FBS1UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RDtLQTVCTVo7QUE4Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC50c3g/ZDdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRUaW1lVG9Ob3cgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IFBvc3QsIFVzZXIsIFZvdGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQb3N0UHJvcHMge1xuICBzdWJyZWRkaXROYW1lOiBzdHJpbmc7XG4gIHBvc3Q6IFBvc3QgJiB7XG4gICAgYXV0aG9yOiBVc2VyO1xuICAgIHZvdGVzOiBWb3RlW107XG4gIH07XG59XG5cbmNvbnN0IFBvc3Q6IEZDPFBvc3RQcm9wcz4gPSAoeyBzdWJyZWRkaXROYW1lLCBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgc2hhZG93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7LyogVE9ETzogUG9zdFZvdGVzICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0wIGZsZXgtMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXN4LWgtNDAgbXQtMSB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIHtzdWJyZWRkaXROYW1lID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3IvJHtzdWJyZWRkaXROYW1lfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC16aW5jLTkwMCB0ZXh0LXNtIHVuZGVybGluZS1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgci97c3VicmVkZGl0TmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMVwiPiYjeDIwMjI7PC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPHNwYW4+UG9zdGVkIGJ5IHUve3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIHtmb3JtYXRUaW1lVG9Ob3cobmV3IERhdGUocG9zdC5jcmVhdGVkQXQpKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxhIGhyZWY9e2Avci8ke3N1YnJlZGRpdE5hbWV9L3Bvc3QvJHtwb3N0LmlkfWB9PjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiZm9ybWF0VGltZVRvTm93IiwiUG9zdCIsInN1YnJlZGRpdE5hbWUiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJzcGFuIiwiYXV0aG9yIiwibmFtZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post.tsx\n"));

/***/ })

});