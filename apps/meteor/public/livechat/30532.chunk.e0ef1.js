"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[30532,34498],{34498:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var d=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},30532:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.localeToNumber=function(e){var n=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return r.number[e]}));return Number(n)},n.numberToLocale=o,n.default=void 0;var a,i=(a=t(34498))&&a.__esModule?a:{default:a},r={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}};function o(e){return e.toString().replace(/\d/g,(function(e){return r.locale[e]}))}var d={ordinalNumber:function(e,n){return o(Number(e))},era:(0,i.default)({values:{narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्टू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्टू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultWidth:"wide",formattingValues:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultFormattingWidth:"wide"})};n.default=d}}]);
//# sourceMappingURL=30532.chunk.e0ef1.js.map