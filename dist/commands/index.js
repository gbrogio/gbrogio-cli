"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandsDescription = exports.execCommands = void 0;
var init_1 = require("./init");
var create_1 = require("./create");
var update_1 = require("./update");
function execCommands(commands) {
    if (update_1.updateHelpers.includes(commands[0]))
        return (0, update_1.update)(commands.filter(function (_, i) { return i > 0; }));
    if (create_1.createHelpers.includes(commands[0]))
        return (0, create_1.create)(commands.filter(function (_, i) { return i > 0; }));
    if (init_1.initHelpers.includes(commands[0]) && commands.length === 1)
        return (0, init_1.init)();
    else if (init_1.initHelpers.includes(commands[0]))
        throw 'The command init must be unique.';
}
exports.execCommands = execCommands;
exports.commandsDescription = [
    init_1.initDescription,
    create_1.createDescription,
    update_1.updateDescription,
];
//# sourceMappingURL=index.js.map