import { Octokit } from 'octokit';
import { templatesRepository } from '@configs';
import { getCredentialFromGithubRepoURL } from '@utils/get-credentials-from-github-repo-url';

const githubApi = new Octokit();

export type InitAnswers = {
  access_token: string;
  repository: string;
};

export async function getUserCredentials(data: InitAnswers) {
  const gh_access_token = data['access_token'];
  const repositoryUrl = data['repository'].length
    ? data['repository'].replace('.git', '')
    : null;
  const repository = repositoryUrl || templatesRepository;
  const [owner, repo] = getCredentialFromGithubRepoURL(repository);

  if (!repositoryUrl) return { user: { ghp_token: null, repository, owner, repo } };

  const response = await githubApi.rest.repos
    .get({
      owner,
      repo,
      headers: { authorization: `Bearer ${gh_access_token}` },
    })
    .then((r) => r)
    .catch((e) => e);

  if (response.status !== 200) return 'invalid' as const;
  return { user: { ghp_token: gh_access_token, repository, owner, repo } };
}
