"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[26957,60766,83824],{60766:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=e.match(r);if(!n)return null;var u,l=n[0],s=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(s)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(l))return t}(s):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(l))return t}(s);return u=a.valueCallback?a.valueCallback(d):d,{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(l.length)}}},a.exports=e.default},83824:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var u=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(r.length)}}},a.exports=e.default},26957:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(60766));function r(a){return a&&a.__esModule?a:{default:a}}var n={ordinalNumber:(0,r(t(83824)).default)({matchPattern:/^ke-(\d+)?/i,parsePattern:/petama|\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|m\.?)/i,wide:/^(sebelum masihi|masihi)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^S[1234]/i,wide:/Suku (pertama|kedua|ketiga|keempat)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/pertama|1/i,/kedua|2/i,/ketiga|3/i,/keempat|4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,wide:/^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^og/i,/^s/i,/^ok/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[aisrkj]/i,short:/^(ahd|isn|sel|rab|kha|jum|sab)/i,abbreviated:/^(ahd|isn|sel|rab|kha|jum|sab)/i,wide:/^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^a/i,/^i/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^a/i,/^i/i,/^se/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pa/i,afternoon:/tengah h/i,evening:/pe/i,night:/m/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);
//# sourceMappingURL=26957.chunk.fc9f8.js.map