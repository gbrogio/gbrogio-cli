import { main } from '@src/main';
import { colors } from '@colors';
import { textInHexColor } from '@services/text-in-color';
import { getMaxLengthFromArray } from '@utils/get-max-length-from-array';

import { commandsDescription } from '..';
import { getCommandHelp } from './utils/get-command-help';

export function help(command?: string, moreInfo?: boolean) {
  main();

  const maxAliasLength = getMaxLengthFromArray(
    commandsDescription.map(({ alias }) => alias),
  );
  const maxCommandLength = getMaxLengthFromArray(
    commandsDescription.map(({ command }) => command),
  );
  const identSize = (hidden?: boolean) =>
    textInHexColor(colors.ident, hidden ? '   ' : '---');

  const commandToGetHelp = commandsDescription.filter(
    (commandDescription) =>
      commandDescription.command === command || commandDescription.alias === command,
  )[0];

  if (commandToGetHelp)
    return getCommandHelp(
      commandToGetHelp,
      { maxAliasLength, maxCommandLength, identSize },
      moreInfo,
    );

  commandsDescription.forEach((commandDescription) => {
    getCommandHelp(
      commandDescription,
      { maxAliasLength, maxCommandLength, identSize },
      moreInfo,
    );
  });
}

export const moreInfoHelpers = ['--more', '-m'];
export const helpHelpers = ['--help', '-h'];
