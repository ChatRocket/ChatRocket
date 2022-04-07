module.export({escapeHTML:()=>escapeHTML});var characterToHtmlEntityCode = {
    '¢': 'cent',
    '£': 'pound',
    '¥': 'yen',
    '€': 'euro',
    '©': 'copy',
    '®': 'reg',
    '™': 'trade',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '&': 'amp',
    "'": '#39',
};
var regex = new RegExp("[" + Object.keys(characterToHtmlEntityCode).join('') + "]", 'g');
var toString = function (object) { return (object ? "" + object : ''); };
var isEscapable = function (char) {
    return char in characterToHtmlEntityCode;
};
var escapeChar = function (char) {
    return isEscapable(char) ? "&" + characterToHtmlEntityCode[char] + ";" : '';
};
var escapeHTML = function (str) {
    return toString(str).replace(regex, escapeChar);
};
//# sourceMappingURL=escapeHTML.js.map