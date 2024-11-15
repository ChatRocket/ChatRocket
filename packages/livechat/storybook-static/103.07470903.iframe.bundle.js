(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"../../node_modules/date-fns/_lib/isSameUTCWeek/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isSameUTCWeek(dirtyDateLeft,dirtyDateRight,options){(0,_index.default)(2,arguments);var dateLeftStartOfWeek=(0,_index2.default)(dirtyDateLeft,options),dateRightStartOfWeek=(0,_index2.default)(dirtyDateRight,options);return dateLeftStartOfWeek.getTime()===dateRightStartOfWeek.getTime()};var _index=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/_lib/requiredArgs/index.js")),_index2=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/_lib/startOfUTCWeek/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"../../node_modules/date-fns/_lib/requiredArgs/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function requiredArgs(required,args){if(args.length<required)throw new TypeError(required+" argument"+(required>1?"s":"")+" required, but only "+args.length+" present")},module.exports=exports.default},"../../node_modules/date-fns/_lib/startOfUTCWeek/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function startOfUTCWeek(dirtyDate,dirtyOptions){(0,_index2.default)(1,arguments);var options=dirtyOptions||{},locale=options.locale,localeWeekStartsOn=locale&&locale.options&&locale.options.weekStartsOn,defaultWeekStartsOn=null==localeWeekStartsOn?0:(0,_index3.default)(localeWeekStartsOn),weekStartsOn=null==options.weekStartsOn?defaultWeekStartsOn:(0,_index3.default)(options.weekStartsOn);if(!(weekStartsOn>=0&&weekStartsOn<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var date=(0,_index.default)(dirtyDate),day=date.getUTCDay(),diff=(day<weekStartsOn?7:0)+day-weekStartsOn;return date.setUTCDate(date.getUTCDate()-diff),date.setUTCHours(0,0,0,0),date};var _index=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/toDate/index.js")),_index2=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/_lib/requiredArgs/index.js")),_index3=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/_lib/toInteger/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"../../node_modules/date-fns/_lib/toInteger/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function toInteger(dirtyNumber){if(null===dirtyNumber||!0===dirtyNumber||!1===dirtyNumber)return NaN;var number=Number(dirtyNumber);if(isNaN(number))return number;return number<0?Math.ceil(number):Math.floor(number)},module.exports=exports.default},"../../node_modules/date-fns/locale/bg/_lib/formatRelative/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/toDate/index.js")),_index2=_interopRequireDefault(__webpack_require__("../../node_modules/date-fns/_lib/isSameUTCWeek/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var weekdays=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function thisWeek(day){var weekday=weekdays[day];return 2===day?"'във "+weekday+" в' p":"'в "+weekday+" в' p"}var formatRelativeLocale={lastWeek:function lastWeekFormatToken(dirtyDate,baseDate,options){var date=(0,_index.default)(dirtyDate),day=date.getUTCDay();return(0,_index2.default)(date,baseDate,options)?thisWeek(day):function lastWeek(day){var weekday=weekdays[day];switch(day){case 0:case 3:case 6:return"'миналата "+weekday+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+weekday+" в' p"}}(day)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function nextWeekFormatToken(dirtyDate,baseDate,options){var date=(0,_index.default)(dirtyDate),day=date.getUTCDay();return(0,_index2.default)(date,baseDate,options)?thisWeek(day):function nextWeek(day){var weekday=weekdays[day];switch(day){case 0:case 3:case 6:return"'следващата "+weekday+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+weekday+" в' p"}}(day)},other:"P"},_default=function formatRelative(token,date,baseDate,options){var format=formatRelativeLocale[token];return"function"==typeof format?format(date,baseDate,options):format};exports.default=_default,module.exports=exports.default},"../../node_modules/date-fns/toDate/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function toDate(argument){(0,_index.default)(1,arguments);var argStr=Object.prototype.toString.call(argument);return argument instanceof Date||"object"==typeof argument&&"[object Date]"===argStr?new Date(argument.getTime()):"number"==typeof argument||"[object Number]"===argStr?new Date(argument):("string"!=typeof argument&&"[object String]"!==argStr||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../../node_modules/date-fns/_lib/requiredArgs/index.js"));module.exports=exports.default}}]);