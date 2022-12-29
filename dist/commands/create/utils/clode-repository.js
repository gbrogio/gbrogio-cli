"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneRepository = void 0;
var _colors_1 = require("../../../colors/index");
var _configs_1 = require("../../../configs/index");
var get_credentials_from_github_repo_url_1 = require("../../../utils/get-credentials-from-github-repo-url");
var terminal_1 = require("../../../services/terminal");
var text_in_color_1 = require("../../../services/text-in-color");
var config = (0, _configs_1.getConfig)();
function cloneRepository(data) {
    var branch = data.branch, directory = data.directory, package_manager = data.package_manager, remove_git = data.remove_git, repository = data.repository;
    var credentials = repository
        ? (0, get_credentials_from_github_repo_url_1.getCredentialFromGithubRepoURL)(repository)
        : undefined;
    var directoryFormatted = directory.startsWith('./')
        ? directory.substring(2)
        : directory.startsWith('/') || directory === '.'
            ? directory.substring(1)
            : directory;
    console.log((0, text_in_color_1.textSeparator)('hidden', { lines: 2 }));
    console.log((0, text_in_color_1.textSeparator)(_colors_1.colors.success));
    terminal_1.terminal.cd(directoryFormatted);
    console.log((0, text_in_color_1.textSeparator)('hidden'));
    console.log((0, text_in_color_1.textSeparator)(_colors_1.colors.success));
    terminal_1.terminal.echo((0, text_in_color_1.textInHexColor)('gray', 'cloning repository...'));
    if (!(config === null || config === void 0 ? void 0 : config.user.ghp_token))
        terminal_1.terminal.exec("git clone -b ".concat(branch, " ").concat(repository || (config === null || config === void 0 ? void 0 : config.user.repository)));
    else
        terminal_1.terminal.exec("git clone -b ".concat(branch, " https://").concat(config.user.ghp_token, "@github.com/").concat((credentials === null || credentials === void 0 ? void 0 : credentials[0]) || config.user.owner, "/").concat((credentials === null || credentials === void 0 ? void 0 : credentials[1]) || config.user.repo, ".git ."));
    console.log((0, text_in_color_1.textSeparator)('hidden'));
    if (remove_git)
        terminal_1.terminal.rm('-rf', '.git/');
    console.log((0, text_in_color_1.textSeparator)(_colors_1.colors.success));
    terminal_1.terminal.echo((0, text_in_color_1.textInHexColor)('gray', 'Installing dependencies...'));
    terminal_1.terminal.exec(package_manager === 'yarn' ? package_manager : "".concat(package_manager, " i"));
    console.log((0, text_in_color_1.textSeparator)('hidden'));
    console.log((0, text_in_color_1.textSeparator)(_colors_1.colors.success));
    terminal_1.terminal.echo((0, text_in_color_1.textInHexColor)('gray', 'Start vscode...'));
    terminal_1.terminal.exec('code .');
}
exports.cloneRepository = cloneRepository;
//# sourceMappingURL=clode-repository.js.map