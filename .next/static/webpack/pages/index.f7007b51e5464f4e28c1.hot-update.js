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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Style/Components/Markdown.module.scss */ \"./Files/Style/Components/Markdown.module.scss\");\n/* harmony import */ var _Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Scripts_Markdown_Standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Scripts/Markdown_Standard */ \"./Files/Scripts/Markdown_Standard.ts\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Scripts/hljs */ \"./Files/Scripts/hljs.ts\");\n/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Preview */ \"./Files/Components/Message/Preview.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/runner/NeoFox/Files/Components/Message/Markdown.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n // Function\n\nvar Marked = function Marked(props) {\n  var Tokens = prismjs__WEBPACK_IMPORTED_MODULE_3___default().tokenize(props.MD, _Scripts_Markdown_Standard__WEBPACK_IMPORTED_MODULE_2__.default);\n  var Output = [];\n  Tokens.forEach(function (Token, i) {\n    if (!Token) return;\n\n    var Convert = function Convert(_ref) {\n      var content = _ref.content;\n      if (typeof content == 'string') return {\n        Text: content,\n        Type: ''\n      };\n      var Text = '',\n          Output = {\n        language: '',\n        Type: '',\n        Url: ''\n      };\n      content.forEach(function (Part) {\n        if (typeof Part == 'string') {\n          Text += Part;\n        } else if (Part.type == 'language') {\n          Output['language'] = Part.content.trim();\n        } else if (Part.type == 'Type') {\n          Output['Type'] = Part.content;\n        } else if (Part.type == 'Url') {\n          Output['Url'] = Part.content;\n        }\n      });\n      return {\n        Text: Text,\n        Output: Output\n      };\n    };\n\n    if (typeof Token == 'string') {\n      Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: Token\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }, _this));\n    } else {\n      switch (Token.type) {\n        case 'bold':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'italic':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'strikethrough':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'underline':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ins\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'code':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'blockquote':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: (_Style_Components_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default().blockqoute),\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'url':\n          var _Convert$Output = Convert(Token).Output,\n              Title = _Convert$Output.Type,\n              Href = _Convert$Output.Url;\n\n          try {\n            Href = encodeURI(Href.replace('javascript:', '')).replace(/%25/g, '%');\n          } catch (e) {\n            Href = '';\n          }\n\n          if (Href == '') Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: Title\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 39\n          }, _this));else Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: Href,\n            children: Title\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 28\n          }, _this));\n          break;\n\n        case 'url-reference':\n          var _Convert$Output2 = Convert(Token).Output,\n              Type = _Convert$Output2.Type,\n              Url = _Convert$Output2.Url;\n\n          try {\n            Url = encodeURI(Url.replace('javascript:', '')).replace(/%25/g, '%');\n          } catch (e) {\n            Url = '';\n          }\n\n          if (Url == '') Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: Type\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 38\n          }, _this));else {\n            switch (true) {\n              case /\\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(Url) || Type == 'Image':\n              default:\n                Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Preview__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                  Url: Url,\n                  alt: Type || ''\n                }, i, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 19\n                }, _this));\n            }\n          }\n          break;\n\n        case 'code_block':\n          var Data = Convert(Token),\n              Txt = Data.Text.trim();\n          var Highlighted = _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__.default.getLanguage(Data.Output.language) ? _Scripts_hljs__WEBPACK_IMPORTED_MODULE_4__.default.highlight(Txt, {\n            language: Data.Output.language\n          }).value : Txt;\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n              dangerouslySetInnerHTML: {\n                __html: Highlighted\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 26\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this));\n          break;\n\n        case 'h1':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'h2':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'h3':\n          Output.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: Convert(Token).Text\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 23\n          }, _this));\n          break;\n\n        case 'channel':\n      }\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: Output\n  }, void 0, false);\n};\n\n_c = Marked;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Marked);\n\nvar _c;\n\n$RefreshReg$(_c, \"Marked\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRmlsZXMvQ29tcG9uZW50cy9NZXNzYWdlL01hcmtkb3duLnRzeD80YTYwIl0sIm5hbWVzIjpbIk1hcmtlZCIsInByb3BzIiwiVG9rZW5zIiwiUHJpc20iLCJNRCIsIk1hcmtkb3duIiwiT3V0cHV0IiwiZm9yRWFjaCIsIlRva2VuIiwiaSIsIkNvbnZlcnQiLCJjb250ZW50IiwiVGV4dCIsIlR5cGUiLCJsYW5ndWFnZSIsIlVybCIsIlBhcnQiLCJ0eXBlIiwidHJpbSIsInB1c2giLCJzdHlsZXMiLCJUaXRsZSIsIkhyZWYiLCJlbmNvZGVVUkkiLCJyZXBsYWNlIiwiZSIsInRlc3QiLCJEYXRhIiwiVHh0IiwiSGlnaGxpZ2h0ZWQiLCJobGpzIiwidmFsdWUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFvQjtBQUMvQixNQUFJQyxNQUFtQixHQUFHQyx1REFBQSxDQUN4QkYsS0FBSyxDQUFDRyxFQURrQixFQUV4QkMsK0RBRndCLENBQTFCO0FBSUEsTUFBSUMsTUFBVyxHQUFHLEVBQWxCO0FBQ0FKLFFBQU0sQ0FBQ0ssT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBd0JDLENBQXhCLEVBQThCO0FBQzNDLFFBQUksQ0FBQ0QsS0FBTCxFQUFZOztBQUNaLFFBQUlFLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXNCO0FBQUEsVUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtBQUNsQyxVQUFJLE9BQU9BLE9BQVAsSUFBa0IsUUFBdEIsRUFBZ0MsT0FBTztBQUFFQyxZQUFJLEVBQUVELE9BQVI7QUFBaUJFLFlBQUksRUFBRTtBQUF2QixPQUFQO0FBQ2hDLFVBQUlELElBQVksR0FBRyxFQUFuQjtBQUFBLFVBQXVCTixNQUFXLEdBQUc7QUFBRVEsZ0JBQVEsRUFBRSxFQUFaO0FB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QUEvREY7QUFrRUQ7QUFDRixHQXhGRDtBQXlGQSxzQkFBUTtBQUFBLGNBQUdIO0FBQUgsbUJBQVI7QUFDRCxDQWhHRDs7S0FBSU4sTTtBQW1HSiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL0ZpbGVzL0NvbXBvbmVudHMvTWVzc2FnZS9NYXJrZG93bi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uL1N0eWxlL0NvbXBvbmVudHMvTWFya2Rvd24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4uLy4uL1NjcmlwdHMvTWFya2Rvd25fU3RhbmRhcmQnO1xuaW1wb3J0IFByaXNtLCB7IFRva2VuLCBUb2tlblN0cmVhbSB9IGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IGhsanMgZnJvbSAnLi4vLi4vU2NyaXB0cy9obGpzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi9QcmV2aWV3Jztcbi8vIEZ1bmN0aW9uXG50eXBlIE15UHJvcHMgPSB7IE1EOiBzdHJpbmcgfTtcbmxldCBNYXJrZWQgPSAocHJvcHM6IE15UHJvcHMpID0+IHtcbiAgbGV0IFRva2VuczogVG9rZW5TdHJlYW0gPSBQcmlzbS50b2tlbml6ZShcbiAgICBwcm9wcy5NRCwgXG4gICAgTWFya2Rvd25cbiAgKTtcbiAgbGV0IE91dHB1dDogYW55ID0gW107XG4gIFRva2Vucy5mb3JFYWNoKChUb2tlbjogVG9rZW4gfCBzdHJpbmcsIGkpID0+IHtcbiAgICBpZiAoIVRva2VuKSByZXR1cm47XG4gICAgbGV0IENvbnZlcnQgPSAoeyBjb250ZW50IH06IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09ICdzdHJpbmcnKSByZXR1cm4geyBUZXh0OiBjb250ZW50LCBUeXBlOiAnJyB9O1xuICAgICAgbGV0IFRleHQ6IHN0cmluZyA9ICcnLCBPdXRwdXQ6IGFueSA9IHsgbGFuZ3VhZ2U6ICcnLCBUeXBlOiAnJywgVXJsOiAnJyB9O1xuICAgICAgY29udGVudC5mb3JFYWNoKChQYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBQYXJ0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgVGV4dCArPSBQYXJ0O1xuICAgICAgICB9IGVsc2UgaWYgKFBhcnQudHlwZSA9PSAnbGFuZ3VhZ2UnKSB7XG4gICAgICAgICAgT3V0cHV0WydsYW5ndWFnZSddID0gUGFydC5jb250ZW50LnRyaW0oKTtcbiAgICAgICAgfSBlbHNlIGlmIChQYXJ0LnR5cGUgPT0gJ1R5cGUnKSB7XG4gICAgICAgICAgT3V0cHV0WydUeXBlJ10gPSBQYXJ0LmNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoUGFydC50eXBlID09ICdVcmwnKSB7XG4gICAgICAgICAgT3V0cHV0WydVcmwnXSA9IFBhcnQuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBUZXh0LCBPdXRwdXQgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBUb2tlbiA9PSAnc3RyaW5nJykge1xuICAgICAgT3V0cHV0LnB1c2goPHAga2V5PXtpfT57VG9rZW59PC9wPik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaChUb2tlbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxzdHJvbmcga2V5PXtpfT57Q29udmVydChUb2tlbikuVGV4dH08L3N0cm9uZz4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpdGFsaWMnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxlbSBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvZW0+KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaWtldGhyb3VnaCc6XG4gICAgICAgICAgT3V0cHV0LnB1c2goPGRlbCBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvZGVsPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgICAgT3V0cHV0LnB1c2goPGlucyBrZXk9e2l9PntDb252ZXJ0KFRva2VuKS5UZXh0fTwvaW5zPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvZGUnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxjb2RlIGtleT17aX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9jb2RlPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jsb2NrcXVvdGUnOlxuICAgICAgICAgIE91dHB1dC5wdXNoKDxibG9ja3F1b3RlIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2txb3V0ZX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9ibG9ja3F1b3RlPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgbGV0IHsgVHlwZTpUaXRsZSwgVXJsOkhyZWYgfSA9IENvbnZlcnQoVG9rZW4pLk91dHB1dDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgSHJlZiA9IGVuY29kZVVSSShIcmVmLnJlcGxhY2UoJ2phdmFzY3JpcHQ6JywnJykpLnJlcGxhY2UoLyUyNS9nLCAnJScpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgSHJlZiA9ICcnOyB9XG4gICAgICAgICAgaWYgKEhyZWYgPT0gJycpIE91dHB1dC5wdXNoKDxwIGtleT17aX0+e1RpdGxlfTwvcD4pO1xuICAgICAgICAgIGVsc2UgT3V0cHV0LnB1c2goPGEga2V5PXtpfSBocmVmPXtIcmVmfT57VGl0bGV9PC9hPik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VybC1yZWZlcmVuY2UnOlxuICAgICAgICAgIGxldCB7IFR5cGUsIFVybCB9ID0gQ29udmVydChUb2tlbikuT3V0cHV0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBVcmwgPSBlbmNvZGVVUkkoVXJsLnJlcGxhY2UoJ2phdmFzY3JpcHQ6JywnJykpLnJlcGxhY2UoLyUyNS9nLCAnJScpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgVXJsID0gJyc7IH1cbiAgICAgICAgICBpZiAoVXJsID09ICcnKSBPdXRwdXQucHVzaCg8cCBrZXk9e2l9PntUeXBlfTwvcD4pO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgL1xcLihnaWZ8anBlP2d8dGlmZj98cG5nfHdlYnB8Ym1wKSQvaS50ZXN0KFVybCkgfHwgVHlwZSA9PSAnSW1hZ2UnOlxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIE91dHB1dC5wdXNoKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgVXJsPXtVcmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17VHlwZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvZGVfYmxvY2snOlxuICAgICAgICAgIGxldCBEYXRhID0gQ29udmVydChUb2tlbiksIFR4dDogc3RyaW5nID0gRGF0YS5UZXh0LnRyaW0oKTtcbiAgICAgICAgICBsZXQgSGlnaGxpZ2h0ZWQgPSBobGpzLmdldExhbmd1YWdlKERhdGEuT3V0cHV0Lmxhbmd1YWdlKT9obGpzLmhpZ2hsaWdodChUeHQsIHsgbGFuZ3VhZ2U6IERhdGEuT3V0cHV0Lmxhbmd1YWdlIH0pLnZhbHVlOlR4dDtcbiAgICAgICAgICBPdXRwdXQucHVzaChcbiAgICAgICAgICAgIDxwcmUga2V5PXtpfT48Y29kZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEhpZ2hsaWdodGVkIH19PjwvY29kZT48L3ByZT5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoMSc6XG4gICAgICAgICAgT3V0cHV0LnB1c2goPGgxIGtleT17aX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9oMT4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoMic6XG4gICAgICAgICAgT3V0cHV0LnB1c2goPGgyIGtleT17aX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9oMj4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoMyc6XG4gICAgICAgICAgT3V0cHV0LnB1c2goPGgzIGtleT17aX0+e0NvbnZlcnQoVG9rZW4pLlRleHR9PC9oMz4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGFubmVsJzpcbiAgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiAoPD57T3V0cHV0fTwvPik7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFya2VkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Files/Components/Message/Markdown.tsx\n");

/***/ })

});