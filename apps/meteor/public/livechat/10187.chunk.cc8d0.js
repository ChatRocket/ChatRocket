"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[10187,34498],{34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,d=a||{};if("formatting"===(d.context?String(d.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,i=d.width?String(d.width):u;r=e.formattingValues[i]||e.formattingValues[u]}else{var n=e.defaultWidth,l=d.width?String(d.width):e.defaultWidth;r=e.values[l]||e.values[n]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},10187:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,d=(r=a(34498))&&r.__esModule?r:{default:r},u={ordinalNumber:function(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-ви";case 2:return t+"-ри";case 7:case 8:return t+"-ми"}return t+"-ти"},era:(0,d.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:{abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},defaultWidth:"wide"})};t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=10187.chunk.cc8d0.js.map