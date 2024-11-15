"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[5682,96312,34498,60766,83824,77064,19881,51747,10187,24853],{94836:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,r.default)(2,arguments);var u=(0,n.default)(e,a),o=(0,n.default)(t,a);return u.getTime()===o.getTime()};var r=u(a(78236)),n=u(a(15753));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},78236:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,n.default)(1,arguments);var a=t||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,l=null==i?0:(0,u.default)(i),d=null==a.weekStartsOn?l:(0,u.default)(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=(0,r.default)(e),s=f.getUTCDay(),c=(s<d?7:0)+s-d;return f.setUTCDate(f.getUTCDate()-c),f.setUTCHours(0,0,0,0),f};var r=o(a(79966)),n=o(a(78236)),u=o(a(73373));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},73373:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},96312:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):u;r=e.formattingValues[o]||e.formattingValues[u]}else{var i=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=t.match(n);if(!u)return null;var o,i=u[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(i))return a}(l):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(i))return a}(l);return o=e.valueCallback?e.valueCallback(d):d,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(i.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],u=t.match(e.parsePattern);if(!u)return null;var o=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(n.length)}}},e.exports=t.default},77064:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n;return r=r||{},n="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"за "+n:"пред "+n:n};var a={lessThanXSeconds:{one:"помалку од секунда",other:"помалку од {{count}} секунди"},xSeconds:{one:"1 секунда",other:"{{count}} секунди"},halfAMinute:"половина минута",lessThanXMinutes:{one:"помалку од минута",other:"помалку од {{count}} минути"},xMinutes:{one:"1 минута",other:"{{count}} минути"},aboutXHours:{one:"околу 1 час",other:"околу {{count}} часа"},xHours:{one:"1 час",other:"{{count}} часа"},xDays:{one:"1 ден",other:"{{count}} дена"},aboutXWeeks:{one:"околу 1 недела",other:"околу {{count}} месеци"},xWeeks:{one:"1 недела",other:"{{count}} недели"},aboutXMonths:{one:"околу 1 месец",other:"околу {{count}} недели"},xMonths:{one:"1 месец",other:"{{count}} месеци"},aboutXYears:{one:"околу 1 година",other:"околу {{count}} години"},xYears:{one:"1 година",other:"{{count}} години"},overXYears:{one:"повеќе од 1 година",other:"повеќе од {{count}} години"},almostXYears:{one:"безмалку 1 година",other:"безмалку {{count}} години"}};e.exports=t.default},19881:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(96312))&&r.__esModule?r:{default:r},u={date:(0,n.default)({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},51747:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){var n=i[e];return"function"==typeof n?n(t,a,r):n};var r,n=(r=a(94836))&&r.__esModule?r:{default:r},u=["недела","понеделник","вторник","среда","четврток","петок","сабота"];function o(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'ова "+t+" вo' p";case 1:case 2:case 4:case 5:return"'овој "+t+" вo' p"}}var i={lastWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?o(r):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'минатата "+t+" во' p";case 1:case 2:case 4:case 5:return"'минатиот "+t+" во' p"}}(r)},yesterday:"'вчера во' p",today:"'денес во' p",tomorrow:"'утре во' p",nextWeek:function(e,t,a){var r=e.getUTCDay();return(0,n.default)(e,t,a)?o(r):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'следната "+t+" вo' p";case 1:case 2:case 4:case 5:return"'следниот "+t+" вo' p"}}(r)},other:"P"};e.exports=t.default},10187:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(34498))&&r.__esModule?r:{default:r},u={ordinalNumber:function(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-ви";case 2:return t+"-ри";case 7:case 8:return t+"-ми"}return t+"-ти"},era:(0,n.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},defaultWidth:"wide"})};t.default=u,e.exports=t.default},24853:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(60766));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n(a(83824)).default)({matchPattern:/^(\d+)(-?[врмт][и])?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(пред нашата ера|нашата ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^п/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?и?)? кв.?/i,wide:/^[1234](-?[врт]?и?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{abbreviated:/^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,wide:/^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ја/i,/^Ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(не|по|вт|ср|че|пе|са)/i,abbreviated:/^(нед|пон|вто|сре|чет|пет|саб)/i,wide:/^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[аб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/претпладне/i,pm:/попладне/i,midnight:/полноќ/i,noon:/напладне/i,morning:/наутро/i,afternoon:/попладне/i,evening:/навечер/i,night:/ноќе/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},5682:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(77064)),n=l(a(19881)),u=l(a(51747)),o=l(a(10187)),i=l(a(24853));function l(e){return e&&e.__esModule?e:{default:e}}var d={code:"mk",formatDistance:r.default,formatLong:n.default,formatRelative:u.default,localize:o.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=d,e.exports=t.default},79966:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,n=(r=a(78236))&&r.__esModule?r:{default:r};e.exports=t.default}}]);
//# sourceMappingURL=5682.chunk.d7e5a.js.map