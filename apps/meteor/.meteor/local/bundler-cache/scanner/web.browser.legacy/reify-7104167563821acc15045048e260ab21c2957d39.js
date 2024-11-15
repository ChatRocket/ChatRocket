"use strict";
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fuselage_1 = require("@rocket.chat/fuselage");
var layout_1 = require("@rocket.chat/layout");
var react_i18next_1 = require("react-i18next");
var InvalidLinkPage = function (_a) {
    var onRequestNewLink = _a.onRequestNewLink;
    var t = (0, react_i18next_1.useTranslation)().t;
    return ((0, jsx_runtime_1.jsx)(layout_1.BackgroundLayer, { children: (0, jsx_runtime_1.jsx)(fuselage_1.Box, __assign({ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 576, paddingBlock: 32, paddingInline: 16 }, { children: (0, jsx_runtime_1.jsxs)(fuselage_1.Margins, __assign({ blockEnd: 32 }, { children: [(0, jsx_runtime_1.jsx)(layout_1.LayoutLogo.LayoutLogo, {}), (0, jsx_runtime_1.jsx)(fuselage_1.Box, __assign({ fontScale: 'hero' }, { children: t('page.invalidLink.title') })), (0, jsx_runtime_1.jsx)(fuselage_1.Box, __assign({ fontScale: 'p1' }, { children: t('page.invalidLink.content') })), (0, jsx_runtime_1.jsx)(fuselage_1.Button, __assign({ onClick: onRequestNewLink, primary: true }, { children: t('page.invalidLink.button.text') }))] })) })) }));
};
exports.default = InvalidLinkPage;
//# sourceMappingURL=InvalidLinkPage.js.map