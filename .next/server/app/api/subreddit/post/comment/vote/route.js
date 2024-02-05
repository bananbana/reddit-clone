"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/subreddit/post/comment/vote/route";
exports.ids = ["app/api/subreddit/post/comment/vote/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&page=%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&page=%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_dawiddebosz_reddit_clone_src_app_api_subreddit_post_comment_vote_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/subreddit/post/comment/vote/route.ts */ \"(rsc)/./src/app/api/subreddit/post/comment/vote/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/subreddit/post/comment/vote/route\",\n        pathname: \"/api/subreddit/post/comment/vote\",\n        filename: \"route\",\n        bundlePath: \"app/api/subreddit/post/comment/vote/route\"\n    },\n    resolvedPagePath: \"/Users/dawiddebosz/reddit-clone/src/app/api/subreddit/post/comment/vote/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dawiddebosz_reddit_clone_src_app_api_subreddit_post_comment_vote_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/subreddit/post/comment/vote/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJyZWRkaXQlMkZwb3N0JTJGY29tbWVudCUyRnZvdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1YnJlZGRpdCUyRnBvc3QlMkZjb21tZW50JTJGdm90ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1YnJlZGRpdCUyRnBvc3QlMkZjb21tZW50JTJGdm90ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRhd2lkZGVib3N6JTJGcmVkZGl0LWNsb25lJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmRhd2lkZGVib3N6JTJGcmVkZGl0LWNsb25lJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQzhDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGRpdC1jbG9uZS8/MjlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2Rhd2lkZGVib3N6L3JlZGRpdC1jbG9uZS9zcmMvYXBwL2FwaS9zdWJyZWRkaXQvcG9zdC9jb21tZW50L3ZvdGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnJlZGRpdC9wb3N0L2NvbW1lbnQvdm90ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1YnJlZGRpdC9wb3N0L2NvbW1lbnQvdm90ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3VicmVkZGl0L3Bvc3QvY29tbWVudC92b3RlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2Rhd2lkZGVib3N6L3JlZGRpdC1jbG9uZS9zcmMvYXBwL2FwaS9zdWJyZWRkaXQvcG9zdC9jb21tZW50L3ZvdGUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3VicmVkZGl0L3Bvc3QvY29tbWVudC92b3RlL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&page=%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/subreddit/post/comment/vote/route.ts":
/*!**********************************************************!*\
  !*** ./src/app/api/subreddit/post/comment/vote/route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _lib_validators_vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/validators/vote */ \"(rsc)/./src/lib/validators/vote.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\n\nasync function PATCH(req) {\n    try {\n        const body = await req.json();\n        const { commentId, voteType } = _lib_validators_vote__WEBPACK_IMPORTED_MODULE_2__.CommentVoteValidator.parse(body);\n        const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getAuthSession)();\n        if (!session?.user) {\n            return new Response(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        const existingVote = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.commentVote.findFirst({\n            where: {\n                userId: session.user.id,\n                commentId\n            }\n        });\n        if (existingVote) {\n            if (existingVote.type === voteType) {\n                await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.commentVote.delete({\n                    where: {\n                        AND: [\n                            {\n                                userId: session.user.id\n                            },\n                            {\n                                commentId\n                            }\n                        ]\n                    }\n                });\n                return new Response(\"OK\");\n            } else {\n                await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.commentVote.update({\n                    where: {\n                        AND: [\n                            {\n                                userId: session.user.id\n                            },\n                            {\n                                commentId\n                            }\n                        ]\n                    },\n                    data: {\n                        type: voteType\n                    }\n                });\n            }\n            return new Response(\"OK\");\n        }\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.commentVote.create({\n            data: {\n                type: voteType,\n                userId: session.user.id,\n                commentId\n            }\n        });\n        return new Response(\"OK\");\n    } catch (error) {\n        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_3__.z.ZodError) {\n            return new Response(error.message, {\n                status: 400\n            });\n        }\n        return new Response(\"Could not post to subreddit at this time. Please try later\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdWJyZWRkaXQvcG9zdC9jb21tZW50L3ZvdGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDZDtBQUMrQjtBQUNyQztBQUVqQixlQUFlSSxNQUFNQyxHQUFZO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRSxHQUFHUCxzRUFBb0JBLENBQUNRLEtBQUssQ0FBQ0o7UUFFM0QsTUFBTUssVUFBVSxNQUFNWCx5REFBY0E7UUFFcEMsSUFBSSxDQUFDVyxTQUFTQyxNQUFNO1lBQ2xCLE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRDtRQUVBLE1BQU1DLGVBQWUsTUFBTWQsdUNBQUVBLENBQUNlLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO1lBQ2xEQyxPQUFPO2dCQUNMQyxRQUFRUixRQUFRQyxJQUFJLENBQUNRLEVBQUU7Z0JBQ3ZCWjtZQUNGO1FBQ0Y7UUFFQSxJQUFJTyxjQUFjO1lBQ2hCLElBQUlBLGFBQWFNLElBQUksS0FBS1osVUFBVTtnQkFDbEMsTUFBTVIsdUNBQUVBLENBQUNlLFdBQVcsQ0FBQ00sTUFBTSxDQUFDO29CQUMxQkosT0FBTzt3QkFBRUssS0FBSzs0QkFBQztnQ0FBRUosUUFBUVIsUUFBUUMsSUFBSSxDQUFDUSxFQUFFOzRCQUFDOzRCQUFHO2dDQUFFWjs0QkFBVTt5QkFBRTtvQkFBQztnQkFDN0Q7Z0JBQ0EsT0FBTyxJQUFJSyxTQUFTO1lBQ3RCLE9BQU87Z0JBQ0wsTUFBTVosdUNBQUVBLENBQUNlLFdBQVcsQ0FBQ1EsTUFBTSxDQUFDO29CQUMxQk4sT0FBTzt3QkFBRUssS0FBSzs0QkFBQztnQ0FBRUosUUFBUVIsUUFBUUMsSUFBSSxDQUFDUSxFQUFFOzRCQUFDOzRCQUFHO2dDQUFFWjs0QkFBVTt5QkFBRTtvQkFBQztvQkFDM0RpQixNQUFNO3dCQUNKSixNQUFNWjtvQkFDUjtnQkFDRjtZQUNGO1lBQ0EsT0FBTyxJQUFJSSxTQUFTO1FBQ3RCO1FBRUEsTUFBTVosdUNBQUVBLENBQUNlLFdBQVcsQ0FBQ1UsTUFBTSxDQUFDO1lBQzFCRCxNQUFNO2dCQUNKSixNQUFNWjtnQkFDTlUsUUFBUVIsUUFBUUMsSUFBSSxDQUFDUSxFQUFFO2dCQUN2Qlo7WUFDRjtRQUNGO1FBRUEsT0FBTyxJQUFJSyxTQUFTO0lBQ3RCLEVBQUUsT0FBT2MsT0FBTztRQUNkLElBQUlBLGlCQUFpQnhCLGtDQUFDQSxDQUFDeUIsUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSWYsU0FBU2MsTUFBTUUsT0FBTyxFQUFFO2dCQUFFZixRQUFRO1lBQUk7UUFDbkQ7UUFFQSxPQUFPLElBQUlELFNBQ1QsOERBQ0E7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xvbmUvLi9zcmMvYXBwL2FwaS9zdWJyZWRkaXQvcG9zdC9jb21tZW50L3ZvdGUvcm91dGUudHM/ZmIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoU2Vzc2lvbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgQ29tbWVudFZvdGVWYWxpZGF0b3IgfSBmcm9tIFwiQC9saWIvdmFsaWRhdG9ycy92b3RlXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBjb25zdCB7IGNvbW1lbnRJZCwgdm90ZVR5cGUgfSA9IENvbW1lbnRWb3RlVmFsaWRhdG9yLnBhcnNlKGJvZHkpO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhTZXNzaW9uKCk7XG5cbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBleGlzdGluZ1ZvdGUgPSBhd2FpdCBkYi5jb21tZW50Vm90ZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgIGNvbW1lbnRJZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdWb3RlKSB7XG4gICAgICBpZiAoZXhpc3RpbmdWb3RlLnR5cGUgPT09IHZvdGVUeXBlKSB7XG4gICAgICAgIGF3YWl0IGRiLmNvbW1lbnRWb3RlLmRlbGV0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgQU5EOiBbeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LCB7IGNvbW1lbnRJZCB9XSB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIk9LXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZGIuY29tbWVudFZvdGUudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZTogeyBBTkQ6IFt7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sIHsgY29tbWVudElkIH1dIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZTogdm90ZVR5cGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiT0tcIik7XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuY29tbWVudFZvdGUuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogdm90ZVR5cGUsXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICBjb21tZW50SWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIk9LXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoZXJyb3IubWVzc2FnZSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgXCJDb3VsZCBub3QgcG9zdCB0byBzdWJyZWRkaXQgYXQgdGhpcyB0aW1lLiBQbGVhc2UgdHJ5IGxhdGVyXCIsXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0QXV0aFNlc3Npb24iLCJkYiIsIkNvbW1lbnRWb3RlVmFsaWRhdG9yIiwieiIsIlBBVENIIiwicmVxIiwiYm9keSIsImpzb24iLCJjb21tZW50SWQiLCJ2b3RlVHlwZSIsInBhcnNlIiwic2Vzc2lvbiIsInVzZXIiLCJSZXNwb25zZSIsInN0YXR1cyIsImV4aXN0aW5nVm90ZSIsImNvbW1lbnRWb3RlIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ1c2VySWQiLCJpZCIsInR5cGUiLCJkZWxldGUiLCJBTkQiLCJ1cGRhdGUiLCJkYXRhIiwiY3JlYXRlIiwiZXJyb3IiLCJab2RFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/subreddit/post/comment/vote/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getAuthSession: () => (/* binding */ getAuthSession)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ \"(rsc)/./node_modules/nanoid/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_0__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ token, session }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n                session.user.username = token.username;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                token.id = user.id;\n                return token;\n            }\n            if (!dbUser.username) {\n                await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.user.update({\n                    where: {\n                        id: dbUser.id\n                    },\n                    data: {\n                        username: (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(10)\n                    }\n                });\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image,\n                username: dbUser.username\n            };\n        },\n        redirect () {\n            return \"/\";\n        }\n    }\n};\nconst getAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEI7QUFDMUI7QUFDOEI7QUFDTjtBQUVqRCxNQUFNSyxjQUErQjtJQUMxQ0MsU0FBU0wsd0VBQWFBLENBQUNELHVDQUFFQTtJQUN6Qk8sU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNUUCxzRUFBY0EsQ0FBQztZQUNiUSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTVgsU0FBUSxFQUFFWSxLQUFLLEVBQUVaLE9BQU8sRUFBRTtZQUM5QixJQUFJWSxPQUFPO2dCQUNUWixRQUFRYSxJQUFJLENBQUNDLEVBQUUsR0FBR0YsTUFBTUUsRUFBRTtnQkFDMUJkLFFBQVFhLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxNQUFNRyxJQUFJO2dCQUM5QmYsUUFBUWEsSUFBSSxDQUFDRyxLQUFLLEdBQUdKLE1BQU1JLEtBQUs7Z0JBQ2hDaEIsUUFBUWEsSUFBSSxDQUFDSSxLQUFLLEdBQUdMLE1BQU1NLE9BQU87Z0JBQ2xDbEIsUUFBUWEsSUFBSSxDQUFDTSxRQUFRLEdBQUdQLE1BQU1PLFFBQVE7WUFDeEM7WUFFQSxPQUFPbkI7UUFDVDtRQUVBLE1BQU1vQixLQUFJLEVBQUVSLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLE1BQU1RLFNBQVMsTUFBTTVCLHVDQUFFQSxDQUFDb0IsSUFBSSxDQUFDUyxTQUFTLENBQUM7Z0JBQ3JDQyxPQUFPO29CQUNMUCxPQUFPSixNQUFNSSxLQUFLO2dCQUNwQjtZQUNGO1lBRUEsSUFBSSxDQUFDSyxRQUFRO2dCQUNYVCxNQUFNRSxFQUFFLEdBQUdELEtBQU1DLEVBQUU7Z0JBQ25CLE9BQU9GO1lBQ1Q7WUFFQSxJQUFJLENBQUNTLE9BQU9GLFFBQVEsRUFBRTtnQkFDcEIsTUFBTTFCLHVDQUFFQSxDQUFDb0IsSUFBSSxDQUFDVyxNQUFNLENBQUM7b0JBQ25CRCxPQUFPO3dCQUNMVCxJQUFJTyxPQUFPUCxFQUFFO29CQUNmO29CQUNBVyxNQUFNO3dCQUNKTixVQUFVeEIsOENBQU1BLENBQUM7b0JBQ25CO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPO2dCQUNMbUIsSUFBSU8sT0FBT1AsRUFBRTtnQkFDYkMsTUFBTU0sT0FBT04sSUFBSTtnQkFDakJDLE9BQU9LLE9BQU9MLEtBQUs7Z0JBQ25CRSxTQUFTRyxPQUFPSixLQUFLO2dCQUNyQkUsVUFBVUUsT0FBT0YsUUFBUTtZQUMzQjtRQUNGO1FBQ0FPO1lBQ0UsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsaUJBQWlCLElBQU0vQiwyREFBZ0JBLENBQUNFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xvbmUvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMsIGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKGRiKSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvc2lnbi1pblwiLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lO1xuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZTtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG5cbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZGJVc2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlciEuaWQ7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYlVzZXIudXNlcm5hbWUpIHtcbiAgICAgICAgYXdhaXQgZGIudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcm5hbWU6IG5hbm9pZCgxMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBkYlVzZXIuaWQsXG4gICAgICAgIG5hbWU6IGRiVXNlci5uYW1lLFxuICAgICAgICBlbWFpbDogZGJVc2VyLmVtYWlsLFxuICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2UsXG4gICAgICAgIHVzZXJuYW1lOiBkYlVzZXIudXNlcm5hbWUsXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVkaXJlY3QoKSB7XG4gICAgICByZXR1cm4gXCIvXCI7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoU2Vzc2lvbiA9ICgpID0+IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbImRiIiwiUHJpc21hQWRhcHRlciIsIm5hbm9pZCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJpbWFnZSIsInBpY3R1cmUiLCJ1c2VybmFtZSIsImp3dCIsImRiVXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwidXBkYXRlIiwiZGF0YSIsInJlZGlyZWN0IiwiZ2V0QXV0aFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! server-only */ \"(rsc)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ3pCO0FBT3BCLElBQUlDO0FBQ0osSUFBSUMsS0FBeUIsRUFBYyxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEM7SUFDQUMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QjtBQUVPLE1BQU1DLEtBQUtKLE9BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xvbmUvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgXCJzZXJ2ZXItb25seVwiXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhciwgbm8tdW51c2VkLXZhcnNcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcbiAgICBnbG9iYWwuY2FjaGVkUHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLmNhY2hlZFByaXNtYVxufVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCIsImNhY2hlZFByaXNtYSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/validators/vote.ts":
/*!************************************!*\
  !*** ./src/lib/validators/vote.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommentVoteValidator: () => (/* binding */ CommentVoteValidator),\n/* harmony export */   PostVoteValidator: () => (/* binding */ PostVoteValidator)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst PostVoteValidator = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    postId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    voteType: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([\n        \"UP\",\n        \"DOWN\"\n    ])\n});\nconst CommentVoteValidator = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    commentId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    voteType: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([\n        \"UP\",\n        \"DOWN\"\n    ])\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ZhbGlkYXRvcnMvdm90ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0I7QUFFakIsTUFBTUMsb0JBQW9CRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ3hDQyxRQUFRSCxrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNoQkMsVUFBVUwsa0NBQUNBLENBQUNNLElBQUksQ0FBQztRQUFDO1FBQU07S0FBTztBQUNqQyxHQUFHO0FBSUksTUFBTUMsdUJBQXVCUCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQzNDTSxXQUFXUixrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNuQkMsVUFBVUwsa0NBQUNBLENBQUNNLElBQUksQ0FBQztRQUFDO1FBQU07S0FBTztBQUNqQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZGl0LWNsb25lLy4vc3JjL2xpYi92YWxpZGF0b3JzL3ZvdGUudHM/NTc0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgUG9zdFZvdGVWYWxpZGF0b3IgPSB6Lm9iamVjdCh7XG4gIHBvc3RJZDogei5zdHJpbmcoKSxcbiAgdm90ZVR5cGU6IHouZW51bShbXCJVUFwiLCBcIkRPV05cIl0pLFxufSk7XG5cbmV4cG9ydCB0eXBlIFBvc3RWb3RlUmVxdWVzdCA9IHouaW5mZXI8dHlwZW9mIFBvc3RWb3RlVmFsaWRhdG9yPjtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRWb3RlVmFsaWRhdG9yID0gei5vYmplY3Qoe1xuICBjb21tZW50SWQ6IHouc3RyaW5nKCksXG4gIHZvdGVUeXBlOiB6LmVudW0oW1wiVVBcIiwgXCJET1dOXCJdKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBDb21tZW50Vm90ZVJlcXVlc3QgPSB6LmluZmVyPHR5cGVvZiBDb21tZW50Vm90ZVZhbGlkYXRvcj47XG4iXSwibmFtZXMiOlsieiIsIlBvc3RWb3RlVmFsaWRhdG9yIiwib2JqZWN0IiwicG9zdElkIiwic3RyaW5nIiwidm90ZVR5cGUiLCJlbnVtIiwiQ29tbWVudFZvdGVWYWxpZGF0b3IiLCJjb21tZW50SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/validators/vote.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/nanoid","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&page=%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddit%2Fpost%2Fcomment%2Fvote%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();