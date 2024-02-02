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
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_dawiddebosz_reddit_clone_src_app_api_posts_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/posts/route.tsx */ \"(rsc)/./src/app/api/posts/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"/Users/dawiddebosz/reddit-clone/src/app/api/posts/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_dawiddebosz_reddit_clone_src_app_api_posts_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/posts/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZkYXdpZGRlYm9zeiUyRnJlZGRpdC1jbG9uZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkYXdpZGRlYm9zeiUyRnJlZGRpdC1jbG9uZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUN5QjtBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xvbmUvPzQ1OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9kYXdpZGRlYm9zei9yZWRkaXQtY2xvbmUvc3JjL2FwcC9hcGkvcG9zdHMvcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Bvc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wb3N0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kYXdpZGRlYm9zei9yZWRkaXQtY2xvbmUvc3JjL2FwcC9hcGkvcG9zdHMvcm91dGUudHN4XCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Bvc3RzL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/posts/route.tsx":
/*!*************************************!*\
  !*** ./src/app/api/posts/route.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\nasync function GET(req) {\n    const url = new URL(req.url);\n    const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getAuthSession)();\n    let followedCommunitiesIds = [];\n    if (session) {\n        const followedCommunities = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.subscription.findMany({\n            where: {\n                userId: session.user.id\n            },\n            include: {\n                subreddit: true\n            }\n        });\n        followedCommunitiesIds = followedCommunities.map(({ subreddit })=>subreddit.id);\n    }\n    try {\n        const { limit, page, subredditName } = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n            limit: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n            page: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),\n            subredditName: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nullish().optional()\n        }).parse({\n            subredditName: url.searchParams.get(\"subredditName\"),\n            limit: url.searchParams.get(\"limit\"),\n            page: url.searchParams.get(\"page\")\n        });\n        let whereClause = {};\n        if (subredditName) {\n            whereClause = {\n                subreddit: {\n                    name: subredditName\n                }\n            };\n        } else if (session) {\n            whereClause = {\n                subreddit: {\n                    id: {\n                        in: followedCommunitiesIds\n                    }\n                }\n            };\n        }\n        const posts = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.post.findMany({\n            take: parseInt(limit),\n            skip: (parseInt(page) - 1) * parseInt(limit),\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            include: {\n                subreddit: true,\n                votes: true,\n                author: true,\n                comments: true\n            },\n            where: whereClause\n        });\n        return new Response(JSON.stringify(posts));\n    } catch (error) {\n        error;\n        if (error instanceof zod__WEBPACK_IMPORTED_MODULE_2__.z.ZodError) {\n            return new Response(\"Invalid request data\", {\n                status: 422\n            });\n        }\n        return new Response(\"Could not fetch more posts.\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wb3N0cy9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNkO0FBQ047QUFFakIsZUFBZUcsSUFBSUMsR0FBWTtJQUNwQyxNQUFNQyxNQUFNLElBQUlDLElBQUlGLElBQUlDLEdBQUc7SUFFM0IsTUFBTUUsVUFBVSxNQUFNUCx5REFBY0E7SUFFcEMsSUFBSVEseUJBQW1DLEVBQUU7SUFFekMsSUFBSUQsU0FBUztRQUNYLE1BQU1FLHNCQUFzQixNQUFNUix1Q0FBRUEsQ0FBQ1MsWUFBWSxDQUFDQyxRQUFRLENBQUM7WUFDekRDLE9BQU87Z0JBQ0xDLFFBQVFOLFFBQVFPLElBQUksQ0FBQ0MsRUFBRTtZQUN6QjtZQUNBQyxTQUFTO2dCQUNQQyxXQUFXO1lBQ2I7UUFDRjtRQUVBVCx5QkFBeUJDLG9CQUFvQlMsR0FBRyxDQUM5QyxDQUFDLEVBQUVELFNBQVMsRUFBRSxHQUFLQSxVQUFVRixFQUFFO0lBRW5DO0lBRUEsSUFBSTtRQUNGLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxJQUFJLEVBQUVDLGFBQWEsRUFBRSxHQUFHbkIsa0NBQUNBLENBQ3JDb0IsTUFBTSxDQUFDO1lBQ05ILE9BQU9qQixrQ0FBQ0EsQ0FBQ3FCLE1BQU07WUFDZkgsTUFBTWxCLGtDQUFDQSxDQUFDcUIsTUFBTTtZQUNkRixlQUFlbkIsa0NBQUNBLENBQUNxQixNQUFNLEdBQUdDLE9BQU8sR0FBR0MsUUFBUTtRQUM5QyxHQUNDQyxLQUFLLENBQUM7WUFDTEwsZUFBZWhCLElBQUlzQixZQUFZLENBQUNDLEdBQUcsQ0FBQztZQUNwQ1QsT0FBT2QsSUFBSXNCLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO1lBQzVCUixNQUFNZixJQUFJc0IsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFDN0I7UUFFRixJQUFJQyxjQUFjLENBQUM7UUFFbkIsSUFBSVIsZUFBZTtZQUNqQlEsY0FBYztnQkFDWlosV0FBVztvQkFDVGEsTUFBTVQ7Z0JBQ1I7WUFDRjtRQUNGLE9BQU8sSUFBSWQsU0FBUztZQUNsQnNCLGNBQWM7Z0JBQ1paLFdBQVc7b0JBQ1RGLElBQUk7d0JBQ0ZnQixJQUFJdkI7b0JBQ047Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsTUFBTXdCLFFBQVEsTUFBTS9CLHVDQUFFQSxDQUFDZ0MsSUFBSSxDQUFDdEIsUUFBUSxDQUFDO1lBQ25DdUIsTUFBTUMsU0FBU2hCO1lBQ2ZpQixNQUFNLENBQUNELFNBQVNmLFFBQVEsS0FBS2UsU0FBU2hCO1lBQ3RDa0IsU0FBUztnQkFDUEMsV0FBVztZQUNiO1lBQ0F0QixTQUFTO2dCQUNQQyxXQUFXO2dCQUNYc0IsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E3QixPQUFPaUI7UUFDVDtRQUVBLE9BQU8sSUFBSWEsU0FBU0MsS0FBS0MsU0FBUyxDQUFDWjtJQUNyQyxFQUFFLE9BQU9hLE9BQU87UUFDZEE7UUFDQSxJQUFJQSxpQkFBaUIzQyxrQ0FBQ0EsQ0FBQzRDLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUlKLFNBQVMsd0JBQXdCO2dCQUFFSyxRQUFRO1lBQUk7UUFDNUQ7UUFFQSxPQUFPLElBQUlMLFNBQVMsK0JBQStCO1lBQ2pESyxRQUFRO1FBQ1Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZGl0LWNsb25lLy4vc3JjL2FwcC9hcGkvcG9zdHMvcm91dGUudHN4PzBkMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXV0aFNlc3Npb24gfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhTZXNzaW9uKCk7XG5cbiAgbGV0IGZvbGxvd2VkQ29tbXVuaXRpZXNJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICBjb25zdCBmb2xsb3dlZENvbW11bml0aWVzID0gYXdhaXQgZGIuc3Vic2NyaXB0aW9uLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc3VicmVkZGl0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZvbGxvd2VkQ29tbXVuaXRpZXNJZHMgPSBmb2xsb3dlZENvbW11bml0aWVzLm1hcChcbiAgICAgICh7IHN1YnJlZGRpdCB9KSA9PiBzdWJyZWRkaXQuaWRcbiAgICApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGxpbWl0LCBwYWdlLCBzdWJyZWRkaXROYW1lIH0gPSB6XG4gICAgICAub2JqZWN0KHtcbiAgICAgICAgbGltaXQ6IHouc3RyaW5nKCksXG4gICAgICAgIHBhZ2U6IHouc3RyaW5nKCksXG4gICAgICAgIHN1YnJlZGRpdE5hbWU6IHouc3RyaW5nKCkubnVsbGlzaCgpLm9wdGlvbmFsKCksXG4gICAgICB9KVxuICAgICAgLnBhcnNlKHtcbiAgICAgICAgc3VicmVkZGl0TmFtZTogdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzdWJyZWRkaXROYW1lXCIpLFxuICAgICAgICBsaW1pdDogdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKSxcbiAgICAgICAgcGFnZTogdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJwYWdlXCIpLFxuICAgICAgfSk7XG5cbiAgICBsZXQgd2hlcmVDbGF1c2UgPSB7fTtcblxuICAgIGlmIChzdWJyZWRkaXROYW1lKSB7XG4gICAgICB3aGVyZUNsYXVzZSA9IHtcbiAgICAgICAgc3VicmVkZGl0OiB7XG4gICAgICAgICAgbmFtZTogc3VicmVkZGl0TmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChzZXNzaW9uKSB7XG4gICAgICB3aGVyZUNsYXVzZSA9IHtcbiAgICAgICAgc3VicmVkZGl0OiB7XG4gICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGluOiBmb2xsb3dlZENvbW11bml0aWVzSWRzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZGIucG9zdC5maW5kTWFueSh7XG4gICAgICB0YWtlOiBwYXJzZUludChsaW1pdCksXG4gICAgICBza2lwOiAocGFyc2VJbnQocGFnZSkgLSAxKSAqIHBhcnNlSW50KGxpbWl0KSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImRlc2NcIixcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHN1YnJlZGRpdDogdHJ1ZSxcbiAgICAgICAgdm90ZXM6IHRydWUsXG4gICAgICAgIGF1dGhvcjogdHJ1ZSxcbiAgICAgICAgY29tbWVudHM6IHRydWUsXG4gICAgICB9LFxuICAgICAgd2hlcmU6IHdoZXJlQ2xhdXNlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShwb3N0cykpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJJbnZhbGlkIHJlcXVlc3QgZGF0YVwiLCB7IHN0YXR1czogNDIyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJDb3VsZCBub3QgZmV0Y2ggbW9yZSBwb3N0cy5cIiwge1xuICAgICAgc3RhdHVzOiA1MDAsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRBdXRoU2Vzc2lvbiIsImRiIiwieiIsIkdFVCIsInJlcSIsInVybCIsIlVSTCIsInNlc3Npb24iLCJmb2xsb3dlZENvbW11bml0aWVzSWRzIiwiZm9sbG93ZWRDb21tdW5pdGllcyIsInN1YnNjcmlwdGlvbiIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJpbmNsdWRlIiwic3VicmVkZGl0IiwibWFwIiwibGltaXQiLCJwYWdlIiwic3VicmVkZGl0TmFtZSIsIm9iamVjdCIsInN0cmluZyIsIm51bGxpc2giLCJvcHRpb25hbCIsInBhcnNlIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwid2hlcmVDbGF1c2UiLCJuYW1lIiwiaW4iLCJwb3N0cyIsInBvc3QiLCJ0YWtlIiwicGFyc2VJbnQiLCJza2lwIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInZvdGVzIiwiYXV0aG9yIiwiY29tbWVudHMiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsIlpvZEVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/posts/route.tsx\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/nanoid","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();