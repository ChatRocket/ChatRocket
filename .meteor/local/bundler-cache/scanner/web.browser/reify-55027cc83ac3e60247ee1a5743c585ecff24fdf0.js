let _jsx,_jsxs;module.link("react/jsx-runtime",{jsx(v){_jsx=v},jsxs(v){_jsxs=v}},0);let Box,Margins,Throbber;module.link('@rocket.chat/fuselage',{Box(v){Box=v},Margins(v){Margins=v},Throbber(v){Throbber=v}},1);let useTranslation;module.link('react-i18next',{useTranslation(v){useTranslation=v}},2);let BackgroundLayer;module.link('../../common/BackgroundLayer',{default(v){BackgroundLayer=v}},3);let OnboardingLogo;module.link('../../common/OnboardingLogo',{OnboardingLogo(v){OnboardingLogo=v}},4);var __assign = (this && this.__assign) || function () {
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





var ConfirmationProcessPage = function () {
    var t = useTranslation().t;
    return (_jsx(BackgroundLayer, { children: _jsx(Box, __assign({ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 660, paddingBlock: 32, paddingInline: 16 }, { children: _jsxs(Margins, __assign({ blockEnd: 32 }, { children: [_jsx(OnboardingLogo, {}, void 0), _jsx(Box, __assign({ fontWeight: 800, fontSize: 'x52', lineHeight: 'x62', fontFamily: 'sans' }, { children: t('page.confirmationProcess.title') }), void 0), _jsx(Throbber, { size: 'x16', inheritColor: true }, void 0)] }), void 0) }), void 0) }, void 0));
};
module.exportDefault(ConfirmationProcessPage);
//# sourceMappingURL=ConfirmationProcessPage.js.map