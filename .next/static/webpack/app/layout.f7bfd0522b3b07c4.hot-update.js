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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9017542f1010\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MzUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjkwMTc1NDJmMTAxMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Command */ \"(app-pages-browser)/./src/components/ui/Command.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchBar = (param)=>{\n    let {} = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { data: queryResults, refetch, isFetched, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryFn: async ()=>{\n            if (!input) return [];\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/search?q=\".concat(input));\n            return data;\n        },\n        queryKey: [\n            \"search-query\"\n        ],\n        enabled: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.Command, {\n        className: \"relative rounded-lg border max-w-lg z-50 overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandInput, {\n                value: input,\n                onValueChange: (text)=>{\n                    setInput(text);\n                },\n                className: \"outline-none border-none focus:border-none focus:outline-none ring-0\",\n                placeholder: \"Search communities...\"\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            input.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandList, {\n                className: \"absolute bg-white top-full inset-x-0 shadow rounded-b-md\",\n                children: isFetched !== null && isFetched !== void 0 ? isFetched : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandEmpty, {\n                    children: \"No results found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"TyYxdgHPwQ0xdGVXwbsYUCvylsA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXFDO0FBQzJDO0FBQy9CO0FBQ3ZCO0FBSzFCLE1BQU1PLFlBQWdDO1FBQUMsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFTO0lBRTNDLE1BQU0sRUFDSlUsTUFBTUMsWUFBWSxFQUNsQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFVBQVUsRUFDWCxHQUFHVCwrREFBUUEsQ0FBQztRQUNYVSxTQUFTO1lBQ1AsSUFBSSxDQUFDUCxPQUFPLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHLE1BQU1KLDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsaUJBQXVCLE9BQU5SO1lBQ2xELE9BQU9FO1FBR1Q7UUFDQU8sVUFBVTtZQUFDO1NBQWU7UUFDMUJDLFNBQVM7SUFDWDtJQUNBLHFCQUNFLDhEQUFDakIsZ0RBQU9BO1FBQUNrQixXQUFVOzswQkFDakIsOERBQUNoQixxREFBWUE7Z0JBQ1hpQixPQUFPWjtnQkFDUGEsZUFBZSxDQUFDQztvQkFDZGIsU0FBU2E7Z0JBQ1g7Z0JBQ0FILFdBQVU7Z0JBQ1ZJLGFBQVk7Ozs7OztZQUViZixNQUFNZ0IsTUFBTSxHQUFHLGtCQUNkLDhEQUFDcEIsb0RBQVdBO2dCQUFDZSxXQUFVOzBCQUNwQk4sc0JBQUFBLHVCQUFBQSwwQkFBYSw4REFBQ1gscURBQVlBOzhCQUFDOzs7Ozs7Ozs7OzRCQUU1Qjs7Ozs7OztBQUdWO0dBcENNSzs7UUFRQUYsMkRBQVFBOzs7S0FSUkU7QUFzQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeD8yMTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1hbmQsIENvbW1hbmRFbXB0eSwgQ29tbWFuZElucHV0LCBDb21tYW5kTGlzdCB9IGZyb20gXCIuL3VpL0NvbW1hbmRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUHJpc21hLCBTdWJyZWRkaXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIFNlYXJjaEJhclByb3BzIHt9XG5cbmNvbnN0IFNlYXJjaEJhcjogRkM8U2VhcmNoQmFyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogcXVlcnlSZXN1bHRzLFxuICAgIHJlZmV0Y2gsXG4gICAgaXNGZXRjaGVkLFxuICAgIGlzRmV0Y2hpbmcsXG4gIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFpbnB1dCkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvc2VhcmNoP3E9JHtpbnB1dH1gKTtcbiAgICAgIHJldHVybiBkYXRhIGFzIFN1YnJlZGRpdCAmIHtcbiAgICAgICAgX2NvdW50OiBQcmlzbWEuU3VicmVkZGl0Q291bnRPdXRwdXRUeXBlO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2gtcXVlcnlcIl0sXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxDb21tYW5kIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbGcgYm9yZGVyIG1heC13LWxnIHotNTAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPENvbW1hbmRJbnB1dFxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh0ZXh0KSA9PiB7XG4gICAgICAgICAgc2V0SW5wdXQodGV4dCk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBib3JkZXItbm9uZSBmb2N1czpib3JkZXItbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgcmluZy0wXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY29tbXVuaXRpZXMuLi5cIlxuICAgICAgLz5cbiAgICAgIHtpbnB1dC5sZW5ndGggPiAwID8gKFxuICAgICAgICA8Q29tbWFuZExpc3QgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgdG9wLWZ1bGwgaW5zZXQteC0wIHNoYWRvdyByb3VuZGVkLWItbWRcIj5cbiAgICAgICAgICB7aXNGZXRjaGVkID8/IDxDb21tYW5kRW1wdHk+Tm8gcmVzdWx0cyBmb3VuZC48L0NvbW1hbmRFbXB0eT59XG4gICAgICAgIDwvQ29tbWFuZExpc3Q+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0NvbW1hbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb21tYW5kIiwiQ29tbWFuZEVtcHR5IiwiQ29tbWFuZElucHV0IiwiQ29tbWFuZExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwiU2VhcmNoQmFyIiwiaW5wdXQiLCJzZXRJbnB1dCIsImRhdGEiLCJxdWVyeVJlc3VsdHMiLCJyZWZldGNoIiwiaXNGZXRjaGVkIiwiaXNGZXRjaGluZyIsInF1ZXJ5Rm4iLCJnZXQiLCJxdWVyeUtleSIsImVuYWJsZWQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar.tsx\n"));

/***/ })

});