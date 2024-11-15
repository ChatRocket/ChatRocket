/*! For license information please see bundle.b1894.js.LICENSE.txt */
!function(){"use strict";var e,t,r,n,a,c,o,f={87582:function(e,t,r){var n,a=r(81353);function c(){c=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},f=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function b(e,t,r,n){var c=t&&t.prototype instanceof g?t:g,o=Object.create(c.prototype),f=new C(n||[]);return a(o,"_invoke",{value:j(e,r,f)}),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=b;var s="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function g(){}function m(){}function w(){}var O={};u(O,f,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==r&&n.call(x,f)&&(O=x);var _=w.prototype=g.prototype=Object.create(O);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,c,o,f){var i=l(e[a],e,c);if("throw"!==i.type){var d=i.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,f)}),(function(e){r("throw",e,o,f)})):t.resolve(u).then((function(e){d.value=e,o(d)}),(function(e){return r("throw",e,o,f)}))}f(i.arg)}var c;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return c=c?c.then(a,a):a()}})}function j(t,r,n){var a=s;return function(c,o){if(a===p)throw Error("Generator is already running");if(a===v){if("throw"===c)throw o;return{value:e,done:!0}}for(n.method=c,n.arg=o;;){var f=n.delegate;if(f){var i=P(f,n);if(i){if(i===y)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===s)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var d=l(t,r,n);if("normal"===d.type){if(a=n.done?v:h,d.arg===y)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(a=v,n.method="throw",n.arg=d.arg)}}}function P(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var c=l(a,t.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,y;var o=c.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[f];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=w,a(_,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:m,configurable:!0}),m.displayName=u(w,d,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,d,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},L(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,c){void 0===c&&(c=Promise);var o=new k(b(e,r,n,a),c);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(_),u(_,d,"Generator"),u(_,f,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return f.type="throw",f.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],f=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),d=n.call(o,"finallyLoc");if(i&&d){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function o(e,t,r,n,a,c,o){try{var f=e[c](o),i=f.value}catch(e){return void r(e)}f.done?t(i):Promise.resolve(i).then(n,a)}var f=null!=(n=document.getElementById("app"))?n:document.body.firstElementChild;if(!f)throw new Error("No root element found");var i=function(){var e,t=(e=c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(56423),r.e(6112)]).then(r.bind(r,25071));case 2:t=e.sent,n=t.default,(0,a.render)((0,a.h)(n,{}),document.body,f);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function f(e){o(c,n,a,f,i,"next",e)}function i(e){o(c,n,a,f,i,"throw",e)}f(void 0)}))});return function(){return t.apply(this,arguments)}}();i()}},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return f[e].call(r.exports,r,r.exports,d),r.exports}d.m=f,e=[],d.O=function(t,r,n,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var o=!0,f=0;f<r.length;f++)(!1&a||c>=a)&&Object.keys(d.O).every((function(e){return d.O[e](r[f])}))?r.splice(f--,1):(o=!1,a<c&&(c=a));if(o){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);d.r(a);var c={};t=t||[null,r({}),r([]),r(r)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},d.d(a,c),a},d.d=function(e,t){for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,r){return d.f[r](e,t),t}),[]))},d.u=function(e){return e+".chunk."+{357:"c4817",419:"87483",713:"7a0dc",801:"12080",933:"72daf",972:"e380a",1030:"3c3b0",1620:"5f8d2",1799:"832bc",1833:"cead9",1942:"49636",2015:"85f28",2030:"09b7c",2290:"0c293",2932:"79f0f",2940:"fa5f9",3210:"0cf2e",3418:"41242",3889:"9d994",3943:"40c00",4045:"81d86",5407:"9595d",5682:"9d2a3",5771:"8f956",5823:"c9c6c",6112:"63907",6303:"c2a54",6412:"111f6",6460:"e4e99",6616:"3553a",6744:"6459d",6950:"e40f9",7077:"a3992",7394:"4df78",7623:"91b66",7676:"e0ea5",7918:"f3879",7977:"0c158",8594:"a5548",8657:"a4a0a",8701:"ca7a0",8768:"37183",9263:"4e3ef",9353:"09fad",9400:"9ddb0",9484:"81dcb",9518:"24780",9540:"73267",9593:"6f3a3",9594:"2510c",9659:"76aab",9665:"bf9f1",9701:"b6cff",9801:"803b5",10049:"5f2ef",10187:"3b483",10269:"990fa",10333:"4d8bf",10343:"f0bf5",10679:"0cde7",10814:"84dce",11168:"bdafc",11264:"63b4a",11324:"dceeb",11587:"4961c",11650:"2b2af",11932:"99eb7",11987:"ed4a6",12271:"25bf6",12381:"3e772",12459:"775fa",12593:"66f96",12599:"fc44f",12654:"1d030",12786:"a513c",13197:"9c174",13374:"b041b",13529:"d240e",13732:"e6ec0",13842:"0afc8",13845:"f97c1",14020:"7f208",14154:"548cb",14246:"e4f1e",14655:"b0011",14931:"8ceb3",14944:"40e58",15094:"7b67d",15128:"4b3b8",16527:"2d210",16679:"df075",16685:"69afc",16780:"1ce1c",16888:"6398e",16923:"b1dc4",17217:"dcf67",17963:"1a7d6",18054:"313b8",18191:"af7eb",18301:"fe4ad",18618:"f25ce",18814:"fdcc8",18976:"30917",19054:"f58b4",19517:"7f1b1",19534:"1c0a8",19540:"411c8",19705:"4023f",19771:"2646c",19838:"dba61",19881:"28c10",19979:"d5eb1",20031:"7298f",20032:"6386e",20051:"380fc",20107:"8a1cc",20169:"1fda7",20421:"fbe52",20726:"4a83b",20737:"38bd3",20891:"a2444",21066:"99b1c",21352:"12b29",21431:"dae3e",21454:"49787",21542:"1067e",21748:"209ee",21944:"d5ecb",22472:"ed6e6",22687:"3fd60",22986:"05e50",23273:"7cfa5",23638:"4af5e",24043:"95158",24118:"04674",24853:"c55fe",24891:"6af8c",25699:"c6221",25862:"5c46a",25963:"a5fbb",25968:"a43b4",26498:"364be",26635:"b53fb",26773:"aa632",26953:"bdc09",26957:"4f109",27511:"d43da",27802:"67920",27804:"dc30b",28238:"2c7ba",28613:"68b7a",28636:"d7bf4",28981:"a8d78",29369:"376a6",29381:"92077",29565:"9ccb8",29908:"d5249",30106:"902fc",30205:"2d56a",30526:"b151c",30532:"5095f",30563:"b08a6",30672:"82354",30915:"4c482",31052:"d68a8",31115:"5b9f3",31560:"41faa",31855:"3edb8",32040:"e163d",32061:"652d5",32513:"06da3",32589:"7776c",32999:"fa9bd",33296:"97475",33509:"8ea4c",33792:"513dd",34157:"a7787",34437:"d5116",34439:"580cc",34498:"66ba4",34515:"8f067",34785:"6e0af",34983:"b6d6c",35009:"4fd83",35148:"36eb4",35193:"d63c0",35335:"d7efc",35431:"579f3",35527:"a429c",35608:"928a9",36181:"b23f0",36719:"34bc5",36817:"4ac7d",37018:"82253",37145:"4ed74",37578:"84189",37871:"81a49",37969:"8c6a6",37992:"2c8de",38082:"ec696",38560:"db669",38665:"07b8a",38672:"99298",38947:"ea2f7",39241:"617b2",39752:"de187",39807:"36457",39929:"b4b34",40160:"d8e4a",40227:"2a84c",40374:"2b232",40589:"96afb",40926:"c7fb3",41233:"6f75d",41260:"b4f23",41683:"f4350",41688:"6f68c",41752:"748a3",41923:"75485",41991:"6cd09",42094:"cd148",42551:"efd0e",43478:"baee0",43737:"1795e",43850:"b484e",44028:"bef9c",44159:"d9308",44420:"4ba25",44445:"c7e78",44498:"a62e3",44541:"b655f",44553:"c993a",44626:"031ca",44740:"e52a1",45043:"4219d",45071:"03660",45206:"3a835",45236:"778fd",45471:"e0f0d",45623:"3b692",45785:"ce52b",45879:"88ad1",46058:"50e20",46277:"30d22",46342:"1747e",46428:"c573c",46477:"d6ea4",46889:"38585",47237:"7f47b",47269:"e5dfb",47286:"80895",47343:"0d3d7",48378:"cc4eb",48467:"77e26",48603:"e87a4",48701:"db852",48761:"f9bdf",49167:"fe9bf",49313:"1ed03",49396:"ffec9",49758:"5bc37",49839:"147dc",49849:"b8e94",49968:"cc89f",50135:"a2926",50311:"7530d",50607:"af565",50666:"87562",50946:"062fc",51114:"0a1dd",51535:"f2f2f",51747:"f90d6",52087:"4bbeb",52462:"3fbe7",52480:"16330",52564:"e44a1",52676:"08a76",52771:"4064f",52990:"2f1ea",53098:"ffd43",53264:"94fa8",53503:"62d0e",53578:"52642",53589:"2797f",53616:"7257b",53838:"c350b",53972:"3ad73",54466:"d40e6",54556:"3ab49",54726:"bdc0d",54795:"97d07",54915:"2cd0f",55180:"6e72c",55218:"f8dad",55348:"ed4e6",55706:"1a62a",55711:"f8f1f",55941:"d9016",56085:"c7f52",56423:"f89d7",56779:"2141d",56784:"c8757",56825:"04381",56991:"6b4d8",57349:"64739",57566:"ce14d",57613:"ecf9a",57801:"456be",57924:"d6dc9",57974:"71674",58e3:"836f6",58093:"ff33a",58318:"4870d",58367:"ae9f2",58369:"3de0b",58462:"c8c9d",58602:"b45e3",58850:"06344",58920:"194d5",58933:"5e3b8",58958:"2f84c",59179:"56974",59320:"a4dc3",59377:"f353d",59406:"ceb36",59628:"edd13",59857:"a04da",60044:"34d0a",60461:"4fac8",60572:"771a7",60766:"06b0e",60781:"0efe8",61042:"501ac",61380:"cc430",61408:"0b0d6",61480:"f339c",61758:"56f80",61946:"677b0",62020:"d0957",62237:"dc912",62730:"c5355",63084:"72cda",63270:"31de1",63327:"a7b7c",63361:"4b095",63516:"e4707",63715:"f8dd5",63813:"26b18",63940:"6dec3",64334:"1cb6e",64540:"1870b",65039:"3650d",65096:"b9cb3",65151:"81165",65231:"1ca7c",65374:"abf0c",65453:"ef0f0",65818:"49bef",66088:"27f3e",66129:"498de",66234:"3d2c4",66244:"b4c93",66270:"5b5c9",66333:"2d3d7",66343:"ca49f",66624:"791e6",66631:"c4cc0",66643:"31792",66691:"7fc12",66851:"146c0",66953:"8453a",67239:"034e1",67504:"4bc73",67713:"6cdd7",68193:"04cf2",68197:"ea782",68243:"d31c3",68345:"d22cd",68395:"31aad",68741:"5590e",68845:"bb5d9",69140:"5f444",69170:"9f27f",69213:"3fad8",69628:"048f7",69799:"3d0f2",69838:"b3043",69903:"ddc1b",69955:"ce758",70174:"6c32d",70186:"9763d",70303:"6ec62",70708:"f3b6f",70782:"b3f4a",70945:"41db7",71069:"7f10f",71143:"2bf08",71642:"364e4",71722:"82833",71912:"12277",71930:"fe9ee",72574:"4a4aa",72612:"26d56",72705:"8f505",72706:"9e614",72788:"436e5",72807:"4d9d4",72824:"ed6df",72866:"07952",72907:"6ebd7",73156:"1041d",73245:"8ce0b",73450:"5d0bb",73805:"59697",73868:"3f737",73886:"5cb01",74449:"80052",74554:"09d17",74583:"2f8dd",74606:"44881",74798:"60e06",74803:"52b9e",74827:"58b5c",74934:"a9ef2",75011:"be9e9",75086:"89ac0",75160:"5e624",75553:"01c10",75644:"90446",76031:"77339",76088:"acaad",76315:"308b8",76518:"2a205",76668:"a92a3",77004:"fc8c4",77064:"2c065",77244:"31503",77321:"9bbd7",77454:"35546",77648:"07f07",77853:"33f14",78030:"da4eb",78131:"89069",78153:"6d45d",78201:"c022d",78260:"3297c",78374:"86388",78399:"95f87",78724:"1edaf",78941:"b9122",79003:"ac7b1",79036:"73059",79189:"2300f",79346:"759f4",79354:"8289a",79557:"698d8",79583:"e8123",80032:"9da3e",80199:"e91e9",80223:"8a0ad",80232:"1ca2f",80234:"431f8",80578:"c3f31",80956:"48848",81374:"e6aab",81521:"6d2b2",81616:"f79b5",81622:"46278",81656:"dc052",81729:"b66d2",81866:"47c66",82515:"aa667",82583:"dbea1",82661:"4abdf",82844:"83d16",82853:"96838",83016:"83208",83402:"a0822",83626:"07da7",83661:"fd5fa",83824:"0c494",83919:"aeb21",83959:"f1d2d",84207:"00a59",84287:"63e5f",84613:"05bfd",84660:"5e8ca",84720:"2831a",85387:"7bdb9",85737:"3bbe7",85833:"5f6c1",86164:"7a56c",86566:"14751",86937:"aff16",87220:"a07e2",87236:"f431c",87520:"5a1ff",87763:"bc6ce",88019:"64a06",88097:"1a217",88154:"f1d94",88443:"bf45d",88468:"e2510",88558:"0a900",88879:"44da6",89104:"6b5ed",89400:"d384a",89506:"d2252",89601:"b9de1",89649:"9b19f",90271:"46e98",90382:"4bd6c",90457:"13ba9",90582:"c0e7f",91212:"a8387",91537:"96fbd",91623:"8998e",91979:"5cab8",92003:"3a6b9",92016:"b5118",92390:"c6d97",92453:"896ce",92521:"3cb8e",92656:"2f967",93012:"81a43",93085:"392c7",93377:"1ebd3",93431:"7e0df",93533:"928cd",93729:"9d266",93730:"47e61",93882:"7cc57",94015:"faa76",94139:"3898c",94401:"29d7b",94443:"05313",94516:"84c3f",94544:"cabee",94600:"b9cf4",94937:"b7060",95326:"a9236",95537:"36d21",95738:"2bac5",95739:"88576",95766:"878e3",95829:"6ae78",95939:"45fad",96003:"382d9",96312:"d8847",96469:"4f3a3",96754:"ca47d",96840:"da961",96912:"b07ff",97101:"e9752",97249:"b1103",97447:"19d95",97500:"95a8b",97502:"57f72",97862:"cb999",97868:"efc5d",97893:"504d9",98302:"29a82",98394:"7fe6e",98575:"bb961",98597:"58c94",98619:"48d7e",98777:"40336",98816:"37495",99151:"9b3b8",99465:"09eed",99476:"2b2b3",99482:"57f2d",99514:"ee077",99967:"5898f",99985:"6b989"}[e]+".js"},d.miniCssF=function(e){return e+".chunk."+{6112:"b6839",20421:"2ab76"}[e]+".css"},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},a="@rocket.chat/livechat:",d.l=function(e,t,r,c){if(n[e])n[e].push(t);else{var o,f;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+r){o=b;break}}o||(f=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.setAttribute("data-webpack",a+r),o.src=e),n[e]=[t];var l=function(t,r){o.onerror=o.onload=null,clearTimeout(s);var a=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(r)})),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),f&&document.head.appendChild(o)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="livechat/",c=function(e){return new Promise((function(t,r){var n=d.miniCssF(e),a=d.p+n;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){var o;if((a=(o=c[n]).getAttribute("data-href"))===e||a===t)return o}}(n,a))return t();!function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(c){if(a.onerror=a.onload=null,"load"===c.type)r();else{var o=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=f,a.parentNode.removeChild(a),n(i)}},a.href=t,document.head.appendChild(a)}(e,a,t,r)}))},o={23023:0},d.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{6112:1,20421:1}[e]&&t.push(o[e]=c(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={23023:0};d.f.j=function(t,r){var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(r,a){n=e[t]=[r,a]}));r.push(n[2]=a);var c=d.p+d.u(t),o=new Error;d.l(c,(function(r){if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",o.name="ChunkLoadError",o.type=a,o.request=c,n[1](o)}}),"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,c=r[0],o=r[1],f=r[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(n in o)d.o(o,n)&&(d.m[n]=o[n]);if(f)var u=f(d)}for(t&&t(r);i<c.length;i++)a=c[i],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return d.O(u)},r=self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),d.O(void 0,[30303],(function(){return d(32463)})),d.O(void 0,[30303],(function(){return d(82393)}));var u=d.O(void 0,[30303],(function(){return d(87582)}));u=d.O(u)}();
//# sourceMappingURL=bundle.b1894.js.map