"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[58462],{94836:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var o=(0,r.default)(e,n),u=(0,r.default)(t,n);return o.getTime()===u.getTime()};var a=o(n(78236)),r=o(n(15753));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},78236:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(1,arguments);var n=t||{},u=n.locale,l=u&&u.options&&u.options.weekStartsOn,f=null==l?0:(0,o.default)(l),s=null==n.weekStartsOn?f:(0,o.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var i=(0,a.default)(e),d=i.getUTCDay(),c=(d<s?7:0)+d-s;return i.setUTCDate(i.getUTCDate()-c),i.setUTCHours(0,0,0,0),i};var a=u(n(79966)),r=u(n(78236)),o=u(n(73373));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},73373:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},58462:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(94836))&&a.__esModule?a:{default:a},o=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function u(e){return"'"+o[e]+" alle' p"}var l={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?u(a):function(e){return 0===e?"'domenica scorsa alle' p":"'"+o[e]+" scorso alle' p"}(a)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return(0,r.default)(e,t,n)?u(a):function(e){return 0===e?"'domenica prossima alle' p":"'"+o[e]+" prossimo alle' p"}(a)},other:"P"};t.default=function(e,t,n,a){var r=l[e];return"function"==typeof r?r(t,n,a):r},e.exports=t.default},79966:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var a,r=(a=n(78236))&&a.__esModule?a:{default:a};e.exports=t.default}}]);
//# sourceMappingURL=58462.chunk.c8c9d.js.map