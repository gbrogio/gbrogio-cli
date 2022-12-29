#!/usr/bin/env node
import { figletPrimary } from '@services/figlet';
import { textSeparator, textInHexColor } from '@services/text-in-color';

import { colors } from '@colors';
import { messages } from '@messages';

import { getConfig } from '@configs';
import { getArgv } from '@configs/argv';

import { execCommands } from '@commands';
import { initHelpers } from '@commands/init';
import { help, helpHelpers, moreInfoHelpers } from '@commands/help';

const config = getConfig();
const argv = getArgv();

export function main() {
  console.clear();
  console.log(textInHexColor(colors.primary, figletPrimary(messages.info.cli.name)));
  console.log(textSeparator('hidden', { lines: 6 }));

  console.log(textInHexColor(colors.success, messages.info.cli.description));
  console.log(textSeparator('hidden', { lines: 2 }));
}

const isInitCommand = argv.filter((command) => initHelpers.includes(command)).length;
const moreInfo = moreInfoHelpers.includes(argv[1] || argv[2]);

if (helpHelpers.includes(argv[0])) help(!moreInfo ? argv[1] : undefined, moreInfo);
else {
  if (config && isInitCommand) {
    main();
    console.log(textInHexColor(colors.error, messages.info.config.not_need));
  } else if (argv.length && !isInitCommand && !config) {
    main();
    console.log(textInHexColor(colors.error, messages.error.config.need));
  } else if (!argv.length && !config) {
    main();
    console.log(textInHexColor(colors.error, messages.error.config.need));
  } else if (!argv.length && config) {
    main();
    console.log(textInHexColor(colors.error, messages.error.no_argv_provide));
  } else execCommands(argv);
}
