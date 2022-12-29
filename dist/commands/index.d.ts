import type { CommandDescription } from '../types/command-description';
export declare function execCommands(commands: string[]): Promise<void> | undefined;
export declare const commandsDescription: CommandDescription[];
