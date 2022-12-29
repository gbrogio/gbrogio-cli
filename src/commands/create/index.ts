import type { CommandDescription } from 'types/command-description';
import { Octokit } from 'octokit';

import { getConfig } from '@configs';
import { regex } from '@utils/regex';
import { getQuestionsInfo } from '@utils/get-questions-info';
import { cloneRepository, CloneRepositoryProps } from './utils/clode-repository';

import { commander } from '@services/commander';

import { packageManagers, questions } from './questions';
import { ghpTokenHelpers } from '@commands/update';

const githubApi = new Octokit();
const getBranchesApi = githubApi.rest.repos.listBranches;
const config = getConfig();

export async function create(commands: string[]) {
  const branches = (
    await getBranchesApi({
      owner: config!.user.owner,
      repo: config!.user.repo,
      headers: { authorization: `Bearer ${config?.user.ghp_token}` || undefined },
    })
  ).data.map((branch) => branch.name);

  if (commands.length < 1)
    return commander(questions(branches)).then(async (data) =>
      cloneRepository(data as CloneRepositoryProps),
    );

  let branch: string | undefined;
  let package_manager: string | undefined;
  let directory: string | undefined;
  let repository: string | undefined;

  commands.forEach((command, i) => {
    if (branchHelpers.includes(command))
      if (branches.includes(commands[i + 1])) branch = commands[i + 1];

    if (repositoryHelpers.includes(command))
      if (regex.urlGithub.exec(commands[i + 1])) repository = commands[i + 1];

    if (packageManagerHelpers.includes(command))
      if (packageManagers.includes(commands[i + 1]))
        package_manager = commands[i + 1];

    if (
      regex.directoryPath.exec(commands[commands.length - 1]) ||
      commands[commands.length - 1] === '.' ||
      commands[commands.length - 1] === './'
    )
      directory = commands[commands.length - 1];
  });
  return commander(
    questions(branches, {
      branch,
      package_manager,
      directory,
      remove_git: directory || branch ? false : true,
    }),
  ).then((data) =>
    cloneRepository({
      repository,
      branch: data.branch || branch,
      directory: data.directory || directory,
      package_manager: data.package_manager || package_manager,
      remove_git: directory || branch ? false : true,
    } as CloneRepositoryProps),
  );
}

export const branchHelpers = ['--branch', '-b'];
export const packageManagerHelpers = ['--package_manager', '-pm'];
export const repositoryHelpers = ['--repository', '-rp'];
export const createHelpers = ['create', 'c'];

export const createDescription: CommandDescription = {
  command: createHelpers[0],
  alias: createHelpers[1],
  description: 'Initialize creation of new project from template repository.',
  params_code_line: [
    { code_line: branchHelpers[0], alias: branchHelpers[1] },
    { code_line: ghpTokenHelpers[0], alias: ghpTokenHelpers[1] },
    { code_line: repositoryHelpers[0], alias: repositoryHelpers[1] },
    { code_line: packageManagerHelpers[0], alias: packageManagerHelpers[1] },
  ],
  questions: getQuestionsInfo(questions([])).map((infos) => ({
    ...infos,
    default:
      infos.name === 'directory'
        ? 'Current directory'
        : infos.name === 'package_manager'
        ? 'npm'
        : 'none',
  })),
};
