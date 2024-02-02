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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-custom-toast */ \"(app-pages-browser)/./src/hooks/use-custom-toast.tsx\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/hooks */ \"(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-previous/use-previous.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBigDown,ArrowBigUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-big-up.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBigDown,ArrowBigUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-big-down.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/index.js\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-pages-browser)/./src/hooks/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PostVoteClient = (param)=>{\n    let { postId, initialVotesAmt, initialVote } = param;\n    _s();\n    const { loginToast } = (0,_hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__.useCustomToast)();\n    const [votesAmt, setVotesAmt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialVotesAmt);\n    const [currentVote, setCurrentVote] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialVote);\n    const prevVote = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_6__.usePrevious)(currentVote);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentVote(initialVote);\n    }, [\n        initialVote\n    ]);\n    const { mutate: vote } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({\n        mutationFn: async (voteType)=>{\n            const payload = {\n                postId,\n                voteType\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].patch(\"/api/subreddit/post/vote\", payload);\n        },\n        onError: (err, voteType)=>{\n            if (voteType === \"UP\") setVotesAmt((prev)=>prev - 1);\n            else setVotesAmt((prev)=>prev + 1);\n            setCurrentVote(prevVote);\n            if (err instanceof axios__WEBPACK_IMPORTED_MODULE_9__.AxiosError) {\n                var _err_response;\n                if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {\n                    return loginToast();\n                }\n            }\n            return (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__.toast)({\n                title: \"Something went wrong.\",\n                description: \"Your vote was not registered, please try again.\",\n                variant: \"destructive\"\n            });\n        },\n        onMutate: (type)=>{\n            if (currentVote === type) {\n                setCurrentVote(undefined);\n                if (type === \"UP\") setVotesAmt((prev)=>prev - 1);\n                else if (type === \"DOWN\") setVotesAmt((prev)=>prev + 1);\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex sm:flex-col gap-4 sm:gap-0 pr-6 sm:w-20 pb-4 sm:pb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: ()=>vote(\"UP\"),\n                size: \"sm\",\n                variant: \"ghost\",\n                \"aria-label\": \"upvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-emerald-500 fill-emerald-500\": currentVote === \"UP\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center py-2 font-medium text-sm text-zinc-900\",\n                children: votesAmt ? votesAmt : 0\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: ()=>vote(\"DOWN\"),\n                size: \"sm\",\n                variant: \"ghost\",\n                \"aria-label\": \"downvote\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBigDown_ArrowBigUp_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"h-5 w-5 text-zinc-700\", {\n                        \"text-red-500 fill-red-500\": currentVote === \"UP\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/post-vote/PostVoteClient.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostVoteClient, \"fqMZabevTWg/WBPc9bVKVBMWF+w=\", false, function() {\n    return [\n        _hooks_use_custom_toast__WEBPACK_IMPORTED_MODULE_1__.useCustomToast,\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_6__.usePrevious,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = PostVoteClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostVoteClient);\nvar _c;\n$RefreshReg$(_c, \"PostVoteClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3Qtdm90ZS9Qb3N0Vm90ZUNsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUwRDtBQUNiO0FBRUc7QUFDVjtBQUNrQjtBQUN2QjtBQUNtQjtBQUVWO0FBQ0E7QUFRMUMsTUFBTVksaUJBQTBDO1FBQUMsRUFDL0NDLE1BQU0sRUFDTkMsZUFBZSxFQUNmQyxXQUFXLEVBQ1o7O0lBQ0MsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR2hCLHVFQUFjQTtJQUNyQyxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFTVztJQUNqRCxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDWTtJQUMvQyxNQUFNTSxXQUFXcEIsMkRBQVdBLENBQUNrQjtJQUU3QmpCLGdEQUFTQSxDQUFDO1FBQ1JrQixlQUFlTDtJQUNqQixHQUFHO1FBQUNBO0tBQVk7SUFFaEIsTUFBTSxFQUFFTyxRQUFRQyxJQUFJLEVBQUUsR0FBR2Ysa0VBQVdBLENBQUM7UUFDbkNnQixZQUFZLE9BQU9DO1lBQ2pCLE1BQU1DLFVBQTJCO2dCQUMvQmI7Z0JBQ0FZO1lBQ0Y7WUFFQSxNQUFNaEIsNkNBQUtBLENBQUNrQixLQUFLLENBQUMsNEJBQTRCRDtRQUNoRDtRQUNBRSxTQUFTLENBQUNDLEtBQUtKO1lBQ2IsSUFBSUEsYUFBYSxNQUFNUCxZQUFZLENBQUNZLE9BQVNBLE9BQU87aUJBQy9DWixZQUFZLENBQUNZLE9BQVNBLE9BQU87WUFFbENWLGVBQWVDO1lBRWYsSUFBSVEsZUFBZW5CLDZDQUFVQSxFQUFFO29CQUN6Qm1CO2dCQUFKLElBQUlBLEVBQUFBLGdCQUFBQSxJQUFJRSxRQUFRLGNBQVpGLG9DQUFBQSxjQUFjRyxNQUFNLE1BQUssS0FBSztvQkFDaEMsT0FBT2hCO2dCQUNUO1lBQ0Y7WUFDQSxPQUFPTCx1REFBS0EsQ0FBQztnQkFDWHNCLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFNBQVM7WUFDWDtRQUNGO1FBQ0FDLFVBQVUsQ0FBQ0M7WUFDVCxJQUFJbEIsZ0JBQWdCa0IsTUFBTTtnQkFDeEJqQixlQUFla0I7Z0JBQ2YsSUFBSUQsU0FBUyxNQUFNbkIsWUFBWSxDQUFDWSxPQUFTQSxPQUFPO3FCQUMzQyxJQUFJTyxTQUFTLFFBQVFuQixZQUFZLENBQUNZLE9BQVNBLE9BQU87WUFDekQ7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEMsOENBQU1BO2dCQUNMcUMsU0FBUyxJQUFNbEIsS0FBSztnQkFDcEJtQixNQUFLO2dCQUNMUCxTQUFRO2dCQUNSUSxjQUFXOzBCQUVYLDRFQUFDckMsb0dBQVVBO29CQUNUa0MsV0FBV2pDLDhDQUFFQSxDQUFDLHlCQUF5Qjt3QkFDckMscUNBQXFDWSxnQkFBZ0I7b0JBQ3ZEOzs7Ozs7Ozs7OzswQkFJSiw4REFBQ3lCO2dCQUFFSixXQUFVOzBCQUNWdkIsV0FBV0EsV0FBVzs7Ozs7OzBCQUd6Qiw4REFBQ2IsOENBQU1BO2dCQUNMcUMsU0FBUyxJQUFNbEIsS0FBSztnQkFDcEJtQixNQUFLO2dCQUNMUCxTQUFRO2dCQUNSUSxjQUFXOzBCQUVYLDRFQUFDdEMsb0dBQVlBO29CQUNYbUMsV0FBV2pDLDhDQUFFQSxDQUFDLHlCQUF5Qjt3QkFDckMsNkJBQTZCWSxnQkFBZ0I7b0JBQy9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBakZNUDs7UUFLbUJaLG1FQUFjQTtRQUdwQkMsdURBQVdBO1FBTUhPLDhEQUFXQTs7O0tBZGhDSTtBQW1GTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0LXZvdGUvUG9zdFZvdGVDbGllbnQudHN4P2YwMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUN1c3RvbVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLWN1c3RvbS10b2FzdFwiO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCB7IFZvdGVUeXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL0J1dHRvblwiO1xuaW1wb3J0IHsgQXJyb3dCaWdEb3duLCBBcnJvd0JpZ1VwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUG9zdFZvdGVSZXF1ZXN0IH0gZnJvbSBcIkAvbGliL3ZhbGlkYXRvcnMvdm90ZVwiO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5cbmludGVyZmFjZSBQb3N0Vm90ZUNsaWVudFByb3BzIHtcbiAgcG9zdElkOiBzdHJpbmc7XG4gIGluaXRpYWxWb3Rlc0FtdDogbnVtYmVyO1xuICBpbml0aWFsVm90ZT86IFZvdGVUeXBlIHwgbnVsbDtcbn1cblxuY29uc3QgUG9zdFZvdGVDbGllbnQ6IEZDPFBvc3RWb3RlQ2xpZW50UHJvcHM+ID0gKHtcbiAgcG9zdElkLFxuICBpbml0aWFsVm90ZXNBbXQsXG4gIGluaXRpYWxWb3RlLFxufSkgPT4ge1xuICBjb25zdCB7IGxvZ2luVG9hc3QgfSA9IHVzZUN1c3RvbVRvYXN0KCk7XG4gIGNvbnN0IFt2b3Rlc0FtdCwgc2V0Vm90ZXNBbXRdID0gdXNlU3RhdGU8bnVtYmVyPihpbml0aWFsVm90ZXNBbXQpO1xuICBjb25zdCBbY3VycmVudFZvdGUsIHNldEN1cnJlbnRWb3RlXSA9IHVzZVN0YXRlKGluaXRpYWxWb3RlKTtcbiAgY29uc3QgcHJldlZvdGUgPSB1c2VQcmV2aW91cyhjdXJyZW50Vm90ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50Vm90ZShpbml0aWFsVm90ZSk7XG4gIH0sIFtpbml0aWFsVm90ZV0pO1xuXG4gIGNvbnN0IHsgbXV0YXRlOiB2b3RlIH0gPSB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25GbjogYXN5bmMgKHZvdGVUeXBlOiBWb3RlVHlwZSkgPT4ge1xuICAgICAgY29uc3QgcGF5bG9hZDogUG9zdFZvdGVSZXF1ZXN0ID0ge1xuICAgICAgICBwb3N0SWQsXG4gICAgICAgIHZvdGVUeXBlLFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgYXhpb3MucGF0Y2goXCIvYXBpL3N1YnJlZGRpdC9wb3N0L3ZvdGVcIiwgcGF5bG9hZCk7XG4gICAgfSxcbiAgICBvbkVycm9yOiAoZXJyLCB2b3RlVHlwZSkgPT4ge1xuICAgICAgaWYgKHZvdGVUeXBlID09PSBcIlVQXCIpIHNldFZvdGVzQW10KChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICBlbHNlIHNldFZvdGVzQW10KChwcmV2KSA9PiBwcmV2ICsgMSk7XG5cbiAgICAgIHNldEN1cnJlbnRWb3RlKHByZXZWb3RlKTtcblxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICByZXR1cm4gbG9naW5Ub2FzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91ciB2b3RlIHdhcyBub3QgcmVnaXN0ZXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk11dGF0ZTogKHR5cGU6IFZvdGVUeXBlKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFZvdGUgPT09IHR5cGUpIHtcbiAgICAgICAgc2V0Q3VycmVudFZvdGUodW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiVVBcIikgc2V0Vm90ZXNBbXQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJET1dOXCIpIHNldFZvdGVzQW10KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNtOmZsZXgtY29sIGdhcC00IHNtOmdhcC0wIHByLTYgc206dy0yMCBwYi00IHNtOnBiLTBcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZShcIlVQXCIpfVxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBhcmlhLWxhYmVsPVwidXB2b3RlXCJcbiAgICAgID5cbiAgICAgICAgPEFycm93QmlnVXBcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFwiaC01IHctNSB0ZXh0LXppbmMtNzAwXCIsIHtcbiAgICAgICAgICAgIFwidGV4dC1lbWVyYWxkLTUwMCBmaWxsLWVtZXJhbGQtNTAwXCI6IGN1cnJlbnRWb3RlID09PSBcIlVQXCIsXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMiBmb250LW1lZGl1bSB0ZXh0LXNtIHRleHQtemluYy05MDBcIj5cbiAgICAgICAge3ZvdGVzQW10ID8gdm90ZXNBbXQgOiAwfVxuICAgICAgPC9wPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGUoXCJET1dOXCIpfVxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiZG93bnZvdGVcIlxuICAgICAgPlxuICAgICAgICA8QXJyb3dCaWdEb3duXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcImgtNSB3LTUgdGV4dC16aW5jLTcwMFwiLCB7XG4gICAgICAgICAgICBcInRleHQtcmVkLTUwMCBmaWxsLXJlZC01MDBcIjogY3VycmVudFZvdGUgPT09IFwiVVBcIixcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFZvdGVDbGllbnQ7XG4iXSwibmFtZXMiOlsidXNlQ3VzdG9tVG9hc3QiLCJ1c2VQcmV2aW91cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQXJyb3dCaWdEb3duIiwiQXJyb3dCaWdVcCIsImNuIiwidXNlTXV0YXRpb24iLCJheGlvcyIsIkF4aW9zRXJyb3IiLCJ0b2FzdCIsIlBvc3RWb3RlQ2xpZW50IiwicG9zdElkIiwiaW5pdGlhbFZvdGVzQW10IiwiaW5pdGlhbFZvdGUiLCJsb2dpblRvYXN0Iiwidm90ZXNBbXQiLCJzZXRWb3Rlc0FtdCIsImN1cnJlbnRWb3RlIiwic2V0Q3VycmVudFZvdGUiLCJwcmV2Vm90ZSIsIm11dGF0ZSIsInZvdGUiLCJtdXRhdGlvbkZuIiwidm90ZVR5cGUiLCJwYXlsb2FkIiwicGF0Y2giLCJvbkVycm9yIiwiZXJyIiwicHJldiIsInJlc3BvbnNlIiwic3RhdHVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJvbk11dGF0ZSIsInR5cGUiLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsImFyaWEtbGFiZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/post-vote/PostVoteClient.tsx\n"));

/***/ })

});