"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
var _colors_1 = require("../colors/index");
var text_in_color_1 = require("../services/text-in-color");
var help = 'See "--help" or "-h <command> --more" for more info.';
exports.messages = {
    error: {
        no_argv_provide: "Error: You need pass some arg. ".concat(help),
        fields: {
            name: 'Error: Please type a username.',
            email: 'Error: Please type a valid email format.',
            ghp_token: 'Error: Please type a valid GitHub access_token (e.g. ghp_***)',
            gh_repository_url: 'Error: Please type a valid github repository url',
            directory: {
                exists: 'Error: Please type a unused path.',
                invalid: 'Error: Please type a valid directory (e.g. path/to/project)',
            },
        },
        config: {
            need: "Error: You need initialize the cli. ".concat(help),
        },
    },
    info: {
        cli: {
            name: 'GBrogio CLI',
            description: "-> Improve your code velocity with this simple cli.\n-> Getting project template from (GITHUB).\n\n\u2022 Type \"--init\" or \"-i\" for initialize.\n\u2022 ".concat(help),
            more_info: "".concat((0, text_in_color_1.textInHexColor)('gray', 'See more in'), " ").concat((0, text_in_color_1.textInHexColor)(_colors_1.colors.primary, 'https://github.com/gbrogio/cli/readme')),
        },
        config: {
            create: 'Start create the config file (~/.gbrogiorc)...',
            created: '.gbrogiorc config file have been create successfully.',
            not_need: "You already have a config file. ".concat(help),
        },
    },
};
//# sourceMappingURL=index.js.map