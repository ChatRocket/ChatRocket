(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[59628],{96409:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return r},t.setDefaultOptions=function(e){r=e};var r={}},94836:function(e,t,r){"use strict";var n=r(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){(0,o.default)(2,arguments);var n=(0,u.default)(e,r),a=(0,u.default)(t,r);return n.getTime()===a.getTime()};var o=n(r(78236)),u=n(r(15753));e.exports=t.default},78236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,r){"use strict";var n=r(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r,n,l,f,c,i,d,p;(0,u.default)(1,arguments);var v=(0,s.getDefaultOptions)(),y=(0,a.default)(null!==(r=null!==(n=null!==(l=null!==(f=null==t?void 0:t.weekStartsOn)&&void 0!==f?f:null==t||null===(c=t.locale)||void 0===c||null===(i=c.options)||void 0===i?void 0:i.weekStartsOn)&&void 0!==l?l:v.weekStartsOn)&&void 0!==n?n:null===(d=v.locale)||void 0===d||null===(p=d.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==r?r:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var b=(0,o.default)(e),_=b.getUTCDay(),g=(_<y?7:0)+_-y;return b.setUTCDate(b.getUTCDate()-g),b.setUTCHours(0,0,0,0),b};var o=n(r(79966)),u=n(r(78236)),a=n(r(73373)),s=r(96409);e.exports=t.default},73373:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},59628:function(e,t,r){"use strict";var n=r(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(79966)),u=n(r(94836)),a=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function s(e){var t=a[e];return 2===e?"'във "+t+" в' p":"'в "+t+" в' p"}var l={lastWeek:function(e,t,r){var n=(0,o.default)(e),l=n.getUTCDay();return(0,u.default)(n,t,r)?s(l):function(e){var t=a[e];switch(e){case 0:case 3:case 6:return"'миналата "+t+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+t+" в' p"}}(l)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function(e,t,r){var n=(0,o.default)(e),l=n.getUTCDay();return(0,u.default)(n,t,r)?s(l):function(e){var t=a[e];switch(e){case 0:case 3:case 6:return"'следващата "+t+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+t+" в' p"}}(l)},other:"P"};t.default=function(e,t,r,n){var o=l[e];return"function"==typeof o?o(t,r,n):o},e.exports=t.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},2322:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},79966:function(e,t,r){"use strict";var n=r(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,u.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,o.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var o=n(r(2322)),u=n(r(78236));e.exports=t.default}}]);
//# sourceMappingURL=59628.chunk.d39e0.js.map