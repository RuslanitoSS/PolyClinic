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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [lastPage, setLastPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    let APIURL = \"https://api.jikan.moe/v4/anime?q=\".concat(query, \"&page=\").concat(currentPage);\n    const formPaginationList = (lastPage)=>{\n        const paginationList = [];\n        for(let index = 0; index < lastPage; index++){\n            paginationList.push(index + 1);\n        }\n        return paginationList;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setIsLoading(true);\n            setError(false);\n            try {\n                const apiResponse = await fetch(APIURL);\n                const items = await apiResponse.json();\n                setLastPage(Number(items.pagination.last_visible_page));\n                setCards(items.data);\n            } catch (err) {\n                setError(true);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        APIURL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"search-bar\",\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                        setQuery(document.querySelector(\".search-bar--field\").value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"search-bar--label\",\n                            htmlFor: \"search-field\",\n                            children: \" Search MyAnimeList API \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"search-bar--field\",\n                            type: \"text\",\n                            name: \"search-field\",\n                            id: \"search-field\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"search-bar--submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination-list\",\n                    children: formPaginationList(lastPage).map((pageNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setCurrentPage(pageNumber);\n                                },\n                                className: currentPage === this.value ? \"pagination-list--btn active\" : \"pagination-list--btn\",\n                                children: pageNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this),\n                error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" sory...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 18\n                }, this) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 23\n                }, this) : cards.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Noone's here but us chickens! \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 34\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"items-list\",\n                    children: cards.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                itemName: item.title,\n                                itemImgUrl: item.images.jpg.image_url,\n                                producers: item.producers,\n                                studios: item.studios\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        }, item.mal_id, false, {\n                            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 19\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OOk5ZtR0cn8rs5Oh5wFV4tnwCxg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFldEM7R0FwRndCNUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSXRlbUNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9JdGVtQ2FyZC9JdGVtQ2FyZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbGFzdFBhZ2UsIHNldExhc3RQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBBUElVUkwgPSBgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L2FuaW1lP3E9JHtxdWVyeX0mcGFnZT0ke2N1cnJlbnRQYWdlfWBcblxuICBjb25zdCBmb3JtUGFnaW5hdGlvbkxpc3QgPSAobGFzdFBhZ2UpID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGlzdCA9IFtdXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhc3RQYWdlOyBpbmRleCsrKSB7XG4gICAgICBwYWdpbmF0aW9uTGlzdC5wdXNoKGluZGV4ICsgMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnaW5hdGlvbkxpc3RcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJVVJMKVxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRMYXN0UGFnZShOdW1iZXIoaXRlbXMucGFnaW5hdGlvbi5sYXN0X3Zpc2libGVfcGFnZSkpXG4gICAgICAgIHNldENhcmRzKGl0ZW1zLmRhdGEpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW0FQSVVSTF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHNldFF1ZXJ5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhci0tZmllbGRcIikudmFsdWUpIH19PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLS1sYWJlbFwiIGh0bWxGb3I9XCJzZWFyY2gtZmllbGRcIj4gU2VhcmNoIE15QW5pbWVMaXN0IEFQSSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLS1maWVsZFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtZmllbGRcIlxuICAgICAgICAgICAgaWQ9XCJzZWFyY2gtZmllbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tc3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7ZXJyb3IgPyA8PjwvPiA6XG4gICAgICAgICAgaXNMb2FkaW5nID8gPD48Lz4gOlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICB7Zm9ybVBhZ2luYXRpb25MaXN0KGxhc3RQYWdlKS5tYXAocGFnZU51bWJlciA9PlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpfX0gY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gdGhpcy52YWx1ZSA/IFwicGFnaW5hdGlvbi1saXN0LS1idG4gYWN0aXZlXCIgOiBcInBhZ2luYXRpb24tbGlzdC0tYnRuXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7cGFnZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICB9XG5cbiAgICAgICAge2Vycm9yID8gPGRpdj4gc29yeS4uLjwvZGl2PiA6XG4gICAgICAgICAgaXNMb2FkaW5nID8gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+IDpcbiAgICAgICAgICAgIGNhcmRzLmxlbmd0aCA9PT0gMCA/IDxkaXY+IE5vb25lJ3MgaGVyZSBidXQgdXMgY2hpY2tlbnMhIDwvZGl2PiA6XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubWFsX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1DYXJkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUltZ1VybD17aXRlbS5pbWFnZXMuanBnLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNlcnM9e2l0ZW0ucHJvZHVjZXJzfVxuICAgICAgICAgICAgICAgICAgICAgIHN0dWRpb3M9e2l0ZW0uc3R1ZGlvc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSXRlbUNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjYXJkcyIsInNldENhcmRzIiwicXVlcnkiLCJzZXRRdWVyeSIsImVycm9yIiwic2V0RXJyb3IiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibGFzdFBhZ2UiLCJzZXRMYXN0UGFnZSIsIkFQSVVSTCIsImZvcm1QYWdpbmF0aW9uTGlzdCIsInBhZ2luYXRpb25MaXN0IiwiaW5kZXgiLCJwdXNoIiwiZmV0Y2hEYXRhIiwiYXBpUmVzcG9uc2UiLCJmZXRjaCIsIml0ZW1zIiwianNvbiIsIk51bWJlciIsInBhZ2luYXRpb24iLCJsYXN0X3Zpc2libGVfcGFnZSIsImRhdGEiLCJlcnIiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJidXR0b24iLCJ1bCIsIm1hcCIsInBhZ2VOdW1iZXIiLCJsaSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJpdGVtIiwiaXRlbU5hbWUiLCJ0aXRsZSIsIml0ZW1JbWdVcmwiLCJpbWFnZXMiLCJqcGciLCJpbWFnZV91cmwiLCJwcm9kdWNlcnMiLCJzdHVkaW9zIiwibWFsX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});