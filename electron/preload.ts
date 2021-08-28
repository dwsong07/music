import { contextBridge, ipcRenderer } from "electron";

export const api = {
    search: (str: string) =>
        new Promise((resolve) => {
            ipcRenderer.send("YTDL_VIDEO_SEARCH", str);
            ipcRenderer.once("YTDL_VIDEO_SEARCH_REPLY", (e, result) => {
                resolve(result);
            });
        }),
};

contextBridge.exposeInMainWorld("electronApi", api);
