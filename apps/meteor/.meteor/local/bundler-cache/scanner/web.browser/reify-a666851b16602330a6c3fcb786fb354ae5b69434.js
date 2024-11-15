module.export({AnchoredContinuousColorsLegendSvg:()=>z,BoxLegendSvg:()=>X,ContinuousColorsLegendSvg:()=>W,LegendPropShape:()=>T,LegendSvg:()=>w,LegendSvgItem:()=>B,SymbolCircle:()=>m,SymbolDiamond:()=>f,SymbolSquare:()=>u,SymbolTriangle:()=>v,computeContinuousColorsLegend:()=>A,computeDimensions:()=>k,computeItemLayout:()=>S,computePositionFromAnchor:()=>x,continuousColorsLegendDefaults:()=>y,renderContinuousColorLegendToCanvas:()=>E,renderLegendToCanvas:()=>H,useQuantizeColorScaleLegendData:()=>j});let t,e;module.link("react/jsx-runtime",{jsx(v){t=v},jsxs(v){e=v}},0);let i;module.link("d3-scale",{scaleLinear(v){i=v}},1);let n,o,r;module.link("@nivo/core",{getValueFormatter(v){n=v},useTheme(v){o=v},degreesToRadians(v){r=v}},2);let l;module.link("@nivo/colors",{computeContinuousColorScaleColorStops(v){l=v}},3);let a;module.link("react",{"*"(v){a=v}},4);let c,s,d,h;module.link("react",{Fragment(v){c=v},useState(v){s=v},useCallback(v){d=v},useMemo(v){h=v}},5);let g;module.link("prop-types",{default(v){g=v}},6);var m=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return t("circle",{r:o/2,cx:i+o/2,cy:n+o/2,fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})},f=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return t("g",{transform:"translate("+i+","+n+")",children:t("path",{d:"\n                    M"+o/2+" 0\n                    L"+.8*o+" "+o/2+"\n                    L"+o/2+" "+o+"\n                    L"+.2*o+" "+o/2+"\n                    L"+o/2+" 0\n                ",fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})},u=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return t("rect",{x:i,y:n,fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,width:o,height:o,style:{pointerEvents:"none"}})},v=function(e){var i=e.x,n=e.y,o=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,c=e.borderWidth,s=void 0===c?0:c,d=e.borderColor;return t("g",{transform:"translate("+i+","+n+")",children:t("path",{d:"\n                M"+o/2+" 0\n                L"+o+" "+o+"\n                L0 "+o+"\n                L"+o/2+" 0\n            ",fill:r,opacity:a,strokeWidth:s,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})};function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},p.apply(this,arguments)}var y={length:200,thickness:16,direction:"row",tickPosition:"after",tickSize:4,tickSpacing:3,tickOverlap:!1,tickFormat:function(t){return""+t},titleAlign:"start",titleOffset:4},b={top:0,right:0,bottom:0,left:0},k=function(t){var e,i=t.direction,n=t.itemsSpacing,o=t.padding,r=t.itemCount,l=t.itemWidth,a=t.itemHeight;if("number"!=typeof o&&("object"!=typeof(e=o)||Array.isArray(e)||null===e))throw new Error("Invalid property padding, must be one of: number, object");var c="number"==typeof o?{top:o,right:o,bottom:o,left:o}:p({},b,o),s=c.left+c.right,d=c.top+c.bottom,h=l+s,g=a+d,m=(r-1)*n;return"row"===i?h=l*r+m+s:"column"===i&&(g=a*r+m+d),{width:h,height:g,padding:c}},x=function(t){var e=t.anchor,i=t.translateX,n=t.translateY,o=t.containerWidth,r=t.containerHeight,l=t.width,a=t.height,c=i,s=n;switch(e){case"top":c+=(o-l)/2;break;case"top-right":c+=o-l;break;case"right":c+=o-l,s+=(r-a)/2;break;case"bottom-right":c+=o-l,s+=r-a;break;case"bottom":c+=(o-l)/2,s+=r-a;break;case"bottom-left":s+=r-a;break;case"left":s+=(r-a)/2;break;case"center":c+=(o-l)/2,s+=(r-a)/2}return{x:c,y:s}},S=function(t){var e,i,n,o,r,l,a=t.direction,c=t.justify,s=t.symbolSize,d=t.symbolSpacing,h=t.width,g=t.height;switch(a){case"left-to-right":e=0,i=(g-s)/2,o=g/2,l="central",c?(n=h,r="end"):(n=s+d,r="start");break;case"right-to-left":e=h-s,i=(g-s)/2,o=g/2,l="central",c?(n=0,r="start"):(n=h-s-d,r="end");break;case"top-to-bottom":e=(h-s)/2,i=0,n=h/2,r="middle",c?(o=g,l="alphabetic"):(o=s+d,l="text-before-edge");break;case"bottom-to-top":e=(h-s)/2,i=g-s,n=h/2,r="middle",c?(o=0,l="text-before-edge"):(o=g-s-d,l="alphabetic")}return{symbolX:e,symbolY:i,labelX:n,labelY:o,labelAnchor:r,labelAlignment:l}},A=function(t){var e,o=t.scale,r=t.ticks,a=t.length,c=void 0===a?y.length:a,s=t.thickness,d=void 0===s?y.thickness:s,h=t.direction,g=void 0===h?y.direction:h,m=t.tickPosition,f=void 0===m?y.tickPosition:m,u=t.tickSize,v=void 0===u?y.tickSize:u,p=t.tickSpacing,b=void 0===p?y.tickSpacing:p,k=t.tickOverlap,x=void 0===k?y.tickOverlap:k,S=t.tickFormat,A=void 0===S?y.tickFormat:S,W=t.title,O=t.titleAlign,z=void 0===O?y.titleAlign:O,C=t.titleOffset,B=void 0===C?y.titleOffset:C,w="column"===g?[].concat(o.domain()).reverse():o.domain(),X=i().domain(w);2===w.length?X.range([0,c]):3===w.length&&X.range([0,c/2,c]),e="thresholds"in o?[w[0]].concat(o.thresholds(),[w[1]]):Array.isArray(r)?r:o.ticks(r);var Y,H,E,j,T,L,M=l(o,32),F=n(A),P=[],R=0,q=0;if("row"===g){var V,D,G;Y=c,H=d,q=1;var I;T=0,E="start"===z?0:"middle"===z?c/2:c,"before"===f?(V=-v,D=x?d:0,G=-v-b,I="alphabetic",j=d+B,L="hanging"):(V=x?0:d,G=(D=d+v)+b,I="hanging",j=-B,L="alphabetic"),e.forEach((function(t){var e=X(t);P.push({x1:e,y1:V,x2:e,y2:D,text:F(t),textX:e,textY:G,textHorizontalAlign:"middle",textVerticalAlign:I})}))}else{var N,_,J,K;Y=d,H=c,R=1;T=-90,j="start"===z?c:"middle"===z?c/2:0,"before"===f?(_=x?d:0,J=(N=-v)-b,K="end",E=d+B,L="hanging"):(N=x?0:d,J=(_=d+v)+b,K="start",E=-B,L="alphabetic"),e.forEach((function(t){var e=X(t);P.push({x1:N,y1:e,x2:_,y2:e,text:F(t),textX:J,textY:e,textHorizontalAlign:K,textVerticalAlign:"central"})}))}return{width:Y,height:H,gradientX1:0,gradientY1:R,gradientX2:q,gradientY2:0,colorStops:M,ticks:P,titleText:W,titleX:E,titleY:j,titleRotation:T,titleHorizontalAlign:z,titleVerticalAlign:L}},W=function(i){var n=i.scale,r=i.ticks,l=i.length,a=void 0===l?y.length:l,s=i.thickness,d=void 0===s?y.thickness:s,h=i.direction,g=void 0===h?y.direction:h,m=i.tickPosition,f=void 0===m?y.tickPosition:m,u=i.tickSize,v=void 0===u?y.tickSize:u,b=i.tickSpacing,k=void 0===b?y.tickSpacing:b,x=i.tickOverlap,S=void 0===x?y.tickOverlap:x,W=i.tickFormat,O=void 0===W?y.tickFormat:W,z=i.title,C=i.titleAlign,B=void 0===C?y.titleAlign:C,w=i.titleOffset,X=A({scale:n,ticks:r,length:a,thickness:d,direction:g,tickPosition:f,tickSize:v,tickSpacing:k,tickOverlap:S,tickFormat:O,title:z,titleAlign:B,titleOffset:void 0===w?y.titleOffset:w}),Y=X.width,H=X.height,E=X.gradientX1,j=X.gradientY1,T=X.gradientX2,L=X.gradientY2,M=X.ticks,F=X.colorStops,P=X.titleText,R=X.titleX,q=X.titleY,V=X.titleRotation,D=X.titleVerticalAlign,G=X.titleHorizontalAlign,I=o(),N="ContinuousColorsLegendSvgGradient."+g+"."+F.map((function(t){return t.offset})).join("_");return e("g",{children:[t("defs",{children:t("linearGradient",{id:N,x1:E,y1:j,x2:T,y2:L,children:F.map((function(e){return t("stop",p({},e))}))})}),P&&t("text",{transform:"translate("+R+", "+q+") rotate("+V+")",textAnchor:G,dominantBaseline:D,style:I.legends.title.text,children:P}),t("rect",{width:Y,height:H,fill:"url(#"+N}),M.map((function(i,n){return e(c,{children:[t("line",{x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2,style:I.legends.ticks.line}),t("text",{x:i.textX,y:i.textY,textAnchor:i.textHorizontalAlign,dominantBaseline:i.textVerticalAlign,style:I.legends.ticks.text,children:i.text})]},n)}))]})},O=["containerWidth","containerHeight","anchor","translateX","translateY","length","thickness","direction"],z=function(e){var i,n,o=e.containerWidth,r=e.containerHeight,l=e.anchor,a=e.translateX,c=void 0===a?0:a,s=e.translateY,d=void 0===s?0:s,h=e.length,g=void 0===h?y.length:h,m=e.thickness,f=void 0===m?y.thickness:m,u=e.direction,v=void 0===u?y.direction:u,b=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(e,O);"row"===v?(i=g,n=f):(i=f,n=g);var k=x({anchor:l,translateX:c,translateY:d,containerWidth:o,containerHeight:r,width:i,height:n}),S=k.x,A=k.y;return t("g",{transform:"translate("+S+", "+A+")",children:t(W,p({length:g,thickness:f,direction:v},b))})},C={circle:m,diamond:f,square:u,triangle:v},B=function(i){var n,r,l,c,h,g,m,f,u,v,y,b=i.x,k=i.y,x=i.width,A=i.height,W=i.data,O=i.direction,z=void 0===O?"left-to-right":O,B=i.justify,w=void 0!==B&&B,X=i.textColor,Y=i.background,H=void 0===Y?"transparent":Y,E=i.opacity,j=void 0===E?1:E,T=i.symbolShape,L=void 0===T?"square":T,M=i.symbolSize,F=void 0===M?16:M,P=i.symbolSpacing,R=void 0===P?8:P,q=i.symbolBorderWidth,V=void 0===q?0:q,D=i.symbolBorderColor,G=void 0===D?"transparent":D,I=i.onClick,N=i.onMouseEnter,_=i.onMouseLeave,J=i.toggleSerie,K=i.effects,Q=s({}),U=Q[0],Z=Q[1],$=o(),tt=d((function(t){if(K){var e=K.filter((function(t){return"hover"===t.on})).reduce((function(t,e){return p({},t,e.style)}),{});Z(e)}null==N||N(W,t)}),[N,W,K]),et=d((function(t){if(K){var e=K.filter((function(t){return"hover"!==t.on})).reduce((function(t,e){return p({},t,e.style)}),{});Z(e)}null==_||_(W,t)}),[_,W,K]),it=S({direction:z,justify:w,symbolSize:null!=(n=U.symbolSize)?n:F,symbolSpacing:R,width:x,height:A}),nt=it.symbolX,ot=it.symbolY,rt=it.labelX,lt=it.labelY,at=it.labelAnchor,ct=it.labelAlignment,st=[I,N,_,J].some((function(t){return void 0!==t})),dt="function"==typeof L?L:C[L];return e("g",{transform:"translate("+b+","+k+")",style:{opacity:null!=(r=U.itemOpacity)?r:j},children:[t("rect",{width:x,height:A,fill:null!=(l=U.itemBackground)?l:H,style:{cursor:st?"pointer":"auto"},onClick:function(t){null==I||I(W,t),null==J||J(W.id)},onMouseEnter:tt,onMouseLeave:et}),a.createElement(dt,p({id:W.id,x:nt,y:ot,size:null!=(c=U.symbolSize)?c:F,fill:null!=(h=null!=(g=W.fill)?g:W.color)?h:"black",borderWidth:null!=(m=U.symbolBorderWidth)?m:V,borderColor:null!=(f=U.symbolBorderColor)?f:G},W.hidden?$.legends.hidden.symbol:void 0)),t("text",{textAnchor:at,style:p({},$.legends.text,{fill:null!=(u=null!=(v=null!=(y=U.itemTextColor)?y:X)?v:$.legends.text.fill)?u:"black",dominantBaseline:ct,pointerEvents:"none",userSelect:"none"},W.hidden?$.legends.hidden.text:void 0),x:rt,y:lt,children:W.label})]})},w=function(e){var i=e.data,n=e.x,o=e.y,r=e.direction,l=e.padding,a=void 0===l?0:l,c=e.justify,s=e.effects,d=e.itemWidth,h=e.itemHeight,g=e.itemDirection,m=void 0===g?"left-to-right":g,f=e.itemsSpacing,u=void 0===f?0:f,v=e.itemTextColor,p=e.itemBackground,y=void 0===p?"transparent":p,b=e.itemOpacity,x=void 0===b?1:b,S=e.symbolShape,A=e.symbolSize,W=e.symbolSpacing,O=e.symbolBorderWidth,z=e.symbolBorderColor,C=e.onClick,w=e.onMouseEnter,X=e.onMouseLeave,Y=e.toggleSerie,H=k({itemCount:i.length,itemWidth:d,itemHeight:h,itemsSpacing:u,direction:r,padding:a}).padding,E="row"===r?d+u:0,j="column"===r?h+u:0;return t("g",{transform:"translate("+n+","+o+")",children:i.map((function(e,i){return t(B,{data:e,x:i*E+H.left,y:i*j+H.top,width:d,height:h,direction:m,justify:c,effects:s,textColor:v,background:y,opacity:x,symbolShape:S,symbolSize:A,symbolSpacing:W,symbolBorderWidth:O,symbolBorderColor:z,onClick:C,onMouseEnter:w,onMouseLeave:X,toggleSerie:Y},i)}))})},X=function(e){var i=e.data,n=e.containerWidth,o=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,c=void 0===a?0:a,s=e.anchor,d=e.direction,h=e.padding,g=void 0===h?0:h,m=e.justify,f=e.itemsSpacing,u=void 0===f?0:f,v=e.itemWidth,p=e.itemHeight,y=e.itemDirection,b=e.itemTextColor,S=e.itemBackground,A=e.itemOpacity,W=e.symbolShape,O=e.symbolSize,z=e.symbolSpacing,C=e.symbolBorderWidth,B=e.symbolBorderColor,X=e.onClick,Y=e.onMouseEnter,H=e.onMouseLeave,E=e.toggleSerie,j=e.effects,T=k({itemCount:i.length,itemsSpacing:u,itemWidth:v,itemHeight:p,direction:d,padding:g}),L=T.width,M=T.height,F=x({anchor:s,translateX:l,translateY:c,containerWidth:n,containerHeight:o,width:L,height:M}),P=F.x,R=F.y;return t(w,{data:i,x:P,y:R,direction:d,padding:g,justify:m,effects:j,itemsSpacing:u,itemWidth:v,itemHeight:p,itemDirection:y,itemTextColor:b,itemBackground:S,itemOpacity:A,symbolShape:W,symbolSize:O,symbolSpacing:z,symbolBorderWidth:C,symbolBorderColor:B,onClick:X,onMouseEnter:Y,onMouseLeave:H,toggleSerie:"boolean"==typeof E?void 0:E})},Y={start:"left",middle:"center",end:"right"},H=function(t,e){var i=e.data,n=e.containerWidth,o=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,c=void 0===a?0:a,s=e.anchor,d=e.direction,h=e.padding,g=void 0===h?0:h,m=e.justify,f=void 0!==m&&m,u=e.itemsSpacing,v=void 0===u?0:u,p=e.itemWidth,y=e.itemHeight,b=e.itemDirection,A=void 0===b?"left-to-right":b,W=e.itemTextColor,O=e.symbolSize,z=void 0===O?16:O,C=e.symbolSpacing,B=void 0===C?8:C,w=e.theme,X=k({itemCount:i.length,itemWidth:p,itemHeight:y,itemsSpacing:v,direction:d,padding:g}),H=X.width,E=X.height,j=X.padding,T=x({anchor:s,translateX:l,translateY:c,containerWidth:n,containerHeight:o,width:H,height:E}),L=T.x,M=T.y,F="row"===d?p+v:0,P="column"===d?y+v:0;t.save(),t.translate(L,M),t.font=w.legends.text.fontSize+"px "+(w.legends.text.fontFamily||"sans-serif"),i.forEach((function(e,i){var n,o,r=i*F+j.left,l=i*P+j.top,a=S({direction:A,justify:f,symbolSize:z,symbolSpacing:B,width:p,height:y}),c=a.symbolX,s=a.symbolY,d=a.labelX,h=a.labelY,g=a.labelAnchor,m=a.labelAlignment;t.fillStyle=null!=(n=e.color)?n:"black",t.fillRect(r+c,l+s,z,z),t.textAlign=Y[g],"central"===m&&(t.textBaseline="middle"),t.fillStyle=null!=(o=null!=W?W:w.legends.text.fill)?o:"black",t.fillText(String(e.label),r+d,l+h)})),t.restore()},E=function(t,e){var i=e.containerWidth,n=e.containerHeight,o=e.anchor,l=e.translateX,a=void 0===l?0:l,c=e.translateY,s=void 0===c?0:c,d=e.scale,h=e.length,g=void 0===h?y.length:h,m=e.thickness,f=void 0===m?y.thickness:m,u=e.direction,v=void 0===u?y.direction:u,p=e.ticks,b=e.tickPosition,k=void 0===b?y.tickPosition:b,S=e.tickSize,W=void 0===S?y.tickSize:S,O=e.tickSpacing,z=void 0===O?y.tickSpacing:O,C=e.tickOverlap,B=void 0===C?y.tickOverlap:C,w=e.tickFormat,X=void 0===w?y.tickFormat:w,Y=e.title,H=e.titleAlign,E=void 0===H?y.titleAlign:H,j=e.titleOffset,T=void 0===j?y.titleOffset:j,L=e.theme,M=A({scale:d,ticks:p,length:g,thickness:f,direction:v,tickPosition:k,tickSize:W,tickSpacing:z,tickOverlap:B,tickFormat:X,title:Y,titleAlign:E,titleOffset:T}),F=M.width,P=M.height,R=M.gradientX1,q=M.gradientY1,V=M.gradientX2,D=M.gradientY2,G=M.colorStops,I=M.ticks,N=M.titleText,_=M.titleX,J=M.titleY,K=M.titleRotation,Q=M.titleVerticalAlign,U=M.titleHorizontalAlign,Z=x({anchor:o,translateX:a,translateY:s,containerWidth:i,containerHeight:n,width:F,height:P}),$=Z.x,tt=Z.y,et={font:t.font,textAlign:t.textAlign,textBaseline:t.textBaseline};t.save(),t.translate($,tt);var it=t.createLinearGradient(R*F,q*P,V*F,D*P);G.forEach((function(t){it.addColorStop(t.offset,t.stopColor)})),t.fillStyle=it,t.fillRect(0,0,F,P),t.font=(L.legends.ticks.text.fontWeight?L.legends.ticks.text.fontWeight+" ":"")+L.legends.ticks.text.fontSize+"px "+L.legends.ticks.text.fontFamily,I.forEach((function(e){var i;(null!=(i=L.legends.ticks.line.strokeWidth)?i:0)>0&&(t.lineWidth=Number(L.axis.ticks.line.strokeWidth),L.axis.ticks.line.stroke&&(t.strokeStyle=L.axis.ticks.line.stroke),t.lineCap="square",t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.stroke()),L.legends.ticks.text.fill&&(t.fillStyle=L.legends.ticks.text.fill),t.textAlign="middle"===e.textHorizontalAlign?"center":e.textHorizontalAlign,t.textBaseline="central"===e.textVerticalAlign?"middle":e.textVerticalAlign,t.fillText(e.text,e.textX,e.textY)})),N&&(t.save(),t.translate(_,J),t.rotate(r(K)),t.font=(L.legends.title.text.fontWeight?L.legends.title.text.fontWeight+" ":"")+L.legends.title.text.fontSize+"px "+L.legends.title.text.fontFamily,L.legends.title.text.fill&&(t.fillStyle=L.legends.title.text.fill),t.textAlign="middle"===U?"center":U,t.textBaseline=Q,t.fillText(N,0,0),t.restore()),t.restore(),t.font=et.font,t.textAlign=et.textAlign,t.textBaseline=et.textBaseline},j=function(t){var e=t.scale,i=t.domain,n=t.reverse,o=void 0!==n&&n,r=t.valueFormat,l=void 0===r?function(t){return t}:r,a=t.separator,c=void 0===a?" - ":a;return h((function(){var t=(null!=i?i:e.range()).map((function(t,i){var n=e.invertExtent(t),o=n[0],r=n[1];return{id:t,index:i,extent:[o,r],label:""+l(o)+c+l(r),value:e(o),color:t}}));return o&&t.reverse(),t}),[i,e,o,c,l])},T={data:g.arrayOf(g.object),anchor:g.oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:g.number,translateY:g.number,direction:g.oneOf(["row","column"]).isRequired,itemsSpacing:g.number,itemWidth:g.number.isRequired,itemHeight:g.number.isRequired,itemDirection:g.oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:g.string,itemBackground:g.string,itemOpacity:g.number,symbolShape:g.oneOfType([g.oneOf(["circle","diamond","square","triangle"]),g.func]),symbolSize:g.number,symbolSpacing:g.number,symbolBorderWidth:g.number,symbolBorderColor:g.string,onClick:g.func,onMouseEnter:g.func,onMouseLeave:g.func,effects:g.arrayOf(g.shape({on:g.oneOfType([g.oneOf(["hover"])]).isRequired,style:g.shape({itemTextColor:g.string,itemBackground:g.string,itemOpacity:g.number,symbolSize:g.number,symbolBorderWidth:g.number,symbolBorderColor:g.string}).isRequired}))};
//# sourceMappingURL=nivo-legends.es.js.map
