(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[2940,60766,83824],{60766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(r);if(!n)return null;var o,u=n[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(u))return a}(l):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(u))return a}(l);return o=e.valueCallback?e.valueCallback(d):d,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(u.length)}}},e.exports=t.default},83824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var r=i[0],n=t.match(e.parsePattern);if(!n)return null;var o=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(r.length)}}},e.exports=t.default},2940:function(e,t,a){"use strict";var i=a(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(60766)),n={ordinalNumber:(0,i(a(83824)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{abbreviated:/^(pr\. n\. št\.|po n\. št\.)/i,wide:/^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|na[sš]em)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[čc]et\.?/i,wide:/^[1234]\. [čc]etrtletje/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"wide"}),day:(0,r.default)({matchPatterns:{narrow:/^[nptsčc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[cč]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[cč]/i,/^pe/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},defaultParseWidth:"any"})};t.default=n,e.exports=t.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=2940.chunk.9d8c8.js.map