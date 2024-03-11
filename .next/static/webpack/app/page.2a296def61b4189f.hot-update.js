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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [lastPage, setLastPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    let APIURL = \"https://api.jikan.moe/v4/anime?q=\".concat(query, \"&page=\").concat(currentPage);\n    formPaginationList = (lastPage)=>{\n        const paginationList = [];\n        for(let index = 0; index < lastPage; index++){\n            paginationList.push(index + 1);\n        }\n        return paginationList;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setIsLoading(true);\n            setError(false);\n            try {\n                const apiResponse = await fetch(APIURL);\n                const items = await apiResponse.json();\n                setLastPage(Number(items.pagination.last_visible_page));\n                setCards(items.data);\n            } catch (err) {\n                setError(true);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        APIURL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"search-bar\",\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                        setQuery(document.querySelector(\".search-bar--field\").value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"search-bar--label\",\n                            htmlFor: \"search-field\",\n                            children: \" Search MyAnimeList API \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search-bar--field\",\n                            type: \"text\",\n                            name: \"search-field\",\n                            id: \"search-field\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"search-bar--submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination-list\",\n                    children: formPaginationList(lastPage).map((pageNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: setCurrentPage(pageNumber),\n                                children: pageNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" sory...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 18\n                }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 23\n                }, this) : cards.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Noone's here but us chickens! \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"items-list\",\n                    children: cards.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                itemName: item.title,\n                                itemImgUrl: item.images.jpg.image_url,\n                                producers: item.producers,\n                                studios: item.studios\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        }, item.mal_id, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 19\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OOk5ZtR0cn8rs5Oh5wFV4tnwCxg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRDtBQUNWO0FBRzdCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQTtJQUNsQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsSUFBSWMsU0FBUyxvQ0FBa0RKLE9BQWRKLE9BQU0sVUFBb0IsT0FBWkk7SUFFL0RLLHFCQUFxQixDQUFDSDtRQUNwQixNQUFNSSxpQkFBaUIsRUFBRTtRQUN6QixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUwsVUFBVUssUUFBUztZQUM3Q0QsZUFBZUUsSUFBSSxDQUFDRCxRQUFRO1FBQzlCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsWUFBWTtZQUNoQmhCLGFBQWE7WUFDYk0sU0FBUztZQUNULElBQUk7Z0JBQ0YsTUFBTVcsY0FBYyxNQUFNQyxNQUFNUDtnQkFDaEMsTUFBTVEsUUFBUSxNQUFNRixZQUFZRyxJQUFJO2dCQUNwQ1YsWUFBWVcsT0FBT0YsTUFBTUcsVUFBVSxDQUFDQyxpQkFBaUI7Z0JBQ3JEckIsU0FBU2lCLE1BQU1LLElBQUk7WUFDckIsRUFBRSxPQUFPQyxLQUFLO2dCQUNabkIsU0FBUztZQUNYLFNBQVU7Z0JBQ1JOLGFBQWE7WUFDZjtRQUNGO1FBRUFnQjtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUVYLHFCQUNFLDhEQUFDZTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQ0NGLFdBQVU7b0JBQ1ZHLFVBQVUsQ0FBQ0M7d0JBQVFBLEVBQUVDLGNBQWM7d0JBQUk1QixTQUFTNkIsU0FBU0MsYUFBYSxDQUFDLHNCQUFzQkMsS0FBSztvQkFBRTs7c0NBQ3BHLDhEQUFDQzs0QkFBTVQsV0FBVTs0QkFBb0JVLFNBQVE7c0NBQWU7Ozs7OztzQ0FDNUQsOERBQUNDOzRCQUFNWCxXQUFVOzRCQUNmWSxNQUFLOzRCQUFPQyxNQUFLOzRCQUNqQkMsSUFBRzs7Ozs7O3NDQUVMLDhEQUFDQzs0QkFBT0gsTUFBSzs0QkFBU1osV0FBVTtzQ0FBcUI7Ozs7Ozs7Ozs7OztnQkFHdER0QixzQkFBUSxnSkFDUE4sMEJBQVksOEpBQ1YsOERBQUM0QztvQkFBR2hCLFdBQVU7OEJBQ1hmLG1CQUFtQkgsVUFBVW1DLEdBQUcsQ0FBQ0MsQ0FBQUEsMkJBQ2hDLDhEQUFDQztzQ0FDQyw0RUFBQ0o7Z0NBQU9LLFNBQVN2QyxlQUFlcUM7MENBQzdCQTs7Ozs7Ozs7Ozs7Ozs7OztnQkFPWnhDLHNCQUFRLDhEQUFDdUI7OEJBQUk7Ozs7OzJCQUNaN0IsMEJBQVksOERBQUM2Qjs4QkFBSTs7Ozs7MkJBQ2YzQixNQUFNK0MsTUFBTSxLQUFLLGtCQUFJLDhEQUFDcEI7OEJBQUk7Ozs7O3lDQUN4Qiw4REFBQ2U7b0JBQUdoQixXQUFVOzhCQUNYMUIsTUFBTTJDLEdBQUcsQ0FBQyxDQUFDSyxxQkFDViw4REFBQ0g7c0NBQ0MsNEVBQUNuRCxxRUFBUUE7Z0NBQ1B1RCxVQUFVRCxLQUFLRSxLQUFLO2dDQUNwQkMsWUFBWUgsS0FBS0ksTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQVM7Z0NBQ3JDQyxXQUFXUCxLQUFLTyxTQUFTO2dDQUN6QkMsU0FBU1IsS0FBS1EsT0FBTzs7Ozs7OzJCQUxoQlIsS0FBS1MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRDO0dBcEZ3QjVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEl0ZW1DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvSXRlbUNhcmQvSXRlbUNhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW2xhc3RQYWdlLCBzZXRMYXN0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBsZXQgQVBJVVJMID0gYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9hbmltZT9xPSR7cXVlcnl9JnBhZ2U9JHtjdXJyZW50UGFnZX1gXG5cbiAgZm9ybVBhZ2luYXRpb25MaXN0ID0gKGxhc3RQYWdlKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkxpc3QgPSBbXVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsYXN0UGFnZTsgaW5kZXgrKykge1xuICAgICAgcGFnaW5hdGlvbkxpc3QucHVzaChpbmRleCArIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2luYXRpb25MaXN0XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSVVSTClcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKClcbiAgICAgICAgc2V0TGFzdFBhZ2UoTnVtYmVyKGl0ZW1zLnBhZ2luYXRpb24ubGFzdF92aXNpYmxlX3BhZ2UpKVxuICAgICAgICBzZXRDYXJkcyhpdGVtcy5kYXRhKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtBUElVUkxdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzZXRRdWVyeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXItLWZpZWxkXCIpLnZhbHVlKSB9fT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tbGFiZWxcIiBodG1sRm9yPVwic2VhcmNoLWZpZWxkXCI+IFNlYXJjaCBNeUFuaW1lTGlzdCBBUEkgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tZmllbGRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2Vycm9yID8gPD48Lz4gOlxuICAgICAgICAgIGlzTG9hZGluZyA/IDw+PC8+IDpcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgICAge2Zvcm1QYWdpbmF0aW9uTGlzdChsYXN0UGFnZSkubWFwKHBhZ2VOdW1iZXIgPT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpfT5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgfVxuXG4gICAgICAgIHtlcnJvciA/IDxkaXY+IHNvcnkuLi48L2Rpdj4gOlxuICAgICAgICAgIGlzTG9hZGluZyA/IDxkaXY+TG9hZGluZy4uLjwvZGl2PiA6XG4gICAgICAgICAgICBjYXJkcy5sZW5ndGggPT09IDAgPyA8ZGl2PiBOb29uZSdzIGhlcmUgYnV0IHVzIGNoaWNrZW5zISA8L2Rpdj4gOlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaXRlbXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm1hbF9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbWdVcmw9e2l0ZW0uaW1hZ2VzLmpwZy5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXJzPXtpdGVtLnByb2R1Y2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICBzdHVkaW9zPXtpdGVtLnN0dWRpb3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FyZHMiLCJzZXRDYXJkcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJlcnJvciIsInNldEVycm9yIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImxhc3RQYWdlIiwic2V0TGFzdFBhZ2UiLCJBUElVUkwiLCJmb3JtUGFnaW5hdGlvbkxpc3QiLCJwYWdpbmF0aW9uTGlzdCIsImluZGV4IiwicHVzaCIsImZldGNoRGF0YSIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJpdGVtcyIsImpzb24iLCJOdW1iZXIiLCJwYWdpbmF0aW9uIiwibGFzdF92aXNpYmxlX3BhZ2UiLCJkYXRhIiwiZXJyIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJwYWdlTnVtYmVyIiwibGkiLCJvbkNsaWNrIiwibGVuZ3RoIiwiaXRlbSIsIml0ZW1OYW1lIiwidGl0bGUiLCJpdGVtSW1nVXJsIiwiaW1hZ2VzIiwianBnIiwiaW1hZ2VfdXJsIiwicHJvZHVjZXJzIiwic3R1ZGlvcyIsIm1hbF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});