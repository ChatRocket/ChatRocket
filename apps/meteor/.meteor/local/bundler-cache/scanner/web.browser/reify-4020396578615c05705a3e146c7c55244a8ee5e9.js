module.export({Line:()=>Ge,LineCanvas:()=>Fe,LineCanvasDefaultProps:()=>fe,LineCanvasPropTypes:()=>ue,LineDefaultProps:()=>ce,LinePropTypes:()=>le,ResponsiveLine:()=>Pe,ResponsiveLineCanvas:()=>Ve,useAreaGenerator:()=>he,useLine:()=>be,useLineGenerator:()=>pe,useSlices:()=>ye});let e,i,r,n,o,t,a,s,l;module.link("react",{memo(v){e=v},useMemo(v){i=v},useState(v){r=v},useCallback(v){n=v},createElement(v){o=v},Fragment(v){t=v},forwardRef(v){a=v},useRef(v){s=v},useEffect(v){l=v}},0);let u,d,c,f,p,h,y,b,g,m,v,x,R,q,O,M,C,S,T;module.link("@nivo/core",{useTheme(v){u=v},lineCurvePropType(v){d=v},blendModePropType(v){c=v},motionPropTypes(v){f=v},defsPropTypes(v){p=v},curveFromProp(v){h=v},useValueFormatter(v){y=v},useMotionConfig(v){b=v},useAnimatedPath(v){g=v},getLabelGenerator(v){m=v},DotsItem(_v){v=_v},withContainer(v){x=v},useDimensions(v){R=v},CartesianMarkers(v){q=v},bindDefs(v){O=v},SvgWrapper(v){M=v},ResponsiveWrapper(v){C=v},getRelativeCursor(v){S=v},isCursorInRect(v){T=v}},1);let w,k,B;module.link("@nivo/colors",{ordinalColorsPropType(v){w=v},useOrdinalColorScale(v){k=v},useInheritedColor(v){B=v}},2);let L,W,G,P,E;module.link("@nivo/axes",{axisPropType(v){L=v},Grid(v){W=v},Axes(v){G=v},renderGridLinesToCanvas(v){P=v},renderAxesToCanvas(v){E=v}},3);let j,F,V;module.link("@nivo/legends",{LegendPropShape(v){j=v},BoxLegendSvg(v){F=v},renderLegendToCanvas(v){V=v}},4);let Y,D,X,z,A;module.link("@nivo/tooltip",{BasicTooltip(v){Y=v},TableTooltip(v){D=v},Chip(v){X=v},useTooltip(v){z=v},Crosshair(v){A=v}},5);let H,I;module.link("d3-shape",{line(v){H=v},area(v){I=v}},6);let J;module.link("@nivo/scales",{computeXYScalesForSeries(v){J=v}},7);let K;module.link("prop-types",{default(v){K=v}},8);let N,Q;module.link("react/jsx-runtime",{jsx(v){N=v},jsxs(v){Q=v}},9);let U,Z;module.link("@react-spring/web",{useSpring(v){U=v},animated(v){Z=v}},10);let $,_,ee,ie;module.link("@nivo/voronoi",{Mesh(v){$=v},useVoronoiMesh(v){_=v},renderVoronoiToCanvas(v){ee=v},renderVoronoiCellToCanvas(v){ie=v}},11);function re(){return re=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},re.apply(this,arguments)}var ne=function(e){var i=e.point;return N(Y,{id:Q("span",{children:["x: ",N("strong",{children:i.data.xFormatted}),", y:"," ",N("strong",{children:i.data.yFormatted})]}),enableChip:!0,color:i.serieColor})};ne.propTypes={point:K.object.isRequired};var oe=e(ne),te=function(e){var i=e.slice,r=e.axis,n=u(),o="x"===r?"y":"x";return N(D,{rows:i.points.map((function(e){return[N(X,{color:e.serieColor,style:n.tooltip.chip},"chip"),e.serieId,N("span",{style:n.tooltip.tableCellValue,children:e.data[o+"Formatted"]},"value")]}))})};te.propTypes={slice:K.object.isRequired,axis:K.oneOf(["x","y"]).isRequired};var ae=e(te),se={data:K.arrayOf(K.shape({id:K.oneOfType([K.string,K.number]).isRequired,data:K.arrayOf(K.shape({x:K.oneOfType([K.number,K.string,K.instanceOf(Date)]),y:K.oneOfType([K.number,K.string,K.instanceOf(Date)])})).isRequired})).isRequired,xScale:K.object.isRequired,xFormat:K.oneOfType([K.func,K.string]),yScale:K.object.isRequired,yFormat:K.oneOfType([K.func,K.string]),layers:K.arrayOf(K.oneOfType([K.oneOf(["grid","markers","axes","areas","crosshair","lines","slices","points","mesh","legends"]),K.func])).isRequired,curve:d.isRequired,axisTop:L,axisRight:L,axisBottom:L,axisLeft:L,enableGridX:K.bool.isRequired,enableGridY:K.bool.isRequired,gridXValues:K.oneOfType([K.number,K.arrayOf(K.oneOfType([K.number,K.string,K.instanceOf(Date)]))]),gridYValues:K.oneOfType([K.number,K.arrayOf(K.oneOfType([K.number,K.string,K.instanceOf(Date)]))]),enablePoints:K.bool.isRequired,pointSymbol:K.func,pointSize:K.number.isRequired,pointColor:K.any.isRequired,pointBorderWidth:K.number.isRequired,pointBorderColor:K.any.isRequired,enablePointLabel:K.bool.isRequired,pointLabel:K.oneOfType([K.string,K.func]).isRequired,markers:K.arrayOf(K.shape({axis:K.oneOf(["x","y"]).isRequired,value:K.oneOfType([K.number,K.string,K.instanceOf(Date)]).isRequired,style:K.object})),colors:w.isRequired,enableArea:K.bool.isRequired,areaOpacity:K.number.isRequired,areaBlendMode:c.isRequired,areaBaselineValue:K.oneOfType([K.number,K.string,K.instanceOf(Date)]).isRequired,lineWidth:K.number.isRequired,legends:K.arrayOf(K.shape(j)).isRequired,isInteractive:K.bool.isRequired,debugMesh:K.bool.isRequired,tooltip:K.oneOfType([K.func,K.object]).isRequired,enableSlices:K.oneOf(["x","y",!1]).isRequired,debugSlices:K.bool.isRequired,sliceTooltip:K.oneOfType([K.func,K.object]).isRequired,enableCrosshair:K.bool.isRequired,crosshairType:K.string.isRequired},le=re({},se,{enablePointLabel:K.bool.isRequired,role:K.string.isRequired,useMesh:K.bool.isRequired},f,p),ue=re({pixelRatio:K.number.isRequired},se),de={curve:"linear",xScale:{type:"point"},yScale:{type:"linear",min:0,max:"auto"},layers:["grid","markers","axes","areas","crosshair","lines","points","slices","mesh","legends"],axisBottom:{},axisLeft:{},enableGridX:!0,enableGridY:!0,enablePoints:!0,pointSize:6,pointColor:{from:"color"},pointBorderWidth:0,pointBorderColor:{theme:"background"},enablePointLabel:!1,pointLabel:"yFormatted",colors:{scheme:"nivo"},enableArea:!1,areaBaselineValue:0,areaOpacity:.2,areaBlendMode:"normal",lineWidth:2,legends:[],isInteractive:!0,tooltip:oe,enableSlices:!1,debugSlices:!1,sliceTooltip:ae,debugMesh:!1,enableCrosshair:!0,crosshairType:"bottom-left"},ce=re({},de,{enablePointLabel:!1,useMesh:!1,animate:!0,motionConfig:"gentle",defs:[],fill:[],role:"img"}),fe=re({},de,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),pe=function(e){var r=e.curve;return i((function(){return H().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y((function(e){return e.y})).curve(h(r))}),[r])},he=function(e){var r=e.curve,n=e.yScale,o=e.areaBaselineValue;return i((function(){return I().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y1((function(e){return e.y})).curve(h(r)).y0(n(o))}),[r,n,o])},ye=function(e){var r=e.enableSlices,n=e.points,o=e.width,t=e.height;return i((function(){if(!1===r)return[];if("x"===r){var e=new Map;return n.forEach((function(i){null!==i.data.x&&null!==i.data.y&&(e.has(i.x)?e.get(i.x).push(i):e.set(i.x,[i]))})),Array.from(e.entries()).sort((function(e,i){return e[0]-i[0]})).map((function(e,i,r){var n,a=e[0],s=e[1],l=r[i-1],u=r[i+1];return{id:a,x0:n=l?a-(a-l[0])/2:a,x:a,y0:0,y:0,width:u?a-n+(u[0]-a)/2:o-n,height:t,points:s.reverse()}}))}if("y"===r){var i=new Map;return n.forEach((function(e){null!==e.data.x&&null!==e.data.y&&(i.has(e.y)?i.get(e.y).push(e):i.set(e.y,[e]))})),Array.from(i.entries()).sort((function(e,i){return e[0]-i[0]})).map((function(e,i,r){var n,a,s=e[0],l=e[1],u=r[i-1],d=r[i+1];return n=u?s-(s-u[0])/2:s,a=d?s-n+(d[0]-s)/2:t-n,{id:s,x0:0,x:0,y0:n,y:s,width:o,height:a,points:l.reverse()}}))}}),[r,n])},be=function(e){var o=e.data,t=e.xScale,a=void 0===t?ce.xScale:t,s=e.xFormat,l=e.yScale,d=void 0===l?ce.yScale:l,c=e.yFormat,f=e.width,p=e.height,h=e.colors,b=void 0===h?ce.colors:h,g=e.curve,m=void 0===g?ce.curve:g,v=e.areaBaselineValue,x=void 0===v?ce.areaBaselineValue:v,R=e.pointColor,q=void 0===R?ce.pointColor:R,O=e.pointBorderColor,M=void 0===O?ce.pointBorderColor:O,C=e.enableSlices,S=void 0===C?ce.enableSlicesTooltip:C,T=y(s),w=y(c),L=k(b,"id"),W=u(),G=B(q,W),P=B(M,W),E=r([]),j=E[0],F=E[1],V=i((function(){return J(o.filter((function(e){return-1===j.indexOf(e.id)})),a,d,f,p)}),[o,j,a,d,f,p]),Y=V.xScale,D=V.yScale,X=V.series,z=i((function(){var e=o.map((function(e){return{id:e.id,label:e.id,color:L(e)}})),i=e.map((function(e){return re({},X.find((function(i){return i.id===e.id})),{color:e.color})})).filter((function(e){return Boolean(e.id)}));return{legendData:e.map((function(e){return re({},e,{hidden:!i.find((function(i){return i.id===e.id}))})})).reverse(),series:i}}),[o,X,L]),A=z.legendData,H=z.series,I=n((function(e){F((function(i){return i.indexOf(e)>-1?i.filter((function(i){return i!==e})):[].concat(i,[e])}))}),[]),K=function(e){var r=e.series,n=e.getPointColor,o=e.getPointBorderColor,t=e.formatX,a=e.formatY;return i((function(){return r.reduce((function(e,i){return[].concat(e,i.data.filter((function(e){return null!==e.position.x&&null!==e.position.y})).map((function(r,s){var l={id:i.id+"."+s,index:e.length+s,serieId:i.id,serieColor:i.color,x:r.position.x,y:r.position.y};return l.color=n(i),l.borderColor=o(l),l.data=re({},r.data,{xFormatted:t(r.data.x),yFormatted:a(r.data.y)}),l})))}),[])}),[r,n,o,t,a])}({series:H,getPointColor:G,getPointBorderColor:P,formatX:T,formatY:w}),N=ye({enableSlices:S,points:K,width:f,height:p});return{legendData:A,toggleSerie:I,lineGenerator:pe({curve:m}),areaGenerator:he({curve:m,yScale:D,areaBaselineValue:x}),getColor:L,series:H,xScale:Y,yScale:D,slices:N,points:K}},ge=function(e){var i=e.areaBlendMode,r=e.areaOpacity,n=e.color,o=e.fill,t=e.path,a=b(),s=a.animate,l=a.config,u=g(t),d=U({color:n,config:l,immediate:!s});return N(Z.path,{d:u,fill:o||d.color,fillOpacity:r,strokeWidth:0,style:{mixBlendMode:i}})};ge.propTypes={areaBlendMode:c.isRequired,areaOpacity:K.number.isRequired,color:K.string,fill:K.string,path:K.string.isRequired};var me=function(e){var i=e.areaGenerator,r=e.areaOpacity,n=e.areaBlendMode,o=e.lines.slice(0).reverse();return N("g",{children:o.map((function(e){return N(ge,re({path:i(e.data.map((function(e){return e.position})))},re({areaOpacity:r,areaBlendMode:n},e)),e.id)}))})};me.propTypes={areaGenerator:K.func.isRequired,areaOpacity:K.number.isRequired,areaBlendMode:c.isRequired,lines:K.arrayOf(K.object).isRequired};var ve=e(me),xe=function(e){var r=e.lineGenerator,n=e.points,o=e.color,t=e.thickness,a=i((function(){return r(n)}),[r,n]),s=g(a);return N(Z.path,{d:s,fill:"none",strokeWidth:t,stroke:o})};xe.propTypes={points:K.arrayOf(K.shape({x:K.oneOfType([K.string,K.number]),y:K.oneOfType([K.string,K.number])})),lineGenerator:K.func.isRequired,color:K.string.isRequired,thickness:K.number.isRequired};var Re=e(xe),qe=function(e){var i=e.lines,r=e.lineGenerator,n=e.lineWidth;return i.slice(0).reverse().map((function(e){var i=e.id,o=e.data,t=e.color;return N(Re,{id:i,points:o.map((function(e){return e.position})),lineGenerator:r,color:t,thickness:n},i)}))};qe.propTypes={lines:K.arrayOf(K.shape({id:K.oneOfType([K.string,K.number]).isRequired,color:K.string.isRequired,data:K.arrayOf(K.shape({data:K.shape({x:K.oneOfType([K.string,K.number,K.instanceOf(Date)]),y:K.oneOfType([K.string,K.number,K.instanceOf(Date)])}).isRequired,position:K.shape({x:K.number,y:K.number}).isRequired})).isRequired})).isRequired,lineWidth:K.number.isRequired,lineGenerator:K.func.isRequired};var Oe=e(qe),Me=function(e){var i=e.slice,r=e.axis,t=e.debug,a=e.tooltip,s=e.isCurrent,l=e.setCurrent,u=e.onMouseEnter,d=e.onMouseMove,c=e.onMouseLeave,f=e.onClick,p=z(),h=p.showTooltipFromEvent,y=p.hideTooltip,b=n((function(e){h(o(a,{slice:i,axis:r}),e,"right"),l(i),u&&u(i,e)}),[h,a,i,u]),g=n((function(e){h(o(a,{slice:i,axis:r}),e,"right"),d&&d(i,e)}),[h,a,i,d]),m=n((function(e){y(),l(null),c&&c(i,e)}),[y,i,c]),v=n((function(e){f&&f(i,e)}),[i,f]);return N("rect",{x:i.x0,y:i.y0,width:i.width,height:i.height,stroke:"red",strokeWidth:t?1:0,strokeOpacity:.75,fill:"red",fillOpacity:s&&t?.35:0,onMouseEnter:b,onMouseMove:g,onMouseLeave:m,onClick:v,"data-testid":"slice-"+i.id})};Me.propTypes={slice:K.object.isRequired,axis:K.oneOf(["x","y"]).isRequired,debug:K.bool.isRequired,height:K.number.isRequired,tooltip:K.oneOfType([K.func,K.object]),isCurrent:K.bool.isRequired,setCurrent:K.func.isRequired,onMouseEnter:K.func,onMouseMove:K.func,onMouseLeave:K.func,onClick:K.func};var Ce=e(Me),Se=function(e){var i=e.slices,r=e.axis,n=e.debug,o=e.height,t=e.tooltip,a=e.current,s=e.setCurrent,l=e.onMouseEnter,u=e.onMouseMove,d=e.onMouseLeave,c=e.onClick;return i.map((function(e){return N(Ce,{slice:e,axis:r,debug:n,height:o,tooltip:t,setCurrent:s,isCurrent:null!==a&&a.id===e.id,onMouseEnter:l,onMouseMove:u,onMouseLeave:d,onClick:c},e.id)}))};Se.propTypes={slices:K.arrayOf(K.shape({id:K.oneOfType([K.number,K.string,K.instanceOf(Date)]).isRequired,x:K.number.isRequired,y:K.number.isRequired,points:K.arrayOf(K.object).isRequired})).isRequired,axis:K.oneOf(["x","y"]).isRequired,debug:K.bool.isRequired,height:K.number.isRequired,tooltip:K.oneOfType([K.func,K.object]).isRequired,current:K.object,setCurrent:K.func.isRequired,onMouseEnter:K.func,onMouseMove:K.func,onMouseLeave:K.func,onClick:K.func};var Te=e(Se),we=function(e){var i=e.points,r=e.symbol,n=e.size,o=e.borderWidth,t=e.enableLabel,a=e.label,s=e.labelYOffset,l=u(),d=m(a),c=i.slice(0).reverse().map((function(e){return{id:e.id,x:e.x,y:e.y,datum:e.data,fill:e.color,stroke:e.borderColor,label:t?d(e.data):null}}));return N("g",{children:c.map((function(e){return N(v,{x:e.x,y:e.y,datum:e.datum,symbol:r,size:n,color:e.fill,borderWidth:o,borderColor:e.stroke,label:e.label,labelYOffset:s,theme:l},e.id)}))})};we.propTypes={points:K.arrayOf(K.object),symbol:K.func,size:K.number.isRequired,color:K.func.isRequired,borderWidth:K.number.isRequired,borderColor:K.func.isRequired,enableLabel:K.bool.isRequired,label:K.oneOfType([K.string,K.func]).isRequired,labelYOffset:K.number};var ke=e(we),Be=function(e){var i=e.points,r=e.width,t=e.height,a=e.margin,s=e.setCurrent,l=e.onMouseEnter,u=e.onMouseMove,d=e.onMouseLeave,c=e.onClick,f=e.tooltip,p=e.debug,h=z(),y=h.showTooltipAt,b=h.hideTooltip,g=n((function(e,i){y(o(f,{point:e}),[e.x+a.left,e.y+a.top],"top"),s(e),l&&l(e,i)}),[s,y,f,l,a]),m=n((function(e,i){y(o(f,{point:e}),[e.x+a.left,e.y+a.top],"top"),s(e),u&&u(e,i)}),[s,y,f,u]),v=n((function(e,i){b(),s(null),d&&d(e,i)}),[b,s,d]),x=n((function(e,i){c&&c(e,i)}),[c]);return N($,{nodes:i,width:r,height:t,onMouseEnter:g,onMouseMove:m,onMouseLeave:v,onClick:x,debug:p})};Be.propTypes={points:K.arrayOf(K.object).isRequired,width:K.number.isRequired,height:K.number.isRequired,margin:K.object.isRequired,setCurrent:K.func.isRequired,onMouseEnter:K.func,onMouseMove:K.func,onMouseLeave:K.func,onClick:K.func,tooltip:K.oneOfType([K.func,K.object]).isRequired,debug:K.bool.isRequired};var Le=e(Be),We=function(e){var i=e.data,n=e.xScale,o=e.xFormat,a=e.yScale,s=e.yFormat,l=e.layers,d=e.curve,c=e.areaBaselineValue,f=e.colors,p=e.margin,h=e.width,y=e.height,b=e.axisTop,g=e.axisRight,m=e.axisBottom,v=e.axisLeft,x=e.enableGridX,C=e.enableGridY,S=e.gridXValues,T=e.gridYValues,w=e.lineWidth,k=e.enableArea,L=e.areaOpacity,P=e.areaBlendMode,E=e.enablePoints,j=e.pointSymbol,V=e.pointSize,Y=e.pointColor,D=e.pointBorderWidth,X=e.pointBorderColor,z=e.enablePointLabel,H=e.pointLabel,I=e.pointLabelYOffset,J=e.defs,K=e.fill,Q=e.markers,U=e.legends,Z=e.isInteractive,$=e.useMesh,_=e.debugMesh,ee=e.onMouseEnter,ie=e.onMouseMove,ne=e.onMouseLeave,oe=e.onClick,te=e.tooltip,ae=e.enableSlices,se=e.debugSlices,le=e.sliceTooltip,ue=e.enableCrosshair,de=e.crosshairType,ce=e.role,fe=R(h,y,p),pe=fe.margin,he=fe.innerWidth,ye=fe.innerHeight,ge=fe.outerWidth,me=fe.outerHeight,xe=be({data:i,xScale:n,xFormat:o,yScale:a,yFormat:s,width:he,height:ye,colors:f,curve:d,areaBaselineValue:c,pointColor:Y,pointBorderColor:X,enableSlices:ae}),Re=xe.legendData,qe=xe.toggleSerie,Me=xe.lineGenerator,Ce=xe.areaGenerator,Se=xe.series,we=xe.xScale,Be=xe.yScale,We=xe.slices,Ge=xe.points,Pe=u(),Ee=B(Y,Pe),je=B(X,Pe),Fe=r(null),Ve=Fe[0],Ye=Fe[1],De=r(null),Xe=De[0],ze=De[1],Ae={grid:N(W,{theme:Pe,width:he,height:ye,xScale:x?we:null,yScale:C?Be:null,xValues:S,yValues:T},"grid"),markers:N(q,{markers:Q,width:he,height:ye,xScale:we,yScale:Be,theme:Pe},"markers"),axes:N(G,{xScale:we,yScale:Be,width:he,height:ye,theme:Pe,top:b,right:g,bottom:m,left:v},"axes"),areas:null,lines:N(Oe,{lines:Se,lineGenerator:Me,lineWidth:w},"lines"),slices:null,points:null,crosshair:null,mesh:null,legends:U.map((function(e,i){return N(F,re({},e,{containerWidth:he,containerHeight:ye,data:e.data||Re,theme:Pe,toggleSerie:e.toggleSerie?qe:void 0}),"legend."+i)}))},He=O(J,Se,K);return k&&(Ae.areas=N(ve,{areaGenerator:Ce,areaOpacity:L,areaBlendMode:P,lines:Se},"areas")),Z&&!1!==ae&&(Ae.slices=N(Te,{slices:We,axis:ae,debug:se,height:ye,tooltip:le,current:Xe,setCurrent:ze,onMouseEnter:ee,onMouseMove:ie,onMouseLeave:ne,onClick:oe},"slices")),E&&(Ae.points=N(ke,{points:Ge,symbol:j,size:V,color:Ee,borderWidth:D,borderColor:je,enableLabel:z,label:H,labelYOffset:I},"points")),Z&&ue&&(null!==Ve&&(Ae.crosshair=N(A,{width:he,height:ye,x:Ve.x,y:Ve.y,type:de},"crosshair")),null!==Xe&&(Ae.crosshair=N(A,{width:he,height:ye,x:Xe.x,y:Xe.y,type:ae},"crosshair"))),Z&&$&&!1===ae&&(Ae.mesh=N(Le,{points:Ge,width:he,height:ye,margin:pe,current:Ve,setCurrent:Ye,onMouseEnter:ee,onMouseMove:ie,onMouseLeave:ne,onClick:oe,tooltip:te,debug:_},"mesh")),N(M,{defs:He,width:ge,height:me,margin:pe,role:ce,children:l.map((function(i,r){return"function"==typeof i?N(t,{children:i(re({},e,{innerWidth:he,innerHeight:ye,series:Se,slices:We,points:Ge,xScale:we,yScale:Be,lineGenerator:Me,areaGenerator:Ce,currentPoint:Ve,setCurrentPoint:Ye,currentSlice:Xe,setCurrentSlice:ze}))},r):Ae[i]}))})};We.propTypes=le,We.defaultProps=ce;var Ge=x(We),Pe=function(e){return N(C,{children:function(i){var r=i.width,n=i.height;return N(Ge,re({width:r,height:n},e))}})},Ee=function(e){var i=e.width,t=e.height,a=e.margin,d=e.pixelRatio,c=e.data,f=e.xScale,p=e.xFormat,h=e.yScale,y=e.yFormat,b=e.curve,g=e.layers,m=e.colors,v=e.lineWidth,x=e.enableArea,q=e.areaBaselineValue,O=e.areaOpacity,M=e.enablePoints,C=e.pointSize,w=e.pointColor,k=e.pointBorderWidth,B=e.pointBorderColor,L=e.enableGridX,W=e.gridXValues,G=e.enableGridY,j=e.gridYValues,F=e.axisTop,Y=e.axisRight,D=e.axisBottom,X=e.axisLeft,A=e.legends,H=e.isInteractive,I=e.debugMesh,J=e.onMouseLeave,K=e.onClick,Q=e.tooltip,U=e.canvasRef,Z=s(null),$=R(i,t,a),ne=$.margin,oe=$.innerWidth,te=$.innerHeight,ae=$.outerWidth,se=$.outerHeight,le=u(),ue=r(null),de=ue[0],ce=ue[1],fe=be({data:c,xScale:f,xFormat:p,yScale:h,yFormat:y,width:oe,height:te,colors:m,curve:b,areaBaselineValue:q,pointColor:w,pointBorderColor:B}),pe=fe.lineGenerator,he=fe.areaGenerator,ye=fe.series,ge=fe.xScale,me=fe.yScale,ve=fe.points,xe=_({points:ve,width:oe,height:te,debug:I}),Re=xe.delaunay,qe=xe.voronoi;l((function(){U&&(U.current=Z.current),Z.current.width=ae*d,Z.current.height=se*d;var e=Z.current.getContext("2d");e.scale(d,d),e.fillStyle=le.background,e.fillRect(0,0,ae,se),e.translate(ne.left,ne.top),g.forEach((function(i){if("function"==typeof i&&i({ctx:e,innerWidth:oe,innerHeight:te,series:ye,points:ve,xScale:ge,yScale:me,lineWidth:v,lineGenerator:pe,areaGenerator:he,currentPoint:de,setCurrentPoint:ce}),"grid"===i&&le.grid.line.strokeWidth>0&&(e.lineWidth=le.grid.line.strokeWidth,e.strokeStyle=le.grid.line.stroke,L&&P(e,{width:oe,height:te,scale:ge,axis:"x",values:W}),G&&P(e,{width:oe,height:te,scale:me,axis:"y",values:j})),"axes"===i&&E(e,{xScale:ge,yScale:me,width:oe,height:te,top:F,right:Y,bottom:D,left:X,theme:le}),"areas"===i&&!0===x&&(e.save(),e.globalAlpha=O,he.context(e),ye.forEach((function(i){e.fillStyle=i.color,e.beginPath(),he(i.data.map((function(e){return e.position}))),e.fill()})),e.restore()),"lines"===i&&(pe.context(e),ye.forEach((function(i){e.strokeStyle=i.color,e.lineWidth=v,e.beginPath(),pe(i.data.map((function(e){return e.position}))),e.stroke()}))),"points"===i&&!0===M&&C>0&&ve.forEach((function(i){e.fillStyle=i.color,e.beginPath(),e.arc(i.x,i.y,C/2,0,2*Math.PI),e.fill(),k>0&&(e.strokeStyle=i.borderColor,e.lineWidth=k,e.stroke())})),"mesh"===i&&!0===I&&(ee(e,qe),de&&ie(e,qe,de.index)),"legends"===i){var r=ye.map((function(e){return{id:e.id,label:e.id,color:e.color}})).reverse();A.forEach((function(i){V(e,re({},i,{data:i.data||r,containerWidth:oe,containerHeight:te,theme:le}))}))}}))}),[Z,ae,se,g,le,pe,ye,ge,me,L,W,G,j,F,Y,D,X,A,ve,M,C,de]);var Oe=n((function(e){var i=S(Z.current,e),r=i[0],n=i[1];if(!T(ne.left,ne.top,oe,te,r,n))return null;var o=Re.find(r-ne.left,n-ne.top);return ve[o]}),[Z,ne,oe,te,Re]),Me=z(),Ce=Me.showTooltipFromEvent,Se=Me.hideTooltip,Te=n((function(e){var i=Oe(e);ce(i),i?Ce(o(Q,{point:i}),e):Se()}),[Oe,ce,Ce,Se,Q]),we=n((function(e){Se(),ce(null),de&&J&&J(de,e)}),[Se,ce,J]),ke=n((function(e){if(K){var i=Oe(e);i&&K(i,e)}}),[Oe,K]);return N("canvas",{ref:Z,width:ae*d,height:se*d,style:{width:ae,height:se,cursor:H?"auto":"normal"},onMouseEnter:H?Te:void 0,onMouseMove:H?Te:void 0,onMouseLeave:H?we:void 0,onClick:H?ke:void 0})};Ee.propTypes=ue,Ee.defaultProps=fe;var je=x(Ee),Fe=a((function(e,i){return N(je,re({},e,{canvasRef:i}))})),Ve=a((function(e,i){return N(C,{children:function(r){var n=r.width,o=r.height;return N(Fe,re({width:n,height:o},e,{ref:i}))}})}));
//# sourceMappingURL=nivo-line.es.js.map
