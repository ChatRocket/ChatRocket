"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[51323,15780,99283,12022,45212,74805,50290,77055,51133,32680],{15780:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},99283:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var u,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=n.width?String(n.width):r;u=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,d=n.width?String(n.width):t.defaultWidth;u=t.values[d]||t.values[o]}return u[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},12022:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=a.width,n=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],r=e.match(n);if(!r)return null;var i,o=r[0],d=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(o))return a}(d):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(o))return a}(d);return i=t.valueCallback?t.valueCallback(l):l,{value:i=a.valueCallback?a.valueCallback(i):i,rest:e.slice(o.length)}}},t.exports=e.default},45212:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e.match(t.matchPattern);if(!u)return null;var n=u[0],r=e.match(t.parsePattern);if(!r)return null;var i=t.valueCallback?t.valueCallback(r[0]):r[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:e.slice(n.length)}}},t.exports=e.default},11090:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,u){var n;return u=u||{},n="string"==typeof a[t]?a[t]:function(t,e){return e.addSuffix?e.comparison>0?t.future:t.past:t.default}(1===e?a[t].one:a[t].other,u),n.replace("{{count}}",e)};var a={lessThanXSeconds:{one:{default:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",future:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",past:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"},other:{default:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",future:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",past:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"}},xSeconds:{one:{default:"1 ಸೆಕೆಂಡ್",future:"1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ",past:"1 ಸೆಕೆಂಡ್ ಹಿಂದೆ"},other:{default:"{{count}} ಸೆಕೆಂಡುಗಳು",future:"{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ",past:"{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ"}},halfAMinute:{other:{default:"ಅರ್ಧ ನಿಮಿಷ",future:"ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ",past:"ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ"}},lessThanXMinutes:{one:{default:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",future:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",past:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"},other:{default:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",future:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",past:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"}},xMinutes:{one:{default:"1 ನಿಮಿಷ",future:"1 ನಿಮಿಷದಲ್ಲಿ",past:"1 ನಿಮಿಷದ ಹಿಂದೆ"},other:{default:"{{count}} ನಿಮಿಷಗಳು",future:"{{count}} ನಿಮಿಷಗಳಲ್ಲಿ",past:"{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},aboutXHours:{one:{default:"ಸುಮಾರು 1 ಗಂಟೆ",future:"ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ",past:"ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳು",future:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},xHours:{one:{default:"1 ಗಂಟೆ",future:"1 ಗಂಟೆಯಲ್ಲಿ",past:"1 ಗಂಟೆ ಹಿಂದೆ"},other:{default:"{{count}} ಗಂಟೆಗಳು",future:"{{count}} ಗಂಟೆಗಳಲ್ಲಿ",past:"{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},xDays:{one:{default:"1 ದಿನ",future:"1 ದಿನದಲ್ಲಿ",past:"1 ದಿನದ ಹಿಂದೆ"},other:{default:"{{count}} ದಿನಗಳು",future:"{{count}} ದಿನಗಳಲ್ಲಿ",past:"{{count}} ದಿನಗಳ ಹಿಂದೆ"}},aboutXMonths:{one:{default:"ಸುಮಾರು 1 ತಿಂಗಳು",future:"ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ",past:"ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ತಿಂಗಳು",future:"ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},xMonths:{one:{default:"1 ತಿಂಗಳು",future:"1 ತಿಂಗಳಲ್ಲಿ",past:"1 ತಿಂಗಳ ಹಿಂದೆ"},other:{default:"{{count}} ತಿಂಗಳು",future:"{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",past:"{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},aboutXYears:{one:{default:"ಸುಮಾರು 1 ವರ್ಷ",future:"ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ",past:"ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ವರ್ಷಗಳು",future:"ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},xYears:{one:{default:"1 ವರ್ಷ",future:"1 ವರ್ಷದಲ್ಲಿ",past:"1 ವರ್ಷದ ಹಿಂದೆ"},other:{default:"{{count}} ವರ್ಷಗಳು",future:"{{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"{{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},overXYears:{one:{default:"1 ವರ್ಷದ ಮೇಲೆ",future:"1 ವರ್ಷದ ಮೇಲೆ",past:"1 ವರ್ಷದ ಮೇಲೆ"},other:{default:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ",future:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ",past:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ"}},almostXYears:{one:{default:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",future:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",past:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ"},other:{default:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",future:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ"}}};t.exports=e.default},50290:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,n=(u=a(15780))&&u.__esModule?u:{default:u},r={date:(0,n.default)({formats:{full:"EEEE, MMMM d, y",long:"MMMM d, y",medium:"MMM d, y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},77055:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,u,n){return a[t]};var a={lastWeek:"'ಕಳೆದ' eeee p 'ಕ್ಕೆ'",yesterday:"'ನಿನ್ನೆ' p 'ಕ್ಕೆ'",today:"'ಇಂದು' p 'ಕ್ಕೆ'",tomorrow:"'ನಾಳೆ' p 'ಕ್ಕೆ'",nextWeek:"eeee p 'ಕ್ಕೆ'",other:"P"};t.exports=e.default},51133:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,n=(u=a(99283))&&u.__esModule?u:{default:u},r={ordinalNumber:function(t,e){return Number(t)+"ನೇ"},era:(0,n.default)({values:{narrow:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],abbreviated:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],wide:["ಕ್ರಿಸ್ತ ಪೂರ್ವ","ಕ್ರಿಸ್ತ ಶಕ"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["ತ್ರೈ 1","ತ್ರೈ 2","ತ್ರೈ 3","ತ್ರೈ 4"],wide:["1ನೇ ತ್ರೈಮಾಸಿಕ","2ನೇ ತ್ರೈಮಾಸಿಕ","3ನೇ ತ್ರೈಮಾಸಿಕ","4ನೇ ತ್ರೈಮಾಸಿಕ"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,n.default)({values:{narrow:["ಜ","ಫೆ","ಮಾ","ಏ","ಮೇ","ಜೂ","ಜು","ಆ","ಸೆ","ಅ","ನ","ಡಿ"],abbreviated:["ಜನ","ಫೆಬ್ರ","ಮಾರ್ಚ್","ಏಪ್ರಿ","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗ","ಸೆಪ್ಟೆಂ","ಅಕ್ಟೋ","ನವೆಂ","ಡಿಸೆಂ"],wide:["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["ಭಾ","ಸೋ","ಮಂ","ಬು","ಗು","ಶು","ಶ"],short:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],abbreviated:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],wide:["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾಹ್ನ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾಹ್ನ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ಪೂ",pm:"ಅ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},32680:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(a(45212)),n=r(a(12022));function r(t){return t&&t.__esModule?t:{default:t}}var i={ordinalNumber:(0,u.default)({matchPattern:/^(\d+)(ನೇ|ನೆ)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,abbreviated:/^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,wide:/^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ಪೂ/i,/^(ಶ|ಪ್ರ)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,wide:/^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,abbreviated:/^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,wide:/^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ಜ$/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂ/i,/^ಜು$/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i],any:[/^ಜನ/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂನ್/i,/^ಜುಲೈ/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,short:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,abbreviated:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,wide:/^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i],any:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,any:/^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ಪೂ/i,pm:/^ಅ/i,midnight:/ಮಧ್ಯರಾತ್ರಿ/i,noon:/ಮಧ್ಯಾನ್ಹ/i,morning:/ಬೆಳಗ್ಗೆ/i,afternoon:/ಮಧ್ಯಾನ್ಹ/i,evening:/ಸಂಜೆ/i,night:/ರಾತ್ರಿ/i}},defaultParseWidth:"any"})};e.default=i,t.exports=e.default},51323:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=d(a(11090)),n=d(a(50290)),r=d(a(77055)),i=d(a(51133)),o=d(a(32680));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"kn",formatDistance:u.default,formatLong:n.default,formatRelative:r.default,localize:i.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,t.exports=e.default}}]);
//# sourceMappingURL=51323.chunk.2af9e.js.map