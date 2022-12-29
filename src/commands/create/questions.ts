import type { Question } from '@services/commander';

import fs from 'fs';
import { regex } from '@utils/regex';
import { textInHexColor } from '@services/text-in-color';

import { colors } from '@colors';
import { messages } from '@messages';

export const packageManagers = ['pnpm', 'npm', 'yarn'];

export const questions: (
  branches: string[],
  options?: {
    branch?: string;
    package_manager?: string;
    directory?: string;
    remove_git?: boolean;
  },
) => Question[] = (branches, options) =>
  [
    !options?.branch
      ? {
          type: 'list',
          name: 'branch',
          message: 'Select one branch to clone:',
          choices: branches,
        }
      : undefined,
    !options?.directory
      ? {
          type: 'input',
          name: 'directory',
          message: `(OPTIONAL) Path to clone your template (e.g. "gbrogio/project-name", "project-name", ".")\n${textInHexColor(
            'gray',
            'By default we are use "." directory:',
          )}`,
          default: '.',
          validate: (directory: string) => {
            const directoryFormatted = directory.startsWith('/')
              ? directory.substring(1)
              : directory;

            if (directoryFormatted === '.' || directoryFormatted === './')
              return true;
            if (regex.directoryPath.exec(directoryFormatted)) {
              if (fs.existsSync(directoryFormatted))
                return textInHexColor(
                  colors.error,
                  messages.error.fields.directory.exists,
                );
              return true;
            }
            return textInHexColor(
              colors.error,
              messages.error.fields.directory.invalid,
            );
          },
        }
      : undefined,
    !options?.package_manager
      ? {
          type: 'list',
          name: 'package_manager',
          message: 'Select your package manager:',
          choices: packageManagers,
          default: 'npm',
        }
      : undefined,
    options?.remove_git === undefined
      ? {
          type: 'confirm',
          name: 'remove_git',
          message: 'Do you want to remove git folder:',
          default: false,
        }
      : undefined,
  ].filter((question) => (question ? true : false)) as Question[];
