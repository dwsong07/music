import { ipcMain } from "electron";
import ytsr from "ytsr";

export default function () {
    ipcMain.on("YTDL_VIDEO_SEARCH", async (e, text: string) => {
        const searchResult = await ytsr(text, {
            pages: 1,
        });

        e.reply("YTDL_VIDEO_SEARCH_REPLY", searchResult);
    });
}
