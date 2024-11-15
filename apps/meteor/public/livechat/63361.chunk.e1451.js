"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[63361,96312,34498,60766,83824,91979,46342,44740,54556,6460],{96312:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},34498:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):d;n=e.formattingValues[i]||e.formattingValues[d]}else{var u=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},60766:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],d=a.match(r);if(!d)return null;var i,u=d[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(u))return t}(o):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(u))return t}(o);return i=e.valueCallback?e.valueCallback(l):l,{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(u.length)}}},e.exports=a.default},83824:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],d=a.match(e.parsePattern);if(!d)return null;var i=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(r.length)}}},e.exports=a.default},91979:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};a.default=function(e,a){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=t[e];return n="string"==typeof d?d:1===a?d.one:d.other.replace("{{count}}",String(a)),r.addSuffix?r.comparison&&r.comparison>0?"oor "+n:n+" gelede":n},e.exports=a.default},46342:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t(96312))&&n.__esModule?n:{default:n},d={date:(0,r.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=d,e.exports=a.default},44740:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"};a.default=function(e){return t[e]},e.exports=a.default},54556:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t(34498))&&n.__esModule?n:{default:n},d={ordinalNumber:function(e){var a=Number(e),t=a%100;if(t<20)switch(t){case 1:case 8:return a+"ste";default:return a+"de"}return a+"ste"},era:(0,r.default)({values:{narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},defaultFormattingWidth:"wide"})};a.default=d,e.exports=a.default},6460:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t(83824)),r=d(t(60766));function d(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(ste|de)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return Number(e)+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},defaultParseWidth:"any"})};a.default=i,e.exports=a.default},63361:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(91979)),r=o(t(46342)),d=o(t(44740)),i=o(t(54556)),u=o(t(6460));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"af",formatDistance:n.default,formatLong:r.default,formatRelative:d.default,localize:i.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};a.default=l,e.exports=a.default}}]);
//# sourceMappingURL=63361.chunk.e1451.js.map