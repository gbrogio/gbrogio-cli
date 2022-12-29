"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpHelpers = exports.moreInfoHelpers = exports.help = void 0;
var main_1 = require("../../main");
var _colors_1 = require("../../colors/index");
var text_in_color_1 = require("../../services/text-in-color");
var get_max_length_from_array_1 = require("../../utils/get-max-length-from-array");
var __1 = require("..");
var get_command_help_1 = require("./utils/get-command-help");
function help(command, moreInfo) {
    (0, main_1.main)();
    var maxAliasLength = (0, get_max_length_from_array_1.getMaxLengthFromArray)(__1.commandsDescription.map(function (_a) {
        var alias = _a.alias;
        return alias;
    }));
    var maxCommandLength = (0, get_max_length_from_array_1.getMaxLengthFromArray)(__1.commandsDescription.map(function (_a) {
        var command = _a.command;
        return command;
    }));
    var identSize = function (hidden) {
        return (0, text_in_color_1.textInHexColor)(_colors_1.colors.ident, hidden ? '   ' : '---');
    };
    var commandToGetHelp = __1.commandsDescription.filter(function (commandDescription) {
        return commandDescription.command === command || commandDescription.alias === command;
    })[0];
    if (commandToGetHelp)
        return (0, get_command_help_1.getCommandHelp)(commandToGetHelp, { maxAliasLength: maxAliasLength, maxCommandLength: maxCommandLength, identSize: identSize }, moreInfo);
    __1.commandsDescription.forEach(function (commandDescription) {
        (0, get_command_help_1.getCommandHelp)(commandDescription, { maxAliasLength: maxAliasLength, maxCommandLength: maxCommandLength, identSize: identSize }, moreInfo);
    });
}
exports.help = help;
exports.moreInfoHelpers = ['--more', '-m'];
exports.helpHelpers = ['--help', '-h'];
//# sourceMappingURL=index.js.map