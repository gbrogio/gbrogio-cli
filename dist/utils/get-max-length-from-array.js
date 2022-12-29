"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxLengthFromArray = void 0;
function getMaxLengthFromArray(arr) {
    return arr.reduce(function (acc, item) {
        return acc < item.length ? item.length : acc;
    }, -Infinity);
}
exports.getMaxLengthFromArray = getMaxLengthFromArray;
//# sourceMappingURL=get-max-length-from-array.js.map