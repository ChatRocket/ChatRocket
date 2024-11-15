"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[32040,96312,34498,60766,83824,57613,58920,80234,55218,43478],{96312:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},34498:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,l=i.width?String(i.width):r;n=a.formattingValues[l]||a.formattingValues[r]}else{var o=a.defaultWidth,u=i.width?String(i.width):a.defaultWidth;n=a.values[u]||a.values[o]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},60766:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var l,o=r[0],u=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(o))return t}(u):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(o))return t}(u);return l=a.valueCallback?a.valueCallback(d):d,{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(o.length)}}},a.exports=e.default},83824:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var l=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(i.length)}}},a.exports=e.default},57613:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,n){n=n||{};var i,r=a.match(/years/i);return i="string"==typeof t[a]?t[a]:1===e?t[a].one:2===e&&r?t[a].two:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"f'"+i:i+" ilu":i};var t={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar siegħa",other:"madwar {{count}} siegħat"},xHours:{one:"siegħa",other:"{{count}} siegħat"},xDays:{one:"ġurnata",other:"{{count}} ġranet"},aboutXWeeks:{one:"madwar ġimgħa",other:"madwar {{count}} ġimgħat"},xWeeks:{one:"ġimgħa",other:"{{count}} ġimgħat"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kważi sena",two:"kważi sentejn",other:"kważi {{count}} snin"}};a.exports=e.default},58920:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(96312))&&n.__esModule?n:{default:n},r={date:(0,i.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},80234:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,n,i){return t[a]};var t={lastWeek:"eeee 'li għadda' 'fil-'p",yesterday:"'Il-bieraħ fil-'p",today:"'Illum fil-'p",tomorrow:"'Għada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"};a.exports=e.default},55218:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(34498))&&n.__esModule?n:{default:n},r={ordinalNumber:function(a){return Number(a)+"º"},era:(0,i.default)({values:{narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","Ġ","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],wide:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Ħ","T","T","E","Ħ","Ġ","S"],short:["Ħa","Tn","Tl","Er","Ħa","Ġi","Si"],abbreviated:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],wide:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},43478:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t(83824)),i=r(t(60766));function r(a){return a&&a.__esModule?a:{default:a}}var l={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(q|b)/i,/^(w|c)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,wide:/^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^ġ/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^ġ/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[ħteġs]/i,short:/^(ħa|tn|tl|er|ħa|ġi|si)/i,abbreviated:/^(ħad|tne|tli|erb|ħam|ġim|sib)/i,wide:/^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ħ/i,/^t/i,/^t/i,/^e/i,/^ħ/i,/^ġ/i,/^s/i],any:[/^(il-)?ħad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?ġi/i,/^(is-)?si/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/għodwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filgħaxija/i,night:/lejl/i}},defaultParseWidth:"any"})};e.default=l,a.exports=e.default},32040:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(t(57613)),i=u(t(58920)),r=u(t(80234)),l=u(t(55218)),o=u(t(43478));function u(a){return a&&a.__esModule?a:{default:a}}var d={code:"mt",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:l.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=32040.chunk.c0df9.js.map