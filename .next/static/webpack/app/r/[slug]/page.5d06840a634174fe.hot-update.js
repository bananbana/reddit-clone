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

/***/ "(app-pages-browser)/./src/components/MiniCreatePost.tsx":
/*!*******************************************!*\
  !*** ./src/components/MiniCreatePost.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _ui_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Input */ \"(app-pages-browser)/./src/components/ui/Input.tsx\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_Link2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,Link2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.js\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_Link2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,Link2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/link-2.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MiniCreatePost = (param)=>{\n    let { session } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"overflow-hidden rounded-md bg-white shadow list-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full px-6 py-4 flex justify-between gap-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            user: {\n                                name: (session === null || session === void 0 ? void 0 : session.user.name) || null,\n                                image: (session === null || session === void 0 ? void 0 : session.user.image) || null\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute top-1/2 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                    readOnly: true,\n                    onClick: ()=>router.push(pathname + \"/submit\"),\n                    placeholder: \"Create post\"\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"ghost\",\n                    onClick: ()=>router.push(pathname + \"/submit\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImageIcon_Link2_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"text-zinc-600\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    variant: \"ghost\",\n                    onClick: ()=>router.push(pathname + \"/submit\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ImageIcon_Link2_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"text-zinc-600\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/MiniCreatePost.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MiniCreatePost, \"gA9e4WsoP6a20xDgQgrFkfMP8lc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = MiniCreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniCreatePost);\nvar _c;\n$RefreshReg$(_c, \"MiniCreatePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01pbmlDcmVhdGVQb3N0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUd5RDtBQUVuQjtBQUNIO0FBQ0U7QUFFVztBQU1oRCxNQUFNTyxpQkFBMEM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7O0lBQzFELE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxXQUFXViw0REFBV0E7SUFFNUIscUJBQ0UsOERBQUNXO1FBQUdDLFdBQVU7a0JBQ1osNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNWLG1EQUFVQTs0QkFDVFksTUFBTTtnQ0FDSkMsTUFBTVAsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTTSxJQUFJLENBQUNDLElBQUksS0FBSTtnQ0FDNUJDLE9BQU9SLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU00sSUFBSSxDQUFDRSxLQUFLLEtBQUk7NEJBQ2hDOzs7Ozs7c0NBR0YsOERBQUNDOzRCQUFLTCxXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDVCw0Q0FBS0E7b0JBQ0plLFFBQVE7b0JBQ1JDLFNBQVMsSUFBTVYsT0FBT1csSUFBSSxDQUFDVixXQUFXO29CQUN0Q1csYUFBWTs7Ozs7OzhCQUVkLDhEQUFDakIsOENBQU1BO29CQUNMa0IsU0FBUTtvQkFDUkgsU0FBUyxJQUFNVixPQUFPVyxJQUFJLENBQUNWLFdBQVc7O3NDQUV0Qyw4REFBQ0wsMkZBQVNBOzRCQUFDTyxXQUFVOzs7Ozs7d0JBQW1COzs7Ozs7OzhCQUcxQyw4REFBQ1IsOENBQU1BO29CQUNMa0IsU0FBUTtvQkFDUkgsU0FBUyxJQUFNVixPQUFPVyxJQUFJLENBQUNWLFdBQVc7OEJBRXRDLDRFQUFDSiwyRkFBS0E7d0JBQUNNLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0F2Q01MOztRQUNXTixzREFBU0E7UUFDUEQsd0RBQVdBOzs7S0FGeEJPO0FBeUNOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01pbmlDcmVhdGVQb3N0LnRzeD85ZmQyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlckF2YXRhciBmcm9tIFwiLi9Vc2VyQXZhdGFyXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL3VpL0lucHV0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi91aS9CdXR0b25cIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBJbWFnZUljb24sIExpbmsyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgTWluaUNyZWF0ZVBvc3RQcm9wcyB7XG4gIHNlc3Npb246IFNlc3Npb24gfCBudWxsO1xufVxuXG5jb25zdCBNaW5pQ3JlYXRlUG9zdDogRkM8TWluaUNyZWF0ZVBvc3RQcm9wcz4gPSAoeyBzZXNzaW9uIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3cgbGlzdC1ub25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweC02IHB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxVc2VyQXZhdGFyXG4gICAgICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgICAgIG5hbWU6IHNlc3Npb24/LnVzZXIubmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgICBpbWFnZTogc2Vzc2lvbj8udXNlci5pbWFnZSB8fCBudWxsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC0wIHJvdW5kZWQtZnVsbCB3LTMgaC0zIGJnLWdyZWVuLTUwMCBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLXdoaXRlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChwYXRobmFtZSArIFwiL3N1Ym1pdFwiKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBwb3N0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gocGF0aG5hbWUgKyBcIi9zdWJtaXRcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VJY29uIGNsYXNzTmFtZT1cInRleHQtemluYy02MDBcIiAvPntcIiBcIn1cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gocGF0aG5hbWUgKyBcIi9zdWJtaXRcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluazIgY2xhc3NOYW1lPVwidGV4dC16aW5jLTYwMFwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlDcmVhdGVQb3N0O1xuIl0sIm5hbWVzIjpbInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiVXNlckF2YXRhciIsIklucHV0IiwiQnV0dG9uIiwiSW1hZ2VJY29uIiwiTGluazIiLCJNaW5pQ3JlYXRlUG9zdCIsInNlc3Npb24iLCJyb3V0ZXIiLCJwYXRobmFtZSIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwidXNlciIsIm5hbWUiLCJpbWFnZSIsInNwYW4iLCJyZWFkT25seSIsIm9uQ2xpY2siLCJwdXNoIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MiniCreatePost.tsx\n"));

/***/ })

});