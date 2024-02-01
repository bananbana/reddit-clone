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
exports.id = "app/api/uploadthing/route";
exports.ids = ["app/api/uploadthing/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_dawiddebosz_reddit_clone_src_app_api_uploadthing_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/uploadthing/route.ts */ \"(rsc)/./src/app/api/uploadthing/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/uploadthing/route\",\n        pathname: \"/api/uploadthing\",\n        filename: \"route\",\n        bundlePath: \"app/api/uploadthing/route\"\n    },\n    resolvedPagePath: \"/Users/dawiddebosz/reddit-clone/src/app/api/uploadthing/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dawiddebosz_reddit_clone_src_app_api_uploadthing_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/uploadthing/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWR0aGluZyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXBsb2FkdGhpbmclMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1cGxvYWR0aGluZyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRhd2lkZGVib3N6JTJGcmVkZGl0LWNsb25lJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmRhd2lkZGVib3N6JTJGcmVkZGl0LWNsb25lJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQzhCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGRpdC1jbG9uZS8/NmI1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2Rhd2lkZGVib3N6L3JlZGRpdC1jbG9uZS9zcmMvYXBwL2FwaS91cGxvYWR0aGluZy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXBsb2FkdGhpbmcvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWR0aGluZ1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2FkdGhpbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZGF3aWRkZWJvc3ovcmVkZGl0LWNsb25lL3NyYy9hcHAvYXBpL3VwbG9hZHRoaW5nL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VwbG9hZHRoaW5nL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/uploadthing/core.ts":
/*!*****************************************!*\
  !*** ./src/app/api/uploadthing/core.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ourFileRouter: () => (/* binding */ ourFileRouter)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uploadthing_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uploadthing/next */ \"(rsc)/./node_modules/uploadthing/dist/next.mjs\");\n\n\nconst f = (0,uploadthing_next__WEBPACK_IMPORTED_MODULE_1__.createUploadthing)();\nconst ourFileRouter = {\n    imageUploader: f({\n        image: {\n            maxFileSize: \"4MB\"\n        }\n    }).middleware(async (req)=>{\n        const user = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        if (!user) throw new Error(\"Unauthorized\");\n        return {\n            userId: user.id\n        };\n    }).onUploadComplete(async ({ metadata, file })=>{})\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWR0aGluZy9jb3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDNkI7QUFFdEUsTUFBTUUsSUFBSUQsbUVBQWlCQTtBQUVwQixNQUFNRSxnQkFBZ0I7SUFDM0JDLGVBQWVGLEVBQUU7UUFBRUcsT0FBTztZQUFFQyxhQUFhO1FBQU07SUFBRSxHQUM5Q0MsVUFBVSxDQUFDLE9BQU9DO1FBQ2pCLE1BQU1DLE9BQU8sTUFBTVQsdURBQVFBLENBQUM7WUFBRVE7UUFBSTtRQUVsQyxJQUFJLENBQUNDLE1BQU0sTUFBTSxJQUFJQyxNQUFNO1FBRTNCLE9BQU87WUFBRUMsUUFBUUYsS0FBS0csRUFBRTtRQUFDO0lBQzNCLEdBQ0NDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUUsSUFBTTtBQUNyRCxFQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGRpdC1jbG9uZS8uL3NyYy9hcHAvYXBpL3VwbG9hZHRoaW5nL2NvcmUudHM/MWE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWR0aGluZywgdHlwZSBGaWxlUm91dGVyIH0gZnJvbSBcInVwbG9hZHRoaW5nL25leHRcIjtcblxuY29uc3QgZiA9IGNyZWF0ZVVwbG9hZHRoaW5nKCk7XG5cbmV4cG9ydCBjb25zdCBvdXJGaWxlUm91dGVyID0ge1xuICBpbWFnZVVwbG9hZGVyOiBmKHsgaW1hZ2U6IHsgbWF4RmlsZVNpemU6IFwiNE1CXCIgfSB9KVxuICAgIC5taWRkbGV3YXJlKGFzeW5jIChyZXEpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRUb2tlbih7IHJlcSB9KTtcblxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cbiAgICAgIHJldHVybiB7IHVzZXJJZDogdXNlci5pZCB9O1xuICAgIH0pXG4gICAgLm9uVXBsb2FkQ29tcGxldGUoYXN5bmMgKHsgbWV0YWRhdGEsIGZpbGUgfSkgPT4ge30pLFxufSBzYXRpc2ZpZXMgRmlsZVJvdXRlcjtcblxuZXhwb3J0IHR5cGUgT3VyRmlsZVJvdXRlciA9IHR5cGVvZiBvdXJGaWxlUm91dGVyO1xuIl0sIm5hbWVzIjpbImdldFRva2VuIiwiY3JlYXRlVXBsb2FkdGhpbmciLCJmIiwib3VyRmlsZVJvdXRlciIsImltYWdlVXBsb2FkZXIiLCJpbWFnZSIsIm1heEZpbGVTaXplIiwibWlkZGxld2FyZSIsInJlcSIsInVzZXIiLCJFcnJvciIsInVzZXJJZCIsImlkIiwib25VcGxvYWRDb21wbGV0ZSIsIm1ldGFkYXRhIiwiZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/uploadthing/core.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/uploadthing/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/uploadthing/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var uploadthing_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uploadthing/next */ \"(rsc)/./node_modules/uploadthing/dist/next.mjs\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ \"(rsc)/./src/app/api/uploadthing/core.ts\");\n\n\n// Export routes for Next App Router\nconst { GET, POST } = (0,uploadthing_next__WEBPACK_IMPORTED_MODULE_0__.createNextRouteHandler)({\n    router: _core__WEBPACK_IMPORTED_MODULE_1__.ourFileRouter\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWR0aGluZy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBEO0FBRW5CO0FBRXZDLG9DQUFvQztBQUM3QixNQUFNLEVBQUVFLEdBQUcsRUFBRUMsSUFBSSxFQUFFLEdBQUdILHdFQUFzQkEsQ0FBQztJQUNsREksUUFBUUgsZ0RBQWFBO0FBQ3ZCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtY2xvbmUvLi9zcmMvYXBwL2FwaS91cGxvYWR0aGluZy9yb3V0ZS50cz9hYTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5leHRSb3V0ZUhhbmRsZXIgfSBmcm9tIFwidXBsb2FkdGhpbmcvbmV4dFwiO1xuXG5pbXBvcnQgeyBvdXJGaWxlUm91dGVyIH0gZnJvbSBcIi4vY29yZVwiO1xuXG4vLyBFeHBvcnQgcm91dGVzIGZvciBOZXh0IEFwcCBSb3V0ZXJcbmV4cG9ydCBjb25zdCB7IEdFVCwgUE9TVCB9ID0gY3JlYXRlTmV4dFJvdXRlSGFuZGxlcih7XG4gIHJvdXRlcjogb3VyRmlsZVJvdXRlcixcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZU5leHRSb3V0ZUhhbmRsZXIiLCJvdXJGaWxlUm91dGVyIiwiR0VUIiwiUE9TVCIsInJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/uploadthing/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@uploadthing","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/@babel","vendor-chunks/uploadthing","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploadthing%2Froute&page=%2Fapi%2Fuploadthing%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploadthing%2Froute.ts&appDir=%2FUsers%2Fdawiddebosz%2Freddit-clone%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdawiddebosz%2Freddit-clone&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();