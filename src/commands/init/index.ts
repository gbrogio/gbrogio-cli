import type { Config } from '@configs';
import type { CommandDescription } from 'types/command-description';
import { getUserCredentials, type InitAnswers } from './utils/get-user-credentials';

import { colors } from '@colors';
import { messages } from '@messages/index';
import { commander } from '@services/commander';
import { textInHexColor } from '@services/text-in-color';
import { getQuestionsInfo } from '@utils/get-questions-info';

import { questions } from './questions';
import { createConfigFile } from './utils/create-config-file';

export async function init() {
  console.log(textInHexColor('gray', messages.info.config.create));
  return commander(questions)
    .then(
      async (data): Promise<{ user: Config['user'] } | 'invalid'> =>
        getUserCredentials(data as InitAnswers),
    )
    .then((data) => createConfigFile(data))
    .catch(() => {
      console.log(
        `\n\n${textInHexColor(
          colors.error,
          messages.error.fields.gh_repository_url,
        )}\n${textInHexColor(colors.error, messages.error.fields.ghp_token)}`,
      );
    });
}

export const initHelpers = ['--init', '-i'];

export const initDescription: CommandDescription = {
  command: initHelpers[0],
  alias: initHelpers[1],
  description: 'Initialize creation of the config file for cli works.',
  questions: getQuestionsInfo(questions),
};
