let _jsx,_jsxs;module.link("react/jsx-runtime",{jsx(v){_jsx=v},jsxs(v){_jsxs=v}},0);let Box;module.link('@rocket.chat/fuselage',{Box(v){Box=v}},1);let ActionLink;module.link('@rocket.chat/layout',{ActionLink(v){ActionLink=v}},2);let Trans;module.link('react-i18next',{Trans(v){Trans=v}},3);var __assign = (this && this.__assign) || function () {
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




var EmailCodeFallback = function (_a) {
    var onResendEmailRequest = _a.onResendEmailRequest, onChangeEmailRequest = _a.onChangeEmailRequest;
    return (_jsx(Box, __assign({ fontScale: 'p2' }, { children: _jsxs(Trans, __assign({ i18nKey: 'component.emailCodeFallback' }, { children: ["Didn\u2019t receive email?", _jsx(ActionLink, __assign({ onClick: onResendEmailRequest }, { children: "Resend" })), "or", _jsx(ActionLink, __assign({ onClick: onChangeEmailRequest }, { children: "Change email" }))] })) })));
};
module.exportDefault(EmailCodeFallback);
//# sourceMappingURL=EmailCodeFallback.js.map