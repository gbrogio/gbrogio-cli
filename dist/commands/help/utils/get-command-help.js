"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandHelp = void 0;
var text_in_color_1 = require("../../../services/text-in-color");
var get_max_length_from_array_1 = require("../../../utils/get-max-length-from-array");
var _colors_1 = require("../../../colors/index");
function getCommandHelp(command, utils, moreInfo) {
    var commandSpace = Array.from({
        length: utils.maxCommandLength - command.command.length + 3,
    }).join(' ');
    var aliasSpace = Array.from({
        length: utils.maxAliasLength - command.alias.length + 3,
    }).join(' ');
    console.log("\u2022 ".concat(command.command).concat(commandSpace).concat((0, text_in_color_1.textInHexColor)(_colors_1.colors.alias, command.alias)).concat(aliasSpace).concat((0, text_in_color_1.textInHexColor)('gray', command.description)));
    if (!moreInfo)
        return;
    if (command.params_code_line) {
        var maxParamCommandLength_1 = (0, get_max_length_from_array_1.getMaxLengthFromArray)(command.params_code_line.map(function (_a) {
            var code_line = _a.code_line;
            return code_line;
        }));
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.params, "".concat(utils.identSize(), " Params:")));
        command.params_code_line.forEach(function (param) {
            var paramCommandSpace = Array.from({
                length: maxParamCommandLength_1 - param.code_line.length + 3,
            }).join(' ');
            console.log("".concat(utils.identSize()).concat(utils.identSize(), " ").concat(param.code_line).concat(paramCommandSpace).concat((0, text_in_color_1.textInHexColor)(_colors_1.colors.alias, param.alias)));
        });
        console.log('\n');
    }
    if (command.questions) {
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.params, "".concat(utils.identSize(), " Questions:")));
        command.questions.forEach(function (question, i) {
            var _a;
            console.log("".concat(utils.identSize()).concat(utils.identSize(), " Question (").concat(i + 1, "): ").concat(question.question.replaceAll('\n', "\n".concat(utils.identSize(true)).concat(utils.identSize(true)).concat(utils.identSize(true), " "))));
            console.log("".concat(utils.identSize()).concat(utils.identSize(), " Name: ").concat(question.name));
            console.log("".concat(utils.identSize()).concat(utils.identSize(), " Default: ").concat(question.default || 'none'));
            if (i + 1 === ((_a = command.questions) === null || _a === void 0 ? void 0 : _a.length))
                return console.log("".concat((0, text_in_color_1.textSeparator)(_colors_1.colors.success), "\n"));
            console.log("".concat(utils.identSize(true)).concat(utils.identSize(true), " ").concat((0, text_in_color_1.textSeparator)(_colors_1.colors.success), "\n"));
        });
    }
}
exports.getCommandHelp = getCommandHelp;
//# sourceMappingURL=get-command-help.js.map