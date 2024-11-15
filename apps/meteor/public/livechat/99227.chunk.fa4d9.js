"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[99227,15780,99283,12022,45212,69916,65928,58974,35028,33389],{15780:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},99283:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,o=t||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=o.width?String(o.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,u=o.width?String(o.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},12022:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=a.match(o);if(!r)return null;var i,d=r[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(d))return t}(u):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(d))return t}(u);return i=e.valueCallback?e.valueCallback(s):s,{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(d.length)}}},e.exports=a.default},45212:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var o=n[0],r=a.match(e.parsePattern);if(!r)return null;var i=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(o.length)}}},e.exports=a.default},69916:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n){var o;return n=n||{},o="string"==typeof t[e]?t[e]:1===a?t[e].one:t[e].other.replace("{{count}}",a),n.addSuffix?n.comparison>0?"en "+o:"hai "+o:o};var t={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"máis dun ano",other:"máis de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}};e.exports=a.default},65928:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=(n=t(15780))&&n.__esModule?n:{default:n},r={date:(0,o.default)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} 'ás' {{time}}",long:"{{date}} 'ás' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},58974:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,o,r){return 1!==a.getUTCHours()?n[e]:t[e]};var t={lastWeek:"'o' eeee 'pasado á' LT",yesterday:"'onte á' p",today:"'hoxe á' p",tomorrow:"'mañá á' p",nextWeek:"eeee 'á' p",other:"P"},n={lastWeek:"'o' eeee 'pasado ás' p",yesterday:"'onte ás' p",today:"'hoxe ás' p",tomorrow:"'mañá ás' p",nextWeek:"eeee 'ás' p",other:"P"};e.exports=a.default},35028:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=(n=t(99283))&&n.__esModule?n:{default:n},r={ordinalNumber:function(e){return Number(e)+"º"},era:(0,o.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},33389:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(45212)),o=r(t(12022));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[uú]n)/i,/^(despois de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañ[aá]/i,afternoon:/tarde/i,evening:/tardiña/i,night:/noite/i}},defaultParseWidth:"any"})};a.default=i,e.exports=a.default},99227:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(69916)),o=u(t(65928)),r=u(t(58974)),i=u(t(35028)),d=u(t(33389));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"gl",formatDistance:n.default,formatLong:o.default,formatRelative:r.default,localize:i.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=99227.chunk.fa4d9.js.map