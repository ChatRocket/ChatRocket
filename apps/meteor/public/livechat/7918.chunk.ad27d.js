(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[7918,96312,34498,60766,83824,87236,95829,45623,10679,29369],{96312:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},34498:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var i;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):n;i=e.formattingValues[r]||e.formattingValues[n]}else{var o=e.defaultWidth,d=null!=t&&t.width?String(t.width):e.defaultWidth;i=e.values[d]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},60766:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],r=a.match(n);if(!r)return null;var o,d=r[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(d))return t}(u):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(d))return t}(u);return o=e.valueCallback?e.valueCallback(s):s,{value:o=t.valueCallback?t.valueCallback(o):o,rest:a.slice(d.length)}}},e.exports=a.default},83824:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var n=i[0],r=a.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:a.slice(n.length)}}},e.exports=a.default},87236:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};a.default=function(e,a,i){var n,r=t[e];return n="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"daqui a "+n:"há "+n:n},e.exports=a.default},95829:function(e,a,t){"use strict";var i=t(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(96312)),r={date:(0,n.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},45623:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:function(e){var a=e.getUTCDay();return"'"+(0===a||6===a?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"};a.default=function(e,a,i,n){var r=t[e];return"function"==typeof r?r(a):r},e.exports=a.default},10679:function(e,a,t){"use strict";var i=t(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(34498)),r={ordinalNumber:function(e,a){return Number(e)+"º"},era:(0,n.default)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},29369:function(e,a,t){"use strict";var i=t(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(60766)),r={ordinalNumber:(0,i(t(83824)).default)({matchPattern:/^(\d+)(º|ª)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},7918:function(e,a,t){"use strict";var i=t(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(87236)),r=i(t(95829)),o=i(t(45623)),d=i(t(10679)),u=i(t(29369)),s={code:"pt",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=s,e.exports=a.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=7918.chunk.ad27d.js.map