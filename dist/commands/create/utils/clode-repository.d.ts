export type CloneRepositoryProps = {
    repository: string | undefined;
    branch: string;
    package_manager: string;
    directory: string;
    remove_git: boolean;
};
export declare function cloneRepository(data: CloneRepositoryProps): void;
