import { IpcMainInvokeEvent } from "electron";
import ytsr from "ytsr";

interface IIpc {
    [key: string]: (e: IpcMainInvokeEvent, args: any) => any;
}

export default {
    "video_search": async (e, arg: string) => {
        try {
            if (!arg) return;

            const searchResult = await ytsr(arg, {
                pages: 1,
            });

            return searchResult.items;
        } catch (err) {
            console.error(err);
        }
    }
} as IIpc;