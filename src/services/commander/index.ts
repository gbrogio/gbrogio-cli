import type { Answers, DistinctQuestion } from 'inquirer';
import inquirer from 'inquirer';

export const commander = inquirer.createPromptModule();

export type Question = DistinctQuestion<Answers>;
