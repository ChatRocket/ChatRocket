"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[93750,15780,99283,12022,45212,4708,8756,40781,10183,45664],{15780:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},99283:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},12022:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var u,o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(o))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(o))return a}(d);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(o.length)}}},e.exports=t.default},45212:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},4708:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?r+"дан кейин":r+" олдин":r};var a={lessThanXSeconds:{one:"1 сониядан кам",other:"{{count}} сониядан кам"},xSeconds:{one:"1 сония",other:"{{count}} сония"},halfAMinute:"ярим дақиқа",lessThanXMinutes:{one:"1 дақиқадан кам",other:"{{count}} дақиқадан кам"},xMinutes:{one:"1 дақиқа",other:"{{count}} дақиқа"},aboutXHours:{one:"тахминан 1 соат",other:"тахминан {{count}} соат"},xHours:{one:"1 соат",other:"{{count}} соат"},xDays:{one:"1 кун",other:"{{count}} кун"},aboutXWeeks:{one:"тахминан 1 хафта",other:"тахминан {{count}} хафта"},xWeeks:{one:"1 хафта",other:"{{count}} хафта"},aboutXMonths:{one:"тахминан 1 ой",other:"тахминан {{count}} ой"},xMonths:{one:"1 ой",other:"{{count}} ой"},aboutXYears:{one:"тахминан 1 йил",other:"тахминан {{count}} йил"},xYears:{one:"1 йил",other:"{{count}} йил"},overXYears:{one:"1 йилдан кўп",other:"{{count}} йилдан кўп"},almostXYears:{one:"деярли 1 йил",other:"деярли {{count}} йил"}};e.exports=t.default},8756:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(15780))&&n.__esModule?n:{default:n},i={date:(0,r.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=i,e.exports=t.default},40781:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){return a[e]};var a={lastWeek:"'ўтган' eeee p 'да'",yesterday:"'кеча' p 'да'",today:"'бугун' p 'да'",tomorrow:"'эртага' p 'да'",nextWeek:"eeee p 'да'",other:"P"};e.exports=t.default},10183:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(99283))&&n.__esModule?n:{default:n},i={ordinalNumber:function(e,t){return Number(e)},era:(0,r.default)({values:{narrow:["М.А","М"],abbreviated:["М.А","М"],wide:["Милоддан Аввалги","Милодий"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-чор.","2-чор.","3-чор.","4-чор."],wide:["1-чорак","2-чорак","3-чорак","4-чорак"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],wide:["январ","феврал","март","апрел","май","июн","июл","август","сентабр","октабр","ноябр","декабр"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["Я","Д","С","Ч","П","Ж","Ш"],short:["як","ду","се","чо","па","жу","ша"],abbreviated:["якш","душ","сеш","чор","пай","жум","шан"],wide:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultWidth:"any",formattingValues:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultFormattingWidth:"any"})};t.default=i,e.exports=t.default},45664:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(45212)),r=i(a(12022));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(чи)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(м\.а|м\.)/i,abbreviated:/^(м\.а|м\.)/i,wide:/^(милоддан аввал|милоддан кейин)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^м/i,/^а/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-чор./i,wide:/^[1234]-чорак/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[яфмамииасонд]/i,abbreviated:/^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,wide:/^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^д/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[ядсчпжш]/i,short:/^(як|ду|се|чо|па|жу|ша)/i,abbreviated:/^(якш|душ|сеш|чор|пай|жум|шан)/i,wide:/^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^д/i,/^с/i,/^ч/i,/^п/i,/^ж/i,/^ш/i],any:[/^як/i,/^ду/i,/^се/i,/^чор/i,/^пай/i,/^жу/i,/^шан/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^п\.о\./i,pm:/^п\.к\./i,midnight:/^ярим тун/i,noon:/^пешиндан кейин/i,morning:/эрталаб/i,afternoon:/пешиндан кейин/i,evening:/кечаси/i,night:/тун/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},93750:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(4708)),r=d(a(8756)),i=d(a(40781)),u=d(a(10183)),o=d(a(45664));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"uz-Cyrl",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=93750.chunk.e9df8.js.map