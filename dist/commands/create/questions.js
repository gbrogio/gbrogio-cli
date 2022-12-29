"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = exports.packageManagers = void 0;
var fs_1 = __importDefault(require("fs"));
var regex_1 = require("../../utils/regex");
var text_in_color_1 = require("../../services/text-in-color");
var _colors_1 = require("../../colors/index");
var _messages_1 = require("../../messages/index");
exports.packageManagers = ['pnpm', 'npm', 'yarn'];
var questions = function (branches, options) {
    return [
        !(options === null || options === void 0 ? void 0 : options.branch)
            ? {
                type: 'list',
                name: 'branch',
                message: 'Select one branch to clone:',
                choices: branches,
            }
            : undefined,
        !(options === null || options === void 0 ? void 0 : options.directory)
            ? {
                type: 'input',
                name: 'directory',
                message: "(OPTIONAL) Path to clone your template (e.g. \"gbrogio/project-name\", \"project-name\", \".\")\n".concat((0, text_in_color_1.textInHexColor)('gray', 'By default we are use "." directory:')),
                default: '.',
                validate: function (directory) {
                    var directoryFormatted = directory.startsWith('/')
                        ? directory.substring(1)
                        : directory;
                    if (directoryFormatted === '.' || directoryFormatted === './')
                        return true;
                    if (regex_1.regex.directoryPath.exec(directoryFormatted)) {
                        if (fs_1.default.existsSync(directoryFormatted))
                            return (0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.error.fields.directory.exists);
                        return true;
                    }
                    return (0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.error.fields.directory.invalid);
                },
            }
            : undefined,
        !(options === null || options === void 0 ? void 0 : options.package_manager)
            ? {
                type: 'list',
                name: 'package_manager',
                message: 'Select your package manager:',
                choices: exports.packageManagers,
                default: 'npm',
            }
            : undefined,
        (options === null || options === void 0 ? void 0 : options.remove_git) === undefined
            ? {
                type: 'confirm',
                name: 'remove_git',
                message: 'Do you want to remove git folder:',
                default: false,
            }
            : undefined,
    ].filter(function (question) { return (question ? true : false); });
};
exports.questions = questions;
//# sourceMappingURL=questions.js.map