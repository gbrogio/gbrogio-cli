import type { CommandDescription } from 'types/command-description';

import { textInHexColor, textSeparator } from '@services/text-in-color';
import { getMaxLengthFromArray } from '@utils/get-max-length-from-array';
import { colors } from '@colors';

export function getCommandHelp(
  command: CommandDescription,
  utils: {
    maxAliasLength: number;
    maxCommandLength: number;
    identSize: (hidden?: boolean) => string;
  },
  moreInfo?: boolean,
) {
  const commandSpace = Array.from({
    length: utils.maxCommandLength - command.command.length + 3,
  }).join(' ');

  const aliasSpace = Array.from({
    length: utils.maxAliasLength - command.alias.length + 3,
  }).join(' ');

  console.log(
    `• ${command.command}${commandSpace}${textInHexColor(
      colors.alias,
      command.alias,
    )}${aliasSpace}${textInHexColor('gray', command.description)}`,
  );

  if (!moreInfo) return;

  if (command.params_code_line) {
    const maxParamCommandLength = getMaxLengthFromArray(
      command.params_code_line.map(({ code_line }) => code_line),
    );

    console.log(textInHexColor(colors.params, `${utils.identSize()} Params:`));
    command.params_code_line.forEach((param) => {
      const paramCommandSpace = Array.from({
        length: maxParamCommandLength - param.code_line.length + 3,
      }).join(' ');

      console.log(
        `${utils.identSize()}${utils.identSize()} ${
          param.code_line
        }${paramCommandSpace}${textInHexColor(colors.alias, param.alias)}`,
      );
    });
    console.log('\n');
  }

  if (command.questions) {
    console.log(textInHexColor(colors.params, `${utils.identSize()} Questions:`));
    command.questions.forEach((question, i) => {
      console.log(
        `${utils.identSize()}${utils.identSize()} Question (${
          i + 1
        }): ${question.question.replaceAll(
          '\n',
          `\n${utils.identSize(true)}${utils.identSize(true)}${utils.identSize(
            true,
          )} `,
        )}`,
      );
      console.log(`${utils.identSize()}${utils.identSize()} Name: ${question.name}`);
      console.log(
        `${utils.identSize()}${utils.identSize()} Default: ${
          question.default || 'none'
        }`,
      );
      if (i + 1 === command.questions?.length)
        return console.log(`${textSeparator(colors.success)}\n`);
      console.log(
        `${utils.identSize(true)}${utils.identSize(true)} ${textSeparator(
          colors.success,
        )}\n`,
      );
    });
  }
}
