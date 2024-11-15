module.export({categoricalColorSchemeIds:()=>Ge,categoricalColorSchemes:()=>Ce,colorInterpolatorIds:()=>Ne,colorInterpolators:()=>Le,colorSchemeIds:()=>Be,colorSchemes:()=>$e,computeContinuousColorScaleColorStops:()=>cr,cyclicalColorInterpolators:()=>Ke,divergingColorInterpolators:()=>Pe,divergingColorScaleDefaults:()=>nr,divergingColorSchemeIds:()=>Te,divergingColorSchemes:()=>Ve,getContinuousColorScale:()=>lr,getDivergingColorScale:()=>tr,getInheritedColorGenerator:()=>Qe,getOrdinalColorScale:()=>fr,getQuantizeColorScale:()=>ur,getSequentialColorScale:()=>er,inheritedColorPropType:()=>Ye,isCategoricalColorScheme:()=>Fe,isDivergingColorScheme:()=>He,isSequentialColorScheme:()=>Je,ordinalColorsPropType:()=>Xe,quantizeColorScaleDefaults:()=>ir,sequentialColorInterpolators:()=>Me,sequentialColorScaleDefaults:()=>Ze,sequentialColorSchemeIds:()=>De,sequentialColorSchemes:()=>Ue,useContinuousColorScale:()=>sr,useDivergingColorScale:()=>or,useInheritedColor:()=>We,useOrdinalColorScale:()=>pr,useQuantizeColorScale:()=>ar,useSequentialColorScale:()=>rr});let e,r,n,t,o,i,u,a,l,s,c,f,p,d,m,h,g,y,b,v,_,w,O,k,j,z,A,E,x,I,q,S,R,C,G,V,T,P,U,D,M,$,B,F,H,J,K,L,N,Q,W,X,Y,Z,ee,re,ne,te,oe,ie,ue,ae,le,se,ce,fe,pe,de,me,he,ge,ye,be,ve;module.link("d3-scale-chromatic",{schemeCategory10(v){e=v},schemeAccent(v){r=v},schemeDark2(v){n=v},schemePaired(v){t=v},schemePastel1(v){o=v},schemePastel2(v){i=v},schemeSet1(v){u=v},schemeSet2(v){a=v},schemeSet3(v){l=v},schemeBrBG(v){s=v},schemePRGn(v){c=v},schemePiYG(v){f=v},schemePuOr(v){p=v},schemeRdBu(v){d=v},schemeRdGy(v){m=v},schemeRdYlBu(v){h=v},schemeRdYlGn(v){g=v},schemeSpectral(v){y=v},interpolateBrBG(v){b=v},interpolatePRGn(_v){v=_v},interpolatePiYG(v){_=v},interpolatePuOr(v){w=v},interpolateRdBu(v){O=v},interpolateRdGy(v){k=v},interpolateRdYlBu(v){j=v},interpolateRdYlGn(v){z=v},interpolateSpectral(v){A=v},schemeBlues(v){E=v},schemeGreens(v){x=v},schemeGreys(v){I=v},schemeOranges(v){q=v},schemePurples(v){S=v},schemeReds(v){R=v},schemeBuGn(v){C=v},schemeBuPu(v){G=v},schemeGnBu(v){V=v},schemeOrRd(v){T=v},schemePuBuGn(v){P=v},schemePuBu(v){U=v},schemePuRd(v){D=v},schemeRdPu(v){M=v},schemeYlGnBu(v){$=v},schemeYlGn(v){B=v},schemeYlOrBr(v){F=v},schemeYlOrRd(v){H=v},interpolateBlues(v){J=v},interpolateGreens(v){K=v},interpolateGreys(v){L=v},interpolateOranges(v){N=v},interpolatePurples(v){Q=v},interpolateReds(v){W=v},interpolateTurbo(v){X=v},interpolateViridis(v){Y=v},interpolateInferno(v){Z=v},interpolateMagma(v){ee=v},interpolatePlasma(v){re=v},interpolateCividis(v){ne=v},interpolateWarm(v){te=v},interpolateCool(v){oe=v},interpolateCubehelixDefault(v){ie=v},interpolateBuGn(v){ue=v},interpolateBuPu(v){ae=v},interpolateGnBu(v){le=v},interpolateOrRd(v){se=v},interpolatePuBuGn(v){ce=v},interpolatePuBu(v){fe=v},interpolatePuRd(v){pe=v},interpolateRdPu(v){de=v},interpolateYlGnBu(v){me=v},interpolateYlGn(v){he=v},interpolateYlOrBr(v){ge=v},interpolateYlOrRd(v){ye=v},interpolateRainbow(v){be=v},interpolateSinebow(v){ve=v}},0);let _e;module.link("react",{useMemo(v){_e=v}},1);let we;module.link("lodash/get",{default(v){we=v}},2);let Oe;module.link("lodash/isPlainObject",{default(v){Oe=v}},3);let ke;module.link("d3-color",{rgb(v){ke=v}},4);let je;module.link("prop-types",{default(v){je=v}},5);let ze,Ae,Ee,xe,Ie;module.link("d3-scale",{scaleSequential(v){ze=v},scaleDiverging(v){Ae=v},scaleQuantize(v){Ee=v},scaleLinear(v){xe=v},scaleOrdinal(v){Ie=v}},6);function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},qe.apply(this,arguments)}function Se(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Re(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return Se(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Se(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Ce={nivo:["#e8c1a0","#f47560","#f1e15b","#e8a838","#61cdbb","#97e3d5"],category10:e,accent:r,dark2:n,paired:t,pastel1:o,pastel2:i,set1:u,set2:a,set3:l},Ge=Object.keys(Ce),Ve={brown_blueGreen:s,purpleRed_green:c,pink_yellowGreen:f,purple_orange:p,red_blue:d,red_grey:m,red_yellow_blue:h,red_yellow_green:g,spectral:y},Te=Object.keys(Ve),Pe={brown_blueGreen:b,purpleRed_green:v,pink_yellowGreen:_,purple_orange:w,red_blue:O,red_grey:k,red_yellow_blue:j,red_yellow_green:z,spectral:A},Ue={blues:E,greens:x,greys:I,oranges:q,purples:S,reds:R,blue_green:C,blue_purple:G,green_blue:V,orange_red:T,purple_blue_green:P,purple_blue:U,purple_red:D,red_purple:M,yellow_green_blue:$,yellow_green:B,yellow_orange_brown:F,yellow_orange_red:H},De=Object.keys(Ue),Me={blues:J,greens:K,greys:L,oranges:N,purples:Q,reds:W,turbo:X,viridis:Y,inferno:Z,magma:ee,plasma:re,cividis:ne,warm:te,cool:oe,cubehelixDefault:ie,blue_green:ue,blue_purple:ae,green_blue:le,orange_red:se,purple_blue_green:ce,purple_blue:fe,purple_red:pe,red_purple:de,yellow_green_blue:me,yellow_green:he,yellow_orange_brown:ge,yellow_orange_red:ye},$e=qe({},Ce,Ve,Ue),Be=Object.keys($e),Fe=function(e){return Ge.includes(e)},He=function(e){return Te.includes(e)},Je=function(e){return De.includes(e)},Ke={rainbow:be,sinebow:ve},Le=qe({},Pe,Me,Ke),Ne=Object.keys(Le),Qe=function(e,r){if("function"==typeof e)return e;if(Oe(e)){if(function(e){return void 0!==e.theme}(e)){if(void 0===r)throw new Error("Unable to use color from theme as no theme was provided");var n=we(r,e.theme);if(void 0===n)throw new Error("Color from theme is undefined at path: '"+e.theme+"'");return function(){return n}}if(function(e){return void 0!==e.from}(e)){var t=function(r){return we(r,e.from)};if(Array.isArray(e.modifiers)){for(var o,i=[],u=function(){var e=o.value,r=e[0],n=e[1];if("brighter"===r)i.push((function(e){return e.brighter(n)}));else if("darker"===r)i.push((function(e){return e.darker(n)}));else{if("opacity"!==r)throw new Error("Invalid color modifier: '"+r+"', must be one of: 'brighter', 'darker', 'opacity'");i.push((function(e){return e.opacity=n,e}))}},a=Re(e.modifiers);!(o=a()).done;)u();return 0===i.length?t:function(e){return i.reduce((function(e,r){return r(e)}),ke(t(e))).toString()}}return t}throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object")}return function(){return e}},We=function(e,r){return _e((function(){return Qe(e,r)}),[e,r])},Xe=je.oneOfType([je.func,je.arrayOf(je.string),je.shape({scheme:je.oneOf(Be).isRequired,size:je.number}),je.shape({datum:je.string.isRequired}),je.string]),Ye=je.oneOfType([je.string,je.func,je.shape({theme:je.string.isRequired}),je.shape({from:je.string.isRequired,modifiers:je.arrayOf(je.array)})]),Ze={scheme:"turbo"},er=function(e,r){var n=e.minValue,t=e.maxValue,o=void 0!==n?n:r.min,i=void 0!==t?t:r.max,u=ze().domain([o,i]).clamp(!0);if("colors"in e)u.range(e.colors);else if("interpolator"in e)u.interpolator(e.interpolator);else{var a,l=null!=(a=e.scheme)?a:Ze.scheme;u.interpolator(Le[l])}return u},rr=function(e,r){return _e((function(){return er(e,r)}),[e,r])},nr={scheme:"red_yellow_blue",divergeAt:.5},tr=function(e,r){var n,t=e.minValue,o=e.maxValue,i=void 0!==t?t:r.min,u=void 0!==o?o:r.max,a=[i,i+(u-i)/2,u],l=.5-(null!=(n=e.divergeAt)?n:nr.divergeAt),s=Ae().domain(a).clamp(!0),c=function(e){return String(e)};if("colors"in e)c=Ae().domain(a.map((function(e){return e-l*(u-i)}))).range(e.colors).interpolator();else if("interpolator"in e)c=e.interpolator;else{var f,p=null!=(f=e.scheme)?f:nr.scheme;c=Le[p]}return s.interpolator((function(e){return c(e+l)}))},or=function(e,r){return _e((function(){return tr(e,r)}),[e,r])},ir={scheme:"turbo",steps:7},ur=function(e,r){var n=Ee().domain(e.domain||[r.min,r.max]).nice();if("colors"in e)n.range(e.colors);else{var t=e.scheme||ir.scheme,o=void 0===e.steps?ir.steps:e.steps,i=Le[t],u=Array.from({length:o}).map((function(e,r){return i(r*(1/(o-1)))}));n.range(u)}return n},ar=function(e,r){return _e((function(){return ur(e,r)}),[e,r])},lr=function(e,r){if(function(e){return"sequential"===e.type}(e))return er(e,r);if(function(e){return"diverging"===e.type}(e))return tr(e,r);if(function(e){return"quantize"===e.type}(e))return ur(e,r);throw new Error("Invalid continuous color scale config")},sr=function(e,r){return _e((function(){return lr(e,r)}),[e,r])},cr=function(e,r){void 0===r&&(r=16);var n=e.domain();if("thresholds"in e){var t=[],o=xe().domain(n).range([0,1]);return e.range().forEach((function(r,n){var i=e.invertExtent(r),u=i[0],a=i[1];t.push({key:n+".0",offset:o(u),stopColor:r}),t.push({key:n+".1",offset:o(a),stopColor:r})})),t}var i=e.copy();return 2===n.length?i.domain([0,1]):3===n.length&&i.domain([0,.5,1]),i.ticks(r).map((function(e){return{key:""+e,offset:e,stopColor:""+i(e)}}))},fr=function(e,r){if("function"==typeof e)return e;var n="function"==typeof r?r:function(e){return we(e,r)};if(Array.isArray(e)){var t=Ie(e),o=function(e){return t(n(e))};return o.scale=t,o}if(Oe(e)){if(function(e){return void 0!==e.datum}(e))return function(r){return we(r,e.datum)};if(function(e){return void 0!==e.scheme}(e)){if(Fe(e.scheme)){var i=Ie($e[e.scheme]),u=function(e){return i(n(e))};return u.scale=i,u}if(He(e.scheme)){if(void 0!==e.size&&(e.size<3||e.size>11))throw new Error("Invalid size '"+e.size+"' for diverging color scheme '"+e.scheme+"', must be between 3~11");var a=Ie($e[e.scheme][e.size||11]),l=function(e){return a(n(e))};return l.scale=a,l}if(Je(e.scheme)){if(void 0!==e.size&&(e.size<3||e.size>9))throw new Error("Invalid size '"+e.size+"' for sequential color scheme '"+e.scheme+"', must be between 3~9");var s=Ie($e[e.scheme][e.size||9]),c=function(e){return s(n(e))};return c.scale=s,c}}throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property")}return function(){return e}},pr=function(e,r){return _e((function(){return fr(e,r)}),[e,r])};
//# sourceMappingURL=nivo-colors.es.js.map
