"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/r/[slug]/submit/page",{

/***/ "(app-pages-browser)/./src/components/Editor.tsx":
/*!***********************************!*\
  !*** ./src/components/Editor.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-textarea-autosize */ \"(app-pages-browser)/./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_validators_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/validators/post */ \"(app-pages-browser)/./src/lib/validators/post.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _lib_uploadthing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/uploadthing */ \"(app-pages-browser)/./src/lib/uploadthing.ts\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-pages-browser)/./src/hooks/use-toast.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Editor = (param)=>{\n    let { subredditId } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const Router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_lib_validators_post__WEBPACK_IMPORTED_MODULE_2__.PostValidator),\n        defaultValues: {\n            subredditId,\n            title: \"\",\n            content: null\n        }\n    });\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const _titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const initializeEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        const EditorJS = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_editorjs_dist_editorjs_mjs\").then(__webpack_require__.bind(__webpack_require__, /*! @editorjs/editorjs */ \"(app-pages-browser)/./node_modules/@editorjs/editorjs/dist/editorjs.mjs\"))).default;\n        const Header = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_header_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/header */ \"(app-pages-browser)/./node_modules/@editorjs/header/dist/bundle.js\", 23))).default;\n        const Embed = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_embed_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/embed */ \"(app-pages-browser)/./node_modules/@editorjs/embed/dist/bundle.js\", 23))).default;\n        const Table = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_table_dist_table_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/table */ \"(app-pages-browser)/./node_modules/@editorjs/table/dist/table.js\", 23))).default;\n        const List = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_list_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/list */ \"(app-pages-browser)/./node_modules/@editorjs/list/dist/bundle.js\", 23))).default;\n        const Code = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_code_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/code */ \"(app-pages-browser)/./node_modules/@editorjs/code/dist/bundle.js\", 23))).default;\n        const LinkTool = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_link_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/link */ \"(app-pages-browser)/./node_modules/@editorjs/link/dist/bundle.js\", 23))).default;\n        const InlineCode = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_inline-code_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/inline-code */ \"(app-pages-browser)/./node_modules/@editorjs/inline-code/dist/bundle.js\", 23))).default;\n        const ImageTool = (await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_editorjs_image_dist_bundle_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! @editorjs/image */ \"(app-pages-browser)/./node_modules/@editorjs/image/dist/bundle.js\", 23))).default;\n        if (!ref.current) {\n            const editor = new EditorJS({\n                holder: \"editor\",\n                onReady () {\n                    ref.current = editor;\n                },\n                placeholder: \"Type here to write your post...\",\n                inlineToolbar: true,\n                data: {\n                    blocks: []\n                },\n                tools: {\n                    header: Header,\n                    linkTool: {\n                        class: LinkTool,\n                        config: {\n                            endpoint: \"/api/link\"\n                        }\n                    },\n                    image: {\n                        class: ImageTool,\n                        config: {\n                            uploader: {\n                                async uploadByFile (file) {\n                                    // upload to uploadthing\n                                    const [res] = await (0,_lib_uploadthing__WEBPACK_IMPORTED_MODULE_4__.uploadFiles)([\n                                        file\n                                    ], \"imageUploader\");\n                                    return {\n                                        success: 1,\n                                        file: {\n                                            url: res.fileUrl\n                                        }\n                                    };\n                                }\n                            }\n                        }\n                    },\n                    list: List,\n                    code: Code,\n                    inlineCode: InlineCode,\n                    table: Table,\n                    embed: Embed\n                }\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            setIsMounted(true);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (Object.keys(errors).length) {\n            for (const [_keys, value] of Object.entries(errors)){\n                (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__.toast)({\n                    title: \"Something went wrong.\",\n                    description: value.message,\n                    variant: \"destructive\"\n                });\n            }\n        }\n    }, [\n        errors\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const init = async ()=>{\n            await initializeEditor();\n            setTimeout(()=>{\n                var _titleRef_current;\n                (_titleRef_current = _titleRef.current) === null || _titleRef_current === void 0 ? void 0 : _titleRef_current.focus();\n            }, 0);\n        };\n        if (isMounted) {\n            init();\n            return ()=>{\n                var _ref_current;\n                (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.destroy();\n                ref.current = undefined;\n            };\n        }\n    }, [\n        isMounted,\n        initializeEditor\n    ]);\n    const {} = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({\n        mutationFn: async (param)=>{\n            let { title, content, subredditId } = param;\n            const payload = {\n                subredditId,\n                title,\n                content\n            };\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"/api/subreddit/post/create\");\n            return data;\n        },\n        onError: ()=>{\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__.toast)({\n                title: \"Something went wrong.\",\n                description: \"Your post was not published. Please try again later.\",\n                variant: \"destructive\"\n            });\n        },\n        onSuccess: ()=>{\n            // r/mycommunity/submit into r/mycommunity\n            const newPathname = pathname.split(\"/\").slice(0, -1).join(\"/\");\n            Router.push(newPathname);\n        }\n    });\n    async function onSubmit(data) {\n        var _ref_current;\n        const blocks = await ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.save());\n        const payload = {\n            title: data.title,\n            content: blocks,\n            subredditId\n        };\n    }\n    const { ref: titleRef, ...rest } = register(\"title\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 bg-zinc-50 rounded-lg border border-zinc-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            id: \"subreddit-post-form\",\n            className: \"w-fit\",\n            onSubmit: handleSubmit((e)=>{}),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prose prose-stone dark:prose-invert\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        ref: (e)=>{\n                            titleRef(e);\n                            //@ts-ignore\n                            _titleRef.current = e;\n                        },\n                        ...rest,\n                        placeholder: \"Title\",\n                        className: \"w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Editor.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"editor\",\n                        className: \"min-h-[500px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Editor.tsx\",\n                        lineNumber: 191,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Editor.tsx\",\n                lineNumber: 180,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Editor.tsx\",\n            lineNumber: 175,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/reddit-clone/src/components/Editor.tsx\",\n        lineNumber: 174,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Editor, \"clO6BI5QYWMDzp+KqiJnC/3SmSg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation\n    ];\n});\n_c = Editor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVxRTtBQUNkO0FBQ2I7QUFDaUM7QUFDckI7QUFFTjtBQUNOO0FBQ1U7QUFDMUI7QUFDK0I7QUFPekQsTUFBTWMsU0FBMEI7UUFBQyxFQUFFQyxXQUFXLEVBQUU7O0lBQzlDLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNSyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxFQUNKSyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFDdEIsR0FBR2hCLHdEQUFPQSxDQUFXO1FBQ3BCaUIsVUFBVWYsb0VBQVdBLENBQUNELCtEQUFhQTtRQUNuQ2lCLGVBQWU7WUFDYlI7WUFDQVMsT0FBTztZQUNQQyxTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1DLE1BQU14Qiw2Q0FBTUE7SUFDbEIsTUFBTSxDQUFDeUIsV0FBV0MsYUFBYSxHQUFHekIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTTBCLFlBQVkzQiw2Q0FBTUEsQ0FBc0I7SUFFOUMsTUFBTTRCLG1CQUFtQjlCLGtEQUFXQSxDQUFDO1FBQ25DLE1BQU0rQixXQUFXLENBQUMsTUFBTSxxUUFBMkIsRUFBR0MsT0FBTztRQUM3RCxNQUFNQyxTQUFTLENBQUMsTUFBTSwrUEFBeUIsRUFBR0QsT0FBTztRQUN6RCxNQUFNRSxRQUFRLENBQUMsTUFBTSw0UEFBd0IsRUFBR0YsT0FBTztRQUN2RCxNQUFNRyxRQUFRLENBQUMsTUFBTSwwUEFBd0IsRUFBR0gsT0FBTztRQUN2RCxNQUFNSSxPQUFPLENBQUMsTUFBTSx5UEFBdUIsRUFBR0osT0FBTztRQUNyRCxNQUFNSyxPQUFPLENBQUMsTUFBTSx5UEFBdUIsRUFBR0wsT0FBTztRQUNyRCxNQUFNTSxXQUFXLENBQUMsTUFBTSx5UEFBdUIsRUFBR04sT0FBTztRQUN6RCxNQUFNTyxhQUFhLENBQUMsTUFBTSw4UUFB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QSxhQUFhbUUsSUFBSTtRQUV0QyxNQUFNVixVQUErQjtZQUNuQzNELE9BQU91QixLQUFLdkIsS0FBSztZQUNqQkMsU0FBU3VCO1lBQ1RqQztRQUNGO0lBQ0Y7SUFFQSxNQUFNLEVBQUVXLEtBQUtvRSxRQUFRLEVBQUUsR0FBR0MsTUFBTSxHQUFHN0UsU0FBUztJQUU1QyxxQkFDRSw4REFBQzhFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0NDLElBQUc7WUFDSEYsV0FBVTtZQUNWTCxVQUFVekUsYUFBYSxDQUFDaUYsS0FBTztzQkFFL0IsNEVBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzdGLGdFQUFnQkE7d0JBQ2ZzQixLQUFLLENBQUMwRTs0QkFDSk4sU0FBU007NEJBQ1QsWUFBWTs0QkFDWnZFLFVBQVVZLE9BQU8sR0FBRzJEO3dCQUN0Qjt3QkFDQyxHQUFHTCxJQUFJO3dCQUNSbEQsYUFBWTt3QkFDWm9ELFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlHLElBQUc7d0JBQVNGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0FoTE1uRjs7UUFDYUYsd0RBQVdBO1FBQ2JDLHNEQUFTQTtRQUtwQlIsb0RBQU9BO1FBeUdBSyw4REFBV0E7OztLQWhIbEJJO0FBa0xOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci50c3g/NTk2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZVwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IFBvc3RDcmVhdGlvblJlcXVlc3QsIFBvc3RWYWxpZGF0b3IgfSBmcm9tIFwiQC9saWIvdmFsaWRhdG9ycy9wb3N0XCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHR5cGUgRWRpdG9ySlMgZnJvbSBcIkBlZGl0b3Jqcy9lZGl0b3Jqc1wiO1xuaW1wb3J0IHsgdXBsb2FkRmlsZXMgfSBmcm9tIFwiQC9saWIvdXBsb2FkdGhpbmdcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBFZGl0b3JQcm9wcyB7XG4gIHN1YnJlZGRpdElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVkaXRvcjogRkM8RWRpdG9yUHJvcHM+ID0gKHsgc3VicmVkZGl0SWQgfSkgPT4ge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08Rm9ybURhdGE+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoUG9zdFZhbGlkYXRvciksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgc3VicmVkZGl0SWQsXG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVmID0gdXNlUmVmPEVkaXRvckpTPigpO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBfdGl0bGVSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUVkaXRvciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBFZGl0b3JKUyA9IChhd2FpdCBpbXBvcnQoXCJAZWRpdG9yanMvZWRpdG9yanNcIikpLmRlZmF1bHQ7XG4gICAgY29uc3QgSGVhZGVyID0gKGF3YWl0IGltcG9ydChcIkBlZGl0b3Jqcy9oZWFkZXJcIikpLmRlZmF1bHQ7XG4gICAgY29uc3QgRW1iZWQgPSAoYXdhaXQgaW1wb3J0KFwiQGVkaXRvcmpzL2VtYmVkXCIpKS5kZWZhdWx0O1xuICAgIGNvbnN0IFRhYmxlID0gKGF3YWl0IGltcG9ydChcIkBlZGl0b3Jqcy90YWJsZVwiKSkuZGVmYXVsdDtcbiAgICBjb25zdCBMaXN0ID0gKGF3YWl0IGltcG9ydChcIkBlZGl0b3Jqcy9saXN0XCIpKS5kZWZhdWx0O1xuICAgIGNvbnN0IENvZGUgPSAoYXdhaXQgaW1wb3J0KFwiQGVkaXRvcmpzL2NvZGVcIikpLmRlZmF1bHQ7XG4gICAgY29uc3QgTGlua1Rvb2wgPSAoYXdhaXQgaW1wb3J0KFwiQGVkaXRvcmpzL2xpbmtcIikpLmRlZmF1bHQ7XG4gICAgY29uc3QgSW5saW5lQ29kZSA9IChhd2FpdCBpbXBvcnQoXCJAZWRpdG9yanMvaW5saW5lLWNvZGVcIikpLmRlZmF1bHQ7XG4gICAgY29uc3QgSW1hZ2VUb29sID0gKGF3YWl0IGltcG9ydChcIkBlZGl0b3Jqcy9pbWFnZVwiKSkuZGVmYXVsdDtcblxuICAgIGlmICghcmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBFZGl0b3JKUyh7XG4gICAgICAgIGhvbGRlcjogXCJlZGl0b3JcIixcbiAgICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgICByZWYuY3VycmVudCA9IGVkaXRvcjtcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVHlwZSBoZXJlIHRvIHdyaXRlIHlvdXIgcG9zdC4uLlwiLFxuICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxuICAgICAgICBkYXRhOiB7IGJsb2NrczogW10gfSxcbiAgICAgICAgdG9vbHM6IHtcbiAgICAgICAgICBoZWFkZXI6IEhlYWRlcixcbiAgICAgICAgICBsaW5rVG9vbDoge1xuICAgICAgICAgICAgY2xhc3M6IExpbmtUb29sLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgIGVuZHBvaW50OiBcIi9hcGkvbGlua1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBjbGFzczogSW1hZ2VUb29sLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgIHVwbG9hZGVyOiB7XG4gICAgICAgICAgICAgICAgYXN5bmMgdXBsb2FkQnlGaWxlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHVwbG9hZCB0byB1cGxvYWR0aGluZ1xuICAgICAgICAgICAgICAgICAgY29uc3QgW3Jlc10gPSBhd2FpdCB1cGxvYWRGaWxlcyhbZmlsZV0sIFwiaW1hZ2VVcGxvYWRlclwiKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogMSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVzLmZpbGVVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGlzdDogTGlzdCxcbiAgICAgICAgICBjb2RlOiBDb2RlLFxuICAgICAgICAgIGlubGluZUNvZGU6IElubGluZUNvZGUsXG4gICAgICAgICAgdGFibGU6IFRhYmxlLFxuICAgICAgICAgIGVtYmVkOiBFbWJlZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBbX2tleXMsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlcnJvcnMpKSB7XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogKHZhbHVlIGFzIHsgbWVzc2FnZTogc3RyaW5nIH0pLm1lc3NhZ2UsXG4gICAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlcnJvcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBpbml0aWFsaXplRWRpdG9yKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBfdGl0bGVSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICBpZiAoaXNNb3VudGVkKSB7XG4gICAgICBpbml0KCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICByZWYuY3VycmVudD8uZGVzdHJveSgpO1xuICAgICAgICByZWYuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNNb3VudGVkLCBpbml0aWFsaXplRWRpdG9yXSk7XG5cbiAgY29uc3Qge30gPSB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25GbjogYXN5bmMgKHtcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudCxcbiAgICAgIHN1YnJlZGRpdElkLFxuICAgIH06IFBvc3RDcmVhdGlvblJlcXVlc3QpID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQ6IFBvc3RDcmVhdGlvblJlcXVlc3QgPSB7XG4gICAgICAgIHN1YnJlZGRpdElkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH07XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3N1YnJlZGRpdC9wb3N0L2NyZWF0ZVwiKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgb25FcnJvcjogKCkgPT4ge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91ciBwb3N0IHdhcyBub3QgcHVibGlzaGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgLy8gci9teWNvbW11bml0eS9zdWJtaXQgaW50byByL215Y29tbXVuaXR5XG5cbiAgICAgIGNvbnN0IG5ld1BhdGhuYW1lID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiL1wiKTtcbiAgICAgIFJvdXRlci5wdXNoKG5ld1BhdGhuYW1lKTtcbiAgICB9LFxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChkYXRhOiBQb3N0Q3JlYXRpb25SZXF1ZXN0KSB7XG4gICAgY29uc3QgYmxvY2tzID0gYXdhaXQgcmVmLmN1cnJlbnQ/LnNhdmUoKTtcblxuICAgIGNvbnN0IHBheWxvYWQ6IFBvc3RDcmVhdGlvblJlcXVlc3QgPSB7XG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IGJsb2NrcyxcbiAgICAgIHN1YnJlZGRpdElkLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IHJlZjogdGl0bGVSZWYsIC4uLnJlc3QgfSA9IHJlZ2lzdGVyKFwidGl0bGVcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTQgYmctemluYy01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItemluYy0yMDBcIj5cbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwic3VicmVkZGl0LXBvc3QtZm9ybVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZml0XCJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgoZSkgPT4ge30pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHByb3NlLXN0b25lIGRhcms6cHJvc2UtaW52ZXJ0XCI+XG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgIHJlZj17KGUpID0+IHtcbiAgICAgICAgICAgICAgdGl0bGVSZWYoZSk7XG4gICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBfdGl0bGVSZWYuY3VycmVudCA9IGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByZXNpemUtbm9uZSBhcHBlYXJhbmNlLW5vbmUgb3ZlcmZsb3ctaGlkZGVuIGJnLXRyYW5zcGFyZW50IHRleHQtNXhsIGZvbnQtYm9sZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiIGNsYXNzTmFtZT1cIm1pbi1oLVs1MDBweF1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVGV4dGFyZWFBdXRvc2l6ZSIsInVzZUZvcm0iLCJQb3N0VmFsaWRhdG9yIiwiem9kUmVzb2x2ZXIiLCJ1cGxvYWRGaWxlcyIsInRvYXN0IiwidXNlTXV0YXRpb24iLCJheGlvcyIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiRWRpdG9yIiwic3VicmVkZGl0SWQiLCJwYXRobmFtZSIsIlJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzb2x2ZXIiLCJkZWZhdWx0VmFsdWVzIiwidGl0bGUiLCJjb250ZW50IiwicmVmIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwiX3RpdGxlUmVmIiwiaW5pdGlhbGl6ZUVkaXRvciIsIkVkaXRvckpTIiwiZGVmYXVsdCIsIkhlYWRlciIsIkVtYmVkIiwiVGFibGUiLCJMaXN0IiwiQ29kZSIsIkxpbmtUb29sIiwiSW5saW5lQ29kZSIsIkltYWdlVG9vbCIsImN1cnJlbnQiLCJlZGl0b3IiLCJob2xkZXIiLCJvblJlYWR5IiwicGxhY2Vob2xkZXIiLCJpbmxpbmVUb29sYmFyIiwiZGF0YSIsImJsb2NrcyIsInRvb2xzIiwiaGVhZGVyIiwibGlua1Rvb2wiLCJjbGFzcyIsImNvbmZpZyIsImVuZHBvaW50IiwiaW1hZ2UiLCJ1cGxvYWRlciIsInVwbG9hZEJ5RmlsZSIsImZpbGUiLCJyZXMiLCJzdWNjZXNzIiwidXJsIiwiZmlsZVVybCIsImxpc3QiLCJjb2RlIiwiaW5saW5lQ29kZSIsInRhYmxlIiwiZW1iZWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiX2tleXMiLCJ2YWx1ZSIsImVudHJpZXMiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJ2YXJpYW50IiwiaW5pdCIsInNldFRpbWVvdXQiLCJmb2N1cyIsImRlc3Ryb3kiLCJ1bmRlZmluZWQiLCJtdXRhdGlvbkZuIiwicGF5bG9hZCIsInBvc3QiLCJvbkVycm9yIiwib25TdWNjZXNzIiwibmV3UGF0aG5hbWUiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsInB1c2giLCJvblN1Ym1pdCIsInNhdmUiLCJ0aXRsZVJlZiIsInJlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaWQiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor.tsx\n"));

/***/ })

});