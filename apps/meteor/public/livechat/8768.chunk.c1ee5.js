(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[8768,60766,83824],{60766:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],n=a.match(i);if(!n)return null;var l,u=n[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,a){for(var e=0;e<t.length;e++)if(t[e].test(u))return e}(d):function(t,a){for(var e in t)if(t.hasOwnProperty(e)&&t[e].test(u))return e}(d);return l=t.valueCallback?t.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:a.slice(u.length)}}},t.exports=a.default},83824:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.match(t.matchPattern);if(!r)return null;var i=r[0],n=a.match(t.parsePattern);if(!n)return null;var l=t.valueCallback?t.valueCallback(n[0]):n[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:a.slice(i.length)}}},t.exports=a.default},8768:function(t,a,e){"use strict";var r=e(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(e(83824)),n=r(e(60766)),l={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},defaultMatchWidth:"wide",parsePatterns:{any:[/قبل/,/بعد/]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[أيفمسند]/,abbreviated:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^يناير/i,/^فبراير/i,/^مارس/i,/^أبريل/i,/^مايو/i,/^يونيو/i,/^يوليو/i,/^أغسطس/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,any:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ص/,pm:/^م/,midnight:/منتصف الليل/,noon:/الظهر/,afternoon:/بعد الظهر/,morning:/في الصباح/,evening:/في المساء/,night:/في الليل/}},defaultParseWidth:"any"})};a.default=l,t.exports=a.default},47082:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=8768.chunk.c1ee5.js.map