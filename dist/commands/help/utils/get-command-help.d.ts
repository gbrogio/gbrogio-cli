import type { CommandDescription } from '../../../types/command-description';
export declare function getCommandHelp(command: CommandDescription, utils: {
    maxAliasLength: number;
    maxCommandLength: number;
    identSize: (hidden?: boolean) => string;
}, moreInfo?: boolean): void;
