"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[86566,96312,34498,60766,83824,16780,40589,84287,98575,59377],{96312:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,d=i.width?String(i.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,u=r[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(u))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(u))return a}(d);return o=e.valueCallback?e.valueCallback(l):l,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(u.length)}}},e.exports=t.default},83824:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(i.length)}}},e.exports=t.default},16780:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i;return n=n||{},i="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?i+"માં":i+" પહેલાં":i};var a={lessThanXSeconds:{one:"હમણાં",other:"​આશરે {{count}} સેકંડ"},xSeconds:{one:"1 સેકંડ",other:"{{count}} સેકંડ"},halfAMinute:"અડધી મિનિટ",lessThanXMinutes:{one:"આ મિનિટ",other:"​આશરે {{count}} મિનિટ"},xMinutes:{one:"1 મિનિટ",other:"{{count}} મિનિટ"},aboutXHours:{one:"​આશરે 1 કલાક",other:"​આશરે {{count}} કલાક"},xHours:{one:"1 કલાક",other:"{{count}} કલાક"},xDays:{one:"1 દિવસ",other:"{{count}} દિવસ"},aboutXWeeks:{one:"આશરે 1 અઠવાડિયું",other:"આશરે {{count}} અઠવાડિયા"},xWeeks:{one:"1 અઠવાડિયું",other:"{{count}} અઠવાડિયા"},aboutXMonths:{one:"આશરે 1 મહિનો",other:"આશરે {{count}} મહિના"},xMonths:{one:"1 મહિનો",other:"{{count}} મહિના"},aboutXYears:{one:"આશરે 1 વર્ષ",other:"આશરે {{count}} વર્ષ"},xYears:{one:"1 વર્ષ",other:"{{count}} વર્ષ"},overXYears:{one:"1 વર્ષથી વધુ",other:"{{count}} વર્ષથી વધુ"},almostXYears:{one:"લગભગ 1 વર્ષ",other:"લગભગ {{count}} વર્ષ"}};e.exports=t.default},40589:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(96312))&&n.__esModule?n:{default:n},r={date:(0,i.default)({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},84287:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){return a[e]};var a={lastWeek:"'પાછલા' eeee p",yesterday:"'ગઈકાલે' p",today:"'આજે' p",tomorrow:"'આવતીકાલે' p",nextWeek:"eeee p",other:"P"};e.exports=t.default},98575:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(34498))&&n.__esModule?n:{default:n},r={ordinalNumber:function(e,t){return Number(e)},era:(0,i.default)({values:{narrow:["ઈસપૂ","ઈસ"],abbreviated:["ઈ.સ.પૂર્વે","ઈ.સ."],wide:["ઈસવીસન પૂર્વે","ઈસવીસન"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1લો ત્રિમાસ","2જો ત્રિમાસ","3જો ત્રિમાસ","4થો ત્રિમાસ"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["જા","ફે","મા","એ","મે","જૂ","જુ","ઓ","સ","ઓ","ન","ડિ"],abbreviated:["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઓક્ટો","નવે","ડિસે"],wide:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઇ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ર","સો","મં","બુ","ગુ","શુ","શ"],short:["ર","સો","મં","બુ","ગુ","શુ","શ"],abbreviated:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],wide:["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બ.",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},59377:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(83824)),i=r(a(60766));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ઈસપૂ|ઈસ)/i,/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},86566:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(16780)),i=d(a(40589)),r=d(a(84287)),o=d(a(98575)),u=d(a(59377));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"gu",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=86566.chunk.e1bbe.js.map