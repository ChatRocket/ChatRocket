(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[84613,96312,34498,60766,83824,70303,14154,81616,92656,16888],{96312:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},34498:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,n=null!=a&&a.width?String(a.width):r;i=e.formattingValues[n]||e.formattingValues[r]}else{var u=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;i=e.values[o]||e.values[u]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(r);if(!n)return null;var u,o=n[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(o))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(o))return a}(d);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(o.length)}}},e.exports=t.default},83824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var r=i[0],n=t.match(e.parsePattern);if(!n)return null;var u=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},70303:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"секунд хүрэхгүй",other:"{{count}} секунд хүрэхгүй"},xSeconds:{one:"1 секунд",other:"{{count}} секунд"},halfAMinute:"хагас минут",lessThanXMinutes:{one:"минут хүрэхгүй",other:"{{count}} минут хүрэхгүй"},xMinutes:{one:"1 минут",other:"{{count}} минут"},aboutXHours:{one:"ойролцоогоор 1 цаг",other:"ойролцоогоор {{count}} цаг"},xHours:{one:"1 цаг",other:"{{count}} цаг"},xDays:{one:"1 өдөр",other:"{{count}} өдөр"},aboutXWeeks:{one:"ойролцоогоор 1 долоо хоног",other:"ойролцоогоор {{count}} долоо хоног"},xWeeks:{one:"1 долоо хоног",other:"{{count}} долоо хоног"},aboutXMonths:{one:"ойролцоогоор 1 сар",other:"ойролцоогоор {{count}} сар"},xMonths:{one:"1 сар",other:"{{count}} сар"},aboutXYears:{one:"ойролцоогоор 1 жил",other:"ойролцоогоор {{count}} жил"},xYears:{one:"1 жил",other:"{{count}} жил"},overXYears:{one:"1 жил гаран",other:"{{count}} жил гаран"},almostXYears:{one:"бараг 1 жил",other:"бараг {{count}} жил"}};t.default=function(e,t,i){var r,n=a[e];if(r="string"==typeof n?n:1===t?n.one:n.other.replace("{{count}}",String(t)),null!=i&&i.addSuffix){var u=r.split(" "),o=u.pop();switch(r=u.join(" "),o){case"секунд":r+=" секундийн";break;case"минут":r+=" минутын";break;case"цаг":r+=" цагийн";break;case"өдөр":r+=" өдрийн";break;case"сар":r+=" сарын";break;case"жил":r+=" жилийн";break;case"хоног":r+=" хоногийн";break;case"гаран":r+=" гараны";break;case"хүрэхгүй":r+=" хүрэхгүй хугацааны";break;default:r+=o+"-н"}return i.comparison&&i.comparison>0?r+" дараа":r+" өмнө"}return r},e.exports=t.default},14154:function(e,t,a){"use strict";var i=a(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(96312)),n={date:(0,r.default)({formats:{full:"y 'оны' MMMM'ын' d, EEEE 'гараг'",long:"y 'оны' MMMM'ын' d",medium:"y 'оны' MMM'ын' d",short:"y.MM.dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},81616:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'өнгөрсөн' eeee 'гарагийн' p 'цагт'",yesterday:"'өчигдөр' p 'цагт'",today:"'өнөөдөр' p 'цагт'",tomorrow:"'маргааш' p 'цагт'",nextWeek:"'ирэх' eeee 'гарагийн' p 'цагт'",other:"P"};t.default=function(e,t,i,r){return a[e]},e.exports=t.default},92656:function(e,t,a){"use strict";var i=a(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(34498)),n={ordinalNumber:function(e,t){return String(e)},era:(0,r.default)({values:{narrow:["НТӨ","НТ"],abbreviated:["НТӨ","НТ"],wide:["нийтийн тооллын өмнөх","нийтийн тооллын"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["I","II","III","IV"],abbreviated:["I улирал","II улирал","III улирал","IV улирал"],wide:["1-р улирал","2-р улирал","3-р улирал","4-р улирал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургаадугаар сар","Долоодугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арваннэгдүгээр сар","Арван хоёрдугаар сар"]},defaultWidth:"wide",formattingValues:{narrow:["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],abbreviated:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],wide:["нэгдүгээр сар","хоёрдугаар сар","гуравдугаар сар","дөрөвдүгээр сар","тавдугаар сар","зургаадугаар сар","долоодугаар сар","наймдугаар сар","есдүгээр сар","аравдугаар сар","арваннэгдүгээр сар","арван хоёрдугаар сар"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"]},defaultWidth:"wide",formattingValues:{narrow:["Н","Д","М","Л","П","Б","Б"],short:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],abbreviated:["Ням","Дав","Мяг","Лха","Пүр","Баа","Бям"],wide:["ням","даваа","мягмар","лхагва","пүрэв","баасан","бямба"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},abbreviated:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"},wide:{am:"ү.ө.",pm:"ү.х.",midnight:"шөнө дунд",noon:"үд дунд",morning:"өглөө",afternoon:"өдөр",evening:"орой",night:"шөнө"}},defaultWidth:"wide"})};t.default=n,e.exports=t.default},16888:function(e,t,a){"use strict";var i=a(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(60766)),n={ordinalNumber:(0,i(a(83824)).default)({matchPattern:/\d+/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(нтө|нт)/i,abbreviated:/^(нтө|нт)/i,wide:/^(нийтийн тооллын өмнө|нийтийн тооллын)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(нтө|нийтийн тооллын өмнө)/i,/^(нт|нийтийн тооллын)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^(iv|iii|ii|i)/i,abbreviated:/^(iv|iii|ii|i) улирал/i,wide:/^[1-4]-р улирал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(i(\s|$)|1)/i,/^(ii(\s|$)|2)/i,/^(iii(\s|$)|3)/i,/^(iv(\s|$)|4)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,abbreviated:/^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,wide:/^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i$/i,/^ii$/i,/^iii$/i,/^iv$/i,/^v$/i,/^vi$/i,/^vii$/i,/^viii$/i,/^ix$/i,/^x$/i,/^xi$/i,/^xii$/i],any:[/^(1|нэгдүгээр)/i,/^(2|хоёрдугаар)/i,/^(3|гуравдугаар)/i,/^(4|дөрөвдүгээр)/i,/^(5|тавдугаар)/i,/^(6|зургаадугаар)/i,/^(7|долоодугаар)/i,/^(8|наймдугаар)/i,/^(9|есдүгээр)/i,/^(10|аравдугаар)/i,/^(11|арван нэгдүгээр)/i,/^(12|арван хоёрдугаар)/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[ндмлпбб]/i,short:/^(ня|да|мя|лх|пү|ба|бя)/i,abbreviated:/^(ням|дав|мяг|лха|пүр|баа|бям)/i,wide:/^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^д/i,/^м/i,/^л/i,/^п/i,/^б/i,/^б/i],any:[/^ня/i,/^да/i,/^мя/i,/^лх/i,/^пү/i,/^ба/i,/^бя/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,any:/^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ү\.ө\./i,pm:/^ү\.х\./i,midnight:/^шөнө дунд/i,noon:/^үд дунд/i,morning:/өглөө/i,afternoon:/өдөр/i,evening:/орой/i,night:/шөнө/i}},defaultParseWidth:"any"})};t.default=n,e.exports=t.default},84613:function(e,t,a){"use strict";var i=a(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(70303)),n=i(a(14154)),u=i(a(81616)),o=i(a(92656)),d=i(a(16888)),l={code:"mn",formatDistance:r.default,formatLong:n.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=84613.chunk.85f07.js.map