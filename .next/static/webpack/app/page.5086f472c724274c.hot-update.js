"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/data */ \"(app-pages-browser)/./src/app/data.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nlet apiAnimeURL = \"https://api.jikan.moe/v4/anime?q=ChainSawMan\";\nfunction Home() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const apiResponse = await fetch(apiAnimeURL);\n            const items = await apiResponse.json();\n            setCards(items.data);\n        };\n        fetchData();\n    }, []);\n    console.log(cards);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"search-bar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"search-bar--label\",\n                        htmlFor: \"search-field\",\n                        children: \" Search MyAnimeList API \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"search-bar--field\",\n                        type: \"text\",\n                        name: \"search-field\",\n                        id: \"search-field\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-bar--submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"items-list\",\n                children: cards.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            itemName: item.title_english,\n                            itemImgUrl: item.images.jpg.image_url,\n                            producers: item.producers,\n                            studios: item.studios\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, item.mal_id, false, {\n                        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jbk9bBkkvWK4BlqqPDLOYgAfpA4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUM7QUFDZTtBQUNWO0FBRTVDLElBQUlJLGNBQWM7QUFFSCxTQUFTQzs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQTtJQUdsQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxZQUFZO1lBQ2hCLE1BQU1DLGNBQWMsTUFBTUMsTUFBTU47WUFDaEMsTUFBTU8sUUFBUSxNQUFNRixZQUFZRyxJQUFJO1lBRXBDTCxTQUFTSSxNQUFNRSxJQUFJO1FBRXJCO1FBRUFMO0lBR0YsR0FBRyxFQUFFO0lBRUxNLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDWixxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FDZCw4REFBQ0U7d0JBQU1GLFdBQVU7d0JBQW9CRyxTQUFRO2tDQUFlOzs7Ozs7a0NBQzVELDhEQUFDQzt3QkFBTUosV0FBVTt3QkFBb0JLLE1BQUs7d0JBQU9DLE1BQUs7d0JBQWVDLElBQUc7Ozs7OztrQ0FDeEUsOERBQUNDO3dCQUFPSCxNQUFLO3dCQUFTTCxXQUFVO2tDQUFxQjs7Ozs7Ozs7Ozs7OzBCQUd2RCw4REFBQ1M7Z0JBQUdULFdBQVU7MEJBQ1hYLE1BQU1xQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO2tDQUNDLDRFQUFDNUIscUVBQVFBOzRCQUNQNkIsVUFBVUYsS0FBS0csYUFBYTs0QkFDNUJDLFlBQVlKLEtBQUtLLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTOzRCQUNyQ0MsV0FBV1IsS0FBS1EsU0FBUzs0QkFDekJDLFNBQVNULEtBQUtTLE9BQU87Ozs7Ozt1QkFMaEJULEtBQUtVLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUI7R0ExQ3dCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBpdGVtc0RhdGEgfSBmcm9tIFwiQC9hcHAvZGF0YVwiO1xuaW1wb3J0IEl0ZW1DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvSXRlbUNhcmQvSXRlbUNhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IGFwaUFuaW1lVVJMID0gXCJodHRwczovL2FwaS5qaWthbi5tb2UvdjQvYW5pbWU/cT1DaGFpblNhd01hblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZSgpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpQW5pbWVVUkwpXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxuICAgICAgXG4gICAgICBzZXRDYXJkcyhpdGVtcy5kYXRhKVxuXG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpXG5cblxuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coY2FyZHMpXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLS1sYWJlbFwiIGh0bWxGb3I9XCJzZWFyY2gtZmllbGRcIj4gU2VhcmNoIE15QW5pbWVMaXN0IEFQSSA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tZmllbGRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtZmllbGRcIiBpZD1cInNlYXJjaC1maWVsZFwiIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiaXRlbXMtbGlzdFwiPlxuICAgICAgICB7Y2FyZHMubWFwKChpdGVtKSA9PlxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubWFsX2lkfT5cbiAgICAgICAgICAgIDxJdGVtQ2FyZFxuICAgICAgICAgICAgICBpdGVtTmFtZT17aXRlbS50aXRsZV9lbmdsaXNofVxuICAgICAgICAgICAgICBpdGVtSW1nVXJsPXtpdGVtLmltYWdlcy5qcGcuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICBwcm9kdWNlcnM9e2l0ZW0ucHJvZHVjZXJzfVxuICAgICAgICAgICAgICBzdHVkaW9zPXtpdGVtLnN0dWRpb3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpdGVtc0RhdGEiLCJJdGVtQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpQW5pbWVVUkwiLCJIb21lIiwiY2FyZHMiLCJzZXRDYXJkcyIsImZldGNoRGF0YSIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJpdGVtcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJpdGVtTmFtZSIsInRpdGxlX2VuZ2xpc2giLCJpdGVtSW1nVXJsIiwiaW1hZ2VzIiwianBnIiwiaW1hZ2VfdXJsIiwicHJvZHVjZXJzIiwic3R1ZGlvcyIsIm1hbF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});