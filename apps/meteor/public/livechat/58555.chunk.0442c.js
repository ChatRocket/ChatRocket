(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[58555,34498],{34498:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},58555:function(e,t,n){"use strict";var a=n(47082).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(34498)),r={ordinalNumber:function(e,t){var n=String(null==t?void 0:t.unit),a=Number(e);return a+("date"===n?"-га":"hour"===n||"minute"===n||"second"===n?"-я":a%10!=2&&a%10!=3||a%100==12||a%100==13?"-ы":"-і")},era:(0,i.default)({values:{narrow:["да н.э.","н.э."],abbreviated:["да н. э.","н. э."],wide:["да нашай эры","нашай эры"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ы кв.","2-і кв.","3-і кв.","4-ы кв."],wide:["1-ы квартал","2-і квартал","3-і квартал","4-ы квартал"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["С","Л","С","К","Т","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","трав.","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","сьнеж."],wide:["студзень","люты","сакавік","красавік","травень","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","сьнежань"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","С","К","Т","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","трав.","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","сьнеж."],wide:["студзеня","лютага","сакавіка","красавіка","траўня","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","сьнежня"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["Н","П","А","С","Ч","П","С"],short:["нд","пн","аў","ср","чц","пт","сб"],abbreviated:["нядз","пан","аўт","сер","чаць","пят","суб"],wide:["нядзеля","панядзелак","аўторак","серада","чацьвер","пятніца","субота"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніца",afternoon:"дзень",evening:"вечар",night:"ноч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніцы",afternoon:"дня",evening:"вечара",night:"ночы"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=58555.chunk.0442c.js.map