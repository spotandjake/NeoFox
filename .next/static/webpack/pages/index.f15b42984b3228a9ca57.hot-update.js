/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Files/Scripts/Markdown_Standard.ts":
/*!********************************************!*\
  !*** ./Files/Scripts/Markdown_Standard.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n // Define language if needed\n\n(prismjs__WEBPACK_IMPORTED_MODULE_0___default().languages.markdown) = prismjs__WEBPACK_IMPORTED_MODULE_0___default().languages.extend(\"markup\", {});\nprismjs__WEBPACK_IMPORTED_MODULE_0___default().languages.insertBefore(\"markdown\", \"prolog\", {\n  \"url-reference\": {\n    pattern: /(?:!\\[(.*?)\\]\\((.*?)\\))/,\n    inside: {\n      Type: {\n        pattern: /(?<=\\[)([^\\[\\]]*)/\n      },\n      Url: {\n        pattern: /((?<=\\()|(?<=\\(<))([^(<>)]+)/\n      }\n    }\n  },\n  url: {\n    pattern: /(?:\\[(.*?)\\]\\((.*?)\\))/,\n    inside: {\n      Type: {\n        pattern: /(?<=\\[)([^\\[\\]]*)/\n      },\n      Url: {\n        pattern: /((?<=\\()|(?<=\\(<))([^(<>)]*)/\n      }\n    }\n  },\n  blockquote: {\n    pattern: /^> (.*)$/m,\n    inside: {\n      pattern: /^>/\n    }\n  },\n  code: {\n    pattern: /(?<!`)`[^`\\n]+`/m,\n    inside: {\n      punctuation: /(^`|`$)/\n    }\n  },\n  code_block: {\n    pattern: /```([\\s\\S]*?)```/m,\n    inside: {\n      punctuation: {\n        pattern: /^\\`\\`\\`|\\`\\`\\`/\n      },\n      language: {\n        pattern: /^[^\\n]([^\\s]*)\\n/\n      }\n    }\n  },\n  bold: {\n    pattern: /(?<!\\*)\\*\\*([^*]+)\\*\\*/g,\n    inside: {\n      punctuation: /^\\*\\*|\\*\\*$/\n    }\n  },\n  strikethrough: {\n    pattern: /(?<!\\~)\\~\\~([^*]+)\\~\\~/g,\n    inside: {\n      punctuation: /^\\~\\~|\\~\\~$/\n    }\n  },\n  underline: {\n    pattern: /(?<!\\_)\\_\\_([^_]+)\\_\\_/g,\n    inside: {\n      punctuation: /^\\_\\_|\\_\\_$/\n    }\n  },\n  italic: {\n    pattern: /(?<![*_])[*_]([^*_]+)[*_]/,\n    inside: {\n      punctuation: /^[*_]|[*_]$/\n    }\n  },\n  h2: {\n    pattern: /^## (.*$)/m,\n    inside: {\n      pattern: /^## /\n    }\n  },\n  h3: {\n    pattern: /^### (.*$)/m,\n    inside: {\n      pattern: /^### /\n    }\n  },\n  channel: {\n    pattern: /#([^\\s]+)/,\n    inside: {\n      pattern: /^#/\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((prismjs__WEBPACK_IMPORTED_MODULE_0___default().languages.markdown));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRmlsZXMvU2NyaXB0cy9NYXJrZG93bl9TdGFuZGFyZC50cz8yNjE5Il0sIm5hbWVzIjpbIlByaXNtIiwicGF0dGVybiIsImluc2lkZSIsIlR5cGUiLCJVcmwiLCJ1cmwiLCJibG9ja3F1b3RlIiwiY29kZSIsInB1bmN0dWF0aW9uIiwiY29kZV9ibG9jayIsImxhbmd1YWdlIiwiYm9sZCIsInN0cmlrZXRocm91Z2giLCJ1bmRlcmxpbmUiLCJpdGFsaWMiLCJoMiIsImgzIiwiY2hhbm5lbCJdLCJtYXBwaW5ncyI6Ijs7OztDQUNBOztBQUNBQSxtRUFBQSxHQUF5QkEsK0RBQUEsQ0FBdUIsUUFBdkIsRUFBZ0MsRUFBaEMsQ0FBekI7QUFDQUEscUVBQUEsQ0FBNkIsVUFBN0IsRUFBd0MsUUFBeEMsRUFBa0Q7QUFDaEQsbUJBQWdCO0FBQ2RDLFdBQU8sRUFBQyx5QkFETTtBQUVkQyxVQUFNLEVBQUM7QUFDTEMsVUFBSSxFQUFFO0FBQ0pGLGVBQU8sRUFBQztBQURKLE9BREQ7QUFJTEcsU0FBRyxFQUFFO0FBQ0hILGVBQU8sRUFBQztBQURMO0FBSkE7QUFGTyxHQURnQztBQVloREksS0FBRyxFQUFDO0FBQ0ZKLFdBQU8sRUFBQyx3QkFETjtBQUVGQyxVQUFNLEVBQUM7QUFDTEMsVUFBSSxFQUFFO0FBQ0pGLGVBQU8sRUFBQztBQURKLE9BREQ7QUFJTEcsU0FBRyxFQUFFO0FBQ0hILGVBQU8sRUFBQztBQURMO0FBSkE7QUFGTCxHQVo0QztBQXVCaERLLFlBQVUsRUFBQztBQUNUTCxXQUFPLEVBQUMsV0FEQztBQUVUQyxVQUFNLEVBQUU7QUFDTkQsYUFBTyxFQUFFO0FBREg7QUFGQyxHQXZCcUM7QUE2QmhETSxNQUFJLEVBQUM7QUFDSE4sV0FBTyxFQUFDLGtCQURMO0FBRUhDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFFO0FBRFI7QUFGSixHQTdCMkM7QUFtQ2hEQyxZQUFVLEVBQUU7QUFDVlIsV0FBTyxFQUFDLG1CQURFO0FBRVZDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFFO0FBQ1hQLGVBQU8sRUFBRTtBQURFLE9BRFI7QUFJTFMsY0FBUSxFQUFFO0FBQ1JULGVBQU8sRUFBQztBQURBO0FBSkw7QUFGRyxHQW5Db0M7QUE4Q2hEVSxNQUFJLEVBQUM7QUFDSFYsV0FBTyxFQUFDLHlCQURMO0FBRUhDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFDO0FBRFA7QUFGSixHQTlDMkM7QUFvRGhESSxlQUFhLEVBQUM7QUFDWlgsV0FBTyxFQUFDLHlCQURJO0FBRVpDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFDO0FBRFA7QUFGSyxHQXBEa0M7QUEwRGhESyxXQUFTLEVBQUM7QUFDUlosV0FBTyxFQUFDLHlCQURBO0FBRVJDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFDO0FBRFA7QUFGQyxHQTFEc0M7QUFnRWhETSxRQUFNLEVBQUM7QUFDTGIsV0FBTyxFQUFDLDJCQURIO0FBRUxDLFVBQU0sRUFBQztBQUNMTSxpQkFBVyxFQUFDO0FBRFA7QUFGRixHQWhFeUM7QUFzRWhETyxJQUFFLEVBQUU7QUFDRmQsV0FBTyxFQUFDLFlBRE47QUFFRkMsVUFBTSxFQUFFO0FBQ05ELGFBQU8sRUFBRTtBQURIO0FBRk4sR0F0RTRDO0FBNEVoRGUsSUFBRSxFQUFFO0FBQ0ZmLFdBQU8sRUFBQyxhQUROO0FBRUZDLFVBQU0sRUFBRTtBQUNORCxhQUFPLEVBQUU7QUFESDtBQUZOLEdBNUU0QztBQWtGaERnQixTQUFPLEVBQUM7QUFDTmhCLFdBQU8sRUFBRSxXQURIO0FBRU5DLFVBQU0sRUFBRTtBQUNORCxhQUFPLEVBQUU7QUFESDtBQUZGO0FBbEZ3QyxDQUFsRDtBQTBGQSwrREFBZUQsbUVBQWYiLCJmaWxlIjoiLi9GaWxlcy9TY3JpcHRzL01hcmtkb3duX1N0YW5kYXJkLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuLy8gRGVmaW5lIGxhbmd1YWdlIGlmIG5lZWRlZFxuUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duPVByaXNtLmxhbmd1YWdlcy5leHRlbmQoXCJtYXJrdXBcIix7fSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFwibWFya2Rvd25cIixcInByb2xvZ1wiLCB7XG4gIFwidXJsLXJlZmVyZW5jZVwiOntcbiAgICBwYXR0ZXJuOi8oPzohXFxbKC4qPylcXF1cXCgoLio/KVxcKSkvLFxuICAgIGluc2lkZTp7XG4gICAgICBUeXBlOiB7XG4gICAgICAgIHBhdHRlcm46Lyg/PD1cXFspKFteXFxbXFxdXSopLyxcbiAgICAgIH0sXG4gICAgICBVcmw6IHtcbiAgICAgICAgcGF0dGVybjovKCg/PD1cXCgpfCg/PD1cXCg8KSkoW14oPD4pXSspLyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVybDp7XG4gICAgcGF0dGVybjovKD86XFxbKC4qPylcXF1cXCgoLio/KVxcKSkvLFxuICAgIGluc2lkZTp7XG4gICAgICBUeXBlOiB7XG4gICAgICAgIHBhdHRlcm46Lyg/PD1cXFspKFteXFxbXFxdXSopLyxcbiAgICAgIH0sXG4gICAgICBVcmw6IHtcbiAgICAgICAgcGF0dGVybjovKCg/PD1cXCgpfCg/PD1cXCg8KSkoW14oPD4pXSopLyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJsb2NrcXVvdGU6e1xuICAgIHBhdHRlcm46L14+ICguKikkL20sXG4gICAgaW5zaWRlOiB7XG4gICAgICBwYXR0ZXJuOiAvXj4vXG4gICAgfSxcbiAgfSxcbiAgY29kZTp7XG4gICAgcGF0dGVybjovKD88IWApYFteYFxcbl0rYC9tLFxuICAgIGluc2lkZTp7XG4gICAgICBwdW5jdHVhdGlvbjogLyheYHxgJCkvXG4gICAgfVxuICB9LFxuICBjb2RlX2Jsb2NrOiB7XG4gICAgcGF0dGVybjovYGBgKFtcXHNcXFNdKj8pYGBgL20sXG4gICAgaW5zaWRlOntcbiAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC9eXFxgXFxgXFxgfFxcYFxcYFxcYC9cbiAgICAgIH0sXG4gICAgICBsYW5ndWFnZToge1xuICAgICAgICBwYXR0ZXJuOi9eW15cXG5dKFteXFxzXSopXFxuLyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJvbGQ6e1xuICAgIHBhdHRlcm46Lyg/PCFcXCopXFwqXFwqKFteKl0rKVxcKlxcKi9nLFxuICAgIGluc2lkZTp7XG4gICAgICBwdW5jdHVhdGlvbjovXlxcKlxcKnxcXCpcXCokL1xuICAgIH1cbiAgfSxcbiAgc3RyaWtldGhyb3VnaDp7XG4gICAgcGF0dGVybjovKD88IVxcfilcXH5cXH4oW14qXSspXFx+XFx+L2csXG4gICAgaW5zaWRlOntcbiAgICAgIHB1bmN0dWF0aW9uOi9eXFx+XFx+fFxcflxcfiQvXG4gICAgfVxuICB9LFxuICB1bmRlcmxpbmU6e1xuICAgIHBhdHRlcm46Lyg/PCFcXF8pXFxfXFxfKFteX10rKVxcX1xcXy9nLFxuICAgIGluc2lkZTp7XG4gICAgICBwdW5jdHVhdGlvbjovXlxcX1xcX3xcXF9cXF8kL1xuICAgIH1cbiAgfSxcbiAgaXRhbGljOntcbiAgICBwYXR0ZXJuOi8oPzwhWypfXSlbKl9dKFteKl9dKylbKl9dLyxcbiAgICBpbnNpZGU6e1xuICAgICAgcHVuY3R1YXRpb246L15bKl9dfFsqX10kL1xuICAgIH1cbiAgfSxcbiAgaDI6IHtcbiAgICBwYXR0ZXJuOi9eIyMgKC4qJCkvbSxcbiAgICBpbnNpZGU6IHtcbiAgICAgIHBhdHRlcm46IC9eIyMgL1xuICAgIH0sXG4gIH0sXG4gIGgzOiB7XG4gICAgcGF0dGVybjovXiMjIyAoLiokKS9tLFxuICAgIGluc2lkZToge1xuICAgICAgcGF0dGVybjogL14jIyMgL1xuICAgIH0sXG4gIH0sXG4gIGNoYW5uZWw6e1xuICAgIHBhdHRlcm46IC8jKFteXFxzXSspLyxcbiAgICBpbnNpZGU6IHtcbiAgICAgIHBhdHRlcm46IC9eIy9cbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Files/Scripts/Markdown_Standard.ts\n");

/***/ })

});