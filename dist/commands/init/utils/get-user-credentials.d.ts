export type InitAnswers = {
    access_token: string;
    repository: string;
};
export declare function getUserCredentials(data: InitAnswers): Promise<"invalid" | {
    user: {
        ghp_token: null;
        repository: string;
        owner: string;
        repo: string;
    };
} | {
    user: {
        ghp_token: string;
        repository: string;
        owner: string;
        repo: string;
    };
}>;
