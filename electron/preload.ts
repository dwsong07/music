import { contextBridge, ipcRenderer } from "electron";
import ipc from "./ipc";

export const api = {
    invoke: async (channel: string, arg: any) => {
        const validChannels = Object.keys(ipc);

        if (validChannels.includes(channel)) {
            return await ipcRenderer.invoke(channel, arg);
        }
    },
    receive: (channel: string, callback: (arg: any) => any) => {
        const validChannels: string[] = [];

        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, arg) => {
                callback(arg);
            });
        }
    },
};

contextBridge.exposeInMainWorld("electronApi", api);
