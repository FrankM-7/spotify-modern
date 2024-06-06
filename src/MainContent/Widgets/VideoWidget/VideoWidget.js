import './VideoWidget.css';
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';

function VideoWidget({style, current_track}) {
    const [videoID, setVideoID] = useState('');

    useEffect(() => {
        // fetch
        const search = async () => {
            const response = await fetch('/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: current_track.name,
                }),
            });

            const json = await response.json();
            // console.log(json);
            setVideoID(json[0].id.videoId);
        }
        search();

        console.log(current_track);

    }, [current_track.id]);

    return (
        <div className="video-widget" style={style}>
            <ReactPlayer
                url={"https://www.youtube.com/embed/" + videoID}
                playing={true}
                muted={true}
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}

export default VideoWidget;