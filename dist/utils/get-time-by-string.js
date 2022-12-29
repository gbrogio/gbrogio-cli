"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeByString = void 0;
var timeTable = {
    y: function () { return timeTable.d() * 365; },
    mt: function () { return timeTable.d() * 30; },
    d: function () { return timeTable.h() * 24; },
    h: function () { return timeTable.m() * 60; },
    m: function () { return timeTable.s() * 60; },
    s: function () { return timeTable.ms() * 1000; },
    ms: function () { return 1; },
};
function getTimeByString(time, resType) {
    var _a = [
        +time.replace(/\D+/g, ''),
        time.replace(/\d+/g, ''),
    ], timeNumber = _a[0], timeMultiplier = _a[1];
    var timeInMiliSecond = timeNumber * timeTable[timeMultiplier]();
    var timeResponse = timeInMiliSecond / timeTable[resType || 's']();
    return timeResponse;
}
exports.getTimeByString = getTimeByString;
//# sourceMappingURL=get-time-by-string.js.map