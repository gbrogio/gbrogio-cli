import { configPath, type Config } from '@configs';

import fs from 'fs';
import ini from 'ini';

import { messages } from '@messages';
import { textInHexColor } from '@services/text-in-color';

export function createConfigFile(data: { user: Config['user'] } | 'invalid') {
  if (data === 'invalid') throw data;
  console.log(textInHexColor('gray', messages.info.config.create));
  fs.writeFileSync(configPath, ini.stringify(data, { whitespace: true }));
  console.log(
    textInHexColor(
      'gray',
      `${messages.info.config.created}\n${messages.info.cli.more_info}`,
    ),
  );
}
