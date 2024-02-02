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

/***/ "(app-pages-browser)/./src/components/post-vote/PostVoteClient.tsx":
/*!*****************************************************!*\
  !*** ./src/components/post-vote/PostVoteClient.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-custom-toast */ \"(app-pages-browser)/./src/hooks/use-custom-toast.tsx\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/hooks */ \"(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-previous/use-previous.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBigDown,ArrowBigUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-big-up.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBigDown,ArrowBigUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-big-down.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PostVoteClient = (param)=>{\n    let { postId, initialVotesAmt, initialVote } = param;\n    _s();\n    const { loginToast } = (0,_hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__.useCustomToast)();\n    const [votesAmt, setVotesAmt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialVotesAmt);\n    const [currentVote, setCurrentVote] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialVote);\n    const prevVote = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.usePrevious)(currentVote);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentVote(initialVote);\n    }, [\n        initialVote\n    ]);\n    console.log(votesAmt);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex sm:flex-col gap-4 sm:gap-0 pr-6 sm:w-20 pb-4 sm:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                size: \"sm\",\n                variant: \"ghost\",\n                \"aria-label\": \"upvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-emerald-500 fill-emerald-500\": currentVote === \"UP\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center py-2 font-medium text-sm text-zinc-900\",\n                children: votesAmt\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                size: \"sm\",\n                variant: \"ghost\",\n                \"aria-label\": \"downvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-red-500 fill-red-500\": currentVote === \"UP\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostVoteClient, \"QqJbxkmY0+xKUyirc/0BGzdk5JM=\", false, function() {\n    return [\n        _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__.useCustomToast,\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.usePrevious\n    ];\n});\n_c = PostVoteClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostVoteClient);\nvar _c;\n$RefreshReg$(_c, \"PostVoteClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3Qtdm90ZS9Qb3N0Vm90ZUNsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBEO0FBQ2I7QUFFRztBQUNWO0FBQ2tCO0FBQ3ZCO0FBUWpDLE1BQU1RLGlCQUEwQztRQUFDLEVBQy9DQyxNQUFNLEVBQ05DLGVBQWUsRUFDZkMsV0FBVyxFQUNaOztJQUNDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdaLHVFQUFjQTtJQUNyQyxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQVNPO0lBQ2pELE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQ1E7SUFDL0MsTUFBTU0sV0FBV2hCLDJEQUFXQSxDQUFDYztJQUU3QmIsZ0RBQVNBLENBQUM7UUFDUmMsZUFBZUw7SUFDakIsR0FBRztRQUFDQTtLQUFZO0lBQ2hCTyxRQUFRQyxHQUFHLENBQUNOO0lBQ1oscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsOENBQU1BO2dCQUFDa0IsTUFBSztnQkFBS0MsU0FBUTtnQkFBUUMsY0FBVzswQkFDM0MsNEVBQUNsQixtR0FBVUE7b0JBQ1RlLFdBQVdkLDhDQUFFQSxDQUFDLHlCQUF5Qjt3QkFDckMscUNBQXFDUSxnQkFBZ0I7b0JBQ3ZEOzs7Ozs7Ozs7OzswQkFJSiw4REFBQ1U7Z0JBQUVKLFdBQVU7MEJBQ1ZSOzs7Ozs7MEJBR0gsOERBQUNULDhDQUFNQTtnQkFBQ2tCLE1BQUs7Z0JBQUtDLFNBQVE7Z0JBQVFDLGNBQVc7MEJBQzNDLDRFQUFDbkIsbUdBQVlBO29CQUNYZ0IsV0FBV2QsOENBQUVBLENBQUMseUJBQXlCO3dCQUNyQyw2QkFBNkJRLGdCQUFnQjtvQkFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FyQ01QOztRQUttQlIsbUVBQWNBO1FBR3BCQyx1REFBV0E7OztLQVJ4Qk87QUF1Q04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdC12b3RlL1Bvc3RWb3RlQ2xpZW50LnRzeD9mMDM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VDdXN0b21Ub2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS1jdXN0b20tdG9hc3RcIjtcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5pbXBvcnQgeyBWb3RlVHlwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi91aS9CdXR0b25cIjtcbmltcG9ydCB7IEFycm93QmlnRG93biwgQXJyb3dCaWdVcCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBQb3N0Vm90ZUNsaWVudFByb3BzIHtcbiAgcG9zdElkOiBzdHJpbmc7XG4gIGluaXRpYWxWb3Rlc0FtdDogbnVtYmVyO1xuICBpbml0aWFsVm90ZT86IFZvdGVUeXBlIHwgbnVsbDtcbn1cblxuY29uc3QgUG9zdFZvdGVDbGllbnQ6IEZDPFBvc3RWb3RlQ2xpZW50UHJvcHM+ID0gKHtcbiAgcG9zdElkLFxuICBpbml0aWFsVm90ZXNBbXQsXG4gIGluaXRpYWxWb3RlLFxufSkgPT4ge1xuICBjb25zdCB7IGxvZ2luVG9hc3QgfSA9IHVzZUN1c3RvbVRvYXN0KCk7XG4gIGNvbnN0IFt2b3Rlc0FtdCwgc2V0Vm90ZXNBbXRdID0gdXNlU3RhdGU8bnVtYmVyPihpbml0aWFsVm90ZXNBbXQpO1xuICBjb25zdCBbY3VycmVudFZvdGUsIHNldEN1cnJlbnRWb3RlXSA9IHVzZVN0YXRlKGluaXRpYWxWb3RlKTtcbiAgY29uc3QgcHJldlZvdGUgPSB1c2VQcmV2aW91cyhjdXJyZW50Vm90ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50Vm90ZShpbml0aWFsVm90ZSk7XG4gIH0sIFtpbml0aWFsVm90ZV0pO1xuICBjb25zb2xlLmxvZyh2b3Rlc0FtdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNtOmZsZXgtY29sIGdhcC00IHNtOmdhcC0wIHByLTYgc206dy0yMCBwYi00IHNtOnBiLTBcIj5cbiAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImdob3N0XCIgYXJpYS1sYWJlbD1cInVwdm90ZVwiPlxuICAgICAgICA8QXJyb3dCaWdVcFxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJoLTUgdy01IHRleHQtemluYy03MDBcIiwge1xuICAgICAgICAgICAgXCJ0ZXh0LWVtZXJhbGQtNTAwIGZpbGwtZW1lcmFsZC01MDBcIjogY3VycmVudFZvdGUgPT09IFwiVVBcIixcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yIGZvbnQtbWVkaXVtIHRleHQtc20gdGV4dC16aW5jLTkwMFwiPlxuICAgICAgICB7dm90ZXNBbXR9XG4gICAgICA8L3A+XG5cbiAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImdob3N0XCIgYXJpYS1sYWJlbD1cImRvd252b3RlXCI+XG4gICAgICAgIDxBcnJvd0JpZ0Rvd25cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFwiaC01IHctNSB0ZXh0LXppbmMtNzAwXCIsIHtcbiAgICAgICAgICAgIFwidGV4dC1yZWQtNTAwIGZpbGwtcmVkLTUwMFwiOiBjdXJyZW50Vm90ZSA9PT0gXCJVUFwiLFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Vm90ZUNsaWVudDtcbiJdLCJuYW1lcyI6WyJ1c2VDdXN0b21Ub2FzdCIsInVzZVByZXZpb3VzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJBcnJvd0JpZ0Rvd24iLCJBcnJvd0JpZ1VwIiwiY24iLCJQb3N0Vm90ZUNsaWVudCIsInBvc3RJZCIsImluaXRpYWxWb3Rlc0FtdCIsImluaXRpYWxWb3RlIiwibG9naW5Ub2FzdCIsInZvdGVzQW10Iiwic2V0Vm90ZXNBbXQiLCJjdXJyZW50Vm90ZSIsInNldEN1cnJlbnRWb3RlIiwicHJldlZvdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/post-vote/PostVoteClient.tsx\n"));

/***/ })

});