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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EditorOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorOutput */ \"(app-pages-browser)/./src/components/EditorOutput.tsx\");\n/* harmony import */ var _post_vote_PostVoteClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-vote/PostVoteClient */ \"(app-pages-browser)/./src/components/post-vote/PostVoteClient.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = (param)=>{\n    let { subredditName, post, commentAmt, votesAmt: _votesAmt } = param;\n    var _pRef_current;\n    _s();\n    const pRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-white shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-4 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_vote_PostVoteClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        initialVotesAmt: _votesAmt\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-0 flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"msx-h-40 mt-1 text-xs text-gray-500\",\n                                children: [\n                                    subredditName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/r/\".concat(subredditName),\n                                                className: \"underline text-zinc-900 text-sm underline-offset-2\",\n                                                children: [\n                                                    \"r/\",\n                                                    subredditName\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"px-1\",\n                                                children: \"•\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true) : null,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"Posted by u/\",\n                                            post.author.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.formatTimeToNow)(new Date(post.createdAt))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/r/\".concat(subredditName, \"/post/\").concat(post.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-lg font-semibold py-2 leading-6 text-gray-900\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative text-sm max-h-40 w-full overflow-clip\",\n                                ref: pRef,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorOutput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        content: post.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    ((_pRef_current = pRef.current) === null || _pRef_current === void 0 ? void 0 : _pRef_current.clientHeight) === 160 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-50 z-20 text-sm p-4 sm:px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/r/\".concat(subredditName, \"/post/\").concat(post.id),\n                    className: \"w-fit flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        commentAmt,\n                        \" comments\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Post.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Post, \"ZvwDy2YsS5zMD/s8NN14Q1Azl/8=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFFSztBQUNoQjtBQUNPO0FBQ2M7QUFZeEQsTUFBTUssT0FBc0I7UUFBQyxFQUMzQkMsYUFBYSxFQUNiQyxJQUFJLEVBQ0pDLFVBQVUsRUFDVkMsVUFBVUMsU0FBUyxFQUNwQjtRQW1DWUM7O0lBbENYLE1BQU1BLE9BQU9ULDZDQUFNQSxDQUFpQjtJQUVwQyxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1QsaUVBQWNBO3dCQUFDVSxpQkFBaUJKOzs7Ozs7a0NBQ2pDLDhEQUFDRTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FDWlAsOEJBQ0M7OzBEQUNFLDhEQUFDUztnREFDQ0MsTUFBTSxNQUFvQixPQUFkVjtnREFDWk8sV0FBVTs7b0RBQ1g7b0RBQ0lQOzs7Ozs7OzBEQUVMLDhEQUFDVztnREFBS0osV0FBVTswREFBTzs7Ozs7Ozt1REFFdkI7a0RBQ0osOERBQUNJOzs0Q0FBSzs0Q0FBYVYsS0FBS1csTUFBTSxDQUFDQyxJQUFJOzs7Ozs7O29DQUFTO29DQUMzQ25CLDJEQUFlQSxDQUFDLElBQUlvQixLQUFLYixLQUFLYyxTQUFTOzs7Ozs7OzBDQUcxQyw4REFBQ047Z0NBQUVDLE1BQU0sTUFBNEJULE9BQXRCRCxlQUFjLFVBQWdCLE9BQVJDLEtBQUtlLEVBQUU7MENBQzFDLDRFQUFDQztvQ0FBR1YsV0FBVTs4Q0FDWE4sS0FBS2lCLEtBQUs7Ozs7Ozs7Ozs7OzBDQUlmLDhEQUFDWjtnQ0FDQ0MsV0FBVTtnQ0FDVlksS0FBS2Q7O2tEQUVMLDhEQUFDUixxREFBWUE7d0NBQUN1QixTQUFTbkIsS0FBS21CLE9BQU87Ozs7OztvQ0FDbENmLEVBQUFBLGdCQUFBQSxLQUFLZ0IsT0FBTyxjQUFaaEIsb0NBQUFBLGNBQWNpQixZQUFZLE1BQUssb0JBQzlCLDhEQUFDaEI7d0NBQUlDLFdBQVU7Ozs7O29EQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtWLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQ0NDLE1BQU0sTUFBNEJULE9BQXRCRCxlQUFjLFVBQWdCLE9BQVJDLEtBQUtlLEVBQUU7b0JBQ3pDVCxXQUFVOztzQ0FFViw4REFBQ1oseUZBQWFBOzRCQUFDWSxXQUFVOzs7Ozs7d0JBQ3hCTDt3QkFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBMURNSDtLQUFBQTtBQTRETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0LnRzeD9kN2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdFRpbWVUb05vdyB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgUG9zdCwgVXNlciwgVm90ZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTGluaywgTWVzc2FnZVNxdWFyZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEZDLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFZGl0b3JPdXRwdXQgZnJvbSBcIi4vRWRpdG9yT3V0cHV0XCI7XG5pbXBvcnQgUG9zdFZvdGVDbGllbnQgZnJvbSBcIi4vcG9zdC12b3RlL1Bvc3RWb3RlQ2xpZW50XCI7XG5cbmludGVyZmFjZSBQb3N0UHJvcHMge1xuICBzdWJyZWRkaXROYW1lOiBzdHJpbmc7XG4gIHBvc3Q6IFBvc3QgJiB7XG4gICAgYXV0aG9yOiBVc2VyO1xuICAgIHZvdGVzOiBWb3RlW107XG4gIH07XG4gIGNvbW1lbnRBbXQ6IG51bWJlcjtcbiAgdm90ZXNBbXQ7XG59XG5cbmNvbnN0IFBvc3Q6IEZDPFBvc3RQcm9wcz4gPSAoe1xuICBzdWJyZWRkaXROYW1lLFxuICBwb3N0LFxuICBjb21tZW50QW10LFxuICB2b3Rlc0FtdDogX3ZvdGVzQW10LFxufSkgPT4ge1xuICBjb25zdCBwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxQb3N0Vm90ZUNsaWVudCBpbml0aWFsVm90ZXNBbXQ9e192b3Rlc0FtdH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTAgZmxleC0xXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc3gtaC00MCBtdC0xIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAge3N1YnJlZGRpdE5hbWUgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2Avci8ke3N1YnJlZGRpdE5hbWV9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXppbmMtOTAwIHRleHQtc20gdW5kZXJsaW5lLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICByL3tzdWJyZWRkaXROYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xXCI+JiN4MjAyMjs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8c3Bhbj5Qb3N0ZWQgYnkgdS97cG9zdC5hdXRob3IubmFtZX08L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAge2Zvcm1hdFRpbWVUb05vdyhuZXcgRGF0ZShwb3N0LmNyZWF0ZWRBdCkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGEgaHJlZj17YC9yLyR7c3VicmVkZGl0TmFtZX0vcG9zdC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHB5LTIgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtc20gbWF4LWgtNDAgdy1mdWxsIG92ZXJmbG93LWNsaXBcIlxuICAgICAgICAgICAgcmVmPXtwUmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFZGl0b3JPdXRwdXQgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICAgICAge3BSZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0ID09PSAxNjAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIGgtMjQgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS13aGl0ZSB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHotMjAgdGV4dC1zbSBwLTQgc206cHgtNlwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2Avci8ke3N1YnJlZGRpdE5hbWV9L3Bvc3QvJHtwb3N0LmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1maXQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAge2NvbW1lbnRBbXR9IGNvbW1lbnRzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJmb3JtYXRUaW1lVG9Ob3ciLCJNZXNzYWdlU3F1YXJlIiwidXNlUmVmIiwiRWRpdG9yT3V0cHV0IiwiUG9zdFZvdGVDbGllbnQiLCJQb3N0Iiwic3VicmVkZGl0TmFtZSIsInBvc3QiLCJjb21tZW50QW10Iiwidm90ZXNBbXQiLCJfdm90ZXNBbXQiLCJwUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbFZvdGVzQW10IiwiYSIsImhyZWYiLCJzcGFuIiwiYXV0aG9yIiwibmFtZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJpZCIsImgxIiwidGl0bGUiLCJyZWYiLCJjb250ZW50IiwiY3VycmVudCIsImNsaWVudEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post.tsx\n"));

/***/ })

});