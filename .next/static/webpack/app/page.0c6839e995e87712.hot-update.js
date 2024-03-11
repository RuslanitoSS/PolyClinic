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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [lastPage, setLastPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    let APIURL = \"https://api.jikan.moe/v4/anime?q=\".concat(query, \"&page=\").concat(currentPage, \"&sfw\");\n    const formPaginationList = (currentPage, lastPage)=>{\n        const pagesRenderRadius = 10;\n        const paginationList = [];\n        //кнопка \"в начало\". если Первую стр не видно\n        if (currentPage - 10 > 1) {\n            paginationList.push(1);\n        }\n        //10 страниц назад, если возможно\n        for(let index = Math.max(1, currentPage - pagesRenderRadius); index < currentPage; index++){\n            paginationList.push(index);\n        }\n        //текущаю страница  \n        paginationList.push(currentPage);\n        //10 стр вперёд\n        for(let index = currentPage + 1; index <= Math.min(currentPage + pagesRenderRadius, lastPage); index++){\n            paginationList.push(index);\n        }\n        /*  //кнопка \"в конец\". если Послденюю стр не видно\n     if (currentPage + 10 < lastPage) {\n      paginationList.push(lastPage)\n    } */ return paginationList;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setIsLoading(true);\n            setError(false);\n            try {\n                const apiResponse = await fetch(APIURL);\n                const items = await apiResponse.json();\n                setLastPage(Number(items.pagination.last_visible_page));\n                setCards(items.data);\n            } catch (err) {\n                setError(true);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        APIURL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"search-bar\",\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                        setQuery(document.querySelector(\".search-bar--field\").value);\n                        setCurrentPage(1);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"search-bar--label\",\n                            htmlFor: \"search-field\",\n                            children: \" Search MyAnimeList API \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search-bar--field\",\n                            type: \"text\",\n                            name: \"search-field\",\n                            id: \"search-field\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"search-bar--submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination-list\",\n                    children: formPaginationList(currentPage, lastPage).map((pageNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: pageNumber === 1 && currentPage - 10 > 1 ? \"pagination-list--start-btn\" : \"pagination-list--btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setCurrentPage(pageNumber);\n                                },\n                                className: pageNumber === currentPage ? \"btn-current-page\" : \"\",\n                                children: pageNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" sory...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 18\n                }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 23\n                }, this) : cards.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Noone's here but us chickens! \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"items-list\",\n                    children: cards.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                itemName: item.title,\n                                itemImgUrl: item.images.jpg.image_url,\n                                producers: item.producers,\n                                studios: item.studios\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, this)\n                        }, item.mal_id, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 19\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OOk5ZtR0cn8rs5Oh5wFV4tnwCxg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Z0JBT1o1QyxzQkFBUSw4REFBQzJCOzhCQUFJOzs7OzsyQkFDWmpDLDBCQUFZLDhEQUFDaUM7OEJBQUk7Ozs7OzJCQUNmL0IsTUFBTW1ELE1BQU0sS0FBSyxrQkFBSSw4REFBQ3BCOzhCQUFJOzs7Ozt5Q0FDeEIsOERBQUNlO29CQUFHaEIsV0FBVTs4QkFDWDlCLE1BQU0rQyxHQUFHLENBQUMsQ0FBQ0sscUJBQ1YsOERBQUNIO3NDQUNDLDRFQUFDdkQscUVBQVFBO2dDQUNQMkQsVUFBVUQsS0FBS0UsS0FBSztnQ0FDcEJDLFlBQVlILEtBQUtJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO2dDQUNyQ0MsV0FBV1AsS0FBS08sU0FBUztnQ0FDekJDLFNBQVNSLEtBQUtRLE9BQU87Ozs7OzsyQkFMaEJSLEtBQUtTLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV0QztHQXpHd0JoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanN4P2Q0NjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBJdGVtQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0l0ZW1DYXJkL0l0ZW1DYXJkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtsYXN0UGFnZSwgc2V0TGFzdFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgbGV0IEFQSVVSTCA9IGBodHRwczovL2FwaS5qaWthbi5tb2UvdjQvYW5pbWU/cT0ke3F1ZXJ5fSZwYWdlPSR7Y3VycmVudFBhZ2V9JnNmd2BcblxuICBjb25zdCBmb3JtUGFnaW5hdGlvbkxpc3QgPSAoY3VycmVudFBhZ2UsIGxhc3RQYWdlKSA9PiB7XG4gICAgY29uc3QgcGFnZXNSZW5kZXJSYWRpdXMgPSAxMFxuICAgIGNvbnN0IHBhZ2luYXRpb25MaXN0ID0gW11cbiAgICAvL9C60L3QvtC/0LrQsCBcItCyINC90LDRh9Cw0LvQvlwiLiDQtdGB0LvQuCDQn9C10YDQstGD0Y4g0YHRgtGAINC90LUg0LLQuNC00L3QvlxuICAgIGlmIChjdXJyZW50UGFnZSAtIDEwID4gMSkge1xuICAgICAgcGFnaW5hdGlvbkxpc3QucHVzaCgxKVxuICAgIH1cbiAgICAvLzEwINGB0YLRgNCw0L3QuNGGINC90LDQt9Cw0LQsINC10YHQu9C4INCy0L7Qt9C80L7QttC90L5cbiAgICBmb3IgKGxldCBpbmRleCA9IE1hdGgubWF4KDEsIGN1cnJlbnRQYWdlIC0gcGFnZXNSZW5kZXJSYWRpdXMpOyBpbmRleCA8IGN1cnJlbnRQYWdlOyBpbmRleCsrKSB7XG4gICAgICBwYWdpbmF0aW9uTGlzdC5wdXNoKGluZGV4KVxuICAgIH1cblxuICAgIC8v0YLQtdC60YPRidCw0Y4g0YHRgtGA0LDQvdC40YbQsCAgXG4gICAgcGFnaW5hdGlvbkxpc3QucHVzaChjdXJyZW50UGFnZSlcblxuICAgIC8vMTAg0YHRgtGAINCy0L/QtdGA0ZHQtFxuICAgIGZvciAobGV0IGluZGV4ID0gY3VycmVudFBhZ2UgKyAxOyBpbmRleCA8PSBNYXRoLm1pbihjdXJyZW50UGFnZSArIHBhZ2VzUmVuZGVyUmFkaXVzLCBsYXN0UGFnZSk7IGluZGV4KyspIHtcbiAgICAgIHBhZ2luYXRpb25MaXN0LnB1c2goaW5kZXgpXG4gICAgfVxuXG4gICAgLyogIC8v0LrQvdC+0L/QutCwIFwi0LIg0LrQvtC90LXRhlwiLiDQtdGB0LvQuCDQn9C+0YHQu9C00LXQvdGO0Y4g0YHRgtGAINC90LUg0LLQuNC00L3QvlxuICAgICBpZiAoY3VycmVudFBhZ2UgKyAxMCA8IGxhc3RQYWdlKSB7XG4gICAgICBwYWdpbmF0aW9uTGlzdC5wdXNoKGxhc3RQYWdlKVxuICAgIH0gKi9cbiAgICByZXR1cm4gcGFnaW5hdGlvbkxpc3RcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJVVJMKVxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRMYXN0UGFnZShOdW1iZXIoaXRlbXMucGFnaW5hdGlvbi5sYXN0X3Zpc2libGVfcGFnZSkpXG4gICAgICAgIHNldENhcmRzKGl0ZW1zLmRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW0FQSVVSTF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNldFF1ZXJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhci0tZmllbGRcIikudmFsdWUpOyBzZXRDdXJyZW50UGFnZSgxKSB9fT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tbGFiZWxcIiBodG1sRm9yPVwic2VhcmNoLWZpZWxkXCI+IFNlYXJjaCBNeUFuaW1lTGlzdCBBUEkgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tZmllbGRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2Vycm9yID8gPD48Lz4gOlxuICAgICAgICAgIGlzTG9hZGluZyA/IDw+PC8+IDpcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgICAge2Zvcm1QYWdpbmF0aW9uTGlzdChjdXJyZW50UGFnZSwgbGFzdFBhZ2UpLm1hcChwYWdlTnVtYmVyID0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGFnZU51bWJlciA9PT0gMSAmJiBjdXJyZW50UGFnZSAtIDEwID4gMSA/IFwicGFnaW5hdGlvbi1saXN0LS1zdGFydC1idG5cIiA6IFwicGFnaW5hdGlvbi1saXN0LS1idG5cIn0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VycmVudFBhZ2UocGFnZU51bWJlcikgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlTnVtYmVyID09PSBjdXJyZW50UGFnZSA/IFwiYnRuLWN1cnJlbnQtcGFnZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgfVxuXG4gICAgICAgIHtlcnJvciA/IDxkaXY+IHNvcnkuLi48L2Rpdj4gOlxuICAgICAgICAgIGlzTG9hZGluZyA/IDxkaXY+TG9hZGluZy4uLjwvZGl2PiA6XG4gICAgICAgICAgICBjYXJkcy5sZW5ndGggPT09IDAgPyA8ZGl2PiBOb29uZSdzIGhlcmUgYnV0IHVzIGNoaWNrZW5zISA8L2Rpdj4gOlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaXRlbXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm1hbF9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbWdVcmw9e2l0ZW0uaW1hZ2VzLmpwZy5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXJzPXtpdGVtLnByb2R1Y2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICBzdHVkaW9zPXtpdGVtLnN0dWRpb3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2FyZHMiLCJzZXRDYXJkcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJlcnJvciIsInNldEVycm9yIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImxhc3RQYWdlIiwic2V0TGFzdFBhZ2UiLCJBUElVUkwiLCJmb3JtUGFnaW5hdGlvbkxpc3QiLCJwYWdlc1JlbmRlclJhZGl1cyIsInBhZ2luYXRpb25MaXN0IiwicHVzaCIsImluZGV4IiwiTWF0aCIsIm1heCIsIm1pbiIsImZldGNoRGF0YSIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJpdGVtcyIsImpzb24iLCJOdW1iZXIiLCJwYWdpbmF0aW9uIiwibGFzdF92aXNpYmxlX3BhZ2UiLCJkYXRhIiwiZXJyIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJwYWdlTnVtYmVyIiwibGkiLCJvbkNsaWNrIiwibGVuZ3RoIiwiaXRlbSIsIml0ZW1OYW1lIiwidGl0bGUiLCJpdGVtSW1nVXJsIiwiaW1hZ2VzIiwianBnIiwiaW1hZ2VfdXJsIiwicHJvZHVjZXJzIiwic3R1ZGlvcyIsIm1hbF9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});