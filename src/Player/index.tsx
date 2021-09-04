import { observer } from "mobx-react";
import { useStore } from "../stores";

interface PlayerProps {
    videoUrl: string;
}

function Player({ videoUrl }: PlayerProps) {
    const {
        audioStore: { port },
    } = useStore();

    return (
        <div>
            <audio
                src={`http://localhost:${port}/?video_url=${videoUrl}`}
                controls
            />
        </div>
    );
}

export default observer(Player);
