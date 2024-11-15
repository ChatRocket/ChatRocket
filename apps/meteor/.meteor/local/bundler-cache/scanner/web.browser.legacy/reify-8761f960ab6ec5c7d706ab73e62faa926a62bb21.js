"use strict";var e=require("@nivo/axes"),a=require("@nivo/annotations"),t=require("react/jsx-runtime"),i=require("@nivo/legends"),n=require("@nivo/core"),r=require("react"),o=require("@react-spring/web"),l=require("@nivo/tooltip"),d=require("@nivo/colors"),u=require("@nivo/scales"),s=require("d3-shape"),c=require("lodash/uniqBy");function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},h.apply(this,arguments)}function b(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}var g,v=function(e){var i=e.bars,n=e.annotations,r=a.useAnnotations({data:i,annotations:n,getPosition:function(e){return{x:e.x+e.width/2,y:e.y+e.height/2}},getDimensions:function(e){var a=e.height,t=e.width;return{width:t,height:a,size:Math.max(t,a)}}});return t.jsx(t.Fragment,{children:r.map((function(e,i){return t.jsx(a.Annotation,h({},e),i)}))})},f=function(e){var a=e.width,n=e.height,r=e.legends,o=e.toggleSerie;return t.jsx(t.Fragment,{children:r.map((function(e,r){var l,d=e[0],u=e[1];return t.jsx(i.BoxLegendSvg,h({},d,{containerWidth:a,containerHeight:n,data:null!=(l=d.data)?l:u,toggleSerie:d.toggleSerie&&"keys"===d.dataFrom?o:void 0}),r)}))})},m=["data"],p=function(e){var a,i=e.bar,d=i.data,u=b(i,m),s=e.style,c=s.borderColor,g=s.color,v=s.height,f=s.labelColor,p=s.labelOpacity,x=s.labelX,y=s.labelY,S=s.transform,k=s.width,C=e.borderRadius,L=e.borderWidth,w=e.label,V=e.shouldRenderLabel,M=e.isInteractive,W=e.onClick,B=e.onMouseEnter,T=e.onMouseLeave,I=e.tooltip,R=e.isFocusable,j=e.ariaLabel,P=e.ariaLabelledBy,E=e.ariaDescribedBy,F=n.useTheme(),H=l.useTooltip(),D=H.showTooltipFromEvent,A=H.showTooltipAt,X=H.hideTooltip,Y=r.useMemo((function(){return function(){return r.createElement(I,h({},u,d))}}),[I,u,d]),q=r.useCallback((function(e){null==W||W(h({color:u.color},d),e)}),[u,d,W]),O=r.useCallback((function(e){return D(Y(),e)}),[D,Y]),G=r.useCallback((function(e){null==B||B(d,e),D(Y(),e)}),[d,B,D,Y]),z=r.useCallback((function(e){null==T||T(d,e),X()}),[d,X,T]),K=r.useCallback((function(){A(Y(),[u.absX+u.width/2,u.absY])}),[A,Y,u]),N=r.useCallback((function(){X()}),[X]);return t.jsxs(o.animated.g,{transform:S,children:[t.jsx(o.animated.rect,{width:o.to(k,(function(e){return Math.max(e,0)})),height:o.to(v,(function(e){return Math.max(e,0)})),rx:C,ry:C,fill:null!=(a=d.fill)?a:g,strokeWidth:L,stroke:c,focusable:R,tabIndex:R?0:void 0,"aria-label":j?j(d):void 0,"aria-labelledby":P?P(d):void 0,"aria-describedby":E?E(d):void 0,onMouseEnter:M?G:void 0,onMouseMove:M?O:void 0,onMouseLeave:M?z:void 0,onClick:M?q:void 0,onFocus:M&&R?K:void 0,onBlur:M&&R?N:void 0}),V&&t.jsx(o.animated.text,{x:x,y:y,textAnchor:"middle",dominantBaseline:"central",fillOpacity:p,style:h({},F.labels.text,{pointerEvents:"none",fill:f}),children:w})]})},x=["color","label"],y=function(e){var a=e.color,i=e.label,n=b(e,x);return t.jsx(l.BasicTooltip,{id:i,value:n.formattedValue,enableChip:!0,color:a})},S={indexBy:"id",keys:["value"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,enableLabel:!0,label:"formattedValue",labelSkipWidth:0,labelSkipHeight:0,labelTextColor:{from:"theme",theme:"labels.text.fill"},colorBy:"id",colors:{scheme:"nivo"},borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:y,tooltipLabel:function(e){return e.id+" - "+e.indexValue},legends:[],initialHiddenIds:[],annotations:[],markers:[]},k=h({},S,{layers:["grid","axes","bars","markers","legends","annotations"],barComponent:p,defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),C=h({},S,{layers:["grid","axes","bars","legends","annotations"],pixelRatio:"undefined"!=typeof window&&null!=(g=window.devicePixelRatio)?g:1}),L=function(e,a,t,i,n,r){return u.computeScale(i,{all:e.map(a),min:0,max:0},n,r).padding(t)},w=function(e,a){return e.map((function(e){return h({},a.reduce((function(e,a){return e[a]=null,e}),{}),e)}))},V=function(e){return Object.keys(e).reduce((function(a,t){return e[t]&&(a[t]=e[t]),a}),{})},M=function(e){return[e,Number(e)]},W=["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"],B=function(e,a){return e>a},T=function(e,a){return e<a},I=function(e,a){return Array.from(" ".repeat(a-e),(function(a,t){return e+t}))},R=function(e){return B(e,0)?0:e},j=function(e,a,t,i){var n=e.data,r=e.formatValue,o=e.getColor,l=e.getIndex,d=e.getTooltipLabel,u=e.innerPadding,s=void 0===u?0:u,c=e.keys,h=e.xScale,b=e.yScale,g=e.margin,v=t?T:B,f=n.map(V),m=[];return c.forEach((function(e,t){return I(0,h.domain().length).forEach((function(u){var c,p,x,y=M(n[u][e]),S=y[0],k=y[1],C=l(n[u]),L=(null!=(c=h(C))?c:0)+a*t+s*t,w=v(p=k,0)?null!=(x=b(p))?x:0:i,V=function(e,a){var t;return v(e,0)?i-a:(null!=(t=b(e))?t:0)-i}(k,w),W={id:e,value:null===S?S:k,formattedValue:r(k),hidden:!1,index:u,indexValue:C,data:f[u]};m.push({key:e+"."+W.indexValue,index:m.length,data:W,x:L,y:w,absX:g.left+L,absY:g.top+w,width:a,height:V,color:o(W),label:d(W)})}))})),m},P=function(e,a,t,i){var n=e.data,r=e.formatValue,o=e.getIndex,l=e.getColor,d=e.getTooltipLabel,u=e.keys,s=e.innerPadding,c=void 0===s?0:s,h=e.xScale,b=e.yScale,g=e.margin,v=t?T:B,f=n.map(V),m=[];return u.forEach((function(e,t){return I(0,b.domain().length).forEach((function(u){var s,p,x,y=M(n[u][e]),S=y[0],k=y[1],C=o(n[u]),L=v(p=k,0)?i:null!=(x=h(p))?x:0,w=(null!=(s=b(C))?s:0)+a*t+c*t,V=function(e,a){var t;return v(e,0)?(null!=(t=h(e))?t:0)-i:i-a}(k,L),W={id:e,value:null===S?S:k,formattedValue:r(k),hidden:!1,index:u,indexValue:C,data:f[u]};m.push({key:e+"."+W.indexValue,index:m.length,data:W,x:L,y:w,absX:g.left+L,absY:g.top+w,width:V,height:a,color:l(W),label:d(W)})}))})),m},E=function(e){var a,t,i=e.layout,n=e.minValue,r=e.maxValue,o=e.reverse,l=e.width,d=e.height,s=e.padding,c=void 0===s?0:s,g=e.innerPadding,v=void 0===g?0:g,f=e.valueScale,m=e.indexScale,p=e.hiddenIds,x=void 0===p?[]:p,y=b(e,W),S=y.keys.filter((function(e){return!x.includes(e)})),k=w(y.data,S),C="vertical"===i?["y","x",l]:["x","y",d],V=C[0],M=C[1],B=C[2],T=L(k,y.getIndex,c,m,B,M),I=h({max:r,min:n,reverse:o},f),E="auto"===I.min?R:function(e){return e},F=k.reduce((function(e,a){return[].concat(e,S.map((function(e){return a[e]})))}),[]).filter(Boolean),H=E(Math.min.apply(Math,F)),D=(t=Math.max.apply(Math,F),isFinite(t)?t:0),A=u.computeScale(I,{all:F,min:H,max:D},"x"===V?l:d,V),X="vertical"===i?[T,A]:[A,T],Y=X[0],q=X[1],O=(T.bandwidth()-v*(S.length-1))/S.length,G=[h({},y,{data:k,keys:S,innerPadding:v,xScale:Y,yScale:q}),O,I.reverse,null!=(a=A(0))?a:0];return{xScale:Y,yScale:q,bars:O>0?"vertical"===i?j.apply(void 0,G):P.apply(void 0,G):[]}},F=["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"],H=function e(a){var t;return a.some(Array.isArray)?e((t=[]).concat.apply(t,a)):a},D=function(e,a,t){var i=e.formatValue,n=e.getColor,r=e.getIndex,o=e.getTooltipLabel,l=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return u.domain().forEach((function(d,b){var g,v,f=e[b],m=null!=(g=u(r(f.data)))?g:0,p=(null!=(v=function(e){return s(e[t?0:1])}(f))?v:0)+.5*l,x=function(e,a){var i;return(null!=(i=s(e[t?1:0]))?i:0)-a}(f,p)-l,y=M(f.data[e.key]),S=y[0],k=y[1],C={id:e.key,value:null===S?S:k,formattedValue:i(k),hidden:!1,index:b,indexValue:d,data:V(f.data)};h.push({key:e.key+"."+d,index:h.length,data:C,x:m,y:p,absX:c.left+m,absY:c.top+p,width:a,height:x,color:n(C),label:o(C)})}))})),h},A=function(e,a,t){var i=e.formatValue,n=e.getColor,r=e.getIndex,o=e.getTooltipLabel,l=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return s.domain().forEach((function(d,b){var g,v,f=e[b],m=null!=(g=s(r(f.data)))?g:0,p=(null!=(v=function(e){return u(e[t?1:0])}(f))?v:0)+.5*l,x=function(e,a){var i;return(null!=(i=u(e[t?0:1]))?i:0)-a}(f,p)-l,y=M(f.data[e.key]),S=y[0],k=y[1],C={id:e.key,value:null===S?S:k,formattedValue:i(k),hidden:!1,index:b,indexValue:d,data:V(f.data)};h.push({key:e.key+"."+d,index:h.length,data:C,x:p,y:m,absX:c.left+p,absY:c.top+m,width:x,height:a,color:n(C),label:o(C)})}))})),h},X=function(e){var a,t=e.data,i=e.layout,n=e.minValue,r=e.maxValue,o=e.reverse,l=e.width,d=e.height,c=e.padding,g=void 0===c?0:c,v=e.valueScale,f=e.indexScale,m=e.hiddenIds,p=void 0===m?[]:m,x=b(e,F),y=x.keys.filter((function(e){return!p.includes(e)})),S=s.stack().keys(y).offset(s.stackOffsetDiverging)(w(t,y)),k="vertical"===i?["y","x",l]:["x","y",d],C=k[0],V=k[1],M=k[2],W=L(t,x.getIndex,g,f,M,V),B=h({max:r,min:n,reverse:o},v),T=(a=H(S),"log"===v.type?a.filter((function(e){return 0!==e})):a),I=Math.min.apply(Math,T),R=Math.max.apply(Math,T),j=u.computeScale(B,{all:T,min:I,max:R},"x"===C?l:d,C),P="vertical"===i?[W,j]:[j,W],E=P[0],X=P[1],Y=x.innerPadding>0?x.innerPadding:0,q=W.bandwidth(),O=[h({},x,{innerPadding:Y,stackedData:S,xScale:E,yScale:X}),q,B.reverse];return{xScale:E,yScale:X,bars:q>0?"vertical"===i?D.apply(void 0,O):A.apply(void 0,O):[]}},Y=function(e){var a=e.bars,t=e.direction,i=e.from,r=e.groupMode,o=e.layout,l=e.legendLabel,d=e.reverse,u=n.getPropertyAccessor(null!=l?l:"indexes"===i?"indexValue":"id");return"indexes"===i?function(e,a,t){var i=c(e.map((function(e){var a,i;return{id:null!=(a=e.data.indexValue)?a:"",label:t(e.data),hidden:e.data.hidden,color:null!=(i=e.color)?i:"#000"}})),(function(e){return e.id}));return"horizontal"===a&&i.reverse(),i}(a,o,u):function(e,a,t,i,n,r){var o=c(e.map((function(e){var a;return{id:e.data.id,label:r(e.data),hidden:e.data.hidden,color:null!=(a=e.color)?a:"#000"}})),(function(e){return e.id}));return("vertical"===a&&"stacked"===i&&"column"===t&&!0!==n||"horizontal"===a&&"stacked"===i&&!0===n)&&o.reverse(),o}(a,o,t,r,d,u)},q=function(e){var a=e.indexBy,t=void 0===a?S.indexBy:a,i=e.keys,o=void 0===i?S.keys:i,l=e.label,u=void 0===l?S.label:l,s=e.tooltipLabel,c=void 0===s?S.tooltipLabel:s,b=e.valueFormat,g=e.colors,v=void 0===g?S.colors:g,f=e.colorBy,m=void 0===f?S.colorBy:f,p=e.borderColor,x=void 0===p?S.borderColor:p,y=e.labelTextColor,k=void 0===y?S.labelTextColor:y,C=e.groupMode,L=void 0===C?S.groupMode:C,w=e.layout,V=void 0===w?S.layout:w,M=e.reverse,W=void 0===M?S.reverse:M,B=e.data,T=e.minValue,I=void 0===T?S.minValue:T,R=e.maxValue,j=void 0===R?S.maxValue:R,P=e.margin,F=e.width,H=e.height,D=e.padding,A=void 0===D?S.padding:D,q=e.innerPadding,O=void 0===q?S.innerPadding:q,G=e.valueScale,z=void 0===G?S.valueScale:G,K=e.indexScale,N=void 0===K?S.indexScale:K,J=e.initialHiddenIds,Q=void 0===J?S.initialHiddenIds:J,U=e.enableLabel,Z=void 0===U?S.enableLabel:U,$=e.labelSkipWidth,_=void 0===$?S.labelSkipWidth:$,ee=e.labelSkipHeight,ae=void 0===ee?S.labelSkipHeight:ee,te=e.legends,ie=void 0===te?S.legends:te,ne=e.legendLabel,re=r.useState(null!=Q?Q:[]),oe=re[0],le=re[1],de=r.useCallback((function(e){le((function(a){return a.indexOf(e)>-1?a.filter((function(a){return a!==e})):[].concat(a,[e])}))}),[]),ue=n.usePropertyAccessor(t),se=n.usePropertyAccessor(u),ce=n.usePropertyAccessor(c),he=n.useValueFormatter(b),be=n.useTheme(),ge=d.useOrdinalColorScale(v,m),ve=d.useInheritedColor(x,be),fe=d.useInheritedColor(k,be),me=("grouped"===L?E:X)({layout:V,reverse:W,data:B,getIndex:ue,keys:o,minValue:I,maxValue:j,width:F,height:H,getColor:ge,padding:A,innerPadding:O,valueScale:z,indexScale:N,hiddenIds:oe,formatValue:he,getTooltipLabel:ce,margin:P}),pe=me.bars,xe=me.xScale,ye=me.yScale,Se=r.useMemo((function(){return pe.filter((function(e){return null!==e.data.value})).map((function(e,a){return h({},e,{index:a})}))}),[pe]),ke=r.useCallback((function(e){var a=e.width,t=e.height;return!!Z&&(!(_>0&&a<_)&&!(ae>0&&t<ae))}),[Z,_,ae]),Ce=r.useMemo((function(){return o.map((function(e){var a=pe.find((function(a){return a.data.id===e}));return h({},a,{data:h({id:e},null==a?void 0:a.data,{hidden:oe.includes(e)})})}))}),[oe,o,pe]),Le=r.useMemo((function(){return ie.map((function(e){return[e,Y({bars:"keys"===e.dataFrom?Ce:pe,direction:e.direction,from:e.dataFrom,groupMode:L,layout:V,legendLabel:ne,reverse:W})]}))}),[ie,Ce,pe,L,V,ne,W]);return{bars:pe,barsWithValue:Se,xScale:xe,yScale:ye,getIndex:ue,getLabel:se,getTooltipLabel:ce,formatValue:he,getColor:ge,getBorderColor:ve,getLabelColor:fe,shouldRenderBarLabel:ke,hiddenIds:oe,toggleSerie:de,legendsWithData:Le}},O=["isInteractive","animate","motionConfig","theme","renderWrapper"],G=function(a){var i=a.data,l=a.indexBy,d=a.keys,u=a.margin,s=a.width,c=a.height,b=a.groupMode,g=a.layout,m=a.reverse,p=a.minValue,x=a.maxValue,y=a.valueScale,S=a.indexScale,C=a.padding,L=a.innerPadding,w=a.axisTop,V=a.axisRight,M=a.axisBottom,W=void 0===M?k.axisBottom:M,B=a.axisLeft,T=void 0===B?k.axisLeft:B,I=a.enableGridX,R=void 0===I?k.enableGridX:I,j=a.enableGridY,P=void 0===j?k.enableGridY:j,E=a.gridXValues,F=a.gridYValues,H=a.layers,D=void 0===H?k.layers:H,A=a.barComponent,X=void 0===A?k.barComponent:A,Y=a.enableLabel,O=void 0===Y?k.enableLabel:Y,G=a.label,z=a.labelSkipWidth,K=void 0===z?k.labelSkipWidth:z,N=a.labelSkipHeight,J=void 0===N?k.labelSkipHeight:N,Q=a.labelTextColor,U=a.markers,Z=void 0===U?k.markers:U,$=a.colorBy,_=a.colors,ee=a.defs,ae=void 0===ee?k.defs:ee,te=a.fill,ie=void 0===te?k.fill:te,ne=a.borderRadius,re=void 0===ne?k.borderRadius:ne,oe=a.borderWidth,le=void 0===oe?k.borderWidth:oe,de=a.borderColor,ue=a.annotations,se=void 0===ue?k.annotations:ue,ce=a.legendLabel,he=a.tooltipLabel,be=a.valueFormat,ge=a.isInteractive,ve=void 0===ge?k.isInteractive:ge,fe=a.tooltip,me=void 0===fe?k.tooltip:fe,pe=a.onClick,xe=a.onMouseEnter,ye=a.onMouseLeave,Se=a.legends,ke=a.role,Ce=void 0===ke?k.role:ke,Le=a.ariaLabel,we=a.ariaLabelledBy,Ve=a.ariaDescribedBy,Me=a.isFocusable,We=void 0===Me?k.isFocusable:Me,Be=a.barAriaLabel,Te=a.barAriaLabelledBy,Ie=a.barAriaDescribedBy,Re=a.initialHiddenIds,je=n.useMotionConfig(),Pe=je.animate,Ee=je.config,Fe=n.useDimensions(s,c,u),He=Fe.outerWidth,De=Fe.outerHeight,Ae=Fe.margin,Xe=Fe.innerWidth,Ye=Fe.innerHeight,qe=q({indexBy:l,label:G,tooltipLabel:he,valueFormat:be,colors:_,colorBy:$,borderColor:de,labelTextColor:Q,groupMode:b,layout:g,reverse:m,data:i,keys:d,minValue:p,maxValue:x,margin:Ae,width:Xe,height:Ye,padding:C,innerPadding:L,valueScale:y,indexScale:S,enableLabel:O,labelSkipWidth:K,labelSkipHeight:J,legends:Se,legendLabel:ce,initialHiddenIds:Re}),Oe=qe.bars,Ge=qe.barsWithValue,ze=qe.xScale,Ke=qe.yScale,Ne=qe.getLabel,Je=qe.getTooltipLabel,Qe=qe.getBorderColor,Ue=qe.getLabelColor,Ze=qe.shouldRenderBarLabel,$e=qe.toggleSerie,_e=qe.legendsWithData,ea=o.useTransition(Ge,{keys:function(e){return e.key},from:function(e){return h({borderColor:Qe(e),color:e.color,height:0,labelColor:Ue(e),labelOpacity:0,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===g?{}:{height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},enter:function(e){return{borderColor:Qe(e),color:e.color,height:e.height,labelColor:Ue(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},update:function(e){return{borderColor:Qe(e),color:e.color,height:e.height,labelColor:Ue(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},leave:function(e){return h({borderColor:Qe(e),color:e.color,height:0,labelColor:Ue(e),labelOpacity:0,labelX:e.width/2,labelY:0,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===g?{}:{labelX:0,labelY:e.height/2,height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},config:Ee,immediate:!Pe,initial:Pe?void 0:null}),aa=r.useMemo((function(){return{borderRadius:re,borderWidth:le,enableLabel:O,isInteractive:ve,labelSkipWidth:K,labelSkipHeight:J,onClick:pe,onMouseEnter:xe,onMouseLeave:ye,getTooltipLabel:Je,tooltip:me,isFocusable:We,ariaLabel:Be,ariaLabelledBy:Te,ariaDescribedBy:Ie}}),[re,le,O,Je,ve,J,K,pe,xe,ye,me,We,Be,Te,Ie]),ta=n.bindDefs(ae,Oe,ie,{dataKey:"data",targetKey:"data.fill"}),ia={annotations:null,axes:null,bars:null,grid:null,legends:null,markers:null};D.includes("annotations")&&(ia.annotations=t.jsx(v,{bars:Oe,annotations:se},"annotations")),D.includes("axes")&&(ia.axes=t.jsx(e.Axes,{xScale:ze,yScale:Ke,width:Xe,height:Ye,top:w,right:V,bottom:W,left:T},"axes")),D.includes("bars")&&(ia.bars=t.jsx(r.Fragment,{children:ea((function(e,a){return r.createElement(X,h({},aa,{bar:a,style:e,shouldRenderLabel:Ze(a),label:Ne(a.data)}))}))},"bars")),D.includes("grid")&&(ia.grid=t.jsx(e.Grid,{width:Xe,height:Ye,xScale:R?ze:null,yScale:P?Ke:null,xValues:E,yValues:F},"grid")),D.includes("legends")&&(ia.legends=t.jsx(f,{width:Xe,height:Ye,legends:_e,toggleSerie:$e},"legends")),D.includes("markers")&&(ia.markers=t.jsx(n.CartesianMarkers,{markers:Z,width:Xe,height:Ye,xScale:ze,yScale:Ke},"markers"));var na=r.useMemo((function(){return h({},aa,{margin:Ae,width:s,height:c,innerWidth:Xe,innerHeight:Ye,bars:Oe,legendData:_e,enableLabel:O,xScale:ze,yScale:Ke,tooltip:me,getTooltipLabel:Je,onClick:pe,onMouseEnter:xe,onMouseLeave:ye})}),[aa,Ae,s,c,Xe,Ye,Oe,_e,O,ze,Ke,me,Je,pe,xe,ye]);return t.jsx(n.SvgWrapper,{width:He,height:De,margin:Ae,defs:ta,role:Ce,ariaLabel:Le,ariaLabelledBy:we,ariaDescribedBy:Ve,isFocusable:We,children:D.map((function(e,a){var i;return"function"==typeof e?t.jsx(r.Fragment,{children:r.createElement(e,na)},a):null!=(i=null==ia?void 0:ia[e])?i:null}))})},z=function(e){var a=e.isInteractive,i=void 0===a?k.isInteractive:a,r=e.animate,o=void 0===r?k.animate:r,l=e.motionConfig,d=void 0===l?k.motionConfig:l,u=e.theme,s=e.renderWrapper,c=b(e,O);return t.jsx(n.Container,{animate:o,isInteractive:i,motionConfig:d,renderWrapper:s,theme:u,children:t.jsx(G,h({isInteractive:i},c))})},K=["isInteractive","renderWrapper","theme"],N=function(e,a,t,i){return e.find((function(e){return n.isCursorInRect(e.x+a.left,e.y+a.top,e.width,e.height,t,i)}))},J=function(o){var d=o.data,u=o.indexBy,s=o.keys,c=o.margin,b=o.width,g=o.height,v=o.groupMode,f=o.layout,m=o.reverse,p=o.minValue,x=o.maxValue,y=o.valueScale,S=o.indexScale,k=o.padding,L=o.innerPadding,w=o.axisTop,V=o.axisRight,M=o.axisBottom,W=void 0===M?C.axisBottom:M,B=o.axisLeft,T=void 0===B?C.axisLeft:B,I=o.enableGridX,R=void 0===I?C.enableGridX:I,j=o.enableGridY,P=void 0===j?C.enableGridY:j,E=o.gridXValues,F=o.gridYValues,H=o.layers,D=void 0===H?C.layers:H,A=o.renderBar,X=void 0===A?function(e,a){var t=a.bar,i=t.color,n=t.height,r=t.width,o=t.x,l=t.y,d=a.borderColor,u=a.borderRadius,s=a.borderWidth,c=a.label,h=a.labelColor,b=a.shouldRenderLabel;if(e.fillStyle=i,s>0&&(e.strokeStyle=d,e.lineWidth=s),e.beginPath(),u>0){var g=Math.min(u,n);e.moveTo(o+g,l),e.lineTo(o+r-g,l),e.quadraticCurveTo(o+r,l,o+r,l+g),e.lineTo(o+r,l+n-g),e.quadraticCurveTo(o+r,l+n,o+r-g,l+n),e.lineTo(o+g,l+n),e.quadraticCurveTo(o,l+n,o,l+n-g),e.lineTo(o,l+g),e.quadraticCurveTo(o,l,o+g,l),e.closePath()}else e.rect(o,l,r,n);e.fill(),s>0&&e.stroke(),b&&(e.textBaseline="middle",e.textAlign="center",e.fillStyle=h,e.fillText(c,o+r/2,l+n/2))}:A,Y=o.enableLabel,O=void 0===Y?C.enableLabel:Y,G=o.label,z=o.labelSkipWidth,K=void 0===z?C.labelSkipWidth:z,J=o.labelSkipHeight,Q=void 0===J?C.labelSkipHeight:J,U=o.labelTextColor,Z=o.colorBy,$=o.colors,_=o.borderRadius,ee=void 0===_?C.borderRadius:_,ae=o.borderWidth,te=void 0===ae?C.borderWidth:ae,ie=o.borderColor,ne=o.annotations,re=void 0===ne?C.annotations:ne,oe=o.legendLabel,le=o.tooltipLabel,de=o.valueFormat,ue=o.isInteractive,se=void 0===ue?C.isInteractive:ue,ce=o.tooltip,he=void 0===ce?C.tooltip:ce,be=o.onClick,ge=o.onMouseEnter,ve=o.onMouseLeave,fe=o.legends,me=o.pixelRatio,pe=void 0===me?C.pixelRatio:me,xe=o.canvasRef,ye=r.useRef(null),Se=n.useTheme(),ke=n.useDimensions(b,g,c),Ce=ke.margin,Le=ke.innerWidth,we=ke.innerHeight,Ve=ke.outerWidth,Me=ke.outerHeight,We=q({indexBy:u,label:G,tooltipLabel:le,valueFormat:de,colors:$,colorBy:Z,borderColor:ie,labelTextColor:U,groupMode:v,layout:f,reverse:m,data:d,keys:s,minValue:p,maxValue:x,margin:Ce,width:Le,height:we,padding:k,innerPadding:L,valueScale:y,indexScale:S,enableLabel:O,labelSkipWidth:K,labelSkipHeight:Q,legends:fe,legendLabel:oe}),Be=We.bars,Te=We.barsWithValue,Ie=We.xScale,Re=We.yScale,je=We.getLabel,Pe=We.getTooltipLabel,Ee=We.getBorderColor,Fe=We.getLabelColor,He=We.shouldRenderBarLabel,De=We.legendsWithData,Ae=l.useTooltip(),Xe=Ae.showTooltipFromEvent,Ye=Ae.hideTooltip,qe=a.useComputedAnnotations({annotations:a.useAnnotations({data:Be,annotations:re,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){var a=e.width,t=e.height;return{width:a,height:t,size:Math.max(a,t)}}})}),Oe=r.useMemo((function(){return{borderRadius:ee,borderWidth:te,isInteractive:se,isFocusable:!1,labelSkipWidth:K,labelSkipHeight:Q,margin:Ce,width:b,height:g,innerWidth:Le,innerHeight:we,bars:Be,legendData:De,enableLabel:O,xScale:Ie,yScale:Re,tooltip:he,getTooltipLabel:Pe,onClick:be,onMouseEnter:ge,onMouseLeave:ve}}),[ee,te,se,K,Q,Ce,b,g,Le,we,Be,De,O,Ie,Re,he,Pe,be,ge,ve]);r.useEffect((function(){var t,n=null==(t=ye.current)?void 0:t.getContext("2d");ye.current&&n&&(ye.current.width=Ve*pe,ye.current.height=Me*pe,n.scale(pe,pe),n.fillStyle=Se.background,n.fillRect(0,0,Ve,Me),n.translate(Ce.left,Ce.top),D.forEach((function(t){"grid"===t?"number"==typeof Se.grid.line.strokeWidth&&Se.grid.line.strokeWidth>0&&(n.lineWidth=Se.grid.line.strokeWidth,n.strokeStyle=Se.grid.line.stroke,R&&e.renderGridLinesToCanvas(n,{width:b,height:g,scale:Ie,axis:"x",values:E}),P&&e.renderGridLinesToCanvas(n,{width:b,height:g,scale:Re,axis:"y",values:F})):"axes"===t?e.renderAxesToCanvas(n,{xScale:Ie,yScale:Re,width:Le,height:we,top:w,right:V,bottom:W,left:T,theme:Se}):"bars"===t?Te.forEach((function(e){X(n,{bar:e,borderColor:Ee(e),borderRadius:ee,borderWidth:te,label:je(e.data),labelColor:Fe(e),shouldRenderLabel:He(e)})})):"legends"===t?De.forEach((function(e){var a=e[0],t=e[1];i.renderLegendToCanvas(n,h({},a,{data:t,containerWidth:Le,containerHeight:we,theme:Se}))})):"annotations"===t?a.renderAnnotationsToCanvas(n,{annotations:qe,theme:Se}):"function"==typeof t&&t(n,Oe)})),n.save())}),[W,T,V,w,Te,ee,te,qe,R,P,Ee,je,Fe,E,F,v,g,we,Le,Oe,D,f,De,Ce.left,Ce.top,Me,Ve,pe,X,Ie,Re,m,He,Se,b]);var Ge=r.useCallback((function(e){if(Be&&ye.current){var a=n.getRelativeCursor(ye.current,e),t=a[0],i=a[1],o=N(Be,Ce,t,i);void 0!==o?(Xe(r.createElement(he,h({},o.data,{color:o.color,label:o.label,value:Number(o.data.value)})),e),"mouseenter"===e.type&&(null==ge||ge(o.data,e))):Ye()}}),[Ye,Ce,ge,Be,Xe,he]),ze=r.useCallback((function(e){if(Be&&ye.current){Ye();var a=n.getRelativeCursor(ye.current,e),t=a[0],i=a[1],r=N(Be,Ce,t,i);r&&(null==ve||ve(r.data,e))}}),[Ye,Ce,ve,Be]),Ke=r.useCallback((function(e){if(Be&&ye.current){var a=n.getRelativeCursor(ye.current,e),t=a[0],i=a[1],r=N(Be,Ce,t,i);void 0!==r&&(null==be||be(h({},r.data,{color:r.color}),e))}}),[Ce,be,Be]);return t.jsx("canvas",{ref:function(e){ye.current=e,xe&&"current"in xe&&(xe.current=e)},width:Ve*pe,height:Me*pe,style:{width:Ve,height:Me,cursor:se?"auto":"normal"},onMouseEnter:se?Ge:void 0,onMouseMove:se?Ge:void 0,onMouseLeave:se?ze:void 0,onClick:se?Ke:void 0})},Q=r.forwardRef((function(e,a){var i=e.isInteractive,r=e.renderWrapper,o=e.theme,l=b(e,K);return t.jsx(n.Container,{isInteractive:i,renderWrapper:r,theme:o,animate:!1,children:t.jsx(J,h({},l,{canvasRef:a}))})})),U=r.forwardRef((function(e,a){return t.jsx(n.ResponsiveWrapper,{children:function(i){var n=i.width,r=i.height;return t.jsx(Q,h({width:n,height:r},e,{ref:a}))}})}));exports.Bar=z,exports.BarCanvas=Q,exports.BarItem=p,exports.BarTooltip=y,exports.ResponsiveBar=function(e){return t.jsx(n.ResponsiveWrapper,{children:function(a){var i=a.width,n=a.height;return t.jsx(z,h({width:i,height:n},e))}})},exports.ResponsiveBarCanvas=U,exports.canvasDefaultProps=C,exports.defaultProps=S,exports.svgDefaultProps=k;
//# sourceMappingURL=nivo-bar.cjs.js.map
