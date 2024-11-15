let _jsx,_jsxs;module.link("react/jsx-runtime",{jsx(v){_jsx=v},jsxs(v){_jsxs=v}},0);let css;module.link('@rocket.chat/css-in-js',{css(v){css=v}},1);let Box,Icon;module.link('@rocket.chat/fuselage',{Box(v){Box=v},Icon(v){Icon=v}},2);let forwardRef;module.link('react',{forwardRef(v){forwardRef=v}},3);let useTranslation;module.link('react-i18next',{useTranslation(v){useTranslation=v}},4);var __rest = (this && this.__rest) || function (s, e) {
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





const MultiSelectCustomAnchor = forwardRef(function MultiSelectCustomAnchor(_a, ref) {
    var { className, collapsed, selectedOptionsCount, selectedOptionsTitle, defaultTitle, maxCount } = _a, props = __rest(_a, ["className", "collapsed", "selectedOptionsCount", "selectedOptionsTitle", "defaultTitle", "maxCount"]);
    const { t } = useTranslation();
    const customStyle = css `
		&:hover {
			cursor: pointer;
		}
	`;
    const isDirty = selectedOptionsCount > 0 && selectedOptionsCount !== maxCount - 1;
    return (_jsxs(Box, Object.assign({ ref: ref, role: 'button', tabIndex: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', h: 'x40', className: ['rcx-input-box__wrapper', customStyle, ...(Array.isArray(className) ? className : [className])].filter(Boolean) }, props, { children: [isDirty ? `${t(selectedOptionsTitle)} (${selectedOptionsCount})` : t(defaultTitle), _jsx(Icon, { name: collapsed ? 'chevron-up' : 'chevron-down', fontSize: 'x20', color: 'hint' })] })));
});
module.exportDefault(MultiSelectCustomAnchor);
//# sourceMappingURL=MultiSelectCustomAnchor.js.map