import express from "express";
import { AddressInfo } from "net";
import ytdl from "ytdl-core";
import cors from "cors";

export default function () {
    const app = express();

    app.use(cors());

    app.get("/", (req, res) => {
        const videoUrl = req.query.video_url as string;

        if (!videoUrl) return res.status(400).send("video url is undefined");

        ytdl(decodeURIComponent(videoUrl), { filter: "audioonly" }).pipe(res);
    });

    const listener = app.listen(0, () => {
        // Port 0 means random port number that isn't in use.
        console.log("Audio server listening");
    });

    return (listener.address() as AddressInfo).port;
}
