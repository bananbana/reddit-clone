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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fb57a31afd48\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MzUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImZiNTdhMzFhZmQ0OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Command */ \"(app-pages-browser)/./src/components/ui/Command.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SearchBar = (param)=>{\n    let {} = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryFn: async ()=>{},\n        queryKey: [\n            \"search-query\"\n        ],\n        enabled: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.Command, {\n        className: \"relative rounded-lg border max-w-lg z-50 overflow-visible\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Command__WEBPACK_IMPORTED_MODULE_2__.CommandInput, {\n            value: input,\n            onValueChange: (text)=>{\n                setInput(text);\n            },\n            className: \"outline-none border-none focus:border-none focus:outline-none ring-0\",\n            placeholder: \"Search communities...\"\n        }, void 0, false, {\n            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SearchBar.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"QkiE9GOn9/7XBe6o87QjI+k2uF0=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFcUM7QUFDZ0I7QUFDSjtBQUlqRCxNQUFNSSxZQUFnQztRQUFDLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBUztJQUUzQyxNQUFNLEVBQUUsR0FBR0csK0RBQVFBLENBQUM7UUFDbEJJLFNBQVMsV0FBYTtRQUN0QkMsVUFBVTtZQUFDO1NBQWU7UUFDMUJDLFNBQVM7SUFDWDtJQUNBLHFCQUNFLDhEQUFDUixnREFBT0E7UUFBQ1MsV0FBVTtrQkFDakIsNEVBQUNSLHFEQUFZQTtZQUNYUyxPQUFPTjtZQUNQTyxlQUFlLENBQUNDO2dCQUNkUCxTQUFTTztZQUNYO1lBQ0FILFdBQVU7WUFDVkksYUFBWTs7Ozs7Ozs7Ozs7QUFJcEI7R0FwQk1WOztRQUdPRCwyREFBUUE7OztLQUhmQztBQXNCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4PzIxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tbWFuZCwgQ29tbWFuZElucHV0IH0gZnJvbSBcIi4vdWkvQ29tbWFuZFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5cbmludGVyZmFjZSBTZWFyY2hCYXJQcm9wcyB7fVxuXG5jb25zdCBTZWFyY2hCYXI6IEZDPFNlYXJjaEJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3Qge30gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge30sXG4gICAgcXVlcnlLZXk6IFtcInNlYXJjaC1xdWVyeVwiXSxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPENvbW1hbmQgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBib3JkZXIgbWF4LXctbGcgei01MCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICA8Q29tbWFuZElucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25WYWx1ZUNoYW5nZT17KHRleHQpID0+IHtcbiAgICAgICAgICBzZXRJbnB1dCh0ZXh0KTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGJvcmRlci1ub25lIGZvY3VzOmJvcmRlci1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSByaW5nLTBcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjb21tdW5pdGllcy4uLlwiXG4gICAgICAvPlxuICAgIDwvQ29tbWFuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbW1hbmQiLCJDb21tYW5kSW5wdXQiLCJ1c2VRdWVyeSIsIlNlYXJjaEJhciIsImlucHV0Iiwic2V0SW5wdXQiLCJxdWVyeUZuIiwicXVlcnlLZXkiLCJlbmFibGVkIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwidGV4dCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar.tsx\n"));

/***/ })

});