import shelljs from 'shelljs';
import { textInHexColor } from '../text-in-color';

export const terminal = {
  ...shelljs,
  cd(directory: string) {
    const currentDirectory = process.cwd();
    const directoryFormatted = directory.replace('.', '');
    const finallyPath = `${currentDirectory}/${directoryFormatted}`;

    if (shelljs.cd(finallyPath).stderr?.length) {
      terminal.echo(textInHexColor('gray', 'creating folder...'));
      shelljs.mkdir(finallyPath);
    }
    shelljs.cd(finallyPath);
  },
};
