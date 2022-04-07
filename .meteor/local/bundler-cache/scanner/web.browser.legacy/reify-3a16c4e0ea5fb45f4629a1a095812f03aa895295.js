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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var BackgroundLayer_1 = __importDefault(require("../../common/BackgroundLayer"));
var FormPageLayout_1 = __importDefault(require("../../common/FormPageLayout"));
var AdminInfoForm_1 = __importDefault(require("../../forms/AdminInfoForm"));
var pageLayoutStyleProps = {
    justifyContent: 'center',
};
var AdminInfoPage = function (_a) {
    var title = _a.title, description = _a.description, props = __rest(_a, ["title", "description"]);
    return (jsx_runtime_1.jsx(BackgroundLayer_1.default, { children: jsx_runtime_1.jsx(FormPageLayout_1.default, __assign({ title: title, styleProps: pageLayoutStyleProps, description: description }, { children: jsx_runtime_1.jsx(AdminInfoForm_1.default, __assign({}, props), void 0) }), void 0) }, void 0));
};
exports.default = AdminInfoPage;
//# sourceMappingURL=AdminInfoPage.js.map