/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Files/Components/Message/Markdown.tsx":
/*!***********************************************!*\
  !*** ./Files/Components/Message/Markdown.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Style/Components/Markdown.module.scss */ \"./Files/Style/Components/Markdown.module.scss\");\n/* harmony import */ var _Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Scripts_Markdown_Standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Scripts/Markdown_Standard */ \"./Files/Scripts/Markdown_Standard.ts\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Scripts/hljs */ \"./Files/Scripts/hljs.ts\");\n/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Preview */ \"./Files/Components/Message/Preview.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/runner/NeoFox/Files/Components/Message/Markdown.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n // Function\n\nvar Marked = function Marked(props) {\n  var Tokens = prismjs__WEBPACK_IMPORTED_MODULE_3___default().tokenize(props.MD, _Scripts_Markdown_Standard__WEBPACK_IMPORTED_MODULE_2__.default);\n  var Output = [];\n  Tokens.forEach(function (Token, i) {\n    if (!Token) return;\n\n    var Convert = function Convert(_ref) {\n      var content = _ref.content;\n      if (typeof content == 'string') return {\n        Text: content,\n        Type: ''\n      };\n      var Text = '',\n          Output = {\n        language: '',\n        Type: '',\n        Url: ''\n      };\n      content.forEach(function (Part) {\n        if (typeof Part == 'string') {\n          Text += Part;\n        } else if (Part.type == 'language') {\n          Output['language'] = Part.content.trim();\n        } else if (Part.type == 'Type') {\n          Output['Type'] = Part.content;\n        } else if (Part.type == 'Url') {\n          Output['Url'] = Part.content;\n        }\n      });\n      return {\n        Text: Text,\n        Output: Output\n      };\n    };\n\n    if (typeof Token == 'string') {\n      Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: Token\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }, _this));\n    } else {\n      switch (Token.type) {\n        case 'bold':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'italic':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'strikethrough':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'underline':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ins\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'code':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'blockquote':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: (_Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default().blockqoute),\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'url':\n          var _Convert$Output = Convert(Token).Output,\n              Title = _Convert$Output.Type,\n              Href = _Convert$Output.Url;\n\n          try {\n            Href = encodeURI(Href.replace('javascript:', '')).replace(/%25/g, '%');\n          } catch (e) {\n            Href = '';\n          }\n\n          if (Href == '') Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: Title\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 39\n          }, _this));else Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: Href,\n            children: Title\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 28\n          }, _this));\n          break;\n\n        case 'url-reference':\n          var _Convert$Output2 = Convert(Token).Output,\n              Type = _Convert$Output2.Type,\n              Url = _Convert$Output2.Url;\n\n          try {\n            Url = encodeURI(Url.replace('javascript:', '')).replace(/%25/g, '%');\n          } catch (e) {\n            Url = '';\n          }\n\n          if (Url == '') Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: Type\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 38\n          }, _this));else {\n            switch (true) {\n              case /\\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(Url) || Type == 'Image':\n              default:\n                Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Preview__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                  Url: Url,\n                  alt: Type || ''\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 19\n                }, _this));\n            }\n          }\n          break;\n\n        case 'code_block':\n          var Data = Convert(Token),\n              Txt = Data.Text.trim();\n          var Highlighted = _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__.default.getLanguage(Data.Output.language) ? _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__.default.highlight(Txt, {\n            language: Data.Output.language\n          }).value : Txt;\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n              dangerouslySetInnerHTML: {\n                __html: Highlighted\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 26\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this));\n          break;\n\n        case 'h1':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'h2':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'h3':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'channel':\n          console.log(Convert(Token));\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default().channel),\n            children: [\"#\", Convert(Token).Text]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 23\n          }, _this));\n          break;\n      }\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: Output\n  }, void 0, false);\n};\n\n_c = Marked;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Marked);\n\nvar _c;\n\n$RefreshReg$(_c, \"Marked\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRmlsZXMvQ29tcG9uZW50cy9NZXNzYWdlL01hcmtkb3duLnRzeD80YTYwIl0sIm5hbWVzIjpbIk1hcmtlZCIsInByb3BzIiwiVG9rZW5zIiwiUHJpc20iLCJNRCIsIk1hcmtkb3duIiwiT3V0cHV0IiwiZm9yRWFjaCIsIlRva2VuIiwiaSIsIkNvbnZlcnQiLCJjb250ZW50IiwiVGV4dCIsIlR5cGUiLCJsYW5ndWFnZSIsIlVybCIsIlBhcnQiLCJ0eXBlIiwidHJpbSIsInB1c2giLCJzdHlsZXMiLCJUaXRsZSIsIkhyZWYiLCJlbmNvZGVVUkkiLCJyZXBsYWNlIiwiZSIsInRlc3QiLCJEYXRhIiwiVHh0IiwiSGlnaGxpZ2h0ZWQiLCJobGpzIiwidmFsdWUiLCJfX2h0bWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBb0I7QUFDL0IsTUFBSUMsTUFBbUIsR0FBR0MsdURBQUEsQ0FDeEJGLEtBQUssQ0FBQ0csRUFEa0IsRUFFeEJDLCtEQUZ3QixDQUExQjtBQUlBLE1BQUlDLE1BQVcsR0FBRyxFQUFsQjtBQUNBSixRQUFNLENBQUNLLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQXdCQyxDQUF4QixFQUE4QjtBQUMzQyxRQUFJLENBQUNELEtBQUwsRUFBWTs7QUFDWixRQUFJRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFzQjtBQUFBLFVBQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFDbEMsVUFBSSxPQUFPQSxPQUFQLElBQWtCLFFBQXRCLEVBQWdDLE9BQU87QUFBRUMsWUFBSSxFQUFFRCxPQUFSO0FBQWlCRSxZQUFJLEVBQUU7QUFBdkIsT0FBUDtBQUNoQyxVQUFJRCxJQUFZLEdBQUcsRUFBbkI7QUFBQSxVQUF1Qk4sTUFBVyxHQUFHO0FBQUVRLGdC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O0FBQ0YsYUFBSyxTQUFMO0FBQ0V3QixpQkFBTyxDQUFDQyxHQUFSLENBQVl4QixPQUFPLENBQUNGLEtBQUQsQ0FBbkI7QUFDQUYsZ0JBQU0sQ0FBQ2EsSUFBUCxlQUFZO0FBQWMscUJBQVMsRUFBRUMsdUZBQXpCO0FBQUEsNEJBQTJDVixPQUFPLENBQUNGLEtBQUQsQ0FBUCxDQUFlSSxJQUExRDtBQUFBLGFBQVdILENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWjtBQUNBO0FBbEVKO0FBb0VEO0FBQ0YsR0ExRkQ7QUEyRkEsc0JBQVE7QUFBQSxjQUFHSDtBQUFILG1CQUFSO0FBQ0QsQ0FsR0Q7O0tBQUlOLE07QUFxR0osK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9GaWxlcy9Db21wb25lbnRzL01lc3NhZ2UvTWFya2Rvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9TdHlsZS9Db21wb25lbnRzL01hcmtkb3duLm1vZHVsZS5zY3NzJztcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi9TY3JpcHRzL01hcmtkb3duX1N0YW5kYXJkJztcbmltcG9ydCBQcmlzbSwgeyBUb2tlbiwgVG9rZW5TdHJlYW0gfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBobGpzIGZyb20gJy4uLy4uL1NjcmlwdHMvaGxqcyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4vUHJldmlldyc7XG4vLyBGdW5jdGlvblxudHlwZSBNeVByb3BzID0geyBNRDogc3RyaW5nIH07XG5sZXQgTWFya2VkID0gKHByb3BzOiBNeVByb3BzKSA9PiB7XG4gIGxldCBUb2tlbnM6IFRva2VuU3RyZWFtID0gUHJpc20udG9rZW5pemUoXG4gICAgcHJvcHMuTUQsIFxuICAgIE1hcmtkb3duXG4gICk7XG4gIGxldCBPdXRwdXQ6IGFueSA9IFtdO1xuICBUb2tlbnMuZm9yRWFjaCgoVG9rZW46IFRva2VuIHwgc3RyaW5nLCBpKSA9PiB7XG4gICAgaWYgKCFUb2tlbikgcmV0dXJuO1xuICAgIGxldCBDb252ZXJ0ID0gKHsgY29udGVudCB9OiBhbnkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PSAnc3RyaW5nJykgcmV0dXJuIHsgVGV4dDogY29udGVudCwgVHlwZTogJycgfTtcbiAgICAgIGxldCBUZXh0OiBzdHJpbmcgPSAnJywgT3V0cHV0OiBhbnkgPSB7IGxhbmd1YWdlOiAnJywgVHlwZTogJycsIFVybDogJycgfTtcbiAgICAgIGNvbnRlbnQuZm9yRWFjaCgoUGFydDogYW55KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgUGFydCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgIFRleHQgKz0gUGFydDtcbiAgICAgICAgfSBlbHNlIGlmIChQYXJ0LnR5cGUgPT0gJ2xhbmd1YWdlJykge1xuICAgICAgICAgIE91dHB1dFsnbGFuZ3VhZ2UnXSA9IFBhcnQuY29udGVudC50cmltKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoUGFydC50eXBlID09ICdUeXBlJykge1xuICAgICAgICAgIE91dHB1dFsnVHlwZSddID0gUGFydC5jb250ZW50O1xuICAgICAgICB9IGVsc2UgaWYgKFBhcnQudHlwZSA9PSAnVXJsJykge1xuICAgICAgICAgIE91dHB1dFsnVXJsJ10gPSBQYXJ0LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgVGV4dCwgT3V0cHV0IH07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgVG9rZW4gPT0gJ3N0cmluZycpIHtcbiAgICAgIE91dHB1dC5wdXNoKDxwIGtleT17aX0+e1Rva2VufTwvcD4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2goVG9rZW4udHlwZSkge1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgICBPdXRwdXQucHVzaCg8c3Ryb25nIGtleT17aX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9zdHJvbmc+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaXRhbGljJzpcbiAgICAgICAgICBPdXRwdXQucHVzaCg8ZW0ga2V5PXtpfT57Q29udmVydChUb2tlbikuVGV4dH08L2VtPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmlrZXRocm91Z2gnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxkZWwga2V5PXtpfT57Q29udmVydChUb2tlbikuVGV4dH08L2RlbD4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxpbnMga2V5PXtpfT57Q29udmVydChUb2tlbikuVGV4dH08L2lucz4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgICBPdXRwdXQucHVzaCg8Y29kZSBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvY29kZT4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdibG9ja3F1b3RlJzpcbiAgICAgICAgICBPdXRwdXQucHVzaCg8YmxvY2txdW90ZSBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrcW91dGV9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvYmxvY2txdW90ZT4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGxldCB7IFR5cGU6VGl0bGUsIFVybDpIcmVmIH0gPSBDb252ZXJ0KFRva2VuKS5PdXRwdXQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEhyZWYgPSBlbmNvZGVVUkkoSHJlZi5yZXBsYWNlKCdqYXZhc2NyaXB0OicsJycpKS5yZXBsYWNlKC8lMjUvZywgJyUnKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IEhyZWYgPSAnJzsgfVxuICAgICAgICAgIGlmIChIcmVmID09ICcnKSBPdXRwdXQucHVzaCg8cCBrZXk9e2l9PntUaXRsZX08L3A+KTtcbiAgICAgICAgICBlbHNlIE91dHB1dC5wdXNoKDxhIGtleT17aX0gaHJlZj17SHJlZn0+e1RpdGxlfTwvYT4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cmwtcmVmZXJlbmNlJzpcbiAgICAgICAgICBsZXQgeyBUeXBlLCBVcmwgfSA9IENvbnZlcnQoVG9rZW4pLk91dHB1dDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVXJsID0gZW5jb2RlVVJJKFVybC5yZXBsYWNlKCdqYXZhc2NyaXB0OicsJycpKS5yZXBsYWNlKC8lMjUvZywgJyUnKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IFVybCA9ICcnOyB9XG4gICAgICAgICAgaWYgKFVybCA9PSAnJykgT3V0cHV0LnB1c2goPHAga2V5PXtpfT57VHlwZX08L3A+KTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlIC9cXC4oZ2lmfGpwZT9nfHRpZmY/fHBuZ3x3ZWJwfGJtcCkkL2kudGVzdChVcmwpIHx8IFR5cGUgPT0gJ0ltYWdlJzpcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBPdXRwdXQucHVzaChcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIFVybD17VXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e1R5cGUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb2RlX2Jsb2NrJzpcbiAgICAgICAgICBsZXQgRGF0YSA9IENvbnZlcnQoVG9rZW4pLCBUeHQ6IHN0cmluZyA9IERhdGEuVGV4dC50cmltKCk7XG4gICAgICAgICAgbGV0IEhpZ2hsaWdodGVkID0gaGxqcy5nZXRMYW5ndWFnZShEYXRhLk91dHB1dC5sYW5ndWFnZSk/aGxqcy5oaWdobGlnaHQoVHh0LCB7IGxhbmd1YWdlOiBEYXRhLk91dHB1dC5sYW5ndWFnZSB9KS52YWx1ZTpUeHQ7XG4gICAgICAgICAgT3V0cHV0LnB1c2goXG4gICAgICAgICAgICA8cHJlIGtleT17aX0+PGNvZGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBIaWdobGlnaHRlZCB9fT48L2NvZGU+PC9wcmU+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaDEnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxoMSBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvaDE+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaDInOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxoMiBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvaDI+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaDMnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxoMyBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvaDM+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hhbm5lbCc6XG4gICAgICAgICAgY29uc29sZS5sb2coQ29udmVydChUb2tlbikpO1xuICAgICAgICAgIE91dHB1dC5wdXNoKDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbm5lbH0+I3tDb252ZXJ0KFRva2VuKS5UZXh0fTwvc3Bhbj4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuICg8PntPdXRwdXR9PC8+KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Files/Components/Message/Markdown.tsx\n");

/***/ })

});