(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[64709,60766,83824],{60766:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(r);if(!n)return null;var l,u=n[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(u))return a}(d):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(u))return a}(d);return l=t.valueCallback?t.valueCallback(s):s,{value:l=a.valueCallback?a.valueCallback(l):l,rest:e.slice(u.length)}}},t.exports=e.default},83824:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(t.matchPattern);if(!i)return null;var r=i[0],n=e.match(t.parsePattern);if(!n)return null;var l=t.valueCallback?t.valueCallback(n[0]):n[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:e.slice(r.length)}}},t.exports=e.default},64709:function(t,e,a){"use strict";var i=a(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a(60766)),n={ordinalNumber:(0,i(a(83824)).default)({matchPattern:/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|тр(ав)?|чэрв|ліп|жн|вер|кастр|ліст|сьнеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|тра(вень|ўня)|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|сьнеж(ань|ня))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^тр/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцьв|чаць|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацьв(ер|ярга)|пятніц[аы]|субот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};e.default=n,t.exports=e.default},47082:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=64709.chunk.0d4ac.js.map