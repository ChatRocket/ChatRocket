module.export({hasDataViewBug:()=>hasDataViewBug,isIE11:()=>isIE11});let supportsDataView;module.link('./_setup.js',{supportsDataView(v){supportsDataView=v}},0);let hasObjectTag;module.link('./_hasObjectTag.js',{default(v){hasObjectTag=v}},1);


// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
// Also, there are cases where an application can override the native
// `DataView` object, in cases like that we can't use the constructor
// safely and should just rely on alternate `DataView` checks
var hasDataViewBug = (
      supportsDataView && (!/\[native code\]/.test(String(DataView)) || hasObjectTag(new DataView(new ArrayBuffer(8))))
    ),
    isIE11 = (typeof Map !== 'undefined' && hasObjectTag(new Map));
