"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[67504,96312,34498,60766,83824,98302,83919,28981,56085,79003],{96312:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):o;n=e.formattingValues[u]||e.formattingValues[o]}else{var i=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var u,i=o[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(i))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(i))return a}(d);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(i.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],o=t.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},98302:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"1びょうみまん",other:"{{count}}びょうみまん",oneWithSuffix:"やく1びょう",otherWithSuffix:"やく{{count}}びょう"},xSeconds:{one:"1びょう",other:"{{count}}びょう"},halfAMinute:"30びょう",lessThanXMinutes:{one:"1ぷんみまん",other:"{{count}}ふんみまん",oneWithSuffix:"やく1ぷん",otherWithSuffix:"やく{{count}}ふん"},xMinutes:{one:"1ぷん",other:"{{count}}ふん"},aboutXHours:{one:"やく1じかん",other:"やく{{count}}じかん"},xHours:{one:"1じかん",other:"{{count}}じかん"},xDays:{one:"1にち",other:"{{count}}にち"},aboutXWeeks:{one:"やく1しゅうかん",other:"やく{{count}}しゅうかん"},xWeeks:{one:"1しゅうかん",other:"{{count}}しゅうかん"},aboutXMonths:{one:"やく1かげつ",other:"やく{{count}}かげつ"},xMonths:{one:"1かげつ",other:"{{count}}かげつ"},aboutXYears:{one:"やく1ねん",other:"やく{{count}}ねん"},xYears:{one:"1ねん",other:"{{count}}ねん"},overXYears:{one:"1ねんいじょう",other:"{{count}}ねんいじょう"},almostXYears:{one:"1ねんちかく",other:"{{count}}ねんちかく"}};t.default=function(e,t,n){var r;n=n||{};var o=a[e];return r="string"==typeof o?o:1===t?n.addSuffix&&o.oneWithSuffix?o.oneWithSuffix:o.one:n.addSuffix&&o.otherWithSuffix?o.otherWithSuffix.replace("{{count}}",String(t)):o.other.replace("{{count}}",String(t)),n.addSuffix?n.comparison&&n.comparison>0?r+"あと":r+"まえ":r},e.exports=t.default},83919:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(96312))&&n.__esModule?n:{default:n},o={date:(0,r.default)({formats:{full:"yねんMがつdにちEEEE",long:"yねんMがつdにち",medium:"y/MM/dd",short:"y/MM/dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"Hじmmふんssびょう zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},28981:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"せんしゅうのeeeeのp",yesterday:"きのうのp",today:"きょうのp",tomorrow:"あしたのp",nextWeek:"よくしゅうのeeeeのp",other:"P"};t.default=function(e,t,n,r){return a[e]},e.exports=t.default},56085:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(34498))&&n.__esModule?n:{default:n},o={ordinalNumber:function(e,t){var a=Number(e);switch(String((t||{}).unit)){case"year":return"".concat(a,"ねん");case"quarter":return"だい".concat(a,"しはんき");case"month":return"".concat(a,"がつ");case"week":return"だい".concat(a,"しゅう");case"date":return"".concat(a,"にち");case"hour":return"".concat(a,"じ");case"minute":return"".concat(a,"ふん");case"second":return"".concat(a,"びょう");default:return"".concat(a)}},era:(0,r.default)({values:{narrow:["BC","AC"],abbreviated:["きげんぜん","せいれき"],wide:["きげんぜん","せいれき"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["だい1しはんき","だい2しはんき","だい3しはんき","だい4しはんき"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"],wide:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["にち","げつ","か","すい","もく","きん","ど"],short:["にち","げつ","か","すい","もく","きん","ど"],abbreviated:["にち","げつ","か","すい","もく","きん","ど"],wide:["にちようび","げつようび","かようび","すいようび","もくようび","きんようび","どようび"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},79003:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(60766));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,r(a(83824)).default)({matchPattern:/^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(きげん[前後]|せいれき)/i,wide:/^(きげん[前後]|せいれき)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(きげんぜん)/i,/^(せいれき|きげんご)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^だい[1234一二三四１２３４]しはんき/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])がつ/i,wide:/^([123456789]|1[012])がつ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(にち|げつ|か|すい|もく|きん|ど)/,short:/^(にち|げつ|か|すい|もく|きん|ど)/,abbreviated:/^(にち|げつ|か|すい|もく|きん|ど)/,wide:/^(にち|げつ|か|すい|もく|きん|ど)ようび/},defaultMatchWidth:"wide",parsePatterns:{any:[/^にち/,/^げつ/,/^か/,/^すい/,/^もく/,/^きん/,/^ど/]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(A|ごぜん)/i,pm:/^(P|ごご)/i,midnight:/^しんや|まよなか/i,noon:/^しょうご/i,morning:/^あさ/i,afternoon:/^ごご/i,evening:/^よる/i,night:/^しんや/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},67504:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(98302)),r=d(a(83919)),o=d(a(28981)),u=d(a(56085)),i=d(a(79003));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ja-Hira",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:u.default,match:i.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=67504.chunk.4bc73.js.map