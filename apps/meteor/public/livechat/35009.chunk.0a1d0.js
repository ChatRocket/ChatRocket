(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[35009,96312,34498,60766,83824,25963,76518,78724,69628,2940],{96312:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.width?String(e.width):t.defaultWidth;return t.formats[o]||t.formats[t.defaultWidth]}},t.exports=e.default},34498:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,o){var n;if("formatting"===(null!=o&&o.context?String(o.context):"standalone")&&t.formattingValues){var u=t.defaultFormattingWidth||t.defaultWidth,a=null!=o&&o.width?String(o.width):u;n=t.formattingValues[a]||t.formattingValues[u]}else{var r=t.defaultWidth,i=null!=o&&o.width?String(o.width):t.defaultWidth;n=t.values[i]||t.values[r]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},60766:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.width,u=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],a=e.match(u);if(!a)return null;var r,i=a[0],l=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(l)?function(t,e){for(var o=0;o<t.length;o++)if(t[o].test(i))return o}(l):function(t,e){for(var o in t)if(t.hasOwnProperty(o)&&t[o].test(i))return o}(l);return r=t.valueCallback?t.valueCallback(c):c,{value:r=o.valueCallback?o.valueCallback(r):r,rest:e.slice(i.length)}}},t.exports=e.default},83824:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var u=n[0],a=e.match(t.parsePattern);if(!a)return null;var r=t.valueCallback?t.valueCallback(a[0]):a[0];return{value:r=o.valueCallback?o.valueCallback(r):r,rest:e.slice(u.length)}}},t.exports=e.default},25963:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={lessThanXSeconds:{present:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},past:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},future:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"}},xSeconds:{present:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},past:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},future:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"}},halfAMinute:"pol minute",lessThanXMinutes:{present:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},past:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},future:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"}},xMinutes:{present:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},past:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},future:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"}},aboutXHours:{present:{one:"približno {{count}} ura",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"},past:{one:"približno {{count}} uro",two:"približno {{count}} urama",few:"približno {{count}} urami",other:"približno {{count}} urami"},future:{one:"približno {{count}} uro",two:"približno {{count}} uri",few:"približno {{count}} ure",other:"približno {{count}} ur"}},xHours:{present:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},past:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},future:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"}},xDays:{present:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},past:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},future:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"}},aboutXWeeks:{one:"približno {{count}} teden",two:"približno {{count}} tedna",few:"približno {{count}} tedne",other:"približno {{count}} tednov"},xWeeks:{one:"{{count}} teden",two:"{{count}} tedna",few:"{{count}} tedne",other:"{{count}} tednov"},aboutXMonths:{present:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"},past:{one:"približno {{count}} mesecem",two:"približno {{count}} mesecema",few:"približno {{count}} meseci",other:"približno {{count}} meseci"},future:{one:"približno {{count}} mesec",two:"približno {{count}} meseca",few:"približno {{count}} mesece",other:"približno {{count}} mesecev"}},xMonths:{present:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},past:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},future:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"}},aboutXYears:{present:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"},past:{one:"približno {{count}} letom",two:"približno {{count}} letoma",few:"približno {{count}} leti",other:"približno {{count}} leti"},future:{one:"približno {{count}} leto",two:"približno {{count}} leti",few:"približno {{count}} leta",other:"približno {{count}} let"}},xYears:{present:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},past:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},future:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"}},overXYears:{present:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"},past:{one:"več kot {{count}} letom",two:"več kot {{count}} letoma",few:"več kot {{count}} leti",other:"več kot {{count}} leti"},future:{one:"več kot {{count}} leto",two:"več kot {{count}} leti",few:"več kot {{count}} leta",other:"več kot {{count}} let"}},almostXYears:{present:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"},past:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"},future:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}}};e.default=function(t,e,n){var u="",a="present";null!=n&&n.addSuffix&&(n.comparison&&n.comparison>0?(a="future",u="čez "):(a="past",u="pred "));var r=o[t];if("string"==typeof r)u+=r;else{var i=function(t){switch(t%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}(e);void 0!==r.one?u+=r[i].replace("{{count}}",String(e)):u+=r[a][i].replace("{{count}}",String(e))}return u},t.exports=e.default},76518:function(t,e,o){"use strict";var n=o(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(96312)),a={date:(0,u.default)({formats:{full:"EEEE, dd. MMMM y",long:"dd. MMMM y",medium:"d. MMM y",short:"d. MM. yy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=a,t.exports=e.default},78724:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'prejšnjo nedeljo ob' p";case 3:return"'prejšnjo sredo ob' p";case 6:return"'prejšnjo soboto ob' p";default:return"'prejšnji' EEEE 'ob' p"}},yesterday:"'včeraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};e.default=function(t,e,n,u){var a=o[t];return"function"==typeof a?a(e):a},t.exports=e.default},69628:function(t,e,o){"use strict";var n=o(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(34498)),a={ordinalNumber:function(t,e){return Number(t)+"."},era:(0,u.default)({values:{narrow:["pr. n. št.","po n. št."],abbreviated:["pr. n. št.","po n. št."],wide:["pred našim štetjem","po našem štetju"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. čet.","2. čet.","3. čet.","4. čet."],wide:["1. četrtletje","2. četrtletje","3. četrtletje","4. četrtletje"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,u.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["n","p","t","s","č","p","s"],short:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"več.",night:"noč"},wide:{am:"dop.",pm:"pop.",midnight:"polnoč",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"večer",night:"noč"}},defaultWidth:"wide",formattingValues:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zveč.",night:"ponoči"},wide:{am:"dop.",pm:"pop.",midnight:"opolnoči",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zvečer",night:"ponoči"}},defaultFormattingWidth:"wide"})};e.default=a,t.exports=e.default},2940:function(t,e,o){"use strict";var n=o(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(60766)),a={ordinalNumber:(0,n(o(83824)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,u.default)({matchPatterns:{abbreviated:/^(pr\. n\. št\.|po n\. št\.)/i,wide:/^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|na[sš]em)/i]},defaultParseWidth:"any"}),quarter:(0,u.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[čc]et\.?/i,wide:/^[1234]\. [čc]etrtletje/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,u.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"wide"}),day:(0,u.default)({matchPatterns:{narrow:/^[nptsčc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[cč]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[cč]/i,/^pe/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.default)({matchPatterns:{narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},defaultParseWidth:"any"})};e.default=a,t.exports=e.default},35009:function(t,e,o){"use strict";var n=o(47082).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(25963)),a=n(o(76518)),r=n(o(78724)),i=n(o(69628)),l=n(o(2940)),c={code:"sl",formatDistance:u.default,formatLong:a.default,formatRelative:r.default,localize:i.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=c,t.exports=e.default},47082:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=35009.chunk.0a1d0.js.map