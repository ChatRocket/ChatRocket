"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[63270,96312,34498,60766,83824,6412,13197,90271,88879,66129],{94836:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,a.default)(2,arguments);var i=(0,o.default)(e,n),r=(0,o.default)(t,n);return i.getTime()===r.getTime()};var a=i(n(78236)),o=i(n(15753));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},78236:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},15753:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,o.default)(1,arguments);var n=t||{},r=n.locale,u=r&&r.options&&r.options.weekStartsOn,d=null==u?0:(0,i.default)(u),l=null==n.weekStartsOn?d:(0,i.default)(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,a.default)(e),c=s.getUTCDay(),f=(c<l?7:0)+c-l;return s.setUTCDate(s.getUTCDate()-f),s.setUTCHours(0,0,0,0),s};var a=r(n(79966)),o=r(n(78236)),i=r(n(73373));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},73373:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},96312:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=o.width?String(o.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var u=e.defaultWidth,d=o.width?String(o.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var r,u=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return r=e.valueCallback?e.valueCallback(l):l,{value:r=n.valueCallback?n.valueCallback(r):r,rest:t.slice(u.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var o=a[0],i=t.match(e.parsePattern);if(!i)return null;var r=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:r=n.valueCallback?n.valueCallback(r):r,rest:t.slice(o.length)}}},e.exports=t.default},6412:function(e,t){function n(e,t,n){n=n||"regular";var a=function(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&n>10)return e.other;var a=n%10;return a>=2&&a<=4?e.twoFour:e.other}(e,t);return(a[n]||a).replace("{{count}}",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){o=o||{};var i=a[e];return o.addSuffix?o.comparison>0?"za "+n(i,t,"future"):n(i,t,"past")+" temu":n(i,t)};var a={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godziny",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"około tygodnia",twoFour:"około {{count}} tygodni",other:"około {{count}} tygodni"},xWeeks:{one:"tydzień",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};e.exports=t.default},13197:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(96312))&&a.__esModule?a:{default:a},i={date:(0,o.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},90271:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var o=s[e];return"function"==typeof o?o(e,t,n,a):o};var a,o=(a=n(94836))&&a.__esModule?a:{default:a},i={masculine:"ostatni",feminine:"ostatnia"},r={masculine:"ten",feminine:"ta"},u={masculine:"następny",feminine:"następna"},d={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function l(e,t,n,a){var l=function(e,t,n,a){var l=t.getUTCDay(),s=function(e,t,n,a){if((0,o.default)(t,n,a))return r;if("lastWeek"===e)return i;if("nextWeek"===e)return u;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,a);return s[d[l]]}(e,t,n,a);return"'".concat(l,"' eeee 'o' p")}var s={lastWeek:l,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:l,other:"P"};e.exports=t.default},88879:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(34498))&&a.__esModule?a:{default:a},i={ordinalNumber:function(e){var t=Number(e);return String(t)},era:(0,o.default)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},66129:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(83824)),o=i(n(60766));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(ł|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,wide:/^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[npwścs]/i,short:/^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^ś/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},63270:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(6412)),o=d(n(13197)),i=d(n(90271)),r=d(n(88879)),u=d(n(66129));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"pl",formatDistance:a.default,formatLong:o.default,formatRelative:i.default,localize:r.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},79966:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var a,o=(a=n(78236))&&a.__esModule?a:{default:a};e.exports=t.default}}]);
//# sourceMappingURL=63270.chunk.31de1.js.map