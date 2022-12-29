#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var figlet_1 = require("./services/figlet");
var text_in_color_1 = require("./services/text-in-color");
var _colors_1 = require("./colors/index");
var _messages_1 = require("./messages/index");
var _configs_1 = require("./configs/index");
var argv_1 = require("./configs/argv");
var _commands_1 = require("./commands/index");
var init_1 = require("./commands/init");
var help_1 = require("./commands/help");
var config = (0, _configs_1.getConfig)();
var argv = (0, argv_1.getArgv)();
function main() {
    console.clear();
    console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.primary, (0, figlet_1.figletPrimary)(_messages_1.messages.info.cli.name)));
    console.log((0, text_in_color_1.textSeparator)('hidden', { lines: 6 }));
    console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.success, _messages_1.messages.info.cli.description));
    console.log((0, text_in_color_1.textSeparator)('hidden', { lines: 2 }));
}
exports.main = main;
var isInitCommand = argv.filter(function (command) { return init_1.initHelpers.includes(command); }).length;
var moreInfo = help_1.moreInfoHelpers.includes(argv[1] || argv[2]);
if (help_1.helpHelpers.includes(argv[0]))
    (0, help_1.help)(!moreInfo ? argv[1] : undefined, moreInfo);
else {
    if (config && isInitCommand) {
        main();
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.info.config.not_need));
    }
    else if (argv.length && !isInitCommand && !config) {
        main();
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.error.config.need));
    }
    else if (!argv.length && !config) {
        main();
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.error.config.need));
    }
    else if (!argv.length && config) {
        main();
        console.log((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, _messages_1.messages.error.no_argv_provide));
    }
    else
        (0, _commands_1.execCommands)(argv);
}
//# sourceMappingURL=main.js.map