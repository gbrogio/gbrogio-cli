"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectValueByString = void 0;
function getObjectValueByString(obj, path) {
    var keys = path.split('.');
    if (keys.length > 1) {
        var value = obj;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!(value === null || value === void 0 ? void 0 : value[key])) {
                value = undefined;
                break;
            }
            value = value === null || value === void 0 ? void 0 : value[key];
        }
        return value;
    }
    return obj === null || obj === void 0 ? void 0 : obj[keys[0]];
}
exports.getObjectValueByString = getObjectValueByString;
//# sourceMappingURL=get-object-value-by-string.js.map