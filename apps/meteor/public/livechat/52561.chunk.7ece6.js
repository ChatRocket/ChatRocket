"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[52561,12022,45212],{12022:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,i=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=e.match(i);if(!n)return null;var o,l=n[0],u=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(l))return t}(u):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(l))return t}(u);return o=a.valueCallback?a.valueCallback(d):d,{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(l.length)}}},a.exports=e.default},45212:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var i=r[0],n=e.match(a.parsePattern);if(!n)return null;var o=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(i.length)}}},a.exports=e.default},52561:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t(12022));function i(a){return a&&a.__esModule?a:{default:a}}var n={ordinalNumber:(0,i(t(45212)).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [šs]tvr[ťt]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[áa]j/i,/^j[úu]n/i,/^j[úu]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[npusšp]/i,short:/^(ne|po|ut|st|št|pi|so)/i,abbreviated:/^(ne|po|ut|st|št|pi|so)/i,wide:/^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^š/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(št|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[áa]no/i,afternoon:/^pop/i,evening:/^ve[čc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);
//# sourceMappingURL=52561.chunk.7ece6.js.map