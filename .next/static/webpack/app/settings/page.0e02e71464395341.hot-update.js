"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/page",{

/***/ "(app-pages-browser)/./src/components/UserNameForm.tsx":
/*!*****************************************!*\
  !*** ./src/components/UserNameForm.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_validators_username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/validators/username */ \"(app-pages-browser)/./src/lib/validators/username.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst UserNameForm = (param)=>{\n    let { user } = param;\n    _s();\n    const { handleSubmit, register, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_lib_validators_username__WEBPACK_IMPORTED_MODULE_1__.usernameValidator),\n        defaultValues: {\n            name: (user === null || user === void 0 ? void 0 : user.username) || \"\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(()=>{}),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                        children: \"Your username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/UserNameForm.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                        children: \"Please enter a display name you are comfortable with.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/UserNameForm.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/UserNameForm.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/UserNameForm.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/UserNameForm.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserNameForm, \"APLE1gV/4Xh45wrW48lVbDw+gwQ=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = UserNameForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNameForm);\nvar _c;\n$RefreshReg$(_c, \"UserNameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VzZXJOYW1lRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFK0U7QUFDekI7QUFHWjtBQUMrQjtBQU16RSxNQUFNTyxlQUFzQztRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDbkQsTUFBTSxFQUNKQyxZQUFZLEVBQ1pDLFFBQVEsRUFDUkMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR1Ysd0RBQU9BLENBQWtCO1FBQzNCVyxVQUFVWixvRUFBV0EsQ0FBQ0QsdUVBQWlCQTtRQUN2Q2MsZUFBZTtZQUNiQyxNQUFNUCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1RLFFBQVEsS0FBSTtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVULGFBQWEsS0FBTztrQkFDbEMsNEVBQUNOLDBDQUFJQTtzQkFDSCw0RUFBQ0UsZ0RBQVVBOztrQ0FDVCw4REFBQ0MsK0NBQVNBO2tDQUFDOzs7Ozs7a0NBQ1gsOERBQUNGLHFEQUFlQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQjtHQXhCTUc7O1FBS0FMLG9EQUFPQTs7O0tBTFBLO0FBMEJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJOYW1lRm9ybS50c3g/MTNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgVXNlcm5hbWVSZXF1ZXN0LCB1c2VybmFtZVZhbGlkYXRvciB9IGZyb20gXCJAL2xpYi92YWxpZGF0b3JzL3VzZXJuYW1lXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkRGVzY3JpcHRpb24sIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCIuL3VpL2NhcmRcIjtcblxuaW50ZXJmYWNlIFVzZXJOYW1lRm9ybVByb3BzIHtcbiAgdXNlcjogUGljazxVc2VyLCBcImlkXCIgfCBcInVzZXJuYW1lXCI+O1xufVxuXG5jb25zdCBVc2VyTmFtZUZvcm06IEZDPFVzZXJOYW1lRm9ybVByb3BzPiA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08VXNlcm5hbWVSZXF1ZXN0Pih7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKHVzZXJuYW1lVmFsaWRhdG9yKSxcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBuYW1lOiB1c2VyPy51c2VybmFtZSB8fCBcIlwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgoKSA9PiB7fSl9PlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkVGl0bGU+WW91ciB1c2VybmFtZTwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSBkaXNwbGF5IG5hbWUgeW91IGFyZSBjb21mb3J0YWJsZSB3aXRoLlxuICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hbWVGb3JtO1xuIl0sIm5hbWVzIjpbInVzZXJuYW1lVmFsaWRhdG9yIiwiem9kUmVzb2x2ZXIiLCJ1c2VGb3JtIiwiQ2FyZCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJVc2VyTmFtZUZvcm0iLCJ1c2VyIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwidXNlcm5hbWUiLCJmb3JtIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UserNameForm.tsx\n"));

/***/ })

});