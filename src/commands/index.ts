import type { CommandDescription } from 'types/command-description';

import { init, initHelpers, initDescription } from './init';

import { create, createHelpers, createDescription } from './create';

import { update, updateHelpers, updateDescription } from './update';

export function execCommands(commands: string[]) {
  if (updateHelpers.includes(commands[0]))
    return update(commands.filter((_, i) => i > 0));

  if (createHelpers.includes(commands[0]))
    return create(commands.filter((_, i) => i > 0));

  if (initHelpers.includes(commands[0]) && commands.length === 1) return init();
  else if (initHelpers.includes(commands[0]))
    throw 'The command init must be unique.';
}

export const commandsDescription: CommandDescription[] = [
  initDescription,
  createDescription,
  updateDescription,
];
