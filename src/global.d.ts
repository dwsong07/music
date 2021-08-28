import ytsr from "ytsr";

declare global {
    interface Window {
        electronApi: {
            search: (str: string) => ytsr.Result;
        };
    }
}

export {};
