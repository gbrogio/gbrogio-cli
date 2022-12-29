"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.configPath = exports.templatesRepository = void 0;
var os_1 = __importDefault(require("os"));
var fs_1 = __importDefault(require("fs"));
var ini_1 = __importDefault(require("ini"));
var rootDir = os_1.default.homedir();
exports.templatesRepository = 'https://github.com/gbrogio/templates';
exports.configPath = "".concat(rootDir, "/.gbrogiorc");
function getConfig() {
    var config;
    if (fs_1.default.existsSync(exports.configPath)) {
        config = ini_1.default.parse(fs_1.default.readFileSync(exports.configPath, 'utf-8'));
    }
    return config;
}
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map