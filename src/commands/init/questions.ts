import type { Question } from '@services/commander';

import { regex } from '@utils/regex';
import { textInHexColor } from '@services/text-in-color';

import { colors } from '@colors';
import { messages } from '@messages';
import { getConfig } from '@configs';

const config = getConfig();

export const questions: Question[] = [
  {
    type: 'input',
    name: 'access_token',
    message: `(OPTIONAL) Your GitHub access_token (e.g. ghp_*****).\n${textInHexColor(
      'gray',
      ' -> You only need this if you are using a private_repository as a template.\n -> ',
    )}${messages.info.cli.more_info}:`,
    default: config?.user.ghp_token,
    validate: (token: string) => {
      try {
        if (!token.length) return true;
        if (regex.accessToken.exec(token)) return true;
        throw 'invalid';
      } catch {
        return textInHexColor(colors.error, messages.error.fields.ghp_token);
      }
    },
  },
  {
    type: 'input',
    name: 'repository',
    message: `(OPTIONAL) Your GitHub templates repository (e.g. https://github.com/<username>/<repo>).\n${textInHexColor(
      'gray',
      ' -> By default is used we default template.\n -> ',
    )}${messages.info.cli.more_info}:`,
    default: config?.user.repository,
    validate: async (url: string) => {
      try {
        const urlFormatted = url.replace('.git', '');
        if (!urlFormatted.length) return true;
        if (regex.urlGithub.exec(urlFormatted)) return true;
        throw 'invalid';
      } catch {
        throw `${textInHexColor(
          colors.error,
          messages.error.fields.gh_repository_url,
        )}`;
      }
    },
  },
];
