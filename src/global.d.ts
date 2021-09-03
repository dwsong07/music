declare global {
    interface Window {
        electronApi: {
            invoke: (channel: string, arg?: any) => any;
            receive: (channel: string, callback: (arg: any) => any) => void;
        };
    }
}

export {};
