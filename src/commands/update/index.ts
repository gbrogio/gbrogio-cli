import type { CommandDescription } from 'types/command-description';

import { colors } from '@colors';
import { messages } from '@messages';

import { regex } from '@utils/regex';
import { getConfig } from '@configs';
import { textInHexColor } from '@services/text-in-color';
import { getQuestionsInfo } from '@utils/get-questions-info';

import { init } from '../init';
import { createConfigFile } from '../init/utils/create-config-file';
import { getUserCredentials } from '../init/utils/get-user-credentials';
import { questions as initQuestions } from '../init/questions';

const config = getConfig()!;

export async function update(commands: string[]) {
  if (commands.length < 1) init();

  let repository: string | undefined;
  let ghp_token: string | undefined;
  let error: boolean | undefined;

  commands.forEach((command, i) => {
    if (repositoryHelpers.includes(command))
      if (regex.urlGithub.exec(commands[i + 1])) repository = commands[i + 1];
      else {
        error = true;
        console.log(
          textInHexColor(colors.error, messages.error.fields.gh_repository_url),
        );
      }
    if (ghpTokenHelpers.includes(command))
      if (regex.accessToken.exec(commands[i + 1])) ghp_token = commands[i + 1];
      else {
        error = true;
        console.log(textInHexColor(colors.error, messages.error.fields.ghp_token));
      }
  });

  if (!error) {
    await getUserCredentials({
      access_token: ghp_token || config.user.ghp_token || '',
      repository: repository || config.user.repository,
    })
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
}

export const repositoryHelpers = ['--repository', '-rp'];
export const ghpTokenHelpers = ['--ghp_token', '-ght'];
export const updateHelpers = ['update', 'u'];

export const updateDescription: CommandDescription = {
  command: updateHelpers[0],
  alias: updateHelpers[1],
  description: 'Initialize update of the config file.',
  params_code_line: [
    { code_line: ghpTokenHelpers[0], alias: ghpTokenHelpers[1] },
    { code_line: repositoryHelpers[0], alias: repositoryHelpers[1] },
  ],
  questions: getQuestionsInfo(initQuestions).map((infos, i) => ({
    ...infos,
    default: i === 0 ? 'config.user.ghp_token' : 'config.user.repository',
  })),
};
