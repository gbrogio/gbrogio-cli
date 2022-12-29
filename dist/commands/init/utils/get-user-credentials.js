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
exports.getUserCredentials = void 0;
var octokit_1 = require("octokit");
var _configs_1 = require("../../../configs/index");
var get_credentials_from_github_repo_url_1 = require("../../../utils/get-credentials-from-github-repo-url");
var githubApi = new octokit_1.Octokit();
function getUserCredentials(data) {
    return __awaiter(this, void 0, void 0, function () {
        var gh_access_token, repositoryUrl, repository, _a, owner, repo, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    gh_access_token = data['access_token'];
                    repositoryUrl = data['repository'].length
                        ? data['repository'].replace('.git', '')
                        : null;
                    repository = repositoryUrl || _configs_1.templatesRepository;
                    _a = (0, get_credentials_from_github_repo_url_1.getCredentialFromGithubRepoURL)(repository), owner = _a[0], repo = _a[1];
                    if (!repositoryUrl)
                        return [2, { user: { ghp_token: null, repository: repository, owner: owner, repo: repo } }];
                    return [4, githubApi.rest.repos
                            .get({
                            owner: owner,
                            repo: repo,
                            headers: { authorization: "Bearer ".concat(gh_access_token) },
                        })
                            .then(function (r) { return r; })
                            .catch(function (e) { return e; })];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200)
                        return [2, 'invalid'];
                    return [2, { user: { ghp_token: gh_access_token, repository: repository, owner: owner, repo: repo } }];
            }
        });
    });
}
exports.getUserCredentials = getUserCredentials;
//# sourceMappingURL=get-user-credentials.js.map