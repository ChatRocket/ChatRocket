(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[99476,60766,83824],{60766:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(r);if(!n)return null;var l,u=n[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(u))return a}(d):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(u))return a}(d);return l=t.valueCallback?t.valueCallback(s):s,{value:l=a.valueCallback?a.valueCallback(l):l,rest:e.slice(u.length)}}},t.exports=e.default},83824:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(t.matchPattern);if(!i)return null;var r=i[0],n=e.match(t.parsePattern);if(!n)return null;var l=t.valueCallback?t.valueCallback(n[0]):n[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:e.slice(r.length)}}},t.exports=e.default},99476:function(t,e,a){"use strict";var i=a(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a(60766)),n={ordinalNumber:(0,i(a(83824)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,wide:/^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^س‌م[1234]/i,wide:/^سه‌ماهه [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[جژفمآاماسند]/i,abbreviated:/^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,wide:/^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^(ژ|ج)/i,/^ف/i,/^م/i,/^(آ|ا)/i,/^م/i,/^(ژ|ج)/i,/^(ج|ژ)/i,/^(آ|ا)/i,/^س/i,/^ا/i,/^ن/i,/^د/i],any:[/^ژا/i,/^ف/i,/^ما/i,/^آپ/i,/^(می|مه)/i,/^(ژوئن|جون)/i,/^(ژوئی|جول)/i,/^(اوت|آگ)/i,/^س/i,/^(اوک|اک)/i,/^ن/i,/^د/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[شیدسچپج]/i,short:/^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,abbreviated:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,wide:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ی/i,/^دو/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^(ی|1ش|یکشنبه)/i,/^(د|2ش|دوشنبه)/i,/^(س|3ش|سه‌شنبه)/i,/^(چ|4ش|چهارشنبه)/i,/^(پ|5ش|پنجشنبه)/i,/^(ج|جمعه)/i,/^(ش|شنبه)/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,abbreviated:/^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,wide:/^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(ق|ق.ظ.|قبل‌ازظهر)/i,pm:/^(ب|ب.ظ.|بعدازظهر)/i,midnight:/^(‌نیمه‌شب|ن)/i,noon:/^(ظ|ظهر)/i,morning:/(ص|صبح)/i,afternoon:/(ب|ب.ظ.|بعدازظهر)/i,evening:/(ع|عصر)/i,night:/(ش|شب)/i}},defaultParseWidth:"any"})};e.default=n,t.exports=e.default},47082:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=99476.chunk.44a04.js.map