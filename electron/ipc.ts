import { IpcMainInvokeEvent } from "electron";
import ytsr from "ytsr";
import ytdl from "ytdl-core";
import audioServer from "./audioServer";

let usedPort: number;

interface IIpc {
    [key: string]: (e: IpcMainInvokeEvent, args: any) => any;
}

export default {
    video_search: async (e, arg: string) => {
        try {
            if (!arg) return;

            const searchResult = await ytsr(arg, {
                pages: 1,
            });

            return searchResult.items;
        } catch (err) {
            console.error(err);
        }
    },
    audio_server_start: () => {
        if (!usedPort) {
            const port = audioServer();
            usedPort = port;
        }

        return usedPort;
    },
    get_video_info: async (e, videoUrl: string) => {
        try {
            return await ytdl.getInfo(videoUrl);
        } catch (err) {
            console.error(err);
        }
    },
} as IIpc;
