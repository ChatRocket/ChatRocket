"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[20031,60766,83824],{60766:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=i.width,r=t&&a.matchPatterns[t]||a.matchPatterns[a.defaultMatchWidth],n=e.match(r);if(!n)return null;var u,l=n[0],o=t&&a.parsePatterns[t]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(o)?function(a,e){for(var i=0;i<a.length;i++)if(a[i].test(l))return i}(o):function(a,e){for(var i in a)if(a.hasOwnProperty(i)&&a[i].test(l))return i}(o);return u=a.valueCallback?a.valueCallback(d):d,{value:u=i.valueCallback?i.valueCallback(u):u,rest:e.slice(l.length)}}},a.exports=e.default},83824:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(a.matchPattern);if(!t)return null;var r=t[0],n=e.match(a.parsePattern);if(!n)return null;var u=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:u=i.valueCallback?i.valueCallback(u):u,rest:e.slice(r.length)}}},a.exports=e.default},20031:function(a,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(i(83824)),r=n(i(60766));function n(a){return a&&a.__esModule?a:{default:a}}var u={ordinalNumber:(0,t.default)({matchPattern:/^(\d+)(.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(k.a.|k.o.)/i,abbreviated:/^(k.a.|k.o.)/i,wide:/^(kristo aurretik|kristo ondoren)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^k.a./i,/^k.o./i],abbreviated:[/^(k.a.)/i,/^(k.o.)/i],wide:[/^(kristo aurretik)/i,/^(kristo ondoren)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]H/i,wide:/^[1234](.)? hiruhilekoa/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[uomaei]/i,abbreviated:/^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,wide:/^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^u/i,/^o/i,/^m/i,/^a/i,/^m/i,/^e/i,/^u/i,/^a/i,/^i/i,/^u/i,/^a/i,/^a/i],any:[/^urt/i,/^ots/i,/^mar/i,/^api/i,/^mai/i,/^eka/i,/^uzt/i,/^abu/i,/^ira/i,/^urr/i,/^aza/i,/^abe/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[iaol]/i,short:/^(ig|al|as|az|og|or|lr)/i,abbreviated:/^(iga|ast|ast|ast|ost|ost|lar)/i,wide:/^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^a/i,/^a/i,/^a/i,/^o/i,/^o/i,/^l/i],short:[/^ig/i,/^al/i,/^as/i,/^az/i,/^og/i,/^or/i,/^lr/i],abbreviated:[/^iga/i,/^ast/i,/^ast/i,/^ast/i,/^ost/i,/^ost/i,/^lar/i],wide:[/^igandea/i,/^astelehena/i,/^asteartea/i,/^asteazkena/i,/^osteguna/i,/^ostirala/i,/^larunbata/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,any:/^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a/i,pm:/^p/i,midnight:/^ge/i,noon:/^eg/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i},any:{am:/^a/i,pm:/^p/i,midnight:/^gauerdia/i,noon:/^eguerdia/i,morning:/goiz/i,afternoon:/arratsaldea/i,evening:/arratsaldea/i,night:/gau/i}},defaultParseWidth:"any"})};e.default=u,a.exports=e.default}}]);
//# sourceMappingURL=20031.chunk.7298f.js.map