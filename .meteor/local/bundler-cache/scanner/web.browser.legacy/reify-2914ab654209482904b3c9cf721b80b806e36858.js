function t(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var e,n;Object.defineProperty(exports,"__esModule",{value:!0});var o=Symbol("once"),r=Symbol("evts"),i=function(){function i(){this[e]=new Map,this[n]=new WeakMap}return i.prototype.events=function(){return Array.from(this[r].keys())},i.prototype.has=function(t){return this[r].has(t)},i.prototype.on=function(t,e){var n,o=this,i=null!==(n=this[r].get(t))&&void 0!==n?n:[];return i.push(e),this[r].set(t,i),function(){return o.off(t,e)}},i.prototype.once=function(t,e){var n=this[o].get(e)||0;return this[o].set(e,n+1),this.on(t,e)},i.prototype.off=function(t,e){var n=this[r].get(t);if(n){var i=this[o].get(e);i>1?this[o].set(e,i-1):this[o].delete(e),1!==n.length?n.splice(n.findIndex((function(t){return t===e}))>>>0,1):this[r].delete(t)}},i.prototype.emit=function(e){for(var n,i=this,s=[],f=1;f<arguments.length;f++)s[f-1]=arguments[f];var h=s[0];t([],null!==(n=this[r].get(e))&&void 0!==n?n:[]).forEach((function(t){t(h),i[o].get(t)&&i.off(e,t)}))},i}();e=r,n=o,exports.Emitter=i;
//# sourceMappingURL=index.js.map
