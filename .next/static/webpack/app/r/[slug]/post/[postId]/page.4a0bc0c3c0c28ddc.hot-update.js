"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/post/[postId]/page",{

/***/ "(app-pages-browser)/./src/components/CreateComment.tsx":
/*!******************************************!*\
  !*** ./src/components/CreateComment.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Label */ \"(app-pages-browser)/./src/components/ui/Label.tsx\");\n/* harmony import */ var _ui_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Textarea */ \"(app-pages-browser)/./src/components/ui/Textarea.tsx\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CreateComment = (param)=>{\n    let {} = param;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({\n        mutationFn: async ()=>{\n            const payload = {\n                postId,\n                text,\n                replyToId\n            };\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid w-full gap-1.5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                htmlFor: \"comment\",\n                children: \"Your comment\"\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                        id: \"comment\",\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value),\n                        rows: 1,\n                        placeholder: \"What are your thoughts?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            children: \"Post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/CreateComment.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateComment, \"Gjt8zj9jOQvcTT/G0Hs9hfZLe58=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = CreateComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateComment);\nvar _c;\n$RefreshReg$(_c, \"CreateComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUNvbW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFcUM7QUFDRjtBQUNNO0FBQ0o7QUFDZTtBQUtwRCxNQUFNSyxnQkFBd0M7UUFBQyxFQUFFOztJQUMvQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQVM7SUFFM0MsTUFBTSxFQUFFLEdBQUdJLGtFQUFXQSxDQUFDO1FBQ3JCSSxZQUFZO1lBQ1YsTUFBTUMsVUFBMEI7Z0JBQzlCQztnQkFDQUM7Z0JBQ0FDO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDYiw0Q0FBS0E7Z0JBQUNjLFNBQVE7MEJBQVU7Ozs7OzswQkFDekIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1osa0RBQVFBO3dCQUNQYyxJQUFHO3dCQUNIQyxPQUFPWDt3QkFDUFksVUFBVSxDQUFDQyxJQUFNWixTQUFTWSxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3hDSSxNQUFNO3dCQUNOQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNUO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWCw4Q0FBTUE7c0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBN0JNRTs7UUFHT0QsOERBQVdBOzs7S0FIbEJDO0FBK0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUNvbW1lbnQudHN4PzkxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi91aS9MYWJlbFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi91aS9UZXh0YXJlYVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IENvbW1lbnRSZXF1ZXN0IH0gZnJvbSBcIkAvbGliL3ZhbGlkYXRvcnMvY29tbWVudFwiO1xuXG5pbnRlcmZhY2UgQ3JlYXRlQ29tbWVudFByb3BzIHt9XG5cbmNvbnN0IENyZWF0ZUNvbW1lbnQ6IEZDPENyZWF0ZUNvbW1lbnRQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IHt9ID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQ6IENvbW1lbnRSZXF1ZXN0ID0ge1xuICAgICAgICBwb3N0SWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHJlcGx5VG9JZCxcbiAgICAgIH07XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBnYXAtMS41XCI+XG4gICAgICA8TGFiZWwgaHRtbEZvcj1cImNvbW1lbnRcIj5Zb3VyIGNvbW1lbnQ8L0xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGlkPVwiY29tbWVudFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJvd3M9ezF9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3VyIHRob3VnaHRzP1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPEJ1dHRvbj5Qb3N0PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGFiZWwiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInVzZU11dGF0aW9uIiwiQ3JlYXRlQ29tbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJtdXRhdGlvbkZuIiwicGF5bG9hZCIsInBvc3RJZCIsInRleHQiLCJyZXBseVRvSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJvd3MiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CreateComment.tsx\n"));

/***/ })

});