import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import ytdl from "ytdl-core";
import { useStore } from "../stores";

interface PlayerProps {
    videoUrl: string;
}

interface videoInfoType {
    title: string;
    author: string;
}

function Player({ videoUrl }: PlayerProps) {
    const {
        audioStore: { port },
    } = useStore();

    const [videoInfo, setVideoInfo] = useState<videoInfoType>();

    const audio = new Audio(`http://localhost:${port}/?video_url=${videoUrl}`);

    useEffect(() => {
        const getInfo = async () => {
            const info: ytdl.videoInfo = await window.electronApi.invoke(
                "get_video_info",
                videoUrl
            );
            console.log(info);
            setVideoInfo({
                title: info.videoDetails.title,
                author: info.videoDetails.author.name,
            });
        };

        getInfo();
    }, [videoUrl]);

    const onPlayClick = () => {
        if (audio?.paused) {
            audio?.play();
        } else {
            audio?.pause();
        }
    };

    return (
        <div>
            <button onClick={onPlayClick}>Play/pause</button>
            <span>{videoInfo?.title}</span>
            <span>{videoInfo?.author}</span>
        </div>
    );
}

export default observer(Player);
