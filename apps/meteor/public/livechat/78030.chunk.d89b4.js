"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[78030,96312,34498,60766,83824,44420,53589,93431,12599,68345],{94836:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,n.default)(2,arguments);var i=(0,r.default)(e,a),u=(0,r.default)(t,a);return i.getTime()===u.getTime()};var n=i(a(78236)),r=i(a(15753));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},78236:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(1,arguments);var a=t||{},u=a.locale,o=u&&u.options&&u.options.weekStartsOn,d=null==o?0:(0,i.default)(o),l=null==a.weekStartsOn?d:(0,i.default)(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=(0,n.default)(e),s=f.getUTCDay(),c=(s<l?7:0)+s-l;return f.setUTCDate(f.getUTCDate()-c),f.setUTCHours(0,0,0,0),f};var n=u(a(79966)),r=u(a(78236)),i=u(a(73373));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},73373:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},96312:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var u,o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(o))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(o))return a}(d);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(o.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},44420:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?r+"内":r+"前":r};var a={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}};e.exports=t.default},53589:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(96312))&&n.__esModule?n:{default:n},i={date:(0,r.default)({formats:{full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},93431:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var r=u[e];return"function"==typeof r?r(t,a,n,"eeee p"):r};var n,r=(n=a(94836))&&n.__esModule?n:{default:n};function i(e,t,a,n){return(0,r.default)(e,t,a)?n:e.getTime()>t.getTime()?"'下个'"+n:"'上个'"+n}var u={lastWeek:i,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:i,other:"PP p"};e.exports=t.default},12599:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(34498))&&n.__esModule?n:{default:n},i={ordinalNumber:function(e,t){var a=Number(e);switch(String((t||{}).unit)){case"date":return a.toString()+"日";case"hour":return a.toString()+"时";case"minute":return a.toString()+"分";case"second":return a.toString()+"秒";default:return"第 "+a.toString()}},era:(0,r.default)({values:{narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},defaultWidth:"wide",formattingValues:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},68345:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(83824)),r=i(a(60766));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n.default)({matchPattern:/^(第\s*)?\d+(日|时|分|秒)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(前)/i,/^(公元)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},78030:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(44420)),r=d(a(53589)),i=d(a(93431)),u=d(a(12599)),o=d(a(68345));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"zh-CN",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},79966:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var n,r=(n=a(78236))&&n.__esModule?n:{default:n};e.exports=t.default}}]);
//# sourceMappingURL=78030.chunk.d89b4.js.map