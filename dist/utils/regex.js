"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = void 0;
exports.regex = {
    directoryPath: /^((.?[\/]){0,1}\w+[-]*\w+)+(\/?){1}$|^([\/]{1})$/i,
    accessToken: /^ghp_\w+$/,
    urlGithub: /^(https:\/\/github.com)\/(\w+(-)?)+\/(\w+(-)?)+(\/)?$/,
    email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,
};
//# sourceMappingURL=regex.js.map