(window.webpackJsonp=window.webpackJsonp||[]).push([[246,372],{"../../node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildFormatLongFn(args){return function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}},module.exports=exports.default},"../../node_modules/date-fns/locale/kk/_lib/formatLong/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../../node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));var _default={date:(0,_index.default)({formats:{full:"EEEE, do MMMM y 'ж.'",long:"do MMMM y 'ж.'",medium:"d MMM y 'ж.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,_index.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,_index.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};exports.default=_default,module.exports=exports.default}}]);