export type Config = {
    user: {
        ghp_token: string | null;
        repository: string;
        owner: string;
        repo: string;
    };
};
export declare const templatesRepository = "https://github.com/gbrogio/templates";
export declare const configPath: string;
export declare function getConfig(): Config | undefined;
