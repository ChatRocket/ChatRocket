"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[24891,34498],{34498:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;a=e.formattingValues[d]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},24891:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(34498))&&a.__esModule?a:{default:a},r={ordinalNumber:function(e,t){var n=Number(e);switch(String((t||{}).unit)){case"date":return n.toString()+"日";case"hour":return n.toString()+"時";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}},era:(0,i.default)({values:{narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"上",pm:"下",midnight:"午夜",noon:"晌",morning:"早",afternoon:"午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"},wide:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"}},defaultWidth:"wide",formattingValues:{narrow:{am:"上",pm:"下",midnight:"午夜",noon:"晌",morning:"早",afternoon:"午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"},wide:{am:"上午",pm:"下午",midnight:"午夜",noon:"中午",morning:"上午",afternoon:"下午",evening:"晚上",night:"夜晚"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default}}]);
//# sourceMappingURL=24891.chunk.6af8c.js.map