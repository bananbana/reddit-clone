"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cfd2d8fe2f96\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MzUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNmZDJkOGZlMmY5NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Command */ \"(app-pages-browser)/./src/components/ui/Command.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ \"(app-pages-browser)/./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SearchBar = (param)=>{\n    let {} = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data: queryResults, refetch, isFetched, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryFn: async ()=>{\n            if (!input) return [];\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/search?q=\".concat(input));\n            return data;\n        },\n        queryKey: [\n            \"search-query\"\n        ],\n        enabled: false\n    });\n    const request = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(async ()=>{\n        refetch();\n    }, 300);\n    const debounceRequest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        request();\n    }, []);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var _queryResults_length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.Command, {\n        className: \"relative rounded-lg border max-w-lg z-50 overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandInput, {\n                value: input,\n                onValueChange: (text)=>{\n                    setInput(text);\n                    debounceRequest();\n                },\n                className: \"outline-none border-none focus:border-none focus:outline-none ring-0\",\n                placeholder: \"Search communities...\"\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            input.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandList, {\n                className: \"absolute bg-white top-full inset-x-0 shadow rounded-b-md\",\n                children: [\n                    isFetched && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandEmpty, {\n                        children: \"No results found.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 25\n                    }, undefined),\n                    ((_queryResults_length = queryResults === null || queryResults === void 0 ? void 0 : queryResults.length) !== null && _queryResults_length !== void 0 ? _queryResults_length : 0) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandGroup, {\n                        heading: \"Communities\",\n                        children: queryResults === null || queryResults === void 0 ? void 0 : queryResults.map((subreddit)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandItem, {\n                                value: subreddit.name,\n                                onSelect: (e)=>{\n                                    router.push(\"/r/\".concat(e));\n                                    router.refresh();\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/r/\".concat(subreddit.name),\n                                        children: [\n                                            \"r/\",\n                                            subreddit.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, subreddit.id, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"nyXGnievjmz5WO1Qp+IHbqgNZJo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFa0Q7QUFRNUI7QUFDMkI7QUFDdkI7QUFFa0I7QUFDUDtBQUNFO0FBSXZDLE1BQU1hLFlBQWdDO1FBQUMsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFTO0lBRTNDLE1BQU0sRUFDSmUsTUFBTUMsWUFBWSxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWCxHQUFHWiwrREFBUUEsQ0FBQztRQUNYYSxTQUFTO1lBQ1AsSUFBSSxDQUFDUCxPQUFPLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHLE1BQU1QLDZDQUFLQSxDQUFDYSxHQUFHLENBQUMsaUJBQXVCLE9BQU5SO1lBQ2xELE9BQU9FO1FBR1Q7UUFDQU8sVUFBVTtZQUFDO1NBQWU7UUFDMUJDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLFVBQVViLHNEQUFRQSxDQUFDO1FBQ3ZCTTtJQUNGLEdBQUc7SUFFSCxNQUFNUSxrQkFBa0IxQixrREFBV0EsQ0FBQztRQUNsQ3lCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsU0FBU2pCLDBEQUFTQTtRQWVkTztJQWRWLHFCQUNFLDhEQUFDZixnREFBT0E7UUFBQzBCLFdBQVU7OzBCQUNqQiw4REFBQ3ZCLHFEQUFZQTtnQkFDWHdCLE9BQU9mO2dCQUNQZ0IsZUFBZSxDQUFDQztvQkFDZGhCLFNBQVNnQjtvQkFDVEw7Z0JBQ0Y7Z0JBQ0FFLFdBQVU7Z0JBQ1ZJLGFBQVk7Ozs7OztZQUVibEIsTUFBTW1CLE1BQU0sR0FBRyxrQkFDZCw4REFBQzFCLG9EQUFXQTtnQkFBQ3FCLFdBQVU7O29CQUNwQlQsMkJBQWEsOERBQUNoQixxREFBWUE7a0NBQUM7Ozs7OztvQkFDMUJjLENBQUFBLENBQUFBLHVCQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNnQixNQUFNLGNBQXBCaEIsa0NBQUFBLHVCQUF3QixLQUFLLGtCQUM3Qiw4REFBQ2IscURBQVlBO3dCQUFDOEIsU0FBUTtrQ0FDbkJqQix5QkFBQUEsbUNBQUFBLGFBQWNrQixHQUFHLENBQUMsQ0FBQ0MsMEJBQ2xCLDhEQUFDOUIsb0RBQVdBO2dDQUVWdUIsT0FBT08sVUFBVUMsSUFBSTtnQ0FDckJDLFVBQVUsQ0FBQ0M7b0NBQ1RaLE9BQU9hLElBQUksQ0FBQyxNQUFRLE9BQUZEO29DQUNsQlosT0FBT2MsT0FBTztnQ0FDaEI7O2tEQUVBLDhEQUFDOUIsaUZBQUtBO3dDQUFDaUIsV0FBVTs7Ozs7O2tEQUNqQiw4REFBQ2M7d0NBQUVDLE1BQU0sTUFBcUIsT0FBZlAsVUFBVUMsSUFBSTs7NENBQUk7NENBQUdELFVBQVVDLElBQUk7Ozs7Ozs7OytCQVI3Q0QsVUFBVVEsRUFBRTs7Ozs7Ozs7O29DQVlyQjs7Ozs7OzRCQUVKOzs7Ozs7O0FBR1Y7R0FoRU0vQjs7UUFRQUwsMkRBQVFBO1FBb0JHRSxzREFBU0E7OztLQTVCcEJHO0FBa0VOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3g/MjE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ29tbWFuZCxcbiAgQ29tbWFuZEVtcHR5LFxuICBDb21tYW5kR3JvdXAsXG4gIENvbW1hbmRJbnB1dCxcbiAgQ29tbWFuZEl0ZW0sXG4gIENvbW1hbmRMaXN0LFxufSBmcm9tIFwiLi91aS9Db21tYW5kXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFByaXNtYSwgU3VicmVkZGl0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XG5cbmludGVyZmFjZSBTZWFyY2hCYXJQcm9wcyB7fVxuXG5jb25zdCBTZWFyY2hCYXI6IEZDPFNlYXJjaEJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHF1ZXJ5UmVzdWx0cyxcbiAgICByZWZldGNoLFxuICAgIGlzRmV0Y2hlZCxcbiAgICBpc0ZldGNoaW5nLFxuICB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghaW5wdXQpIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3NlYXJjaD9xPSR7aW5wdXR9YCk7XG4gICAgICByZXR1cm4gZGF0YSBhcyAoU3VicmVkZGl0ICYge1xuICAgICAgICBfY291bnQ6IFByaXNtYS5TdWJyZWRkaXRDb3VudE91dHB1dFR5cGU7XG4gICAgICB9KVtdO1xuICAgIH0sXG4gICAgcXVlcnlLZXk6IFtcInNlYXJjaC1xdWVyeVwiXSxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGRlYm91bmNlKGFzeW5jICgpID0+IHtcbiAgICByZWZldGNoKCk7XG4gIH0sIDMwMCk7XG5cbiAgY29uc3QgZGVib3VuY2VSZXF1ZXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJlcXVlc3QoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxDb21tYW5kIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbGcgYm9yZGVyIG1heC13LWxnIHotNTAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPENvbW1hbmRJbnB1dFxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh0ZXh0KSA9PiB7XG4gICAgICAgICAgc2V0SW5wdXQodGV4dCk7XG4gICAgICAgICAgZGVib3VuY2VSZXF1ZXN0KCk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb2N1czpib3JkZXItbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgcmluZy0wXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY29tbXVuaXRpZXMuLi5cIlxuICAgICAgLz5cbiAgICAgIHtpbnB1dC5sZW5ndGggPiAwID8gKFxuICAgICAgICA8Q29tbWFuZExpc3QgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgdG9wLWZ1bGwgaW5zZXQteC0wIHNoYWRvdyByb3VuZGVkLWItbWRcIj5cbiAgICAgICAgICB7aXNGZXRjaGVkICYmIDxDb21tYW5kRW1wdHk+Tm8gcmVzdWx0cyBmb3VuZC48L0NvbW1hbmRFbXB0eT59XG4gICAgICAgICAgeyhxdWVyeVJlc3VsdHM/Lmxlbmd0aCA/PyAwKSA+IDAgPyAoXG4gICAgICAgICAgICA8Q29tbWFuZEdyb3VwIGhlYWRpbmc9XCJDb21tdW5pdGllc1wiPlxuICAgICAgICAgICAgICB7cXVlcnlSZXN1bHRzPy5tYXAoKHN1YnJlZGRpdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDb21tYW5kSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtzdWJyZWRkaXQuaWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3VicmVkZGl0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yLyR7ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3IvJHtzdWJyZWRkaXQubmFtZX1gfT5yL3tzdWJyZWRkaXQubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9Db21tYW5kSXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NvbW1hbmRHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Db21tYW5kTGlzdD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvQ29tbWFuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQ29tbWFuZCIsIkNvbW1hbmRFbXB0eSIsIkNvbW1hbmRHcm91cCIsIkNvbW1hbmRJbnB1dCIsIkNvbW1hbmRJdGVtIiwiQ29tbWFuZExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlcnMiLCJkZWJvdW5jZSIsIlNlYXJjaEJhciIsImlucHV0Iiwic2V0SW5wdXQiLCJkYXRhIiwicXVlcnlSZXN1bHRzIiwicmVmZXRjaCIsImlzRmV0Y2hlZCIsImlzRmV0Y2hpbmciLCJxdWVyeUZuIiwiZ2V0IiwicXVlcnlLZXkiLCJlbmFibGVkIiwicmVxdWVzdCIsImRlYm91bmNlUmVxdWVzdCIsInJvdXRlciIsImNsYXNzTmFtZSIsInZhbHVlIiwib25WYWx1ZUNoYW5nZSIsInRleHQiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsImhlYWRpbmciLCJtYXAiLCJzdWJyZWRkaXQiLCJuYW1lIiwib25TZWxlY3QiLCJlIiwicHVzaCIsInJlZnJlc2giLCJhIiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar.tsx\n"));

/***/ })

});