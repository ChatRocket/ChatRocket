"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[419,34498],{34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;a=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},419:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.numberToLocale=u,t.default=void 0;var a,r=(a=n(34498))&&a.__esModule?a:{default:a},i={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}};function u(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var d={ordinalNumber:function(e,t){var n=Number(e),a=u(n);if("date"===(null==t?void 0:t.unit))return function(e,t){if(e>18&&e<=31)return t+"শে";switch(e){case 1:return t+"লা";case 2:case 3:return t+"রা";case 4:return t+"ঠা";default:return t+"ই"}}(n,a);if(n>10||0===n)return a+"তম";switch(n%10){case 2:case 3:return a+"য়";case 4:return a+"র্থ";case 6:return a+"ষ্ঠ";default:return a+"ম"}},era:(0,r.default)({values:{narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultWidth:"wide",formattingValues:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultFormattingWidth:"wide"})};t.default=d}}]);
//# sourceMappingURL=419.chunk.4206f.js.map