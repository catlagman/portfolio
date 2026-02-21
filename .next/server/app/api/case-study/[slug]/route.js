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
exports.id = "app/api/case-study/[slug]/route";
exports.ids = ["app/api/case-study/[slug]/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

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

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fcat%2Fportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcat%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fcat%2Fportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcat%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_cat_portfolio_app_api_case_study_slug_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/case-study/[slug]/route.js */ \"(rsc)/./app/api/case-study/[slug]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/case-study/[slug]/route\",\n        pathname: \"/api/case-study/[slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/case-study/[slug]/route\"\n    },\n    resolvedPagePath: \"/Users/cat/portfolio/app/api/case-study/[slug]/route.js\",\n    nextConfigOutput,\n    userland: _Users_cat_portfolio_app_api_case_study_slug_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/case-study/[slug]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXNlLXN0dWR5JTJGJTVCc2x1ZyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2FzZS1zdHVkeSUyRiU1QnNsdWclNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjYXNlLXN0dWR5JTJGJTVCc2x1ZyU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmNhdCUyRnBvcnRmb2xpbyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjYXQlMkZwb3J0Zm9saW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDTztBQUNwRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGhlcmluZS1wb3J0Zm9saW8vPzBmOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2NhdC9wb3J0Zm9saW8vYXBwL2FwaS9jYXNlLXN0dWR5L1tzbHVnXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2FzZS1zdHVkeS9bc2x1Z10vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jYXNlLXN0dWR5L1tzbHVnXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2FzZS1zdHVkeS9bc2x1Z10vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY2F0L3BvcnRmb2xpby9hcHAvYXBpL2Nhc2Utc3R1ZHkvW3NsdWddL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2Nhc2Utc3R1ZHkvW3NsdWddL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fcat%2Fportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcat%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/case-study/[slug]/route.js":
/*!********************************************!*\
  !*** ./app/api/case-study/[slug]/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_notion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/notion.js */ \"(rsc)/./lib/notion.js\");\n/* harmony import */ var _lib_notion_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_notion_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(request, { params }) {\n    try {\n        const { slug } = params;\n        const caseStudy = await (0,_lib_notion_js__WEBPACK_IMPORTED_MODULE_1__.getCaseStudyBySlug)(slug);\n        if (!caseStudy) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Case study not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(caseStudy);\n    } catch (error) {\n        console.error(\"Error fetching case study:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch case study\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Nhc2Utc3R1ZHkvW3NsdWddL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDb0I7QUFFdkQsZUFBZUUsSUFBSUMsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7UUFDakIsTUFBTUUsWUFBWSxNQUFNTCxrRUFBa0JBLENBQUNJO1FBRTNDLElBQUksQ0FBQ0MsV0FBVztZQUNkLE9BQU9OLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXVCLEdBQ2hDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPVCxrRkFBWUEsQ0FBQ08sSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLE9BQU87UUFDZEUsUUFBUUYsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT1Isa0ZBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE2QixHQUN0QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGhlcmluZS1wb3J0Zm9saW8vLi9hcHAvYXBpL2Nhc2Utc3R1ZHkvW3NsdWddL3JvdXRlLmpzP2Q2OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBnZXRDYXNlU3R1ZHlCeVNsdWcgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbm90aW9uLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QsIHsgcGFyYW1zIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtc1xuICAgIGNvbnN0IGNhc2VTdHVkeSA9IGF3YWl0IGdldENhc2VTdHVkeUJ5U2x1ZyhzbHVnKVxuXG4gICAgaWYgKCFjYXNlU3R1ZHkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0Nhc2Ugc3R1ZHkgbm90IGZvdW5kJyB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY2FzZVN0dWR5KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2Ugc3R1ZHk6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBjYXNlIHN0dWR5JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0Q2FzZVN0dWR5QnlTbHVnIiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsInNsdWciLCJjYXNlU3R1ZHkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/case-study/[slug]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/notion.js":
/*!***********************!*\
  !*** ./lib/notion.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Client } = __webpack_require__(/*! @notionhq/client */ \"(rsc)/./node_modules/@notionhq/client/build/src/index.js\");\nconst { NotionToMarkdown } = __webpack_require__(/*! notion-to-md */ \"(rsc)/./node_modules/notion-to-md/build/index.js\");\nconst notion = new Client({\n    auth: process.env.NOTION_TOKEN\n});\nconst n2m = new NotionToMarkdown({\n    notionClient: notion\n});\nconst database_id = process.env.NOTION_DATABASE_ID;\nasync function getCaseStudyBySlug(slug) {\n    try {\n        const response = await notion.databases.query({\n            database_id: database_id,\n            filter: {\n                and: [\n                    {\n                        property: \"Slug\",\n                        rich_text: {\n                            equals: slug\n                        }\n                    },\n                    {\n                        property: \"Status\",\n                        status: {\n                            equals: \"Published\"\n                        }\n                    }\n                ]\n            }\n        });\n        if (response.results.length === 0) {\n            return null;\n        }\n        const page = response.results[0];\n        const contentPageId = page.properties.PageID?.rich_text[0]?.plain_text || page.id;\n        const metadata = {\n            id: page.id,\n            slug: page.properties.Slug?.rich_text[0]?.plain_text || \"\",\n            title: page.properties.Title?.title[0]?.plain_text || \"\",\n            company: page.properties.Company?.rich_text[0]?.plain_text || \"\",\n            year: page.properties.Year?.rich_text[0]?.plain_text || \"\",\n            role: page.properties.Role?.rich_text[0]?.plain_text || \"\"\n        };\n        const mdblocks = await n2m.pageToMarkdown(contentPageId);\n        const mdString = n2m.toMarkdownString(mdblocks);\n        return {\n            ...metadata,\n            content: mdString.parent\n        };\n    } catch (error) {\n        console.error(\"Error fetching case study:\", error);\n        return null;\n    }\n}\nmodule.exports = {\n    getCaseStudyBySlug,\n    database_id\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbm90aW9uLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUVBLE1BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxrRkFBa0I7QUFDN0MsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQyxzRUFBYztBQUVuRCxNQUFNRSxTQUFTLElBQUlILE9BQU87SUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUNoQztBQUVBLE1BQU1DLE1BQU0sSUFBSU4saUJBQWlCO0lBQUVPLGNBQWNOO0FBQU87QUFFeEQsTUFBTU8sY0FBY0wsUUFBUUMsR0FBRyxDQUFDSyxrQkFBa0I7QUFFbEQsZUFBZUMsbUJBQW1CQyxJQUFJO0lBQ3BDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1YLE9BQU9ZLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDO1lBQzVDTixhQUFhQTtZQUNiTyxRQUFRO2dCQUNOQyxLQUFLO29CQUNIO3dCQUNFQyxVQUFVO3dCQUNWQyxXQUFXOzRCQUNUQyxRQUFRUjt3QkFDVjtvQkFDRjtvQkFDQTt3QkFDRU0sVUFBVTt3QkFDVkcsUUFBUTs0QkFDTkQsUUFBUTt3QkFDVjtvQkFDRjtpQkFDRDtZQUNIO1FBQ0Y7UUFFQSxJQUFJUCxTQUFTUyxPQUFPLENBQUNDLE1BQU0sS0FBSyxHQUFHO1lBQ2pDLE9BQU87UUFDVDtRQUVBLE1BQU1DLE9BQU9YLFNBQVNTLE9BQU8sQ0FBQyxFQUFFO1FBQ2hDLE1BQU1HLGdCQUFnQkQsS0FBS0UsVUFBVSxDQUFDQyxNQUFNLEVBQUVSLFNBQVMsQ0FBQyxFQUFFLEVBQUVTLGNBQWNKLEtBQUtLLEVBQUU7UUFFakYsTUFBTUMsV0FBVztZQUNmRCxJQUFJTCxLQUFLSyxFQUFFO1lBQ1hqQixNQUFNWSxLQUFLRSxVQUFVLENBQUNLLElBQUksRUFBRVosU0FBUyxDQUFDLEVBQUUsRUFBRVMsY0FBYztZQUN4REksT0FBT1IsS0FBS0UsVUFBVSxDQUFDTyxLQUFLLEVBQUVELEtBQUssQ0FBQyxFQUFFLEVBQUVKLGNBQWM7WUFDdERNLFNBQVNWLEtBQUtFLFVBQVUsQ0FBQ1MsT0FBTyxFQUFFaEIsU0FBUyxDQUFDLEVBQUUsRUFBRVMsY0FBYztZQUM5RFEsTUFBTVosS0FBS0UsVUFBVSxDQUFDVyxJQUFJLEVBQUVsQixTQUFTLENBQUMsRUFBRSxFQUFFUyxjQUFjO1lBQ3hEVSxNQUFNZCxLQUFLRSxVQUFVLENBQUNhLElBQUksRUFBRXBCLFNBQVMsQ0FBQyxFQUFFLEVBQUVTLGNBQWM7UUFDMUQ7UUFFQSxNQUFNWSxXQUFXLE1BQU1qQyxJQUFJa0MsY0FBYyxDQUFDaEI7UUFDMUMsTUFBTWlCLFdBQVduQyxJQUFJb0MsZ0JBQWdCLENBQUNIO1FBRXRDLE9BQU87WUFDTCxHQUFHVixRQUFRO1lBQ1hjLFNBQVNGLFNBQVNHLE1BQU07UUFDMUI7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTztJQUNUO0FBQ0Y7QUFFQUUsT0FBT0MsT0FBTyxHQUFHO0lBQUV0QztJQUFvQkY7QUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGhlcmluZS1wb3J0Zm9saW8vLi9saWIvbm90aW9uLmpzP2E0MWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJAbm90aW9uaHEvY2xpZW50XCIpO1xuY29uc3QgeyBOb3Rpb25Ub01hcmtkb3duIH0gPSByZXF1aXJlKFwibm90aW9uLXRvLW1kXCIpO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHtcbiAgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX1RPS0VOLFxufSk7XG5cbmNvbnN0IG4ybSA9IG5ldyBOb3Rpb25Ub01hcmtkb3duKHsgbm90aW9uQ2xpZW50OiBub3Rpb24gfSk7XG5cbmNvbnN0IGRhdGFiYXNlX2lkID0gcHJvY2Vzcy5lbnYuTk9USU9OX0RBVEFCQVNFX0lEO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXNlU3R1ZHlCeVNsdWcoc2x1Zykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICBkYXRhYmFzZV9pZDogZGF0YWJhc2VfaWQsXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgYW5kOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcGVydHk6IFwiU2x1Z1wiLFxuICAgICAgICAgICAgcmljaF90ZXh0OiB7XG4gICAgICAgICAgICAgIGVxdWFsczogc2x1ZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJTdGF0dXNcIixcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICBlcXVhbHM6IFwiUHVibGlzaGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlID0gcmVzcG9uc2UucmVzdWx0c1swXTtcbiAgICBjb25zdCBjb250ZW50UGFnZUlkID0gcGFnZS5wcm9wZXJ0aWVzLlBhZ2VJRD8ucmljaF90ZXh0WzBdPy5wbGFpbl90ZXh0IHx8IHBhZ2UuaWQ7XG5cbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgIGlkOiBwYWdlLmlkLFxuICAgICAgc2x1ZzogcGFnZS5wcm9wZXJ0aWVzLlNsdWc/LnJpY2hfdGV4dFswXT8ucGxhaW5fdGV4dCB8fCBcIlwiLFxuICAgICAgdGl0bGU6IHBhZ2UucHJvcGVydGllcy5UaXRsZT8udGl0bGVbMF0/LnBsYWluX3RleHQgfHwgXCJcIixcbiAgICAgIGNvbXBhbnk6IHBhZ2UucHJvcGVydGllcy5Db21wYW55Py5yaWNoX3RleHRbMF0/LnBsYWluX3RleHQgfHwgXCJcIixcbiAgICAgIHllYXI6IHBhZ2UucHJvcGVydGllcy5ZZWFyPy5yaWNoX3RleHRbMF0/LnBsYWluX3RleHQgfHwgXCJcIixcbiAgICAgIHJvbGU6IHBhZ2UucHJvcGVydGllcy5Sb2xlPy5yaWNoX3RleHRbMF0/LnBsYWluX3RleHQgfHwgXCJcIixcbiAgICB9O1xuXG4gICAgY29uc3QgbWRibG9ja3MgPSBhd2FpdCBuMm0ucGFnZVRvTWFya2Rvd24oY29udGVudFBhZ2VJZCk7XG4gICAgY29uc3QgbWRTdHJpbmcgPSBuMm0udG9NYXJrZG93blN0cmluZyhtZGJsb2Nrcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ubWV0YWRhdGEsXG4gICAgICBjb250ZW50OiBtZFN0cmluZy5wYXJlbnQsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNlIHN0dWR5OicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0Q2FzZVN0dWR5QnlTbHVnLCBkYXRhYmFzZV9pZCB9O1xuIl0sIm5hbWVzIjpbIkNsaWVudCIsInJlcXVpcmUiLCJOb3Rpb25Ub01hcmtkb3duIiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fVE9LRU4iLCJuMm0iLCJub3Rpb25DbGllbnQiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9EQVRBQkFTRV9JRCIsImdldENhc2VTdHVkeUJ5U2x1ZyIsInNsdWciLCJyZXNwb25zZSIsImRhdGFiYXNlcyIsInF1ZXJ5IiwiZmlsdGVyIiwiYW5kIiwicHJvcGVydHkiLCJyaWNoX3RleHQiLCJlcXVhbHMiLCJzdGF0dXMiLCJyZXN1bHRzIiwibGVuZ3RoIiwicGFnZSIsImNvbnRlbnRQYWdlSWQiLCJwcm9wZXJ0aWVzIiwiUGFnZUlEIiwicGxhaW5fdGV4dCIsImlkIiwibWV0YWRhdGEiLCJTbHVnIiwidGl0bGUiLCJUaXRsZSIsImNvbXBhbnkiLCJDb21wYW55IiwieWVhciIsIlllYXIiLCJyb2xlIiwiUm9sZSIsIm1kYmxvY2tzIiwicGFnZVRvTWFya2Rvd24iLCJtZFN0cmluZyIsInRvTWFya2Rvd25TdHJpbmciLCJjb250ZW50IiwicGFyZW50IiwiZXJyb3IiLCJjb25zb2xlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/notion.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@notionhq","vendor-chunks/whatwg-url","vendor-chunks/notion-to-md","vendor-chunks/tr46","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/repeat-string","vendor-chunks/markdown-table"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcase-study%2F%5Bslug%5D%2Froute.js&appDir=%2FUsers%2Fcat%2Fportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcat%2Fportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();