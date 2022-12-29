import os from 'os';
import fs from 'fs';
import ini from 'ini';

export type Config = {
  user: {
    ghp_token: string | null;
    repository: string;
    owner: string;
    repo: string;
  };
};

const rootDir = os.homedir();
export const templatesRepository = 'https://github.com/gbrogio/templates';
export const configPath = `${rootDir}/.gbrogiorc`;
export function getConfig() {
  let config: Config | undefined;

  if (fs.existsSync(configPath)) {
    config = ini.parse(fs.readFileSync(configPath, 'utf-8')) as Config;
  }

  return config;
}
