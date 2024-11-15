"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react")),r=e=>"checkbox"===e.type,s=e=>e instanceof Date,a=e=>null==e;const n=e=>"object"==typeof e;var o=e=>!a(e)&&!Array.isArray(e)&&n(e)&&!s(e),u=e=>o(e)&&e.target?r(e.target)?e.target.checked:e.target.value:e,i=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),l=e=>{const t=e.constructor&&e.constructor.prototype;return o(t)&&t.hasOwnProperty("isPrototypeOf")},c="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function d(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(c&&(e instanceof Blob||e instanceof FileList)||!r&&!o(e))return e;if(t=r?[]:{},r||l(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=d(e[r]));else t=e}return t}var f=e=>Array.isArray(e)?e.filter(Boolean):[],m=e=>void 0===e,y=(e,t,r)=>{if(!t||!o(e))return r;const s=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>a(e)?e:e[t]),e);return m(s)||s===e?m(e[t])?r:e[t]:s};const p={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},h={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},g="max",_="min",v="maxLength",b="minLength",x="pattern",A="required",V="validate",F=t.default.createContext(null),S=()=>t.default.useContext(F);var w=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==h.all&&(t._proxyFormState[a]=!s||h.all),r&&(r[a]=!0),e[a]}});return a},k=e=>o(e)&&!Object.keys(e).length,D=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return k(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||h.all)))},C=e=>Array.isArray(e)?e:[e],O=(e,t,r)=>r&&t?e===t:!e||!t||e===t||C(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function E(e){const r=t.default.useRef(e);r.current=e,t.default.useEffect((()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}}),[e.disabled])}function j(e){const r=S(),{control:s=r.control,disabled:a,name:n,exact:o}=e||{},[u,i]=t.default.useState(s._formState),l=t.default.useRef(!0),c=t.default.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=t.default.useRef(n);return d.current=n,E({disabled:a,next:e=>l.current&&O(d.current,e.name,o)&&D(e,c.current,s._updateFormState)&&i({...s._formState,...e}),subject:s._subjects.state}),t.default.useEffect((()=>(l.current=!0,c.current.isValid&&s._updateValid(!0),()=>{l.current=!1})),[s]),w(u,s,c.current,!1)}var T=e=>"string"==typeof e,U=(e,t,r,s,a)=>T(e)?(s&&t.watch.add(e),y(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r);function B(e){const r=S(),{control:s=r.control,name:a,defaultValue:n,disabled:o,exact:u}=e||{},i=t.default.useRef(a);i.current=a,E({disabled:o,subject:s._subjects.values,next:e=>{O(i.current,e.name,u)&&c(d(U(i.current,s._names,e.values||s._formValues,!1,n)))}});const[l,c]=t.default.useState(s._getWatch(a,n));return t.default.useEffect((()=>s._removeUnmounted())),l}var L=e=>/^\w*$/.test(e),N=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function M(e,t,r){let s=-1;const a=L(t)?[t]:N(t),n=a.length,u=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==u){const r=e[t];n=o(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}function R(e){const r=S(),{name:s,control:a=r.control,shouldUnregister:n}=e,o=i(a._names.array,s),l=B({control:a,name:s,defaultValue:y(a._formValues,s,y(a._defaultValues,s,e.defaultValue)),exact:!0}),c=j({control:a,name:s}),f=t.default.useRef(a.register(s,{...e.rules,value:l}));return f.current=a.register(s,e.rules),t.default.useEffect((()=>{const e=a._options.shouldUnregister||n,t=(e,t)=>{const r=y(a._fields,e);r&&(r._f.mount=t)};if(t(s,!0),e){const e=d(y(a._options.defaultValues,s));M(a._defaultValues,s,e),m(y(a._formValues,s))&&M(a._formValues,s,e)}return()=>{(o?e&&!a._state.action:e)?a.unregister(s):t(s,!1)}}),[s,a,o,n]),{field:{name:s,value:l,onChange:t.default.useCallback((e=>f.current.onChange({target:{value:u(e),name:s},type:p.CHANGE})),[s]),onBlur:t.default.useCallback((()=>f.current.onBlur({target:{value:y(a._formValues,s),name:s},type:p.BLUR})),[s,a]),ref:e=>{const t=y(a._fields,s);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:c,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(c.errors,s)},isDirty:{enumerable:!0,get:()=>!!y(c.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!y(c.touchedFields,s)},error:{enumerable:!0,get:()=>y(c.errors,s)}})}}const P="post";var q=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{};const W=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else o(s)&&W(s,t)}}};var $=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},H=(e,t,r={})=>r.shouldFocus||m(r.shouldFocus)?r.focusName||`${e}.${m(r.focusIndex)?t:r.focusIndex}.`:"",I=e=>({isOnSubmit:!e||e===h.onSubmit,isOnBlur:e===h.onBlur,isOnChange:e===h.onChange,isOnAll:e===h.all,isOnTouch:e===h.onTouched}),G=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),J=(e,t,r)=>{const s=f(y(e,r));return M(s,"root",t[r]),M(e,r,s),e},z=e=>"boolean"==typeof e,K=e=>"file"===e.type,Q=e=>"function"==typeof e,X=e=>{if(!c)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Y=e=>T(e),Z=e=>"radio"===e.type,ee=e=>e instanceof RegExp;const te={value:!1,isValid:!1},re={value:!0,isValid:!0};var se=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||""===e[0].value?re:{value:e[0].value,isValid:!0}:re:te}return te};const ae={isValid:!1,value:null};var ne=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ae):ae;function oe(e,t,r="validate"){if(Y(e)||Array.isArray(e)&&e.every(Y)||z(e)&&!e)return{type:r,message:Y(e)?e:"",ref:t}}var ue=e=>o(e)&&!ee(e)?e:{value:e,message:""},ie=async(e,t,s,n,u)=>{const{ref:i,refs:l,required:c,maxLength:d,minLength:f,min:p,max:h,pattern:F,validate:S,name:w,valueAsNumber:D,mount:C,disabled:O}=e._f,E=y(t,w);if(!C||O)return{};const j=l?l[0]:i,U=e=>{n&&j.reportValidity&&(j.setCustomValidity(z(e)?"":e||""),j.reportValidity())},B={},L=Z(i),N=r(i),M=L||N,R=(D||K(i))&&m(i.value)&&m(E)||X(i)&&""===i.value||""===E||Array.isArray(E)&&!E.length,P=q.bind(null,w,s,B),W=(e,t,r,s=v,a=b)=>{const n=e?t:r;B[w]={type:e?s:a,message:n,ref:i,...P(e?s:a,n)}};if(u?!Array.isArray(E)||!E.length:c&&(!M&&(R||a(E))||z(E)&&!E||N&&!se(l).isValid||L&&!ne(l).isValid)){const{value:e,message:t}=Y(c)?{value:!!c,message:c}:ue(c);if(e&&(B[w]={type:A,message:t,ref:j,...P(A,t)},!s))return U(t),B}if(!(R||a(p)&&a(h))){let e,t;const r=ue(h),n=ue(p);if(a(E)||isNaN(E)){const s=i.valueAsDate||new Date(E),a=e=>new Date((new Date).toDateString()+" "+e),o="time"==i.type,u="week"==i.type;T(r.value)&&E&&(e=o?a(E)>a(r.value):u?E>r.value:s>new Date(r.value)),T(n.value)&&E&&(t=o?a(E)<a(n.value):u?E<n.value:s<new Date(n.value))}else{const s=i.valueAsNumber||(E?+E:E);a(r.value)||(e=s>r.value),a(n.value)||(t=s<n.value)}if((e||t)&&(W(!!e,r.message,n.message,g,_),!s))return U(B[w].message),B}if((d||f)&&!R&&(T(E)||u&&Array.isArray(E))){const e=ue(d),t=ue(f),r=!a(e.value)&&E.length>+e.value,n=!a(t.value)&&E.length<+t.value;if((r||n)&&(W(r,e.message,t.message),!s))return U(B[w].message),B}if(F&&!R&&T(E)){const{value:e,message:t}=ue(F);if(ee(e)&&!E.match(e)&&(B[w]={type:x,message:t,ref:i,...P(x,t)},!s))return U(t),B}if(S)if(Q(S)){const e=oe(await S(E,t),j);if(e&&(B[w]={...e,...P(V,e.message)},!s))return U(e.message),B}else if(o(S)){let e={};for(const r in S){if(!k(e)&&!s)break;const a=oe(await S[r](E,t),j,r);a&&(e={...a,...P(r,a.message)},U(a.message),s&&(B[w]=e))}if(!k(e)&&(B[w]={ref:j,...e},!s))return B}return U(!0),B};function le(e,t){return[...e,...C(t)]}var ce=e=>Array.isArray(e)?e.map((()=>{})):void 0;function de(e,t,r){return[...e.slice(0,t),...C(r),...e.slice(t)]}var fe=(e,t,r)=>Array.isArray(e)?(m(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function me(e,t){return[...C(t),...C(e)]}var ye=(e,t)=>m(t)?[]:function(e,t){let r=0;const s=[...e];for(const e of t)s.splice(e-r,1),r++;return f(s).length?s:[]}(e,C(t).sort(((e,t)=>e-t))),pe=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function he(e,t){const r=Array.isArray(t)?t:L(t)?[t]:N(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=m(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(o(s)&&k(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!m(e[t]))return!1;return!0}(s))&&he(e,r.slice(0,-1)),e}var ge=(e,t,r)=>(e[t]=r,e);function _e(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ve=e=>a(e)||!n(e);function be(e,t){if(ve(e)||ve(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const n of r){const r=e[n];if(!a.includes(n))return!1;if("ref"!==n){const e=t[n];if(s(r)&&s(e)||o(r)&&o(e)||Array.isArray(r)&&Array.isArray(e)?!be(r,e):r!==e)return!1}}return!0}var xe=e=>"select-multiple"===e.type,Ae=e=>Z(e)||r(e),Ve=e=>X(e)&&e.isConnected,Fe=e=>{for(const t in e)if(Q(e[t]))return!0;return!1};function Se(e,t={}){const r=Array.isArray(e);if(o(e)||r)for(const r in e)Array.isArray(e[r])||o(e[r])&&!Fe(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Se(e[r],t[r])):a(e[r])||(t[r]=!0);return t}function we(e,t,r){const s=Array.isArray(e);if(o(e)||s)for(const s in e)Array.isArray(e[s])||o(e[s])&&!Fe(e[s])?m(t)||ve(r[s])?r[s]=Array.isArray(e[s])?Se(e[s],[]):{...Se(e[s])}:we(e[s],a(t)?{}:t[s],r[s]):r[s]=!be(e[s],t[s]);return r}var ke=(e,t)=>we(e,t,Se(t)),De=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>m(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):s?s(e):e;function Ce(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return K(t)?t.files:Z(t)?ne(e.refs).value:xe(t)?[...t.selectedOptions].map((({value:e})=>e)):r(t)?se(e.refs).value:De(m(t.value)?e.ref.value:t.value,e)}var Oe=(e,t,r,s)=>{const a={};for(const r of e){const e=y(t,r);e&&M(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},Ee=e=>m(e)?e:ee(e)?e.source:o(e)?ee(e.value)?e.value.source:e.value:e,je=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Te(e,t,r){const s=y(e,r);if(s||L(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=y(t,s),o=y(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(o&&o.type)return{name:s,error:o};a.pop()}return{name:r}}var Ue=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Be=(e,t)=>!f(y(e,t)).length&&he(e,t);const Le={mode:h.onSubmit,reValidateMode:h.onChange,shouldFocusError:!0};function Ne(e={},t){let n,l={...Le,...e},g={submitCount:0,isDirty:!1,isLoading:Q(l.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},_={},v=(o(l.defaultValues)||o(l.values))&&d(l.defaultValues||l.values)||{},b=l.shouldUnregister?{}:d(v),x={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},S={values:_e(),array:_e(),state:_e()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,D=I(l.mode),O=I(l.reValidateMode),E=l.criteriaMode===h.all,j=async e=>{if(F.isValid||e){const e=l.resolver?k((await P()).errors):await q(_,!0);e!==g.isValid&&S.state.next({isValid:e})}},B=e=>F.isValidating&&S.state.next({isValidating:e}),L=(e,t,r,s)=>{const a=y(_,e);if(a){const n=y(b,e,m(r)?y(v,e):r);m(n)||s&&s.defaultChecked||t?M(b,e,t?n:Ce(a._f)):Y(e,n),x.mount&&j()}},N=(e,t,r,s,a)=>{let n=!1,o=!1;const u={name:e};if(!r||s){F.isDirty&&(o=g.isDirty,g.isDirty=u.isDirty=$(),n=o!==u.isDirty);const r=be(y(v,e),t);o=y(g.dirtyFields,e),r?he(g.dirtyFields,e):M(g.dirtyFields,e,!0),u.dirtyFields=g.dirtyFields,n=n||F.dirtyFields&&o!==!r}if(r){const t=y(g.touchedFields,e);t||(M(g.touchedFields,e,r),u.touchedFields=g.touchedFields,n=n||F.touchedFields&&t!==r)}return n&&a&&S.state.next(u),n?u:{}},R=(t,r,s,a)=>{const o=y(g.errors,t),u=F.isValid&&z(r)&&g.isValid!==r;var i;if(e.delayError&&s?(i=()=>((e,t)=>{M(g.errors,e,t),S.state.next({errors:g.errors})})(t,s),n=e=>{clearTimeout(V),V=setTimeout(i,e)},n(e.delayError)):(clearTimeout(V),n=null,s?M(g.errors,t,s):he(g.errors,t)),(s?!be(o,s):o)||!k(a)||u){const e={...a,...u&&z(r)?{isValid:r}:{},errors:g.errors,name:t};g={...g,...e},S.state.next(e)}B(!1)},P=async e=>l.resolver(b,l.context,Oe(e||A.mount,_,l.criteriaMode,l.shouldUseNativeValidation)),q=async(e,t,r={valid:!0})=>{for(const s in e){const a=e[s];if(a){const{_f:e,...s}=a;if(e){const s=A.array.has(e.name),n=await ie(a,b,E,l.shouldUseNativeValidation&&!t,s);if(n[e.name]&&(r.valid=!1,t))break;!t&&(y(n,e.name)?s?J(g.errors,n,e.name):M(g.errors,e.name,n[e.name]):he(g.errors,e.name))}s&&await q(s,t,r)}}return r.valid},$=(e,t)=>(e&&t&&M(b,e,t),!be(se(),v)),H=(e,t,r)=>U(e,A,{...x.mount?b:m(t)?v:T(e)?{[e]:t}:t},r,t),Y=(e,t,s={})=>{const n=y(_,e);let o=t;if(n){const s=n._f;s&&(!s.disabled&&M(b,e,De(t,s)),o=X(s.ref)&&a(t)?"":t,xe(s.ref)?[...s.ref.options].forEach((e=>e.selected=o.includes(e.value))):s.refs?r(s.ref)?s.refs.length>1?s.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(o)?!!o.find((t=>t===e.value)):o===e.value))):s.refs[0]&&(s.refs[0].checked=!!o):s.refs.forEach((e=>e.checked=e.value===o)):K(s.ref)?s.ref.value="":(s.ref.value=o,s.ref.type||S.values.next({name:e,values:{...b}})))}(s.shouldDirty||s.shouldTouch)&&N(e,o,s.shouldTouch,s.shouldDirty,!0),s.shouldValidate&&re(e)},Z=(e,t,r)=>{for(const a in t){const n=t[a],o=`${e}.${a}`,u=y(_,o);!A.array.has(e)&&ve(n)&&(!u||u._f)||s(n)?Y(o,n,r):Z(o,n,r)}},ee=(e,r,s={})=>{const n=y(_,e),o=A.array.has(e),u=d(r);M(b,e,u),o?(S.array.next({name:e,values:{...b}}),(F.isDirty||F.dirtyFields)&&s.shouldDirty&&S.state.next({name:e,dirtyFields:ke(v,b),isDirty:$(e,u)})):!n||n._f||a(u)?Y(e,u,s):Z(e,u,s),G(e,A)&&S.state.next({...g}),S.values.next({name:e,values:{...b}}),!x.mount&&t()},te=async e=>{const t=e.target;let r=t.name,s=!0;const a=y(_,r);if(a){let o,i;const c=t.type?Ce(a._f):u(e),d=e.type===p.BLUR||e.type===p.FOCUS_OUT,f=!je(a._f)&&!l.resolver&&!y(g.errors,r)&&!a._f.deps||Ue(d,y(g.touchedFields,r),g.isSubmitted,O,D),m=G(r,A,d);M(b,r,c),d?(a._f.onBlur&&a._f.onBlur(e),n&&n(0)):a._f.onChange&&a._f.onChange(e);const h=N(r,c,d,!1),v=!k(h)||m;if(!d&&S.values.next({name:r,type:e.type,values:{...b}}),f)return F.isValid&&j(),v&&S.state.next({name:r,...m?{}:h});if(!d&&m&&S.state.next({...g}),B(!0),l.resolver){const{errors:e}=await P([r]),t=Te(g.errors,_,r),s=Te(e,_,t.name||r);o=s.error,r=s.name,i=k(e)}else o=(await ie(a,b,E,l.shouldUseNativeValidation))[r],s=isNaN(c)||c===y(b,r,c),s&&(o?i=!1:F.isValid&&(i=await q(_,!0)));s&&(a._f.deps&&re(a._f.deps),R(r,i,o,h))}},re=async(e,t={})=>{let r,s;const a=C(e);if(B(!0),l.resolver){const t=await(async e=>{const{errors:t}=await P();if(e)for(const r of e){const e=y(t,r);e?M(g.errors,r,e):he(g.errors,r)}else g.errors=t;return t})(m(e)?e:a);r=k(t),s=e?!a.some((e=>y(t,e))):r}else e?(s=(await Promise.all(a.map((async e=>{const t=y(_,e);return await q(t&&t._f?{[e]:t}:t)})))).every(Boolean),(s||g.isValid)&&j()):s=r=await q(_);return S.state.next({...!T(e)||F.isValid&&r!==g.isValid?{}:{name:e},...l.resolver||!e?{isValid:r}:{},errors:g.errors,isValidating:!1}),t.shouldFocus&&!s&&W(_,(e=>e&&y(g.errors,e)),e?a:A.mount),s},se=e=>{const t={...v,...x.mount?b:{}};return m(e)?t:T(e)?y(t,e):e.map((e=>y(t,e)))},ae=(e,t)=>({invalid:!!y((t||g).errors,e),isDirty:!!y((t||g).dirtyFields,e),isTouched:!!y((t||g).touchedFields,e),error:y((t||g).errors,e)}),ne=(e,t,r)=>{const s=(y(_,e,{_f:{}})._f||{}).ref;M(g.errors,e,{...t,ref:s}),S.state.next({name:e,errors:g.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},oe=(e,t={})=>{for(const r of e?C(e):A.mount)A.mount.delete(r),A.array.delete(r),t.keepValue||(he(_,r),he(b,r)),!t.keepError&&he(g.errors,r),!t.keepDirty&&he(g.dirtyFields,r),!t.keepTouched&&he(g.touchedFields,r),!l.shouldUnregister&&!t.keepDefaultValue&&he(v,r);S.values.next({values:{...b}}),S.state.next({...g,...t.keepDirty?{isDirty:$()}:{}}),!t.keepIsValid&&j()},ue=(e,t={})=>{let r=y(_,e);const s=z(t.disabled);return M(_,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),A.mount.add(e),r?s&&M(b,e,t.disabled?void 0:y(b,e,Ce(r._f))):L(e,!0,t.value),{...s?{disabled:t.disabled}:{},...l.progressive?{required:!!t.required,min:Ee(t.min),max:Ee(t.max),minLength:Ee(t.minLength),maxLength:Ee(t.maxLength),pattern:Ee(t.pattern)}:{},name:e,onChange:te,onBlur:te,ref:s=>{if(s){ue(e,t),r=y(_,e);const a=m(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,n=Ae(a),o=r._f.refs||[];if(n?o.find((e=>e===a)):a===r._f.ref)return;M(_,e,{_f:{...r._f,...n?{refs:[...o.filter(Ve),a,...Array.isArray(y(v,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),L(e,!1,void 0,a)}else r=y(_,e,{}),r._f&&(r._f.mount=!1),(l.shouldUnregister||t.shouldUnregister)&&(!i(A.array,e)||!x.action)&&A.unMount.add(e)}}},le=()=>l.shouldFocusError&&W(_,(e=>e&&y(g.errors,e)),A.mount),ce=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=d(b);if(S.state.next({isSubmitting:!0}),l.resolver){const{errors:e,values:t}=await P();g.errors=e,s=t}else await q(_);he(g.errors,"root"),k(g.errors)?(S.state.next({errors:{}}),await e(s,r)):(t&&await t({...g.errors},r),le(),setTimeout(le)),S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:k(g.errors),submitCount:g.submitCount+1,errors:g.errors})},de=(r,s={})=>{const a=r||v,n=d(a),o=r&&!k(r)?n:v;if(s.keepDefaultValues||(v=a),!s.keepValues){if(s.keepDirtyValues||w)for(const e of A.mount)y(g.dirtyFields,e)?M(o,e,y(b,e)):ee(e,y(o,e));else{if(c&&m(r))for(const e of A.mount){const t=y(_,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(X(e)){const t=e.closest("form");if(t){t.reset();break}}}}_={}}b=e.shouldUnregister?s.keepDefaultValues?d(v):{}:d(o),S.array.next({values:{...o}}),S.values.next({values:{...o}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&t(),x.mount=!F.isValid||!!s.keepIsValid,x.watch=!!e.shouldUnregister,S.state.next({submitCount:s.keepSubmitCount?g.submitCount:0,isDirty:s.keepDirty?g.isDirty:!(!s.keepDefaultValues||be(r,v)),isSubmitted:!!s.keepIsSubmitted&&g.isSubmitted,dirtyFields:s.keepDirtyValues?g.dirtyFields:s.keepDefaultValues&&r?ke(v,r):{},touchedFields:s.keepTouched?g.touchedFields:{},errors:s.keepErrors?g.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},fe=(e,t)=>de(Q(e)?e(b):e,t);return{control:{register:ue,unregister:oe,getFieldState:ae,handleSubmit:ce,setError:ne,_executeSchema:P,_getWatch:H,_getDirty:$,_updateValid:j,_removeUnmounted:()=>{for(const e of A.unMount){const t=y(_,e);t&&(t._f.refs?t._f.refs.every((e=>!Ve(e))):!Ve(t._f.ref))&&oe(e)}A.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,n=!0)=>{if(s&&r){if(x.action=!0,n&&Array.isArray(y(_,e))){const t=r(y(_,e),s.argA,s.argB);a&&M(_,e,t)}if(n&&Array.isArray(y(g.errors,e))){const t=r(y(g.errors,e),s.argA,s.argB);a&&M(g.errors,e,t),Be(g.errors,e)}if(F.touchedFields&&n&&Array.isArray(y(g.touchedFields,e))){const t=r(y(g.touchedFields,e),s.argA,s.argB);a&&M(g.touchedFields,e,t)}F.dirtyFields&&(g.dirtyFields=ke(v,b)),S.state.next({name:e,isDirty:$(e,t),dirtyFields:g.dirtyFields,errors:g.errors,isValid:g.isValid})}else M(b,e,t)},_getFieldArray:t=>f(y(x.mount?b:v,t,e.shouldUnregister?y(v,t,[]):[])),_reset:de,_resetDefaultValues:()=>Q(l.defaultValues)&&l.defaultValues().then((e=>{fe(e,l.resetOptions),S.state.next({isLoading:!1})})),_updateFormState:e=>{g={...g,...e}},_subjects:S,_proxyFormState:F,get _fields(){return _},get _formValues(){return b},get _state(){return x},set _state(e){x=e},get _defaultValues(){return v},get _names(){return A},set _names(e){A=e},get _formState(){return g},set _formState(e){g=e},get _options(){return l},set _options(e){l={...l,...e}}},trigger:re,register:ue,handleSubmit:ce,watch:(e,t)=>Q(e)?S.values.subscribe({next:r=>e(H(void 0,t),r)}):H(e,t,!0),setValue:ee,getValues:se,reset:fe,resetField:(e,t={})=>{y(_,e)&&(m(t.defaultValue)?ee(e,y(v,e)):(ee(e,t.defaultValue),M(v,e,t.defaultValue)),t.keepTouched||he(g.touchedFields,e),t.keepDirty||(he(g.dirtyFields,e),g.isDirty=t.defaultValue?$(e,y(v,e)):$()),t.keepError||(he(g.errors,e),F.isValid&&j()),S.state.next({...g}))},clearErrors:e=>{e&&C(e).forEach((e=>he(g.errors,e))),S.state.next({errors:e?g.errors:{}})},unregister:oe,setError:ne,setFocus:(e,t={})=>{const r=y(_,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ae}}exports.Controller=e=>e.render(R(e)),exports.Form=function(e){const r=S(),[s,a]=t.default.useState(!1),{control:n=r.control,onSubmit:o,children:u,action:i,method:l=P,headers:c,encType:d,onError:f,render:m,onSuccess:p,validateStatus:h,...g}=e,_=async t=>{let r=!1,s="";await n.handleSubmit((async e=>{const a=new FormData;let u="";try{u=JSON.stringify(e)}catch(e){}for(const t of n._names.mount)a.append(t,y(e,t));if(o&&await o({data:e,event:t,method:l,formData:a,formDataJson:u}),i)try{const e=[c&&c["Content-Type"],d].some((e=>e&&e.includes("json"))),t=await fetch(i,{method:l,headers:{...c,...d?{"Content-Type":d}:{}},body:e?u:a});t&&(h?!h(t.status):t.status<200||t.status>=300)?(r=!0,f&&f({response:t}),s=String(t.status)):p&&p({response:t})}catch(e){r=!0,f&&f({error:e})}}))(t),r&&e.control&&(e.control._subjects.state.next({isSubmitSuccessful:!1}),e.control.setError("root.server",{type:s}))};return t.default.useEffect((()=>{a(!0)}),[]),m?t.default.createElement(t.default.Fragment,null,m({submit:_})):t.default.createElement("form",{noValidate:s,action:i,method:l,encType:d,onSubmit:_,...g},u)},exports.FormProvider=e=>{const{children:r,...s}=e;return t.default.createElement(F.Provider,{value:s},r)},exports.appendErrors=q,exports.get=y,exports.set=M,exports.useController=R,exports.useFieldArray=function(e){const r=S(),{control:s=r.control,name:a,keyName:n="id",shouldUnregister:o}=e,[u,i]=t.default.useState(s._getFieldArray(a)),l=t.default.useRef(s._getFieldArray(a).map($)),c=t.default.useRef(u),f=t.default.useRef(a),m=t.default.useRef(!1);f.current=a,c.current=u,s._names.array.add(a),e.rules&&s.register(a,e.rules),E({next:({values:e,name:t})=>{if(t===f.current||!t){const t=y(e,f.current);Array.isArray(t)&&(i(t),l.current=t.map($))}},subject:s._subjects.array});const p=t.default.useCallback((e=>{m.current=!0,s._updateFieldArray(a,e)}),[s,a]);return t.default.useEffect((()=>{if(s._state.action=!1,G(a,s._names)&&s._subjects.state.next({...s._formState}),m.current&&(!I(s._options.mode).isOnSubmit||s._formState.isSubmitted))if(s._options.resolver)s._executeSchema([a]).then((e=>{const t=y(e.errors,a),r=y(s._formState.errors,a);(r?!t&&r.type||t&&(r.type!==t.type||r.message!==t.message):t&&t.type)&&(t?M(s._formState.errors,a,t):he(s._formState.errors,a),s._subjects.state.next({errors:s._formState.errors}))}));else{const e=y(s._fields,a);e&&e._f&&ie(e,s._formValues,s._options.criteriaMode===h.all,s._options.shouldUseNativeValidation,!0).then((e=>!k(e)&&s._subjects.state.next({errors:J(s._formState.errors,e,a)})))}s._subjects.values.next({name:a,values:{...s._formValues}}),s._names.focus&&W(s._fields,(e=>!!e&&e.startsWith(s._names.focus||""))),s._names.focus="",s._updateValid(),m.current=!1}),[u,a,s]),t.default.useEffect((()=>(!y(s._formValues,a)&&s._updateFieldArray(a),()=>{(s._options.shouldUnregister||o)&&s.unregister(a)})),[a,s,n,o]),{swap:t.default.useCallback(((e,t)=>{const r=s._getFieldArray(a);pe(r,e,t),pe(l.current,e,t),p(r),i(r),s._updateFieldArray(a,r,pe,{argA:e,argB:t},!1)}),[p,a,s]),move:t.default.useCallback(((e,t)=>{const r=s._getFieldArray(a);fe(r,e,t),fe(l.current,e,t),p(r),i(r),s._updateFieldArray(a,r,fe,{argA:e,argB:t},!1)}),[p,a,s]),prepend:t.default.useCallback(((e,t)=>{const r=C(d(e)),n=me(s._getFieldArray(a),r);s._names.focus=H(a,0,t),l.current=me(l.current,r.map($)),p(n),i(n),s._updateFieldArray(a,n,me,{argA:ce(e)})}),[p,a,s]),append:t.default.useCallback(((e,t)=>{const r=C(d(e)),n=le(s._getFieldArray(a),r);s._names.focus=H(a,n.length-1,t),l.current=le(l.current,r.map($)),p(n),i(n),s._updateFieldArray(a,n,le,{argA:ce(e)})}),[p,a,s]),remove:t.default.useCallback((e=>{const t=ye(s._getFieldArray(a),e);l.current=ye(l.current,e),p(t),i(t),s._updateFieldArray(a,t,ye,{argA:e})}),[p,a,s]),insert:t.default.useCallback(((e,t,r)=>{const n=C(d(t)),o=de(s._getFieldArray(a),e,n);s._names.focus=H(a,e,r),l.current=de(l.current,e,n.map($)),p(o),i(o),s._updateFieldArray(a,o,de,{argA:e,argB:ce(t)})}),[p,a,s]),update:t.default.useCallback(((e,t)=>{const r=d(t),n=ge(s._getFieldArray(a),e,r);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:$())),p(n),i([...n]),s._updateFieldArray(a,n,ge,{argA:e,argB:r},!0,!1)}),[p,a,s]),replace:t.default.useCallback((e=>{const t=C(d(e));l.current=t.map($),p([...t]),i([...t]),s._updateFieldArray(a,[...t],(e=>e),{},!0,!1)}),[p,a,s]),fields:t.default.useMemo((()=>u.map(((e,t)=>({...e,[n]:l.current[t]||$()})))),[u,n])}},exports.useForm=function(e={}){const r=t.default.useRef(),s=t.default.useRef(),[a,n]=t.default.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Ne(e,(()=>n((e=>({...e}))))),formState:a});const o=r.current.control;return o._options=e,E({subject:o._subjects.state,next:e=>{D(e,o._proxyFormState,o._updateFormState,!0)&&n({...o._formState})}}),t.default.useEffect((()=>{e.values&&!be(e.values,s.current)?(o._reset(e.values,o._options.resetOptions),s.current=e.values):o._resetDefaultValues()}),[e.values,o]),t.default.useEffect((()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()})),r.current.formState=w(a,o),r.current},exports.useFormContext=S,exports.useFormState=j,exports.useWatch=B;
//# sourceMappingURL=index.cjs.js.map
