"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[81816,99283],{99283:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){return function(e,t){var a,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&n.formattingValues){var r=n.defaultFormattingWidth||n.defaultWidth,o=i.width?String(i.width):r;a=n.formattingValues[o]||n.formattingValues[r]}else{var d=n.defaultWidth,u=i.width?String(i.width):n.defaultWidth;a=n.values[u]||n.values[d]}return a[n.argumentCallback?n.argumentCallback(e):e]}},n.exports=e.default},81816:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=(a=t(99283))&&a.__esModule?a:{default:a},r={ordinalNumber:function(n,e){var t=Number(n),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:(0,i.default)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};e.default=r,n.exports=e.default}}]);
//# sourceMappingURL=81816.chunk.556f6.js.map