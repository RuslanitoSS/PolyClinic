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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/data */ \"(app-pages-browser)/./src/app/data.js\");\n/* harmony import */ var _components_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ItemCard/ItemCard */ \"(app-pages-browser)/./src/components/ItemCard/ItemCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nlet apiAnimeURL = \"https://api.jikan.moe/v4/anime?q=ChainSawMan\";\nfunction Home() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const apiResponse = await fetch(apiAnimeURL);\n            const items = await apiResponse.json();\n            setCards(items.data);\n        };\n        fetchData();\n    }, []);\n    console.log(cards);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Games\\\\polyWeb\\\\PolyClinic\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jbk9bBkkvWK4BlqqPDLOYgAfpA4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUM7QUFDZTtBQUNWO0FBRTVDLElBQUlJLGNBQWM7QUFFSCxTQUFTQzs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQTtJQUdsQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxZQUFZO1lBQ2hCLE1BQU1DLGNBQWMsTUFBTUMsTUFBTU47WUFDaEMsTUFBTU8sUUFBUSxNQUFNRixZQUFZRyxJQUFJO1lBRXBDTCxTQUFTSSxNQUFNRSxJQUFJO1FBRXJCO1FBRUFMO0lBR0YsR0FBRyxFQUFFO0lBRUxNLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDWixxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTs7Ozs7O0FBcUJwQjtHQTFDd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgaXRlbXNEYXRhIH0gZnJvbSBcIkAvYXBwL2RhdGFcIjtcbmltcG9ydCBJdGVtQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0l0ZW1DYXJkL0l0ZW1DYXJkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmxldCBhcGlBbmltZVVSTCA9IFwiaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L2FuaW1lP3E9Q2hhaW5TYXdNYW5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUFuaW1lVVJMKVxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKClcbiAgICAgIFxuICAgICAgc2V0Q2FyZHMoaXRlbXMuZGF0YSlcblxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKVxuXG5cbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGNhcmRzKVxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuICAgey8qICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItLWxhYmVsXCIgaHRtbEZvcj1cInNlYXJjaC1maWVsZFwiPiBTZWFyY2ggTXlBbmltZUxpc3QgQVBJIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLS1maWVsZFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaC1maWVsZFwiIGlkPVwic2VhcmNoLWZpZWxkXCIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJhci0tc3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgIHtjYXJkcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgPGxpIGtleT17aXRlbS5tYWxfaWR9PlxuICAgICAgICAgICAgPEl0ZW1DYXJkXG4gICAgICAgICAgICAgIGl0ZW1OYW1lPXtpdGVtLnRpdGxlX2VuZ2xpc2h9XG4gICAgICAgICAgICAgIGl0ZW1JbWdVcmw9e2l0ZW0uaW1hZ2VzLmpwZy5pbWFnZV91cmx9XG4gICAgICAgICAgICAgIHByb2R1Y2Vycz17aXRlbS5wcm9kdWNlcnN9XG4gICAgICAgICAgICAgIHN0dWRpb3M9e2l0ZW0uc3R1ZGlvc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvdWw+ICovfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpdGVtc0RhdGEiLCJJdGVtQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpQW5pbWVVUkwiLCJIb21lIiwiY2FyZHMiLCJzZXRDYXJkcyIsImZldGNoRGF0YSIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJpdGVtcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});