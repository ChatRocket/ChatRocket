"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[19159],{6021:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,r.default)(2,arguments);var u=(0,a.default)(e,n),o=(0,a.default)(t,n);return u.getTime()===o.getTime()};var r=u(n(26648)),a=u(n(47805));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},26648:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},47805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(1,arguments);var n=t||{},o=n.locale,l=o&&o.options&&o.options.weekStartsOn,s=null==l?0:(0,u.default)(l),f=null==n.weekStartsOn?s:(0,u.default)(n.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var i=(0,r.default)(e),d=i.getUTCDay(),c=(d<f?7:0)+d-f;return i.setUTCDate(i.getUTCDate()-c),i.setUTCHours(0,0,0,0),i};var r=o(n(28572)),a=o(n(26648)),u=o(n(30779));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},30779:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},19159:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var a=o[e];return"function"==typeof a?a(t,n,r):a};var r,a=(r=n(6021))&&r.__esModule?r:{default:r},u=["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"],o={lastWeek:function(e,t,n){return(0,a.default)(e,t,n)?"eeee 'plkst.' p":"'Pagājušā "+u[e.getUTCDay()]+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'Šodien plkst.' p",tomorrow:"'Rīt plkst.' p",nextWeek:function(e,t,n){return(0,a.default)(e,t,n)?"eeee 'plkst.' p":"'Nākamajā "+u[e.getUTCDay()]+" plkst.' p"},other:"P"};e.exports=t.default},28572:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,a=(r=n(26648))&&r.__esModule?r:{default:r};e.exports=t.default}}]);
//# sourceMappingURL=19159.chunk.f0513.js.map