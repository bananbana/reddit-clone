/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/page",{

/***/ "(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIntersection: function() { return /* binding */ useIntersection; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useIntersection(options) {\n  const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element) => {\n    if (observer.current) {\n      observer.current.disconnect();\n      observer.current = null;\n    }\n    if (element === null) {\n      setEntry(null);\n      return;\n    }\n    observer.current = new IntersectionObserver(([_entry]) => {\n      setEntry(_entry);\n    }, options);\n    observer.current.observe(element);\n  }, [options == null ? void 0 : options.rootMargin, options == null ? void 0 : options.root, options == null ? void 0 : options.threshold]);\n  return { ref, entry };\n}\n\n\n//# sourceMappingURL=use-intersection.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AbWFudGluZS9ob29rcy9lc20vdXNlLWludGVyc2VjdGlvbi91c2UtaW50ZXJzZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDs7QUFFdEQ7QUFDQSw0QkFBNEIsK0NBQVE7QUFDcEMsbUJBQW1CLDZDQUFNO0FBQ3pCLGNBQWMsa0RBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsV0FBVztBQUNYOztBQUUyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hbnRpbmUvaG9va3MvZXNtL3VzZS1pbnRlcnNlY3Rpb24vdXNlLWludGVyc2VjdGlvbi5qcz83MWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24ob3B0aW9ucykge1xuICBjb25zdCBbZW50cnksIHNldEVudHJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvYnNlcnZlciA9IHVzZVJlZigpO1xuICBjb25zdCByZWYgPSB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgIGlmIChvYnNlcnZlci5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5jdXJyZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgc2V0RW50cnkobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9ic2VydmVyLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtfZW50cnldKSA9PiB7XG4gICAgICBzZXRFbnRyeShfZW50cnkpO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVyLmN1cnJlbnQub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSwgW29wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucm9vdE1hcmdpbiwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yb290LCBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocmVzaG9sZF0pO1xuICByZXR1cm4geyByZWYsIGVudHJ5IH07XG59XG5cbmV4cG9ydCB7IHVzZUludGVyc2VjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fnode_modules%2Fnext%2Fdist%2Fshared%2Flib%2Flazy-dynamic%2Fdynamic-no-ssr.js&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FMiniCreatePost.tsx&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FPostFeed.tsx&server=false!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fnode_modules%2Fnext%2Fdist%2Fshared%2Flib%2Flazy-dynamic%2Fdynamic-no-ssr.js&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FMiniCreatePost.tsx&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FPostFeed.tsx&server=false! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/components/MiniCreatePost.tsx */ \"(app-pages-browser)/./src/components/MiniCreatePost.tsx\"));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/components/PostFeed.tsx */ \"(app-pages-browser)/./src/components/PostFeed.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz0lMkZVc2VycyUyRmRhd2lkZGVib3N6JTJGcmVkZGl0LWNsb25lJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZzaGFyZWQlMkZsaWIlMkZsYXp5LWR5bmFtaWMlMkZkeW5hbWljLW5vLXNzci5qcyZtb2R1bGVzPSUyRlVzZXJzJTJGZGF3aWRkZWJvc3olMkZyZWRkaXQtY2xvbmUlMkZzcmMlMkZjb21wb25lbnRzJTJGTWluaUNyZWF0ZVBvc3QudHN4Jm1vZHVsZXM9JTJGVXNlcnMlMkZkYXdpZGRlYm9zeiUyRnJlZGRpdC1jbG9uZSUyRnNyYyUyRmNvbXBvbmVudHMlMkZQb3N0RmVlZC50c3gmc2VydmVyPWZhbHNlISIsIm1hcHBpbmdzIjoiQUFBQSxvUUFBcUk7QUFDckksZ01BQXNHO0FBQ3RHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy9kYXdpZGRlYm9zei9yZWRkaXQtY2xvbmUvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2xhenktZHluYW1pYy9keW5hbWljLW5vLXNzci5qc1wiKTtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL1VzZXJzL2Rhd2lkZGVib3N6L3JlZGRpdC1jbG9uZS9zcmMvY29tcG9uZW50cy9NaW5pQ3JlYXRlUG9zdC50c3hcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy9kYXdpZGRlYm9zei9yZWRkaXQtY2xvbmUvc3JjL2NvbXBvbmVudHMvUG9zdEZlZWQudHN4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fnode_modules%2Fnext%2Fdist%2Fshared%2Flib%2Flazy-dynamic%2Fdynamic-no-ssr.js&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FMiniCreatePost.tsx&modules=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fcomponents%2FPostFeed.tsx&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/PostFeed.tsx":
/*!*************************************!*\
  !*** ./src/components/PostFeed.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ \"(app-pages-browser)/./node_modules/@mantine/hooks/esm/use-intersection/use-intersection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PostFeed = (param)=>{\n    let { initialPosts, subredditName } = param;\n    _s();\n    const lastPostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { ref, entry } = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useIntersection)({\n        root: lastPostRef.current,\n        threshold: 1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"PostFeed\"\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/PostFeed.tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined);\n};\n_s(PostFeed, \"EnoBhByrlkcfiZMjxNcXIiJmDl4=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useIntersection\n    ];\n});\n_c = PostFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostFeed);\nvar _c;\n$RefreshReg$(_c, \"PostFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGZWVkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1DO0FBRWM7QUFPakQsTUFBTUUsV0FBOEI7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRTs7SUFDbEUsTUFBTUMsY0FBY0wsNkNBQU1BLENBQWM7SUFDeEMsTUFBTSxFQUFFTSxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUFHTiwrREFBZUEsQ0FBQztRQUNyQ08sTUFBTUgsWUFBWUksT0FBTztRQUN6QkMsV0FBVztJQUNiO0lBQ0EscUJBQU8sOERBQUNDO2tCQUFJOzs7Ozs7QUFDZDtHQVBNVDs7UUFFbUJELDJEQUFlQTs7O0tBRmxDQztBQVNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGZWVkLnRzeD9kNDU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBGQywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFeHRlbmRlZFBvc3QgfSBmcm9tIFwiQC90eXBlcy9kYlwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIkBtYW50aW5lL2hvb2tzXCI7XG5cbmludGVyZmFjZSBQb3N0RmVlZFByb3BzIHtcbiAgaW5pdGlhbFBvc3RzOiBFeHRlbmRlZFBvc3RbXTtcbiAgc3VicmVkZGl0TmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgUG9zdEZlZWQ6IEZDPFBvc3RGZWVkUHJvcHM+ID0gKHsgaW5pdGlhbFBvc3RzLCBzdWJyZWRkaXROYW1lIH0pID0+IHtcbiAgY29uc3QgbGFzdFBvc3RSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHJlZiwgZW50cnkgfSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdDogbGFzdFBvc3RSZWYuY3VycmVudCxcbiAgICB0aHJlc2hvbGQ6IDEsXG4gIH0pO1xuICByZXR1cm4gPGRpdj5Qb3N0RmVlZDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RGZWVkO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUludGVyc2VjdGlvbiIsIlBvc3RGZWVkIiwiaW5pdGlhbFBvc3RzIiwic3VicmVkZGl0TmFtZSIsImxhc3RQb3N0UmVmIiwicmVmIiwiZW50cnkiLCJyb290IiwiY3VycmVudCIsInRocmVzaG9sZCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PostFeed.tsx\n"));

/***/ })

});