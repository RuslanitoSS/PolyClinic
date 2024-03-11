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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [lastPage, setLastPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    let APIURL = \"https://api.jikan.moe/v4/anime?q=\".concat(query, \"&page=\").concat(currentPage);\n    const formPaginationList = (currentPage, lastPage)=>{\n        const paginationList = [];\n        //5 страниц назад\n        for(let index = currentPage; index > Math.max(currentPage - 5, 1); index--){\n            paginationList.push(index);\n        }\n        for(let index = currentPage; index < Math.min(currentPage + 5, lastPage); index++){\n            paginationList.push(index);\n        }\n        return paginationList;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setIsLoading(true);\n            setError(false);\n            try {\n                const apiResponse = await fetch(APIURL);\n                const items = await apiResponse.json();\n                setLastPage(Number(items.pagination.last_visible_page));\n                setCards(items.data);\n            } catch (err) {\n                setError(true);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        APIURL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"search-bar\",\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                        setQuery(document.querySelector(\".search-bar--field\").value);\n                        setCurrentPage(1);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"search-bar--label\",\n                            htmlFor: \"search-field\",\n                            children: \" Search MyAnimeList API \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search-bar--field\",\n                            type: \"text\",\n                            name: \"search-field\",\n                            id: \"search-field\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"search-bar--submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination-list\",\n                    children: formPaginationList(currentPage, lastPage).map((pageNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setCurrentPage(pageNumber);\n                                },\n                                className: \"pagination-list--btn\",\n                                children: pageNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" sory...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 18\n                }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 23\n                }, this) : cards.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Noone's here but us chickens! \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"items-list\",\n                    children: cards.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                itemName: item.title,\n                                itemImgUrl: item.images.jpg.image_url,\n                                producers: item.producers,\n                                studios: item.studios\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        }, item.mal_id, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 19\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OOk5ZtR0cn8rs5Oh5wFV4tnwCxg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQkMsWUFBWUgsS0FBS0ksTUFBTSxDQUFDQyxHQUFHLENBQUNDLFNBQVM7Z0NBQ3JDQyxXQUFXUCxLQUFLTyxTQUFTO2dDQUN6QkMsU0FBU1IsS0FBS1EsT0FBTzs7Ozs7OzJCQUxoQlIsS0FBS1MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRDO0dBeEZ3Qi9EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEl0ZW1DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvSXRlbUNhcmQvSXRlbUNhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW2xhc3RQYWdlLCBzZXRMYXN0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBsZXQgQVBJVVJMID0gYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9hbmltZT9xPSR7cXVlcnl9JnBhZ2U9JHtjdXJyZW50UGFnZX1gXG5cbiAgY29uc3QgZm9ybVBhZ2luYXRpb25MaXN0ID0gKGN1cnJlbnRQYWdlLCBsYXN0UGFnZSkgPT4ge1xuICAgIGNvbnN0IHBhZ2luYXRpb25MaXN0ID0gW11cbiAgICAvLzUg0YHRgtGA0LDQvdC40YYg0L3QsNC30LDQtFxuICAgIGZvciAobGV0IGluZGV4ID0gY3VycmVudFBhZ2U7IGluZGV4ID4gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSA1LCAxKTsgaW5kZXgtLSkge1xuICAgICAgcGFnaW5hdGlvbkxpc3QucHVzaChpbmRleClcbiAgICB9XG4gICAgZm9yIChsZXQgaW5kZXggPSBjdXJyZW50UGFnZTsgaW5kZXggPCBNYXRoLm1pbihjdXJyZW50UGFnZSArIDUsIGxhc3RQYWdlKTsgaW5kZXgrKykge1xuICAgICAgcGFnaW5hdGlvbkxpc3QucHVzaChpbmRleClcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnaW5hdGlvbkxpc3RcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJVVJMKVxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRMYXN0UGFnZShOdW1iZXIoaXRlbXMucGFnaW5hdGlvbi5sYXN0X3Zpc2libGVfcGFnZSkpXG4gICAgICAgIHNldENhcmRzKGl0ZW1zLmRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW0FQSVVSTF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNldFF1ZXJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhci0tZmllbGRcIikudmFsdWUpOyBzZXRDdXJyZW50UGFnZSgxKSB9fT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tbGFiZWxcIiBodG1sRm9yPVwic2VhcmNoLWZpZWxkXCI+IFNlYXJjaCBNeUFuaW1lTGlzdCBBUEkgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tZmllbGRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2Vycm9yID8gPD48Lz4gOlxuICAgICAgICAgIGlzTG9hZGluZyA/IDw+PC8+IDpcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgICAge2Zvcm1QYWdpbmF0aW9uTGlzdChjdXJyZW50UGFnZSwgbGFzdFBhZ2UpLm1hcChwYWdlTnVtYmVyID0+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcil9fSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3QtLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFnZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICB9XG5cbiAgICAgICAge2Vycm9yID8gPGRpdj4gc29yeS4uLjwvZGl2PiA6XG4gICAgICAgICAgaXNMb2FkaW5nID8gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+IDpcbiAgICAgICAgICAgIGNhcmRzLmxlbmd0aCA9PT0gMCA/IDxkaXY+IE5vb25lJ3MgaGVyZSBidXQgdXMgY2hpY2tlbnMhIDwvZGl2PiA6XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubWFsX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1DYXJkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUltZ1VybD17aXRlbS5pbWFnZXMuanBnLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNlcnM9e2l0ZW0ucHJvZHVjZXJzfVxuICAgICAgICAgICAgICAgICAgICAgIHN0dWRpb3M9e2l0ZW0uc3R1ZGlvc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSXRlbUNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYXJkcyIsInNldENhcmRzIiwicXVlcnkiLCJzZXRRdWVyeSIsImVycm9yIiwic2V0RXJyb3IiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibGFzdFBhZ2UiLCJzZXRMYXN0UGFnZSIsIkFQSVVSTCIsImZvcm1QYWdpbmF0aW9uTGlzdCIsInBhZ2luYXRpb25MaXN0IiwiaW5kZXgiLCJNYXRoIiwibWF4IiwicHVzaCIsIm1pbiIsImZldGNoRGF0YSIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJpdGVtcyIsImpzb24iLCJOdW1iZXIiLCJwYWdpbmF0aW9uIiwibGFzdF92aXNpYmxlX3BhZ2UiLCJkYXRhIiwiZXJyIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJwYWdlTnVtYmVyIiwibGkiLCJvbkNsaWNrIiwibGVuZ3RoIiwiaXRlbSIsIml0ZW1OYW1lIiwidGl0bGUiLCJpdGVtSW1nVXJsIiwiaW1hZ2VzIiwianBnIiwiaW1hZ2VfdXJsIiwicHJvZHVjZXJzIiwic3R1ZGlvcyIsIm1hbF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});