(window.webpackJsonp=window.webpackJsonp||[]).push([[350,373],{"../../node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildLocalizeFn(args){return function(dirtyIndex,dirtyOptions){var valuesArray,options=dirtyOptions||{};if("formatting"===(options.context?String(options.context):"standalone")&&args.formattingValues){var defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=options.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{var _defaultWidth=args.defaultWidth,_width=options.width?String(options.width):args.defaultWidth;valuesArray=args.values[_width]||args.values[_defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(dirtyIndex):dirtyIndex]}},module.exports=exports.default},"../../node_modules/date-fns/locale/sr-Latn/_lib/localize/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../../node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));var _default={ordinalNumber:function ordinalNumber(dirtyNumber){var number=Number(dirtyNumber);return String(number).concat(".")},era:(0,_index.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Pre Hrista","Posle Hrista"]},defaultWidth:"wide"}),quarter:(0,_index.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function argumentCallback(quarter){return Number(quarter)-1}}),month:(0,_index.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},defaultFormattingWidth:"wide"}),day:(0,_index.default)({values:{narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,_index.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"posle podne",evening:"uveče",night:"noću"}},defaultFormattingWidth:"wide"})};exports.default=_default,module.exports=exports.default}}]);