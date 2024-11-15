module.export({HeatMap:()=>se,HeatMapCanvas:()=>pe,ResponsiveHeatMap:()=>he,ResponsiveHeatMapCanvas:()=>ye,canvasDefaultProps:()=>D,commonDefaultProps:()=>j,computeCells:()=>J,computeLayout:()=>_,computeSizeScale:()=>K,getCellAnnotationDimensions:()=>Q,getCellAnnotationPosition:()=>N,svgDefaultProps:()=>H,useCellAnnotations:()=>te,useComputeCells:()=>U,useHeatMap:()=>ee});let e,t,i,o,n,r,a,l;module.link("react",{memo(v){e=v},useMemo(v){t=v},useState(v){i=v},useCallback(v){o=v},createElement(v){n=v},Fragment(v){r=v},useRef(v){a=v},useEffect(v){l=v}},0);let d,c,u,s,h,v,f,g,b,p;module.link("@nivo/core",{useTheme(v){d=v},useValueFormatter(v){c=v},usePropertyAccessor(v){u=v},useMotionConfig(v){s=v},Container(v){h=v},useDimensions(_v){v=_v},SvgWrapper(v){f=v},ResponsiveWrapper(v){g=v},getRelativeCursor(v){b=v},isCursorInRect(v){p=v}},1);let y,m,x,C;module.link("@nivo/axes",{Grid(v){y=v},Axes(v){m=v},renderGridLinesToCanvas(v){x=v},renderAxesToCanvas(v){C=v}},2);let w,P;module.link("@nivo/legends",{AnchoredContinuousColorsLegendSvg(v){w=v},renderContinuousColorLegendToCanvas(v){P=v}},3);let O,I;module.link("@nivo/colors",{getContinuousColorScale(v){O=v},useInheritedColor(v){I=v}},4);let S,M,T,W;module.link("@nivo/annotations",{useAnnotations(v){S=v},Annotation(v){M=v},useComputedAnnotations(v){T=v},renderAnnotationsToCanvas(v){W=v}},5);let L,k;module.link("@nivo/tooltip",{BasicTooltip(v){L=v},useTooltip(v){k=v}},6);let V,R,B;module.link("react/jsx-runtime",{jsx(v){V=v},jsxs(v){R=v},Fragment(v){B=v}},7);let q,E;module.link("d3-scale",{scaleBand(v){q=v},scaleLinear(v){E=v}},8);let z;module.link("@nivo/scales",{castBandScale(v){z=v}},9);let A,F,X;module.link("@react-spring/web",{animated(v){A=v},to(v){F=v},useTransition(v){X=v}},10);function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Y.apply(this,arguments)}function G(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}var j={layers:["grid","axes","cells","legends","annotations"],forceSquare:!1,xInnerPadding:0,xOuterPadding:0,yInnerPadding:0,yOuterPadding:0,sizeVariation:!1,opacity:1,activeOpacity:1,inactiveOpacity:.15,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.8]]},enableGridX:!1,enableGridY:!1,enableLabels:!0,label:"formattedValue",labelTextColor:{from:"color",modifiers:[["darker",2]]},colors:{type:"sequential",scheme:"brown_blueGreen"},emptyColor:"#000000",legends:[],annotations:[],isInteractive:!0,hoverTarget:"rowColumn",tooltip:e((function(e){var t=e.cell;return null===t.formattedValue?null:V(L,{id:t.serieId+" - "+t.data.x,value:t.formattedValue,enableChip:!0,color:t.color})})),animate:!0,motionConfig:"gentle"},H=Y({},j,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},borderRadius:0,cellComponent:"rect"}),D=Y({},j,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},renderCell:"rect",pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),_=function(e){var t=e.width,i=e.height,o=e.rows,n=e.columns,r=t,a=i,l=0,d=0;if(e.forceSquare){var c=Math.max(t/n,0),u=Math.max(i/o,0),s=Math.min(c,u);l=(t-(r=s*n))/2,d=(i-(a=s*o))/2}return{offsetX:l,offsetY:d,width:r,height:a}},J=function(e){var t=e.data,i=e.width,o=e.height,n=e.xInnerPadding,r=e.xOuterPadding,a=e.yInnerPadding,l=e.yOuterPadding,d=e.forceSquare,c=new Set,u=[],s=[],h=[];t.forEach((function(e){u.push(e.id),e.data.forEach((function(t){c.add(t.x);var i=null;void 0!==t.y&&null!==t.y&&(s.push(t.y),i=t.y),h.push({id:e.id+"."+t.x,serieId:e.id,value:i,data:t})}))}));var v=Array.from(c),f=_({width:i,height:o,columns:v.length,rows:u.length,forceSquare:d}),g=f.width,b=f.height,p=f.offsetX,y=f.offsetY,m=z(q().domain(v).range([0,g]).paddingOuter(r).paddingInner(n)),x=z(q().domain(u).range([0,b]).paddingOuter(l).paddingInner(a)),C=m.bandwidth(),w=x.bandwidth(),P=h.map((function(e){return Y({},e,{x:m(e.data.x)+C/2,y:x(e.serieId)+w/2,width:C,height:w})}));return{width:g,height:b,offsetX:p,offsetY:y,xScale:m,yScale:x,minValue:Math.min.apply(Math,s),maxValue:Math.max.apply(Math,s),cells:P}},K=function(e,t,i){if(!e)return function(){return 1};var o=E().domain(e.values?e.values:[t,i]).range(e.sizes);return function(e){return null===e?1:o(e)}},N=function(e){return{x:e.x,y:e.y}},Q=function(e){return{size:Math.max(e.width,e.height),width:e.width,height:e.height}},U=function(e){var i=e.data,o=e.width,n=e.height,r=e.xInnerPadding,a=e.xOuterPadding,l=e.yInnerPadding,d=e.yOuterPadding,c=e.forceSquare;return t((function(){return J({data:i,width:o,height:n,xInnerPadding:r,xOuterPadding:a,yInnerPadding:l,yOuterPadding:d,forceSquare:c})}),[i,o,n,r,a,l,d,c])},Z={cell:function(e,t){return e.id===t.id},row:function(e,t){return e.serieId===t.serieId},column:function(e,t){return e.data.x===t.data.x},rowColumn:function(e,t){return e.serieId===t.serieId||e.data.x===t.data.x}},$=function(e){var i,n,r,a=e.cells,l=e.minValue,s=e.maxValue,h=e.sizeVariation,v=e.colors,f=e.emptyColor,g=e.opacity,b=e.activeOpacity,p=e.inactiveOpacity,y=e.borderColor,m=e.label,x=e.labelTextColor,C=e.valueFormat,w=e.activeIds,P=t((function(){return K(i,n,r)}),[i=h,n=l,r=s]),S=t((function(){return"function"==typeof v?null:O(v,{min:l,max:s})}),[v,l,s]),M=o((function(e){if(null!==e.value){if("function"==typeof v)return v(e);if(null!==S)return S(e.value)}return f}),[v,S,f]),T=d(),W=I(y,T),L=I(x,T),k=c(C),V=u(m);return{cells:t((function(){return a.map((function(e){var t=g;w.length>0&&(t=w.includes(e.id)?b:p);var i=P(e.value),o=Y({},e,{width:e.width*i,height:e.height*i,formattedValue:null!==e.value?k(e.value):null,opacity:t});return o.label=V(o),o.color=M(o),o.borderColor=W(o),o.labelTextColor=L(o),o}))}),[a,P,M,W,L,k,V,w,g,b,p]),colorScale:S}},ee=function(e){var o=e.data,n=e.valueFormat,r=e.width,a=e.height,l=e.xOuterPadding,d=void 0===l?j.xOuterPadding:l,c=e.xInnerPadding,u=void 0===c?j.xInnerPadding:c,s=e.yOuterPadding,h=void 0===s?j.yOuterPadding:s,v=e.yInnerPadding,f=void 0===v?j.yInnerPadding:v,g=e.forceSquare,b=void 0===g?j.forceSquare:g,p=e.sizeVariation,y=void 0===p?j.sizeVariation:p,m=e.colors,x=void 0===m?j.colors:m,C=e.emptyColor,w=void 0===C?j.emptyColor:C,P=e.opacity,O=void 0===P?j.opacity:P,I=e.activeOpacity,S=void 0===I?j.activeOpacity:I,M=e.inactiveOpacity,T=void 0===M?j.inactiveOpacity:M,W=e.borderColor,L=void 0===W?j.borderColor:W,k=e.label,V=void 0===k?j.label:k,R=e.labelTextColor,B=void 0===R?j.labelTextColor:R,q=e.hoverTarget,E=void 0===q?j.hoverTarget:q,z=i(null),A=z[0],F=z[1],X=U({data:o,width:r,height:a,xOuterPadding:d,xInnerPadding:u,yOuterPadding:h,yInnerPadding:f,forceSquare:b}),Y=X.width,G=X.height,H=X.offsetX,D=X.offsetY,_=X.cells,J=X.xScale,K=X.yScale,N=X.minValue,Q=X.maxValue,ee=t((function(){if(!A)return[];var e=Z[E];return _.filter((function(t){return e(t,A)})).map((function(e){return e.id}))}),[_,A,E]),te=$({cells:_,minValue:N,maxValue:Q,sizeVariation:y,colors:x,emptyColor:w,opacity:O,activeOpacity:S,inactiveOpacity:T,borderColor:L,label:V,labelTextColor:B,valueFormat:n,activeIds:ee});return{width:Y,height:G,offsetX:H,offsetY:D,cells:te.cells,xScale:J,yScale:K,colorScale:te.colorScale,activeCell:A,setActiveCell:F}},te=function(e,t){return S({data:e,annotations:t,getPosition:N,getDimensions:Q})},ie=e((function(e){var i=e.cell,o=e.borderWidth,n=e.borderRadius,r=e.animatedProps,a=e.onMouseEnter,l=e.onMouseMove,c=e.onMouseLeave,u=e.onClick,s=e.enableLabels,h=d(),v=t((function(){return{onMouseEnter:a?a(i):void 0,onMouseMove:l?l(i):void 0,onMouseLeave:c?c(i):void 0,onClick:u?u(i):void 0}}),[i,a,l,c,u]);return R(A.g,Y({"data-testid":"cell."+i.id,style:{cursor:"pointer"},opacity:r.opacity},v,{transform:F([r.x,r.y,r.scale],(function(e,t,i){return"translate("+e+", "+t+") scale("+i+")"})),children:[V(A.rect,{transform:F([r.width,r.height],(function(e,t){return"translate("+-.5*e+", "+-.5*t+")"})),fill:r.color,width:r.width,height:r.height,stroke:r.borderColor,strokeWidth:o,rx:n,ry:n},i.id),s&&V(A.text,{textAnchor:"middle",dominantBaseline:"central",fill:r.labelTextColor,style:Y({},h.labels.text,{fill:void 0,userSelect:"none"}),children:i.label})]}))})),oe=e((function(e){var i=e.cell,o=e.borderWidth,n=e.animatedProps,r=e.onMouseEnter,a=e.onMouseMove,l=e.onMouseLeave,c=e.onClick,u=e.enableLabels,s=d(),h=t((function(){return{onMouseEnter:r?r(i):void 0,onMouseMove:a?a(i):void 0,onMouseLeave:l?l(i):void 0,onClick:c?c(i):void 0}}),[i,r,a,l,c]);return R(A.g,Y({"data-testid":"cell."+i.id,style:{cursor:"pointer"},opacity:n.opacity},h,{transform:F([n.x,n.y],(function(e,t){return"translate("+e+", "+t+")"})),children:[V(A.circle,{r:F([n.width,n.height],(function(e,t){return Math.min(e,t)/2})),fill:n.color,fillOpacity:n.opacity,strokeWidth:o,stroke:n.borderColor}),u&&V(A.text,{dominantBaseline:"central",textAnchor:"middle",fill:n.labelTextColor,style:Y({},s.labels.text,{fill:void 0}),children:i.label})]}))})),ne=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:0}},re=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:e.opacity,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:1}},ae=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:0}},le=function(e){var i,o=e.cells,r=e.cellComponent,a=e.borderRadius,l=e.borderWidth,d=e.isInteractive,c=e.setActiveCell,u=e.onMouseEnter,h=e.onMouseMove,v=e.onMouseLeave,f=e.onClick,g=e.tooltip,b=e.enableLabels,p=s(),y=p.animate,m=p.config,x=X(o,{keys:function(e){return e.id},initial:re,from:ne,enter:re,update:re,leave:ae,config:m,immediate:!y}),C=k(),w=C.showTooltipFromEvent,P=C.hideTooltip,O=t((function(){if(d)return function(e){return function(t){w(n(g,{cell:e}),t),c(e),null==u||u(e,t)}}}),[d,w,g,c,u]),I=t((function(){if(d)return function(e){return function(t){w(n(g,{cell:e}),t),null==h||h(e,t)}}}),[d,w,g,h]),S=t((function(){if(d)return function(e){return function(t){P(),c(null),null==v||v(e,t)}}}),[d,P,c,v]),M=t((function(){if(d)return function(e){return function(t){null==f||f(e,t)}}}),[d,f]);return i="rect"===r?ie:"circle"===r?oe:r,V(B,{children:x((function(e,t){return n(i,{cell:t,borderRadius:a,borderWidth:l,animatedProps:e,enableLabels:b,onMouseEnter:O,onMouseMove:I,onMouseLeave:S,onClick:M})}))})},de=function(e){var t=e.cells,i=e.annotations,o=te(t,i);return V(B,{children:o.map((function(e,t){return V(M,Y({},e),t)}))})},ce=["isInteractive","animate","motionConfig","theme","renderWrapper"],ue=function(e){var i=e.data,o=e.layers,a=void 0===o?H.layers:o,l=e.valueFormat,d=e.width,c=e.height,u=e.margin,s=e.forceSquare,h=void 0===s?H.forceSquare:s,g=e.xInnerPadding,b=void 0===g?H.xInnerPadding:g,p=e.xOuterPadding,x=void 0===p?H.xOuterPadding:p,C=e.yInnerPadding,P=void 0===C?H.yInnerPadding:C,O=e.yOuterPadding,I=void 0===O?H.yOuterPadding:O,S=e.sizeVariation,M=void 0===S?H.sizeVariation:S,T=e.cellComponent,W=void 0===T?H.cellComponent:T,L=e.opacity,k=void 0===L?H.opacity:L,R=e.activeOpacity,B=void 0===R?H.activeOpacity:R,q=e.inactiveOpacity,E=void 0===q?H.inactiveOpacity:q,z=e.borderRadius,A=void 0===z?H.borderRadius:z,F=e.borderWidth,X=void 0===F?H.borderWidth:F,G=e.borderColor,j=void 0===G?H.borderColor:G,D=e.enableGridX,_=void 0===D?H.enableGridX:D,J=e.enableGridY,K=void 0===J?H.enableGridY:J,N=e.axisTop,Q=void 0===N?H.axisTop:N,U=e.axisRight,Z=void 0===U?H.axisRight:U,$=e.axisBottom,te=void 0===$?H.axisBottom:$,ie=e.axisLeft,oe=void 0===ie?H.axisLeft:ie,ne=e.enableLabels,re=void 0===ne?H.enableLabels:ne,ae=e.label,ce=void 0===ae?H.label:ae,ue=e.labelTextColor,se=void 0===ue?H.labelTextColor:ue,he=e.colors,ve=void 0===he?H.colors:he,fe=e.emptyColor,ge=void 0===fe?H.emptyColor:fe,be=e.legends,pe=void 0===be?H.legends:be,ye=e.annotations,me=void 0===ye?H.annotations:ye,xe=e.isInteractive,Ce=void 0===xe?H.isInteractive:xe,we=e.onMouseEnter,Pe=e.onMouseMove,Oe=e.onMouseLeave,Ie=e.onClick,Se=e.hoverTarget,Me=void 0===Se?H.hoverTarget:Se,Te=e.tooltip,We=void 0===Te?H.tooltip:Te,Le=e.role,ke=e.ariaLabel,Ve=e.ariaLabelledBy,Re=e.ariaDescribedBy,Be=v(d,c,u),qe=Be.margin,Ee=Be.innerWidth,ze=Be.innerHeight,Ae=Be.outerWidth,Fe=Be.outerHeight,Xe=ee({data:i,valueFormat:l,width:Ee,height:ze,forceSquare:h,xInnerPadding:b,xOuterPadding:x,yInnerPadding:P,yOuterPadding:I,sizeVariation:M,colors:ve,emptyColor:ge,opacity:k,activeOpacity:B,inactiveOpacity:E,borderColor:j,label:ce,labelTextColor:se,hoverTarget:Me}),Ye=Xe.width,Ge=Xe.height,je=Xe.offsetX,He=Xe.offsetY,De=Xe.xScale,_e=Xe.yScale,Je=Xe.cells,Ke=Xe.colorScale,Ne=Xe.activeCell,Qe=Xe.setActiveCell,Ue=t((function(){return Y({},qe,{top:qe.top+He,left:qe.left+je})}),[qe,je,He]),Ze={grid:null,axes:null,cells:null,legends:null,annotations:null};a.includes("grid")&&(Ze.grid=V(y,{width:Ye,height:Ge,xScale:_?De:null,yScale:K?_e:null},"grid")),a.includes("axes")&&(Ze.axes=V(m,{xScale:De,yScale:_e,width:Ye,height:Ge,top:Q,right:Z,bottom:te,left:oe},"axes")),a.includes("cells")&&(Ze.cells=V(r,{children:V(le,{cells:Je,cellComponent:W,borderRadius:A,borderWidth:X,isInteractive:Ce,setActiveCell:Qe,onMouseEnter:we,onMouseMove:Pe,onMouseLeave:Oe,onClick:Ie,tooltip:We,enableLabels:re})},"cells")),a.includes("legends")&&null!==Ke&&(Ze.legends=V(r,{children:pe.map((function(e,t){return n(w,Y({},e,{key:t,containerWidth:Ye,containerHeight:Ge,scale:Ke}))}))},"legends")),a.includes("annotations")&&me.length>0&&(Ze.annotations=V(de,{cells:Je,annotations:me},"annotations"));var $e={cells:Je,activeCell:Ne,setActiveCell:Qe};return V(f,{width:Ae,height:Fe,margin:Object.assign({},Ue,{top:Ue.top,left:Ue.left}),role:Le,ariaLabel:ke,ariaLabelledBy:Ve,ariaDescribedBy:Re,children:a.map((function(e,t){var i;return"function"==typeof e?V(r,{children:n(e,$e)},t):null!=(i=null==Ze?void 0:Ze[e])?i:null}))})},se=function(e){var t=e.isInteractive,i=void 0===t?H.isInteractive:t,o=e.animate,n=void 0===o?H.animate:o,r=e.motionConfig,a=void 0===r?H.motionConfig:r,l=e.theme,d=e.renderWrapper,c=G(e,ce);return V(h,{animate:n,isInteractive:i,motionConfig:a,renderWrapper:d,theme:l,children:V(ue,Y({isInteractive:i},c))})},he=function(e){return V(g,{children:function(t){var i=t.width,o=t.height;return V(se,Y({width:i,height:o},e))}})},ve=function(e,t){var i=t.cell,o=i.x,n=i.y,r=i.width,a=i.height,l=i.color,d=i.borderColor,c=i.opacity,u=i.labelTextColor,s=i.label,h=t.borderWidth,v=t.enableLabels,f=t.theme;e.save(),e.globalAlpha=c,e.fillStyle=l,h>0&&(e.strokeStyle=d,e.lineWidth=h),e.fillRect(o-r/2,n-a/2,r,a),h>0&&e.strokeRect(o-r/2,n-a/2,r,a),v&&(e.fillStyle=u,e.font=(f.labels.text.fontWeight?f.labels.text.fontWeight+" ":"")+f.labels.text.fontSize+"px "+f.labels.text.fontFamily,e.textAlign="center",e.textBaseline="middle",e.fillText(s,o,n)),e.restore()},fe=function(e,t){var i=t.cell,o=i.x,n=i.y,r=i.width,a=i.height,l=i.color,d=i.borderColor,c=i.opacity,u=i.labelTextColor,s=i.label,h=t.borderWidth,v=t.enableLabels,f=t.theme;e.save(),e.globalAlpha=c;var g=Math.min(r,a)/2;e.fillStyle=l,h>0&&(e.strokeStyle=d,e.lineWidth=h),e.beginPath(),e.arc(o,n,g,0,2*Math.PI),e.fill(),h>0&&e.stroke(),v&&(e.fillStyle=u,e.font=(f.labels.text.fontWeight?f.labels.text.fontWeight+" ":"")+f.labels.text.fontSize+"px "+f.labels.text.fontFamily,e.textAlign="center",e.textBaseline="middle",e.fillText(s,o,n)),e.restore()},ge=["theme","isInteractive","animate","motionConfig","renderWrapper"],be=function(e){var i,r=e.data,c=e.layers,u=void 0===c?D.layers:c,s=e.valueFormat,h=e.width,f=e.height,g=e.margin,y=e.xInnerPadding,m=void 0===y?D.xInnerPadding:y,w=e.xOuterPadding,O=void 0===w?D.xOuterPadding:w,I=e.yInnerPadding,S=void 0===I?D.yInnerPadding:I,M=e.yOuterPadding,L=void 0===M?D.yOuterPadding:M,R=e.forceSquare,B=void 0===R?D.forceSquare:R,q=e.sizeVariation,E=void 0===q?D.sizeVariation:q,z=e.renderCell,A=void 0===z?D.renderCell:z,F=e.opacity,X=void 0===F?D.opacity:F,G=e.activeOpacity,j=void 0===G?D.activeOpacity:G,H=e.inactiveOpacity,_=void 0===H?D.inactiveOpacity:H,J=e.borderWidth,K=void 0===J?D.borderWidth:J,N=e.borderColor,Q=void 0===N?D.borderColor:N,U=e.enableGridX,Z=void 0===U?D.enableGridX:U,$=e.enableGridY,ie=void 0===$?D.enableGridY:$,oe=e.axisTop,ne=void 0===oe?D.axisTop:oe,re=e.axisRight,ae=void 0===re?D.axisRight:re,le=e.axisBottom,de=void 0===le?D.axisBottom:le,ce=e.axisLeft,ue=void 0===ce?D.axisLeft:ce,se=e.enableLabels,he=void 0===se?D.enableLabels:se,ge=e.label,be=void 0===ge?D.label:ge,pe=e.labelTextColor,ye=void 0===pe?D.labelTextColor:pe,me=e.colors,xe=void 0===me?D.colors:me,Ce=e.emptyColor,we=void 0===Ce?D.emptyColor:Ce,Pe=e.legends,Oe=void 0===Pe?D.legends:Pe,Ie=e.annotations,Se=void 0===Ie?D.annotations:Ie,Me=e.isInteractive,Te=void 0===Me?D.isInteractive:Me,We=e.onClick,Le=e.hoverTarget,ke=void 0===Le?D.hoverTarget:Le,Ve=e.tooltip,Re=void 0===Ve?D.tooltip:Ve,Be=e.role,qe=e.ariaLabel,Ee=e.ariaLabelledBy,ze=e.ariaDescribedBy,Ae=e.pixelRatio,Fe=void 0===Ae?D.pixelRatio:Ae,Xe=a(null),Ye=v(h,f,g),Ge=Ye.margin,je=Ye.innerWidth,He=Ye.innerHeight,De=Ye.outerWidth,_e=Ye.outerHeight,Je=ee({data:r,valueFormat:s,width:je,height:He,xInnerPadding:m,xOuterPadding:O,yInnerPadding:S,yOuterPadding:L,forceSquare:B,sizeVariation:E,colors:xe,emptyColor:we,opacity:X,activeOpacity:j,inactiveOpacity:_,borderColor:Q,label:be,labelTextColor:ye,hoverTarget:ke}),Ke=Je.width,Ne=Je.height,Qe=Je.offsetX,Ue=Je.offsetY,Ze=Je.xScale,$e=Je.yScale,et=Je.cells,tt=Je.colorScale,it=Je.activeCell,ot=Je.setActiveCell,nt=t((function(){return Y({},Ge,{top:Ge.top+Ue,left:Ge.left+Qe})}),[Ge,Qe,Ue]),rt=te(et,Se),at=T({annotations:rt});i="function"==typeof A?A:"circle"===A?fe:ve;var lt=d(),dt=t((function(){return{cells:et,activeCell:it,setActiveCell:ot}}),[et,it,ot]);l((function(){if(null!==Xe.current){var e=Xe.current.getContext("2d");e&&(Xe.current.width=De*Fe,Xe.current.height=_e*Fe,e.scale(Fe,Fe),e.fillStyle=lt.background,e.fillRect(0,0,De,_e),e.translate(nt.left,nt.top),u.forEach((function(t){"grid"===t?(e.lineWidth=lt.grid.line.strokeWidth,e.strokeStyle=lt.grid.line.stroke,Z&&x(e,{width:Ke,height:Ne,scale:Ze,axis:"x"}),ie&&x(e,{width:Ke,height:Ne,scale:$e,axis:"y"})):"axes"===t?C(e,{xScale:Ze,yScale:$e,width:Ke,height:Ne,top:ne,right:ae,bottom:de,left:ue,theme:lt}):"cells"===t?(e.textAlign="center",e.textBaseline="middle",et.forEach((function(t){i(e,{cell:t,borderWidth:K,enableLabels:he,theme:lt})}))):"legends"===t&&null!==tt?Oe.forEach((function(t){P(e,Y({},t,{containerWidth:Ke,containerHeight:Ne,scale:tt,theme:lt}))})):"annotations"===t?W(e,{annotations:at,theme:lt}):"function"==typeof t&&t(e,dt)})))}}),[Xe,Fe,De,_e,Ke,Ne,nt,u,dt,et,i,Z,ie,ne,ae,de,ue,Ze,$e,lt,K,he,tt,Oe,at]);var ct=k(),ut=ct.showTooltipFromEvent,st=ct.hideTooltip,ht=o((function(e){if(null!==Xe.current){var t=b(Xe.current,e),i=t[0],o=t[1],r=et.find((function(e){return p(e.x+nt.left-e.width/2,e.y+nt.top-e.height/2,e.width,e.height,i,o)}));void 0!==r?(ot(r),ut(n(Re,{cell:r}),e)):(ot(null),st())}}),[Xe,et,nt,ot,ut,st,Re]),vt=o((function(){ot(null),st()}),[ot,st]),ft=o((function(e){null!==it&&(null==We||We(it,e))}),[it,We]);return V("canvas",{ref:Xe,width:De*Fe,height:_e*Fe,style:{width:De,height:_e},onMouseEnter:Te?ht:void 0,onMouseMove:Te?ht:void 0,onMouseLeave:Te?vt:void 0,onClick:Te?ft:void 0,role:Be,"aria-label":qe,"aria-labelledby":Ee,"aria-describedby":ze})},pe=function(e){var t=e.theme,i=e.isInteractive,o=void 0===i?D.isInteractive:i,n=e.animate,r=void 0===n?D.animate:n,a=e.motionConfig,l=void 0===a?D.motionConfig:a,d=e.renderWrapper,c=G(e,ge);return V(h,{isInteractive:o,animate:r,motionConfig:l,theme:t,renderWrapper:d,children:V(be,Y({isInteractive:o},c))})},ye=function(e){return V(g,{children:function(t){var i=t.width,o=t.height;return V(pe,Y({width:i,height:o},e))}})};
//# sourceMappingURL=nivo-heatmap.es.js.map
