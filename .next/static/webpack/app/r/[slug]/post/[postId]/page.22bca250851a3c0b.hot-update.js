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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CommentVotes */ \"(app-pages-browser)/./src/components/CommentVotes.tsx\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\");\n/* harmony import */ var _ui_Textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/Textarea */ \"(app-pages-browser)/./src/components/ui/Textarea.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst PostComment = (param)=>{\n    let { comment, votesAmt, currentVote, postId } = param;\n    _s();\n    const commentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const [isReplying, setIsReplying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { mutate: postComment, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationFn: async (param)=>{\n            let { postId, text, replyToId } = param;\n            const payload = {\n                postId,\n                text,\n                replyToId\n            };\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"api/subreddit/post/comment\", payload);\n            return data;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: commentRef,\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        user: {\n                            name: comment.author.name || null,\n                            image: comment.author.image || null\n                        },\n                        className: \"h-6 w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-2 flex items-center gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-gray-900\",\n                                children: [\n                                    \"u/\",\n                                    comment.author.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-h-40 truncate text-xs text-zinc-500\",\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatTimeToNow)(new Date(comment.createdAt))\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-zinc-900 mt-2\",\n                children: comment.text\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 items-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        commentId: comment.id,\n                        initialVotesAmt: votesAmt,\n                        initialVote: currentVote\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: ()=>{\n                            if (!session) return router.push(\"/sign-in\");\n                            setIsReplying(true);\n                        },\n                        variant: \"ghost\",\n                        size: \"xs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                className: \"h-4 w4 mr1.5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            \"Reply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    isReplying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid w-full gap-1.5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                children: \"Your comment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Textarea__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n                                        id: \"comment\",\n                                        value: input,\n                                        onChange: (e)=>setInput(e.target.value),\n                                        rows: 1,\n                                        placeholder: \"What are your thoughts?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 flex justify-end gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                tabIndex: -1,\n                                                variant: \"subtle\",\n                                                onClick: ()=>{\n                                                    setIsReplying(false);\n                                                },\n                                                children: \"Cancel\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                isLoading: isLoading,\n                                                disabled: input.length === 0,\n                                                onClick: ()=>{\n                                                    var _comment_replyToId;\n                                                    if (!input) return postComment({\n                                                        postId,\n                                                        text: input,\n                                                        replyToId: (_comment_replyToId = comment.replyToId) !== null && _comment_replyToId !== void 0 ? _comment_replyToId : comment.id\n                                                    });\n                                                },\n                                                children: \"Post\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostComment, \"pcHMoC7FroCnFC2EtG3F2nTNMWU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\n_c = PostComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComment);\nvar _c;\n$RefreshReg$(_c, \"PostComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL1Bvc3RDb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ047QUFFTztBQUNPO0FBQ2Y7QUFDTztBQUNEO0FBQ0M7QUFDUztBQUNaO0FBQ1U7QUFFMUI7QUFjMUIsTUFBTWEsY0FBb0M7UUFBQyxFQUN6Q0MsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsTUFBTSxFQUNXOztJQUNqQixNQUFNQyxhQUFhbEIsNkNBQU1BLENBQWlCO0lBQzFDLE1BQU1tQixTQUFTWiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxNQUFNQyxPQUFPLEVBQUUsR0FBR2IsMkRBQVVBO0lBQ3BDLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQVU7SUFDdEQsTUFBTSxDQUFDdUIsT0FBT0MsU0FBUyxHQUFHeEIsK0NBQVFBLENBQVM7SUFFM0MsTUFBTSxFQUFFeUIsUUFBUUMsV0FBVyxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLGtFQUFXQSxDQUFDO1FBQ3JEa0IsWUFBWTtnQkFBTyxFQUFFWixNQUFNLEVBQUVhLElBQUksRUFBRUMsU0FBUyxFQUFrQjtZQUM1RCxNQUFNQyxVQUEwQjtnQkFDOUJmO2dCQUNBYTtnQkFDQUM7WUFDRjtZQUVBLE1BQU0sRUFBRVgsSUFBSSxFQUFFLEdBQUcsTUFBTVIsOENBQUtBLENBQUNxQixJQUFJLENBQUUsOEJBQTZCRDtZQUVoRSxPQUFPWjtRQUNUO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ2M7UUFBSUMsS0FBS2pCO1FBQVlrQixXQUFVOzswQkFDOUIsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ2xDLG1EQUFVQTt3QkFDVG1DLE1BQU07NEJBQ0pDLE1BQU14QixRQUFReUIsTUFBTSxDQUFDRCxJQUFJLElBQUk7NEJBQzdCRSxPQUFPMUIsUUFBUXlCLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO3dCQUNqQzt3QkFDQUosV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFFTCxXQUFVOztvQ0FBb0M7b0NBQzVDdEIsUUFBUXlCLE1BQU0sQ0FBQ0csUUFBUTs7Ozs7OzswQ0FHNUIsOERBQUNEO2dDQUFFTCxXQUFVOzBDQUNWakMsMkRBQWVBLENBQUMsSUFBSXdDLEtBQUs3QixRQUFROEIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtqRCw4REFBQ0g7Z0JBQUVMLFdBQVU7MEJBQThCdEIsUUFBUWdCLElBQUk7Ozs7OzswQkFFdkQsOERBQUNJO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ2hDLGdFQUFZQTt3QkFDWHlDLFdBQVcvQixRQUFRZ0MsRUFBRTt3QkFDckJDLGlCQUFpQmhDO3dCQUNqQmlDLGFBQWFoQzs7Ozs7O2tDQUVmLDhEQUFDWCw4Q0FBTUE7d0JBQ0w0QyxTQUFTOzRCQUNQLElBQUksQ0FBQzVCLFNBQVMsT0FBT0YsT0FBTytCLElBQUksQ0FBQzs0QkFDakMzQixjQUFjO3dCQUNoQjt3QkFDQTRCLFNBQVE7d0JBQ1JDLE1BQUs7OzBDQUVMLDhEQUFDOUMsMEZBQWFBO2dDQUFDOEIsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7OztvQkFHM0NkLDJCQUNDLDhEQUFDWTt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUMzQixpRUFBS0E7MENBQUM7Ozs7OzswQ0FDUCw4REFBQ3lCO2dDQUFJRSxXQUFVOztrREFDYiw4REFBQzFCLGtEQUFRQTt3Q0FDUG9DLElBQUc7d0NBQ0hPLE9BQU83Qjt3Q0FDUDhCLFVBQVUsQ0FBQ0MsSUFBTTlCLFNBQVM4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0NBQ3hDSSxNQUFNO3dDQUNOQyxhQUFZOzs7Ozs7a0RBRWQsOERBQUN4Qjt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUMvQiw4Q0FBTUE7Z0RBQ0xzRCxVQUFVLENBQUM7Z0RBQ1hSLFNBQVE7Z0RBQ1JGLFNBQVM7b0RBQ1AxQixjQUFjO2dEQUNoQjswREFDRDs7Ozs7OzBEQUdELDhEQUFDbEIsOENBQU1BO2dEQUNMdUIsV0FBV0E7Z0RBQ1hnQyxVQUFVcEMsTUFBTXFDLE1BQU0sS0FBSztnREFDM0JaLFNBQVM7d0RBS1FuQztvREFKZixJQUFJLENBQUNVLE9BQ0gsT0FBT0csWUFBWTt3REFDakJWO3dEQUNBYSxNQUFNTjt3REFDTk8sV0FBV2pCLENBQUFBLHFCQUFBQSxRQUFRaUIsU0FBUyxjQUFqQmpCLGdDQUFBQSxxQkFBcUJBLFFBQVFnQyxFQUFFO29EQUM1QztnREFDSjswREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBTUw7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQTNHTWpDOztRQU9XTixzREFBU0E7UUFDRUMsdURBQVVBO1FBSU9HLDhEQUFXQTs7O0tBWmxERTtBQTZHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tZW50cy9Qb3N0Q29tbWVudC50c3g/MzQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gXCIuLi9Vc2VyQXZhdGFyXCI7XG5pbXBvcnQgeyBDb21tZW50Vm90ZSwgVXNlciwgQ29tbWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZVRvTm93IH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgQ29tbWVudFZvdGVzIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tbWVudFZvdGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvQnV0dG9uXCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi91aS9UZXh0YXJlYVwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBDb21tZW50UmVxdWVzdCB9IGZyb20gXCJAL2xpYi92YWxpZGF0b3JzL2NvbW1lbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxudHlwZSBFeHRlbmRlZENvbW1lbnQgPSBDb21tZW50ICYge1xuICB2b3RlczogQ29tbWVudFZvdGVbXTtcbiAgYXV0aG9yOiBVc2VyO1xufTtcblxuaW50ZXJmYWNlIFBvc3RDb21tZW50UHJvcHMge1xuICBjb21tZW50OiBFeHRlbmRlZENvbW1lbnQ7XG4gIHZvdGVzQW10OiBudW1iZXI7XG4gIGN1cnJlbnRWb3RlOiBDb21tZW50Vm90ZSB8IHVuZGVmaW5lZDtcbiAgcG9zdElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBvc3RDb21tZW50OiBGQzxQb3N0Q29tbWVudFByb3BzPiA9ICh7XG4gIGNvbW1lbnQsXG4gIHZvdGVzQW10LFxuICBjdXJyZW50Vm90ZSxcbiAgcG9zdElkLFxufTogUG9zdENvbW1lbnRQcm9wcykgPT4ge1xuICBjb25zdCBjb21tZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbaXNSZXBseWluZywgc2V0SXNSZXBseWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCB7IG11dGF0ZTogcG9zdENvbW1lbnQsIGlzTG9hZGluZyB9ID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGFzeW5jICh7IHBvc3RJZCwgdGV4dCwgcmVwbHlUb0lkIH06IENvbW1lbnRSZXF1ZXN0KSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkOiBDb21tZW50UmVxdWVzdCA9IHtcbiAgICAgICAgcG9zdElkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICByZXBseVRvSWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYGFwaS9zdWJyZWRkaXQvcG9zdC9jb21tZW50YCwgcGF5bG9hZCk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtjb21tZW50UmVmfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxVc2VyQXZhdGFyXG4gICAgICAgICAgdXNlcj17e1xuICAgICAgICAgICAgbmFtZTogY29tbWVudC5hdXRob3IubmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgaW1hZ2U6IGNvbW1lbnQuYXV0aG9yLmltYWdlIHx8IG51bGwsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIHUve2NvbW1lbnQuYXV0aG9yLnVzZXJuYW1lfVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC1oLTQwIHRydW5jYXRlIHRleHQteHMgdGV4dC16aW5jLTUwMFwiPlxuICAgICAgICAgICAge2Zvcm1hdFRpbWVUb05vdyhuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCkpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXppbmMtOTAwIG10LTJcIj57Y29tbWVudC50ZXh0fTwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgPENvbW1lbnRWb3Rlc1xuICAgICAgICAgIGNvbW1lbnRJZD17Y29tbWVudC5pZH1cbiAgICAgICAgICBpbml0aWFsVm90ZXNBbXQ9e3ZvdGVzQW10fVxuICAgICAgICAgIGluaXRpYWxWb3RlPXtjdXJyZW50Vm90ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIHJvdXRlci5wdXNoKFwiL3NpZ24taW5cIik7XG4gICAgICAgICAgICBzZXRJc1JlcGx5aW5nKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwiaC00IHc0IG1yMS41XCIgLz5cbiAgICAgICAgICBSZXBseVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge2lzUmVwbHlpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBnYXAtMS41XCI+XG4gICAgICAgICAgICA8TGFiZWw+WW91ciBjb21tZW50PC9MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByb3dzPXsxfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91ciB0aG91Z2h0cz9cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBqdXN0aWZ5LWVuZCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0bGVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRJc1JlcGx5aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aW5wdXQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0Q29tbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGx5VG9JZDogY29tbWVudC5yZXBseVRvSWQgPz8gY29tbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUG9zdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbW1lbnQ7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJVc2VyQXZhdGFyIiwiZm9ybWF0VGltZVRvTm93IiwiQ29tbWVudFZvdGVzIiwiQnV0dG9uIiwiTWVzc2FnZVNxdWFyZSIsInVzZVJvdXRlciIsInVzZVNlc3Npb24iLCJMYWJlbCIsIlRleHRhcmVhIiwidXNlTXV0YXRpb24iLCJheGlvcyIsIlBvc3RDb21tZW50IiwiY29tbWVudCIsInZvdGVzQW10IiwiY3VycmVudFZvdGUiLCJwb3N0SWQiLCJjb21tZW50UmVmIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJpc1JlcGx5aW5nIiwic2V0SXNSZXBseWluZyIsImlucHV0Iiwic2V0SW5wdXQiLCJtdXRhdGUiLCJwb3N0Q29tbWVudCIsImlzTG9hZGluZyIsIm11dGF0aW9uRm4iLCJ0ZXh0IiwicmVwbHlUb0lkIiwicGF5bG9hZCIsInBvc3QiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJ1c2VyIiwibmFtZSIsImF1dGhvciIsImltYWdlIiwicCIsInVzZXJuYW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImNvbW1lbnRJZCIsImlkIiwiaW5pdGlhbFZvdGVzQW10IiwiaW5pdGlhbFZvdGUiLCJvbkNsaWNrIiwicHVzaCIsInZhcmlhbnQiLCJzaXplIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJ0YWJJbmRleCIsImRpc2FibGVkIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/comments/PostComment.tsx\n"));

/***/ })

});