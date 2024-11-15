let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},0);let Box;module.link('@rocket.chat/fuselage',{Box(v){Box=v}},1);let useCallback;module.link('react',{useCallback(v){useCallback=v}},2);let useDarkMode;module.link('./DarkModeProvider',{useDarkMode(v){useDarkMode=v}},3);var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
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




var Link = function (_a) {
    var children = _a.children, _b = _a.href, href = _b === void 0 ? '#' : _b, onClick = _a.onClick, props = __rest(_a, ["children", "href", "onClick"]);
    var handleClick = useCallback(function (event) {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    }, [onClick]);
    var isDarkMode = useDarkMode();
    return (_jsx(Box, __assign({}, props, { is: 'a', href: href, color: isDarkMode ? 'primary-300' : 'primary-600', textDecorationLine: 'none', onClick: handleClick }, { children: children })));
};
module.exportDefault(Link);
//# sourceMappingURL=Link.js.map