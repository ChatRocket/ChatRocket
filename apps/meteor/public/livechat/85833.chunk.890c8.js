(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[85833,60766,83824],{60766:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=a.match(r);if(!d)return null;var n,l=d[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(l))return t}(s):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(l))return t}(s);return n=e.valueCallback?e.valueCallback(u):u,{value:n=t.valueCallback?t.valueCallback(n):n,rest:a.slice(l.length)}}},e.exports=a.default},83824:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var r=i[0],d=a.match(e.parsePattern);if(!d)return null;var n=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:n=t.valueCallback?t.valueCallback(n):n,rest:a.slice(r.length)}}},e.exports=a.default},85833:function(e,a,t){"use strict";var i=t(47082).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(t(60766)),d={ordinalNumber:(0,i(t(83824)).default)({matchPattern:/^(\d+)(è|r|n|r|t)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]},defaultParseWidth:"wide"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},defaultParseWidth:"wide"}),day:(0,r.default)({matchPatterns:{narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},defaultParseWidth:"wide"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},47082:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=85833.chunk.890c8.js.map