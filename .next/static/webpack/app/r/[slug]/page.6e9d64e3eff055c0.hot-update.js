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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Post = (param)=>{\n    let { subredditName, post, commentAmt } = param;\n    var _pRef_current;\n    _s();\n    const pRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-white shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-4 flex justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-0 flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"msx-h-40 mt-1 text-xs text-gray-500\",\n                            children: [\n                                subredditName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/r/\".concat(subredditName),\n                                            className: \"underline text-zinc-900 text-sm underline-offset-2\",\n                                            children: [\n                                                \"r/\",\n                                                subredditName\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"px-1\",\n                                            children: \"•\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true) : null,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Posted by u/\",\n                                        post.author.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.formatTimeToNow)(new Date(post.createdAt))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/r/\".concat(subredditName, \"/post/\").concat(post.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-lg font-semibold py-2 leading-6 text-gray-900\",\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative text-sm max-h-40 w-full overflow-clip\",\n                            ref: pRef,\n                            children: ((_pRef_current = pRef.current) === null || _pRef_current === void 0 ? void 0 : _pRef_current.clientHeight) === 160 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined) : null\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-50 z-20 text-sm p-4 sm:px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/r/\".concat(subredditName, \"/post/\").concat(post.id),\n                        className: \"w-fit flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            commentAmt\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"ZvwDy2YsS5zMD/s8NN14Q1Azl/8=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRUs7QUFDaEI7QUFXbkMsTUFBTUcsT0FBc0I7UUFBQyxFQUFFQyxhQUFhLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFO1FBbUNuREM7O0lBbENYLE1BQU1BLE9BQU9MLDZDQUFNQSxDQUFpQjtJQUVwQyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUdiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FDWkwsOEJBQ0M7O3NEQUNFLDhEQUFDTTs0Q0FDQ0MsTUFBTSxNQUFvQixPQUFkUDs0Q0FDWkssV0FBVTs7Z0RBQ1g7Z0RBQ0lMOzs7Ozs7O3NEQUVMLDhEQUFDUTs0Q0FBS0gsV0FBVTtzREFBTzs7Ozs7OzttREFFdkI7OENBQ0osOERBQUNHOzt3Q0FBSzt3Q0FBYVAsS0FBS1EsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7O2dDQUFTO2dDQUMzQ2QsMkRBQWVBLENBQUMsSUFBSWUsS0FBS1YsS0FBS1csU0FBUzs7Ozs7OztzQ0FHMUMsOERBQUNOOzRCQUFFQyxNQUFNLE1BQTRCTixPQUF0QkQsZUFBYyxVQUFnQixPQUFSQyxLQUFLWSxFQUFFO3NDQUMxQyw0RUFBQ0M7Z0NBQUdULFdBQVU7MENBQ1hKLEtBQUtjLEtBQUs7Ozs7Ozs7Ozs7O3NDQUlmLDhEQUFDWDs0QkFDQ0MsV0FBVTs0QkFDVlcsS0FBS2I7c0NBRUpBLEVBQUFBLGdCQUFBQSxLQUFLYyxPQUFPLGNBQVpkLG9DQUFBQSxjQUFjZSxZQUFZLE1BQUssb0JBQzlCLDhEQUFDZDtnQ0FBSUMsV0FBVTs7Ozs7NENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtWLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxNQUFNLE1BQTRCTixPQUF0QkQsZUFBYyxVQUFnQixPQUFSQyxLQUFLWSxFQUFFO3dCQUN6Q1IsV0FBVTs7MENBRVYsOERBQUNSLHlGQUFhQTtnQ0FBQ1EsV0FBVTs7Ozs7OzRCQUN4Qkg7Ozs7Ozs7b0JBQ0U7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQXJETUg7S0FBQUE7QUF1RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC50c3g/ZDdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRUaW1lVG9Ob3cgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IFBvc3QsIFVzZXIsIFZvdGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IExpbmssIE1lc3NhZ2VTcXVhcmUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBGQywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQb3N0UHJvcHMge1xuICBzdWJyZWRkaXROYW1lOiBzdHJpbmc7XG4gIHBvc3Q6IFBvc3QgJiB7XG4gICAgYXV0aG9yOiBVc2VyO1xuICAgIHZvdGVzOiBWb3RlW107XG4gIH07XG4gIGNvbW1lbnRBbXQ6IG51bWJlcjtcbn1cblxuY29uc3QgUG9zdDogRkM8UG9zdFByb3BzPiA9ICh7IHN1YnJlZGRpdE5hbWUsIHBvc3QsIGNvbW1lbnRBbXQgfSkgPT4ge1xuICBjb25zdCBwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIHsvKiBUT0RPOiBQb3N0Vm90ZXMgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTAgZmxleC0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc3gtaC00MCBtdC0xIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAge3N1YnJlZGRpdE5hbWUgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2Avci8ke3N1YnJlZGRpdE5hbWV9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXppbmMtOTAwIHRleHQtc20gdW5kZXJsaW5lLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICByL3tzdWJyZWRkaXROYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xXCI+JiN4MjAyMjs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8c3Bhbj5Qb3N0ZWQgYnkgdS97cG9zdC5hdXRob3IubmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAge2Zvcm1hdFRpbWVUb05vdyhuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGEgaHJlZj17YC9yLyR7c3VicmVkZGl0TmFtZX0vcG9zdC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHB5LTIgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtc20gbWF4LWgtNDAgdy1mdWxsIG92ZXJmbG93LWNsaXBcIlxuICAgICAgICAgICAgcmVmPXtwUmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwUmVmLmN1cnJlbnQ/LmNsaWVudEhlaWdodCA9PT0gMTYwID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLTI0IHctZnVsbCBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCB6LTIwIHRleHQtc20gcC00IHNtOnB4LTZcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtgL3IvJHtzdWJyZWRkaXROYW1lfS9wb3N0LyR7cG9zdC5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlU3F1YXJlIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgIHtjb21tZW50QW10fVxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImZvcm1hdFRpbWVUb05vdyIsIk1lc3NhZ2VTcXVhcmUiLCJ1c2VSZWYiLCJQb3N0Iiwic3VicmVkZGl0TmFtZSIsInBvc3QiLCJjb21tZW50QW10IiwicFJlZiIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic3BhbiIsImF1dGhvciIsIm5hbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiaWQiLCJoMSIsInRpdGxlIiwicmVmIiwiY3VycmVudCIsImNsaWVudEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post.tsx\n"));

/***/ })

});