"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textSeparator = exports.textInHexColor = void 0;
var chalk_1 = __importDefault(require("chalk"));
function textInHexColor(color, text) {
    return chalk_1.default.hex(color)(text);
}
exports.textInHexColor = textInHexColor;
function textSeparator(color, options) {
    if (color === 'hidden')
        return Array({ length: (options === null || options === void 0 ? void 0 : options.lines) || 1 })
            .fill('\n')
            .join('');
    if (!color.startsWith('#'))
        throw new Error('Color must be a hexadecimal color.');
    return Array({ length: (options === null || options === void 0 ? void 0 : options.lines) || 1 })
        .fill(textInHexColor(color, '#-----------------------------------------------#'))
        .join('\n');
}
exports.textSeparator = textSeparator;
//# sourceMappingURL=index.js.map