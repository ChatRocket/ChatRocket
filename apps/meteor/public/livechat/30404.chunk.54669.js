"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[30404,15780,99283,12022,45212,26440,76449,98037,96118,88313],{15780:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},99283:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=n.width?String(n.width):i;r=e.formattingValues[d]||e.formattingValues[i]}else{var l=e.defaultWidth,u=n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[l]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},12022:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var d,l=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(l))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(l))return a}(u);return d=e.valueCallback?e.valueCallback(s):s,{value:d=a.valueCallback?a.valueCallback(d):d,rest:t.slice(l.length)}}},e.exports=t.default},45212:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var d=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:d=a.valueCallback?a.valueCallback(d):d,rest:t.slice(n.length)}}},e.exports=t.default},26440:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){i=i||{};var d,l,u,s,o,f,c=e.match(/about|over|almost|lessthan/i),m=e.replace(c,"");return l=t,u=i.addSuffix,s=m.toLowerCase(),o=i.comparison,f=u?n[s][o]:r[s],d="halfaminute"===s?f:l+f,c&&(d=a[c[0].toLowerCase()]+" "+d),d};var a={about:"körülbelül",over:"több mint",almost:"majdnem",lessthan:"kevesebb mint"},r={xseconds:" másodperc",halfaminute:"fél perc",xminutes:" perc",xhours:" óra",xdays:" nap",xweeks:" hét",xmonths:" hónap",xyears:" év"},n={xseconds:{"-1":" másodperccel ezelőtt",1:" másodperc múlva",0:" másodperce"},halfaminute:{"-1":"fél perccel ezelőtt",1:"fél perc múlva",0:"fél perce"},xminutes:{"-1":" perccel ezelőtt",1:" perc múlva",0:" perce"},xhours:{"-1":" órával ezelőtt",1:" óra múlva",0:" órája"},xdays:{"-1":" nappal ezelőtt",1:" nap múlva",0:" napja"},xweeks:{"-1":" héttel ezelőtt",1:" hét múlva",0:" hete"},xmonths:{"-1":" hónappal ezelőtt",1:" hónap múlva",0:" hónapja"},xyears:{"-1":" évvel ezelőtt",1:" év múlva",0:" éve"}};e.exports=t.default},76449:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(15780))&&r.__esModule?r:{default:r},i={date:(0,n.default)({formats:{full:"y. MMMM d., EEEE",long:"y. MMMM d.",medium:"y. MMM d.",short:"y. MM. dd."},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},98037:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){var i=n[e];return"function"==typeof i?i(t,a,r):i};var a=["vasárnap","hétfőn","kedden","szerdán","csütörtökön","pénteken","szombaton"];function r(e){return function(t,r,n){var i=t.getUTCDay();return(e?"":"'múlt' ")+"'"+a[i]+"' p'-kor'"}}var n={lastWeek:r(!1),yesterday:"'tegnap' p'-kor'",today:"'ma' p'-kor'",tomorrow:"'holnap' p'-kor'",nextWeek:r(!0),other:"P"};e.exports=t.default},96118:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(99283))&&r.__esModule?r:{default:r},i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,n.default)({values:{narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus előtt","időszámításunk szerint"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. n.év","2. n.év","3. n.év","4. n.év"],wide:["1. negyedév","2. negyedév","3. negyedév","4. negyedév"]},defaultWidth:"wide",formattingValues:{narrow:["I.","II.","III.","IV."],abbreviated:["I. n.év","II. n.év","III. n.év","IV. n.év"],wide:["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"]},argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","Á","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],wide:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},abbreviated:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},wide:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"délután",evening:"este",night:"éjjel"}},defaultWidth:"wide",defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},88313:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(45212)),n=i(a(12022));function i(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},defaultParseWidth:"any"})};t.default=d,e.exports=t.default},30404:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(26440)),n=u(a(76449)),i=u(a(98037)),d=u(a(96118)),l=u(a(88313));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"hu",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:d.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=30404.chunk.54669.js.map