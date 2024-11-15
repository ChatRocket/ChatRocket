let _jsx,_jsxs;module.link("react/jsx-runtime",{jsx(v){_jsx=v},jsxs(v){_jsxs=v}},0);let Box;module.link('@rocket.chat/fuselage',{Box(v){Box=v}},1);let ActionLink,BackgroundLayer;module.link('@rocket.chat/layout',{ActionLink(v){ActionLink=v},BackgroundLayer(v){BackgroundLayer=v}},2);let Trans,useTranslation;module.link('react-i18next',{Trans(v){Trans=v},useTranslation(v){useTranslation=v}},3);let FormPageLayout;module.link('../../common/FormPageLayout',{default(v){FormPageLayout=v}},4);let ResetPasswordForm;module.link('../../forms/ResetPasswordForm',{default(v){ResetPasswordForm=v}},5);var __assign = (this && this.__assign) || function () {
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






var pageLayoutStyleProps = {
    justifyContent: 'center',
};
var ResetPasswordPage = function (_a) {
    var onLogin = _a.onLogin, props = __rest(_a, ["onLogin"]);
    var t = useTranslation().t;
    return (_jsx(BackgroundLayer, { children: _jsxs(FormPageLayout, __assign({ title: t('page.resetPasswordPage.title'), styleProps: pageLayoutStyleProps }, { children: [_jsx(ResetPasswordForm, __assign({}, props)), _jsx(Box, __assign({ fontScale: 'p2', pbs: 40 }, { children: _jsxs(Trans, __assign({ i18nKey: 'component.wantToLogin' }, { children: ["Want to log in?", _jsx(ActionLink, __assign({ fontScale: 'p2', onClick: onLogin }, { children: "Go to login" }))] })) }))] })) }));
};
module.exportDefault(ResetPasswordPage);
//# sourceMappingURL=ResetPasswordPage.js.map