import { colors } from '@colors';
import { textInHexColor } from '@services/text-in-color';

const help = 'See "--help" or "-h <command> --more" for more info.';

export const messages = {
  error: {
    no_argv_provide: `Error: You need pass some arg. ${help}`,
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
      need: `Error: You need initialize the cli. ${help}`,
    },
  },
  info: {
    cli: {
      name: 'GBrogio CLI',
      description: `-> Improve your code velocity with this simple cli.\n-> Getting project template from (GITHUB).\n\n• Type "--init" or "-i" for initialize.\n• ${help}`,
      more_info: `${textInHexColor('gray', 'See more in')} ${textInHexColor(
        colors.primary,
        'https://github.com/gbrogio/cli/readme',
      )}`,
    },
    config: {
      create: 'Start create the config file (~/.gbrogiorc)...',
      created: '.gbrogiorc config file have been create successfully.',
      not_need: `You already have a config file. ${help}`,
    },
  },
};
