var _jsx;module.link("react/jsx-runtime",{jsx:function(v){_jsx=v}},0);var IconButton;module.link('@rocket.chat/fuselage',{IconButton:function(v){IconButton=v}},1);var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const VideoConfController = (_a) => {
    var { icon, active, secondary, disabled, small = true } = _a, props = __rest(_a, ["icon", "active", "secondary", "disabled", "small"]);
    return (_jsx(IconButton, Object.assign({ "aria-live": 'assertive', small: small, icon: icon, info: active, disabled: disabled, secondary: secondary || active || disabled }, props)));
};
module.exportDefault(VideoConfController);
//# sourceMappingURL=VideoConfController.js.map