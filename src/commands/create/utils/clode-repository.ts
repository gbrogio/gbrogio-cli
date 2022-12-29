import { colors } from '@colors';
import { getConfig } from '@configs';
import { getCredentialFromGithubRepoURL } from '@utils/get-credentials-from-github-repo-url';

import { terminal } from '@services/terminal';
import { textInHexColor, textSeparator } from '@services/text-in-color';

const config = getConfig();

export type CloneRepositoryProps = {
  repository: string | undefined;
  branch: string;
  package_manager: string;
  directory: string;
  remove_git: boolean;
};

export function cloneRepository(data: CloneRepositoryProps) {
  const { branch, directory, package_manager, remove_git, repository } = data;
  const credentials = repository
    ? getCredentialFromGithubRepoURL(repository)
    : undefined;

  const directoryFormatted = directory.startsWith('./')
    ? directory.substring(2)
    : directory.startsWith('/') || directory === '.'
    ? directory.substring(1)
    : directory;

  console.log(textSeparator('hidden', { lines: 2 }));

  console.log(textSeparator(colors.success));
  terminal.cd(directoryFormatted);
  console.log(textSeparator('hidden'));

  console.log(textSeparator(colors.success));
  terminal.echo(textInHexColor('gray', 'cloning repository...'));
  if (!config?.user.ghp_token)
    terminal.exec(`git clone -b ${branch} ${repository || config?.user.repository}`);
  else
    terminal.exec(
      `git clone -b ${branch} https://${config.user.ghp_token}@github.com/${
        credentials?.[0] || config.user.owner
      }/${credentials?.[1] || config.user.repo}.git .`,
    );
  console.log(textSeparator('hidden'));

  if (remove_git) terminal.rm('-rf', '.git/');

  console.log(textSeparator(colors.success));
  terminal.echo(textInHexColor('gray', 'Installing dependencies...'));
  terminal.exec(
    package_manager === 'yarn' ? package_manager : `${package_manager} i`,
  );
  console.log(textSeparator('hidden'));

  console.log(textSeparator(colors.success));
  terminal.echo(textInHexColor('gray', 'Start vscode...'));
  terminal.exec('code .');
}
