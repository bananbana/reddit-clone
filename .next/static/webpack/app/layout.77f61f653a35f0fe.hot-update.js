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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cef58101757d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MzUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNlZjU4MTAxNzU3ZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Command */ \"(app-pages-browser)/./src/components/ui/Command.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchBar = (param)=>{\n    let {} = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data: queryResults, refetch, isFetched, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryFn: async ()=>{\n            if (!input) return [];\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/search?q=\".concat(input));\n            return data;\n        },\n        queryKey: [\n            \"search-query\"\n        ],\n        enabled: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.Command, {\n        className: \"relative rounded-lg border max-w-lg z-50 overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandInput, {\n                value: input,\n                onValueChange: (text)=>{\n                    setInput(text);\n                },\n                className: \"outline-none border-none focus:border-none focus:outline-none ring-0\",\n                placeholder: \"Search communities...\"\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            input.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandList, {\n                className: \"absolute bg-white top-full inset-x-0 shadow rounded-b-md\"\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"TyYxdgHPwQ0xdGVXwbsYUCvylsA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXFDO0FBQzZCO0FBQ2pCO0FBQ3ZCO0FBSzFCLE1BQU1NLFlBQWdDO1FBQUMsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFTO0lBRTNDLE1BQU0sRUFDSlMsTUFBTUMsWUFBWSxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWCxHQUFHVCwrREFBUUEsQ0FBQztRQUNYVSxTQUFTO1lBQ1AsSUFBSSxDQUFDUCxPQUFPLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHLE1BQU1KLDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsaUJBQXVCLE9BQU5SO1lBQ2xELE9BQU9FO1FBR1Q7UUFDQU8sVUFBVTtZQUFDO1NBQWU7UUFDMUJDLFNBQVM7SUFDWDtJQUNBLHFCQUNFLDhEQUFDaEIsZ0RBQU9BO1FBQUNpQixXQUFVOzswQkFDakIsOERBQUNoQixxREFBWUE7Z0JBQ1hpQixPQUFPWjtnQkFDUGEsZUFBZSxDQUFDQztvQkFDZGIsU0FBU2E7Z0JBQ1g7Z0JBQ0FILFdBQVU7Z0JBQ1ZJLGFBQVk7Ozs7OztZQUViZixNQUFNZ0IsTUFBTSxHQUFHLGtCQUNkLDhEQUFDcEIsb0RBQVdBO2dCQUFDZSxXQUFVOzs7Ozs0QkFDckI7Ozs7Ozs7QUFHVjtHQWxDTVo7O1FBUUFGLDJEQUFRQTs7O0tBUlJFO0FBb0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3g/MjE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21tYW5kLCBDb21tYW5kSW5wdXQsIENvbW1hbmRMaXN0IH0gZnJvbSBcIi4vdWkvQ29tbWFuZFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBQcmlzbWEsIFN1YnJlZGRpdCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbnRlcmZhY2UgU2VhcmNoQmFyUHJvcHMge31cblxuY29uc3QgU2VhcmNoQmFyOiBGQzxTZWFyY2hCYXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiBxdWVyeVJlc3VsdHMsXG4gICAgcmVmZXRjaCxcbiAgICBpc0ZldGNoZWQsXG4gICAgaXNGZXRjaGluZyxcbiAgfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIWlucHV0KSByZXR1cm4gW107XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9zZWFyY2g/cT0ke2lucHV0fWApO1xuICAgICAgcmV0dXJuIGRhdGEgYXMgU3VicmVkZGl0ICYge1xuICAgICAgICBfY291bnQ6IFByaXNtYS5TdWJyZWRkaXRDb3VudE91dHB1dFR5cGU7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcXVlcnlLZXk6IFtcInNlYXJjaC1xdWVyeVwiXSxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPENvbW1hbmQgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBib3JkZXIgbWF4LXctbGcgei01MCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICA8Q29tbWFuZElucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25WYWx1ZUNoYW5nZT17KHRleHQpID0+IHtcbiAgICAgICAgICBzZXRJbnB1dCh0ZXh0KTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvY3VzOmJvcmRlci1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSByaW5nLTBcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjb21tdW5pdGllcy4uLlwiXG4gICAgICAvPlxuICAgICAge2lucHV0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxDb21tYW5kTGlzdCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSB0b3AtZnVsbCBpbnNldC14LTAgc2hhZG93IHJvdW5kZWQtYi1tZFwiPjwvQ29tbWFuZExpc3Q+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0NvbW1hbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb21tYW5kIiwiQ29tbWFuZElucHV0IiwiQ29tbWFuZExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwiU2VhcmNoQmFyIiwiaW5wdXQiLCJzZXRJbnB1dCIsImRhdGEiLCJxdWVyeVJlc3VsdHMiLCJyZWZldGNoIiwiaXNGZXRjaGVkIiwiaXNGZXRjaGluZyIsInF1ZXJ5Rm4iLCJnZXQiLCJxdWVyeUtleSIsImVuYWJsZWQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar.tsx\n"));

/***/ })

});