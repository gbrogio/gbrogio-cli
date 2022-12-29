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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminal = void 0;
var shelljs_1 = __importDefault(require("shelljs"));
var text_in_color_1 = require("../text-in-color");
exports.terminal = __assign(__assign({}, shelljs_1.default), { cd: function (directory) {
        var _a;
        var currentDirectory = process.cwd();
        var directoryFormatted = directory.replace('.', '');
        var finallyPath = "".concat(currentDirectory, "/").concat(directoryFormatted);
        if ((_a = shelljs_1.default.cd(finallyPath).stderr) === null || _a === void 0 ? void 0 : _a.length) {
            exports.terminal.echo((0, text_in_color_1.textInHexColor)('gray', 'creating folder...'));
            shelljs_1.default.mkdir(finallyPath);
        }
        shelljs_1.default.cd(finallyPath);
    } });
//# sourceMappingURL=index.js.map