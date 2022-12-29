export function getCredentialFromGithubRepoURL(url: string): [string, string] {
  const [owner, repo] = url.replace('https://github.com/', '').split('/');
  return [owner, repo];
}
