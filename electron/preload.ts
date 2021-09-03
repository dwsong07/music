import { contextBridge, ipcRenderer } from "electron";

export const api = {
    invoke: async (channel: string, arg: any) => {
        const validChannels = ["video_search", "audio_server_start"];

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
