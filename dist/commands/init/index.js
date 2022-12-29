"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDescription = exports.initHelpers = exports.init = void 0;
var get_user_credentials_1 = require("./utils/get-user-credentials");
var _colors_1 = require("../../colors/index");
var index_1 = require("../../messages/index");
var commander_1 = require("../../services/commander");
var text_in_color_1 = require("../../services/text-in-color");
var get_questions_info_1 = require("../../utils/get-questions-info");
var questions_1 = require("./questions");
var create_config_file_1 = require("./utils/create-config-file");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            console.log((0, text_in_color_1.textInHexColor)('gray', index_1.messages.info.config.create));
            return [2, (0, commander_1.commander)(questions_1.questions)
                    .then(function (data) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2, (0, get_user_credentials_1.getUserCredentials)(data)];
                }); }); })
                    .then(function (data) { return (0, create_config_file_1.createConfigFile)(data); })
                    .catch(function () {
                    console.log("\n\n".concat((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, index_1.messages.error.fields.gh_repository_url), "\n").concat((0, text_in_color_1.textInHexColor)(_colors_1.colors.error, index_1.messages.error.fields.ghp_token)));
                })];
        });
    });
}
exports.init = init;
exports.initHelpers = ['--init', '-i'];
exports.initDescription = {
    command: exports.initHelpers[0],
    alias: exports.initHelpers[1],
    description: 'Initialize creation of the config file for cli works.',
    questions: (0, get_questions_info_1.getQuestionsInfo)(questions_1.questions),
};
//# sourceMappingURL=index.js.map