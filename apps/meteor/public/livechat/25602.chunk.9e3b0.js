"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[25602,15780,99283,12022,45212,13940,17695,94253,17654,22971],{15780:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},99283:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},12022:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var o,u=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(u))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(u))return a}(d);return o=e.valueCallback?e.valueCallback(l):l,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(u.length)}}},e.exports=t.default},45212:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(r.length)}}},e.exports=t.default},13940:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?r:r+" بولدى":r};var a={lessThanXSeconds:{one:"بىر سىكۇنت ئىچىدە",other:"سىكۇنت ئىچىدە {{count}}"},xSeconds:{one:"بىر سىكۇنت",other:"سىكۇنت {{count}}"},halfAMinute:"يىرىم مىنۇت",lessThanXMinutes:{one:"بىر مىنۇت ئىچىدە",other:"مىنۇت ئىچىدە {{count}}"},xMinutes:{one:"بىر مىنۇت",other:"مىنۇت {{count}}"},aboutXHours:{one:"تەخمىنەن بىر سائەت",other:"سائەت {{count}} تەخمىنەن"},xHours:{one:"بىر سائەت",other:"سائەت {{count}}"},xDays:{one:"بىر كۈن",other:"كۈن {{count}}"},aboutXWeeks:{one:"تەخمىنەن بىرھەپتە",other:"ھەپتە {{count}} تەخمىنەن"},xWeeks:{one:"بىرھەپتە",other:"ھەپتە {{count}}"},aboutXMonths:{one:"تەخمىنەن بىر ئاي",other:"ئاي {{count}} تەخمىنەن"},xMonths:{one:"بىر ئاي",other:"ئاي {{count}}"},aboutXYears:{one:"تەخمىنەن بىر يىل",other:"يىل {{count}} تەخمىنەن"},xYears:{one:"بىر يىل",other:"يىل {{count}}"},overXYears:{one:"بىر يىلدىن ئارتۇق",other:"يىلدىن ئارتۇق {{count}}"},almostXYears:{one:"ئاساسەن بىر يىل",other:"يىل {{count}} ئاساسەن"}};e.exports=t.default},17695:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(15780))&&n.__esModule?n:{default:n},i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'دە' {{time}}",long:"{{date}} 'دە' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},94253:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){return a[e]};var a={lastWeek:"'ئ‍ۆتكەن' eeee 'دە' p",yesterday:"'تۈنۈگۈن دە' p",today:"'بۈگۈن دە' p",tomorrow:"'ئەتە دە' p",nextWeek:"eeee 'دە' p",other:"P"};e.exports=t.default},17654:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(99283))&&n.__esModule?n:{default:n},i={ordinalNumber:function(e,t){return String(e)},era:(0,r.default)({values:{narrow:["ب","ك"],abbreviated:["ب","ك"],wide:["مىيلادىدىن بۇرۇن","مىيلادىدىن كىيىن"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["بىرىنجى چارەك","ئىككىنجى چارەك","ئۈچىنجى چارەك","تۆتىنجى چارەك"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["ي","ف","م","ا","م","ى","ى","ا","س","ۆ","ن","د"],abbreviated:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"],wide:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["ي","د","س","چ","پ","ج","ش"],short:["ي","د","س","چ","پ","ج","ش"],abbreviated:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],wide:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},22971:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(45212)),r=i(a(12022));function i(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ب|ك)/i,wide:/^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^بۇرۇن/i,/^كىيىن/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^چ[1234]/i,wide:/^چارەك [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[يفمئامئ‍ئاسۆند]/i,abbreviated:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,wide:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^ا/i,/^م/i,/^ى‍/i,/^ى‍/i,/^ا‍/i,/^س/i,/^ۆ/i,/^ن/i,/^د/i],any:[/^يان/i,/^فېۋ/i,/^مار/i,/^ئاپ/i,/^ماي/i,/^ئىيۇن/i,/^ئىيول/i,/^ئاۋ/i,/^سىن/i,/^ئۆك/i,/^نوي/i,/^دىك/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[دسچپجشي]/i,short:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,abbreviated:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,wide:/^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,any:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ئە/i,pm:/^چ/i,midnight:/^ك/i,noon:/^چ/i,morning:/ئەتىگەن/i,afternoon:/چۈشتىن كىيىن/i,evening:/ئاخشىم/i,night:/كىچە/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},25602:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(13940)),r=d(a(17695)),i=d(a(94253)),o=d(a(17654)),u=d(a(22971));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ug",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=25602.chunk.9e3b0.js.map