"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[44159,60766,83824],{60766:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=e.match(r);if(!n)return null;var l,u=n[0],s=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(s)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(u))return t}(s):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(u))return t}(s);return l=a.valueCallback?a.valueCallback(c):c,{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(u.length)}}},a.exports=e.default},83824:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(r.length)}}},a.exports=e.default},44159:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(60766));function r(a){return a&&a.__esModule?a:{default:a}}var n={ordinalNumber:(0,r(t(83824)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|çar|per|cum|cts)/i,wide:/^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma/i,/cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);
//# sourceMappingURL=44159.chunk.d9308.js.map