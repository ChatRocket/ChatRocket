"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[22472,60766,83824],{60766:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=t.match(r);if(!n)return null;var l,u=n[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},83824:function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var r=i[0],n=t.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(r.length)}}},a.exports=t.default},22472:function(a,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e(83824)),r=n(e(60766));function n(a){return a&&a.__esModule?a:{default:a}}var l={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(வது)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(கி.மு.|கி.பி.)/i,abbreviated:/^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,wide:/^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/கி\.?\s?மு\.?/,/கி\.?\s?பி\.?/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^காலா.[1234]/i,wide:/^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/(1|காலா.1|ஒன்றாம்)/i,/(2|காலா.2|இரண்டாம்)/i,/(3|காலா.3|மூன்றாம்)/i,/(4|காலா.4|நான்காம்)/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,abbreviated:/^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,wide:/^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ஜ$/i,/^பி/i,/^மா/i,/^ஏ/i,/^மே/i,/^ஜூ/i,/^ஜூ/i,/^ஆ/i,/^செ/i,/^அ/i,/^ந/i,/^டி/i],any:[/^ஜன/i,/^பி/i,/^மா/i,/^ஏ/i,/^மே/i,/^ஜூன்/i,/^ஜூலை/i,/^ஆ/i,/^செ/i,/^அ/i,/^ந/i,/^டி/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(ஞா|தி|செ|பு|வி|வெ|ச)/i,short:/^(ஞா|தி|செ|பு|வி|வெ|ச)/i,abbreviated:/^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,wide:/^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ஞா/i,/^தி/i,/^செ/i,/^பு/i,/^வி/i,/^வெ/i,/^ச/i],any:[/^ஞா/i,/^தி/i,/^செ/i,/^பு/i,/^வி/i,/^வெ/i,/^ச/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,any:/^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^மு/i,pm:/^பி/i,midnight:/^நள்/i,noon:/^நண்/i,morning:/காலை/i,afternoon:/மதியம்/i,evening:/மாலை/i,night:/இரவு/i}},defaultParseWidth:"any"})};t.default=l,a.exports=t.default}}]);
//# sourceMappingURL=22472.chunk.c1645.js.map