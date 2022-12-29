"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgv = void 0;
function getArgv() {
    return process.argv.filter(function (_, i) { return i > 1; });
}
exports.getArgv = getArgv;
//# sourceMappingURL=argv.js.map