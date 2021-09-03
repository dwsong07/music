interface PlayerProps {
    videoUrl: string;
    audioPort: number;
}

function Player({ videoUrl, audioPort }: PlayerProps) {
    return (
        <div>
            <audio
                src={`http://localhost:${audioPort}/?video_url=${videoUrl}`}
                controls
            />
        </div>
    );
}

export default Player;
