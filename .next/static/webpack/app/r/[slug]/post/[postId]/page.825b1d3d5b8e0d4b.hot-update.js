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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CommentVotes */ \"(app-pages-browser)/./src/components/CommentVotes.tsx\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=MessageSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\");\n/* harmony import */ var _ui_Textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/Textarea */ \"(app-pages-browser)/./src/components/ui/Textarea.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst PostComment = (param)=>{\n    let { comment, votesAmt, currentVote, postId } = param;\n    _s();\n    const commentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const [isReplying, setIsReplying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationFn: async (param)=>{\n            let { postId, text, replyToId: replyToId1 } = param;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: commentRef,\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        user: {\n                            name: comment.author.name || null,\n                            image: comment.author.image || null\n                        },\n                        className: \"h-6 w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-2 flex items-center gap-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-gray-900\",\n                                children: [\n                                    \"u/\",\n                                    comment.author.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-h-40 truncate text-xs text-zinc-500\",\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatTimeToNow)(new Date(comment.createdAt))\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-zinc-900 mt-2\",\n                children: comment.text\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentVotes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        commentId: comment.id,\n                        initialVotesAmt: votesAmt,\n                        initialVote: currentVote\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: ()=>{\n                            if (!session) return router.push(\"/sign-in\");\n                            setIsReplying(true);\n                        },\n                        variant: \"ghost\",\n                        size: \"xs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MessageSquare_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                className: \"h-4 w4 mr1.5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            \"Reply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    isReplying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid w-full gap-1.5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_11__.Label, {\n                                children: \"Your comment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Textarea__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n                                        id: \"comment\",\n                                        value: input,\n                                        onChange: (e)=>setInput(e.target.value),\n                                        rows: 1,\n                                        placeholder: \"What are your thoughts?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 flex justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            isLoading: isLoading,\n                                            disabled: input.length === 0,\n                                            onClick: ()=>comment({\n                                                    postId,\n                                                    text: input,\n                                                    replyToId\n                                                }),\n                                            children: \"Post\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/comments/PostComment.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostComment, \"3BGzNFrS8N1JjGePjqatJXauXko=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\n_c = PostComment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComment);\nvar _c;\n$RefreshReg$(_c, \"PostComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzL1Bvc3RDb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTjtBQUVPO0FBQ087QUFDZjtBQUNPO0FBQ0Q7QUFDQztBQUNTO0FBQ1o7QUFDVTtBQWVwRCxNQUFNWSxjQUFvQztRQUFDLEVBQ3pDQyxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxNQUFNLEVBQ1c7O0lBQ2pCLE1BQU1DLGFBQWFqQiw2Q0FBTUEsQ0FBaUI7SUFDMUMsTUFBTWtCLFNBQVNYLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVZLE1BQU1DLE9BQU8sRUFBRSxHQUFHWiwyREFBVUE7SUFDcEMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdyQiwrQ0FBUUEsQ0FBVTtJQUN0RCxNQUFNLENBQUNzQixPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBUztJQUUzQyxNQUFNLEVBQUUsR0FBR1Usa0VBQVdBLENBQUM7UUFDckJjLFlBQVk7Z0JBQU8sRUFBRVQsTUFBTSxFQUFFVSxJQUFJLEVBQUVDLFdBQUFBLFVBQVMsRUFBa0I7UUFBTTtJQUN0RTtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxLQUFLWjtRQUFZYSxXQUFVOzswQkFDOUIsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQzVCLG1EQUFVQTt3QkFDVDZCLE1BQU07NEJBQ0pDLE1BQU1uQixRQUFRb0IsTUFBTSxDQUFDRCxJQUFJLElBQUk7NEJBQzdCRSxPQUFPckIsUUFBUW9CLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO3dCQUNqQzt3QkFDQUosV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFFTCxXQUFVOztvQ0FBb0M7b0NBQzVDakIsUUFBUW9CLE1BQU0sQ0FBQ0csUUFBUTs7Ozs7OzswQ0FHNUIsOERBQUNEO2dDQUFFTCxXQUFVOzBDQUNWM0IsMkRBQWVBLENBQUMsSUFBSWtDLEtBQUt4QixRQUFReUIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtqRCw4REFBQ0g7Z0JBQUVMLFdBQVU7MEJBQThCakIsUUFBUWEsSUFBSTs7Ozs7OzBCQUV2RCw4REFBQ0U7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDMUIsZ0VBQVlBO3dCQUNYbUMsV0FBVzFCLFFBQVEyQixFQUFFO3dCQUNyQkMsaUJBQWlCM0I7d0JBQ2pCNEIsYUFBYTNCOzs7Ozs7a0NBRWYsOERBQUNWLDhDQUFNQTt3QkFDTHNDLFNBQVM7NEJBQ1AsSUFBSSxDQUFDdkIsU0FBUyxPQUFPRixPQUFPMEIsSUFBSSxDQUFDOzRCQUNqQ3RCLGNBQWM7d0JBQ2hCO3dCQUNBdUIsU0FBUTt3QkFDUkMsTUFBSzs7MENBRUwsOERBQUN4QywwRkFBYUE7Z0NBQUN3QixXQUFVOzs7Ozs7NEJBQWlCOzs7Ozs7O29CQUczQ1QsMkJBQ0MsOERBQUNPO3dCQUFJRSxXQUFVOzswQ0FDYiw4REFBQ3JCLGlFQUFLQTswQ0FBQzs7Ozs7OzBDQUNQLDhEQUFDbUI7Z0NBQUlFLFdBQVU7O2tEQUNiLDhEQUFDcEIsa0RBQVFBO3dDQUNQOEIsSUFBRzt3Q0FDSE8sT0FBT3hCO3dDQUNQeUIsVUFBVSxDQUFDQyxJQUFNekIsU0FBU3lCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3Q0FDeENJLE1BQU07d0NBQ05DLGFBQVk7Ozs7OztrREFFZCw4REFBQ3hCO3dDQUFJRSxXQUFVO2tEQUNiLDRFQUFDekIsOENBQU1BOzRDQUNMZ0QsV0FBV0E7NENBQ1hDLFVBQVUvQixNQUFNZ0MsTUFBTSxLQUFLOzRDQUMzQlosU0FBUyxJQUFNOUIsUUFBUTtvREFBRUc7b0RBQVFVLE1BQU1IO29EQUFPSTtnREFBVTtzREFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBTUw7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQWpGTWY7O1FBT1dMLHNEQUFTQTtRQUNFQyx1REFBVUE7UUFJekJHLDhEQUFXQTs7O0tBWmxCQztBQW1GTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tZW50cy9Qb3N0Q29tbWVudC50c3g/MzQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gXCIuLi9Vc2VyQXZhdGFyXCI7XG5pbXBvcnQgeyBDb21tZW50Vm90ZSwgVXNlciwgQ29tbWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZVRvTm93IH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgQ29tbWVudFZvdGVzIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tbWVudFZvdGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvQnV0dG9uXCI7XG5pbXBvcnQgeyBNZXNzYWdlU3F1YXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi91aS9UZXh0YXJlYVwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBDb21tZW50UmVxdWVzdCB9IGZyb20gXCJAL2xpYi92YWxpZGF0b3JzL2NvbW1lbnRcIjtcblxudHlwZSBFeHRlbmRlZENvbW1lbnQgPSBDb21tZW50ICYge1xuICB2b3RlczogQ29tbWVudFZvdGVbXTtcbiAgYXV0aG9yOiBVc2VyO1xufTtcblxuaW50ZXJmYWNlIFBvc3RDb21tZW50UHJvcHMge1xuICBjb21tZW50OiBFeHRlbmRlZENvbW1lbnQ7XG4gIHZvdGVzQW10OiBudW1iZXI7XG4gIGN1cnJlbnRWb3RlOiBDb21tZW50Vm90ZSB8IHVuZGVmaW5lZDtcbiAgcG9zdElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBvc3RDb21tZW50OiBGQzxQb3N0Q29tbWVudFByb3BzPiA9ICh7XG4gIGNvbW1lbnQsXG4gIHZvdGVzQW10LFxuICBjdXJyZW50Vm90ZSxcbiAgcG9zdElkLFxufTogUG9zdENvbW1lbnRQcm9wcykgPT4ge1xuICBjb25zdCBjb21tZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbaXNSZXBseWluZywgc2V0SXNSZXBseWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCB7fSA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAoeyBwb3N0SWQsIHRleHQsIHJlcGx5VG9JZCB9OiBDb21tZW50UmVxdWVzdCkgPT4ge30sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtjb21tZW50UmVmfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxVc2VyQXZhdGFyXG4gICAgICAgICAgdXNlcj17e1xuICAgICAgICAgICAgbmFtZTogY29tbWVudC5hdXRob3IubmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgaW1hZ2U6IGNvbW1lbnQuYXV0aG9yLmltYWdlIHx8IG51bGwsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIHUve2NvbW1lbnQuYXV0aG9yLnVzZXJuYW1lfVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC1oLTQwIHRydW5jYXRlIHRleHQteHMgdGV4dC16aW5jLTUwMFwiPlxuICAgICAgICAgICAge2Zvcm1hdFRpbWVUb05vdyhuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCkpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXppbmMtOTAwIG10LTJcIj57Y29tbWVudC50ZXh0fTwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8Q29tbWVudFZvdGVzXG4gICAgICAgICAgY29tbWVudElkPXtjb21tZW50LmlkfVxuICAgICAgICAgIGluaXRpYWxWb3Rlc0FtdD17dm90ZXNBbXR9XG4gICAgICAgICAgaW5pdGlhbFZvdGU9e2N1cnJlbnRWb3RlfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZXNzaW9uKSByZXR1cm4gcm91dGVyLnB1c2goXCIvc2lnbi1pblwiKTtcbiAgICAgICAgICAgIHNldElzUmVwbHlpbmcodHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJoLTQgdzQgbXIxLjVcIiAvPlxuICAgICAgICAgIFJlcGx5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7aXNSZXBseWluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGdhcC0xLjVcIj5cbiAgICAgICAgICAgIDxMYWJlbD5Zb3VyIGNvbW1lbnQ8L0xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJvd3M9ezF9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3VyIHRob3VnaHRzP1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aW5wdXQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29tbWVudCh7IHBvc3RJZCwgdGV4dDogaW5wdXQsIHJlcGx5VG9JZCB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQb3N0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVzZXJBdmF0YXIiLCJmb3JtYXRUaW1lVG9Ob3ciLCJDb21tZW50Vm90ZXMiLCJCdXR0b24iLCJNZXNzYWdlU3F1YXJlIiwidXNlUm91dGVyIiwidXNlU2Vzc2lvbiIsIkxhYmVsIiwiVGV4dGFyZWEiLCJ1c2VNdXRhdGlvbiIsIlBvc3RDb21tZW50IiwiY29tbWVudCIsInZvdGVzQW10IiwiY3VycmVudFZvdGUiLCJwb3N0SWQiLCJjb21tZW50UmVmIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJpc1JlcGx5aW5nIiwic2V0SXNSZXBseWluZyIsImlucHV0Iiwic2V0SW5wdXQiLCJtdXRhdGlvbkZuIiwidGV4dCIsInJlcGx5VG9JZCIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInVzZXIiLCJuYW1lIiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwidXNlcm5hbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwiY29tbWVudElkIiwiaWQiLCJpbml0aWFsVm90ZXNBbXQiLCJpbml0aWFsVm90ZSIsIm9uQ2xpY2siLCJwdXNoIiwidmFyaWFudCIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJvd3MiLCJwbGFjZWhvbGRlciIsImlzTG9hZGluZyIsImRpc2FibGVkIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/comments/PostComment.tsx\n"));

/***/ })

});