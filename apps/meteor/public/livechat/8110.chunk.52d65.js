/*! For license information please see 8110.chunk.52d65.js.LICENSE.txt */
"use strict";(self.webpackChunk_rocket_chat_livechat=self.webpackChunk_rocket_chat_livechat||[]).push([[8110],{80123:function(e,t,n){n.d(t,{g:function(){return r}});var r=(0,n(67668).createContext)({})},8110:function(e,t,n){n.r(t),n.d(t,{Markup:function(){return we},MarkupInteractionContext:function(){return o.g},PreviewMarkup:function(){return Ae}});var r,a,i,o=n(80123),u=n(26414),l=n(67668),c=n(27049),s=(0,l.memo)((function(e){var t=e.text,n=(0,c.$G)().t,r=(0,l.useContext)(o.g),a=r.highlightRegex,i=r.markRegex,s=(0,l.useMemo)((function(){var e,r;if(a){var o=t.split(a()),c=null!==(e=o.shift())&&void 0!==e?e:"";return(0,u.BX)(u.HY,{children:[(0,u.tZ)(u.HY,{children:c}),o.map((function(e,t){return t%2==0?(0,u.tZ)("mark",{title:n("Highlighted_chosen_word"),className:"highlight-text",children:e},t):(0,u.tZ)(l.Fragment,{children:e},t)}))]})}if(i){var s=t.split(i()),v=null!==(r=s.shift())&&void 0!==r?r:"";return(0,u.BX)(u.HY,{children:[(0,u.tZ)(u.HY,{children:v}),s.map((function(e,t){return t%2==0?(0,u.tZ)("mark",{children:e},t):(0,u.tZ)(l.Fragment,{children:e},t)}))]})}return t}),[a,i,t,n]);return(0,u.tZ)(u.HY,{children:s})})),v=function(e){var t=e.children,n=void 0===t?[]:t,r=e.level,a="h"+(void 0===r?1:r);return(0,u.tZ)(a,{children:n.map((function(e,t){return(0,u.tZ)(s,{text:e.value},t)}))})},f=function(e){var t=e.code;return(0,u.tZ)("code",{className:"code-colors inline",children:(0,u.tZ)(s,{text:t})})},d=(0,l.memo)((function(e){var t=e.r,n=e.g,r=e.b,a=e.a;return(0,u.BX)("span",{children:[(0,u.tZ)("span",{style:{backgroundColor:"rgba("+t+", "+n+", "+r+", "+a/255*100+"%)",display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle",marginInlineEnd:"0.5em"}}),"rgba(",t,", ",n,", ",r,", ",a/255*100,"%)"]})})),h=n(72368),p=n(11137),m=n.n(p),g=(0,l.memo)((function(e){var t,n=e.big,r=void 0!==n&&n,a=e.preview,i=void 0!==a&&a,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["big","preview"]),s=(0,l.useContext)(o.g).detectEmoji,v=(0,l.useMemo)((function(){var e;return"unicode"in c?c.unicode:":"+(null!==(e=c.shortCode)&&void 0!==e?e:c.value.value)+":"}),[c]),f=m().sanitize(v),d=(0,l.useMemo)((function(){var e=null==s?void 0:s(f);return 0!==(null==e?void 0:e.length)?e:void 0}),[s,f]);return(0,u.tZ)(u.HY,{children:null!==(t=null==d?void 0:d.map((function(e,t){var n=e.name,a=e.className,o=e.image,l=e.content;return(0,u.tZ)("span",{title:n,children:i?(0,u.tZ)(h.ThreadMessageEmoji,{className:a,name:n,image:o,children:l}):(0,u.tZ)(h.MessageEmoji,{big:r,className:a,name:n,image:o,children:l})},t)})))&&void 0!==t?t:(0,u.tZ)("span",{role:"img","aria-label":":"===f.charAt(0)?f:void 0,children:f})})})),y=(0,l.memo)((function(e){var t=e.big,n=void 0!==t&&t,r=e.preview,a=void 0!==r&&r,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["big","preview"]),c=(0,l.useContext)(o.g),v=c.convertAsciiToEmoji,f=c.useEmoji,d=(0,l.useMemo)((function(){return"shortCode"in i&&i.value.value!==i.shortCode?i.value.value:void 0}),[i]);return!f&&"shortCode"in i?(0,u.tZ)(s,{text:i.shortCode===i.value.value?":"+i.shortCode+":":i.value.value}):!v&&d?(0,u.tZ)(s,{text:d}):(0,u.tZ)(g,Object.assign({big:n,preview:a},i))})),b=(0,l.memo)((function(e){return(0,u.tZ)(y,Object.assign({},e))})),O=n(62495),Z=n(88717),E=n(82717),w=(0,Z.Z)("span")(r||(a=["\n\ttext-decoration: underline;\n\ttext-decoration-color: ",";\n"],i||(i=a.slice(0)),a.raw=i,r=a),O.oB),I=function(e){var t=e.children,n=e.code,r=(0,l.useState)(null),a=r[0],i=r[1];return(0,u.tZ)(E.ErrorBoundary,{children:t,onError:i,fallback:(0,u.tZ)(w,{title:null==a?void 0:a.message,children:n})})},x=function(e,t){return t?"#"+e:e},N=(0,l.memo)((function(e){var t,n=e.mention,r=(0,c.$G)().t,a=(0,l.useContext)(o.g),i=a.resolveChannelMention,s=a.onChannelMentionClick,v=a.showMentionSymbol,f=(0,l.useMemo)((function(){return null==i?void 0:i(n)}),[n,i]),d=(0,l.useMemo)((function(){return f?null==s?void 0:s(f):void 0}),[f,s]);return f?(0,u.tZ)(h.Message.Highlight,{title:r("Mentions_channel"),tabIndex:0,role:"button",variant:"link",clickable:!0,onClick:d,onKeyDown:function(e){("Enter"===e.code||"Space"===e.code)&&(null==d||d(e))},children:x(null!==(t=f.fname)&&void 0!==t?t:n,v)}):(0,u.BX)(u.HY,{children:["#",n]})})),T=function(e,t){return t?"@"+e:e},_=(0,l.memo)((function(e){var t,n=e.mention,r=(0,c.$G)().t,a=(0,l.useContext)(o.g),i=a.resolveUserMention,s=a.onUserMentionClick,v=a.ownUserId,f=a.useRealName,d=a.showMentionSymbol,p=a.triggerProps,m=(0,l.useMemo)((function(){return null==i?void 0:i(n)}),[n,i]),g=(0,l.useMemo)((function(){return m?null==s?void 0:s(m):void 0}),[m,s]);return"all"===n?(0,u.tZ)(h.Message.Highlight,{title:r("Mentions_all_room_members"),variant:"relevant",children:T("all",d)}):"here"===n?(0,u.tZ)(h.Message.Highlight,{title:r("Mentions_online_room_members"),variant:"relevant",children:T("here",d)}):m?(0,u.tZ)(h.Message.Highlight,Object.assign({variant:m._id===v?"critical":"other",title:m._id===v?r("Mentions_you"):r("Mentions_user"),clickable:!0,tabIndex:0,role:"button",onClick:g,onKeyDown:function(e){("Enter"===e.code||"Space"===e.code)&&(null==g||g(e))}},p,{"data-uid":m._id,children:T(null!==(t=f?m.name:m.username)&&void 0!==t?t:n,d)})):(0,u.BX)(u.HY,{children:["@",n]})})),L=((0,l.forwardRef)((function(e,t){return(0,u.tZ)(h.Box,Object.assign({},e,{color:"default",ref:t,height:"x480",bg:"light",borderRadius:4,display:"flex",flexDirection:"column",mb:"neg-x12"}))})),n(89049)),j=n(66626),S=(n(63955),h.Select,h.TextInput,n(40553));(0,l.memo)((function(e){var t=e.small,n=e.status,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["small","status"]),a=(0,c.$G)().t,i=t?"small":"large";switch(n){case"online":case"busy":case"away":case"offline":case"disabled":return(0,u.tZ)(h.StatusBullet,Object.assign({size:i,status:n},r));default:return(0,u.tZ)(h.StatusBullet,Object.assign({size:i,title:a("Loading")},r))}})),n(58166);(0,l.forwardRef)((function(e,t){var n=e.id,r=e.icon,a=e.action,i=e.index,o=e.title,l=e["data-tooltip"],c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["id","icon","action","index","title","data-tooltip"]);return(0,u.tZ)(h.IconButton,Object.assign({"data-qa-id":"ToolBoxAction-"+r,ref:t,onClick:function(){return a(n)},"data-toolbox":i,icon:r,small:!0,position:"relative",overflow:"visible"},l?{"data-tooltip":l,title:""}:{title:o},c),n)}));var P;(0,l.forwardRef)((function(e,t){var n=e.id,r=e.icon,a=e.action,i=e.index,o=e.title,l=e["data-tooltip"],c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["id","icon","action","index","title","data-tooltip"]);return(0,u.tZ)(h.IconButton,Object.assign({"data-qa-id":"ToolBoxAction-"+r,ref:t,onClick:function(){return a(n)},"data-toolbox":i,icon:r,small:!0,position:"relative",overflow:"visible"},l?{"data-tooltip":l,title:""}:{title:o},c),n)}));var C;(0,l.forwardRef)((function(e,t){var n=e.className,r=e.collapsed,a=e.selectedOptionsCount,i=e.selectedOptionsTitle,o=e.defaultTitle,l=e.maxCount,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","collapsed","selectedOptionsCount","selectedOptionsTitle","defaultTitle","maxCount"]),v=(0,c.$G)().t,f=(0,L.css)(P||(P=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\t"]))),d=a>0&&a!==l-1;return(0,u.BX)(h.Box,Object.assign({ref:t,role:"button",tabIndex:0,display:"flex",justifyContent:"space-between",alignItems:"center",h:"x40",className:["rcx-input-box__wrapper",f].concat(Array.isArray(n)?n:[n]).filter(Boolean)},s,{children:[d?v(i)+" ("+a+")":v(o),(0,u.tZ)(h.Icon,{name:r?"chevron-up":"chevron-down",fontSize:"x20",color:"hint"})]}))})),(0,l.forwardRef)((function(e,t){var n=e.children;return(0,u.tZ)(h.Box,{ref:t,zIndex:999,w:"full",position:"absolute",mbs:40,pbs:4,children:n})})),[{name:"quickReactions",i18n:"Quick_reactions",description:"Quick_reactions_description",group:"Message",imageUrl:"images/featurePreview/quick-reactions.png",value:!1,enabled:!0},{name:"navigationBar",i18n:"Navigation_bar",description:"Navigation_bar_description",group:"Navigation",value:!1,enabled:!1},{name:"enable-timestamp-message-parser",i18n:"Enable_timestamp",description:"Enable_timestamp_description",group:"Message",imageUrl:"images/featurePreview/timestamp.png",value:!1,enabled:!0},{name:"contextualbarResizable",i18n:"Contextualbar_resizable",description:"Contextualbar_resizable_description",group:"Navigation",imageUrl:"images/featurePreview/resizable-contextual-bar.png",value:!1,enabled:!0},{name:"newNavigation",i18n:"New_navigation",description:"New_navigation_description",group:"Navigation",imageUrl:"images/featurePreview/enhanced-navigation.png",value:!1,enabled:!0},{name:"sidepanelNavigation",i18n:"Sidepanel_navigation",description:"Sidepanel_navigation_description",group:"Navigation",value:!1,enabled:!0,enableQuery:{name:"newNavigation",value:!0}}].filter((function(e){return e.enabled})),(0,L.css)(C||(C=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n\tcursor: pointer;\n\t&:focus-visible {\n\t\toutline: "," solid 1px;\n\t}\n"])),h.Palette.stroke["stroke-highlight"]);var M=function(e){var t=e.url,n=e.onLoad,r=e.onError,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["url","onLoad","onError"]),i=(0,l.useState)(!1),o=i[0],c=i[1],s=(0,j.usePrevious)(t),v=(0,j.useEffectEvent)((function(e){c(!1),null==n||n(e)})),f=(0,j.useEffectEvent)((function(e){c(!0),null==r||r(e)}));return o&&t===s?(0,u.tZ)(h.Skeleton,Object.assign({"aria-hidden":"true",variant:"rect"},a)):(0,u.tZ)(h.Avatar,Object.assign({"aria-hidden":"true",onLoad:v,onError:f,url:t},a))};(0,l.memo)((function(e){var t=e.room,n=e.url,r=e.size,a=(0,S.useRoomAvatarPath)()(t);return(0,u.tZ)(M,{url:n||a,size:r})}));var A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},k=(0,l.memo)((function(e){var t=e.username,n=e.etag,r=A(e,["username","etag"]),a=(0,S.useUserAvatarPath)(),i=r.url,o=void 0===i?a(t,n):i,l=A(r,["url"]);return(0,u.tZ)(M,Object.assign({url:o,"data-username":t,title:t},l))})),R=n(28128);function B(){B=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),u=new j(r||[]);return a(o,"_invoke",{value:N(e,n,u)}),o}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function g(){}function y(){}function b(){}var O={};c(O,o,(function(){return this}));var Z=Object.getPrototypeOf,E=Z&&Z(Z(S([])));E&&E!==n&&r.call(E,o)&&(O=E);var w=b.prototype=g.prototype=Object.create(O);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(a,i,o,u){var l=v(e[a],e,i);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(s).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return i=i?i.then(a,a):a()}})}function N(t,n,r){var a=f;return function(i,o){if(a===h)throw new Error("Generator is already running");if(a===p){if("throw"===i)throw o;return{value:e,done:!0}}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var l=T(u,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var c=v(t,n,r);if("normal"===c.type){if(a=r.done?p:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function T(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=v(a,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=b,a(w,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:y,configurable:!0}),y.displayName=c(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},I(x.prototype),c(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new x(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(w),c(w,l,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return u.type="throw",u.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}var D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},H=function(e,t){return void 0===e&&(e=""),void 0===t&&(t={}),{selector:JSON.stringify({term:e,conditions:t})}},Y=((0,l.memo)((function(e){var t=e.value,n=e.onChange,r=D(e,["value","onChange"]),a=r.conditions,i=void 0===a?{}:a,o=(0,l.useState)(""),c=o[0],s=o[1],v=(0,j.useDebouncedValue)(c,1e3),f=(0,S.useEndpoint)("GET","/v1/users.autocomplete"),d=(0,R.aM)(["usersAutoComplete",v,i],(function(){return e=void 0,t=void 0,n=void 0,r=B().mark((function e(){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f(H(v,i)));case 1:case"end":return e.stop()}}),e)})),new(n||(n=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r})).data,p=(0,l.useMemo)((function(){return(null==d?void 0:d.items.map((function(e){return{value:e.username,label:e.name||e.username}})))||[]}),[d]);return(0,u.tZ)(h.AutoComplete,Object.assign({},r,{value:t,onChange:n,filter:c,setFilter:s,"data-qa-id":"UserAutoComplete",renderSelected:function(e){var t=e.selected,n=t.value,r=t.label;return(0,u.BX)(h.Chip,{height:"x20",value:n,mie:4,children:[(0,u.tZ)(k,{size:"x20",username:n}),(0,u.tZ)(h.Box,{verticalAlign:"middle",is:"span",margin:"none",mi:4,children:r})]})},renderItem:function(e){var t=e.value,n=e.label,r=D(e,["value","label"]);return(0,u.tZ)(h.Option,Object.assign({label:n,avatar:(0,u.tZ)(k,{size:"x20",username:t})},r),t)},options:p}))})),n(92552)),X=(n(44929),new Y.Emitter,new Set,function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByTagName("base");return e.length>0?e[0].href:document.URL}),U=function(e,t){switch(e.type){case"EMOJI":return(0,u.tZ)(b,Object.assign({},e),t);case"MENTION_USER":return(0,u.tZ)(_,{mention:e.value.value},t);case"MENTION_CHANNEL":return(0,u.tZ)(N,{mention:e.value.value},t);case"PLAIN_TEXT":return(0,u.tZ)(s,{text:e.value},t);case"LINK":return(0,u.tZ)(G,{href:e.value.src.value,label:e.value.label},t);case"ITALIC":return(0,u.tZ)(F,{children:e.value},t);case"BOLD":return(0,u.tZ)(W,{children:e.value},t);case"INLINE_CODE":return(0,u.tZ)(f,{code:e.value.value},t);default:return null}},K=function(e){var t=e.children;return(0,u.tZ)(u.HY,{children:t.map((function(e,t){return"LINK"===e.type||"PLAIN_TEXT"===e.type||"ITALIC"===e.type||"BOLD"===e.type||"INLINE_CODE"===e.type?(0,u.tZ)("del",{children:U(e,t)},t):U(e,t)}))})},G=function(e){var t=e.href,n=e.label,r=(0,c.$G)().t,a=(0,l.useMemo)((function(){return(Array.isArray(n)?n:[n]).map((function(e,t){switch(e.type){case"PLAIN_TEXT":return(0,u.tZ)(s,{text:e.value},t);case"STRIKE":return(0,u.tZ)(K,{children:e.value},t);case"ITALIC":return(0,u.tZ)(F,{children:e.value},t);case"BOLD":return(0,u.tZ)(W,{children:e.value},t);default:return null}}))}),[n]);return function(e){return 0!==e.indexOf(X())}(t)?(0,u.tZ)("a",{href:t,title:t,rel:"noopener noreferrer",target:"_blank",children:a}):(0,u.tZ)("a",{href:t,title:r("Go_to_href",{href:t.replace(X(),"")}),children:a})},z=function(e,t){switch(e.type){case"EMOJI":return(0,u.tZ)(b,Object.assign({},e),t);case"MENTION_USER":return(0,u.tZ)(_,{mention:e.value.value},t);case"MENTION_CHANNEL":return(0,u.tZ)(N,{mention:e.value.value},t);case"PLAIN_TEXT":return(0,u.tZ)(s,{text:e.value},t);case"LINK":return(0,u.tZ)(G,{href:e.value.src.value,label:e.value.label},t);case"STRIKE":return(0,u.tZ)(K,{children:e.value},t);case"BOLD":return(0,u.tZ)(W,{children:e.value},t);case"INLINE_CODE":return(0,u.tZ)(f,{code:e.value.value},t);default:return null}},F=function(e){var t=e.children;return(0,u.tZ)(u.HY,{children:t.map((function(e,t){return"LINK"===e.type||"PLAIN_TEXT"===e.type||"STRIKE"===e.type||"BOLD"===e.type||"INLINE_CODE"===e.type?(0,u.tZ)("em",{children:z(e,t)},t):z(e,t)}))})},J=function(e,t){switch(e.type){case"EMOJI":return(0,u.tZ)(b,Object.assign({},e),t);case"MENTION_USER":return(0,u.tZ)(_,{mention:e.value.value},t);case"MENTION_CHANNEL":return(0,u.tZ)(N,{mention:e.value.value},t);case"PLAIN_TEXT":return(0,u.tZ)(s,{text:e.value},t);case"LINK":return(0,u.tZ)(G,{href:e.value.src.value,label:e.value.label},t);case"STRIKE":return(0,u.tZ)(K,{children:e.value},t);case"ITALIC":return(0,u.tZ)(F,{children:e.value},t);case"INLINE_CODE":return(0,u.tZ)(f,{code:e.value.value},t);default:return null}},W=function(e){var t=e.children;return(0,u.tZ)(u.HY,{children:t.map((function(e,t){return"LINK"===e.type||"PLAIN_TEXT"===e.type||"STRIKE"===e.type||"ITALIC"===e.type||"INLINE_CODE"===e.type?(0,u.tZ)("strong",{children:J(e,t)},t):J(e,t)}))})},q=function e(t){switch(t.type){case"PLAIN_TEXT":return t.value;case"ITALIC":case"BOLD":case"STRIKE":return t.value.map(e).join("");case"INLINE_CODE":return e(t.value);case"LINK":var n=e(t.value.label),r=t.value.src.value;return n?n+" ("+r+")":r;default:return""}},$={maxWidth:"100%"},Q=function(e){var t=e.src,n=e.alt,r=(0,l.useMemo)((function(){return q(n)}),[n]);return(0,u.tZ)("a",{href:t,target:"_blank",rel:"noopener noreferrer",title:r,children:(0,u.tZ)("img",{src:t,"data-title":t,alt:r,style:$})})},V=n(4990);function ee(e,t){var n=new Intl.RelativeTimeFormat(t,{style:"long"}),r=new Date(e).getTime(),a=(new Date).getTime(),i=Math.round((r-a)/1e3),o=Math.round(i/60),u=Math.round(o/60),l=Math.round(u/24),c=Math.round(l/7),s=new Date(r).getMonth()-(new Date).getMonth(),v=new Date(r).getFullYear()-(new Date).getFullYear();return Math.abs(i)<60?n.format(i,"seconds"):Math.abs(o)<60?n.format(o,"minutes"):Math.abs(u)<24?n.format(u,"hours"):Math.abs(l)<7?n.format(l,"days"):Math.abs(c)<4?n.format(c,"weeks"):Math.abs(s)<12?n.format(s,"months"):n.format(v,"years")}var te=function(e){var t=e.format,n=e.value;switch(t){case"t":return(0,u.tZ)(ne,{value:n});case"T":return(0,u.tZ)(re,{value:n});case"d":return(0,u.tZ)(ae,{value:n});case"D":return(0,u.tZ)(ie,{value:n});case"f":return(0,u.tZ)(oe,{value:n});case"F":return(0,u.tZ)(ue,{value:n});case"R":return(0,u.tZ)(ce,{value:n});default:return(0,u.BX)("time",{dateTime:n.toISOString(),children:[" ",JSON.stringify(n.getTime())]})}},ne=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"p"),dateTime:t.toISOString()})},re=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"pp"),dateTime:t.toISOString()})},ae=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"P"),dateTime:t.toISOString()})},ie=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"Pp"),dateTime:t.toISOString()})},oe=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"PPPppp"),dateTime:t.toISOString()})},ue=function(e){var t=e.value;return(0,u.tZ)(le,{value:(0,V.WUZ)(t,"PPPPpppp"),dateTime:t.toISOString()})},le=function(e){var t=e.value,n=e.dateTime;return(0,u.tZ)("time",{title:new Date(n).toLocaleString(),dateTime:n,style:{display:"inline-block"},children:(0,u.tZ)(h.Tag,{children:t})})},ce=function(e){var t=e.value,n=t.getTime(),r=(0,l.useContext)(o.g).language,a=(0,l.useState)((function(){return ee(n,null!=r?r:"en")})),i=a[0],c=a[1],s=(0,l.useState)((function(){return se(n)})),v=s[0],f=s[1];return(0,l.useEffect)((function(){var e=setInterval((function(){c(ee(t.getTime(),"en")),f(se(n))}),v);return function(){return clearInterval(e)}}),[n,v,t]),(0,u.tZ)(le,{value:i,dateTime:t.toISOString()})},se=function(e){var t=e-Date.now();return t<6e4?1e3:t<36e5?3e4:t<864e5?3e5:36e5},ve=function(e){var t=e.children;return(0,l.useContext)(o.g).enableTimestamp?(0,u.tZ)(E.ErrorBoundary,{fallback:(0,u.tZ)(u.HY,{children:new Date(1e3*parseInt(t.value.timestamp)).toUTCString()}),children:(0,u.tZ)(te,{format:t.value.format,value:new Date(1e3*parseInt(t.value.timestamp))})}):(0,u.tZ)(u.HY,{children:"<t:"+t.value.timestamp+":"+t.value.format+">"})},fe=(0,l.lazy)((function(){return Promise.all([n.e(66929),n.e(71878)]).then(n.bind(n,71878))})),de=function e(t){var n=t.children;return(0,u.tZ)(u.HY,{children:n.map((function(t,n){switch(t.type){case"BOLD":return(0,u.tZ)(W,{children:t.value},n);case"STRIKE":return(0,u.tZ)(K,{children:t.value},n);case"ITALIC":return(0,u.tZ)(F,{children:t.value},n);case"LINK":return(0,u.tZ)(G,{href:t.value.src.value,label:Array.isArray(t.value.label)?t.value.label:[t.value.label]},n);case"PLAIN_TEXT":return(0,u.tZ)(s,{text:t.value},n);case"IMAGE":return(0,u.tZ)(Q,{src:t.value.src.value,alt:t.value.label},n);case"MENTION_USER":return(0,u.tZ)(_,{mention:t.value.value},n);case"MENTION_CHANNEL":return(0,u.tZ)(N,{mention:t.value.value},n);case"INLINE_CODE":return(0,u.tZ)(f,{code:t.value.value},n);case"EMOJI":return(0,u.tZ)(b,Object.assign({},t),n);case"COLOR":return(0,u.tZ)(d,Object.assign({},t.value),n);case"INLINE_KATEX":return(0,u.tZ)(I,{code:t.value,children:(0,u.tZ)(fe,{code:t.value})},n);case"TIMESTAMP":return(0,u.tZ)(ve,{children:t},n);default:return"fallback"in t?(0,u.tZ)(e,{children:[t.fallback]},n):null}}))})},he=function(e){var t=e.items;return(0,u.tZ)("ol",{children:t.map((function(e,t){var n=e.value,r=e.number;return(0,u.tZ)("li",{value:r,children:(0,u.tZ)(de,{children:n})},t)}))})},pe=function(e){var t=e.children;return(0,u.tZ)("div",{children:(0,u.tZ)(de,{children:t})})},me=function(e){var t=e.children;return(0,u.tZ)("blockquote",{children:t.map((function(e,t){return(0,u.tZ)(pe,{children:e.value},t)}))})},ge=function(e){var t=e.tasks,n=(0,l.useContext)(o.g).onTaskChecked;return(0,u.tZ)("ul",{className:"task-list",children:t.map((function(e,t){return(0,u.BX)("li",{children:[(0,u.tZ)(h.CheckBox,{checked:e.status,onChange:null==n?void 0:n(e)})," ",(0,u.tZ)(de,{children:e.value})]},t)}))})},ye=function(e){var t=e.items;return(0,u.tZ)("ul",{children:t.map((function(e,t){return(0,u.tZ)("li",{children:(0,u.tZ)(de,{children:e.value})},t)}))})},be=function(e){return(0,u.tZ)(y,Object.assign({big:!0},e))},Oe=function(e){var t=e.emoji;return(0,u.tZ)("div",{role:"presentation",children:t.map((function(e,t){return(0,u.tZ)(be,Object.assign({},e),t)}))})},Ze=(0,l.lazy)((function(){return Promise.all([n.e(61652),n.e(77913)]).then(n.bind(n,77913))})),Ee=(0,l.lazy)((function(){return Promise.all([n.e(66929),n.e(57616)]).then(n.bind(n,57616))})),we=(0,l.memo)((function(e){var t=e.tokens;return(0,u.tZ)(u.HY,{children:t.map((function(e,t){switch(e.type){case"BIG_EMOJI":return(0,u.tZ)(Oe,{emoji:e.value},t);case"PARAGRAPH":return(0,u.tZ)(pe,{children:e.value},t);case"HEADING":return(0,u.tZ)(v,{level:e.level,children:e.value},t);case"UNORDERED_LIST":return(0,u.tZ)(ye,{items:e.value},t);case"ORDERED_LIST":return(0,u.tZ)(he,{items:e.value},t);case"TASKS":return(0,u.tZ)(ge,{tasks:e.value},t);case"QUOTE":return(0,u.tZ)(me,{children:e.value},t);case"CODE":return(0,u.tZ)(Ze,{language:e.language,lines:e.value},t);case"KATEX":return(0,u.tZ)(I,{code:e.value,children:(0,u.tZ)(Ee,{code:e.value})},t);case"LINE_BREAK":return(0,u.tZ)("br",{},t);default:return null}}))})})),Ie=function(e){var t=e.lines,n=(0,l.useMemo)((function(){var e;return null===(e=t.find((function(e){return e.value.value.trim()})))||void 0===e?void 0:e.value.value.trim()}),[t]);return n?(0,u.tZ)(u.HY,{children:n}):null},xe=function(e){var t=e.code;return(0,u.tZ)(u.HY,{children:t})},Ne=function(e){return e.toString(16).padStart(2,"0")},Te=(0,l.memo)((function(e){var t=e.r,n=e.g,r=e.b,a=e.a;return 255===a?(0,u.BX)(u.HY,{children:["#",Ne(t),Ne(n),Ne(r)]}):(0,u.BX)(u.HY,{children:["#",Ne(t),Ne(n),Ne(r),Ne(a)]})})),_e=function(e){return(0,u.tZ)(y,Object.assign({preview:!0},e))},Le=(n(5362),function(e){var t=e.code;return(0,u.tZ)(u.HY,{children:t})}),je=(0,l.memo)((function(e){var t=e.mention;return(0,u.BX)(u.HY,{children:["#",t]})})),Se=(0,l.memo)((function(e){var t=e.mention;return(0,u.BX)(u.HY,{children:["@",t]})})),Pe=function e(t){var n=t.children;return(0,u.tZ)(u.HY,{children:n.map((function(t,n){switch(t.type){case"BOLD":return(0,u.tZ)(W,{children:t.value},n);case"STRIKE":return(0,u.tZ)(K,{children:t.value},n);case"ITALIC":return(0,u.tZ)(F,{children:t.value},n);case"LINK":return(0,u.tZ)(e,{children:Array.isArray(t.value.label)?t.value.label:[t.value.label]},n);case"PLAIN_TEXT":return(0,u.tZ)(l.Fragment,{children:t.value},n);case"IMAGE":return(0,u.tZ)(e,{children:[t.value.label]},n);case"MENTION_USER":return(0,u.tZ)(Se,{mention:t.value.value},n);case"MENTION_CHANNEL":return(0,u.tZ)(je,{mention:t.value.value},n);case"INLINE_CODE":return(0,u.tZ)(xe,{code:t.value.value},n);case"EMOJI":return(0,u.tZ)(_e,Object.assign({},t),n);case"COLOR":return(0,u.tZ)(Te,Object.assign({},t.value),n);case"INLINE_KATEX":return(0,u.tZ)(I,{code:t.value,children:(0,u.tZ)(Le,{code:t.value})},n);default:return null}}))})},Ce=function(e){var t=e.emoji;return(0,u.tZ)(u.HY,{children:t.map((function(e,t){return(0,u.tZ)(_e,Object.assign({},e),t)}))})},Me=function(e){var t=e.code;return(0,u.tZ)(u.HY,{children:t})},Ae=(0,l.memo)((function(e){var t=e.tokens;if(function(e){return 1===e.length&&"BIG_EMOJI"===e[0].type}(t))return(0,u.tZ)(Ce,{emoji:t[0].value});var n=t.find((function(e){return"LINE_BREAK"!==e.type}));if(!n)return null;switch(n.type){case"PARAGRAPH":return(0,u.tZ)(Pe,{children:n.value});case"HEADING":return(0,u.tZ)(u.HY,{children:n.value.map((function(e){return e.value})).join("")});case"UNORDERED_LIST":case"ORDERED_LIST":var r=n.value[0];return(0,u.BX)(u.HY,{children:[r.number?r.number+".":"-"," ",(0,u.tZ)(Pe,{children:r.value})]});case"TASKS":var a=n.value[0];return(0,u.BX)(u.HY,{children:[a.status?"☑":"☐"," ",(0,u.tZ)(Pe,{children:a.value})]});case"QUOTE":var i=n.value[0];return(0,u.BX)(u.HY,{children:["> ",(0,u.tZ)(Pe,{children:i.value})]});case"CODE":return(0,u.tZ)(Ie,{language:n.language,lines:n.value});case"KATEX":return(0,u.tZ)(I,{code:n.value,children:(0,u.tZ)(Me,{code:n.value})});default:return null}}))}}]);
//# sourceMappingURL=8110.chunk.52d65.js.map