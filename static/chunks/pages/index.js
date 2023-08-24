/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\n\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"./node_modules/toggle-selection/index.js\");\n\nvar clipboardToIE11Formatting = {\n  \"text/plain\": \"Text\",\n  \"text/html\": \"Url\",\n  \"default\": \"Text\"\n}\n\nvar defaultMessage = \"Copy to clipboard: #{key}, Enter\";\n\nfunction format(message) {\n  var copyKey = (/mac os x/i.test(navigator.userAgent) ? \"⌘\" : \"Ctrl\") + \"+C\";\n  return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\n\nfunction copy(text, options) {\n  var debug,\n    message,\n    reselectPrevious,\n    range,\n    selection,\n    mark,\n    success = false;\n  if (!options) {\n    options = {};\n  }\n  debug = options.debug || false;\n  try {\n    reselectPrevious = deselectCurrent();\n\n    range = document.createRange();\n    selection = document.getSelection();\n\n    mark = document.createElement(\"span\");\n    mark.textContent = text;\n    // avoid screen readers from reading out loud the text\n    mark.ariaHidden = \"true\"\n    // reset user styles for span element\n    mark.style.all = \"unset\";\n    // prevents scrolling to the end of the page\n    mark.style.position = \"fixed\";\n    mark.style.top = 0;\n    mark.style.clip = \"rect(0, 0, 0, 0)\";\n    // used to preserve spaces and line breaks\n    mark.style.whiteSpace = \"pre\";\n    // do not inherit user-select (it may be `none`)\n    mark.style.webkitUserSelect = \"text\";\n    mark.style.MozUserSelect = \"text\";\n    mark.style.msUserSelect = \"text\";\n    mark.style.userSelect = \"text\";\n    mark.addEventListener(\"copy\", function(e) {\n      e.stopPropagation();\n      if (options.format) {\n        e.preventDefault();\n        if (typeof e.clipboardData === \"undefined\") { // IE 11\n          debug && console.warn(\"unable to use e.clipboardData\");\n          debug && console.warn(\"trying IE specific stuff\");\n          window.clipboardData.clearData();\n          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting[\"default\"]\n          window.clipboardData.setData(format, text);\n        } else { // all other browsers\n          e.clipboardData.clearData();\n          e.clipboardData.setData(options.format, text);\n        }\n      }\n      if (options.onCopy) {\n        e.preventDefault();\n        options.onCopy(e.clipboardData);\n      }\n    });\n\n    document.body.appendChild(mark);\n\n    range.selectNodeContents(mark);\n    selection.addRange(range);\n\n    var successful = document.execCommand(\"copy\");\n    if (!successful) {\n      throw new Error(\"copy command was unsuccessful\");\n    }\n    success = true;\n  } catch (err) {\n    debug && console.error(\"unable to copy using execCommand: \", err);\n    debug && console.warn(\"trying IE specific stuff\");\n    try {\n      window.clipboardData.setData(options.format || \"text\", text);\n      options.onCopy && options.onCopy(window.clipboardData);\n      success = true;\n    } catch (err) {\n      debug && console.error(\"unable to copy using clipboardData: \", err);\n      debug && console.error(\"falling back to prompt\");\n      message = format(\"message\" in options ? options.message : defaultMessage);\n      window.prompt(message, text);\n    }\n  } finally {\n    if (selection) {\n      if (typeof selection.removeRange == \"function\") {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n    }\n\n    if (mark) {\n      document.body.removeChild(mark);\n    }\n    reselectPrevious();\n  }\n\n  return success;\n}\n\nmodule.exports = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsa0VBQWtCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxJQUFJOztBQUUvQztBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanM/YzRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRlc2VsZWN0Q3VycmVudCA9IHJlcXVpcmUoXCJ0b2dnbGUtc2VsZWN0aW9uXCIpO1xuXG52YXIgY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZyA9IHtcbiAgXCJ0ZXh0L3BsYWluXCI6IFwiVGV4dFwiLFxuICBcInRleHQvaHRtbFwiOiBcIlVybFwiLFxuICBcImRlZmF1bHRcIjogXCJUZXh0XCJcbn1cblxudmFyIGRlZmF1bHRNZXNzYWdlID0gXCJDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlclwiO1xuXG5mdW5jdGlvbiBmb3JtYXQobWVzc2FnZSkge1xuICB2YXIgY29weUtleSA9ICgvbWFjIG9zIHgvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCLijJhcIiA6IFwiQ3RybFwiKSArIFwiK0NcIjtcbiAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvI3tcXHMqa2V5XFxzKn0vZywgY29weUtleSk7XG59XG5cbmZ1bmN0aW9uIGNvcHkodGV4dCwgb3B0aW9ucykge1xuICB2YXIgZGVidWcsXG4gICAgbWVzc2FnZSxcbiAgICByZXNlbGVjdFByZXZpb3VzLFxuICAgIHJhbmdlLFxuICAgIHNlbGVjdGlvbixcbiAgICBtYXJrLFxuICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWFyay50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgLy8gYXZvaWQgc2NyZWVuIHJlYWRlcnMgZnJvbSByZWFkaW5nIG91dCBsb3VkIHRoZSB0ZXh0XG4gICAgbWFyay5hcmlhSGlkZGVuID0gXCJ0cnVlXCJcbiAgICAvLyByZXNldCB1c2VyIHN0eWxlcyBmb3Igc3BhbiBlbGVtZW50XG4gICAgbWFyay5zdHlsZS5hbGwgPSBcInVuc2V0XCI7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIG1hcmsuc3R5bGUudG9wID0gMDtcbiAgICBtYXJrLnN0eWxlLmNsaXAgPSBcInJlY3QoMCwgMCwgMCwgMClcIjtcbiAgICAvLyB1c2VkIHRvIHByZXNlcnZlIHNwYWNlcyBhbmQgbGluZSBicmVha3NcbiAgICBtYXJrLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZVwiO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUuTW96VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUubXNVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmNsaXBib2FyZERhdGEgPT09IFwidW5kZWZpbmVkXCIpIHsgLy8gSUUgMTFcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ1bmFibGUgdG8gdXNlIGUuY2xpcGJvYXJkRGF0YVwiKTtcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgdmFyIGZvcm1hdCA9IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbb3B0aW9ucy5mb3JtYXRdIHx8IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbXCJkZWZhdWx0XCJdXG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShmb3JtYXQsIHRleHQpO1xuICAgICAgICB9IGVsc2UgeyAvLyBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5vbkNvcHkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcHRpb25zLm9uQ29weShlLmNsaXBib2FyZERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhtYXJrKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3B5IGNvbW1hbmQgd2FzIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogXCIsIGVycik7XG4gICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0IHx8IFwidGV4dFwiLCB0ZXh0KTtcbiAgICAgIG9wdGlvbnMub25Db3B5ICYmIG9wdGlvbnMub25Db3B5KHdpbmRvdy5jbGlwYm9hcmREYXRhKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6IFwiLCBlcnIpO1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcImZhbGxpbmcgYmFjayB0byBwcm9tcHRcIik7XG4gICAgICBtZXNzYWdlID0gZm9ybWF0KFwibWVzc2FnZVwiIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFyaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXJrKTtcbiAgICB9XG4gICAgcmVzZWxlY3RQcmV2aW91cygpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/copy-to-clipboard/index.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cyoussef%5Cyouthumb%5Cpages%5Cindex.js&page=%2F!":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cyoussef%5Cyouthumb%5Cpages%5Cindex.js&page=%2F! ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUN5b3Vzc2VmJTVDeW91dGh1bWIlNUNwYWdlcyU1Q2luZGV4LmpzJnBhZ2U9JTJGISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NWRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cyoussef%5Cyouthumb%5Cpages%5Cindex.js&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [videoURL, setVideoURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [thumbnailOptions, setThumbnailOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getYouTubeThumbnail = (url)=>{\n        let regExp = /.*(?:youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=)([^#\\&\\?]*).*/;\n        let match = url.match(regExp);\n        if (match && match[1].length === 11) {\n            const videoURL = match[1];\n            const thumbnailBaseUrl = \"http://img.youtube.com/vi/\";\n            const options = [\n                {\n                    resolution: \"HD (1280x720)\",\n                    code: \"maxresdefault\"\n                },\n                {\n                    resolution: \"SD (640x480)\",\n                    code: \"sddefault\"\n                },\n                {\n                    resolution: \"Normal (480x360)\",\n                    code: \"hqdefault\"\n                },\n                {\n                    resolution: \"Medium (320x180)\",\n                    code: \"mqdefault\"\n                },\n                {\n                    resolution: \"Low (120x90)\",\n                    code: \"default\"\n                }\n            ];\n            const thumbnailOptions = options.map((option)=>({\n                    resolution: option.resolution,\n                    url: \"\".concat(thumbnailBaseUrl).concat(videoURL, \"/\").concat(option.code, \".jpg\")\n                }));\n            setThumbnailOptions(thumbnailOptions);\n            setVideoURL(\"\");\n        } else {\n            setThumbnailOptions([]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"text-center mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-2\",\n                        children: \"Youtube Thumbnail Downloader\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600\",\n                        children: \"Download high-quality thumbnails from YouTube videos.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full md:w-1/2 px-4 py-2 border rounded\",\n                        placeholder: \"Enter YouTube URL\",\n                        value: videoURL,\n                        onChange: (e)=>setVideoURL(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-blue mt-2\",\n                        onClick: ()=>getYouTubeThumbnail(videoURL),\n                        children: \"Download Thumbnails\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            thumbnailOptions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Thumbnail Options\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 md:grid-cols-2 lg:grid-cols-3\",\n                        children: thumbnailOptions.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"thumbnail-option\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: option.url,\n                                        alt: \"Thumbnail \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-blue mt-2\",\n                                        onClick: ()=>copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(option.url),\n                                        children: \"Copy Image URL\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\youssef\\\\youthumb\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"IYcAOf5qV++4aCHfr5VA8bJLU/k=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDSTtBQUVyQyxNQUFNRSxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLGtCQUFrQkMsb0JBQW9CLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0QsTUFBTU8sc0JBQXNCLENBQUNDO1FBQzNCLElBQUlDLFNBQVM7UUFDYixJQUFJQyxRQUFRRixJQUFJRSxLQUFLLENBQUNEO1FBRXRCLElBQUlDLFNBQVNBLEtBQUssQ0FBQyxFQUFFLENBQUNDLE1BQU0sS0FBSyxJQUFJO1lBQ25DLE1BQU1SLFdBQVdPLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE1BQU1FLG1CQUFtQjtZQUV6QixNQUFNQyxVQUFVO2dCQUNkO29CQUFFQyxZQUFZO29CQUFpQkMsTUFBTTtnQkFBZ0I7Z0JBQ3JEO29CQUFFRCxZQUFZO29CQUFnQkMsTUFBTTtnQkFBWTtnQkFDaEQ7b0JBQUVELFlBQVk7b0JBQW9CQyxNQUFNO2dCQUFZO2dCQUNwRDtvQkFBRUQsWUFBWTtvQkFBb0JDLE1BQU07Z0JBQVk7Z0JBQ3BEO29CQUFFRCxZQUFZO29CQUFnQkMsTUFBTTtnQkFBVTthQUMvQztZQUVELE1BQU1WLG1CQUFtQlEsUUFBUUcsR0FBRyxDQUFDLENBQUNDLFNBQVk7b0JBQ2hESCxZQUFZRyxPQUFPSCxVQUFVO29CQUM3Qk4sS0FBSyxHQUFzQkwsT0FBbkJTLGtCQUErQkssT0FBWmQsVUFBUyxLQUFlLE9BQVpjLE9BQU9GLElBQUksRUFBQztnQkFDckQ7WUFFQVQsb0JBQW9CRDtZQUNwQkQsWUFBWTtRQUNkLE9BQU87WUFDTEUsb0JBQW9CLEVBQUU7UUFDeEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTBCOzs7Ozs7a0NBR3hDLDhEQUFDRzt3QkFBRUgsV0FBVTtrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFJL0IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQ0NDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZNLGFBQVk7d0JBQ1pDLE9BQU92Qjt3QkFDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFlBQVl3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFN0MsOERBQUNJO3dCQUNDWCxXQUFVO3dCQUNWWSxTQUFTLElBQU14QixvQkFBb0JKO2tDQUNwQzs7Ozs7Ozs7Ozs7O1lBSUZFLGlCQUFpQk0sTUFBTSxHQUFHLG1CQUN6Qiw4REFBQ087Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYTt3QkFBR2IsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDM0MsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaZCxpQkFBaUJXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRZ0Isc0JBQzdCLDhEQUFDZjtnQ0FBZ0JDLFdBQVU7O2tEQUN6Qiw4REFBQ2U7d0NBQUlDLEtBQUtsQixPQUFPVCxHQUFHO3dDQUFFNEIsS0FBSyxhQUF1QixPQUFWSCxRQUFROzs7Ozs7a0RBQ2hELDhEQUFDSDt3Q0FDQ1gsV0FBVTt3Q0FDVlksU0FBUyxJQUFNOUIsd0RBQUlBLENBQUNnQixPQUFPVCxHQUFHO2tEQUMvQjs7Ozs7OzsrQkFMT3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhCO0dBN0VNL0I7S0FBQUE7QUErRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29weSBmcm9tIFwiY29weS10by1jbGlwYm9hcmRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2aWRlb1VSTCwgc2V0VmlkZW9VUkxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RodW1ibmFpbE9wdGlvbnMsIHNldFRodW1ibmFpbE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRZb3VUdWJlVGh1bWJuYWlsID0gKHVybCkgPT4ge1xyXG4gICAgbGV0IHJlZ0V4cCA9IC8uKig/OnlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9KShbXiNcXCZcXD9dKikuKi87XHJcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcclxuXHJcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0ubGVuZ3RoID09PSAxMSkge1xyXG4gICAgICBjb25zdCB2aWRlb1VSTCA9IG1hdGNoWzFdO1xyXG4gICAgICBjb25zdCB0aHVtYm5haWxCYXNlVXJsID0gXCJodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiO1xyXG5cclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgICAgICB7IHJlc29sdXRpb246IFwiSEQgKDEyODB4NzIwKVwiLCBjb2RlOiBcIm1heHJlc2RlZmF1bHRcIiB9LFxyXG4gICAgICAgIHsgcmVzb2x1dGlvbjogXCJTRCAoNjQweDQ4MClcIiwgY29kZTogXCJzZGRlZmF1bHRcIiB9LFxyXG4gICAgICAgIHsgcmVzb2x1dGlvbjogXCJOb3JtYWwgKDQ4MHgzNjApXCIsIGNvZGU6IFwiaHFkZWZhdWx0XCIgfSxcclxuICAgICAgICB7IHJlc29sdXRpb246IFwiTWVkaXVtICgzMjB4MTgwKVwiLCBjb2RlOiBcIm1xZGVmYXVsdFwiIH0sXHJcbiAgICAgICAgeyByZXNvbHV0aW9uOiBcIkxvdyAoMTIweDkwKVwiLCBjb2RlOiBcImRlZmF1bHRcIiB9LFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsT3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XHJcbiAgICAgICAgcmVzb2x1dGlvbjogb3B0aW9uLnJlc29sdXRpb24sXHJcbiAgICAgICAgdXJsOiBgJHt0aHVtYm5haWxCYXNlVXJsfSR7dmlkZW9VUkx9LyR7b3B0aW9uLmNvZGV9LmpwZ2AsXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICAgIHNldFRodW1ibmFpbE9wdGlvbnModGh1bWJuYWlsT3B0aW9ucyk7XHJcbiAgICAgIHNldFZpZGVvVVJMKFwiXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGh1bWJuYWlsT3B0aW9ucyhbXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgWW91dHViZSBUaHVtYm5haWwgRG93bmxvYWRlclxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgRG93bmxvYWQgaGlnaC1xdWFsaXR5IHRodW1ibmFpbHMgZnJvbSBZb3VUdWJlIHZpZGVvcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91VHViZSBVUkxcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZpZGVvVVJMfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWaWRlb1VSTChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYmx1ZSBtdC0yXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldFlvdVR1YmVUaHVtYm5haWwodmlkZW9VUkwpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERvd25sb2FkIFRodW1ibmFpbHNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt0aHVtYm5haWxPcHRpb25zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+VGh1bWJuYWlsIE9wdGlvbnM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgIHt0aHVtYm5haWxPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGh1bWJuYWlsLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e29wdGlvbi51cmx9IGFsdD17YFRodW1ibmFpbCAke2luZGV4ICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYmx1ZSBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weShvcHRpb24udXJsKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29weSBJbWFnZSBVUkxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb3B5IiwiSW5kZXgiLCJ2aWRlb1VSTCIsInNldFZpZGVvVVJMIiwidGh1bWJuYWlsT3B0aW9ucyIsInNldFRodW1ibmFpbE9wdGlvbnMiLCJnZXRZb3VUdWJlVGh1bWJuYWlsIiwidXJsIiwicmVnRXhwIiwibWF0Y2giLCJsZW5ndGgiLCJ0aHVtYm5haWxCYXNlVXJsIiwib3B0aW9ucyIsInJlc29sdXRpb24iLCJjb2RlIiwibWFwIiwib3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = function () {\n  var selection = document.getSelection();\n  if (!selection.rangeCount) {\n    return function () {};\n  }\n  var active = document.activeElement;\n\n  var ranges = [];\n  for (var i = 0; i < selection.rangeCount; i++) {\n    ranges.push(selection.getRangeAt(i));\n  }\n\n  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML\n    case 'INPUT':\n    case 'TEXTAREA':\n      active.blur();\n      break;\n\n    default:\n      active = null;\n      break;\n  }\n\n  selection.removeAllRanges();\n  return function () {\n    selection.type === 'Caret' &&\n    selection.removeAllRanges();\n\n    if (!selection.rangeCount) {\n      ranges.forEach(function(range) {\n        selection.addRange(range);\n      });\n    }\n\n    active &&\n    active.focus();\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdG9nZ2xlLXNlbGVjdGlvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RvZ2dsZS1zZWxlY3Rpb24vaW5kZXguanM/NWJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG4gIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gIH1cbiAgdmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgdmFyIHJhbmdlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGlvbi5yYW5nZUNvdW50OyBpKyspIHtcbiAgICByYW5nZXMucHVzaChzZWxlY3Rpb24uZ2V0UmFuZ2VBdChpKSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGl2ZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHsgLy8gLnRvVXBwZXJDYXNlIGhhbmRsZXMgWEhUTUxcbiAgICBjYXNlICdJTlBVVCc6XG4gICAgY2FzZSAnVEVYVEFSRUEnOlxuICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGFjdGl2ZSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3Rpb24udHlwZSA9PT0gJ0NhcmV0JyAmJlxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHtcbiAgICAgIHJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RpdmUgJiZcbiAgICBhY3RpdmUuZm9jdXMoKTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/toggle-selection/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cyoussef%5Cyouthumb%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);