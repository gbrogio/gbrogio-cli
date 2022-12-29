export type CommandDescription = {
  command: string;
  alias: string;
  description: string;
  params_code_line?: { code_line: string; alias: string }[];
  questions?: {
    name: string;
    question: string;
    default?: string;
  }[];
};
