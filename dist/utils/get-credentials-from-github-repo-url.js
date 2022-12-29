"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentialFromGithubRepoURL = void 0;
function getCredentialFromGithubRepoURL(url) {
    var _a = url.replace('https://github.com/', '').split('/'), owner = _a[0], repo = _a[1];
    return [owner, repo];
}
exports.getCredentialFromGithubRepoURL = getCredentialFromGithubRepoURL;
//# sourceMappingURL=get-credentials-from-github-repo-url.js.map