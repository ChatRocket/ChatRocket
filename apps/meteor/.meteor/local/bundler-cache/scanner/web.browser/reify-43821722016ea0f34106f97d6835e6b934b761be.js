module.export({Emitter:()=>r});var t,e,n=Symbol("once"),o=Symbol("evts"),r=function(){function r(){this[t]=new Map,this[e]=new WeakMap}return r.prototype.events=function(){return Array.from(this[o].keys())},r.prototype.has=function(t){return this[o].has(t)},r.prototype.on=function(t,e){var n,r=this,i=null!==(n=this[o].get(t))&&void 0!==n?n:[];return i.push(e),this[o].set(t,i),function(){return r.off(t,e)}},r.prototype.once=function(t,e){var o=this[n].get(e)||0;return this[n].set(e,o+1),this.on(t,e)},r.prototype.off=function(t,e){var r,i=this[o].get(t);if(i){var s=null!==(r=this[n].get(e))&&void 0!==r?r:0;s>1?this[n].set(e,s-1):this[n].delete(e),i.splice(i.findIndex((function(t){return t===e}))>>>0,1),0===i.length&&this[o].delete(t)}},r.prototype.emit=function(t){for(var e,r=this,i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var f=i[0];(function(t,e,n){if(n||2===arguments.length)for(var o,r=0,i=e.length;r<i;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))})([],null!==(e=this[o].get(t))&&void 0!==e?e:[],!0).forEach((function(e){e(f),r[n].get(e)&&r.off(t,e)}))},r}();t=o,e=n;
//# sourceMappingURL=index.module.js.map
