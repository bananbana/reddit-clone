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

/***/ "(app-pages-browser)/./src/components/comments/PostComment.tsx":
/*!*************************************************!*\
  !*** ./src/components/comments/PostComment.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CommentVotes */ \"(app-pages-browser)/./src/components/CommentVotes.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PostComment = (param)=>{\n    let { comment } = param;\n    _s();\n    const commentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: commentRef,\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        user: {\n                            name: comment.author.name || null,\n                            image: comment.author.image || null\n                        },\n                        className: \"h-6 w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-2 flex items-center gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-gray-900\",\n                                children: [\n                                    \"u/\",\n                                    comment.author.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-h-40 truncate text-xs text-zinc-500\",\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatTimeToNow)(new Date(comment.createdAt))\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-zinc-900 mt-2\",\n                children: comment.text\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    commentId: comment.id,\n                    initialVotesAmt: votesAmt,\n                    initialVote: currentVote\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostComment, \"+IR0TR21pDNJF/w6e/UJM9mHdOw=\");\n_c = PostComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComment);\nvar _c;\n$RefreshReg$(_c, \"PostComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL1Bvc3RDb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUM7QUFDSTtBQUVPO0FBQ087QUFXckQsTUFBTUksY0FBb0M7UUFBQyxFQUFFQyxPQUFPLEVBQW9COztJQUN0RSxNQUFNQyxhQUFhTiw2Q0FBTUEsQ0FBaUI7SUFFMUMscUJBQ0UsOERBQUNPO1FBQUlDLEtBQUtGO1FBQVlHLFdBQVU7OzBCQUM5Qiw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDUixtREFBVUE7d0JBQ1RTLE1BQU07NEJBQ0pDLE1BQU1OLFFBQVFPLE1BQU0sQ0FBQ0QsSUFBSSxJQUFJOzRCQUM3QkUsT0FBT1IsUUFBUU8sTUFBTSxDQUFDQyxLQUFLLElBQUk7d0JBQ2pDO3dCQUNBSixXQUFVOzs7Ozs7a0NBRVosOERBQUNGO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ0s7Z0NBQUVMLFdBQVU7O29DQUFvQztvQ0FDNUNKLFFBQVFPLE1BQU0sQ0FBQ0csUUFBUTs7Ozs7OzswQ0FHNUIsOERBQUNEO2dDQUFFTCxXQUFVOzBDQUNWUCwyREFBZUEsQ0FBQyxJQUFJYyxLQUFLWCxRQUFRWSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2pELDhEQUFDSDtnQkFBRUwsV0FBVTswQkFBOEJKLFFBQVFhLElBQUk7Ozs7OzswQkFFdkQsOERBQUNYO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDTixnRUFBWUE7b0JBQ1hnQixXQUFXZCxRQUFRZSxFQUFFO29CQUNyQkMsaUJBQWlCQztvQkFDakJDLGFBQWFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQW5DTXBCO0tBQUFBO0FBcUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL1Bvc3RDb21tZW50LnRzeD8zNDcyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBGQywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlckF2YXRhciBmcm9tIFwiLi4vVXNlckF2YXRhclwiO1xuaW1wb3J0IHsgQ29tbWVudFZvdGUsIFVzZXIsIENvbW1lbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGZvcm1hdFRpbWVUb05vdyB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IENvbW1lbnRWb3RlcyBmcm9tIFwiQC9jb21wb25lbnRzL0NvbW1lbnRWb3Rlc1wiO1xuXG50eXBlIEV4dGVuZGVkQ29tbWVudCA9IENvbW1lbnQgJiB7XG4gIHZvdGVzOiBDb21tZW50Vm90ZVtdO1xuICBhdXRob3I6IFVzZXI7XG59O1xuXG5pbnRlcmZhY2UgUG9zdENvbW1lbnRQcm9wcyB7XG4gIGNvbW1lbnQ6IEV4dGVuZGVkQ29tbWVudDtcbn1cblxuY29uc3QgUG9zdENvbW1lbnQ6IEZDPFBvc3RDb21tZW50UHJvcHM+ID0gKHsgY29tbWVudCB9OiBQb3N0Q29tbWVudFByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2NvbW1lbnRSZWZ9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFVzZXJBdmF0YXJcbiAgICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgICBuYW1lOiBjb21tZW50LmF1dGhvci5uYW1lIHx8IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogY29tbWVudC5hdXRob3IuaW1hZ2UgfHwgbnVsbCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgdS97Y29tbWVudC5hdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LWgtNDAgdHJ1bmNhdGUgdGV4dC14cyB0ZXh0LXppbmMtNTAwXCI+XG4gICAgICAgICAgICB7Zm9ybWF0VGltZVRvTm93KG5ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtemluYy05MDAgbXQtMlwiPntjb21tZW50LnRleHR9PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxDb21tZW50Vm90ZXNcbiAgICAgICAgICBjb21tZW50SWQ9e2NvbW1lbnQuaWR9XG4gICAgICAgICAgaW5pdGlhbFZvdGVzQW10PXt2b3Rlc0FtdH1cbiAgICAgICAgICBpbml0aWFsVm90ZT17Y3VycmVudFZvdGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDb21tZW50O1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsIlVzZXJBdmF0YXIiLCJmb3JtYXRUaW1lVG9Ob3ciLCJDb21tZW50Vm90ZXMiLCJQb3N0Q29tbWVudCIsImNvbW1lbnQiLCJjb21tZW50UmVmIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwidXNlciIsIm5hbWUiLCJhdXRob3IiLCJpbWFnZSIsInAiLCJ1c2VybmFtZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0ZXh0IiwiY29tbWVudElkIiwiaWQiLCJpbml0aWFsVm90ZXNBbXQiLCJ2b3Rlc0FtdCIsImluaXRpYWxWb3RlIiwiY3VycmVudFZvdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/comments/PostComment.tsx\n"));

/***/ })

});