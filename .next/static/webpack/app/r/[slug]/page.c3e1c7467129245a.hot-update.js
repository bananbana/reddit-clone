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

/***/ "(app-pages-browser)/./src/components/PostFeed.tsx":
/*!*************************************!*\
  !*** ./src/components/PostFeed.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/hooks */ \"(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"(app-pages-browser)/./src/components/Post.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PostFeed = (param)=>{\n    let { initialPosts, subredditName } = param;\n    _s();\n    const lastPostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { ref, entry } = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useIntersection)({\n        root: lastPostRef.current,\n        threshold: 1\n    });\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { data, fetchNextPage, isFetchingNextPage } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery)([\n        \"infinite-query\"\n    ], async (param)=>{\n        let { pageParam = 1 } = param;\n        const query = \"/api/posts?limit=\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.INFINITE_SCROLLING_PAGINATION_RESULTS, \"&page=\").concat(pageParam) + (!!subredditName ? \"&subredditName=\".concat(subredditName) : \"\");\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(query);\n        return data;\n    }, {\n        getNextPageParam: (_, pages)=>{\n            return pages.length + 1;\n        },\n        initialData: {\n            pages: [\n                initialPosts\n            ],\n            pageParams: [\n                1\n            ]\n        }\n    });\n    var _data_pages_flatMap;\n    const posts = (_data_pages_flatMap = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page)) !== null && _data_pages_flatMap !== void 0 ? _data_pages_flatMap : initialPosts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"flex flex-col col-span-2 space-y-6\",\n        children: posts.map((post, index)=>{\n            const votesAmt = post.votes.reduce((acc, vote)=>{\n                if (vote.type === \"UP\") return acc + 1;\n                if (vote.type === \"DOWN\") return acc - 1;\n                return acc;\n            }, 0);\n            const currentVote = post.votes.find((vote)=>vote.userId === (session === null || session === void 0 ? void 0 : session.user.id));\n            if (index === posts.length - 1) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    ref: ref,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        currentVote: currentVote,\n                        votesAmt: votesAmt,\n                        commentAmt: post.comments.length,\n                        subredditName: post.subreddit.name,\n                        post: post\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined)\n                }, post.id, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentVote: currentVote,\n                    votesAmt: votesAmt,\n                    commentAmt: post.comments.length,\n                    subredditName: post.subreddit.name,\n                    post: post\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined);\n            }\n        })\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostFeed, \"HqONlxnM6UTYFF4ulEdf8Bss9Rg=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useIntersection,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery\n    ];\n});\n_c = PostFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostFeed);\nvar _c;\n$RefreshReg$(_c, \"PostFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGZWVkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW1DO0FBRWM7QUFDUTtBQUNRO0FBQ3ZDO0FBQ21CO0FBQ25CO0FBTzFCLE1BQU1PLFdBQThCO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUU7O0lBQ2xFLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFjO0lBQ3hDLE1BQU0sRUFBRVcsR0FBRyxFQUFFQyxLQUFLLEVBQUUsR0FBR1gsK0RBQWVBLENBQUM7UUFDckNZLE1BQU1ILFlBQVlJLE9BQU87UUFDekJDLFdBQVc7SUFDYjtJQUVBLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdaLDJEQUFVQTtJQUVwQyxNQUFNLEVBQUVXLElBQUksRUFBRUUsYUFBYSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHakIsdUVBQWdCQSxDQUNsRTtRQUFDO0tBQWlCLEVBQ2xCO1lBQU8sRUFBRWtCLFlBQVksQ0FBQyxFQUFFO1FBQ3RCLE1BQU1DLFFBQ0osb0JBQWtFRCxPQUE5Q2pCLDBFQUFxQ0EsRUFBQyxVQUFrQixPQUFWaUIsYUFDakUsRUFBQyxDQUFDWCxnQkFBZ0Isa0JBQWdDLE9BQWRBLGlCQUFrQixFQUFDO1FBRTFELE1BQU0sRUFBRU8sSUFBSSxFQUFFLEdBQUcsTUFBTVosNkNBQUtBLENBQUNrQixHQUFHLENBQUNEO1FBQ2pDLE9BQU9MO0lBQ1QsR0FDQTtRQUNFTyxrQkFBa0IsQ0FBQ0MsR0FBR0M7WUFDcEIsT0FBT0EsTUFBTUMsTUFBTSxHQUFHO1FBQ3hCO1FBQ0FDLGFBQWE7WUFBRUYsT0FBTztnQkFBQ2pCO2FBQWE7WUFBRW9CLFlBQVk7Z0JBQUM7YUFBRTtRQUFDO0lBQ3hEO1FBR1laO0lBQWQsTUFBTWEsUUFBUWIsQ0FBQUEsc0JBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVMsS0FBSyxDQUFDSyxPQUFPLENBQUMsQ0FBQ0MsT0FBU0EsbUJBQTlCZixpQ0FBQUEsc0JBQXVDUjtJQUVyRCxxQkFDRSw4REFBQ3dCO1FBQUdDLFdBQVU7a0JBQ1hKLE1BQU1LLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztZQUNoQixNQUFNQyxXQUFXRixLQUFLRyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztnQkFDdkMsSUFBSUEsS0FBS0MsSUFBSSxLQUFLLE1BQU0sT0FBT0YsTUFBTTtnQkFDckMsSUFBSUMsS0FBS0MsSUFBSSxLQUFLLFFBQVEsT0FBT0YsTUFBTTtnQkFDdkMsT0FBT0E7WUFDVCxHQUFHO1lBRUgsTUFBTUcsY0FBY1IsS0FBS0csS0FBSyxDQUFDTSxJQUFJLENBQ2pDLENBQUNILE9BQVNBLEtBQUtJLE1BQU0sTUFBSzVCLG9CQUFBQSw4QkFBQUEsUUFBUzZCLElBQUksQ0FBQ0MsRUFBRTtZQUc1QyxJQUFJWCxVQUFVUCxNQUFNSCxNQUFNLEdBQUcsR0FBRztnQkFDOUIscUJBQ0UsOERBQUNzQjtvQkFBaUJyQyxLQUFLQTs4QkFDckIsNEVBQUNMLDZDQUFJQTt3QkFDSHFDLGFBQWFBO3dCQUNiTixVQUFVQTt3QkFDVlksWUFBWWQsS0FBS2UsUUFBUSxDQUFDeEIsTUFBTTt3QkFDaENqQixlQUFlMEIsS0FBS2dCLFNBQVMsQ0FBQ0MsSUFBSTt3QkFDbENqQixNQUFNQTs7Ozs7O21CQU5EQSxLQUFLWSxFQUFFOzs7OztZQVVwQixPQUFPO2dCQUNMLHFCQUNFLDhEQUFDekMsNkNBQUlBO29CQUNIcUMsYUFBYUE7b0JBQ2JOLFVBQVVBO29CQUNWWSxZQUFZZCxLQUFLZSxRQUFRLENBQUN4QixNQUFNO29CQUNoQ2pCLGVBQWUwQixLQUFLZ0IsU0FBUyxDQUFDQyxJQUFJO29CQUNsQ2pCLE1BQU1BOzs7Ozs7WUFHWjtRQUNGOzs7Ozs7QUFHTjtHQXBFTTVCOztRQUVtQk4sMkRBQWVBO1FBS1pJLHVEQUFVQTtRQUVnQkgsbUVBQWdCQTs7O0tBVGhFSztBQXNFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0RmVlZC50c3g/ZDQ1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRXh0ZW5kZWRQb3N0IH0gZnJvbSBcIkAvdHlwZXMvZGJcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gXCJAbWFudGluZS9ob29rc1wiO1xuaW1wb3J0IHsgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IElORklOSVRFX1NDUk9MTElOR19QQUdJTkFUSU9OX1JFU1VMVFMgfSBmcm9tIFwiQC9jb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9Qb3N0XCI7XG5cbmludGVyZmFjZSBQb3N0RmVlZFByb3BzIHtcbiAgaW5pdGlhbFBvc3RzOiBFeHRlbmRlZFBvc3RbXTtcbiAgc3VicmVkZGl0TmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgUG9zdEZlZWQ6IEZDPFBvc3RGZWVkUHJvcHM+ID0gKHsgaW5pdGlhbFBvc3RzLCBzdWJyZWRkaXROYW1lIH0pID0+IHtcbiAgY29uc3QgbGFzdFBvc3RSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHJlZiwgZW50cnkgfSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdDogbGFzdFBvc3RSZWYuY3VycmVudCxcbiAgICB0aHJlc2hvbGQ6IDEsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZmV0Y2hOZXh0UGFnZSwgaXNGZXRjaGluZ05leHRQYWdlIH0gPSB1c2VJbmZpbml0ZVF1ZXJ5KFxuICAgIFtcImluZmluaXRlLXF1ZXJ5XCJdLFxuICAgIGFzeW5jICh7IHBhZ2VQYXJhbSA9IDEgfSkgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPVxuICAgICAgICBgL2FwaS9wb3N0cz9saW1pdD0ke0lORklOSVRFX1NDUk9MTElOR19QQUdJTkFUSU9OX1JFU1VMVFN9JnBhZ2U9JHtwYWdlUGFyYW19YCArXG4gICAgICAgICghIXN1YnJlZGRpdE5hbWUgPyBgJnN1YnJlZGRpdE5hbWU9JHtzdWJyZWRkaXROYW1lfWAgOiBcIlwiKTtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQocXVlcnkpO1xuICAgICAgcmV0dXJuIGRhdGEgYXMgRXh0ZW5kZWRQb3N0W107XG4gICAgfSxcbiAgICB7XG4gICAgICBnZXROZXh0UGFnZVBhcmFtOiAoXywgcGFnZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhZ2VzLmxlbmd0aCArIDE7XG4gICAgICB9LFxuICAgICAgaW5pdGlhbERhdGE6IHsgcGFnZXM6IFtpbml0aWFsUG9zdHNdLCBwYWdlUGFyYW1zOiBbMV0gfSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcG9zdHMgPSBkYXRhPy5wYWdlcy5mbGF0TWFwKChwYWdlKSA9PiBwYWdlKSA/PyBpbml0aWFsUG9zdHM7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yIHNwYWNlLXktNlwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgdm90ZXNBbXQgPSBwb3N0LnZvdGVzLnJlZHVjZSgoYWNjLCB2b3RlKSA9PiB7XG4gICAgICAgICAgaWYgKHZvdGUudHlwZSA9PT0gXCJVUFwiKSByZXR1cm4gYWNjICsgMTtcbiAgICAgICAgICBpZiAodm90ZS50eXBlID09PSBcIkRPV05cIikgcmV0dXJuIGFjYyAtIDE7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFZvdGUgPSBwb3N0LnZvdGVzLmZpbmQoXG4gICAgICAgICAgKHZvdGUpID0+IHZvdGUudXNlcklkID09PSBzZXNzaW9uPy51c2VyLmlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBwb3N0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgPFBvc3RcbiAgICAgICAgICAgICAgICBjdXJyZW50Vm90ZT17Y3VycmVudFZvdGV9XG4gICAgICAgICAgICAgICAgdm90ZXNBbXQ9e3ZvdGVzQW10fVxuICAgICAgICAgICAgICAgIGNvbW1lbnRBbXQ9e3Bvc3QuY29tbWVudHMubGVuZ3RofVxuICAgICAgICAgICAgICAgIHN1YnJlZGRpdE5hbWU9e3Bvc3Quc3VicmVkZGl0Lm5hbWV9XG4gICAgICAgICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBvc3RcbiAgICAgICAgICAgICAgY3VycmVudFZvdGU9e2N1cnJlbnRWb3RlfVxuICAgICAgICAgICAgICB2b3Rlc0FtdD17dm90ZXNBbXR9XG4gICAgICAgICAgICAgIGNvbW1lbnRBbXQ9e3Bvc3QuY29tbWVudHMubGVuZ3RofVxuICAgICAgICAgICAgICBzdWJyZWRkaXROYW1lPXtwb3N0LnN1YnJlZGRpdC5uYW1lfVxuICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZlZWQ7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlSW50ZXJzZWN0aW9uIiwidXNlSW5maW5pdGVRdWVyeSIsIklORklOSVRFX1NDUk9MTElOR19QQUdJTkFUSU9OX1JFU1VMVFMiLCJheGlvcyIsInVzZVNlc3Npb24iLCJQb3N0IiwiUG9zdEZlZWQiLCJpbml0aWFsUG9zdHMiLCJzdWJyZWRkaXROYW1lIiwibGFzdFBvc3RSZWYiLCJyZWYiLCJlbnRyeSIsInJvb3QiLCJjdXJyZW50IiwidGhyZXNob2xkIiwiZGF0YSIsInNlc3Npb24iLCJmZXRjaE5leHRQYWdlIiwiaXNGZXRjaGluZ05leHRQYWdlIiwicGFnZVBhcmFtIiwicXVlcnkiLCJnZXQiLCJnZXROZXh0UGFnZVBhcmFtIiwiXyIsInBhZ2VzIiwibGVuZ3RoIiwiaW5pdGlhbERhdGEiLCJwYWdlUGFyYW1zIiwicG9zdHMiLCJmbGF0TWFwIiwicGFnZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsImluZGV4Iiwidm90ZXNBbXQiLCJ2b3RlcyIsInJlZHVjZSIsImFjYyIsInZvdGUiLCJ0eXBlIiwiY3VycmVudFZvdGUiLCJmaW5kIiwidXNlcklkIiwidXNlciIsImlkIiwibGkiLCJjb21tZW50QW10IiwiY29tbWVudHMiLCJzdWJyZWRkaXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PostFeed.tsx\n"));

/***/ })

});