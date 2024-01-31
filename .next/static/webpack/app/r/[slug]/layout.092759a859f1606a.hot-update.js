"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/layout",{

/***/ "(app-pages-browser)/./src/components/SubscribeLeaveToggle.tsx":
/*!*************************************************!*\
  !*** ./src/components/SubscribeLeaveToggle.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/index.js\");\n/* harmony import */ var _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/use-custom-toast */ \"(app-pages-browser)/./src/hooks/use-custom-toast.tsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-pages-browser)/./src/hooks/use-toast.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SubscribeLeaveToggle = (param)=>{\n    let { isSubscribed, subredditId, subredditName } = param;\n    _s();\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const { loginToast } = (0,_hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_3__.useCustomToast)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { mutate: subscribe, isLoading: isSubLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)({\n        mutationFn: async ()=>{\n            const payload = {\n                subredditId\n            };\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/subreddit/subscribe\", payload);\n            return data;\n        },\n        onError: (err)=>{\n            if (err instanceof axios__WEBPACK_IMPORTED_MODULE_8__.AxiosError) {\n                var _err_response;\n                if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {\n                    return loginToast();\n                }\n            }\n            return toast({\n                title: \"There was a problem\",\n                description: \"Something went wrong, please try again\",\n                variant: \"destructive\"\n            });\n        },\n        onSuccess: ()=>{\n            (0,react__WEBPACK_IMPORTED_MODULE_1__.startTransition)(()=>{\n                router.refresh();\n            });\n            return toast({\n                title: \"Subscribed\",\n                description: \"You are now subscribed to \".concat(subredditName)\n            });\n        }\n    });\n    return isSubscribed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        className: \"w-full mt-1 mb-4\",\n        children: \"Leave community\"\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SubscribeLeaveToggle.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        onClick: ()=>subscribe(),\n        isLoading: isSubLoading,\n        className: \"w-full mt-1 mb-4\",\n        children: \"Join to post\"\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/SubscribeLeaveToggle.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SubscribeLeaveToggle, \"fsy+O4HFWqIuINoJgZjNLSqqmik=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_4__.useToast,\n        _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_3__.useCustomToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation\n    ];\n});\n_c = SubscribeLeaveToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubscribeLeaveToggle);\nvar _c;\n$RefreshReg$(_c, \"SubscribeLeaveToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUxlYXZlVG9nZ2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNQO0FBQ2U7QUFFVjtBQUNnQjtBQUNiO0FBQ0Q7QUFRNUMsTUFBTVEsdUJBQXNEO1FBQUMsRUFDM0RDLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxhQUFhLEVBQ2Q7O0lBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR04sMERBQVFBO0lBQzFCLE1BQU0sRUFBRU8sVUFBVSxFQUFFLEdBQUdSLHVFQUFjQTtJQUNyQyxNQUFNUyxTQUFTUCwwREFBU0E7SUFFeEIsTUFBTSxFQUFFUSxRQUFRQyxTQUFTLEVBQUVDLFdBQVdDLFlBQVksRUFBRSxHQUFHaEIsa0VBQVdBLENBQUM7UUFDakVpQixZQUFZO1lBQ1YsTUFBTUMsVUFBdUM7Z0JBQzNDVjtZQUNGO1lBRUEsTUFBTSxFQUFFVyxJQUFJLEVBQUUsR0FBRyxNQUFNbEIsNkNBQUtBLENBQUNtQixJQUFJLENBQUMsNEJBQTRCRjtZQUM5RCxPQUFPQztRQUNUO1FBQ0FFLFNBQVMsQ0FBQ0M7WUFDUixJQUFJQSxlQUFlcEIsNkNBQVVBLEVBQUU7b0JBQ3pCb0I7Z0JBQUosSUFBSUEsRUFBQUEsZ0JBQUFBLElBQUlDLFFBQVEsY0FBWkQsb0NBQUFBLGNBQWNFLE1BQU0sTUFBSyxLQUFLO29CQUNoQyxPQUFPYjtnQkFDVDtZQUNGO1lBRUEsT0FBT0QsTUFBTTtnQkFDWGUsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsU0FBUztZQUNYO1FBQ0Y7UUFDQUMsV0FBVztZQUNUOUIsc0RBQWVBLENBQUM7Z0JBQ2RjLE9BQU9pQixPQUFPO1lBQ2hCO1lBQ0EsT0FBT25CLE1BQU07Z0JBQ1hlLE9BQU87Z0JBQ1BDLGFBQWEsNkJBQTJDLE9BQWRqQjtZQUM1QztRQUNGO0lBQ0Y7SUFDQSxPQUFPRiw2QkFDTCw4REFBQ1IsOENBQU1BO1FBQUMrQixXQUFVO2tCQUFtQjs7Ozs7a0NBRXJDLDhEQUFDL0IsOENBQU1BO1FBQ0xnQyxTQUFTLElBQU1qQjtRQUNmQyxXQUFXQztRQUNYYyxXQUFVO2tCQUNYOzs7Ozs7QUFJTDtHQXBETXhCOztRQUtjRixzREFBUUE7UUFDSEQsbUVBQWNBO1FBQ3RCRSxzREFBU0E7UUFFK0JMLDhEQUFXQTs7O0tBVDlETTtBQXNETiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUxlYXZlVG9nZ2xlLnRzeD8wZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgRkMsIHN0YXJ0VHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFN1YnNjcmliZVRvU3VicmVkZGl0UGF5bG9hZCB9IGZyb20gXCJAL2xpYi92YWxpZGF0b3JzL3N1YnJlZGRpdFwiO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUN1c3RvbVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLWN1c3RvbS10b2FzdFwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9ob29rcy91c2UtdG9hc3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFN1YnNjcmliZUxlYXZlVG9nZ2xlUHJvcHMge1xuICBpc1N1YnNjcmliZWQ6IGJvb2xlYW47XG4gIHN1YnJlZGRpdElkOiBzdHJpbmc7XG4gIHN1YnJlZGRpdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgU3Vic2NyaWJlTGVhdmVUb2dnbGU6IEZDPFN1YnNjcmliZUxlYXZlVG9nZ2xlUHJvcHM+ID0gKHtcbiAgaXNTdWJzY3JpYmVkLFxuICBzdWJyZWRkaXRJZCxcbiAgc3VicmVkZGl0TmFtZSxcbn0pID0+IHtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgeyBsb2dpblRvYXN0IH0gPSB1c2VDdXN0b21Ub2FzdCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IG11dGF0ZTogc3Vic2NyaWJlLCBpc0xvYWRpbmc6IGlzU3ViTG9hZGluZyB9ID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQ6IFN1YnNjcmliZVRvU3VicmVkZGl0UGF5bG9hZCA9IHtcbiAgICAgICAgc3VicmVkZGl0SWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3N1YnJlZGRpdC9zdWJzY3JpYmVcIiwgcGF5bG9hZCk7XG4gICAgICByZXR1cm4gZGF0YSBhcyBzdHJpbmc7XG4gICAgfSxcbiAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvcikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIHJldHVybiBsb2dpblRvYXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiVGhlcmUgd2FzIGEgcHJvYmxlbVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpblwiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgc3RhcnRUcmFuc2l0aW9uKCgpID0+IHtcbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiU3Vic2NyaWJlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFlvdSBhcmUgbm93IHN1YnNjcmliZWQgdG8gJHtzdWJyZWRkaXROYW1lfWAsXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGlzU3Vic2NyaWJlZCA/IChcbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBtdC0xIG1iLTRcIj5MZWF2ZSBjb21tdW5pdHk8L0J1dHRvbj5cbiAgKSA6IChcbiAgICA8QnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzdWJzY3JpYmUoKX1cbiAgICAgIGlzTG9hZGluZz17aXNTdWJMb2FkaW5nfVxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTEgbWItNFwiXG4gICAgPlxuICAgICAgSm9pbiB0byBwb3N0XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmVMZWF2ZVRvZ2dsZTtcbiJdLCJuYW1lcyI6WyJzdGFydFRyYW5zaXRpb24iLCJCdXR0b24iLCJ1c2VNdXRhdGlvbiIsImF4aW9zIiwiQXhpb3NFcnJvciIsInVzZUN1c3RvbVRvYXN0IiwidXNlVG9hc3QiLCJ1c2VSb3V0ZXIiLCJTdWJzY3JpYmVMZWF2ZVRvZ2dsZSIsImlzU3Vic2NyaWJlZCIsInN1YnJlZGRpdElkIiwic3VicmVkZGl0TmFtZSIsInRvYXN0IiwibG9naW5Ub2FzdCIsInJvdXRlciIsIm11dGF0ZSIsInN1YnNjcmliZSIsImlzTG9hZGluZyIsImlzU3ViTG9hZGluZyIsIm11dGF0aW9uRm4iLCJwYXlsb2FkIiwiZGF0YSIsInBvc3QiLCJvbkVycm9yIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsIm9uU3VjY2VzcyIsInJlZnJlc2giLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SubscribeLeaveToggle.tsx\n"));

/***/ })

});