(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[93431],{96409:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return o},t.setDefaultOptions=function(e){o=e};var o={}},94836:function(e,t,o){"use strict";var r=o(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){(0,n.default)(2,arguments);var r=(0,u.default)(e,o),a=(0,u.default)(t,o);return r.getTime()===a.getTime()};var n=r(o(78236)),u=r(o(15753));e.exports=t.default},78236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,o){"use strict";var r=o(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o,r,s,f,i,d,c,p;(0,u.default)(1,arguments);var v=(0,l.getDefaultOptions)(),y=(0,a.default)(null!==(o=null!==(r=null!==(s=null!==(f=null==t?void 0:t.weekStartsOn)&&void 0!==f?f:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:v.weekStartsOn)&&void 0!==r?r:null===(c=v.locale)||void 0===c||null===(p=c.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==o?o:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var b=(0,n.default)(e),_=b.getUTCDay(),g=(_<y?7:0)+_-y;return b.setUTCDate(b.getUTCDate()-g),b.setUTCHours(0,0,0,0),b};var n=r(o(79966)),u=r(o(78236)),a=r(o(73373)),l=o(96409);e.exports=t.default},73373:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},93431:function(e,t,o){"use strict";var r=o(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o(94836));function u(e,t,o){var r="eeee p";return(0,n.default)(e,t,o)?r:e.getTime()>t.getTime()?"'下个'"+r:"'上个'"+r}var a={lastWeek:u,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:u,other:"PP p"};t.default=function(e,t,o,r){var n=a[e];return"function"==typeof n?n(t,o,r):n},e.exports=t.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},2322:function(e){function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},79966:function(e,t,o){"use strict";var r=o(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,u.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,n.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var n=r(o(2322)),u=r(o(78236));e.exports=t.default}}]);
//# sourceMappingURL=93431.chunk.cdee2.js.map