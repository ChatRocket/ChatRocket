"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[53264,60766,83824],{60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(r);if(!n)return null;var s,l=n[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(l))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(l))return a}(u);return s=e.valueCallback?e.valueCallback(d):d,{value:s=a.valueCallback?a.valueCallback(s):s,rest:t.slice(l.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var r=i[0],n=t.match(e.parsePattern);if(!n)return null;var s=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:t.slice(r.length)}}},e.exports=t.default},53264:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(83824)),r=n(a(60766));function n(e){return e&&e.__esModule?e:{default:e}}var s={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},defaultParseWidth:"any"})};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=53264.chunk.875e6.js.map