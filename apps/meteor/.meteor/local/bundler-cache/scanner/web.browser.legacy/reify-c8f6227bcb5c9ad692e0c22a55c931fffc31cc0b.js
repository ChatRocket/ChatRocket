"use strict";var t=require("react"),n=require("lodash/filter"),e=require("lodash/isNumber"),i=require("lodash/omit"),o=require("@nivo/core"),a=require("@react-spring/web"),s=require("react/jsx-runtime");function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},r.apply(this,arguments)}var u={dotSize:4,noteWidth:120,noteTextOffset:8,animate:!0},l=function(n){var e=typeof n;return t.isValidElement(n)||"string"===e||"function"===e||"object"===e},h=function(t){var n=typeof t;return"string"===n||"function"===n},d=function(t){return"circle"===t.type},c=function(t){return"dot"===t.type},x=function(t){return"rect"===t.type},f=function(t){var e=t.data,o=t.annotations,a=t.getPosition,s=t.getDimensions;return o.reduce((function(t,o){var u=o.offset||0;return[].concat(t,n(e,o.match).map((function(t){var n=a(t),e=s(t);return(d(o)||x(o))&&(e.size=e.size+2*u,e.width=e.width+2*u,e.height=e.height+2*u),r({},i(o,["match","offset"]),n,e,{size:o.size||e.size,datum:t})})))}),[])},y=function(t,n,e,i){var a=Math.atan2(i-n,e-t);return o.absoluteAngleDegrees(o.radiansToDegrees(a))},m=function(t){var n,i,a=t.x,s=t.y,r=t.noteX,l=t.noteY,h=t.noteWidth,c=void 0===h?u.noteWidth:h,f=t.noteTextOffset,m=void 0===f?u.noteTextOffset:f;if(e(r))n=a+r;else{if(void 0===r.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");n=r.abs}if(e(l))i=s+l;else{if(void 0===l.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");i=l.abs}var g=a,p=s,k=y(a,s,n,i);if(d(t)){var W=o.positionFromAngle(o.degreesToRadians(k),t.size/2);g+=W.x,p+=W.y}if(x(t)){var v=Math.round((k+90)/45)%8;0===v&&(p-=t.height/2),1===v&&(g+=t.width/2,p-=t.height/2),2===v&&(g+=t.width/2),3===v&&(g+=t.width/2,p+=t.height/2),4===v&&(p+=t.height/2),5===v&&(g-=t.width/2,p+=t.height/2),6===v&&(g-=t.width/2),7===v&&(g-=t.width/2,p-=t.height/2)}var b=n,w=n;return(k+90)%360>180?(b-=c,w-=c):w+=c,{points:[[g,p],[n,i],[w,i]],text:[b,i-m],angle:k+90}},g=function(n){return t.useMemo((function(){return m(n)}),[n])},p=function(n){var e=n.datum,u=n.x,l=n.y,h=n.note,d=o.useTheme(),c=o.useMotionConfig(),x=c.animate,f=c.config,y=a.useSpring({x:u,y:l,config:f,immediate:!x});return"function"==typeof h?t.createElement(h,{x:u,y:l,datum:e}):s.jsxs(s.Fragment,{children:[d.annotations.text.outlineWidth>0&&s.jsx(a.animated.text,{x:y.x,y:y.y,style:r({},d.annotations.text,{strokeLinejoin:"round",strokeWidth:2*d.annotations.text.outlineWidth,stroke:d.annotations.text.outlineColor}),children:h}),s.jsx(a.animated.text,{x:y.x,y:y.y,style:i(d.annotations.text,["outlineWidth","outlineColor"]),children:h})]})},k=function(n){var e=n.points,i=n.isOutline,u=void 0!==i&&i,l=o.useTheme(),h=t.useMemo((function(){var t=e[0];return e.slice(1).reduce((function(t,n){return t+" L"+n[0]+","+n[1]}),"M"+t[0]+","+t[1])}),[e]),d=o.useAnimatedPath(h);if(u&&l.annotations.link.outlineWidth<=0)return null;var c=r({},l.annotations.link);return u&&(c.strokeLinecap="square",c.strokeWidth=l.annotations.link.strokeWidth+2*l.annotations.link.outlineWidth,c.stroke=l.annotations.link.outlineColor,c.opacity=l.annotations.link.outlineOpacity),s.jsx(a.animated.path,{fill:"none",d:d,style:c})},W=function(t){var n=t.x,e=t.y,i=t.size,u=o.useTheme(),l=o.useMotionConfig(),h=l.animate,d=l.config,c=a.useSpring({x:n,y:e,radius:i/2,config:d,immediate:!h});return s.jsxs(s.Fragment,{children:[u.annotations.outline.outlineWidth>0&&s.jsx(a.animated.circle,{cx:c.x,cy:c.y,r:c.radius,style:r({},u.annotations.outline,{fill:"none",strokeWidth:u.annotations.outline.strokeWidth+2*u.annotations.outline.outlineWidth,stroke:u.annotations.outline.outlineColor,opacity:u.annotations.outline.outlineOpacity})}),s.jsx(a.animated.circle,{cx:c.x,cy:c.y,r:c.radius,style:u.annotations.outline})]})},v=function(t){var n=t.x,e=t.y,i=t.size,l=void 0===i?u.dotSize:i,h=o.useTheme(),d=o.useMotionConfig(),c=d.animate,x=d.config,f=a.useSpring({x:n,y:e,radius:l/2,config:x,immediate:!c});return s.jsxs(s.Fragment,{children:[h.annotations.outline.outlineWidth>0&&s.jsx(a.animated.circle,{cx:f.x,cy:f.y,r:f.radius,style:r({},h.annotations.outline,{fill:"none",strokeWidth:2*h.annotations.outline.outlineWidth,stroke:h.annotations.outline.outlineColor,opacity:h.annotations.outline.outlineOpacity})}),s.jsx(a.animated.circle,{cx:f.x,cy:f.y,r:f.radius,style:h.annotations.symbol})]})},b=function(t){var n=t.x,e=t.y,i=t.width,u=t.height,l=t.borderRadius,h=void 0===l?6:l,d=o.useTheme(),c=o.useMotionConfig(),x=c.animate,f=c.config,y=a.useSpring({x:n-i/2,y:e-u/2,width:i,height:u,config:f,immediate:!x});return s.jsxs(s.Fragment,{children:[d.annotations.outline.outlineWidth>0&&s.jsx(a.animated.rect,{x:y.x,y:y.y,rx:h,ry:h,width:y.width,height:y.height,style:r({},d.annotations.outline,{fill:"none",strokeWidth:d.annotations.outline.strokeWidth+2*d.annotations.outline.outlineWidth,stroke:d.annotations.outline.outlineColor,opacity:d.annotations.outline.outlineOpacity})}),s.jsx(a.animated.rect,{x:y.x,y:y.y,rx:h,ry:h,width:y.width,height:y.height,style:d.annotations.outline})]})},w=function(t,n){n.forEach((function(n,e){var i=n[0],o=n[1];0===e?t.moveTo(i,o):t.lineTo(i,o)}))};exports.Annotation=function(t){var n=t.datum,e=t.x,i=t.y,o=t.note,a=g(t);if(!l(o))throw new Error("note should be a valid react element");return s.jsxs(s.Fragment,{children:[s.jsx(k,{points:a.points,isOutline:!0}),d(t)&&s.jsx(W,{x:e,y:i,size:t.size}),c(t)&&s.jsx(v,{x:e,y:i,size:t.size}),x(t)&&s.jsx(b,{x:e,y:i,width:t.width,height:t.height,borderRadius:t.borderRadius}),s.jsx(k,{points:a.points}),s.jsx(p,{datum:n,x:a.text[0],y:a.text[1],note:o})]})},exports.bindAnnotations=f,exports.computeAnnotation=m,exports.defaultProps=u,exports.getLinkAngle=y,exports.isCanvasNote=h,exports.isCircleAnnotation=d,exports.isDotAnnotation=c,exports.isRectAnnotation=x,exports.isSvgNote=l,exports.renderAnnotationsToCanvas=function(t,n){var e=n.annotations,i=n.theme;0!==e.length&&(t.save(),e.forEach((function(n){if(!h(n.note))throw new Error("note is invalid for canvas implementation");i.annotations.link.outlineWidth>0&&(t.lineCap="square",t.strokeStyle=i.annotations.link.outlineColor,t.lineWidth=i.annotations.link.strokeWidth+2*i.annotations.link.outlineWidth,t.beginPath(),w(t,n.computed.points),t.stroke(),t.lineCap="butt"),d(n)&&i.annotations.outline.outlineWidth>0&&(t.strokeStyle=i.annotations.outline.outlineColor,t.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),c(n)&&i.annotations.symbol.outlineWidth>0&&(t.strokeStyle=i.annotations.symbol.outlineColor,t.lineWidth=2*i.annotations.symbol.outlineWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),x(n)&&i.annotations.outline.outlineWidth>0&&(t.strokeStyle=i.annotations.outline.outlineColor,t.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),t.strokeStyle=i.annotations.link.stroke,t.lineWidth=i.annotations.link.strokeWidth,t.beginPath(),w(t,n.computed.points),t.stroke(),d(n)&&(t.strokeStyle=i.annotations.outline.stroke,t.lineWidth=i.annotations.outline.strokeWidth,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.stroke()),c(n)&&(t.fillStyle=i.annotations.symbol.fill,t.beginPath(),t.arc(n.x,n.y,n.size/2,0,2*Math.PI),t.fill()),x(n)&&(t.strokeStyle=i.annotations.outline.stroke,t.lineWidth=i.annotations.outline.strokeWidth,t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),t.stroke()),"function"==typeof n.note?n.note(t,{datum:n.datum,x:n.computed.text[0],y:n.computed.text[1],theme:i}):(t.font=i.annotations.text.fontSize+"px "+i.annotations.text.fontFamily,t.textAlign="left",t.textBaseline="alphabetic",t.fillStyle=i.annotations.text.fill,t.strokeStyle=i.annotations.text.outlineColor,t.lineWidth=2*i.annotations.text.outlineWidth,i.annotations.text.outlineWidth>0&&(t.lineJoin="round",t.strokeText(n.note,n.computed.text[0],n.computed.text[1]),t.lineJoin="miter"),t.fillText(n.note,n.computed.text[0],n.computed.text[1]))})),t.restore())},exports.useAnnotations=function(n){var e=n.data,i=n.annotations,o=n.getPosition,a=n.getDimensions;return t.useMemo((function(){return f({data:e,annotations:i,getPosition:o,getDimensions:a})}),[e,i,o,a])},exports.useComputedAnnotation=g,exports.useComputedAnnotations=function(n){var e=n.annotations;return t.useMemo((function(){return e.map((function(t){return r({},t,{computed:m(r({},t))})}))}),[e])};
//# sourceMappingURL=nivo-annotations.cjs.js.map
