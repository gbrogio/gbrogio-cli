"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigFile = void 0;
var _configs_1 = require("../../../configs/index");
var fs_1 = __importDefault(require("fs"));
var ini_1 = __importDefault(require("ini"));
var _messages_1 = require("../../../messages/index");
var text_in_color_1 = require("../../../services/text-in-color");
function createConfigFile(data) {
    if (data === 'invalid')
        throw data;
    console.log((0, text_in_color_1.textInHexColor)('gray', _messages_1.messages.info.config.create));
    fs_1.default.writeFileSync(_configs_1.configPath, ini_1.default.stringify(data, { whitespace: true }));
    console.log((0, text_in_color_1.textInHexColor)('gray', "".concat(_messages_1.messages.info.config.created, "\n").concat(_messages_1.messages.info.cli.more_info)));
}
exports.createConfigFile = createConfigFile;
//# sourceMappingURL=create-config-file.js.map