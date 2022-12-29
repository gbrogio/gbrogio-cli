import { type Config } from '../../../configs/index';
export declare function createConfigFile(data: {
    user: Config['user'];
} | 'invalid'): void;
