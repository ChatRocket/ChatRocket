Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r=function(e,t){if(!e[t])return"contentBoxSize"===t?{inlineSize:e.contentRect.width,blockSize:e.contentRect.height}:{inlineSize:Math.round(e.target.getBoundingClientRect().width),blockSize:Math.round(e.target.getBoundingClientRect().height)};var n=e[t],r=Array.isArray(n)?n[0]:n;return{blockSize:r.blockSize,inlineSize:r.inlineSize}},u=function(e){return r(e,"contentBoxSize")},o=function(e){return r(e,"borderBoxSize")},i=function(t,n,r){var u=e.useCallback(t,r),o=e.useRef(),i=e.useRef(),c=e.useCallback((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o.current=function(){u.apply(void 0,e)},clearTimeout(i.current),i.current=setTimeout(o.current,n)}),[u,n]),a=e.useCallback((function(){clearTimeout(i.current),o.current()}),[]),f=e.useCallback((function(){clearTimeout(i.current)}),[]);return e.useEffect((function(){return function(){f()}}),[f]),e.useMemo((function(){return Object.assign(c,{flush:a,cancel:f})}),[c,a,f])},c="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)};function f(e,t,n,r){return new(n||(n=Promise))((function(u,o){function i(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,u,o,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(u=2&o[0]?r.return:o[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(u=i.trys,(u=u.length>0&&u[u.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){i.label=o[1];break}if(6===o[0]&&i.label<u[1]){i.label=u[1],u=o;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(o);break}u[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function l(e,t,n){if(n||2===arguments.length)for(var r,u=0,o=t.length;u<o;u++)!r&&u in t||(r||(r=Array.prototype.slice.call(t,0,u)),r[u]=t[u]);return e.concat(r||Array.prototype.slice.call(t))}var d=[{name:"xs",minViewportWidth:null,columns:4,gutterWidth:16},{name:"sm",minViewportWidth:600,columns:8,gutterWidth:16},{name:"md",minViewportWidth:768,columns:8,gutterWidth:24},{name:"lg",minViewportWidth:1024,columns:12,gutterWidth:24},{name:"xl",minViewportWidth:1280,columns:12,gutterWidth:24},{name:"xxl",minViewportWidth:1600,columns:12,gutterWidth:24},{name:"xxxl",minViewportWidth:1920,columns:12,gutterWidth:24}],v={exports:{}},p={},b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function m(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var y=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,u=m(e),o=1;o<arguments.length;o++){for(var i in n=Object(arguments[o]))h.call(n,i)&&(u[i]=n[i]);if(b){r=b(n);for(var c=0;c<r.length;c++)g.call(n,r[c])&&(u[r[c]]=n[r[c]])}}return u},S=y,x=n.default;p.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,r=x.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=r[0];var u=r[1];return r=e.value,e.getCurrentValue===t&&e.subscribe===n||(r=t(),u({getCurrentValue:t,subscribe:n,value:r})),x.useDebugValue(r),x.useEffect((function(){function e(){if(!r){var e=t();u((function(r){return r.getCurrentValue!==t||r.subscribe!==n||r.value===e?r:S({},r,{value:e})}))}}var r=!1,o=n(e);return e(),function(){r=!0,o()}}),[t,n]),r};var w,z,E={};"production"!==process.env.NODE_ENV&&(w=y,z=n.default,E.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,r=z.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}})),u=r[0],o=r[1],i=u.value;return u.getCurrentValue===t&&u.subscribe===n||(i=t(),o({getCurrentValue:t,subscribe:n,value:i})),z.useDebugValue(i),z.useEffect((function(){var e=!1,r=function(){if(!e){var r=t();o((function(e){return e.getCurrentValue!==t||e.subscribe!==n||e.value===r?e:w({},e,{value:r})}))}},u=n(r);return r(),function(){e=!0,u()}}),[t,n]),i}),"production"===process.env.NODE_ENV?v.exports=p:v.exports=E;var k=function(e,t,n){return function(e,t,n){return!Array.isArray(t)||e.current!==t&&(e.current.length!==t.length||e.current.some((function(e,r){return!n(e,t[r])})))}(e,t,n)&&(e.current=t),e.current},C=function(t,n){void 0===n&&(n=Object.is);var r=e.useRef(Array.isArray(t)?t:[]);return k(r,t,n)},O=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=C(t),u=e.useMemo((function(){if("undefined"==typeof window||"function"!=typeof window.matchMedia)return{getCurrentValue:function(){return Array.from({length:r.length},(function(){return!1}))},subscribe:function(){return function(){}}};var e=r.map((function(e){return window.matchMedia(e)}));return{getCurrentValue:function(){return"undefined"==typeof window||"function"!=typeof window.matchMedia?Array.from({length:r.length},(function(){return!1})):e.map((function(e){return e.matches}))},subscribe:function(t){return e.forEach((function(e){"function"!=typeof e.addEventListener?e.addListener(t):e.addEventListener("change",t)})),function(){e.forEach((function(e){"function"!=typeof e.removeEventListener?e.removeListener(t):e.removeEventListener("change",t)}))}}}}),[r]);return v.exports.useSubscription(u)},R=d.slice(1).map((function(e){return"(min-width: "+e.minViewportWidth+"px)"})),B=function(t){var n=e.useRef(t),r=e.useRef((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=n.current).call.apply(e,l([void 0],t))}));return c((function(){n.current=t})),r.current},V=function(e){return!!O.apply(void 0,e?[e]:[])[0]},j=function(e){return V("(prefers-color-scheme: "+(e||"light")+")")};function L(e,t){var n=e[0],r=e[1];return[n,i(r,t,[])]}function W(t,n){return L(e.useState(t),n)}var D,M=Symbol("empty"),T="undefined"!=typeof window&&window.document?function(t){var n=e.useRef(M);return e.useLayoutEffect((function(){n.current===M&&(n.current=t())}),[t]),n}:function(t){return e.useRef(t())},N=function(e){return"function"==typeof e},P=function(e){return"object"==typeof e};!function(e){e.t="top",e.b="bottom",e.l="left",e.r="right",e.s="start",e.e="end",e.m="middle"}(D||(D={}));var A={start:"sem",middle:"mse",end:"esm"},I={top:"tbrl",bottom:"btrl",right:"rltb",left:"lrbt"},_={style:{position:"fixed",visibility:"hidden",top:"-9999px",left:"-9999px"}};function q(e){return function(e){for(var t=[],n=e.parentNode;n&&n!==document;n=n.parentNode)t.push(n);return t.filter((function(e){return e.nodeType!==Node.TEXT_NODE}))}(e)}var H=function(t,n,r){return void 0===n&&(n=!1),e.useEffect((function(){if(t.current&&(r(),n)){var e=q(t.current),u={passive:!0};return window.addEventListener("resize",r),e.forEach((function(e){return e.addEventListener("scroll",r,u)})),function(){window.removeEventListener("resize",r),e.forEach((function(e){return e.removeEventListener("scroll",r)}))}}}),[n,r,t])},J=function(e){var t,n=e.placement,r=void 0===n?"bottom-start":n,u=e.container,o=e.targetBoundaries,i=e.variantStore,c=e.target,f=e.margin,s=void 0===f?0:f;if(!o)return _;for(var l=u.top,d=u.left,v=u.bottom,p=u.right,b=r.split("-"),h=b[0],g=b[1],m=I[h],y=A[void 0===g?"middle":g],S=0,x=m;S<x.length;S++){var w=x[S],z=["t","b"].includes(w),E=z?["top","left"]:["left","top"],k=E[0],C=E[1],O=o[w],R=z?[c.height,c.width]:[c.width,c.height],B=R[1],V=z?[v,p]:[p,v],j=V[1],L=z?[l,d]:[d,l],W=L[1];if(!(O<L[0]||O+R[0]>V[0]))for(var M=0,T=y;M<T.length;M++){var N=T[M],P=i[(z?"v":"h")+N];if(!(P<W||P+B>j))return{style:(t={},t[k]=O+"px",t[C]=P+"px",t.position="fixed",t.zIndex="9999",t.opacity=1,t),placement:D[w]+"-"+D[N]}}}var q=m[0],H=["t","b"].includes(q),J=o[q],Q=i[(H?"v":"h")+y[0]];return{style:a(a({top:J+"px",left:Q+"px",position:"fixed"},v<c.height+J&&{bottom:s,display:"flex"}),{ZIndex:"9999"}),placement:D[q]+"-"+D[y[0]]}},Q=function(e){var t=e.referenceBox,n=e.target,r=e.margin,u=void 0===r?0:r;return t&&n&&{t:t.top-n.height-u,b:t.bottom+u,r:t.right+u,l:t.left-n.width-u}},U=function(e){var t=e.referenceBox,n=e.target;return t&&n&&{vm:-n.width/2+(t.left+t.width/2),vs:t.left,ve:t.left+t.width-n.width,hs:t.bottom-t.height,he:t.bottom-n.height,hm:t.bottom-t.height/2-n.height/2}},F=function(t,n){var r=null;"undefined"!=typeof window&&(r="function"==typeof t?t():t);var u=function(e){return"fuselage-"+n+"-"+e};return function(t,n){var o=e.useState((function(){if(!r)return n;var e=r.getItem(u(t));return e?JSON.parse(e):n})),i=o[0],c=o[1],a=e.useCallback((function(e){c((function(n){var o="function"==typeof e?e(n):e;return r.setItem(u(t),JSON.stringify(o)),o}))}),[t]);return e.useEffect((function(){var e=function(e){e.key===u(t)&&c(JSON.parse(e.newValue))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[t]),[i,a]}},G=F((function(){return window.localStorage}),"localStorage"),X=F((function(){return window.sessionStorage}),"sessionStorage");exports.getPositionStyle=J,exports.getTargetBoundaries=Q,exports.getVariantBoundaries=U,exports.useAutoFocus=function(t,n){void 0===t&&(t=!0);var r=e.useRef(),u=(n||{}).preventScroll;return e.useEffect((function(){t&&r.current&&r.current.focus({preventScroll:u})}),[r,t,u]),r},exports.useBorderBoxSize=function(t,n){void 0===n&&(n={});var r=e.useState((function(){var e,n,r,u;return{inlineSize:null!==(n=null===(e=t.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==n?n:0,blockSize:null!==(u=null===(r=t.current)||void 0===r?void 0:r.offsetHeight)&&void 0!==u?u:0}})),u=r[0],a=r[1],f=i(a,n.debounceDelay);return c((function(){var e=t.current;if(e){var n=new ResizeObserver((function(e){if(0!==e.length){var t=o(e[0]);f((function(e){return e.inlineSize===t.inlineSize&&e.blockSize===t.blockSize?e:{inlineSize:t.inlineSize,blockSize:t.blockSize}}))}}));return n.observe(e),a({inlineSize:e.offsetWidth,blockSize:e.offsetHeight}),function(){n.unobserve(e)}}}),[f]),u},exports.useBreakpoints=function(){var t=O.apply(void 0,R);return e.useMemo((function(){return t.reduce((function(e,t,n){return t?l(l([],e),[d[n+1].name]):e}),[d[0].name])}),[t])},exports.useClipboard=function(t,n){var r=void 0===n?{}:n,u=r.clearTime,o=void 0===u?2e3:u,i=r.onCopySuccess,c=void 0===i?function(){}:i,a=r.onCopyError,l=void 0===a?function(){}:a,d=e.useState(!1),v=d[0],p=d[1],b=B((function(e){return f(void 0,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:null==e||e.preventDefault(),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(t)];case 2:return r.sent(),c(e),p(!0),[3,4];case 3:return n=r.sent(),l(n),[3,4];case 4:return[2]}}))}))}));return e.useEffect((function(){if(v){var e=setTimeout((function(){p(!1)}),o);return function(){return clearTimeout(e)}}}),[v,o]),{copy:b,hasCopied:v}},exports.useContentBoxSize=function(t,n){var r,o,a,f;void 0===n&&(n={});var s=e.useState({inlineSize:null!==(o=null===(r=t.current)||void 0===r?void 0:r.clientWidth)&&void 0!==o?o:0,blockSize:null!==(f=null===(a=t.current)||void 0===a?void 0:a.clientHeight)&&void 0!==f?f:0}),l=s[0],d=s[1],v=i(d,n.debounceDelay);return c((function(){var e=t.current;if(e){var n=new ResizeObserver((function(e){if(0!==e.length){var t=u(e[0]);v((function(e){return e.inlineSize===t.inlineSize&&e.blockSize===t.blockSize?e:{inlineSize:t.inlineSize,blockSize:t.blockSize}}))}}));return n.observe(e),d({inlineSize:e.clientWidth,blockSize:e.clientHeight}),function(){n.unobserve(e)}}}),[v]),l},exports.useDarkMode=function(e){var t=j("dark");return void 0!==e?e:t},exports.useDebouncedCallback=i,exports.useDebouncedReducer=function(t,n,r,u){return L(e.useReducer(t,n,r),u)},exports.useDebouncedState=W,exports.useDebouncedUpdates=L,exports.useDebouncedValue=function(t,n){var r=e.useState((function(){return t})),u=r[0],o=r[1];return e.useEffect((function(){var e=setTimeout((function(){o((function(){return t}))}),n);return function(){clearTimeout(e)}}),[t,n]),u},exports.useIsomorphicLayoutEffect=c,exports.useLazyRef=T,exports.useLocalStorage=G,exports.useMediaQueries=O,exports.useMediaQuery=V,exports.useMergedRefs=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e.useRef(t);return c((function(){r.current=t})),e.useCallback((function(e){r.current.filter(Boolean).forEach((function(t){N(t)?t(e):P(t)&&(t.current=e)}))}),[])},exports.useMutableCallback=B,exports.useOutsideClick=function(t,n){var r=B((function(e){if(t.every((function(t){return e&&t.current&&!t.current.contains(e.target)})))return n(e)}));e.useEffect((function(){return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}),[r])},exports.usePosition=function(t,n,r){var u=r.margin,o=void 0===u?8:u,i=r.placement,c=void 0===i?"bottom-start":i,a=r.container,f=void 0===a?document.body:a,s=r.watch,l=void 0===s||s,d=e.useRef(f),v=W(_,10),p=v[0],b=v[1],h=B((function(){var e=n.current.getBoundingClientRect(),r=Q({referenceBox:t.current.getBoundingClientRect(),target:e,margin:o}),u=U({referenceBox:t.current.getBoundingClientRect(),target:e});b(J({placement:c,container:d.current.getBoundingClientRect(),targetBoundaries:r,variantStore:u,target:e,margin:o}))}));return H(n,l,h),H(t,l,h),H(d,l,h),p},exports.usePrefersColorScheme=j,exports.usePrefersReducedData=function(){return V("(prefers-reduced-data: reduce)")},exports.usePrefersReducedMotion=function(){return V("(prefers-reduced-motion: reduce)")},exports.usePrevious=function(t){var n=e.useRef();return e.useEffect((function(){n.current=t})),n.current},exports.useResizeObserver=function(t){var n=(void 0===t?{}:t).debounceDelay,r=e.useRef(),i=W({borderBoxSize:{inlineSize:void 0,blockSize:void 0},contentBoxSize:{inlineSize:void 0,blockSize:void 0}},n),c=i[0],a=c.borderBoxSize,f=c.contentBoxSize,s=i[1];return e.useEffect((function(){var e=new ResizeObserver((function(e){var t=e[0];s({contentBoxSize:u(t),borderBoxSize:o(t)})}));return r.current&&e.observe(r.current),function(){e.disconnect()}}),[s]),{ref:r,contentBoxSize:f,borderBoxSize:a}},exports.useSafely=function(t){var n=t[0],r=t[1],u=e.useRef(r);return e.useEffect((function(){return function(){u.current=function(){}}}),[]),[n,B((function(e){(0,u.current)(e)}))]},exports.useSessionStorage=X,exports.useStableArray=C,exports.useToggle=function(t){var n=e.useState((function(){return"function"==typeof t?!!t():!!t})),r=n[0],u=n[1],o=B((function(e){u((function(){return"boolean"==typeof e?e:"function"==typeof e?e(r):!r}))}));return[r,o]},exports.useUniqueId=function(){var t=e.useRef(),n=e.useMemo((function(){return t.current||(t.current=Math.random().toString(36).slice(2)),t.current}),[]);return e.useDebugValue(n),n};
//# sourceMappingURL=index.js.map
