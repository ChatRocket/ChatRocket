"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[76668,96312,34498,60766,83824,58602,74827,46889,10049,44159],{96312:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},34498:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,l=i.width?String(i.width):r;n=e.formattingValues[l]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},60766:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=a.match(i);if(!r)return null;var l,o=r[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(o))return t}(u):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(o))return t}(u);return l=e.valueCallback?e.valueCallback(d):d,{value:l=t.valueCallback?t.valueCallback(l):l,rest:a.slice(o.length)}}},e.exports=a.default},83824:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],r=a.match(e.parsePattern);if(!r)return null;var l=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:a.slice(i.length)}}},e.exports=a.default},58602:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}};a.default=function(e,a,n){var i,r=t[e];return i="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",a.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?i+" sonra":i+" önce":i},e.exports=a.default},74827:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(96312))&&n.__esModule?n:{default:n},r={date:(0,i.default)({formats:{full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},46889:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'geçen hafta' eeee 'saat' p",yesterday:"'dün saat' p",today:"'bugün saat' p",tomorrow:"'yarın saat' p",nextWeek:"eeee 'saat' p",other:"P"};a.default=function(e,a,n,i){return t[e]},e.exports=a.default},10049:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(34498))&&n.__esModule?n:{default:n},r={ordinalNumber:function(e,a){return Number(e)+"."},era:(0,i.default)({values:{narrow:["MÖ","MS"],abbreviated:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},44159:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(60766));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i(t(83824)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|çar|per|cum|cts)/i,wide:/^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma/i,/cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},76668:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(58602)),i=u(t(74827)),r=u(t(46889)),l=u(t(10049)),o=u(t(44159));function u(e){return e&&e.__esModule?e:{default:e}}var d={code:"tr",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:l.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=d,e.exports=a.default}}]);
//# sourceMappingURL=76668.chunk.10d23.js.map