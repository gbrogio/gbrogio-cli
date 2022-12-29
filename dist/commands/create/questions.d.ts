import type { Question } from '../../services/commander';
export declare const packageManagers: string[];
export declare const questions: (branches: string[], options?: {
    branch?: string;
    package_manager?: string;
    directory?: string;
    remove_git?: boolean;
}) => Question[];
