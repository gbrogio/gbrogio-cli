declare const timeTable: {
    y: () => number;
    mt: () => number;
    d: () => number;
    h: () => number;
    m: () => number;
    s: () => number;
    ms: () => number;
};
export declare function getTimeByString(time: string, resType?: keyof typeof timeTable): number;
export {};
